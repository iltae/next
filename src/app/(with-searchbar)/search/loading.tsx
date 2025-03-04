// 레이아웃처럼 하위 모든 페이지에 스트리밍 적용됨
// async 키워드가 붙은 비동기 컴퍼넌트에 대해서만 수행
// page 컴퍼넌트만 적용
// 쿼리스트링이 변경될 땐 적용되지 않음
export default function Loading() {
  return <div>Loading...</div>;
}
