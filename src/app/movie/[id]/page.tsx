/*
클라이언트 컴퍼넌트에는 async 키워드를 사용할 수 없음
브라우저에서 동작 시 문제를 일으킬 수 있기 때문에 권장되지 않음
*/

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}&i=${id}`);
  if (!response.ok) return <div>something went wrong...</div>;
  const movie = await response.json();

  const { Title, Released, Plot, Director, Actors, Poster } = movie;

  return (
    <div>
      <div
        style={{ backgroundImage: `url('${Poster}')` }}
        className="before-poster relative flex justify-center bg-opacity-5 bg-cover bg-center bg-no-repeat p-[20px]"
      >
        <img src={Poster} alt="movie poster" className="z-10 max-h-[350px]" />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div className="text-xl font-semibold">{Title}</div>
        <div>
          {Director} | {Released}
        </div>
        <div>{Actors}</div>
        <div className="keep-all">{Plot}</div>
      </div>
    </div>
  );
}
