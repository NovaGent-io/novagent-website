"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, CheckCircle, TrendingUp, Factory, AlertTriangle, Gauge, Package, Play, Pause } from 'lucide-react';

export function AgentConversation() {
  const [messages, setMessages] = useState<any[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const conversationLoop = [
    {
      type: 'user',
      content: 'Good morning! Any alerts from the night shift I should know about?',
      time: '7:05 AM'
    },
    {
      type: 'agent',
      content: 'Good morning! I monitored all systems overnight. Here\'s your priority summary:',
      details: [
        '- Line 3 showed 0.8% quality variance at 2:47 AM - within tolerance',
        '- Machine B-12 vibration pattern suggests maintenance in 72 hours', 
        '- Inventory alert: Steel coils at 15% - reorder initiated'
      ],
      summary: 'All production lines maintained 97.3% efficiency. No critical issues, but I\'ve flagged 2 preventive actions.',
      time: '7:05 AM'
    },
    {
      type: 'user',
      content: 'Tell me more about Machine B-12. What\'s the predicted failure risk?',
      time: '7:07 AM'
    },
    {
      type: 'agent',
      content: 'I\'ve analyzed B-12\'s sensor data over the past 168 hours:',
      header: 'Predictive Maintenance Analysis:',
      details: [
        '- Bearing temperature: +3.2?C above baseline',
        '- Vibration frequency: Showing early harmonic distortion',
        '- Historical data: Similar pattern preceded bearing failure'
      ],
      recommendation: 'Recommendation: Schedule maintenance during tomorrow\'s planned downtime. I can order parts now and adjust production schedule to minimize impact. Estimated savings: $47,000 in prevented emergency repairs.',
      time: '7:08 AM'
    },
    {
      type: 'user',
      content: 'Excellent catch. Go ahead with the maintenance schedule. What\'s our production outlook for today?',
      time: '7:10 AM'
    },
    {
      type: 'agent',
      content: 'Maintenance scheduled. Here\'s today\'s production forecast:',
      tasks: [
        '- Order #5847 (priority): On track for 2 PM completion',
        '- Raw material utilization: Optimized to 94.7%',
        '- Quality checkpoints: Automated at 30-min intervals'
      ],
      action: 'I\'m actively monitoring all KPIs and will alert you to any deviations exceeding 2%',
      time: '7:10 AM'
    },
    {
      type: 'user',
      content: 'Perfect. Keep me posted on that priority order.',
      time: '7:12 AM'
    },
    {
      type: 'agent',
      content: 'Will do! I\'ll send real-time updates on Order #5847 and a full production report at noon.',
      time: '7:12 AM'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const addNextMessage = () => {
      const nextMessage = conversationLoop[currentMessageIndex];
      
      // Show typing indicator for agent messages
      if (nextMessage.type === 'agent') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, nextMessage]);
          setCurrentMessageIndex((prev) => (prev + 1) % conversationLoop.length);
        }, 1500);
      } else {
        setMessages(prev => [...prev, nextMessage]);
        setCurrentMessageIndex((prev) => (prev + 1) % conversationLoop.length);
      }
    };

    // Reset messages when loop completes
    if (currentMessageIndex === 0 && messages.length > 0) {
      setMessages([]);
      setTimeout(addNextMessage, 1000);
    } else {
      const timer = setTimeout(addNextMessage, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex, isPlaying, messages.length]);

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Partner With Your AI Agent
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            See how production managers interact with their NovaGent AI
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-slate-50 dark:bg-slate-950 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Chat Header */}
            <div className="bg-white dark:bg-slate-900 p-4 md:p-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <Bot className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Your NovaGent AI Agent</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Active - Monitoring all production lines</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  aria-label={isPlaying ? 'Pause conversation' : 'Play conversation'}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <Play className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div className="h-[500px] overflow-y-auto p-4 md:p-6 space-y-4 scroll-smooth">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <Message key={`${index}-${message.time}`} message={message} index={index} />
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
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
                  <span className="text-slate-600 dark:text-slate-400">24/7 Production monitoring</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {messages.filter(m => m.type === 'agent').length * 127} quality checks today
                    </span>
                  </div>
                </div>
                <span className="text-slate-500 dark:text-slate-400">
                  {isPlaying ? 'Conversation playing' : 'Conversation paused'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Message({ message, index }: { message: any; index: number }) {
  const isUser = message.type === 'user';
  
  return (
    <motion.div
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Avatar */}
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
        isUser 
          ? 'bg-slate-200 dark:bg-slate-700' 
          : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
      }`}>
        {isUser ? <User className="h-5 w-5 text-slate-600 dark:text-slate-300" /> : <Bot className="h-5 w-5" />}
      </div>

      {/* Message Content */}
      <div className={`flex-1 max-w-[80%] ${isUser ? 'text-right' : ''}`}>
        <div className={`inline-block p-4 rounded-xl ${
          isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700'
        }`}>
          <p className="text-sm md:text-base">{message.content}</p>
          
          {/* Agent Details */}
          {message.details && (
            <div className="mt-3 space-y-1">
              {message.header && (
                <p className="font-semibold text-sm mb-2">{message.header}</p>
              )}
              {message.details.map((detail: string, i: number) => (
                <p key={i} className="text-sm">{detail}</p>
              ))}
            </div>
          )}
          
          {/* Tasks */}
          {message.tasks && (
            <div className="mt-3 space-y-1">
              {message.tasks.map((task: string, i: number) => (
                <p key={i} className="text-sm">{task}</p>
              ))}
            </div>
          )}
          
          {/* Summary */}
          {message.summary && (
            <p className="text-sm mt-3 opacity-90">{message.summary}</p>
          )}
          
          {/* Recommendation */}
          {message.recommendation && (
            <div className="mt-3 p-2 bg-green-500/20 rounded-lg">
              <p className="text-sm">{message.recommendation}</p>
            </div>
          )}
          
          {/* Action */}
          {message.action && (
            <p className="text-sm mt-3 font-medium">{message.action}</p>
          )}
        </div>
        
        {/* Time */}
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 px-2">
          {message.time}
        </p>
      </div>
    </motion.div>
  );
}
