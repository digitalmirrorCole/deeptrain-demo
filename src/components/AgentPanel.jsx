export default function AgentPanel() {
  return (
    <div className="card p-6 w-full">
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full overflow-hidden mx-auto">
        <img
          src="https://i.pravatar.cc/300?img=12"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nombre + info */}
      <div className="mt-5 text-center space-y-1">
        <div className="text-lg">
          Juan <span className="font-semibold">Hernandez</span>
        </div>
        <div className="text-sm text-slate-400">
          Agent <b>Hospital A</b>
        </div>
        <span className="pill bg-indigo-600">Score 7</span>
      </div>

      {/* Training level list */}
      <div className="mt-6 pt-6 border-t border-slate-800">
        <div className="text-slate-300 font-semibold mb-3">
          Training <span className="font-normal">Level</span>
        </div>
        <ul className="space-y-4">
          {[
            { label: "Master Agent" },
            { label: "Proficient", active: true },
            { label: "Performer" },
            { label: "Practitioner" },
            { label: "Observer" },
          ].map((i, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-300">
              <span
                className={`w-3 h-3 rounded-full border-2 ${
                  i.active
                    ? "border-indigo-500 bg-indigo-500"
                    : "border-slate-600"
                }`}
              />
              <span
                className={`${
                  i.active ? "text-slate-100 font-medium" : "text-slate-400"
                }`}
              >
                {i.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
