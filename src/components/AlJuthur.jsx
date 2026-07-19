import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { StarsCanvas } from './canvas';
import { alJuthur, alJuthurCopy, alJuthurCopy2, alJuthurCopy3, alJuthurCopy4 } from '../assets';

const AlJuthur = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const screenshots = [
    {
      img: alJuthur,
      title: "Interactive & Simple Quran",
      desc: "A clean, beautiful reader interface containing translation toggles, surah picker, and navigation tools."
    },
    {
      img: alJuthurCopy,
      title: "Interactive Tafsir Interface",
      desc: "Compare multiple tafsirs side-by-side with morphological word-by-word breakdowns."
    },
    {
      img: alJuthurCopy2,
      title: "Lexicon Root Analysis",
      desc: "Lookup words by their Arabic root (Jadr), checking definitions across classical dictionaries like Lane's Lexicon."
    },
    {
      img: alJuthurCopy3,
      title: "RAG Scholar Chatbot",
      desc: "Ask the AI assistant about specific verses, and receive answers grounded directly in scholarly reflections."
    },
    {
      img: alJuthurCopy4,
      title: "AI Translation Suite",
      desc: "Real-time translation of archaic classical Arabic text into English using our customized translation model."
    }
  ];

  return (
    <div className="relative z-0 bg-[#050816] min-h-screen text-white py-12 px-6 sm:px-16 overflow-hidden">
      {/* Background Stars */}
      <StarsCanvas />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back Button */}
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-[#915eff] hover:text-white transition-colors duration-300 font-medium mb-12 group"
        >
          <span className="text-xl transform group-hover:-translate-x-1.5 transition-transform duration-300">&larr;</span>
          Back to Portfolio
        </a>

        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Al Juthur <span className="text-[#915eff]">(الْجُذُور)</span>
          </h1>
          <p className="text-[#dfd9ff] text-lg sm:text-xl max-w-3xl leading-relaxed">
            A production-grade classical Arabic Tafsir and Lexicon suite. Currently in prototype stage, it merges ancient Islamic scholarship with cutting-edge AI retrieval models.
          </p>
        </motion.div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#151030] p-8 rounded-2xl border border-[#915eff]/10 hover:border-[#915eff]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#915eff]/10 flex items-center justify-center mb-6">
              <span className="text-2xl text-[#915eff]">📚</span>
            </div>
            <h3 className="text-xl font-bold mb-3">120+ Tafsirs & Lexicons</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Consolidated database containing over 120 classical Quranic commentary works (Tafsir) and 9+ classical Arabic-English dictionaries, offering deep lexical lookup capabilities.
            </p>
          </div>

          <div className="bg-[#151030] p-8 rounded-2xl border border-[#915eff]/10 hover:border-[#915eff]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#915eff]/10 flex items-center justify-center mb-6">
              <span className="text-2xl text-[#915eff]">🧠</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Custom translation</h3>
            <p className="text-secondary text-sm leading-relaxed">
              Equipped with a specialized machine translation model trained to convert complex and archaic classical Arabic grammar into highly readable, context-aware English.
            </p>
          </div>

          <div className="bg-[#151030] p-8 rounded-2xl border border-[#915eff]/10 hover:border-[#915eff]/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#915eff]/10 flex items-center justify-center mb-6">
              <span className="text-2xl text-[#915eff]">🤖</span>
            </div>
            <h3 className="text-xl font-bold mb-3">RAG AI Assistant</h3>
            <p className="text-secondary text-sm leading-relaxed">
              An advanced Retrieval-Augmented Generation model that parses scholar reflections and lexicons to deliver instant, cross-referenced answers grounded in authentic texts.
            </p>
          </div>
        </div>

        {/* Screenshot Gallery Showcase */}
        <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-center">
          Prototype Screen Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {screenshots.map((screen, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#151030] rounded-2xl overflow-hidden shadow-card border border-[#915eff]/5 hover:scale-[1.01] transition-transform duration-300 flex flex-col"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-black flex justify-center items-center">
                <img 
                  src={screen.img} 
                  alt={screen.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 flex-grow">
                <h4 className="text-lg font-bold mb-2 text-[#915eff]">{screen.title}</h4>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed">{screen.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlJuthur;
