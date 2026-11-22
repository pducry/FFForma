import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { imageSize } from 'image-size';

export interface Frame {
  src: string;
  w: number;
  h: number;
  media: 'image' | 'video';
}

export type RowKind = 'full' | 'pair' | 'trio' | 'justified' | 'stage';

export interface Row {
  kind: RowKind;
  items: Frame[];
}

const publicDir = path.resolve(process.cwd(), 'public');

type Orient = 'wide' | 'landscape' | 'square' | 'portrait';

function orient(frame: Frame): Orient {
  const ratio = frame.w / frame.h;
  if (ratio >= 1.45) return 'wide';
  if (ratio >= 1.15) return 'landscape';
  if (ratio >= 0.85) return 'square';
  return 'portrait';
}

export function measure(src: string, media: 'image' | 'video' = 'image'): Frame {
  const abs = path.join(publicDir, src.replace(/^\//, ''));
  if (media === 'video') {
    const out = execFileSync(
      'ffprobe',
      ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', abs],
      { encoding: 'utf8' },
    ).trim();
    const [w, h] = out.split(',').map(Number);
    if (!w || !h) throw new Error(`No video size for ${src}`);
    return { src, w, h, media };
  }
  const dim = imageSize(readFileSync(abs));
  if (!dim.width || !dim.height) throw new Error(`No image size for ${src}`);
  return { src, w: dim.width, h: dim.height, media: 'image' };
}

/** Pack frames so every file keeps its own ratio. Wide openers are full-bleed.
 *  Portrait pairs, square trios, and mixed leftovers become rows that share a height. */
export function packFrames(items: Frame[]): Row[] {
  const rows: Row[] = [];
  if (!items.length) return rows;
  if (items.length === 1 && Math.max(items[0].w, items[0].h) < 1000) {
    return [{ kind: 'stage', items }];
  }

  let i = 0;
  if (orient(items[0]) === 'wide') {
    rows.push({ kind: 'full', items: [items[0]] });
    i = 1;
  }

  while (i < items.length) {
    const current = items[i];
    const shape = orient(current);
    const next = items[i + 1];
    const third = items[i + 2];

    if (shape === 'portrait' && next && orient(next) === 'portrait') {
      rows.push({ kind: 'pair', items: [current, next] });
      i += 2;
      continue;
    }
    if (shape === 'square' && next && third && orient(next) === 'square' && orient(third) === 'square') {
      rows.push({ kind: 'trio', items: [current, next, third] });
      i += 3;
      continue;
    }
    if (shape === 'portrait' || (Math.max(current.w, current.h) < 1000 && !next)) {
      rows.push({ kind: 'stage', items: [current] });
      i += 1;
      continue;
    }

    const group = [current];
    while (group.length < 3 && items[i + group.length]) {
      const candidate = items[i + group.length];
      const candidateShape = orient(candidate);
      if (candidateShape === 'portrait') break;
      if (shape === 'wide' && candidateShape === 'square') break;
      group.push(candidate);
      if (group.length === 2 && shape === 'wide' && items.length - i === 2) break;
    }

    if (group.length === 1 && shape === 'wide') rows.push({ kind: 'full', items: group });
    else if (group.length === 1) rows.push({ kind: 'stage', items: group });
    else rows.push({ kind: 'justified', items: group });
    i += group.length;
  }

  return rows;
}
