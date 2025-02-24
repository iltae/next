import type { MovieData } from "@/types";
import Link from "next/link";

export default function MovieItem({
  imdbID,
  Poster,
  Title,
  Genre,
  Director,
  Production,
}: MovieData) {
  return (
    <Link href={`/movie/${imdbID}`} className="mb-4 flex w-full gap-4">
      <img src={Poster} className="h-auto w-1/3" />
      <div>
        <div className="text-lg font-extrabold">{Title}</div>
        <div>{Genre}</div>
        <br />
        <div>
          {Director} | {Production}
        </div>
      </div>
    </Link>
  );
}
