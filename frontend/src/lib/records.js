// src/lib/records.js
import { IMG, searchMovies } from "./tmdb.js";

/**
 * 레코드 스키마(예상)
 * { id, title, rating, review, createdAt, tmdbId?, poster_path? }
 *
 * getRecords()는 createdAt 내림차순으로 정렬해서 반환
 * 실제 백엔드 연동 시 이 파일만 교체하면 됨.
 */

const posterCache = new Map(); // title or tmdbId -> poster_path

async function resolvePosterPath(rec) {
  if (rec.poster_path) return rec.poster_path;

  const cacheKey = rec.tmdbId ? `id:${rec.tmdbId}` : `title:${rec.title}`;
  if (posterCache.has(cacheKey)) return posterCache.get(cacheKey);

  // tmdbId가 있으면 더 정확하지만, 여기선 title로 fallback
  let found = null;
  try {
    const results = await searchMovies(rec.title);
    found = results?.[0] || null;
  } catch (_) {}

  const path = found?.poster_path || found?.backdrop_path || "";
  posterCache.set(cacheKey, path);
  return path;
}

export async function getRecords() {
  // TODO: 여기를 실제 백엔드로 교체 (e.g., fetch("/api/records").then(r=>r.json()))
  // 데모용 목데이터
  const mock = [
    {
      id: "r3",
      title: "라스트 굿 맨",
      rating: 4.0,
      review: "액션 합이 좋아서 생각보다 재밌게 봄.",
      createdAt: "2025-09-20T14:13:00Z",
      // poster_path: "/abcd.jpg", // 있으면 바로 사용
    },
    {
      id: "r2",
      title: "컨저링: 마지막 의식",
      rating: 3.5,
      review: "공포 연출은 좋은데 스토리는 무난.",
      createdAt: "2025-09-18T21:00:00Z",
    },
    {
      id: "r1",
      title: "우주전쟁",
      rating: 4.5,
      review: "리듬감 훌륭. 사운드가 특히 좋았음.",
      createdAt: "2025-09-10T09:30:00Z",
    },
  ];

  // 최신순 정렬
  mock.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // 포스터 경로 해상
  const withPoster = await Promise.all(
    mock.map(async (rec) => {
      const p = await resolvePosterPath(rec);
      return { ...rec, poster_path: p };
    })
  );

  return withPoster;
}

export function imgUrlFromPosterPath(poster_path) {
  return IMG.w500(poster_path) || IMG.w300(poster_path) || IMG.original(poster_path) || "";
}
