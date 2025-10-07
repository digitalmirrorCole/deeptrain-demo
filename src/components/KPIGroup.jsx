function KPI({ title, value, delta, deltaType = "up", icon = null }) {
  const deltaColor = deltaType === "up" ? "text-emerald-400" : "text-rose-400";

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <div className="kpi-title">
          {title.split(" ").map((w, i) =>
            i === 1 ? (
              <span key={i} className="font-semibold text-slate-200">
                {" "}
                {w}{" "}
              </span>
            ) : (
              " " + w
            )
          )}
        </div>
        {icon ?? <div className="w-7 h-7 rounded-lg bg-slate-800" />}
      </div>
      <div className="kpi-value">{value}</div>
      <div className={`text-xs ${deltaColor}`}>{delta}</div>
    </div>
  );
}

export default function KPIGroup() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <KPI
        title="Calls Answered"
        value="46"
        delta="+6.25% Since last week"
        deltaType="up"
      />
      <KPI
        title="Trainings Completed"
        value="14"
        delta="-4.65% Since last week"
        deltaType="down"
      />
      <KPI
        title="Accuracy Score"
        value="89%"
        delta="+8.35% Since last week"
        deltaType="up"
      />
      <KPI
        title="Improvement Trend"
        value="+12%"
        delta="+8.35% Since last week"
        deltaType="up"
      />
    </div>
  );
}
