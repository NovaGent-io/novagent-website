"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Send, X, Sparkles, Maximize2, Minimize2, MessageSquare } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

// Defining the structure for each message in the chat
interface Message {
  id: string
  sender: "user" | "agent"
  text: string | React.ReactNode
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
    { id: "2", sender: "agent", text: "Do you need help finding anything?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasProactiveTriggered, setHasProactiveTriggered] = useState(false)
  const [pageVisitTime, setPageVisitTime] = useState<number>(0)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Session storage key for tracking chatbot interactions
  const SESSION_KEY = 'novagent-chatbot-session'

  // Check if chatbot should show based on session storage
  const shouldShowChatbot = () => {
    if (typeof window === 'undefined') return false
    
    const sessionData = sessionStorage.getItem(SESSION_KEY)
    if (!sessionData) return true

    try {
      const parsedData = JSON.parse(sessionData)
      const currentPath = pathname

      // Check if this specific page has already triggered
      if (parsedData.triggeredPages?.includes(currentPath)) {
        return false
      }

      // Check if we've shown globally once this session (for pages without specific triggers)
      if (parsedData.hasShownGlobally && !hasMatchingTrigger(currentPath)) {
        return false
      }

      return true
    } catch {
      return true
    }
  }

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

  // Update session storage when chatbot is shown
  const updateSessionStorage = (path: string, isGlobal: boolean = false) => {
    if (typeof window === 'undefined') return

    const sessionData = sessionStorage.getItem(SESSION_KEY)
    let parsedData = { triggeredPages: [], hasShownGlobally: false }

    if (sessionData) {
      try {
        parsedData = JSON.parse(sessionData)
      } catch {
        // If parsing fails, use default
      }
    }

    if (isGlobal) {
      parsedData.hasShownGlobally = true
    } else {
      if (!parsedData.triggeredPages.includes(path)) {
        parsedData.triggeredPages.push(path)
      }
    }

    sessionStorage.setItem(SESSION_KEY, JSON.stringify(parsedData))
  }

  // Reset page visit time when pathname changes
  useEffect(() => {
    setPageVisitTime(Date.now())
    setHasProactiveTriggered(false)
  }, [pathname])

  // Main proactive trigger logic
  useEffect(() => {
    if (hasProactiveTriggered || !shouldShowChatbot()) return

    const currentPath = pathname
    const matchingTrigger = getMatchingTrigger(currentPath)

    if (!matchingTrigger) return

    const proactiveTimer = setTimeout(() => {
      if (isOpen) return

      // Add the proactive message
      setMessages((prevMessages) => [
        ...prevMessages,
        { 
          id: `proactive-trigger-${Date.now()}`, 
          sender: "agent", 
          text: matchingTrigger.message 
        },
      ])

      setIsOpen(true)
      setHasProactiveTriggered(true)

      // Update session storage
      updateSessionStorage(currentPath, false)

    }, matchingTrigger.delaySeconds * 1000)

    return () => clearTimeout(proactiveTimer)
  }, [pathname, proactiveTriggers, isOpen, hasProactiveTriggered])

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
    const currentMessage = inputValue;
    setInputValue("")
    setIsLoading(true)

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
          body: JSON.stringify({ message: currentMessage }),
        }
      );

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${errorBody}`);
      }

      const data = await response.json();

      if (data.reply) {
        const aiMessage: Message = { id: Date.now().toString(), sender: "agent", text: data.reply };
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
                      "rounded-xl px-3 py-2 text-sm max-w-[75%] w-fit",
                      message.sender === "user" ? "bg-sky-500 text-white" : "bg-slate-800 text-slate-300",
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
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
            onClick={() => setIsOpen(true)}
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