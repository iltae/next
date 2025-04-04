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

/* 
클라이언트 라우터 캐시 - RSC Payload에서 중복된 레이아웃을 저장
새로고침하면 사라짐
*/

import MovieItem from "@/components/movie-item";
import MovieListSkeleton from "@/components/skeleton/movie-list.skeleton";
import { MovieData } from "@/types";
import { Metadata } from "next";
import { title } from "process";
import { Suspense } from "react";

async function SearchResult({ q }: { q: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}&t=${q}`, {
    cache: "force-cache",
  }); // 검색 결과를 캐싱하기에 한 번 검색한 결과는 응답을 빠르게 해줄 수 있음
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

// 메타데이터 동적 생성
export async function generateMetada({
  searchParams,
}: {
  searchParams: { q?: string };
}): Promise<Metadata> {
  const { q } = await searchParams;

  return {
    title: `Movie by ${q}`,
    description: `Search title : ${q} `,
    openGraph: {
      title: "",
      description: "",
      images: [],
    },
  };
}

export default function Page({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  return (
    // key -> 렌더링을 갱신할 값
    <Suspense
      key={searchParams.q || ""}
      fallback={<MovieListSkeleton count={2} />}
    >
      <SearchResult q={searchParams.q || ""} />
    </Suspense>
  );
}
