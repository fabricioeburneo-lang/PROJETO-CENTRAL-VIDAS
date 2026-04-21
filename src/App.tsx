import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Heart, 
  Navigation, 
  Info, 
  CheckCircle2, 
  Menu, 
  X, 
  Stethoscope, 
  Utensils, 
  TreePine,
  LifeBuoy
} from 'lucide-react';

const CONTACTS = [
  { label: 'Unidade 1 (15)', number: '15998244426', display: '15 99824-4426' },
  { label: 'Unidade 2 (15)', number: '15992435851', display: '15 99243-5851' },
  { label: 'Unidade 3 (11)', number: '11978923978', display: '11 97892-3978' },
];

const UNITS = [
  {
    name: 'Unidade Luz Esperança',
    description: 'Um ambiente focado no acolhimento e na renovação, com infraestrutura moderna para o bem-estar do paciente.',
    features: ['Acomodações Confortáveis', 'Acompanhamento Psicológico', 'Área de Lazer Completa']
  },
  {
    name: 'Unidade Meu Recanto',
    description: 'Localizada em meio à natureza, oferece paz e tranquilidade essenciais para o processo de introspecção e cura.',
    features: ['Contato com a Natureza', 'Atividades Terapêuticas', 'Ambiente Familiar']
  }
];

const FAQS = [
  {
    question: 'Como funciona o processo de remoção?',
    answer: 'Oferecemos remoção especializada 24 horas por dia. Nossa equipe é treinada para realizar o transporte com total segurança, discrição e respeito ao paciente e aos familiares.'
  },
  {
    question: 'Quais são as especialidades disponíveis?',
    answer: 'Contamos com psicólogos, terapeutas, nutricionistas e uma equipe de monitoria constante, garantindo um tratamento multidisciplinar completo.'
  },
  {
    question: 'É permitido visitas?',
    answer: 'Sim, as visitas são parte fundamental do processo de recuperação familiar, seguindo um cronograma que respeita a evolução do tratamento de cada paciente.'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openWhatsApp = (number: string) => {
    window.open(`https://wa.me/55${number}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-sky-600 p-2 rounded-lg">
              <LifeBuoy className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-sky-900">Central Vidas</span>
          </div>
          
          <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
            <a href="#unidades" className="hover:text-sky-600 transition-colors">Nossas Unidades</a>
            <a href="#infraestrutura" className="hover:text-sky-600 transition-colors">Infraestrutura</a>
            <a href="#remocao" className="hover:text-sky-600 transition-colors">Remoção 24h</a>
            <a href="#faq" className="hover:text-sky-600 transition-colors">Dúvidas</a>
            <button 
              onClick={() => openWhatsApp(CONTACTS[0].number)}
              className="bg-green-600 text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-green-700 transition-all shadow-md shadow-green-100"
            >
              <MessageCircle size={18} />
              WhatsApp
            </button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 pt-20 bg-white z-40 md:hidden p-6"
          >
            <div className="flex flex-col gap-6 text-xl font-medium">
              <a href="#unidades" onClick={() => setIsMenuOpen(false)}>Nossas Unidades</a>
              <a href="#infraestrutura" onClick={() => setIsMenuOpen(false)}>Infraestrutura</a>
              <a href="#remocao" onClick={() => setIsMenuOpen(false)}>Remoção 24h</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)}>Dúvidas</a>
              <div className="pt-6 border-top border-slate-100 flex flex-col gap-4">
                {CONTACTS.map((c) => (
                  <button 
                    key={c.number}
                    onClick={() => openWhatsApp(c.number)}
                    className="w-full bg-green-600 text-white p-4 rounded-xl flex items-center justify-center gap-3"
                  >
                    <MessageCircle /> {c.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-50 via-white to-green-50 opacity-70" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
              <Clock size={16} />
              Remoção Especializada 24 Horas
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
              Recuperar seu familiar é a nossa <span className="text-sky-600 italic">missão</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Acolhimento humanizado, segurança absoluta e infraestrutura completa para transformar vidas e restaurar famílias em duas unidades exclusivas.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={() => openWhatsApp(CONTACTS[0].number)}
                className="bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-green-700 transition-transform active:scale-95 shadow-xl shadow-green-100"
              >
                <MessageCircle />
                Falar com Atendente Agora
              </button>
              <button 
                className="bg-white text-sky-700 border-2 border-sky-100 px-8 py-4 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 hover:bg-sky-50 transition-all shadow-lg shadow-sky-50"
              >
                <Phone size={20} />
                Ver Nossos Números
              </button>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-sky-500" />
                <span className="font-medium">Remoção Segura</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-sky-500" />
                <span className="font-medium">Monitoria 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-sky-500" />
                <span className="font-medium">Apoio à Família</span>
              </div>
            </div>
          </motion.div>

          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl -z-10" />
        </section>

        {/* 24h Removal Banner */}
        <section id="remocao" className="bg-sky-900 py-12 text-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="bg-sky-800 p-5 rounded-3xl shrink-0">
                <Navigation className="w-10 h-10 text-sky-400 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">Remoção de Paciente 24 Horas</h2>
                <p className="text-sky-100 max-w-lg opacity-80 uppercase tracking-widest text-xs font-bold mb-2">Segurança • Sigilo • Respeito</p>
                <p className="text-sky-100/90 text-sm">Realizamos o resgate em qualquer localidade com equipe especializada e veículo discreto.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button 
                onClick={() => openWhatsApp(CONTACTS[2].number)}
                className="bg-white text-sky-900 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-colors shadow-lg"
              >
                Solicitar Remoção Imediata
              </button>
              <p className="text-center md:text-right text-xs opacity-60">Atendimento disponível em todo o Brasil</p>
            </div>
          </div>
        </section>

        {/* Our Units */}
        <section id="unidades" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Nossas Unidades</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos dois espaços distintos, cada um com sua particularidade, mas ambos com o mesmo padrão de excelência clínica e humana.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {UNITS.map((unit, idx) => (
              <motion.div 
                key={unit.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-8"
              >
                <h3 className="text-3xl font-bold text-sky-900 mb-4">{unit.name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {unit.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {unit.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-700 font-medium">
                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openWhatsApp(CONTACTS[1].number)}
                  className="w-full py-4 border-2 border-sky-600 text-sky-600 rounded-2xl font-bold hover:bg-sky-600 hover:text-white transition-all "
                >
                  Saiba Mais sobre a Unidade
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services / Features Grid */}
        <section id="infraestrutura" className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="bg-sky-500/20 p-4 rounded-2xl w-fit">
                  <Stethoscope className="text-sky-400" />
                </div>
                <h4 className="text-xl font-bold">Equipe Médica</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Psicólogos e terapeutas focados no acompanhamento diário e individualizado de cada paciente.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-500/20 p-4 rounded-2xl w-fit">
                  <Utensils className="text-orange-400" />
                </div>
                <h4 className="text-xl font-bold">Nutrição Balanceada</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Refeições preparadas por especialistas para garantir a recuperação física e nutricional do organismo.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-green-500/20 p-4 rounded-2xl w-fit">
                  <TreePine className="text-green-400" />
                </div>
                <h4 className="text-xl font-bold">Lazer e Esportes</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Piscinas, campos de futebol e áreas verdes para atividades físicas que auxiliam na liberação de endorfina.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-500/20 p-4 rounded-2xl w-fit">
                  <ShieldCheck className="text-purple-400" />
                </div>
                <h4 className="text-xl font-bold">Ambiente Seguro</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Monitoramento constante e estrutura protegida para garantir a paz necessária no tratamento.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <button 
                onClick={() => openWhatsApp(CONTACTS[0].number)}
                className="bg-sky-600 px-10 py-4 rounded-2xl font-bold hover:bg-sky-500 transition-all inline-flex items-center gap-3"
              >
                Solicitar Fotos no WhatsApp
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tire suas Dúvidas</h2>
            <p className="text-slate-600">Entendemos que este é um momento difícil. Estamos aqui para ajudar com total transparência.</p>
          </div>
          
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-3xl border border-slate-100 shadow-lg p-2 overflow-hidden transition-all duration-300">
                <summary className="list-none p-6 cursor-pointer flex items-center justify-between font-bold text-lg text-slate-800">
                  {faq.question}
                  <span className="bg-sky-50 text-sky-600 p-1 rounded-lg group-open:rotate-180 transition-transform">
                    <Info size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-sky-50 py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-12">Fale Conosco Agora</h2>
            <p className="text-slate-600 mb-12 max-w-xl mx-auto italic font-medium">"O primeiro passo para a mudança é a decisão de agir."</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {CONTACTS.map((c) => (
                <motion.button 
                  key={c.number}
                  whileHover={{ y: -10 }}
                  onClick={() => openWhatsApp(c.number)}
                  className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-sky-200/20 border border-slate-100 flex flex-col items-center gap-4 transition-all hover:bg-sky-900 group"
                >
                  <div className="bg-sky-100 p-4 rounded-2xl group-hover:bg-sky-800 transition-colors">
                    <MessageCircle className="text-sky-600 group-hover:text-sky-300" size={32} />
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-sky-400">{c.label}</span>
                    <span className="block text-2xl font-black text-sky-900 group-hover:text-white">{c.display}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-500 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <LifeBuoy size={20} className="text-sky-600" />
            <span className="font-bold text-white tracking-tight">Central Vidas</span>
          </div>
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Clínica de Recuperação. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4 items-end">
        <div className="bg-white px-4 py-2 rounded-2xl shadow-2xl text-xs font-bold text-slate-600 border border-slate-100 animate-bounce mb-2">
           Remoção 24h? Clique abaixo!
        </div>
        <button 
          onClick={() => openWhatsApp(CONTACTS[0].number)}
          className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-400/50 hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
        >
          <MessageCircle size={32} />
        </button>
      </div>
    </div>
  );
}
