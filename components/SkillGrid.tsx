'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills } from '@/data/SkillsData';
import { StarRating } from './StarRating';
import { ProficiencyLabel, ProficiencyLevel } from './ProfiencyLabel';

export default function SkillGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"  // 👈 animate only when visible
      viewport={{ once: true, amount: 0.2 }} // trigger once, when 20% is visible
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-5 p-5"
    >
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          whileHover={{ scale: 1.05, rotate: -1 }}
          className="group relative p-6 bg-slate-900 text-slate-200 border border-orange-500 shadow-md text-center font-light select-none cursor-default overflow-hidden"
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out transform scale-90 group-hover:scale-100">
            <div className="bg-slate-900/80 rounded-xl p-4 shadow-2xl shadow-orange-500/10">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-white font-semibold text-base mb-2 drop-shadow-lg">
                    {skill.name}
                  </h3>
                  <ProficiencyLabel level={skill.proficiency as ProficiencyLevel} />
                </div>
                <div className="space-y-2">
                  <StarRating rating={skill.proficiency} />
                </div>
              </div>
            </div>
          </div>

          {/* Default content */}
          <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className={`mx-auto mb-3 object-contain ${skill.invert ? 'invert' : ''}`}
            />
            <p>{skill.name}</p>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-orange-400/5 via-transparent to-orange-400/5 blur-xl" />
        </motion.div>
      ))}
    </motion.div>
  );
}
