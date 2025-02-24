// 함수형 컴퍼넌트인데 어떻게 async를 붙일 수 있냐?
// 리액트 서버 컴퍼넌트 - 서버 측에서 사전 렌더링으로 한 번 실행하기에
// 비동기적으로 실행해도 문제 없음

import MovieItem from "@/components/movie-item";
import movies from "@/mock/movies.json";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
