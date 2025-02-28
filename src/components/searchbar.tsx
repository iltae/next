"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // next-navigation이 app router 버전 (!next-router)

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams(); // 비동기 함수로 쿼리스트링이 존재하면 동작
  const [search, setSearch] = useState("");

  const q = searchParams.get("q"); // app router 부턴 router 객체에 query가 없음

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return; // 입력이 없거나 지금 입력이 이미 적용된 페이지라면 함수 실행 x
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="mb-4 w-full">
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        className="mr-4 w-2/3 rounded border-2 border-gray-300 pl-2"
      />
      <button
        onClick={onSubmit}
        className="border-white-100 rounded border-2 bg-blue-100 px-2"
      >
        검색
      </button>
    </div>
  );
}
