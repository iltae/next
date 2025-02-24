import MovieItem from "@/components/movie-item";
import movies from "@/mock/movies.json";

export default function Home() {
  return (
    <div>
      <section>
        <h3>추천 영화</h3>
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} {...movie} />
        ))}
      </section>
      <section>
        <h3>모든 영화</h3>
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} {...movie} />
        ))}
      </section>
    </div>
  );
}
