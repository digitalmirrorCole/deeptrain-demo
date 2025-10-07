import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { perf } from "../data";

export default function TrendChart(){
  return (
    <div className="card p-5 h-[360px]">
      <div className="text-sm text-slate-300 mb-4">
        <b>Training Trend</b> — Evolution between score and number of completed Training
      </div>

      <div className="h-[270px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={perf} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={{ stroke: "#1f2937" }} />
            <YAxis stroke="#94a3b8" tickLine={false} axisLine={{ stroke: "#1f2937" }} />
            <Tooltip
              contentStyle={{ background: "#0b1222", border: "1px solid #1f2937", borderRadius: 12, color: "#e2e8f0" }}
              labelStyle={{ color: "#cbd5e1" }}
            />
            <Line type="monotone" dataKey="score" stroke="#5b8cff" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="trainings" stroke="#22d3ee" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
