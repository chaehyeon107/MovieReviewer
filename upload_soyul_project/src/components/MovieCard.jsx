import { IMG, movieTitle } from "../lib/tmdb.js";

export default function MovieCard({ movie, onClick }) {
  return (
    <button
      onClick={() => onClick && onClick(movie)}
      className="text-left"
      aria-label={movieTitle(movie)}
    >
      <div className="aspect-[2/3] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
        <img
          src={IMG.w300(movie.poster_path) || IMG.w500(movie.backdrop_path)}
          alt={movieTitle(movie)}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-2 line-clamp-1 text-sm text-neutral-200">{movieTitle(movie)}</div>
    </button>
  );
}
