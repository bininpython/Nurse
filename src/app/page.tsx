import React from 'react';
import Link from 'next/link';
import { Activity, HeartPulse, BrainCircuit, BellRing, Apple, Target, Phone, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-x-hidden selection:bg-blue-500/30">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Activity className="text-blue-400" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Nurse
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/dashboard" className="text-sm text-gray-300 hover:text-white transition-colors">
              Acesso Restrito
            </Link>
            <a href="#comecar" className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105">
              Assinar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
          Sua Saúde em Boas Mãos
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-8">
          Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Enfermeira Pessoal</span> e Coach de Rotina no WhatsApp.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
          Lembretes automáticos de medicamentos, acompanhamento de exercícios e relatórios de saúde gerados por IA. Tudo na palma da sua mão.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#funcionalidades" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-base font-medium transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
            Ver Funcionalidades <ArrowRight size={18} />
          </a>
          <a href="#como-funciona" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-base font-medium transition-all flex items-center justify-center">
            Como Funciona?
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-24 px-6 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que a Nurse faz por você?</h2>
            <p className="text-gray-400">Inteligência Artificial humanizada focada no seu bem-estar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BellRing, title: "Lembretes de Remédios", desc: "Nunca mais esqueça de tomar sua medicação. A Nurse te avisa na hora exata pelo WhatsApp.", color: "text-red-400" },
              { icon: Target, title: "Foco em Emagrecimento", desc: "Acompanhamento diário para ajudar você a atingir suas metas de peso e saúde.", color: "text-emerald-400" },
              { icon: HeartPulse, title: "Doenças Crônicas", desc: "Atenção especial para rotinas de pacientes com Diabetes e Hipertensão.", color: "text-purple-400" },
              { icon: Activity, title: "Acompanhamento de Treino", desc: "Lembretes e motivação para os seus dias de academia ou atividade física.", color: "text-blue-400" },
              { icon: BrainCircuit, title: "Relatórios de IA", desc: "Resumos quinzenais detalhados sobre o seu progresso, adesão e humor.", color: "text-cyan-400" },
              { icon: Phone, title: "Tudo via WhatsApp", desc: "Sem necessidade de baixar novos apps. Converse com a Nurse naturalmente.", color: "text-green-400" }
            ].map((feat, i) => (
              <div key={i} className="glass-card p-8 flex flex-col gap-4 group hover:bg-white/[0.03]">
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform ${feat.color}`}>
                  <feat.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mt-2">{feat.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como a Nurse funciona?</h2>
            <p className="text-gray-400">Três passos simples para transformar sua saúde.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
            {[
              { step: "1", title: "Cadastro Inteligente", desc: "Iniciamos com uma conversa rápida para entender seus objetivos, problemas de saúde e horários de medicação." },
              { step: "2", title: "Rotina e Lembretes", desc: "A Nurse começa a te enviar mensagens diárias com lembretes interativos e motivação." },
              { step: "3", title: "Relatórios Quinzenais", desc: "Receba PDFs com a evolução da sua constância para compartilhar com seu médico." }
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-black bg-blue-600 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Pricing */}
      <section id="comecar" className="py-24 px-6 bg-gradient-to-t from-blue-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 border-blue-500/30">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para cuidar melhor de você?</h2>
          <p className="text-xl text-gray-400 mb-10">Assine o plano premium e tenha acompanhamento 24/7 direto no seu celular.</p>
          
          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mb-6 hover:scale-105 transition-transform">
            <button className="px-10 py-5 rounded-full bg-black text-lg font-bold hover:bg-black/80 transition-colors flex items-center gap-3">
              Começar por R$ 29,90 / mês <ArrowRight />
            </button>
          </div>
          <p className="text-sm text-gray-500">Cancele a qualquer momento. Sem fidelidade.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Nurse SaaS. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Este serviço não substitui orientação médica profissional.</p>
      </footer>
    </div>
  );
}
