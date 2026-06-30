export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-orb orb-float-1 absolute -top-32 -right-32 h-[min(500px,80vw)] w-[min(500px,80vw)]" />
      <div className="ambient-orb orb-float-2 absolute top-1/2 -left-48 h-[min(400px,70vw)] w-[min(400px,70vw)] opacity-60" />
      <div className="ambient-orb orb-float-3 absolute -bottom-32 right-1/4 h-[min(350px,60vw)] w-[min(350px,60vw)] opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-transparent to-bg" />
    </div>
  );
}
