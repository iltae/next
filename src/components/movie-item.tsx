import type { MovieData } from "@/types";
import Link from "next/link";
import Image from "next/image";

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
      <Image
        src={Poster}
        width={120}
        height={160}
        alt={`${Title} movie poster`}
      />
      {/* webp로 가져오고 width, height로 사이즈 정제해줌 그리고 페이지 뷰로만 나타나는 이미지 가져옴(레이지 로딩) */}
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
