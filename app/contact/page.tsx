"use client"

import type React from "react"
import { Mail, Phone, Users, ArrowRight } from "lucide-react"
import { useActionState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimatedBackground from "@/components/animated-background"
import { submitContactForm } from "./actions"

const ContactInfoItem = ({
  icon,
  title,
  content,
  href,
}: { icon: React.ReactNode; title: string; content: string; href?: string }) => {
  const contentElement = (
    <p className={`transition-colors ${href ? "text-blue-400 group-hover:text-blue-300" : "text-slate-300"}`}>
      {content}
    </p>
  )

  return (
    <div className="flex items-center space-x-4 group">
      <div className="flex-shrink-0 bg-slate-800/70 p-3 rounded-lg border border-slate-700">{icon}</div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        {href ? (
          <a href={href} className="hover:underline" target="_blank" rel="noopener noreferrer">
            {contentElement}
          </a>
        ) : (
          contentElement
        )}
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)
  return (
    <div className="bg-slate-950 text-slate-200">
      <main className="relative overflow-hidden">
        <AnimatedBackground />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-center z-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
              Let's Build the Future
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
              Have a question, a project idea, or just want to learn more? We're here to listen and explore how we can
              help you succeed.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative pb-24 md:pb-32 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl shadow-2xl shadow-slate-950/50 p-8 md:p-12">
              {/* Left Side: Form */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
                <form action={formAction} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="full-name">Full Name</Label>
                      <Input
                        id="full-name"
                        name="full-name"
                        placeholder="John Doe"
                        required
                        className="bg-slate-900/80 border-slate-700 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <Input
                        id="company-name"
                        name="company-name"
                        placeholder="Innovate Corp"
                        required
                        className="bg-slate-900/80 border-slate-700 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@innovatecorp.com"
                        required
                        className="bg-slate-900/80 border-slate-700 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-slate-500 font-normal">(Optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        className="bg-slate-900/80 border-slate-700 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">How can we help?</Label>
                    <Select name="inquiry-type" required>
                      <SelectTrigger id="inquiry-type" className="bg-slate-900/80 border-slate-700 focus:ring-blue-500">
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-white">
                        <SelectItem value="demo">Schedule a Demo</SelectItem>
                        <SelectItem value="custom">Discuss a Custom Solution</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or question..."
                      className="min-h-[140px] bg-slate-900/80 border-slate-700 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isPending ? "Submitting..." : "Submit Inquiry"} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
                {state && (
                  <div
                    className={`mt-6 p-4 rounded-lg ${state.success ? "bg-green-900/50 border border-green-700 text-green-200" : "bg-red-900/50 border border-red-700 text-red-200"}`}
                  >
                    <p className="text-center">{state.message}</p>
                  </div>
                )}
              </div>

              {/* Right Side: Contact Info */}
              <div className="lg:col-span-2 lg:border-l lg:border-slate-800 lg:pl-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                  <div className="space-y-6">
                    <ContactInfoItem
                      icon={<Mail className="h-6 w-6 text-blue-400" />}
                      title="Email Us"
                      content="contact@novagent.io"
                      href="mailto:contact@novagent.io"
                    />
                    <ContactInfoItem
                      icon={<Phone className="h-6 w-6 text-blue-400" />}
                      title="Call Us"
                      content="(951) 456-6051"
                      href="tel:+19514566051"
                    />
                    <div className="flex items-center space-x-4 group">
                      <div className="flex-shrink-0 bg-slate-800/70 p-3 rounded-lg border border-slate-700">
                        <Users className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Our Mission</h4>
                        <p className="text-slate-300">
                          Learn more about the experienced team dedicated to your success.{" "}
                          <a
                            href="/about-us/meet-the-founders"
                            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                          >
                            Meet Our Founders →
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 lg:mt-0">
                  <h3 className="text-xl font-semibold text-white mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                      <span>A prompt automated confirmation.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                      <span>A personal response within 24 business hours.</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                      <span>A dedicated specialist to discuss your goals.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
