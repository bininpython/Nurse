import React from "react";
import { Activity, Users, Pill, CalendarDays, ArrowUpRight, TrendingUp, Bell } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-black to-slate-900 text-white selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Activity className="text-blue-400" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Nurse Admin
              </h1>
              <p className="text-gray-400 text-sm mt-1">Inteligência Artificial de Acompanhamento de Saúde</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
              <Bell className="text-gray-300" size={20} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-black animate-pulse"></span>
            </button>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-[2px] cursor-pointer hover:scale-105 transition-transform">
              <div className="h-full w-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Pacientes Ativos", value: "1,248", change: "+12%", icon: Users, color: "text-blue-400" },
            { label: "Lembretes Enviados Hoje", value: "3,842", change: "+5%", icon: Bell, color: "text-cyan-400" },
            { label: "Taxa de Adesão a Medicamentos", value: "87%", change: "+2.4%", icon: Pill, color: "text-emerald-400" },
            { label: "Treinos Registrados", value: "892", change: "+18%", icon: Activity, color: "text-purple-400" },
          ].map((stat, i) => (
            <div key={i} className="glass-card p-6 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                <stat.icon className={`${stat.color} opacity-80`} size={20} />
              </div>
              <div className="flex items-end gap-3">
                <h3 className="text-3xl font-bold">{stat.value}</h3>
                <span className="text-emerald-400 text-xs font-medium flex items-center mb-1 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  <ArrowUpRight size={12} className="mr-0.5" />
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Activity / Logs */}
          <div className="lg:col-span-2 glass-card p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-400" />
                Logs Recentes
              </h2>
              <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Ver todos</button>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Maria Silva", action: "Confirmou Losartana", time: "Há 2 minutos", status: "success" },
                { name: "João Pedro", action: "Relatório Quinzenal Gerado", time: "Há 15 minutos", status: "info" },
                { name: "Ana Clara", action: "Ignorou Lembrete de Treino", time: "Há 1 hora", status: "warning" },
                { name: "Carlos Moura", action: "Novo Cadastro (Diabetes Tipo 2)", time: "Há 2 horas", status: "new" },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${
                      log.status === 'success' ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' :
                      log.status === 'info' ? 'bg-blue-400 shadow-[0_0_8px_#60a5fa]' :
                      log.status === 'warning' ? 'bg-amber-400 shadow-[0_0_8px_#fbbf24]' :
                      'bg-purple-400 shadow-[0_0_8px_#c084fc]'
                    }`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">{log.name}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{log.action}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{log.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions / System Health */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Activity size={18} className="text-emerald-400" />
                Status do Sistema
              </h2>
              <div className="space-y-5">
                {[
                  { label: "n8n Webhooks", status: "Online", color: "bg-emerald-400" },
                  { label: "Evolution API", status: "Online", color: "bg-emerald-400" },
                  { label: "Supabase DB", status: "Online", color: "bg-emerald-400" },
                  { label: "Gemini API", status: "Online", color: "bg-emerald-400" },
                ].map((sys, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{sys.label}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${sys.color} animate-pulse`}></div>
                      <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{sys.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent">
              <h2 className="text-lg font-semibold mb-4">Ações Rápidas</h2>
              <div className="flex flex-col gap-3">
                <button className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-medium flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  <CalendarDays size={16} />
                  Forçar Cron Relatórios
                </button>
                <button className="w-full py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium text-gray-300 flex items-center justify-center gap-2">
                  <Users size={16} />
                  Exportar Pacientes
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
