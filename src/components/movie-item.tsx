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
    <Link href={`/movie/${imdbID}`}>
      <img src={Poster} />
      <div>
        <div>{Title}</div>
        <div>{Genre}</div>
        <br />
        <div>
          {Director} | {Production}
        </div>
      </div>
    </Link>
  );
}
