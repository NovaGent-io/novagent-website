'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, CheckCircle, Users, Bell, BarChart3, ChevronRight, ArrowRight } from 'lucide-react';

const ScheduleCoordinator = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-nova-dark text-gray-100' : 'bg-gray-50 text-gray-900'} overflow-hidden`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-nova-dark/80' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} z-50`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              NovaGent
            </Link>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-600'}`}
              >
                {isDarkMode ? '?' : '?'}
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-nova-darker/50 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Part of the NovaCore Suite</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Schedule Coordinator
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Eliminate the back-and-forth of scheduling. Your AI agent handles all appointment booking, rescheduling, and reminders automatically, integrating seamlessly with your calendar systems.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className={`${isDarkMode ? 'bg-nova-darker/30' : 'bg-white'} backdrop-blur-sm border ${isDarkMode ? 'border-blue-500/20' : 'border-gray-200'} rounded-xl p-6`}>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  90%
                </div>
                <div className="text-gray-500">Booking Success Rate</div>
              </div>
              <div className={`${isDarkMode ? 'bg-nova-darker/30' : 'bg-white'} backdrop-blur-sm border ${isDarkMode ? 'border-purple-500/20' : 'border-gray-200'} rounded-xl p-6`}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  60%
                </div>
                <div className="text-gray-500">Fewer No-Shows</div>
              </div>
              <div className={`${isDarkMode ? 'bg-nova-darker/30' : 'bg-white'} backdrop-blur-sm border ${isDarkMode ? 'border-pink-500/20' : 'border-gray-200'} rounded-xl p-6`}>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                  15hrs
                </div>
                <div className="text-gray-500">Saved Per Week</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                <span>See it in Action</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link href="/pricing" className={`${isDarkMode ? 'bg-transparent border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-700'} border px-8 py-4 rounded-lg font-semibold hover:border-purple-500 transition-colors`}>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-nova-darker/30' : 'bg-white'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            How <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Schedule Coordinator</span> Works
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
            Your AI agent uses advanced intelligence to manage your entire scheduling workflow
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: "Connect Your Calendar",
                  description: "Link your team's calendars (Google, Outlook, Calendly) to give your agent real-time availability."
                },
                {
                  number: 2,
                  title: "Set Your Preferences",
                  description: "Define meeting types, durations, buffer times, and availability windows for different appointment types."
                },
                {
                  number: 3,
                  title: "Smart Scheduling",
                  description: "Your agent handles all booking requests, finds optimal times, and manages time zones automatically."
                },
                {
                  number: 4,
                  title: "Automated Follow-Up",
                  description: "Sends confirmations, reminders, and rescheduling options to minimize no-shows."
                }
              ].map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Demo Card */}
            <div className={`${isDarkMode ? 'bg-nova-darker/50' : 'bg-gray-50'} backdrop-blur-sm border ${isDarkMode ? 'border-purple-500/20' : 'border-gray-200'} rounded-2xl p-8 animate-float`}>
              <div className="text-center mb-6">
                <div className="text-cyan-400 text-sm mb-2">Live Schedule Coordinator Demo</div>
                <div className="text-2xl font-mono text-gray-300">Processing booking request...</div>
              </div>
              
              <div className="space-y-3">
                <div className={`${isDarkMode ? 'bg-nova-darker/50' : 'bg-white'} rounded-lg p-3 flex items-center justify-between`}>
                  <span>Checking calendar availability...</span>
                  <span className="text-green-500">?</span>
                </div>
                <div className={`${isDarkMode ? 'bg-nova-darker/50' : 'bg-white'} rounded-lg p-3 flex items-center justify-between opacity-75`}>
                  <span>Found 5 matching time slots...</span>
                  <span className="text-yellow-500">?</span>
                </div>
                <div className={`${isDarkMode ? 'bg-nova-darker/50' : 'bg-white'} rounded-lg p-3 opacity-50`}>
                  <span className="text-gray-500">Sending confirmation to attendees...</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-sm text-gray-500">Meeting booked for Tuesday 2:00 PM EST</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-nova-dark' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Core <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-500 text-center mb-16 max-w-3xl mx-auto">
            Everything you need for seamless appointment management
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Calendar Integration",
                description: "Seamlessly connects with Google Calendar, Outlook, Calendly, and other major scheduling platforms.",
                color: "cyan"
              },
              {
                icon: Clock,
                title: "Smart Time Optimization",
                description: "Finds the best meeting times considering time zones, preferences, and optimal scheduling patterns.",
                color: "blue"
              },
              {
                icon: Users,
                title: "Multi-Participant Coordination",
                description: "Handles complex group meetings by finding times that work for all participants automatically.",
                color: "purple"
              },
              {
                icon: Bell,
                title: "Intelligent Reminders",
                description: "Sends personalized reminders via email, SMS, or push notifications to reduce no-shows.",
                color: "pink"
              },
              {
                icon: BarChart3,
                title: "Scheduling Analytics",
                description: "Provides insights on meeting patterns, no-show rates, and optimization opportunities.",
                color: "cyan"
              },
              {
                icon: CheckCircle,
                title: "Conflict Resolution",
                description: "Automatically detects and resolves scheduling conflicts with smart rescheduling suggestions.",
                color: "blue"
              }
            ].map((capability, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-nova-darker/50' : 'bg-white'} backdrop-blur-sm border ${isDarkMode ? 'border-purple-500/20' : 'border-gray-200'} rounded-xl p-6 hover:border-cyan-500/50 transition-colors`}
              >
                <div className={`w-12 h-12 bg-${capability.color}-500/20 rounded-lg flex items-center justify-center mb-4`}>
                  <capability.icon className={`w-6 h-6 text-${capability.color}-500`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                <p className="text-gray-500 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
            Ready to <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Automate Your Calendar</span>?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who never play email tag for meetings again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
              <span>Schedule a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className={`${isDarkMode ? 'bg-transparent border-gray-700 text-gray-300' : 'bg-white border-gray-300 text-gray-700'} border px-8 py-4 rounded-lg font-semibold hover:border-purple-500 transition-colors`}>
              Try Schedule Coordinator Free
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm">
            No credit card required ? 14-day free trial ? Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} py-12`}>
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-center text-gray-500">
            ? 2025 NovaGent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ScheduleCoordinator;