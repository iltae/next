"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

// 서버와 클라이언트 모든 요청 방식에 대처하기 위해
// 에러 발생 시 같은 경로에 있는 레이아웃까지만 표시

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <div>
      <h3>Someting went wrong...</h3>
      <button
        onClick={() => {
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버 컴퍼넌트들을 다시 호출
            reset(); // 에러 상태 초기화 및 컴퍼넌트 리렌더링
          });
        }}
      >
        try again
      </button>
    </div>
  );
}
