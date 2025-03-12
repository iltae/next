// (.) - 현재 위치
// (..) - 상단 위치 -> (..)(..)
// (...) - 최상단 위차
import MoviePage from "@/app/movie/[id]/page";
import Modal from "@/components/modal";

export default function Page(props: any) {
  return (
    <Modal>
      <MoviePage {...props} />
    </Modal>
  );
}
