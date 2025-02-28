// 함수형 컴퍼넌트인데 어떻게 async를 붙일 수 있냐?
// 리액트 서버 컴퍼넌트 - 서버 측에서 사전 렌더링으로 한 번 실행하기에
// 비동기적으로 실행해도 문제 없음

/*
Dynamic Page
특정 페이지가 접속 요청을 받을 때 마다 매번 변화가 생기거나, 데이터가 달라지는 경우
1. 캐시되지 않는 데이터 요청을 사용할 경우(기본값, { cache: 'no-store'})
2. 동적 함수(쿠키, 헤더, 쿼리스트링)을 사용하는 컴퍼넌트가 있을 경우

Revalidate 가능

동적 함수를 사용하지 않고 데이터 캐시를 사용할 때만 Static Page - 풀 라우트 캐시
빌드 타임에 페이지 생성
*/

import MovieItem from "@/components/movie-item";
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
