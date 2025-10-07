import { Phone, Trophy, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const perf = [
  { name: "Jul", score: 3200, trainings: 11 },
  { name: "Aug", score: 2500, trainings: 8 },
  { name: "Sep", score: 2900, trainings: 10 },
  { name: "Oct", score: 3800, trainings: 15 },
  { name: "Nov", score: 3100, trainings: 9 },
  { name: "Dec", score: 2100, trainings: 6 },
]

const trainings = [
  { title: "FlowFix", pct: 43 },
  { title: "Objection", pct: 27 },
  { title: "AuthMaster", pct: 22 },
  { title: "PrepCheck", pct: 16 },
]

function Progress({ value }) {
  return (
    <div className="w-full h-2 bg-slate-800 rounded">
      <div className="h-2 rounded" style={{ width: `${value}%`, backgroundColor: "#6366f1" }}></div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">DeepTrain.AI - Agent Overview</h1>
          <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-500">Demo</span>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: <>Calls <span className='font-semibold text-slate-200'>Answered</span></>, value: "46", delta: "+6.25% vs last week", icon: <Phone className="h-5 w-5 text-slate-400" />, deltaColor: "text-emerald-400" },
            { label: <>Trainings <span className='font-semibold text-slate-200'>Completed</span></>, value: "14", delta: "-4.65% vs last week", icon: <TrendingUp className="h-5 w-5 text-slate-400" />, deltaColor: "text-rose-400" },
            { label: <>Accuracy <span className='font-semibold text-slate-200'>Score</span></>, value: "89%", delta: "+8.35% vs last week", icon: <Trophy className="h-5 w-5 text-slate-400" />, deltaColor: "text-emerald-400" },
            { label: <>Improvement <span className='font-semibold text-slate-200'>Trend</span></>, value: "+12%", delta: "+8.35% vs last week", icon: null, deltaColor: "text-emerald-400" },
          ].map((kpi, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">{kpi.label}</span>
                {kpi.icon}
              </div>
              <div className="mt-2 text-4xl font-semibold">{kpi.value}</div>
              <div className={`mt-1 text-xs ${kpi.deltaColor}`}>{kpi.delta}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 lg:col-span-2">
            <div className="text-sm text-slate-300 mb-4">
              Training Trend - Evolution between score and number of completed trainings
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={perf}>
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="trainings" stroke="#22d3ee" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="text-sm text-slate-300">Training Status List</div>
            {trainings.map(t => (
              <div key={t.title} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-200">{t.title}</span>
                  <span className="text-slate-400">{t.pct}%</span>
                </div>
                <Progress value={t.pct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
