import React from 'react';
import { MessageCircle, Brain, Heart, AlarmClock, Activity, Headset } from 'lucide-react';

export default function LandingPage() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Oi%20Nurse!"; // Altere aqui o número!

  return (
    <div className="bg-white text-[#111111] antialiased font-sans">
      {/* Header */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 h-20 bg-white/80 backdrop-blur-md flex justify-between items-center border-b border-transparent">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl tracking-tighter text-[#FF3B3B]">Nurse</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-[14px] font-semibold text-[#666666] hover:text-[#FF3B3B] transition-colors" href="#como-funciona">Como funciona</a>
          <a className="text-[14px] font-semibold text-[#666666] hover:text-[#FF3B3B] transition-colors" href="#funcionalidades">Funcionalidades</a>
        </div>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-[14px] font-semibold hover:opacity-90 transition-all active:scale-95"
        >
          Testar no WhatsApp
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-16 pt-32 pb-20">
          <div className="max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#FF3B3B]/10 text-[#FF3B3B] font-bold text-[12px] uppercase tracking-wider mb-8">
              Inteligência Artificial em Saúde
            </span>
            <h1 className="text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.03em] md:tracking-[-0.04em] mb-8">
              Cuidado com a saúde, <br className="hidden md:block" /> direto no seu <span className="text-[#FF3B3B]">WhatsApp.</span>
            </h1>
            <p className="text-[20px] leading-[1.6] text-[#666666] mb-12 max-w-2xl mx-auto">
              Acompanhamento personalizado, lembretes de medicação e monitoramento inteligente sem precisar baixar nenhum aplicativo novo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF3B3B] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#FF3B3B]/20 transition-all active:scale-95 flex items-center justify-center"
              >
                Começar gratuitamente
              </a>
              <a 
                href="#como-funciona"
                className="bg-transparent border border-[#e5e7eb] text-[#111111] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#fafafa] transition-all flex items-center justify-center"
              >
                Ver demonstração
              </a>
            </div>
          </div>
        </section>

        {/* Simplified "How it Works" */}
        <section className="py-32 bg-[#fafafa]" id="como-funciona">
          <div className="max-w-[1100px] mx-auto px-6 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-20 tracking-tight">Simples assim.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              <div className="group">
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#FF3B3B] group-hover:bg-[#FF3B3B] group-hover:text-white transition-all duration-300">
                    <MessageCircle size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Mande um "Oi"</h3>
                <p className="text-[#666666] leading-relaxed">Adicione nosso número e inicie a conversa no WhatsApp em segundos.</p>
              </div>
              <div className="group">
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#FF3B3B] group-hover:bg-[#FF3B3B] group-hover:text-white transition-all duration-300">
                    <Brain size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">IA Personalizada</h3>
                <p className="text-[#666666] leading-relaxed">Nossa IA entende seu histórico e cria um plano de acompanhamento exclusivo.</p>
              </div>
              <div className="group">
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#e5e7eb] flex items-center justify-center text-[#FF3B3B] group-hover:bg-[#FF3B3B] group-hover:text-white transition-all duration-300">
                    <Heart size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Vida Saudável</h3>
                <p className="text-[#666666] leading-relaxed">Receba lembretes, registre métricas e tire dúvidas 24 horas por dia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Features List */}
        <section className="py-40" id="funcionalidades">
          <div className="max-w-[1100px] mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight leading-tight">Funcionalidades focadas no que importa.</h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="text-[#FF3B3B] pt-1">
                      <AlarmClock size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Lembretes de Medicação</h4>
                      <p className="text-[#666666]">Alertas inteligentes que garantem que você nunca esqueça uma dose.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-[#FF3B3B] pt-1">
                      <Activity size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Monitoramento de Métricas</h4>
                      <p className="text-[#666666]">Registro fácil de glicemia, pressão e peso via conversa natural.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-[#FF3B3B] pt-1">
                      <Headset size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Suporte 24/7</h4>
                      <p className="text-[#666666]">Tire dúvidas sobre saúde e receba orientações a qualquer momento.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#fafafa] rounded-[40px] aspect-square flex items-center justify-center p-12 border border-[#e5e7eb]/50">
                <div className="text-center">
                  <span className="text-[#FF3B3B] font-black text-8xl mb-6 block">98%</span>
                  <p className="text-[#111111] font-bold text-xl">Taxa de satisfação</p>
                  <p className="text-[#666666] mt-2">Usuários reportam melhoria real na rotina de saúde.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Minimal CTA */}
        <section className="py-40 bg-white border-t border-[#e5e7eb]/30">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Pronto para começar?</h2>
            <p className="text-[#666666] text-lg mb-12">Experimente o futuro do cuidado com a saúde. Sem cadastros longos, sem complicações.</p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FF3B3B] text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-[#FF3B3B]/30 transition-all active:scale-95"
            >
              Abrir WhatsApp Agora
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-16 border-t border-[#e5e7eb]/20">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF3B3B] rounded-full flex items-center justify-center"></div>
            <span className="font-bold tracking-tight text-[#111111]">Nurse AI</span>
          </div>
          <div className="flex gap-8">
            <a className="text-sm text-[#666666] hover:text-[#111111] transition-colors" href="#">Privacidade</a>
            <a className="text-sm text-[#666666] hover:text-[#111111] transition-colors" href="#">Termos</a>
            <a className="text-sm text-[#666666] hover:text-[#111111] transition-colors" href="#">Contato</a>
          </div>
          <p className="text-sm text-[#666666]">© {new Date().getFullYear()} Nurse AI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
