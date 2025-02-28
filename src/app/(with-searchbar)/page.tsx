import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";

async function AllMovies() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}&t=iron`, {
    cache: "force-cache",
  });
  if (!response.ok) return <div>something went wrong...</div>;
  const allMovies: MovieData = await response.json();
  console.log(allMovies);
  return (
    <div>
      {/* {allMovies.map((movie) => (
        <MovieItem key={movie.imdbID} {...movie} />
      ))} */}
      <MovieItem key={allMovies.imdbID} {...allMovies} />
    </div>
  );
}

async function HotMovies() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}&t=29`, {
    next: { revalidate: 3 },
  });
  if (!response.ok) return <div>something went wrong...</div>;
  const hotMovies: MovieData = await response.json();
  return (
    <div>
      {/* {hotMovies.map((movie) => (
        <MovieItem key={movie.imdbID} {...movie} />
      ))} */}
      <MovieItem key={hotMovies.imdbID} {...hotMovies} />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <section className="mb-4 border-b">
        <h3 className="mb-4 text-lg font-semibold">Hot Movies</h3>
        <HotMovies />
      </section>
      <section className="border-b">
        <h3 className="mb-4 text-lg font-semibold">All Movies</h3>
        <AllMovies />
      </section>
    </div>
  );
}
