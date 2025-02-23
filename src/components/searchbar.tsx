"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // next-navigation이 app router 버전 (!next-router)

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    router.push(`/search?q=${search}`)
  }

  return (
    <div>
      <input value={search} onChange={onChangeSearch} />
      <button onClick={onSubmit}>검색</button>
    </div>
  );
}
