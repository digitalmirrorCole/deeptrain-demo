export default function Topbar() {
  return (
    <header className="flex items-center justify-end px-4 py-3 gap-3">
      <div className="flex items-center gap-3">
        {/* Avatar del usuario */}
        <div className="w-8 h-8 rounded-full bg-slate-800" />
        <div className="text-sm text-slate-300">Juan Hernandez</div>
      </div>
    </header>
  );
}
