"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  FileText,
  RotateCcw,
  Sparkles,
  ArrowDown,
} from "lucide-react";
import { useLenis } from "lenis/react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: string;
}

interface FloatingChatbotProps {
  onOpenCv?: () => void;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "init-1",
    role: "assistant",
    content:
      "Hey there! 👋 I'm Sahil's AI assistant. Ask me anything about his skills, projects, experience, or availability!",
  },
];

const SUGGESTED_QUESTIONS = [
  "What is Sahil's tech stack?",
  "Tell me about recent projects",
  "Is he available for hire?",
  "What work experience does he have?",
];

export default function FloatingChatbot({ onOpenCv }: FloatingChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lenis = useLenis();

  // Show floating greeting bubble after 1.8 seconds on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowGreeting(true);
      }
    }, 1800);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Scroll to bottom of message list whenever messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input when opened
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, messages]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setShowGreeting(false);
    setHasInteracted(true);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          data.message ||
          "I'm here to help! Feel free to ask another question or contact Sahil directly.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-err-${Date.now()}`,
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Feel free to email Sahil directly at sahilkrishnacb@gmail.com!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setInputValue("");
  };

  const handleScrollToContact = () => {
    setIsOpen(false);
    if (lenis) {
      lenis.scrollTo("#contact", { duration: 1.2, offset: -20 });
    } else {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <aside
      aria-label="AI Assistant"
      className="fixed bottom-12 right-4 sm:bottom-16 sm:right-6 md:bottom-20 md:right-8 z-40 select-none flex flex-col items-end"
    >
      {/* Chat Popover Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-88 max-w-[370px] h-[520px] max-h-[80vh] flex flex-col bg-[#FAFAF8] dark:bg-[#161615] border border-[#EAE8E2] dark:border-[#282725] rounded-2xl shadow-2xl overflow-hidden text-[#141413] dark:text-[#EDEDEB]"
            role="dialog"
            aria-modal="true"
            aria-label="Chat with Sahil's AI assistant"
          >
            {/* Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#F4F3EE]/90 dark:bg-[#1E1D1A]/90 border-b border-[#EAE8E2] dark:border-[#282725] backdrop-blur-xs shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-neutral-200/50 dark:bg-neutral-800/50 flex items-center justify-center shrink-0">
                    <video
                      src="/robot.webm"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-medium">Sahil&apos;s AI Bot</span>
                      <span className="flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Online
                      </span>
                    </div>
                    <p className="text-[10px] text-[#84837E] dark:text-[#8E8D88]">
                      Ask me anything about Sahil
                    </p>
                  </div>
                </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={handleResetChat}
                      title="Clear conversation"
                      aria-label="Clear conversation"
                      className="p-1.5 rounded-full text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
                    >
                      <RotateCcw size={13} />
                    </button>
                <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      aria-label="Close assistant"
                      className="p-1.5 rounded-full text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] hover:bg-neutral-200/60 dark:hover:bg-neutral-800/60 transition-colors cursor-pointer"
                    >
                    <X size={15} />
                  </button>
                </div>
              </div>

            {/* Conversation Messages Area */}
            <div className="flex-1 p-3.5 space-y-3 overflow-y-auto text-xs">
              {messages.map((message) => {
                const isAssistant = message.role === "assistant";
                return (
                  <div
                    key={message.id}
                    className={`flex flex-col ${
                      isAssistant ? "items-start" : "items-end"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-2.5 rounded-2xl leading-relaxed whitespace-pre-wrap break-words ${
                        isAssistant
                          ? "bg-[#F4F3EE] dark:bg-[#22211E] text-[#41403D] dark:text-[#C5C4BF] rounded-tl-xs"
                          : "bg-[#141413] dark:bg-[#EDEDEB] text-[#FAFAF8] dark:text-[#121211] rounded-tr-xs"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.timestamp && (
                      <span className="text-[9px] text-[#84837E] dark:text-[#8E8D88] mt-1 px-1 font-mono">
                        {message.timestamp}
                      </span>
                    )}
                  </div>
              );
              })}

                {/* Typing / Loading indicator */}
                {isLoading && (
                  <div className="flex items-center gap-1.5 p-2.5 rounded-2xl rounded-tl-xs bg-[#F4F3EE] dark:bg-[#22211E] text-[#84837E] dark:text-[#8E8D88] w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce"></span>
                  </div>
              )}

              {/* Suggested Questions Pills (shown if fewer than 3 messages) */}
              {messages.length <= 2 && (
                <div className="pt-2 space-y-1.5">
                  <p className="text-[10px] font-mono text-[#84837E] dark:text-[#8E8D88] uppercase tracking-wider">
                    Suggested prompts
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => handleSendMessage(q)}
                        disabled={isLoading}
                        className="px-2.5 py-1 text-[11px] rounded-full border border-[#EAE8E2] dark:border-[#282725] bg-[#F4F3EE]/60 dark:bg-[#20201D]/60 hover:bg-[#EAE8E2] dark:hover:bg-[#282725] text-[#5E5D59] dark:text-[#A3A29D] hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors cursor-pointer text-left disabled:opacity-50"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Bar (CV & Contact) */}
            <div className="px-3 py-1.5 border-t border-[#EAE8E2]/60 dark:border-[#282725]/60 bg-[#F4F3EE]/40 dark:bg-[#1E1D1A]/40 flex items-center justify-between text-[11px] shrink-0">
              <button
                type="button"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-1 text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors cursor-pointer"
              >
                <ArrowDown size={11} />
                <span>Contact section</span>
              </button>

              {onOpenCv && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCv();
                  }}
                  className="inline-flex items-center gap-1 text-[#84837E] dark:text-[#8E8D88] hover:text-[#141413] dark:hover:text-[#EDEDEB] transition-colors cursor-pointer"
                >
                  <FileText size={11} />
                  <span>View CV</span>
                </button>
              )}
            </div>

            {/* Message Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-2 border-t border-[#EAE8E2] dark:border-[#282725] bg-[#F4F3EE]/70 dark:bg-[#1E1D1A]/70 flex items-center gap-1.5 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything about Sahil..."
                disabled={isLoading}
                className="flex-1 px-3 py-1.5 rounded-full text-xs bg-white dark:bg-[#121211] border border-[#EAE8E2] dark:border-[#282725] focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                aria-label="Send question"
                className="p-1.5 rounded-full bg-[#141413] dark:bg-[#EDEDEB] text-[#FAFAF8] dark:text-[#121211] hover:opacity-90 disabled:opacity-30 transition-opacity cursor-pointer shrink-0"
              >
                <Send size={12} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Greeting Bubble (when closed) */}
      <AnimatePresence>
        {!isOpen && showGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 8 }}
            transition={{ duration: 0.2 }}
            className="mb-2 mr-1 relative max-w-[210px] sm:max-w-[230px]"
          >
            <div
              onClick={handleToggle}
              className="group flex items-center gap-2 px-3 py-2 rounded-2xl rounded-br-xs bg-[#141413] text-[#FAFAF8] dark:bg-[#EDEDEB] dark:text-[#121211] shadow-xl text-xs font-medium cursor-pointer hover:scale-102 transition-transform"
            >
              <Sparkles size={13} className="text-amber-400 shrink-0" />
              <span className="truncate">Ask my AI assistant! 👋</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGreeting(false);
                  setHasInteracted(true);
                }}
                aria-label="Dismiss greeting"
                className="opacity-60 hover:opacity-100 transition-opacity ml-auto"
              >
                <X size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Robot Video Button */}
      <motion.button
        type="button"
        onClick={handleToggle}
        aria-label="Open AI assistant"
        aria-expanded={isOpen}
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3.2,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center cursor-pointer focus:outline-none"
      >
        {/* Transparent WebM Robot Video */}
        <video
          src="/robot.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] filter"
        />

        {/* Online Status Green Indicator */}
        <span
          className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 flex h-3 w-3 sm:h-3.5 sm:w-3.5 pointer-events-none"
          title="Online"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-500 border-2 border-[#FAFAF8] dark:border-[#121211]"></span>
        </span>
      </motion.button>
    </aside>
  );
}
