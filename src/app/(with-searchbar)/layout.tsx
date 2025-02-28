import { Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* 오직 클라이언트에서만 렌더링되게 설정 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
