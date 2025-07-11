'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Pause, Play } from 'lucide-react';

export function AgentConversation() {
  const [messages, setMessages] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const conversation = [
    {
      type: 'user',
      content: 'Good morning! Can you give me a summary of our media coverage this week?',
      time: '8:15 AM'
    },
    {
      type: 'agent',
      content: 'Good morning! I\'ve been monitoring all channels 24/7. Here\'s your media summary:',
      details: [
        '- 342 brand mentions across all channels',
        '- 89% positive sentiment (up 12% from last week)',
        '- 5 major publications featured your CEO'
      ],
      summary: 'TechCrunch and Forbes both ran positive stories about your latest product launch. I\'ve already engaged with 23 journalists who showed interest.',
      time: '8:15 AM'
    },
    {
      type: 'user',
      content: 'Excellent! What about our competitors? How\'s our share of voice?',
      time: '8:17 AM'
    },
    {
      type: 'agent',
      content: 'I\'ve analyzed the competitive landscape in real-time:',
      details: [
        '- Your share of voice: 42% (industry leader)',
        '- Closest competitor: 28%',
        '- You\'re dominating AI and innovation topics'
      ],
      recommendation: 'Recommendation: I\'ve identified 3 trending topics where we can further extend our lead. I can draft thought leadership pieces immediately.',
      time: '8:18 AM'
    },
    {
      type: 'user',
      content: 'Great insights! Any urgent items that need attention today?',
      time: '8:20 AM'
    },
    {
      type: 'agent',
      content: 'Yes, I\'ve flagged 3 high-priority opportunities:',
      tasks: [
        '- WSJ reporter requesting expert commentary (deadline: 2 PM)',
        '- Negative Reddit thread gaining traction (47 comments)',
        '- Speaking opportunity at TechSummit 2025'
      ],
      action: 'I\'ve drafted responses for all three. The WSJ opportunity could result in front-page coverage. Shall I proceed with outreach?',
      time: '8:21 AM'
    }
  ];

  useEffect(() => {
    if (!isPlaying || currentIndex >= conversation.length) return;

    const message = conversation[currentIndex];
    const delay = message.type === 'agent' ? 2000 : 3000;

    if (message.type === 'agent') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, message]);
        setCurrentIndex(prev => prev + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, message]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
    }

    if (currentIndex === conversation.length - 1) {
      setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 5000);
    }
  }, [currentIndex, isPlaying, conversation.length]);

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="container max-w-5xl mx-auto">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Partner With Your AI Agent
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            See how communications professionals interact with their NovaGent AI
          </p>
        </motion.div>

        <motion.div 
          className="bg-slate-50 dark:bg-slate-950 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Chat Header */}
          <div className="bg-white dark:bg-slate-900 p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Your NovaGent AI Agent</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">Active - Monitoring all channels</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message, index) => (
                <Message key={index} message={message} />
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Status Bar */}
          <div className="bg-slate-100 dark:bg-slate-900 p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <span className="text-slate-600 dark:text-slate-400">24/7 AI insights</span>
                <span className="text-slate-700 dark:text-slate-300">? {messages.length * 47} tasks completed today</span>
              </div>
              <span className="text-slate-500 dark:text-slate-400">
                {isPlaying ? 'Conversation playing' : 'Conversation paused'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Message({ message }: { message: any }) {
  const isUser = message.type === 'user';
  
  return (
    <motion.div
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        isUser ? 'bg-slate-200 dark:bg-slate-700' : 'bg-gradient-to-br from-purple-500 to-pink-500'
      }`}>
        {isUser ? <User className="w-5 h-5 text-slate-600 dark:text-slate-300" /> : <Bot className="w-5 h-5 text-white" />}
      </div>

      <div className={`flex-1 max-w-[80%] ${isUser ? 'text-right' : ''}`}>
        <div className={`inline-block p-4 rounded-xl ${
          isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
        }`}>
          <p>{message.content}</p>
          
          {message.details && (
            <div className="mt-3 space-y-1">
              {message.details.map((detail: string, i: number) => (
                <p key={i} className="text-sm opacity-90">{detail}</p>
              ))}
            </div>
          )}
          
          {message.tasks && (
            <div className="mt-3 space-y-1">
              {message.tasks.map((task: string, i: number) => (
                <p key={i} className="text-sm opacity-90">{task}</p>
              ))}
            </div>
          )}
          
          {message.summary && (
            <p className="text-sm mt-3 opacity-80">{message.summary}</p>
          )}
          
          {message.recommendation && (
            <div className="mt-3 p-2 bg-green-500/20 rounded-lg">
              <p className="text-sm">{message.recommendation}</p>
            </div>
          )}
          
          {message.action && (
            <p className="text-sm mt-3 font-medium">{message.action}</p>
          )}
        </div>
        
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 px-2">
          {message.time}
        </p>
      </div>
    </motion.div>
  );
}
