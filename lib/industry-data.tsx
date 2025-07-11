import {
  Users, Zap, ShieldCheck, BarChart, CheckCircle, Bot, TrendingUp, Star, Clock, Smile, Target, UserCheck, FileText, Stethoscope, Beaker, DollarSign,
  Car, ShoppingCart, Wrench, Gauge, MessageSquare, Calendar, Share2, Award, Signal, Wifi, Smartphone, Database, Headphones, GraduationCap, BookOpen,
  Lightbulb, School, AlertTriangle, Wind, Activity, Droplet, Building, HardHat, ClipboardCheck, Layers, Scaling, Settings, Briefcase, GanttChartSquare,
  Ruler, Truck, Cpu, BarChart3, ShieldAlert, Users2, Brain, Microscope, ClipboardList, FilePlus, Wallet, LineChart, Lock, Network, ScanSearch, Waypoints,
  Factory, Warehouse, BrainCircuit, DatabaseZap, BarChartBig, CheckCircle2, ShieldPlus, Clapperboard, Film, Radio, Newspaper, Sparkles, Search,
  HeartHandshake, Megaphone, CalendarDays, HandCoins, Presentation, Goal, Palette, MailCheck, UserCog, Shield, BarChart2, Home, HeartPulse, FlaskConical, 
  type LucideIcon, Phone, Store, Plane, Laptop, CircuitBoard, CreditCard, Building2, Gavel, Heart, Camera, Tv, Mic, Speaker, Boxes, MapPin, Utensils, Bed, 
  Package, LogIn, ShieldX, RotateCcw, KeyRound, UserPlus, PenTool, MonitorSpeaker, Receipt, ShoppingBag, TrendingDown, Volume2, PersonStanding, AlertCircle,
  Hammer, Handshake, Monitor, Code, Server, Calculator, FileCheck
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
  // =================================================================
  // COMMUNICATIONS DATA - UPDATED FROM PDF
  // =================================================================
  {
    slug: 'communications',
    name: 'Communications',
    hero: {
      title: 'Amplify Your Message.\nAutomate Your Brand.\nCommunications.',
      subtitle: 'NovaGent provides PR agencies and corporate communications teams with a single, powerful AI agent managed by our experts. It monitors brand reputation, automates content creation, and delivers data-driven reports 24/7 - all through one unified system that learns and improves with your brand.',
      heroIcon: <Mic />
    },
    challenges: {
      title: 'Your Agency\'s Critical Communications Gaps',
      subtitle: 'Every day without an AI agent costs you media opportunities, client trust, and market influence.',
      items: [
        { 
          icon: <AlertCircle />, 
          title: '24/7 Brand Monitoring Crisis', 
          points: [
            "96% of brand crises start outside business hours - when you're not watching",
            "Average crisis response time: 4-6 hours. Damage done: 60 seconds",
            "Manual monitoring across 50+ channels is humanly impossible",
            "Each hour of delayed response amplifies negative sentiment by 23%"
          ] 
        },
        { 
          icon: <PenTool />, 
          title: 'Content Creation Bottleneck', 
          points: [
            "Teams spend 65% of time on routine content vs. strategic thinking",
            "Average turnaround for press release: 3 days. News cycle: 3 hours",
            "Quality suffers under deadline pressure - 41% require multiple revisions",
            "Inconsistent brand voice across channels damages credibility"
          ] 
        },
        { 
          icon: <BarChart />, 
          title: 'ROI Measurement Black Hole', 
          points: [
            "78% of PR professionals struggle to prove campaign value",
            "Manual report compilation takes 8-12 hours per client monthly",
            "Real impact gets lost in vanity metrics and impressions",
            "Without clear ROI, budgets get cut and clients leave"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your agency with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Star />, 
          title: 'SEO & Reputation', 
          points: [
            "Your agent acts as a 24/7 media monitor, tracking brand mentions across news sites, blogs, and forums",
            "It can also generate SEO-optimized articles and press releases to enhance your digital footprint"
          ] 
        },
        { 
          icon: <GanttChartSquare />, 
          title: 'Project Management', 
          points: [
            "Streamline your internal communications",
            "Your agent can manage the entire workflow for company-wide announcements?from drafting and approvals to distribution",
            "Ensuring your message is delivered consistently and on time"
          ] 
        },
        { 
          icon: <BarChart />, 
          title: 'Data Analytics & Reporting', 
          points: [
            "Instantly generate reports on media coverage, share of voice, sentiment analysis, and campaign reach",
            "Your agent synthesizes data into clear, presentation-ready insights to prove your ROI"
          ] 
        },
        { 
          icon: <Target />, 
          title: 'Lead Generation', 
          points: [
            "Use this skill for targeted media outreach",
            "Your agent can build lists of relevant journalists, bloggers, and influencers in specific niches",
            "Then execute outreach campaigns to pitch stories or secure placements"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Star />, title: 'SEO & Reputation', description: 'Acts as a 24/7 media monitor, tracking brand mentions across news sites, blogs, and forums.', link: '/capabilities#seo-reputation' },
        { icon: <GanttChartSquare />, title: 'Project Management', description: 'Manages the entire workflow for announcements?from drafting and approvals to distribution.', link: '/capabilities#project-management' },
        { icon: <BarChart />, title: 'Data Analytics & Reporting', description: 'Generates reports on media coverage, share of voice, sentiment analysis, and campaign reach.', link: '/capabilities#analytics-reporting' },
        { icon: <Target />, title: 'Lead Generation', description: 'Builds lists of journalists, bloggers, and influencers, then executes targeted outreach campaigns.', link: '/capabilities#lead-generation' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Communications Business',
      items: [
        { icon: <Zap />, value: '90%', title: 'Faster Crisis Response Time', description: 'Detect and respond to brand threats within minutes, not hours, minimizing reputational damage.' },
        { icon: <Clock />, value: '70%', title: 'Reduction in Content Creation Time', description: 'Generate first drafts of press releases, articles, and reports in seconds, not days.' },
        { icon: <Users />, value: '45%', title: 'Increase in Media Placements', description: 'Targeted outreach to the right journalists at the right time dramatically improves success rates.' },
        { icon: <TrendingUp />, value: '200%', title: 'More Data Points for ROI Reporting', description: 'Comprehensive analytics that prove the value of your communications efforts to stakeholders.' },
        { icon: <Shield />, value: '60%', title: 'Improvement in Brand Sentiment', description: 'Proactive reputation management and rapid response capabilities protect and enhance brand image.' },
        { icon: <Award />, value: '35%', title: 'Higher Client Retention Rate', description: 'Demonstrable results and consistent service quality keep clients engaged and renewing contracts.' },
      ]
    },
    cta: {
      title: 'Ready to Amplify Your Communications Strategy?',
      subtitle: 'Book Your Communications Consultation'
    }
  },
  // =================================================================
  // REAL ESTATE DATA
  // =================================================================
  {
    slug: 'real-estate',
    name: 'Real Estate',
    hero: {
      title: 'Close More Deals.\nAutomate Your Brokerage.\nReal Estate.',
      subtitle: 'NovaGent provides real estate professionals with a single, powerful AI agent managed by our experts. It handles lead qualification, appointment setting, and document management 24/7 - all through one unified system that scales with your brokerage.',
      heroIcon: <Home />
    },
    challenges: {
      title: 'Your Brokerage\'s Hidden Revenue Leaks',
      subtitle: 'Every day without an AI agent costs you listings, buyers, and commissions.',
      items: [
        { 
          icon: <TrendingDown />, 
          title: 'After-Hours Lead Loss', 
          points: [
            "73% of property inquiries happen outside business hours",
            "Average agent response time: 4-6 hours. Buyers move on in 15 minutes",
            "Weekend leads from Zillow, Realtor.com go unattended",
            "Each delayed response reduces conversion by 10%"
          ] 
        },
        { 
          icon: <Clock />, 
          title: 'Showing Scheduling Chaos', 
          points: [
            "Agents spend 40% of their time coordinating showings",
            "25% of scheduled showings result in no-shows",
            "Double-bookings and conflicts lose deals",
            "Manual back-and-forth frustrates serious buyers"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Document Processing Delays', 
          points: [
            "Average offer preparation: 2-3 hours of manual work",
            "Errors in contracts delay 35% of closings",
            "Missing signatures and documents cause deal fallout",
            "Compliance issues risk commission and reputation"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your brokerage with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Target />, 
          title: 'Lead Generation', 
          points: [
            "Instantly engages with every lead from your website, Zillow, Realtor.com, and MLS feeds",
            "Qualifies buyers by budget, timeline, and preferences",
            "Nurtures leads until they\'re ready to view properties"
          ] 
        },
        { 
          icon: <Calendar />, 
          title: 'Appointment Setting', 
          points: [
            "Coordinates showings between buyers, sellers, and agents",
            "Manages your team\'s calendars to maximize efficiency",
            "Sends automated reminders to reduce no-shows",
            "Books virtual tours and in-person viewings seamlessly"
          ] 
        },
        { 
          icon: <Home />, 
          title: 'Real Estate Operations', 
          points: [
            "Manages property listings across all platforms",
            "Updates MLS data and syncs with your website",
            "Tracks inventory and suggests properties to matched buyers",
            "Monitors market trends and competitor listings"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Legal Document Agent', 
          points: [
            "Drafts purchase agreements and contracts instantly",
            "Ensures all documents are complete and compliant",
            "Manages digital signatures and document flow",
            "Tracks deadlines and contingencies automatically"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Target />, title: 'Lead Generation', description: 'Instantly engages with leads from all sources, qualifies buyers, and nurtures until viewing-ready.', link: '/capabilities#lead-generation' },
        { icon: <Calendar />, title: 'Appointment Setting', description: 'Coordinates showings, manages calendars, and reduces no-shows with automated reminders.', link: '/capabilities#appointment-setting' },
        { icon: <Home />, title: 'Real Estate Operations', description: 'Manages listings, syncs MLS data, and matches properties with qualified buyers.', link: '/capabilities#real-estate-ops' },
        { icon: <FileText />, title: 'Legal Document Agent', description: 'Drafts contracts, manages signatures, and tracks all transaction deadlines.', link: '/capabilities#legal-documents' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Real Estate Business',
      items: [
        { icon: <Zap />, value: '75%', title: 'Faster Lead Response', description: 'Engage buyers instantly 24/7, dramatically increasing lead-to-showing conversion rates.' },
        { icon: <Clock />, value: '45%', title: 'More Showings Booked', description: 'Automated scheduling fills calendars with qualified buyers and reduces no-shows.' },
        { icon: <Users />, value: '30%', title: 'Higher Conversion Rate', description: 'Smart lead nurturing and instant responses turn more inquiries into closed deals.' },
        { icon: <TrendingUp />, value: '40%', title: 'Commission Growth', description: 'Handle more transactions without adding staff. Scale your success effortlessly.' },
        { icon: <Shield />, value: '92%', title: 'Client Satisfaction', description: 'Consistent communication and instant responses create 5-star client experiences.' },
        { icon: <Award />, value: '65%', title: 'Repeat & Referral Business', description: 'Happy clients become your best marketers with exceptional service at every touchpoint.' },
      ]
    },
    cta: {
      title: 'Ready to Transform Your Real Estate Business?',
      subtitle: 'Book Your Real Estate Consultation'
    }
  },
  // =================================================================
  // EDUCATION DATA
  // =================================================================
  {
    slug: 'education',
    name: 'Education',
    hero: {
      title: 'Transform Learning.\nEmpower Students.\nEducation.',
      subtitle: 'NovaGent provides educational institutions with a single, powerful AI agent managed by our experts. It streamlines admissions, enhances student support, and automates administrative tasks 24/7 - all through one unified system that scales with your institution.',
      heroIcon: <GraduationCap />
    },
    challenges: {
      title: 'Your Institution\'s Critical Education Gaps',
      subtitle: 'Every day without an AI agent costs you enrollments, student success, and institutional efficiency.',
      items: [
        { 
          icon: <TrendingDown />, 
          title: 'After-Hours Enrollment Loss', 
          points: [
            "68% of prospective students research programs outside office hours",
            "Average response time: 24-48 hours. Students enroll elsewhere in 4 hours",
            "International inquiries (45% of prospects) happen in different time zones",
            "Each hour of delay reduces enrollment probability by 15%"
          ] 
        },
        { 
          icon: <AlertCircle />, 
          title: 'At-Risk Student Crisis', 
          points: [
            "30% of students who struggle never seek help proactively",
            "Early warning signs missed due to manual tracking limitations",
            "Average intervention happens 3 weeks too late",
            "Each dropout costs institutions $15,000-40,000 in lost revenue"
          ] 
        },
        { 
          icon: <Clock />, 
          title: 'Administrative Overload', 
          points: [
            "Staff spend 65% of time on repetitive administrative tasks",
            "Registration and scheduling conflicts affect 40% of students",
            "Document processing delays impact financial aid disbursement",
            "Manual processes limit capacity for personalized student support"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your institution with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Target />, 
          title: 'Lead Generation', 
          points: [
            "Engages with prospective students on your website 24/7",
            "Answers initial questions about programs and admissions requirements",
            "Qualifies their interest and hands off only high-intent applicants to your recruitment team"
          ] 
        },
        { 
          icon: <Calendar />, 
          title: 'Appointment Setting', 
          points: [
            "Automates the scheduling of campus tours and admissions interviews",
            "Manages academic advisor meetings without human intervention",
            "Integrates with staff calendars and sends automated reminders to reduce no-shows"
          ] 
        },
        { 
          icon: <MessageSquare />, 
          title: 'Customer Support', 
          points: [
            "Deploys an AI-powered helpdesk to answer common questions",
            "Handles inquiries about registration deadlines, financial aid, or campus services",
            "Frees up your administrative staff for more complex issues"
          ] 
        },
        { 
          icon: <GanttChartSquare />, 
          title: 'Project Management', 
          points: [
            "Manages the entire student application process",
            "Tracks status, sends automated follow-ups for missing documents",
            "Notifies the admissions committee when applications are ready for review"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Target />, title: 'Lead Generation', description: 'Engages prospective students 24/7, answers program questions, and qualifies high-intent applicants.', link: '/capabilities#lead-generation' },
        { icon: <Calendar />, title: 'Appointment Setting', description: 'Automates campus tours, advisor meetings, and interview scheduling with integrated calendars.', link: '/capabilities#appointment-setting' },
        { icon: <MessageSquare />, title: 'Customer Support', description: 'AI-powered helpdesk answers common questions about registration, financial aid, and campus services.', link: '/capabilities#customer-support' },
        { icon: <GanttChartSquare />, title: 'Project Management', description: 'Manages application workflows, tracks documents, and ensures timely processing.', link: '/capabilities#project-management' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Educational Institution',
      items: [
        { icon: <Zap />, value: '60%', title: 'Faster Admissions Processing', description: 'Streamline application review and communication, reducing decision time and improving yield rates.' },
        { icon: <Users />, value: '40%', title: 'Improvement in Student Engagement', description: 'Provide personalized support and timely communication that keeps students connected and motivated.' },
        { icon: <Clock />, value: '25+', title: 'Hours/Week Saved on Administrative Tasks', description: 'Automate routine processes, allowing staff to focus on meaningful student interactions.' },
        { icon: <Calendar />, value: '50%', title: 'Reduction in Scheduling Conflicts', description: 'Optimize timetables and resource allocation with intelligent scheduling algorithms.' },
        { icon: <School />, value: '30%', title: 'Increase in Enrollment Conversion', description: 'Guide prospective students through the application process with personalized assistance.' },
        { icon: <Lightbulb />, value: '45%', title: 'More Effective Early Intervention', description: 'Identify and support at-risk students before academic challenges become critical.' },
      ]
    },
    cta: {
      title: 'Ready to Transform Your Educational Institution?',
      subtitle: 'Book Your Education Consultation'
    }
  },
  // =================================================================
  // ENERGY & UTILITIES DATA - UPDATED FROM PDF
  // =================================================================
  {
    slug: 'energy-utilities',
    name: 'Energy & Utilities',
    hero: {
      title: 'Power Your Grid.\nSecure Your Future.\nEnergy & Utilities.',
      subtitle: 'NovaGent provides energy and utility companies with a single, powerful AI agent managed by our experts. It monitors regulatory compliance, manages complex infrastructure projects, and streamlines customer support 24/7 - all through one unified system that protects your critical infrastructure.',
      heroIcon: <Zap />
    },
    challenges: {
      title: 'Your Utility\'s Critical Infrastructure Risks',
      subtitle: 'Every day without an AI agent costs you compliance, efficiency, and public safety.',
      items: [
        { 
          icon: <Shield />, 
          title: 'Regulatory Compliance Crisis', 
          points: [
            "New EPA, NERC, and state regulations released weekly - impossible to track manually",
            "Average compliance violation fine: $1.3 million per incident",
            "Manual monitoring misses 34% of regulatory updates",
            "Each compliance breach damages public trust and stock value"
          ] 
        },
        { 
          icon: <AlertTriangle />, 
          title: 'Grid Reliability Threats', 
          points: [
            "87% of outages could be prevented with predictive maintenance",
            "Average outage costs $2.5 million per hour in lost revenue",
            "Storm damage response time: 4-6 hours. Customer expectation: 30 minutes",
            "Aging infrastructure requires 24/7 monitoring you can't provide"
          ] 
        },
        { 
          icon: <Phone />, 
          title: 'Customer Service Overload', 
          points: [
            "Call volumes spike 400% during outages, overwhelming staff",
            "Average hold time during emergencies: 23 minutes",
            "67% of routine billing questions could be automated",
            "Poor communication damages public perception and regulatory standing"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your utility with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Shield />, 
          title: 'Compliance Management', 
          points: [
            "Your agent autonomously monitors updates from regulatory bodies (like FERC and EPA)",
            "Cross-references them with your internal policies",
            "Flags any operational processes that require review to ensure you remain compliant"
          ] 
        },
        { 
          icon: <Activity />, 
          title: 'Project Management', 
          points: [
            "Oversee complex infrastructure projects with ease",
            "Your agent tracks timelines, manages vendor communications",
            "Automates status reporting for stakeholders",
            "Flags potential delays before they become critical"
          ] 
        },
        { 
          icon: <Users />, 
          title: 'Customer Support', 
          points: [
            "Deploy a 24/7 AI-powered support channel to handle common customer inquiries",
            "Provides outage updates and answers billing questions",
            "Guides users through service requests",
            "Reduces call volume to your live agents"
          ] 
        },
        { 
          icon: <BarChart3 />, 
          title: 'Data Analytics & Reporting', 
          points: [
            "Analyzes usage data, maintenance logs, and customer feedback",
            "Generates insightful reports to identify trends",
            "Pinpoints common service issues",
            "Enables smarter, data-driven operational decisions"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Shield />, title: 'Compliance Management', description: 'Monitors regulatory updates, cross-references policies, and ensures operational compliance.', link: '/capabilities#compliance-management' },
        { icon: <Activity />, title: 'Project Management', description: 'Tracks infrastructure projects, manages vendors, and prevents delays with automated reporting.', link: '/capabilities#project-management' },
        { icon: <Users />, title: 'Customer Support', description: '24/7 AI support handles outage updates, billing questions, and service requests.', link: '/capabilities#customer-support' },
        { icon: <BarChart3 />, title: 'Data Analytics & Reporting', description: 'Analyzes operational data to identify trends and optimize grid performance.', link: '/capabilities#analytics-reporting' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Energy & Utilities Business',
      items: [
        { icon: <Zap />, value: '99.98%', title: 'Grid Reliability Rate', description: 'Predictive AI prevents outages before they happen, keeping the lights on for millions.' },
        { icon: <Clock />, value: '73%', title: 'Faster Emergency Response', description: 'Critical infrastructure issues resolved in minutes, not hours. Automated dispatch saves lives.' },
        { icon: <Shield />, value: '100%', title: 'Regulatory Compliance', description: 'Every regulation tracked, every report filed on time. Zero violations, zero fines.' },
        { icon: <TrendingUp />, value: '42%', title: 'Operational Cost Reduction', description: 'Optimized maintenance schedules and resource allocation slash unnecessary expenses.' },
        { icon: <AlertTriangle />, value: '87%', title: 'Prevented Incidents', description: 'AI identifies risks before they become problems, protecting infrastructure and communities.' },
        { icon: <Users />, value: '94%', title: 'Customer Satisfaction', description: 'Proactive communications and faster resolutions create trust with every interaction.' },
      ]
    },
    cta: {
      title: 'Ready to Build a More Intelligent Utility?',
      subtitle: 'Book Your Energy & Utilities Consultation'
    }
  },
  // =================================================================
  // ENGINEERING & CONSTRUCTION DATA - UPDATED FROM PDF
  // =================================================================
  {
    slug: 'engineering-construction',
    name: 'Engineering & Construction',
    hero: {
      title: 'Build Smarter.\nDeliver Faster.\nEngineering & Construction.',
      subtitle: 'NovaGent provides engineering and construction firms with a single, powerful AI agent managed by our experts. It manages complex projects, ensures regulatory compliance, and streamlines bidding 24/7 - all through one unified system that keeps your projects on time and on budget.',
      heroIcon: <Hammer />
    },
    challenges: {
      title: 'Your Firm\'s Critical Construction Challenges',
      subtitle: 'Every day without an AI agent costs you delays, compliance risks, and profit margins.',
      items: [
        { 
          icon: <Clock />, 
          title: 'Project Timeline Chaos', 
          points: [
            "65% of construction projects experience significant delays",
            "Average delay cost: $50,000 per day on major projects",
            "Manual scheduling misses 40% of critical path dependencies",
            "Subcontractor coordination consumes 30% of PM time"
          ] 
        },
        { 
          icon: <Shield />, 
          title: 'Compliance & Safety Risks', 
          points: [
            "OSHA violations average $15,000 per incident",
            "Building codes update monthly - impossible to track manually",
            "Safety incident rate: 3.5 per 100 workers industry average",
            "One serious violation can suspend entire projects"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Bid & Document Overload', 
          points: [
            "Average RFP response time: 80+ hours of manual work",
            "Win rate for rushed bids: Only 12%",
            "Contract errors cause 23% of project disputes",
            "Document version control failures cost millions in rework"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your firm with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Activity />, 
          title: 'Project Management', 
          points: [
            "Your agent integrates with your project management tools to track key milestones",
            "Automates status updates for stakeholders and manages subcontractor schedules",
            "Proactively flags potential timeline risks before they impact your budget"
          ] 
        },
        { 
          icon: <Shield />, 
          title: 'Compliance Management', 
          points: [
            "Stay ahead of regulatory changes with continuous monitoring",
            "Agent monitors updates to building codes and safety standards",
            "Cross-references them with your project plans",
            "Ensures all necessary documentation and permits are in order"
          ] 
        },
        { 
          icon: <Calculator />, 
          title: 'Financial Operations', 
          points: [
            "Streamline project financials from bid to final invoice",
            "Automates generation of invoices for completed work",
            "Tracks payments from clients and manages expenses from suppliers",
            "Provides real-time view of project profitability"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Legal Document Agent', 
          points: [
            "Accelerate your bidding and contracting process",
            "Instantly drafts standardized contracts and subcontractor agreements",
            "Manages change orders using your firm's approved templates",
            "Ensures consistency and compliance across all documentation"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Activity />, title: 'Project Management', description: 'Tracks milestones, manages schedules, and flags risks before they impact budgets.', link: '/capabilities#project-management' },
        { icon: <Shield />, title: 'Compliance Management', description: 'Monitors code updates, ensures permit compliance, and maintains safety standards.', link: '/capabilities#compliance-management' },
        { icon: <Calculator />, title: 'Financial Operations', description: 'Automates invoicing, tracks payments, and provides real-time profitability insights.', link: '/capabilities#financial-operations' },
        { icon: <FileText />, title: 'Legal Document Agent', description: 'Drafts contracts, manages change orders, and ensures document consistency.', link: '/capabilities#legal-documents' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Construction Business',
      items: [
        { icon: <Zap />, value: '35%', title: 'Faster Project Completion', description: 'AI-driven scheduling and resource optimization delivers projects weeks ahead of schedule.' },
        { icon: <Clock />, value: '68%', title: 'Fewer Change Orders', description: 'Proactive issue detection and precise documentation prevent costly modifications.' },
        { icon: <Shield />, value: '100%', title: 'Safety Compliance', description: 'Real-time monitoring ensures every task meets OSHA standards, protecting workers and profits.' },
        { icon: <TrendingUp />, value: '42%', title: 'Higher Profit Margins', description: 'Optimized bidding, reduced waste, and efficient resource allocation boost your bottom line.' },
        { icon: <HardHat />, value: '89%', title: 'Bid Win Rate', description: 'Data-driven proposals with accurate costing and proven track records win more contracts.' },
        { icon: <Award />, value: '94%', title: 'Client Satisfaction', description: 'On-time delivery, transparent communication, and quality results create lasting partnerships.' },
      ]
    },
    cta: {
      title: 'Ready to Build a More Efficient Future?',
      subtitle: 'Book Your Construction Consultation'
    }
  },
  // =================================================================
  // FINANCIAL SERVICES DATA
  // =================================================================
  {
    slug: 'financial-services',
    name: 'Financial Services',
    hero: {
      title: 'Scale Your Practice.\nSecure Your Future.\nFinancial Services.',
      subtitle: 'NovaGent provides financial advisors, insurance agencies, and wealth management firms with a single, powerful AI agent managed by our experts. It automates client acquisition, ensures regulatory compliance, and streamlines operations 24/7 - all through one unified system that grows with your practice.',
      heroIcon: <DollarSign />
    },
    challenges: {
      title: 'Your Firm\'s Critical Financial Gaps',
      subtitle: 'Every day without an AI agent costs you clients, compliance risks, and growth opportunities.',
      items: [
        { 
          icon: <TrendingDown />, 
          title: 'Client Acquisition Bottleneck', 
          points: [
            "82% of high-net-worth individuals research advisors online first",
            "Average response time to leads: 19 hours. Winners respond in 5 minutes",
            "Manual prospecting yields only 2% conversion rate",
            "Each day of delay reduces close probability by 63%"
          ] 
        },
        { 
          icon: <ShieldX />, 
          title: 'Compliance Nightmare', 
          points: [
            "SEC and FINRA regulations change weekly - tracking manually is impossible",
            "Average compliance violation fine: $2.4 million",
            "67% of firms failed their last regulatory audit",
            "One violation can destroy decades of reputation"
          ] 
        },
        { 
          icon: <Clock />, 
          title: 'Operational Inefficiency', 
          points: [
            "Advisors spend 65% of time on admin vs. client relationships",
            "Client onboarding takes 3-5 days of manual paperwork",
            "Portfolio rebalancing delays cost clients 2-3% annually",
            "Manual processes limit AUM growth to 15% yearly average"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your firm with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Target />, 
          title: 'Lead Generation', 
          points: [
            "Your agent builds targeted lists of ideal prospects (accredited investors, businesses needing insurance)",
            "Enriches data and runs initial outreach campaigns",
            "Qualifies interest and investment capacity before handoff"
          ] 
        },
        { 
          icon: <Calendar />, 
          title: 'Appointment Setting', 
          points: [
            "Automates the entire consultation booking process",
            "Intelligently follows up with warm leads",
            "Finds mutually available times on your calendar",
            "Sends automated reminders to ensure clients show up prepared"
          ] 
        },
        { 
          icon: <Shield />, 
          title: 'Compliance Management', 
          points: [
            "Monitors updates from financial regulatory bodies continuously",
            "Cross-references new rules with your firm's policies",
            "Flags marketing materials or client communications requiring review",
            "Maintains complete audit trail for examinations"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Legal Document Agent', 
          points: [
            "Streamlines client onboarding and paperwork",
            "Instantly generates standardized client agreements",
            "Creates advisory contracts using pre-approved templates",
            "Ensures all documents meet regulatory requirements"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Target />, title: 'Lead Generation', description: 'Identifies qualified investors, enriches data, and runs targeted outreach campaigns.', link: '/capabilities#lead-generation' },
        { icon: <Calendar />, title: 'Appointment Setting', description: 'Automates consultation booking with intelligent follow-ups and calendar integration.', link: '/capabilities#appointment-setting' },
        { icon: <Shield />, title: 'Compliance Management', description: 'Monitors regulatory changes and ensures all activities meet SEC/FINRA requirements.', link: '/capabilities#compliance-management' },
        { icon: <FileText />, title: 'Legal Document Agent', description: 'Generates compliant agreements, contracts, and onboarding documents instantly.', link: '/capabilities#legal-documents' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Financial Practice',
      items: [
        { icon: <Zap />, value: '87%', title: 'Lead Conversion Rate', description: 'AI qualification and nurturing converts nearly 9 out of 10 qualified prospects into clients.' },
        { icon: <Shield />, value: '100%', title: 'Compliance Accuracy', description: 'Zero violations. Automated monitoring ensures every communication and transaction is compliant.' },
        { icon: <Clock />, value: '75%', title: 'Faster Onboarding', description: 'From days to hours. KYC verification and account setup handled seamlessly.' },
        { icon: <TrendingUp />, value: '3.2x', title: 'ROI on AI Investment', description: 'Reduced operational costs and increased AUM deliver exceptional returns within months.' },
        { icon: <Users />, value: '45%', title: 'More Client Face Time', description: 'Automation frees advisors to focus on relationships, not paperwork.' },
        { icon: <Award />, value: '92%', title: 'Client Retention Rate', description: 'Consistent service and proactive portfolio management keeps clients for life.' },
      ]
    },
    cta: {
      title: 'Ready to Build a More Intelligent Practice?',
      subtitle: 'Book Your Financial Services Consultation'
    }
  },
  // =================================================================
  // HEALTHCARE & LIFE SCIENCES DATA - UPDATED FROM PDF
  // =================================================================
  {
    slug: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    hero: {
      title: 'Less Administration.\nMore Patient Care.\nHealthcare.',
      subtitle: 'NovaGent provides healthcare organizations with a single, powerful AI agent managed by our experts. It automates patient intake, appointment scheduling, and referral management 24/7 - all through one HIPAA-compliant system that lets your clinical staff focus entirely on delivering exceptional patient care.',
      heroIcon: <HeartPulse />
    },
    challenges: {
      title: 'The Modern Practice Is an Overwhelming Operational Challenge',
      subtitle: 'Every day without an AI agent costs you patient satisfaction, clinical efficiency, and revenue.',
      items: [
        { 
          icon: <AlertCircle />, 
          title: 'Chronic Patient No-Shows', 
          points: [
            "Every missed appointment is lost revenue and a disruption to your doctors' schedules",
            "Manual reminder calls are time-consuming and often ineffective",
            "Average no-show rate: 27% costs practices $150K+ annually",
            "Each no-show impacts 3-4 other patients who could have been seen"
          ] 
        },
        { 
          icon: <Phone />, 
          title: 'Front-Desk Bottlenecks', 
          points: [
            "Your front-desk staff is constantly tied up on the phone with repetitive intake questions",
            "Average hold time: 8.5 minutes leading to abandoned calls",
            "67% of calls are routine questions that could be automated",
            "Long hold times lead to poor patient experience and lost appointments"
          ] 
        },
        { 
          icon: <RotateCcw />, 
          title: 'Leaky Referral Process', 
          points: [
            "Manually tracking patient referrals to outside specialists is complex and prone to error",
            "42% of referrals never result in appointments",
            "Lost referrals mean delays in care and frustrated patients",
            "Each leaked referral costs practices $800-1200 in lost revenue"
          ] 
        },
      ]
    },
    solutions: {
      title: 'Introducing the "Healthcare Practice OS" Bundle',
      subtitle: 'This bundle equips your practice with a dedicated AI agent that acts as a 24/7 patient coordinator. It automates your most time-consuming administrative workflows, reduces operational costs, and ensures a seamless experience for your patients.',
      items: [
        { 
          icon: <Calendar />, 
          title: 'Appointment Setting', 
          points: [
            "Drastically reduce no-shows",
            "Your agent integrates with your EMR/EHR calendar",
            "Allows patients to book appointments online",
            "And sends automated SMS or voice call reminders to confirm their visit"
          ] 
        },
        { 
          icon: <MessageSquare />, 
          title: 'Customer Support', 
          points: [
            "Deploy an AI-powered concierge to answer common patient questions 24/7",
            "It can handle inquiries about office hours, insurance, and appointment preparation",
            "Freeing up your staff for more complex issues"
          ] 
        },
        { 
          icon: <Phone />, 
          title: 'AI Dialer', 
          points: [
            "Automate your inbound call process",
            "Your agent can act as the first point of contact",
            "Handling new patient intake, gathering necessary information",
            "And intelligently routing calls to the correct department or staff member"
          ] 
        },
        { 
          icon: <GanttChartSquare />, 
          title: 'Project Management', 
          points: [
            "Never lose track of a referral again",
            "Your agent manages the entire referral workflow",
            "From sending the initial request to the specialist's office",
            "To following up with the patient to ensure their appointment is booked"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Capabilities, Explained.',
      items: [
        { icon: <Calendar />, title: 'Appointment Setting', description: 'Integrates with EMR/EHR, reduces no-shows with automated reminders, enables 24/7 online booking.', link: '/capabilities#appointment-setting' },
        { icon: <MessageSquare />, title: 'Customer Support', description: 'AI-powered concierge answers common patient questions about hours, insurance, and preparation.', link: '/capabilities#customer-support' },
        { icon: <Phone />, title: 'AI Dialer', description: 'Handles new patient intake, gathers information, and intelligently routes calls to departments.', link: '/capabilities#ai-dialer' },
        { icon: <GanttChartSquare />, title: 'Project Management', description: 'Manages referral workflows from specialist request to patient appointment confirmation.', link: '/capabilities#project-management' },
      ]
    },
    results: {
      title: 'Ready to Build a More Efficient Practice?',
      items: [
        { icon: <Clock />, value: '85%', title: 'Reduction in No-Shows', description: 'Smart reminders and easy rescheduling keep your schedule full and revenue flowing.' },
        { icon: <Shield />, value: '100%', title: 'HIPAA Compliant', description: 'Every interaction is secure, encrypted, and fully compliant with healthcare regulations.' },
        { icon: <Users />, value: '3x', title: 'More Patient Touchpoints', description: 'Automated follow-ups and check-ins improve outcomes and patient satisfaction.' },
        { icon: <TrendingUp />, value: '45%', title: 'Practice Growth', description: 'Handle more patients without adding staff. Scale your success effortlessly.' },
        { icon: <HeartPulse />, value: '94%', title: 'Patient Satisfaction Score', description: 'Instant responses and seamless experiences create loyal patients who refer others.' },
        { icon: <Award />, value: '20+', title: 'Hours/Week Saved', description: 'Your staff focuses on patient care while AI handles the administrative burden.' },
      ]
    },
    cta: {
      title: 'Ready to Build a More Efficient Practice?',
      subtitle: 'Book Your Healthcare Consultation'
    }
  },
  // =================================================================
  // MANUFACTURING DATA
  // =================================================================
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    hero: {
      title: 'Optimize Production.\nPrevent Downtime.\nManufacturing.',
      subtitle: 'NovaGent provides manufacturing companies with a single, powerful AI agent managed by our experts. It monitors quality control, predicts maintenance needs, and optimizes production schedules 24/7 - all through one unified system that keeps your factory running at peak efficiency.',
      heroIcon: <Factory />
    },
    challenges: {
      title: 'Your Factory\'s Critical Production Risks',
      subtitle: 'Every day without an AI agent costs you quality, efficiency, and profit margins.',
      items: [
        { 
          icon: <AlertTriangle />, 
          title: 'Quality Control Blind Spots', 
          points: [
            "23% of defects go undetected until customer complaints",
            "Manual quality checks catch only 65% of issues",
            "Average recall cost: $8.5 million plus brand damage",
            "Each quality escape reduces customer retention by 18%"
          ] 
        },
        { 
          icon: <Clock />, 
          title: 'Unplanned Downtime Crisis', 
          points: [
            "Average manufacturer experiences 800 hours of downtime yearly",
            "Each hour of downtime costs $50,000-100,000",
            "70% of equipment failures are predictable but missed",
            "Emergency repairs cost 3-9x more than planned maintenance"
          ] 
        },
        { 
          icon: <Package />, 
          title: 'Supply Chain Chaos', 
          points: [
            "45% of production delays due to material shortages",
            "Manual inventory tracking results in 15% excess stock",
            "Rush orders increase material costs by 35%",
            "Poor visibility causes $1.1 trillion in lost revenue globally"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your factory with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Activity />, 
          title: 'Project Management', 
          points: [
            "Your agent manages complex production schedules",
            "Tracks work orders from start to finish",
            "Coordinates with suppliers and automatically sends status updates",
            "Ensures everyone is in sync across all shifts"
          ] 
        },
        { 
          icon: <Shield />, 
          title: 'Compliance Management', 
          points: [
            "Automate your safety and quality assurance workflows",
            "Track safety incidents and manage compliance documentation",
            "Monitor production processes to ensure industry standards",
            "Maintain audit-ready records automatically"
          ] 
        },
        { 
          icon: <Calculator />, 
          title: 'Financial Operations', 
          points: [
            "Streamline your supply chain financials",
            "Track purchase orders and process supplier invoices",
            "Monitor material costs in real-time",
            "Get instant visibility into cost of goods sold"
          ] 
        },
        { 
          icon: <BarChart3 />, 
          title: 'Data Analytics & Reporting', 
          points: [
            "Turn factory floor data into actionable intelligence",
            "Analyze production output and machine uptime",
            "Identify quality control patterns",
            "Generate reports that eliminate operational bottlenecks"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Activity />, title: 'Project Management', description: 'Manages production schedules, tracks orders, and coordinates suppliers across all shifts.', link: '/capabilities#project-management' },
        { icon: <Shield />, title: 'Compliance Management', description: 'Automates safety workflows, tracks incidents, and maintains audit-ready documentation.', link: '/capabilities#compliance-management' },
        { icon: <Calculator />, title: 'Financial Operations', description: 'Streamlines supply chain finances, tracks costs, and provides real-time COGS visibility.', link: '/capabilities#financial-operations' },
        { icon: <BarChart3 />, title: 'Data Analytics & Reporting', description: 'Analyzes production metrics to identify bottlenecks and optimization opportunities.', link: '/capabilities#analytics-reporting' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Manufacturing Business',
      items: [
        { icon: <Target />, value: '23%', title: 'Reduction in Defect Rate', description: 'AI-powered quality control catches issues before they become expensive recalls.' },
        { icon: <Clock />, value: '41%', title: 'Less Unplanned Downtime', description: 'Predictive maintenance keeps lines running when competitors are fixing breakdowns.' },
        { icon: <Shield />, value: '100%', title: 'Compliance Maintained', description: 'Automated tracking ensures every safety and quality standard is met without manual audits.' },
        { icon: <TrendingUp />, value: '37%', title: 'Inventory Cost Reduction', description: 'Just-in-time optimization reduces carrying costs while preventing stockouts.' },
        { icon: <Zap />, value: '52%', title: 'Faster Issue Resolution', description: 'From detection to correction in minutes, not hours. Real-time monitoring pays dividends.' },
        { icon: <Award />, value: '28%', title: 'Overall Efficiency Gain', description: 'Every metric improves when AI coordinates your entire operation seamlessly.' },
      ]
    },
    cta: {
      title: 'Ready to Build a Smarter Factory?',
      subtitle: 'Book Your Manufacturing Consultation'
    }
  },
  // =================================================================
  // MEDIA & ENTERTAINMENT DATA
  // =================================================================
  {
    slug: 'media',
    name: 'Media & Entertainment',
    hero: {
      title: 'Create Faster.\nEngage Smarter.\nMedia & Entertainment.',
      subtitle: 'NovaGent provides media companies, production studios, and entertainment agencies with a single, powerful AI agent managed by our experts. It automates content workflows, manages digital rights, and analyzes audience data 24/7 - all through one unified system that maximizes your creative impact.',
      heroIcon: <Film />
    },
    challenges: {
      title: 'Your Studio\'s Critical Content Challenges',
      subtitle: 'Every day without an AI agent costs you audience engagement, monetization opportunities, and creative efficiency.',
      items: [
        { 
          icon: <Clock />, 
          title: 'Content Creation Bottleneck', 
          points: [
            "Creative teams spend 70% of time on production logistics vs. actual creation",
            "Average time from concept to publish: 3-5 weeks. Viral moments last 3-5 days",
            "Manual editing and optimization delays cost millions in lost opportunities",
            "Competitors using AI ship content 10x faster"
          ] 
        },
        { 
          icon: <AlertTriangle />, 
          title: 'Rights & Compliance Nightmare', 
          points: [
            "Average media company manages 50,000+ content assets with complex rights",
            "Copyright violations average $150,000 per incident",
            "Manual tracking misses 35% of licensing expirations",
            "One violation can destroy platform relationships and revenue streams"
          ] 
        },
        { 
          icon: <TrendingDown />, 
          title: 'Audience Engagement Crisis', 
          points: [
            "80% of content fails to reach its target audience effectively",
            "Manual audience analysis takes days - trends change in hours",
            "Poor timing and distribution reduces engagement by 65%",
            "Missed viral opportunities cost millions in potential revenue"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your media company with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <GanttChartSquare />, 
          title: 'Project Management', 
          points: [
            "Your agent manages complex production schedules",
            "Tracks project milestones from script to screen",
            "Coordinates departmental tasks and provides automated progress reports",
            "Ensures every production stays on time and on budget"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Legal Document Agent', 
          points: [
            "Automate your contracts and licensing",
            "Instantly draft talent agreements and location releases",
            "Create content licensing contracts using studio-approved templates",
            "Track rights expiration and manage renewals automatically"
          ] 
        },
        { 
          icon: <BarChart />, 
          title: 'Data Analytics & Reporting', 
          points: [
            "Gain deep insights into your audience behavior",
            "Analyze viewership data and social media engagement",
            "Generate clear reports on content performance",
            "Identify trending topics and optimize release timing"
          ] 
        },
        { 
          icon: <Calculator />, 
          title: 'Financial Operations', 
          points: [
            "Streamline your royalty and residuals process",
            "Track licensing agreements and viewership data",
            "Automate payment calculations for talent and stakeholders",
            "Monitor content monetization across all platforms"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <GanttChartSquare />, title: 'Project Management', description: 'Manages production schedules, tracks milestones, and coordinates teams from pre to post-production.', link: '/capabilities#project-management' },
        { icon: <FileText />, title: 'Legal Document Agent', description: 'Automates contracts, manages licensing, and tracks rights expiration dates.', link: '/capabilities#legal-documents' },
        { icon: <BarChart />, title: 'Data Analytics & Reporting', description: 'Analyzes audience data, tracks engagement, and identifies content opportunities.', link: '/capabilities#analytics-reporting' },
        { icon: <Calculator />, title: 'Financial Operations', description: 'Manages royalties, tracks revenue streams, and automates stakeholder payments.', link: '/capabilities#financial-operations' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Media Business',
      items: [
        { icon: <Zap />, value: '85%', title: 'Faster Content Creation', description: 'From days to hours. AI generates, edits, and optimizes content across all formats instantly.' },
        { icon: <Clock />, value: '92%', title: 'Content Utilization Rate', description: 'Smart distribution ensures every piece of content reaches its maximum audience potential.' },
        { icon: <Users />, value: '340%', title: 'Audience Engagement Boost', description: 'AI-driven personalization creates deeper connections with every viewer interaction.' },
        { icon: <TrendingUp />, value: '67%', title: 'Revenue Growth', description: 'Optimized monetization strategies and perfect timing maximize every content dollar.' },
        { icon: <Shield />, value: '100%', title: 'Rights Compliance', description: 'Automated tracking prevents costly violations and ensures every asset is properly licensed.' },
        { icon: <Award />, value: '3x', title: 'Award Recognition', description: 'Data-driven content strategies produce award-winning results that elevate your brand.' },
      ]
    },
    cta: {
      title: 'Ready to Create the Future of Entertainment?',
      subtitle: 'Book Your Media & Entertainment Consultation'
    }
  },
  // =================================================================
  // NONPROFIT DATA
  // =================================================================
  {
    slug: 'nonprofit',
    name: 'Nonprofit',
    hero: {
      title: 'Amplify Your Mission.\nMaximize Your Impact.\nNonprofit.',
      subtitle: 'NovaGent provides nonprofit organizations with a single, powerful AI agent managed by our experts. It automates donor outreach, manages volunteer coordination, and reports on impact 24/7 - all through one unified system that lets you focus on what matters most: your mission.',
      heroIcon: <Heart />
    },
    challenges: {
      title: 'Your Organization\'s Critical Mission Gaps',
      subtitle: 'Every day without an AI agent costs you donations, volunteer engagement, and community impact.',
      items: [
        { 
          icon: <TrendingDown />, 
          title: 'Donor Engagement Crisis', 
          points: [
            "67% of first-time donors never give again due to poor follow-up",
            "Average response time to donor inquiries: 3-5 days. They move on in hours",
            "Manual donor tracking misses 45% of giving opportunities",
            "Each day of delay reduces donation probability by 18%"
          ] 
        },
        { 
          icon: <Clock />, 
          title: 'Volunteer Management Chaos', 
          points: [
            "Staff spend 60% of time on volunteer coordination vs. mission work",
            "32% no-show rate for volunteer events due to poor communication",
            "Manual scheduling leads to understaffed programs and burnout",
            "Volunteer retention rate: Only 29% return after first experience"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Impact Reporting Struggles', 
          points: [
            "Grant applications take 40-80 hours of manual work",
            "Manual reporting misses 70% of your actual impact stories",
            "Board reports take days to compile, using outdated data",
            "Without clear ROI, major donors give elsewhere"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your nonprofit with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Target />, 
          title: 'Lead Generation', 
          points: [
            "Identifies potential major donors and corporate sponsors based on specific criteria",
            "Runs initial outreach campaigns to gauge interest in supporting your cause",
            "Builds targeted lists for campaigns and events"
          ] 
        },
        { 
          icon: <Calendar />, 
          title: 'Appointment Setting', 
          points: [
            "Automates scheduling of meetings with major donors and board members",
            "Coordinates volunteer shifts and training sessions",
            "Sends automated reminders to reduce no-shows",
            "Integrates with your team's calendars seamlessly"
          ] 
        },
        { 
          icon: <GanttChartSquare />, 
          title: 'Project Management', 
          points: [
            "Manages fundraising campaigns from start to finish",
            "Tracks volunteer engagement and program outcomes",
            "Coordinates events and ensures nothing falls through the cracks",
            "Provides real-time updates to stakeholders"
          ] 
        },
        { 
          icon: <BarChart />, 
          title: 'Data Analytics & Reporting', 
          points: [
            "Turns your program data into powerful impact stories",
            "Automatically compiles metrics on funds raised and lives touched",
            "Creates data-driven reports for boards and funders",
            "Identifies trends and opportunities for growth"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Target />, title: 'Lead Generation', description: 'Identifies major donors and sponsors, runs targeted outreach campaigns for your cause.', link: '/capabilities#lead-generation' },
        { icon: <Calendar />, title: 'Appointment Setting', description: 'Automates donor meetings and volunteer scheduling with integrated calendar management.', link: '/capabilities#appointment-setting' },
        { icon: <GanttChartSquare />, title: 'Project Management', description: 'Manages campaigns, tracks outcomes, and coordinates events seamlessly.', link: '/capabilities#project-management' },
        { icon: <BarChart />, title: 'Data Analytics & Reporting', description: 'Creates powerful impact reports and identifies growth opportunities.', link: '/capabilities#analytics-reporting' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Nonprofit',
      items: [
        { icon: <Zap />, value: '87%', title: 'Donor Response Rate', description: 'From 12% to 87%. AI-powered personalization creates messages that resonate with each donor\'s passion.' },
        { icon: <Clock />, value: '72%', title: 'Less Admin Time', description: 'Your team focuses on mission, not paperwork. Every hour saved is an hour serving your community.' },
        { icon: <Users />, value: '3.5x', title: 'Volunteer Retention', description: 'Smart matching and instant communication keeps volunteers engaged and coming back to serve.' },
        { icon: <TrendingUp />, value: '156%', title: 'ROI Increase', description: 'Every dollar invested returns $1.56 more in donations. Your mission gets the resources it deserves.' },
        { icon: <Shield />, value: '100%', title: 'Grant Success Rate', description: 'AI analyzes RFPs, matches your strengths, and crafts winning proposals that funders can\'t ignore.' },
        { icon: <Award />, value: '42%', title: 'More Major Gifts', description: 'Identify, cultivate, and steward major donors with precision timing and personalized outreach.' },
      ]
    },
    cta: {
      title: 'Ready to Amplify Your Impact?',
      subtitle: 'Book Your Nonprofit Consultation'
    }
  },
  // =================================================================
  // PROFESSIONAL SERVICES DATA - UPDATED FROM PDF
  // =================================================================
  {
    slug: 'professional-services',
    name: 'Professional Services',
    hero: {
      title: 'Elevate Your Practice.\nAutomate Your Operations.\nProfessional Services.',
      subtitle: 'NovaGent provides consulting firms, agencies, and professional service providers with a single, powerful AI agent managed by our experts. It automates client acquisition, project management, and billing 24/7 - all through one unified system that frees your experts to focus on billable work.',
      heroIcon: <Briefcase />
    },
    challenges: {
      title: 'Your Expertise is Valuable. Your Administrative Time Isn\'t.',
      subtitle: 'Every day without an AI agent costs you billable hours, client opportunities, and growth potential.',
      items: [
        { 
          icon: <TrendingDown />, 
          title: 'Inconsistent Client Pipeline', 
          points: [
            "Your experts spend valuable, non-billable hours on manual prospecting and following up with leads",
            "Average conversion rate from manual outreach: Only 3-5%",
            "Each day of admin work is $2,000-5,000 in lost billable revenue",
            "Feast-or-famine cycles hurt cash flow and team morale"
          ] 
        },
        { 
          icon: <Clock />, 
          title: 'Chaotic Project Management', 
          points: [
            "Juggling multiple client projects, tracking deadlines, and managing communications",
            "40% of projects experience scope creep due to poor tracking",
            "Administrative drag consumes 25-30% of your team's capacity",
            "Missed deliverables damage reputation and referrals"
          ] 
        },
        { 
          icon: <FileText />, 
          title: 'Delayed Billing & Invoicing', 
          points: [
            "Manually tracking billable hours and preparing detailed invoices for each client",
            "Average invoice preparation: 2-3 hours per client monthly",
            "Delayed invoicing impacts cash flow by 30-45 days",
            "Billing errors reduce client trust and delay payments"
          ] 
        },
      ]
    },
    solutions: {
      title: 'One Agent. Multiple Skills. Expertly Managed.',
      subtitle: 'NovaGent provides your firm with a single, dedicated AI agent equipped with the exact skills you need. Our experts configure, deploy, and continuously optimize your agent to deliver measurable results - while you maintain full visibility through our transparent platform.',
      items: [
        { 
          icon: <Target />, 
          title: 'Lead Generation', 
          points: [
            "Define your ideal client profile, and your agent will build targeted lists",
            "Run initial outreach campaigns",
            "Hand off only warm, qualified prospects to your business development team"
          ] 
        },
        { 
          icon: <Calendar />, 
          title: 'Appointment Setting', 
          points: [
            "Automate the entire consultation booking process",
            "Your agent engages with qualified leads",
            "Finds mutually available times on your experts\' calendars",
            "Sends meeting confirmations"
          ] 
        },
        { 
          icon: <GanttChartSquare />, 
          title: 'Project Management', 
          points: [
            "Your agent acts as a virtual project manager",
            "Tracks project timelines and sends automated status updates to clients",
            "Manages task assignments",
            "Ensures every project stays on track and on budget"
          ] 
        },
        { 
          icon: <Calculator />, 
          title: 'Financial Operations', 
          points: [
            "Streamline your billing from end to end",
            "Your agent tracks billable hours or project milestones",
            "Automatically generates and sends detailed, accurate invoices",
            "Ensures you get paid faster"
          ] 
        },
      ]
    },
    agents: {
      title: 'Your Agent\'s Skills, Delivered Through One Unified System.',
      items: [
        { icon: <Target />, title: 'Lead Generation', description: 'Define your ideal client profile, build targeted lists, and run initial outreach campaigns.', link: '/capabilities#lead-generation' },
        { icon: <Calendar />, title: 'Appointment Setting', description: 'Automate consultation booking with qualified leads and expert calendar integration.', link: '/capabilities#appointment-setting' },
        { icon: <GanttChartSquare />, title: 'Project Management', description: 'Track timelines, send client updates, and manage task assignments automatically.', link: '/capabilities#project-management' },
        { icon: <Calculator />, title: 'Financial Operations', description: 'Track billable hours, generate accurate invoices, and streamline your entire billing process.', link: '/capabilities#financial-operations' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Professional Services Business',
      items: [
        { icon: <Zap />, value: '73%', title: 'More Billable Hours', description: 'Automation frees your experts from admin work, adding 15+ billable hours per person weekly.' },
        { icon: <Clock />, value: '89%', title: 'On-Time Project Delivery', description: 'AI project management ensures nothing falls through the cracks, protecting your reputation.' },
        { icon: <Users />, value: '4.2x', title: 'Client Pipeline Growth', description: 'Consistent outreach and nurturing fills your pipeline with qualified opportunities.' },
        { icon: <TrendingUp />, value: '52%', title: 'Revenue Increase', description: 'More billable hours plus faster collections equals dramatic revenue growth.' },
        { icon: <Shield />, value: '45', title: 'Days Faster Payment', description: 'Automated, accurate invoicing gets you paid in days, not months.' },
        { icon: <Award />, value: '96%', title: 'Client Retention', description: 'Consistent communication and flawless execution creates clients for life.' },
      ]
    },
    cta: {
      title: 'Ready to Build a More Profitable Practice?',
      subtitle: 'Book Your Professional Services Consultation'
    }
  }
];

// Helper function to find data by slug
export const getIndustryDataBySlug = (slug: string): IndustryData | undefined => {
  return industries.find(industry => industry.slug === slug);
};