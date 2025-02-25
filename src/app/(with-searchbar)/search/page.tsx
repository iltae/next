// 함수형 컴퍼넌트인데 어떻게 async를 붙일 수 있냐?
// 리액트 서버 컴퍼넌트 - 서버 측에서 사전 렌더링으로 한 번 실행하기에
// 비동기적으로 실행해도 문제 없음

import MovieItem from "@/components/movie-item";
import movies from "@/mock/movies.json";
import { MovieData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}&t=${q}`);
  if (!response.ok) return <div>something went wrong...</div>;
  const movie: MovieData = await response.json();
  return (
    <div>
      {/* {movies.map((movie) => (
        <MovieItem key={movie.imdbID} {...movie} />
      ))} */}
      <MovieItem key={movie.imdbID} {...movie} />
    </div>
  );
}
