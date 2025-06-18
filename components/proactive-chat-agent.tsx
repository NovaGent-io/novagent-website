"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Send, X, Sparkles, Maximize2, Minimize2, MessageSquare } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface Message {
  id: string
  sender: "user" | "agent"
  text: string | React.ReactNode
}

interface ProactiveChatAgentProps {
  proactiveTriggers?: string[]
}

export default function ProactiveChatAgent({ proactiveTriggers = [] }: ProactiveChatAgentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "agent", text: "Hi there! I'm here to help.  👋" },
    { id: "2", sender: "agent", text: "Do you need help finding anything?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showTourSpotlight, setShowTourSpotlight] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate proactive triggers (e.g., after a delay or based on user behavior)
    const proactiveTimer = setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: "proactive",
          sender: "agent",
          text: "I noticed you're browsing our site. Can I help you find something specific?",
        },
      ])
    }, 10000)

    return () => clearTimeout(proactiveTimer)
  }, [proactiveTriggers])

  useEffect(() => {
    // Scroll to bottom on new messages
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return

    const newMessage = { id: Date.now().toString(), sender: "user", text: inputValue }
    setMessages((prevMessages) => [...prevMessages, newMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      let aiResponseText: string | React.ReactNode = "Thanks for your question!  Let me look that up for you..."
      if (inputValue.toLowerCase().includes("tour")) {
        aiResponseText = (
          <div>
            <p>I can guide you through a tour of our key features. Would you like to start the tour?</p>
            <div className="mt-2 space-x-2">
              <Button size="sm" onClick={() => handleTourResponse(true)}>
                Yes, Start Tour
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleTourResponse(false)}>
                No, Thanks
              </Button>
            </div>
          </div>
        )
      } else if (inputValue.toLowerCase().includes("hand off") || inputValue.toLowerCase().includes("human")) {
        aiResponseText = (
          <div>
            <p>I can connect you with a human agent. Would you like to be transferred?</p>
            <div className="mt-2 space-x-2">
              <Button size="sm" onClick={() => handleHandoffResponse(true)}>
                Yes, Transfer Me
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleHandoffResponse(false)}>
                No, Thanks
              </Button>
            </div>
          </div>
        )
      }
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), sender: "agent", text: aiResponseText },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const handleTourResponse = (startTour: boolean) => {
    if (startTour) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: Date.now().toString(),
          sender: "agent",
          text: "Great! Let's start the tour.  I'll highlight key areas on the page.",
        },
      ])
      setShowTourSpotlight(true)
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), sender: "agent", text: "No problem! Let me know if you change your mind." },
      ])
    }
  }

  const handleHandoffResponse = (transfer: boolean) => {
    if (transfer) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), sender: "agent", text: "Connecting you with a human agent now..." },
      ])
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), sender: "agent", text: "Okay! How else can I help?" },
      ])
    }
  }

  const SpotlightOverlay = () => {
    if (!showTourSpotlight) return null

    return (
      <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          This is a spotlighted area!
          <Button onClick={() => setShowTourSpotlight(false)}>End Tour</Button>
        </div>
      </div>
    )
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
              "fixed bottom-4 right-4 z-[999] w-96 rounded-lg shadow-xl overflow-hidden flex flex-col",
              isMaximized ? "max-h-[90vh]" : "h-[60vh]",
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-slate-950/75 backdrop-blur-sm border-b border-slate-700/60">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-sky-400" />
                <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-slate-100 hover:bg-slate-700/70"
                  onClick={() => setIsMaximized(!isMaximized)}
                >
                  {isMaximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:text-slate-100 hover:bg-slate-700/70"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>
            </div>

            {/* Conversation Display */}
            <div ref={chatContainerRef} className="flex-1 p-3 overflow-y-auto space-y-2">
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
              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-xl px-3 py-2 text-sm max-w-[75%] w-fit bg-slate-800 text-slate-300">
                    Typing...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-slate-700/60 bg-slate-950/75 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
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
                  className="flex-1 bg-slate-800 border-slate-700 text-white text-sm rounded-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isTyping || inputValue.trim() === ""}
                  className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white rounded-lg p-2.5"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </Button>
              </div>
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
      <SpotlightOverlay />
    </>
  )
}
