"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Loader2, Sparkles, FileText, Calculator, Target, Calendar } from 'lucide-react';

export function AgentConversation() {
  const [messages, setMessages] = useState<Array<{
    role: 'user' | 'agent';
    content: string;
    data?: any;
    timestamp: string;
  }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const conversation = [
    {
      role: 'user' as const,
      content: "What's our current pipeline status and billable hour forecast?",
      timestamp: "2:14 PM"
    },
    {
      role: 'agent' as const,
      content: "I've analyzed your current engagements. Here's your pipeline status:",
      data: {
        type: 'pipeline',
        metrics: {
          activeProjects: 12,
          pipelineValue: "$2.4M",
          billableHours: "1,847 hrs",
          utilization: "87%"
        },
        forecast: {
          nextMonth: "+$450K",
          quarterEnd: "+$1.2M",
          capacity: "94% booked"
        }
      },
      timestamp: "2:14 PM"
    },
    {
      role: 'user' as const,
      content: "Find new opportunities similar to our recent FinTech project wins",
      timestamp: "2:15 PM"
    },
    {
      role: 'agent' as const,
      content: "I've identified 8 high-probability opportunities matching your FinTech project profile. Running targeted outreach now...",
      data: {
        type: 'opportunities',
        results: [
          { company: "PaymentCo", value: "$180K", probability: "85%", match: "Digital transformation" },
          { company: "BankingApp Inc", value: "$220K", probability: "78%", match: "Cloud migration" },
          { company: "InvestTech", value: "$150K", probability: "72%", match: "API development" }
        ],
        action: "Personalized proposals drafted and scheduled for delivery"
      },
      timestamp: "2:15 PM"
    },
    {
      role: 'user' as const,
      content: "Generate invoices for all completed milestones this month",
      timestamp: "2:16 PM"
    },
    {
      role: 'agent' as const,
      content: "Processing completed milestones and generating invoices...",
      data: {
        type: 'billing',
        summary: {
          invoicesGenerated: 7,
          totalValue: "$385,000",
          clientsProcessed: 5,
          avgDaysOutstanding: 12
        },
        status: "All invoices generated and queued for approval. Expected collection: $285K within 30 days."
      },
      timestamp: "2:16 PM"
    }
  ];

  useEffect(() => {
    if (!hasStarted) return;

    let messageIndex = 0;
    const addNextMessage = () => {
      if (messageIndex >= conversation.length) return;

      const message = conversation[messageIndex];
      const isAgent = message.role === 'agent';

      if (isAgent) {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, message]);
          messageIndex++;
          setTimeout(addNextMessage, 1500);
        }, 2000);
      } else {
        setMessages(prev => [...prev, message]);
        messageIndex++;
        setTimeout(addNextMessage, 500);
      }
    };

    addNextMessage();
  }, [hasStarted]);

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3 md:mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Partner with Your AI Business Manager
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Real-time insights, automated operations, and proactive recommendations
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-xl rounded-xl md:rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Chat Header */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 md:px-6 py-3 md:py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg md:rounded-xl flex items-center justify-center">
                  <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">Your Professional Services AI</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Always analyzing ? Always optimizing</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">Active</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[400px] md:h-[500px] overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6">
              {!hasStarted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center h-full text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 md:mb-6 relative">
                    <Bot className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-ping opacity-20" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-2">Ready to Maximize Your Firm's Potential</h4>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 md:mb-6 max-w-md">
                    Watch how your AI agent handles pipeline management, opportunity discovery, and automated billing in real-time.
                  </p>
                  <button
                    onClick={() => setHasStarted(true)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2 text-sm md:text-base"
                  >
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                    Start Conversation
                  </button>
                </motion.div>
              ) : (
                <>
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.role === 'agent' && (
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                          </div>
                        )}
                        <div className={`max-w-[85%] md:max-w-[80%] ${message.role === 'user' ? 'order-2' : ''}`}>
                          <div className={`rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 ${
                            message.role === 'user' 
                              ? 'bg-purple-500 text-white' 
                              : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600'
                          }`}>
                            <p className="text-sm md:text-base leading-relaxed">{message.content}</p>
                            
                            {message.data && (
                              <motion.div 
                                className="mt-3 space-y-3"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                transition={{ delay: 0.3 }}
                              >
                                {message.data.type === 'pipeline' && (
                                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                                    <div className="bg-slate-50 dark:bg-slate-600/50 rounded-lg p-2 md:p-3">
                                      <p className="text-xs text-slate-500 dark:text-slate-400">Active Projects</p>
                                      <p className="text-base md:text-lg font-bold text-slate-900 dark:text-white">{message.data.metrics.activeProjects}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-600/50 rounded-lg p-2 md:p-3">
                                      <p className="text-xs text-slate-500 dark:text-slate-400">Pipeline Value</p>
                                      <p className="text-base md:text-lg font-bold text-purple-600 dark:text-purple-400">{message.data.metrics.pipelineValue}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-600/50 rounded-lg p-2 md:p-3">
                                      <p className="text-xs text-slate-500 dark:text-slate-400">Billable Hours</p>
                                      <p className="text-base md:text-lg font-bold text-slate-900 dark:text-white">{message.data.metrics.billableHours}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-600/50 rounded-lg p-2 md:p-3">
                                      <p className="text-xs text-slate-500 dark:text-slate-400">Utilization</p>
                                      <p className="text-base md:text-lg font-bold text-green-600 dark:text-green-400">{message.data.metrics.utilization}</p>
                                    </div>
                                  </div>
                                )}
                                
                                {message.data.type === 'opportunities' && (
                                  <div className="space-y-2">
                                    {message.data.results.map((opp: any, i: number) => (
                                      <div key={i} className="bg-slate-50 dark:bg-slate-600/50 rounded-lg p-2 md:p-3 flex items-center justify-between">
                                        <div>
                                          <p className="text-sm font-medium text-slate-900 dark:text-white">{opp.company}</p>
                                          <p className="text-xs text-slate-500 dark:text-slate-400">{opp.match}</p>
                                        </div>
                                        <div className="text-right">
                                          <p className="text-sm font-bold text-purple-600 dark:text-purple-400">{opp.value}</p>
                                          <p className="text-xs text-green-600 dark:text-green-400">{opp.probability} match</p>
                                        </div>
                                      </div>
                                    ))}
                                    <div className="flex items-center gap-2 mt-2 text-xs text-green-600 dark:text-green-400">
                                      <Target className="w-3 h-3" />
                                      <span>{message.data.action}</span>
                                    </div>
                                  </div>
                                )}
                                
                                {message.data.type === 'billing' && (
                                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-3 md:p-4 border border-green-200 dark:border-green-700">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Calculator className="w-4 h-4 text-green-600 dark:text-green-400" />
                                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Billing Summary</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                      <div>
                                        <p className="text-slate-600 dark:text-slate-400">Invoices</p>
                                        <p className="font-bold text-slate-900 dark:text-white">{message.data.summary.invoicesGenerated}</p>
                                      </div>
                                      <div>
                                        <p className="text-slate-600 dark:text-slate-400">Total Value</p>
                                        <p className="font-bold text-green-600 dark:text-green-400">{message.data.summary.totalValue}</p>
                                      </div>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{message.data.status}</p>
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 block">{message.timestamp}</span>
                        </div>
                        {message.role === 'user' && (
                          <div className="w-7 h-7 md:w-8 md:h-8 bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 order-1">
                            <User className="w-3.5 h-3.5 md:w-4 md:h-4 text-slate-600 dark:text-slate-300" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-3"
                    >
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                      </div>
                      <div className="bg-white dark:bg-slate-700 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 border border-slate-200 dark:border-slate-600">
                        <div className="flex items-center gap-1">
                          <Loader2 className="w-3 h-3 md:w-4 md:h-4 animate-spin text-purple-500" />
                          <span className="text-sm text-slate-500 dark:text-slate-400">AI is analyzing...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              )}
            </div>

            {/* Action Bar */}
            <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-4 md:px-6 py-3 md:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <button className="text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1">
                    <Target className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Lead Gen</span>
                  </button>
                  <button className="text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Schedule</span>
                  </button>
                  <button className="text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-1">
                    <FileText className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="hidden sm:inline">Reports</span>
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Sparkles className="w-3 h-3" />
                  <span className="hidden sm:inline">Powered by NovaGent AI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
