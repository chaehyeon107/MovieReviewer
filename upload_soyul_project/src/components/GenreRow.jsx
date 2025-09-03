export default function TrailerHero() {
  return (
    <section className="my-6">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 ring-1 ring-neutral-700">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-neutral-400">Hero</div>
            <h1 className="mt-2 text-2xl font-bold text-neutral-100">예고편 창 (자동재생 자리)</h1>
            <p className="mt-2 text-neutral-300">나중에 API 연결 후 실제 트레일러 삽입</p>
            <div className="mt-4">
              <button className="rounded-xl bg-white/10 px-4 py-2 text-neutral-100 ring-1 ring-white/20 hover:bg-white/15">
                재생
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
