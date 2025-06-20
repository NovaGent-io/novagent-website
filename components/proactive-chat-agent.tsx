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
  }[] // Updated to match the type in your layout file
}

export default function ProactiveChatAgent({ proactiveTriggers = [] }: ProactiveChatAgentProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "agent", text: "Hi there! I'm here to help. 👋" },
    { id: "2", sender: "agent", text: "Do you need help finding anything?" },
  ])
  const [inputValue, setInputValue] = useState("")
  // We'll use this state to show a loading indicator
  const [isLoading, setIsLoading] = useState(false)
  const [showTourSpotlight, setShowTourSpotlight] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // This effect handles the proactive messages based on page path and delay
  useEffect(() => {
    // This logic needs to be updated to correctly check the current page path
    // For now, it will trigger the first message in the array after a delay.
    // In a real implementation, you would use Next.js's `usePathname` hook here.
    if (proactiveTriggers.length > 0) {
        const firstTrigger = proactiveTriggers[0];
        const proactiveTimer = setTimeout(() => {
            if (isOpen) return; // Don't trigger if chat is already open
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: "proactive-trigger", sender: "agent", text: firstTrigger.message },
            ]);
            setIsOpen(true); // Open the chat to show the message
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

  // --- THIS IS THE UPDATED FUNCTION ---
  // It now sends the user's message to your live Supabase Edge Function
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (inputValue.trim() === "") return

    // Add the user's message to the chat window immediately
    const userMessage: Message = { id: Date.now().toString(), sender: "user", text: inputValue }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    const currentMessage = inputValue;
    setInputValue("")
    setIsLoading(true)

    // --- API Call to Your Backend ---
    try {
      // Fetch data from your new Supabase Edge Function
      const response = await fetch(
        // IMPORTANT: This is your unique Supabase Function URL
        'https://hrtzhohxayjjjbutttga.supabase.co/functions/v1/chat-handler', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: currentMessage }),
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();

      // Check if the API returned a reply and add it to the chat
      if (data.reply) {
        const aiMessage: Message = { id: Date.now().toString(), sender: "agent", text: data.reply };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        throw new Error("Invalid response format from server.");
      }

    } catch (error) {
      console.error("Error calling chat handler:", error);
      // If the API call fails, display a friendly error message
      const errorMessage: Message = { id: Date.now().toString(), sender: "agent", text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      // Stop the loading indicator
      setIsLoading(false);
    }
  }
  
  // These functions can now be removed or repurposed, as the main AI logic
  // is handled by your OpenAI backend.
  const handleTourResponse = (startTour: boolean) => { /* ... */ }
  const handleHandoffResponse = (transfer: boolean) => { /* ... */ }
  const SpotlightOverlay = () => { /* ... */ }

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
              "fixed bottom-4 right-4 z-[999] w-96 rounded-lg shadow-xl overflow-hidden flex flex-col bg-white dark:bg-slate-900", // Added background color for solid appearance
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
      <SpotlightOverlay />
    </>
  )
}
