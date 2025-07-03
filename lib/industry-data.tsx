import {
  Users, Zap, ShieldCheck, BarChart, CheckCircle, Bot, TrendingUp, Star, Clock, Smile, Target, UserCheck, FileText, Stethoscope, Beaker, DollarSign,
  Car, ShoppingCart, Wrench, Gauge, MessageSquare, Calendar, Share2, Award, Signal, Wifi, Smartphone, Database, Headphones, GraduationCap, BookOpen,
  Lightbulb, School, AlertTriangle, Wind, Activity, Droplet, Building, HardHat, ClipboardCheck, Layers, Scaling, Settings, Briefcase, GanttChartSquare,
  Ruler, Truck, Cpu, BarChart3, ShieldAlert, Users2, Brain, Microscope, ClipboardList, FilePlus, Wallet, LineChart, Lock, Network, ScanSearch, Waypoints,
  Factory, Warehouse, BrainCircuit, DatabaseZap, BarChartBig, CheckCircle2, ShieldPlus, Clapperboard, Film, Radio, Newspaper, Sparkles, Search,
  HeartHandshake, Megaphone, CalendarDays, HandCoins, Presentation, Goal, Palette, MailCheck, UserCog, Shield, BarChart2, Home, HeartPulse, FlaskConical, 
  type LucideIcon, Phone, Store, Plane, Laptop, CircuitBoard, CreditCard, Building2, Gavel, Heart, Camera, Tv, Mic, Speaker, Boxes, MapPin, Utensils, Bed, 
  Package, LogIn, ShieldX, RotateCcw, KeyRound, UserPlus, PenTool, MonitorSpeaker, Receipt, ShoppingBag, TrendingDown, Volume2, PersonStanding, AlertCircle,
  Hammer, Handshake, Monitor, Code, Server
} from 'lucide-react';
import React from 'react';

// Define the structure for an item that will have bullet points
interface FeaturePoint {
  icon: React.ReactElement<typeof LucideIcon>;
  title: string;
  points: string[];
}

// Update the main IndustryData interface
export interface IndustryData {
  slug: string;
  name: string;
  hero: {
    title: string;
    subtitle: string;
    heroIcon: React.ReactElement<typeof LucideIcon>;
  };
  challenges: {
    title: string;
    subtitle?: string;
    items: FeaturePoint[];
  };
  solutions: {
    title: string;
    subtitle?: string;
    items: FeaturePoint[];
  };
  agents: {
    title: string;
    subtitle?: string;
    items: {
      icon: React.ReactElement<typeof LucideIcon>;
      title: string;
      description: string;
      link: string;
    }[];
  };
  results: {
    title: string;
    subtitle?: string;
    items: {
      icon: React.ReactElement<typeof LucideIcon>;
      value?: string;
      title: string;
      description: string;
    }[];
  };
  cta: {
    title: string;
    subtitle: string;
  };
}

// Array containing the data for all industries, now with bullet points and hero icons
export const industries: IndustryData[] = [
  // =================================================================
  // AUTOMOTIVE DATA - UPDATED FROM PDF
  // =================================================================
  {
    slug: 'automotive',
    name: 'Automotive',
    hero: {
      title: 'Drive More Sales. Streamline Your Service Bay.',
      subtitle: 'Equip your dealership or service center with a single AI agent to automate lead follow-up, service appointment booking, and reputation management, so your team can focus on delivering exceptional customer experiences.',
      heroIcon: <Car />
    },
    challenges: {
      title: 'The Automotive Industry is More Competitive Than Ever.',
      items: [
        { 
          icon: <Target />, 
          title: 'Losing Internet Leads', 
          points: [
            "Online inquiries for vehicle sales or service appointments go unanswered after hours",
            "Leading to lost revenue as customers move to a competitor who responds faster",
            "Manual lead follow-up is inefficient and inconsistent"
          ] 
        },
        { 
          icon: <Phone />, 
          title: 'Service Department Overload', 
          points: [
            "Service advisors are tied up on the phone scheduling routine maintenance",
            "Instead of providing high-value consultations to customers in the service lane",
            "Creating bottlenecks and reducing service bay efficiency"
          ] 
        },
        { 
          icon: <Star />, 
          title: 'Negative Online Reviews', 
          points: [
            "A single negative review about a sales or service experience can damage your dealership's reputation",
            "And deter potential customers from choosing your business",
            "Managing online reputation manually is time-consuming and reactive"
          ] 
        },
      ]
    },
    solutions: {
      title: 'Introducing the "Automotive Operations Engine" Bundle.',
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
            "The agent automatically sends a polite request to the customer asking them to leave a positive review on Google",
            "Building your online reputation and attracting new business"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Capabilities, Explained.',
      items: [
        { icon: <Target />, title: 'Lead Generation', description: 'Instantly engages with every lead from your website, Cars.com, or other sources, 24/7. Asks qualifying questions to determine interest and budget.', link: '/capabilities#lead-generation' },
        { icon: <Calendar />, title: 'Appointment Setting', description: 'Automates service scheduling with calendar integration, allowing customers to book maintenance appointments online or via SMS.', link: '/capabilities#appointment-setting' },
        { icon: <MessageSquare />, title: 'Customer Support', description: 'Acts as a Tier-1 service assistant, answering common customer questions and freeing up your human advisors.', link: '/capabilities#customer-support' },
        { icon: <Star />, title: 'SEO & Reputation', description: 'Automatically requests positive reviews after purchases or service appointments to build your online reputation.', link: '/capabilities#seo-reputation' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Automotive Business',
      items: [
        { icon: <Zap />, value: '40%', title: 'Faster Lead Response Times', description: 'Engage potential customers instantly, dramatically increasing lead-to-appointment conversion rates.' },
        { icon: <Clock />, value: '25%', title: 'Reduction in Service Scheduling Delays', description: 'Streamline the appointment process and reduce scheduling conflicts and no-shows.' },
        { icon: <Users />, value: '60%', title: 'Improvement in Customer Satisfaction', description: 'Provide consistent, personalized communication throughout the customer journey.' },
        { icon: <TrendingUp />, value: '35%', title: 'Increase in Service Department Revenue', description: 'Proactively capture maintenance opportunities and improve service bay utilization.' },
        { icon: <Shield />, value: '50%', title: 'More Positive Online Reviews', description: 'Systematically build your reputation through automated review solicitation and management.' },
        { icon: <Award />, value: '30%', title: 'Higher Sales Team Productivity', description: 'Free your sales professionals from routine tasks so they can focus on closing deals.' },
      ]
    },
    cta: {
      title: 'Ready to Drive Your Business Forward?',
      subtitle: 'Book a Consultation'
    }
  },
  // Add all other industries here...
];

// Helper function to find data by slug
export const getIndustryDataBySlug = (slug: string): IndustryData | undefined => {
  return industries.find(industry => industry.slug === slug);
};