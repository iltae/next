import MovieItem from "@/components/movie-item";
import movies from "@/mock/movies.json";

export default function Home() {
  return (
    <div>
      <section className="mb-4 border-b">
        <h3 className="mb-4 text-lg font-semibold">Hot Movies</h3>
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} {...movie} />
        ))}
      </section>
      <section className="border-b">
        <h3 className="mb-4 text-lg font-semibold">All Movies</h3>
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} {...movie} />
        ))}
      </section>
    </div>
  );
}
