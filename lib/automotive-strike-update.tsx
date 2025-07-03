// AUTOMOTIVE DATA - STRIKE STRATEGY UPDATED
// This is the updated automotive data following the Strike strategy from the industry solutions document

import {
  Users, Zap, Star, Clock, Target, MessageSquare, Calendar, Phone, TrendingUp, Car
} from 'lucide-react';
import React from 'react';

export const automotiveStrikeData = {
  slug: 'automotive',
  name: 'Automotive',
  hero: {
    title: 'Drive More Sales. Streamline Your Service Bay.',
    subtitle: "Equip your dealership or service center with a single AI agent to automate lead follow-up, service appointment booking, and reputation management, so your team can focus on delivering exceptional customer experiences.",
    heroIcon: <Car />
  },
  challenges: {
    title: "The Automotive Industry is More Competitive Than Ever",
    items: [
      { 
        icon: <Users />, 
        title: 'Losing Internet Leads', 
        points: [
          "Online inquiries for vehicle sales or service appointments go unanswered after hours",
          "Leading to lost revenue as customers move to a competitor who responds faster",
          "Every missed lead is a potential sale lost to the competition"
        ] 
      },
      { 
        icon: <Phone />, 
        title: 'Service Department Overload', 
        points: [
          "Your service advisors are tied up on the phone scheduling routine maintenance",
          "Instead of providing high-value consultations to customers in the service lane",
          "Valuable time wasted on administrative tasks"
        ] 
      },
      { 
        icon: <Star />, 
        title: 'Negative Online Reviews', 
        points: [
          "A single negative review about a sales or service experience",
          "Can damage your dealership's reputation",
          "And deter potential customers from choosing your dealership"
        ] 
      },
    ]
  },
  solutions: {
    title: 'Introducing the "Automotive Operations Engine" Bundle',
    subtitle: 'This bundle provides your dealership with a dedicated AI agent that acts as a 24/7 digital assistant. It ensures every lead is captured, every service appointment is booked efficiently, and your online reputation is actively managed.',
    items: [
      { 
        icon: <Target />, 
        title: 'Lead Generation', 
        points: [
          "Our agent instantly engages with every lead from your website, Cars.com, or other sources, 24/7",
          "It asks qualifying questions to determine their interest and budget",
          "Then hands off a warm, informed lead to your sales team"
        ] 
      },
      { 
        icon: <Calendar />, 
        title: 'Appointment Setting', 
        points: [
          "Automate your service scheduling",
          "The agent integrates with your service bay's calendar",
          "Allowing customers to book oil changes, tire rotations, and other maintenance appointments online or via SMS",
          "Complete with automated reminders"
        ] 
      },
      { 
        icon: <MessageSquare />, 
        title: 'Customer Support', 
        points: [
          "Your agent can act as a Tier-1 service assistant",
          "Answering common customer questions like 'What are your service hours?'",
          "Or 'Do you offer loaner vehicles?'",
          "Freeing up your human advisors"
        ] 
      },
      { 
        icon: <Star />, 
        title: 'SEO & Reputation', 
        points: [
          "After a vehicle purchase or service appointment",
          "The agent automatically sends a polite request to the customer",
          "Asking them to leave a positive review on Google",
          "Building your online reputation and attracting new business"
        ] 
      },
    ]
  },
  agents: {
    title: 'Your Agent\'s Capabilities, Explained',
    items: [
      { 
        icon: <Target />, 
        title: 'Lead Generation', 
        description: 'Instantly engages with every lead from your website, Cars.com, or other sources, 24/7.', 
        link: '/solutions/novasuite/prospect-hunter' 
      },
      { 
        icon: <Calendar />, 
        title: 'Appointment Setting', 
        description: 'Automates your service scheduling with calendar integration and SMS reminders.', 
        link: '/solutions/novasuite/schedule-coordinator' 
      },
      { 
        icon: <MessageSquare />, 
        title: 'Customer Support', 
        description: 'Acts as a Tier-1 service assistant, answering common questions 24/7.', 
        link: '/solutions/novasuite/support-concierge' 
      },
      { 
        icon: <Star />, 
        title: 'SEO & Reputation', 
        description: 'Automatically solicits positive reviews after sales and service appointments.', 
        link: '/solutions/novasuite/visibility-trust-manager' 
      },
    ]
  },
  results: {
    title: 'Ready to Drive Your Business Forward?',
    items: [
      { 
        icon: <Zap />, 
        value: '24/7', 
        title: 'Lead Response', 
        description: 'Never miss another lead with round-the-clock engagement and qualification.' 
      },
      { 
        icon: <Calendar />, 
        value: '80%', 
        title: 'Appointment Booking Automation', 
        description: 'Free your service advisors from routine scheduling calls.' 
      },
      { 
        icon: <Star />, 
        value: '4.5+', 
        title: 'Average Review Rating', 
        description: 'Build a stellar online reputation through systematic review management.' 
      },
      { 
        icon: <TrendingUp />, 
        title: 'Increased Revenue', 
        description: 'Convert more leads and maximize service bay utilization.' 
      },
      { 
        icon: <Clock />, 
        title: 'Time Savings', 
        description: 'Let your team focus on high-value customer interactions.' 
      },
      { 
        icon: <Users />, 
        title: 'Customer Satisfaction', 
        description: 'Provide instant, accurate responses to all customer inquiries.' 
      },
    ]
  },
  cta: {
    title: 'Ready to Drive Your Business Forward?',
    subtitle: 'Book a Consultation'
  }
};