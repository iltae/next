import { Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* 시간 변경되지 않음 - 레이아웃을 캐싱했기 때문에 */}
      <div>{new Date().toLocaleString()}</div>
      {/* 오직 클라이언트에서만 렌더링되게 설정 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
