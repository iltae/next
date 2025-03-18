import MovieItem from "@/components/movie-item";
import MovieItemSkeleton from "@/components/skeleton/movie-item-skeleton";
import MovieListSkeleton from "@/components/skeleton/movie-list.skeleton";
import { MovieData } from "@/types";
import { Metadata } from "next";
import { Suspense } from "react";

// { cache : "no-store" } - 데이터 페칭의 결과를 저장하지 않는 옵션. 즉, 캐싱을 아예 하지 않도록 하는 설정 - 기본값
// { cache : "force-cache" } - 요청의 결과를 무조건 캐싱함. 한 번 호출된 이후에는 다시는 호출 X
// { next : { revalidate : 3 }} - 특정 시간을 주기로 캐시 업데이트. 페이지 라우터의 ISR 방식과 유사
// { next : { tags: ['a'] }} - On-Demand Revalidate. 요청이 들어왔을 때 데이터 최신화

// Request Memoization - 중복된 API 요청 방지(하나의 페이지에서) -> 서버 컴퍼넌트 도입 때문에 생김
// 페이지를 강제로 Dynamic 또는 Static으로 바꿀 수 있음 - 별로 권장하지 않음
// 1. auto : 기본값, 어떠한 것도 강제하지 않음
// 2. force-dynamic : 강제로 Dynamic 페이지로 변경
// 3. force-static : 강제로 Static 페이지로 변경
// 4. error : 강제로 Static 페이지로 변경(동적 함수나 캐시 적용 안할 경우 빌드 시 에러)
export const dynamic = "force-dynamic";

async function AllMovies() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}&t=iron`, {
    cache: "force-cache",
  });
  if (!response.ok) return <div>something went wrong...</div>;
  const allMovies: MovieData = await response.json();
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

export const metadata: Metadata = {
  title: "Movie Info",
  description: "Movie Info Practice by Next",
  openGraph: {
    title: "",
    description: "",
    images: [], // public directory
  },
};

export default function Home() {
  return (
    <div>
      <section className="mb-4 border-b">
        <h3 className="mb-4 text-lg font-semibold">Hot Movies</h3>
        <Suspense fallback={<MovieListSkeleton count={2} />}>
          <HotMovies />
        </Suspense>
      </section>
      <section className="border-b">
        <h3 className="mb-4 text-lg font-semibold">All Movies</h3>
        <Suspense fallback={<MovieItemSkeleton />}>
          <AllMovies />
        </Suspense>
      </section>
    </div>
  );
}
