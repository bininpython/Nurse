import React from 'react';
import Link from 'next/link';
import { Activity, HeartPulse, BrainCircuit, BellRing, ShieldCheck, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Oi%20Nurse!"; // Substitua pelo número real do seu bot da Z-API

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 overflow-x-hidden selection:bg-blue-500/30 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#020617]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Activity className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Nurse
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          </div>
          <div className="flex gap-4 items-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer" 
              className="px-6 py-2.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105 flex items-center gap-2"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              Começar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:pt-48 lg:pb-32 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <ShieldCheck size={16} /> Aprovado por profissionais da saúde
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] mb-8 text-balance">
          Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Enfermeira Pessoal</span><br />
          direto no WhatsApp.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 text-balance leading-relaxed">
          Chega de aplicativos complexos. A Nurse usa Inteligência Artificial avançada para lembrar seus remédios, acompanhar seus treinos e cuidar da sua saúde, tudo através de uma conversa natural.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:scale-105 text-white text-lg font-bold transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} />
            Testar no WhatsApp
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">Sem download. Sem senhas. Teste grátis hoje.</p>
      </section>

      {/* Funcionalidades O Que o SaaS Faz */}
      <section id="funcionalidades" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tudo que você precisa, <br/><span className="text-blue-400">em um só lugar.</span></h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Nossa inteligência artificial foi desenhada para ser invisível na tecnologia, mas extremamente presente no seu cuidado diário.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Memória Perpétua</h3>
              <p className="text-slate-400 leading-relaxed">A Nurse nunca esquece de você. Ela decora seu peso, altura, histórico médico e alergias. Quando você fala com ela meses depois, ela continua a conversa exatamente de onde parou, como um médico da família.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BellRing className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Lembretes Ativos</h3>
              <p className="text-slate-400 leading-relaxed">Diferente de um bot comum que só responde, a Nurse toma a iniciativa. Ela varre seu calendário e te chama no WhatsApp na hora exata: <br/><span className="italic text-slate-300">"João, deu a hora do seu remédio da pressão, já tomou?"</span></p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Activity className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Auto-Cadastro Invisível</h3>
              <p className="text-slate-400 leading-relaxed">Ninguém gosta de formulários chatos. Para entrar na Nurse, você só precisa mandar um "Oi" no WhatsApp. Nosso sistema cria sua conta no banco de dados automaticamente em milissegundos.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartPulse className="text-purple-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Apoio Emocional</h3>
              <p className="text-slate-400 leading-relaxed">Dias difíceis na dieta ou falta de ânimo para o treino? A Nurse foi treinada com um tom acolhedor e motivacional. Ela age como sua personal trainer e psicóloga de bolso para manter sua constância.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planos" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-blue-900/10 clip-path-slant pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invista na sua saúde hoje.</h2>
          <p className="text-lg text-slate-400 mb-12">Um valor acessível para você ter uma assistente médica 24 horas por dia.</p>
          
          <div className="bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 p-8 md:p-12 rounded-3xl max-w-lg mx-auto shadow-2xl shadow-blue-900/20">
            <h3 className="text-2xl font-bold text-white mb-2">Plano Nurse Premium</h3>
            <div className="flex items-end justify-center gap-1 mb-8">
              <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">R$ 29,90</span>
              <span className="text-slate-400 mb-2">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-10 text-left">
              {[
                "Acesso ilimitado ao WhatsApp da Nurse",
                "Ficha técnica salva em nuvem de segurança",
                "Lembretes infinitos de remédios e treinos",
                "Relatórios semanais de evolução",
                "Cancelamento fácil a qualquer momento"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Assinar Agora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 text-center text-slate-500 bg-[#020617] relative z-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Activity size={24} className="text-blue-500/50" />
          <span className="text-xl font-bold text-slate-300">Nurse SaaS</span>
        </div>
        <p>© {new Date().getFullYear()} Nurse Health Tech. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs text-slate-600 max-w-lg mx-auto">A Nurse é uma inteligência artificial de acompanhamento e suporte à rotina saudável. Suas respostas não substituem diagnósticos, prescrições ou orientações de médicos profissionais.</p>
      </footer>
    </div>
  );
}
