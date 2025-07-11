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
      title: 'Drive More Sales.\nStreamline Your Service Bay.\nAutomotive.',
      subtitle: 'Equip your dealership or service center with a single, powerful AI agent managed by NovaGent experts. It handles lead follow-up, service scheduling, and reputation management 24/7 - all through one unified system that learns and improves with your business.',
      heroIcon: <Car />
    },
    challenges: {
      title: 'Your Dealership\'s Hidden Revenue Leaks',
      subtitle: 'Every day without an AI agent costs you customers, revenue, and market share.',
      items: [
        { 
          icon: <TrendingDown />, 
          title: 'Lead Response Time Crisis', 
          points: [
            "78% of customers buy from the dealership that responds first",
            "Average dealer response time: 18 hours. Winning response: Under 5 minutes",
            "After-hours inquiries (43% of all leads) go completely unaddressed",
            "Each hour of delay reduces conversion probability by 7%"
          ] 
        },
        { 
          icon: <Clock />, 
          title: 'Service Bay Inefficiency', 
          points: [
            "Service advisors waste 67% of their time on routine scheduling",
            "23% no-show rate costs $400-600 per empty bay daily",
            "Average hold time: 8.5 minutes, causing 31% of callers to hang up",
            "Manual scheduling errors lead to double-bookings and angry customers"
          ] 
        },
        { 
          icon: <AlertCircle />, 
          title: 'Reputation Vulnerability', 
          points: [
            "88% of buyers check reviews before visiting - you\'re invisible without them",
            "1 negative review requires 12 positive ones to offset the damage",
            "Only 10% of happy customers leave reviews without being asked",
            "Poor online reputation reduces showroom traffic by up to 40%"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your dealership with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
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
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
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
      title: 'Ready to Deploy Your Automotive AI Agent?',
      subtitle: 'Book Your Automotive Consultation'
    }
  },
  // Add all other industries here...
];

// Helper function to find data by slug
export const getIndustryDataBySlug = (slug: string): IndustryData | undefined => {
  return industries.find(industry => industry.slug === slug);
};