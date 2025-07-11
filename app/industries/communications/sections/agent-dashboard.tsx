'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Megaphone, 
  Globe, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Star, 
  Users,
  Zap 
} from 'lucide-react';

export function AgentDashboard() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeSkills, setActiveSkills] = useState<string[]>([]);
  
  const skills = [
    { id: 'media-outreach', name: 'Media Outreach', icon: Megaphone, position: { x: 20, y: 20 } },
    { id: 'brand-monitor', name: 'Brand Monitor', icon: Globe, position: { x: 80, y: 20 } },
    { id: 'content-creation', name: 'Content Creation', icon: MessageSquare, position: { x: 20, y: 80 } },
    { id: 'analytics', name: 'Analytics & Reporting', icon: TrendingUp, position: { x: 80, y: 80 } },
    { id: 'crisis-management', name: 'Crisis Management', icon: Users, position: { x: 15, y: 50 } },
    { id: 'seo-reputation', name: 'SEO & Reputation', icon: Star, position: { x: 85, y: 50 } },
    { id: 'project-management', name: 'Project Management', icon: FileText, position: { x: 50, y: 85 } }
  ];

  const scenarios = [
    {
      title: 'Crisis alert detected',
      description: 'At 2:47 AM, negative press coverage surfaces. AI instantly analyzes sentiment, drafts response strategies, and alerts key stakeholders.',
      sequence: ['brand-monitor', 'crisis-management', 'content-creation', 'media-outreach']
    },
    {
      title: 'Influencer opportunity identified',
      description: 'AI spots trending topic alignment with brand values, identifies top-tier journalists, and prepares personalized pitches within minutes.',
      sequence: ['brand-monitor', 'analytics', 'content-creation', 'media-outreach']
    },
    {
      title: 'Product launch campaign',
      description: 'Coordinating press releases, media kits, and influencer outreach across 50+ channels simultaneously for maximum impact.',
      sequence: ['project-management', 'content-creation', 'media-outreach', 'analytics']
    },
    {
      title: 'Monthly performance report',
      description: 'AI analyzes share of voice, sentiment trends, and media coverage to generate executive-ready insights and recommendations.',
      sequence: ['analytics', 'brand-monitor', 'content-creation', 'project-management']
    }
  ];

  useEffect(() => {
    const scenario = scenarios[activeScenario];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < scenario.sequence.length) {
        setActiveSkills(prev => [...prev, scenario.sequence[currentIndex]]);
        currentIndex++;
      } else {
        setTimeout(() => {
          setActiveSkills([]);
          setActiveScenario((prev) => (prev + 1) % scenarios.length);
        }, 2000);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [activeScenario]);

  const currentScenario = scenarios[activeScenario];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="container max-w-6xl mx-auto">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            See Your Communications AI in Action
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Watch how multiple AI skills work together to amplify your brand
          </p>
        </motion.div>

        <div className="relative">
          {/* Skills Network Visualization */}
          <div className="relative h-[400px] md:h-[500px] mb-8">
            {/* Central Brain */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{ 
                scale: activeSkills.length > 0 ? [1, 1.1, 1] : 1,
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
                <Brain className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </motion.div>

            {/* Skill Nodes */}
            {skills.map((skill) => {
              const isActive = activeSkills.includes(skill.id);
              return (
                <motion.div
                  key={skill.id}
                  className="absolute"
                  style={{ 
                    left: `${skill.position.x}%`, 
                    top: `${skill.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div 
                    className={`
                      w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center
                      transition-all duration-300 cursor-pointer
                      ${isActive 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/50' 
                        : 'bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700'
                      }
                    `}
                  >
                    <skill.icon 
                      className={`w-8 h-8 md:w-10 md:h-10 ${
                        isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'
                      }`} 
                    />
                  </div>
                  <p className={`
                    absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap
                    ${isActive ? 'text-purple-600 dark:text-purple-400 font-semibold' : 'text-slate-600 dark:text-slate-500'}
                  `}>
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <AnimatePresence>
                {activeSkills.map((skillId, index) => {
                  if (index === 0) return null;
                  const prevSkill = skills.find(s => s.id === activeSkills[index - 1]);
                  const currentSkill = skills.find(s => s.id === skillId);
                  if (!prevSkill || !currentSkill) return null;
                  
                  return (
                    <motion.line
                      key={`${activeSkills[index-1]}-${skillId}`}
                      x1={`${prevSkill.position.x}%`}
                      y1={`${prevSkill.position.y}%`}
                      x2={`${currentSkill.position.x}%`}
                      y2={`${currentSkill.position.y}%`}
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  );
                })}
              </AnimatePresence>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Scenario Description */}
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl"
            key={activeScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {currentScenario.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {currentScenario.description}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Active Skills:</span>
                  {currentScenario.sequence.map((skillId, index) => {
                    const skill = skills.find(s => s.id === skillId);
                    const isActive = activeSkills.includes(skillId);
                    return (
                      <motion.div
                        key={skillId}
                        className={`
                          inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm
                          ${isActive 
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                          }
                        `}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {skill && <skill.icon className="w-4 h-4" />}
                        <span>{skill?.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
