"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Send, X, Sparkles, Maximize2, Minimize2, MessageSquare, Calendar, DollarSign, Bot, Users } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

// Defining the structure for each message in the chat
interface Message {
  id: string
  sender: "user" | "agent"
  text: string | React.ReactNode
  showFollowUp?: boolean
}

interface ProactiveChatAgentProps {
  proactiveTriggers?: {
    pagePath: string
    delaySeconds: number
    message: string
    showOncePerSession?: boolean
  }[]
}

export default function ProactiveChatAgent({ proactiveTriggers = [] }: ProactiveChatAgentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "agent", text: "Hi there! I'm here to help. 👋" },
    { id: "2", sender: "agent", text: "What can I help you with today?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasProactiveTriggered, setHasProactiveTriggered] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(true)
  const [pageVisitTime, setPageVisitTime] = useState<number>(0)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Session storage key for tracking chatbot interactions
  const SESSION_KEY = 'novagent-chatbot-session'

  // Quick action buttons data
  const quickActions = [
    {
      id: "demo",
      label: "🚀 Book a Demo",
      message: "I'd like to book a demo",
      response: "Great choice! I'll connect you with our team for a personalized demo. You can schedule a 30-minute session that works for you:",
      link: "https://calendly.com/gladiator-novagent/30min",
      linkText: "📅 Schedule Your Demo"
    },
    {
      id: "pricing",
      label: "💰 See Pricing", 
      message: "I want to see your pricing",
      response: "Perfect! Here's our transparent pricing breakdown. We offer flexible engagement models to fit different business needs:",
      link: "https://novagent.io/pricing",
      linkText: "💰 View Pricing Details"
    },
    {
      id: "agents",
      label: "🤖 Learn About AI Agents",
      message: "Tell me about your AI agents",
      response: "Excellent question! Our AI agents are autonomous systems that handle complex business processes. Here are our main solutions:",
      links: [
        { url: "https://novagent.io/solutions/ai-agent-suite", text: "🤖 AI Agent Suite" },
        { url: "https://novagent.io/solutions/custom-agentic-systems", text: "⚙️ Custom Agentic Systems" },
        { url: "https://novagent.io/how-it-works", text: "🔧 How It Works" },
        { url: "https://novagent.io/why-novagent", text: "🎯 Why NovaGent" }
      ]
    },
    {
      id: "sales",
      label: "💬 Chat with Sales",
      message: "I want to speak with sales",
      response: "Perfect! Our sales team would love to discuss how NovaGent can transform your business operations. Let's get you connected:",
      link: "https://calendly.com/gladiator-novagent/30min",
      linkText: "📞 Book a Sales Call"
    }
  ]

  // Check if current path has a matching trigger
  const hasMatchingTrigger = (path: string) => {
    return proactiveTriggers.some(trigger => {
      if (trigger.pagePath.endsWith('*')) {
        const basePath = trigger.pagePath.slice(0, -1)
        return path.startsWith(basePath)
      }
      return path === trigger.pagePath
    })
  }

  // Get matching trigger for current path
  const getMatchingTrigger = (path: string) => {
    return proactiveTriggers.find(trigger => {
      if (trigger.pagePath.endsWith('*')) {
        const basePath = trigger.pagePath.slice(0, -1)
        return path.startsWith(basePath)
      }
      return path === trigger.pagePath
    })
  }

  // Handle quick action button clicks
  const handleQuickAction = (action: typeof quickActions[0]) => {
    // Add user message
    const userMessage: Message = { 
      id: Date.now().toString(), 
      sender: "user", 
      text: action.message 
    }
    setMessages(prev => [...prev, userMessage])

    // Add bot response with links
    setTimeout(() => {
      let responseContent: React.ReactNode = (
        <div className="space-y-3">
          <p>{action.response}</p>
          {action.links ? (
            <div className="flex flex-col gap-2">
              {action.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center"
                >
                  {link.text} →
                </a>
              ))}
            </div>
          ) : action.link ? (
            <a
              href={action.link}
              className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            >
              {action.linkText} →
            </a>
          ) : null}
        </div>
      )

      const botMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        sender: "agent", 
        text: responseContent,
        showFollowUp: true
      }
      setMessages(prev => [...prev, botMessage])

      // Add follow-up question
      setTimeout(() => {
        const followUpMessage: Message = {
          id: (Date.now() + 2).toString(),
          sender: "agent", 
          text: "Was this helpful? Is there anything else I can help you with?"
        }
        setMessages(prev => [...prev, followUpMessage])
      }, 1000)

    }, 500)

    setShowQuickActions(false)
  }

  // Reset page visit time when pathname changes
  useEffect(() => {
    setPageVisitTime(Date.now())
    setHasProactiveTriggered(false)
  }, [pathname])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === "") return

    const userMessage: Message = { id: Date.now().toString(), sender: "user", text: inputValue }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    const currentMessage = inputValue.toLowerCase();
    const originalMessage = inputValue;
    setInputValue("")
    setIsLoading(true)
    setShowQuickActions(false)

    // Check if the user's message is a DIRECT REQUEST (not just mentioning topics)
    const checkForDirectRequest = (message: string) => {
      // Only trigger on very specific, direct requests
      if ((message.includes('book a demo') || message.includes('schedule a demo') || message.includes('book demo')) && 
          !message.includes('tell me about') && !message.includes('what is') && !message.includes('how does')) {
        return {
          type: 'demo',
          response: "I'd be happy to help you book a demo! You can schedule a 30-minute session with our team:",
          link: "https://calendly.com/gladiator-novagent/30min",
          linkText: "📅 Schedule Your Demo"
        }
      }
      
      // Only for direct pricing requests
      if ((message.includes('show me pricing') || message.includes('see pricing') || message.includes('view pricing')) && 
          !message.includes('tell me about') && !message.includes('how much') && !message.includes('what does')) {
        return {
          type: 'pricing',
          response: "Here's our transparent pricing breakdown with flexible engagement models:",
          link: "https://novagent.io/pricing",
          linkText: "💰 View Pricing Details"
        }
      }
      
      return null // Let AI handle everything else
    }

    // Check for direct requests only
    const directRequest = checkForDirectRequest(currentMessage)
    
    if (directRequest) {
      // Handle direct requests with links
      setTimeout(() => {
        let responseContent: React.ReactNode = (
          <div className="space-y-3">
            <p>{directRequest.response}</p>
            <a
              href={directRequest.link}
              className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            >
              {directRequest.linkText} →
            </a>
          </div>
        )

        const aiMessage: Message = { 
          id: Date.now().toString(), 
          sender: "agent", 
          text: responseContent 
        }
        setMessages((prevMessages) => [...prevMessages, aiMessage])
        setIsLoading(false)
      }, 500)
      
      return // Don't make API call for direct requests
    }

    // For all other messages, let the AI handle discovery and qualification
    try {
      const response = await fetch(
        'https://hrtzhohxayjjjbutttga.supabase.co/functions/v1/chat-handler', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({ message: originalMessage }),
        }
      );

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${errorBody}`);
      }

      const data = await response.json();

      if (data.reply) {
        // Check if the AI response should include helpful links
        const aiResponseLower = data.reply.toLowerCase();
        let enhancedResponse = data.reply;
        
        // Add helpful links to AI responses when appropriate
        if (aiResponseLower.includes('demo') || aiResponseLower.includes('schedule') || aiResponseLower.includes('meeting')) {
          enhancedResponse = (
            <div className="space-y-3">
              <p>{data.reply}</p>
              <a
                href="https://calendly.com/gladiator-novagent/30min"
                className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                📅 Schedule Your Demo →
              </a>
            </div>
          )
        } else if (aiResponseLower.includes('pricing') || aiResponseLower.includes('cost')) {
          enhancedResponse = (
            <div className="space-y-3">
              <p>{data.reply}</p>
              <a
                href="https://novagent.io/pricing"
                className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              >
                💰 View Pricing Details →
              </a>
            </div>
          )
        } else if (aiResponseLower.includes('solutions') || aiResponseLower.includes('agents')) {
          enhancedResponse = (
            <div className="space-y-3">
              <p>{data.reply}</p>
              <div className="flex flex-col gap-2">
                <a href="https://novagent.io/solutions/ai-agent-suite" className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center">🤖 AI Agent Suite →</a>
                <a href="https://novagent.io/solutions/custom-agentic-systems" className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center">⚙️ Custom Agentic Systems →</a>
                <a href="https://novagent.io/how-it-works" className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center">🔧 How It Works →</a>
                <a href="https://novagent.io/why-novagent" className="inline-block bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center">🎯 Why NovaGent →</a>
              </div>
            </div>
          )
        }
        
        const aiMessage: Message = { id: Date.now().toString(), sender: "agent", text: enhancedResponse };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        throw new Error("Invalid response format from server.");
      }

    } catch (error) {
      console.error("Error calling chat handler:", error);
      const errorMessage: Message = { id: Date.now().toString(), sender: "agent", text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(
              "fixed bottom-4 right-4 z-[999] w-96 rounded-lg shadow-xl overflow-hidden flex flex-col bg-white dark:bg-slate-900",
              isMaximized ? "max-h-[90vh] h-[90vh]" : "h-[60vh]",
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-slate-950/75 backdrop-blur-sm border-b border-slate-700/60 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-sky-400" />
                <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-slate-100 hover:bg-slate-700/70 h-8 w-8"
                  onClick={() => setIsMaximized(!isMaximized)}
                >
                  {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-slate-100 hover:bg-slate-700/70 h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>
            </div>

            {/* Conversation Display */}
            <div ref={chatContainerRef} className="flex-1 p-3 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm max-w-[85%] w-fit",
                      message.sender === "user" ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-300",
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              {showQuickActions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-slate-800 rounded-xl p-3 max-w-[85%]">
                    <p className="text-slate-300 text-sm mb-3">Choose an option or type your question:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {quickActions.map((action) => (
                        <Button
                          key={action.id}
                          onClick={() => handleQuickAction(action)}
                          variant="outline"
                          size="sm"
                          className="justify-start text-left h-auto py-2 px-3 bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:text-white transition-all duration-200"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-xl px-3 py-2 text-sm max-w-[75%] w-fit bg-slate-800 text-slate-300">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-slate-700/60 bg-slate-950/75 backdrop-blur-sm flex-shrink-0">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-800 border-slate-700 text-white text-sm rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                  rows={1}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading || inputValue.trim() === ""}
                  className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-lg p-2.5"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Bubble */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="fixed bottom-4 right-4 z-[999]"
        >
          <Button
            onClick={() => {
              setIsOpen(true)
              setShowQuickActions(true)
            }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-purple-500 shadow-xl text-white shadow-2xl hover:scale-110 hover:shadow-2xl transition-transform duration-200 ease-in-out flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageSquare size={30} />
          </Button>
        </motion.div>
      )}
    </>
  )
}