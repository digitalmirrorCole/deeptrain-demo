import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AgentPanel from "./components/AgentPanel";
import KPIGroup from "./components/KPIGroup";
import TrendChart from "./components/TrendChart";
import TrainingList from "./components/TrainingList";

export default function Dashboard(){
  return (
    <div className="min-h-screen flex">
      {/* Lateral izquierda */}
      <Sidebar />

      {/* Contenido */}
      <main className="flex-1">
        <Topbar />

        <div className="px-4 lg:px-6 pb-10">
          <div className="grid lg:grid-cols-[320px,1fr] gap-6">
            {/* Columna izquierda: perfil del agente */}
            <div className="sticky top-6 h-fit">
              <AgentPanel />
            </div>

            {/* Columna derecha: KPIs, gráfico, lista */}
            <div className="space-y-6">
              <KPIGroup />
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <TrendChart />
                </div>
                <TrainingList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
