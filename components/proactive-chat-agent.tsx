"use client"

import { useEffect, useState, useRef } from "react"
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
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // This is a placeholder for more advanced logic.
  useEffect(() => {
    if (proactiveTriggers.length > 0) {
        const firstTrigger = proactiveTriggers[0];
        const proactiveTimer = setTimeout(() => {
            if (isOpen) return;
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: "proactive-trigger", sender: "agent", text: firstTrigger.message },
            ]);
            setIsOpen(true);
        }, firstTrigger.delaySeconds * 1000);
        return () => clearTimeout(proactiveTimer);
    }
  }, [proactiveTriggers, isOpen]);

  // Effect to auto-scroll to the latest message
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

    // --- ADJUSTMENT: ADDED THIS LINE FOR DEBUGGING ---
    console.log("Verifying API Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
    // ------------------------------------------------

    try {
      // --- API Call to Your Backend with Authorization ---
      const response = await fetch(
        'https://hrtzhohxayjjjbutttga.supabase.co/functions/v1/chat-handler', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'apikey': `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
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
            <div className="flex items-center justify-between p-3 bg-slate-950/75 backdrop-blur-sm border-