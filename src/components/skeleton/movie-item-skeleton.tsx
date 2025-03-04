export default function MovieItemSkeleton() {
  return (
    <div className="mb-4 flex h-[172px] w-full gap-4">
      <div className="h-[172px] w-[120px] bg-gray-200"></div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-[20px] w-1/2 bg-gray-200"></div>
        <div className="h-[20px] w-1/2 bg-gray-200"></div>
        <br />
        <div className="h-[20px] w-1/2 flex-1 bg-gray-200"></div>
      </div>
    </div>
  );
}
