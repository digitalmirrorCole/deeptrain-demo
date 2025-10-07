import { trainings } from "../data";

function Bar({ value }) {
  return (
    <div className="w-full h-2 rounded bg-slate-800 overflow-hidden">
      <div className="h-2 rounded bg-indigo-500" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function TrainingList() {
  return (
    <div className="card p-5">
      <div className="text-slate-200 font-semibold mb-3">
        Training <span className="font-normal">Status List</span>
      </div>

      <div className="space-y-4">
        {trainings.map((t, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-800">
                  ▶
                </span>
                <span className="text-slate-200">{t.title}</span>
              </div>
              <span className="text-slate-400">{t.pct}%</span>
            </div>
            <Bar value={t.pct} />
          </div>
        ))}
      </div>
    </div>
  );
}
