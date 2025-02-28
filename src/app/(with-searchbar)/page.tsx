import MovieItem from "@/components/movie-item";
import { MovieData } from "@/types";

// 페이지를 강제로 Dynamic 또는 Static으로 바꿀 수 있음 - 별로 권장하지 않음
// 1. auto : 기본값, 어떠한 것도 강제하지 않음
// 2. force-dynamic : 강제로 Dynamic 페이지로 변경
// 3. force-static : 강제로 Static 페이지로 변경
// 4. error : 강제로 Static 페이지로 변경(동적 함수나 캐시 적용 안할 경우 빌드 시 에러)
export const dynamic = "auto";

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
