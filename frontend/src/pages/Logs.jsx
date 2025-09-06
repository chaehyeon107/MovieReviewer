import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function Logs() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />

      {/* 기존의 <main ...> 대신 중앙 정렬 컨테이너 */}
      <Container className="py-10">
        <h1 className="text-xl font-bold">기록</h1>
        <p className="mt-2 text-neutral-300">
          여기에 나중에 별점/코멘트 기록 목록이 들어갑니다.
        </p>
      </Container>
    </div>
  );
}
