import {
  Users, Zap, ShieldCheck, BarChart, CheckCircle, Bot, TrendingUp, Star, Clock, Smile, Target, UserCheck, FileText, Stethoscope, Beaker, DollarSign,
  Car, ShoppingCart, Wrench, Gauge, MessageSquare, Calendar, Share2, Award, Signal, Wifi, Smartphone, Database, Headphones, GraduationCap, BookOpen,
  Lightbulb, School, AlertTriangle, Wind, Activity, Droplet, Building, HardHat, ClipboardCheck, Layers, Scaling, Settings, Briefcase, GanttChartSquare,
  Ruler, Truck, Cpu, BarChart3, ShieldAlert, Users2, Brain, Microscope, ClipboardList, FilePlus, Wallet, LineChart, Lock, Network, ScanSearch, Waypoints,
  Factory, Warehouse, BrainCircuit, DatabaseZap, BarChartBig, CheckCircle2, ShieldPlus, Clapperboard, Film, Radio, Newspaper, Sparkles, Search,
  HeartHandshake, Megaphone, CalendarDays, HandCoins, Presentation, Goal, Palette, MailCheck, UserCog, Shield, BarChart2, Home, HeartPulse, FlaskConical, type LucideIcon, Phone
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
  // AUTOMOTIVE DATA - UPDATED
  // =================================================================
  {
    slug: 'automotive',
    name: 'Automotive',
    hero: {
      title: 'Intelligent Automation for the Automotive Industry',
      subtitle: "From dealerships to service centers, NovaGent's AI agents streamline operations, enhance customer experiences, and drive sales growth—allowing your team to focus on building relationships and delivering exceptional service.",
      heroIcon: <Car />
    },
    challenges: {
      title: "Navigating Today's Automotive Industry Challenges",
      items: [
        { icon: <Users />, title: 'Evolving Customer Expectations', points: ["Customers research extensively online", "Expect immediate, personalized responses", "Requires engagement across multiple channels"] },
        { icon: <ShoppingCart />, title: 'Complex Sales Processes', points: ["Journey involves numerous touchpoints", "Financing and paperwork create friction", "Friction can lead to lost sales opportunities"] },
        { icon: <Wrench />, title: 'Service Department Efficiency', points: ["Managing appointments creates bottlenecks", "Parts and inventory management is complex", "Impacts both customer satisfaction and revenue"] },
        { icon: <Gauge />, title: 'Inventory Management Pressure', points: ["Requires balancing optimal inventory levels", "Must adapt to supply chain fluctuations", "Needs constant analysis of consumer preferences"] },
      ]
    },
    solutions: {
      title: 'How NovaGent Transforms Automotive Operations',
      items: [
        { icon: <MessageSquare />, title: '24/7 Virtual Sales Assistant', points: ["Engage website visitors instantly, 24/7", "Answer questions, schedule test drives & qualify leads", "Ensure no opportunity is ever missed", "Seamlessly hand-off prospects with full history"] },
        { icon: <Calendar />, title: 'Automated Service Scheduling', points: ["Streamline appointment booking with AI", "Manage service calendar and send reminders", "Upsell maintenance based on vehicle history", "Confirms appointments automatically"] },
        { icon: <Car />, title: 'Proactive Maintenance Alerts', points: ["Track customer vehicles and service needs", "Send timely, personalized reminders", "Build service department loyalty", "Generate recurring revenue"] },
        { icon: <BarChart />, title: 'Inventory & Parts Management', points: ["Analyze market trends to optimize inventory", "Automate parts reordering and tracking", "Price vehicles competitively with real-time data", "Adapt to local demand patterns"] },
        { icon: <Share2 />, title: 'Automated Marketing Campaigns', points: ["Create targeted, multi-channel campaigns", "Promote specific models and service specials", "Adapt messaging based on customer engagement", "Deliver offers at the right time"] },
        { icon: <Star />, title: 'Reputation Management', points: ["Automatically solicit and manage reviews", "Respond to customer feedback across platforms", "Identify and address service issues proactively", "Build a stellar online reputation"] },
      ]
    },
    agents: {
      title: 'Meet Your AI Team for Automotive Success',
      items: [
        { icon: <Target />, title: 'Lead Generation Agent', description: 'Identifies and nurtures potential customers through your website, social media, and third-party listing sites.', link: '/solutions/lead-generation-agent' },
        { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Manages test drives, service appointments, and follow-up scheduling without human intervention.', link: '/solutions/appointment-setter-agent' },
        { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Handles inquiries about vehicles, financing options, service questions, and parts availability.', link: '/solutions/customer-support-agent' },
        { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Creates and optimizes advertising for specific models, promotions, and service offerings.', link: '/solutions/ad-campaign-manager-agent' },
        { icon: <Star />, title: 'SEO + Reputation Agent', description: "Manages your dealership's online presence, reviews, and search visibility to drive more traffic.", link: '/solutions/seo-reputation-agent' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Automotive Business',
      items: [
        { icon: <Zap />, value: '40%', title: 'Faster Lead Response Times', description: 'Engage potential customers instantly, dramatically increasing lead-to-appointment conversion rates.' },
        { icon: <Clock />, value: '25%', title: 'Reduction in Service Scheduling Delays', description: 'Streamline the appointment process and reduce scheduling conflicts and no-shows.' },
        { icon: <Users />, value: '60%', title: 'Improvement in Customer Satisfaction', description: 'Provide consistent, personalized communication throughout the customer journey.' },
        { icon: <TrendingUp />, value: '35%', title: 'Increase in Service Department Revenue', description: 'Proactively capture maintenance opportunities and improve service bay utilize.' },
        { icon: <Shield />, value: '50%', title: 'More Positive Online Reviews', description: 'Systematically build your reputation through automated review solicitation and management.' },
        { icon: <Award />, value: '30%', title: 'Higher Sales Team Productivity', description: 'Free your sales professionals from routine tasks so they can focus on closing deals.' },
      ]
    },
    cta: {
      title: 'Ready to Revolutionize Your Automotive Business?',
      subtitle: 'Let NovaGent be your partner in navigating the future of the Automotive sector. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // COMMUNICATIONS DATA - UPDATED
  // =================================================================
  {
    slug: 'communications',
    name: 'Communications',
    hero: {
      title: 'Transforming the Customer Experience in Communications',
      subtitle: "In today's hyper-connected world, telecom and communications providers face unprecedented customer service demands. NovaGent's AI agents help you deliver exceptional experiences at scale while optimizing operations and reducing costs.",
      heroIcon: <Signal />
    },
    challenges: {
      title: "Navigating Today's Communications Industry Challenges",
      items: [
        { icon: <Users />, title: 'High Customer Service Volume', points: ["Handles millions of interactions monthly", "Strains traditional service models", "Covers support to billing inquiries"] },
        { icon: <Signal />, title: 'Network Operations Complexity', points: ["Requires constant vigilance to maintain", "Needs rapid response to potential issues", "Aims to prevent customer-facing problems"] },
        { icon: <BarChart />, title: 'Subscription Revenue Pressure', points: ["Faces increasing competition", "Manages customer acquisition and retention", "Focuses on reducing subscriber churn"] },
        { icon: <Wifi />, title: 'Technical Support Scalability', points: ["Provides support across diverse devices", "Requires specialized, scalable knowledge", "Addresses a wide range of connectivity issues"] },
      ]
    },
    solutions: {
        title: 'How NovaGent Transforms Communications Operations',
        items: [
            { icon: <Smartphone />, title: 'AI-Powered Customer Service', points: ["Handles common inquiries 24/7", "Frees human agents for complex issues", "Covers billing, plan changes, and troubleshooting"] },
            { icon: <Signal />, title: 'Network Operations Monitoring', points: ["Continuously monitors network performance", "Predicts and automatically resolves issues", "Alerts teams with detailed diagnostics"] },
            { icon: <Database />, title: 'Intelligent Subscription Management', points: ["Identifies at-risk subscribers", "Proactively offers retention incentives", "Optimizes upgrade paths based on usage"] },
            { icon: <Headphones />, title: 'Automated Technical Support', points: ["Handles common device and service issues", "Escalates only when necessary", "Creates an efficient tiered support system"] },
            { icon: <Share2 />, title: 'Personalized Marketing Campaigns', points: ["Recommends relevant service upgrades", "Targets based on usage and preferences", "Adapts to customer lifecycle stage"] },
            { icon: <MessageSquare />, title: 'Proactive Service Notifications', points: ["Notifies customers of maintenance or outages", "Sends updates on billing and accounts", "Uses customer's preferred channels"] },
        ]
    },
    agents: {
        title: 'Meet Your AI Team for Communications Excellence',
        items: [
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Handles customer inquiries, technical support, and account management across multiple channels.', link: '/solutions/customer-support-agent'},
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Identifies potential customers and cross-sell opportunities within your existing subscriber base.', link: '/solutions/lead-generation-agent'},
            { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Schedules installation, service calls, and technical support appointments efficiently.', link: '/solutions/appointment-setter-agent'},
            { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Creates and optimizes advertising for new services, promotions, and competitive offers.', link: '/solutions/ad-campaign-manager-agent'},
            { icon: <Star />, title: 'SEO + Reputation Agent', description: 'Manages your online presence and customer reviews to improve brand perception.', link: '/solutions/seo-reputation-agent'},
        ]
    },
    results: {
        title: 'Tangible Results for Your Communications Business',
        items: [
            { icon: <Zap />, value: '35%', title: 'Reduction in Network Downtime', description: 'Predict and address potential issues before they impact service quality and customer experience.'},
            { icon: <Users />, value: '50%', title: 'Faster Customer Onboarding', description: 'Streamline the activation process for new subscribers with automated setup assistance.'},
            { icon: <Clock />, value: '70%', title: 'of Support Tickets Resolved Automatically', description: 'Handle common inquiries and technical issues without human intervention, reducing wait times.'},
            { icon: <TrendingUp />, value: '20%', title: 'Increase in Subscription Retention', description: 'Identify at-risk customers and proactively address concerns before they cancel.'},
            { icon: <Shield />, value: '40%', title: 'Improvement in First-Call Resolution', description: 'Equip human agents with AI-powered insights and recommendations for complex issues.'},
            { icon: <Award />, value: '25%', title: 'Higher CSAT and NPS Scores', description: 'Deliver more consistent, personalized service across all customer touchpoints.'},
        ]
    },
    cta: {
        title: 'Ready to Revolutionize Your Communications Business?',
        subtitle: 'Let NovaGent be your partner in building the future of communications. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // EDUCATION DATA - UPDATED
  // =================================================================
  {
    slug: 'education',
    name: 'Education',
    hero: {
      title: 'Intelligent Automation for the Future of Education',
      subtitle: "From K-12 schools to universities and online learning platforms, NovaGent's AI agents streamline administrative tasks, enhance student engagement, and provide personalized support—allowing educators to focus on what matters most: teaching and mentoring.",
      heroIcon: <GraduationCap />
    },
    challenges: {
        title: "Navigating Today's Educational Landscape",
        items: [
            { icon: <Clock />, title: 'Administrative Burden', points: ["Reduces time on repetitive admin tasks", "Allows focus on teaching and student development", "Addresses up to 30% of time spent on administration"] },
            { icon: <Users />, title: 'Scaling Personalized Support', points: ["Provides individualized attention at scale", "Addresses diverse learning needs of growing populations", "Extends support beyond the classroom"] },
            { icon: <Calendar />, title: 'Complex Scheduling & Coordination', points: ["Manages class schedules and room assignments", "Coordinates faculty availability seamlessly", "Simplifies complex registration for students"] },
            { icon: <MessageSquare />, title: 'Communication Overload', points: ["Maintains effective parent-student communication", "Handles communication across multiple channels", "Reduces complexity as institutions grow"] },
        ]
    },
    solutions: {
        title: 'How NovaGent Transforms Educational Institutions',
        items: [
            { icon: <GraduationCap />, title: 'AI-Powered Admissions & Enrollment', points: ["Answers prospective student questions 24/7", "Guides applicants through completion", "Increases conversion with personalized follow-up"] },
            { icon: <BookOpen />, title: 'Intelligent Learning Assistant', points: ["Provides 24/7 AI-powered tutoring", "Answers subject-specific questions", "Adapts to individual learning styles"] },
            { icon: <Calendar />, title: 'Automated Scheduling & Coordination', points: ["Optimizes class timetables and room assignments", "Manages faculty availability and coordination", "Helps students navigate registration with ease"] },
            { icon: <MessageSquare />, title: 'Multi-Channel Communication Hub', points: ["Centralizes parent and student communication", "Sends timely reminders for assignments and events", "Answers common questions automatically"] },
            { icon: <FileText />, title: 'Administrative Workflow Automation', points: ["Automates routine paperwork and data entry", "Manages attendance tracking and grade recording", "Frees staff for high-value student activities"] },
            { icon: <BarChart />, title: 'Student Success Analytics', points: ["Identifies at-risk students early", "Recommends effective intervention strategies", "Tracks support program effectiveness via data"] },
        ]
    },
    agents: {
        title: 'Meet Your AI Team for Educational Excellence',
        items: [
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Handles inquiries from prospective students, current students, and parents across all channels.', link: '/solutions/customer-support-agent' },
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Identifies and nurtures prospective students through personalized communication sequences.', link: '/solutions/lead-generation-agent' },
            { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Manages campus tours, advisor meetings, and parent-teacher conferences efficiently.', link: '/solutions/appointment-setter-agent' },
            { icon: <Share2 />, title: 'Social Media Manager Agent', description: 'Creates and distributes engaging content about campus events, achievements, and programs.', link: '/solutions/social-media-manager-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: "Enhances your institution's online presence and manages reviews across educational platforms.", link: '/solutions/seo-reputation-agent' },
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
        subtitle: 'Let NovaGent be your partner in enhancing the future of education. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // ENERGY & UTILITIES DATA - UPDATED
  // =================================================================
  {
    slug: 'energy-utilities',
    name: 'Energy & Utilities',
    hero: {
      title: 'Intelligent Automation for Energy & Utilities',
      subtitle: "From grid management to customer service, NovaGent's AI agents optimize operations, enhance customer experiences, and drive efficiency—allowing your team to focus on reliability, sustainability, and innovation.",
      heroIcon: <Zap />
    },
    challenges: {
        title: "Navigating Today's Energy & Utilities Landscape",
        items: [
            { icon: <AlertTriangle />, title: 'Outage Management & Response', points: ["Minimizes outage duration with faster detection", "Provides accurate, timely info to customers", "Reduces pressure during service disruptions"] },
            { icon: <BarChart />, title: 'Grid Optimization Complexity', points: ["Balances load and integrates renewables", "Requires sophisticated, rapid decision-making", "Maintains overall grid stability and health"] },
            { icon: <Users />, title: 'Customer Service Demands', points: ["Meets modern expectations for instant service", "Provides personalized support across all channels", "Elevates service to tech industry standards"] },
            { icon: <Wind />, title: 'Energy Market Volatility', points: ["Navigates fluctuating energy prices", "Adapts to regulatory changes and renewables", "Solves complex trading and forecasting challenges"] },
        ]
    },
    solutions: {
        title: 'How NovaGent Transforms Energy & Utilities Operations',
        items: [
            { icon: <Zap />, title: 'Intelligent Grid Optimization', points: ["Continuously monitors grid performance", "Predicts issues and recommends adjustments", "Improves reliability and reduces energy waste"] },
            { icon: <AlertTriangle />, title: 'Automated Outage Response', points: ["Detects outages and dispatches crews efficiently", "Provides customers with real-time ETAs", "Manages multi-channel communications"] },
            { icon: <MessageSquare />, title: '24/7 Customer Service Automation', points: ["Offers round-the-clock support for inquiries", "Handles billing, service requests, and outage reports", "Reduces call center volume significantly"] },
            { icon: <Lightbulb />, title: 'Energy Efficiency Recommendations', points: ["Analyzes customer usage patterns", "Provides personalized energy-saving advice", "Promotes relevant efficiency programs"] },
            { icon: <Activity />, title: 'Predictive Maintenance', points: ["Analyzes equipment data to predict failures", "Optimizes maintenance scheduling proactively", "Reduces downtime and extends asset lifespan"] },
            { icon: <BarChart />, title: 'Energy Trading Optimization', points: ["Analyzes market conditions and weather forecasts", "Optimizes energy trading decisions", "Develops hedging strategies for volatile markets"] },
        ]
    },
    agents: {
        title: 'Meet Your AI Team for Energy & Utilities Excellence',
        items: [
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Handles customer inquiries, billing questions, and service requests across multiple channels.', link: '/solutions/customer-support-agent' },
            { icon: <AlertTriangle />, title: 'Outage Reporter Agent', description: 'Manages outage communications, status updates, and estimated restoration times.', link: '/solutions/customer-support-agent' },
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Promotes new services, efficiency programs, and renewable options to the right customers.', link: '/solutions/lead-generation-agent' },
            { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Creates and optimizes campaigns for energy efficiency programs and new service offerings.', link: '/solutions/ad-campaign-manager-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: "Manages your utility's online presence and customer reviews to improve public perception.", link: '/solutions/seo-reputation-agent' },
        ]
    },
    results: {
        title: 'Tangible Results for Your Energy & Utilities Business',
        items: [
            { icon: <Clock />, value: '30%', title: 'Reduction in Outage Response Time', description: 'Detect issues faster and coordinate resources more efficiently during service disruptions.' },
            { icon: <Zap />, value: '25%', title: 'Improvement in Grid Efficiency', description: 'Optimize load balancing and reduce waste through AI-powered monitoring and adjustments.' },
            { icon: <Users />, value: '60%', title: 'of Customer Inquiries Resolved Automatically', description: 'Handle common questions and requests without human intervention, reducing wait times.' },
            { icon: <TrendingUp />, value: '40%', title: 'Faster Trading Decisions', description: 'Analyze market conditions and execute optimal energy trading strategies in real-time.' },
            { icon: <Shield />, value: '35%', title: 'Reduction in Preventable Outages', description: 'Identify and address potential equipment failures before they impact service.' },
            { icon: <Droplet />, value: '20%', title: 'Increase in Efficiency Program Adoption', description: 'Target the right customers with personalized energy-saving recommendations.' },
        ]
    },
    cta: {
        title: 'Ready to Modernize Your Energy & Utilities Operations?',
        subtitle: 'Let NovaGent be your partner in building a more reliable and efficient energy future. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // ENGINEERING & CONSTRUCTION DATA
  // =================================================================
  {
    slug: 'engineering-construction',
    name: 'Engineering & Construction',
    hero: {
      title: 'Building the Future, Smarter: AI for Engineering & Construction',
      subtitle: "NovaGent empowers engineering and construction firms to optimize project lifecycles, enhance safety, and drive profitability with intelligent AI agents.",
      heroIcon: <HardHat />
    },
    challenges: {
        title: 'Navigating Complexities in Modern Construction',
        items: [
            { icon: <Clock />, title: 'Project Delays & Cost Overruns', points: ["Manages complex, multi-stage schedules", "Optimizes resource allocation to prevent delays", "Proactively identifies and mitigates risks"] },
            { icon: <HardHat />, title: 'Job Site Safety & Compliance', points: ["Ensures adherence to stringent safety standards", "Monitors dynamic and hazardous environments", "Reduces risk and enhances worker safety"] },
            { icon: <Layers />, title: 'Inefficient Resource Management', points: ["Optimizes deployment of labor and equipment", "Manages material logistics across sites", "Requires sophisticated, real-time coordination"] },
            { icon: <FileText />, title: 'Documentation & Reporting Burdens', points: ["Automates extensive paperwork and tracking", "Streamlines compliance reporting", "Frees teams to focus on core construction tasks"] },
        ]
    },
    solutions: {
        title: "NovaGent's AI: Your Blueprint for Success",
        items: [
            { icon: <GanttChartSquare />, title: 'AI-Powered Project Planning', points: ["Automates task sequencing and scheduling", "Predicts potential delays with AI", "Suggests optimal adjustments to keep projects on track"] },
            { icon: <Cpu />, title: 'Intelligent Site Monitoring', points: ["Analyzes drone footage and sensor data", "Tracks progress against BIM models in real-time", "Performs automated quality control checks"] },
            { icon: <Truck />, title: 'Optimized Logistics', points: ["Streamlines procurement and material delivery", "Manages equipment utilization across all sites", "Predicts resource needs to minimize waste"] },
            { icon: <Ruler />, title: 'Automated Quality Assurance', points: ["Compares as-built conditions to design specs", "Identifies defects and deviations early", "Reduces costly rework and ensures high standards"] },
            { icon: <ClipboardCheck />, title: 'Smart Document Management', points: ["Automates organization of project documents", "Ensures compliance with AI-driven audit trails", "Simplifies retrieval of permits and reports"] },
            { icon: <BarChart3 />, title: 'Predictive Equipment Maintenance', points: ["Monitors equipment health with sensor data", "Predicts failures before they happen", "Schedules proactive maintenance to minimize downtime"] },
        ]
    },
    agents: {
        title: 'Your Specialized E&C AI Workforce',
        items: [
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Autonomously builds hyper-targeted lists of potential clients, developers, and project holders.', link: '/solutions/lead-generation-agent' },
            { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Manages the end-to-end process of booking meetings with prospects and subcontractors.', link: '/solutions/appointment-setter-agent' },
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Acts as a central point of contact for project inquiries from clients and stakeholders, providing 24/7 updates.', link: '/solutions/customer-support-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: "Improves your firm's online presence and manages your portfolio to attract high-value projects.", link: '/solutions/seo-reputation-agent' },
            { icon: <Share2 />, title: 'Social Media Manager Agent', description: 'Manages your social media presence, from creating content showcasing project milestones to monitoring industry trends.', link: '/solutions/social-media-manager-agent' },
        ]
    },
    results: {
        title: 'Building a Foundation for Measurable Success',
        items: [
            { icon: <TrendingUp />, title: 'Reduced Project Delays', description: 'Significant decrease in project completion times through AI-optimized scheduling and proactive issue resolution.' },
            { icon: <DollarSign />, title: 'Lower Operational Costs', description: 'Achieve substantial cost savings via efficient resource management, waste reduction, and minimized rework.' },
            { icon: <HardHat />, title: 'Improved Safety Records', description: 'Enhance on-site safety, leading to fewer incidents and a stronger safety culture.' },
            { icon: <Scaling />, title: 'Enhanced Productivity', description: 'Boost overall productivity of field and office teams by automating repetitive tasks and streamlining workflows.' },
            { icon: <ClipboardCheck />, title: 'Streamlined Compliance', description: 'Simplify regulatory adherence and documentation, reducing risks and administrative overhead.' },
            { icon: <Building />, title: 'Higher Quality Construction', description: 'Deliver superior quality projects through AI-driven quality assurance and early defect detection.' },
        ]
    },
    cta: {
        title: 'Ready to Engineer a Smarter Future?',
        subtitle: 'Let NovaGent be your partner in building more efficiently and safely. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // FINANCIAL SERVICES DATA
  // =================================================================
  {
    slug: 'financial-services',
    name: 'Financial Services',
    hero: {
      title: 'Intelligent Automation for Financial Services',
      subtitle: "From algorithmic trading and fraud detection to personalized financial advice, NovaGent is redefining the future of finance with AI-driven precision and efficiency.",
      heroIcon: <TrendingUp />
    },
    challenges: {
        title: 'Navigating Financial Complexity & Risk',
        items: [
            { icon: <ShieldAlert />, title: 'Regulatory Compliance & Reporting', points: ["Ensures adherence to evolving regulations", "Manages complex reporting requirements", "Automates AML, KYC, and MiFID II tasks"] },
            { icon: <Zap />, title: 'Fraud Detection & Cybersecurity', points: ["Combats sophisticated financial fraud", "Provides advanced, real-time monitoring", "Prevents data breaches with AI"] },
            { icon: <BarChart3 />, title: 'Data Overload & Insight Generation', points: ["Analyzes vast market and customer data", "Extracts actionable insights quickly", "Turns data into a competitive advantage"] },
            { icon: <Users />, title: 'Personalized Customer Experiences', points: ["Meets demand for tailored financial advice", "Delivers seamless digital interactions at scale", "Enhances customer product recommendations"] },
        ]
    },
    solutions: {
        title: "NovaGent's AI Solutions for Finance",
        items: [
            { icon: <Bot />, title: 'AI-Powered Loan Origination', points: ["Automates the entire loan application lifecycle", "Utilizes AI for credit scoring and risk assessment", "Reduces processing times and improves accuracy"] },
            { icon: <ShieldAlert />, title: 'Intelligent Compliance Automation', points: ["Continuously monitors transactions for AML/KYC", "Automates due diligence and reporting", "Identifies and flags suspicious activities"] },
            { icon: <BarChart3 />, title: 'Algorithmic Trading & Analysis', points: ["Analyzes vast market data to find opportunities", "Executes trading strategies with precision", "Optimizes investment portfolios in real-time"] },
            { icon: <MessageSquare />, title: 'AI-Enhanced Customer Service', points: ["Provides 24/7 personalized support via chatbots", "Handles inquiries and offers financial guidance", "Escalates complex issues seamlessly to human agents"] },
            { icon: <Lightbulb />, title: 'Predictive Fraud Detection', points: ["Uses ML to analyze transactional patterns", "Proactively identifies potential fraud in real-time", "Flags anomalies to prevent losses"] },
        ]
    },
    agents: {
        title: 'Your AI Team for Financial Services',
        items: [
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Builds targeted lists of prospects, such as high-net-worth individuals or businesses seeking financing.', link: '/solutions/lead-generation-agent' },
            { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Engages leads and books qualified meetings for your financial advisors and loan officers.', link: '/solutions/appointment-setter-agent' },
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Provides instant, 24/7 answers to common banking queries, and escalates complex issues intelligently.', link: '/solutions/customer-support-agent' },
            { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Manages and optimizes ad spend for financial products like mortgages, credit cards, or investment funds.', link: '/solutions/ad-campaign-manager-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: 'Improves your online presence and builds trust through proactive reputation management.', link: '/solutions/seo-reputation-agent' },
        ]
    },
    results: {
        title: 'Achieving Superior Financial Performance with AI',
        items: [
            { icon: <TrendingUp />, title: 'Enhanced Operational Efficiency', description: 'Automate manual processes, reduce overhead, and accelerate service delivery across banking, insurance, and investment operations.' },
            { icon: <CheckCircle />, title: 'Improved Risk Management', description: 'Proactively identify, assess, and mitigate financial, operational, and compliance risks with greater accuracy and speed.' },
            { icon: <Award />, title: 'Superior Customer Experience', description: 'Deliver personalized financial advice, faster service, and intuitive digital interactions that build loyalty and trust.' },
            { icon: <Target />, title: 'Increased Profitability', description: 'Optimize trading strategies, reduce fraud losses, improve loan performance, and identify new revenue opportunities.' },
            { icon: <Briefcase />, title: 'Streamlined Regulatory Compliance', description: 'Reduce the cost and complexity of compliance, improve reporting accuracy, and ensure adherence to financial regulations.' },
        ]
    },
    cta: {
        title: 'Capitalize on the AI Revolution in Finance',
        subtitle: 'Let NovaGent be your partner in navigating the future of the financial sector. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // HEALTHCARE & LIFE SCIENCES DATA - UPDATED
  // =================================================================
  {
    slug: 'healthcare-life-sciences',
    name: 'Healthcare & Life Sciences',
    hero: {
      title: 'AI for a Healthier Tomorrow',
      subtitle: "From enhancing diagnostic accuracy to accelerating drug discovery, NovaGent's AI agents are empowering healthcare and life sciences organizations to improve patient outcomes and revolutionize research.",
      heroIcon: <HeartPulse />
    },
    challenges: {
      title: "Navigating Healthcare's Critical Challenges",
      items: [
        { icon: <FileText />, title: 'Massive Data Management', points: ["Handles vast electronic health records (EHR)", "Integrates diverse data from imaging and genomics", "Ensures data security and privacy compliance (HIPAA)"] },
        { icon: <Clock />, title: 'Drug Discovery Timelines', points: ["Reduces years of research and development", "Identifies promising compounds faster", "Lowers the high cost of bringing drugs to market"] },
        { icon: <Stethoscope />, title: 'Diagnostic Accuracy & Speed', points: ["Aids clinicians in interpreting complex scans", "Reduces human error in diagnoses", "Provides earlier detection of diseases"] },
        { icon: <ShieldAlert />, title: 'Regulatory & Compliance Hurdles', points: ["Navigates complex FDA and global regulations", "Automates documentation for clinical trials", "Ensures adherence to industry standards"] },
      ]
    },
    solutions: {
      title: "NovaGent's Solutions for Healthcare & Life Sciences",
      items: [
        { icon: <BrainCircuit />, title: 'AI-Powered Medical Imaging Analysis', points: ["Analyzes X-rays, MRIs, and CT scans with high accuracy", "Highlights potential anomalies for radiologists", "Accelerates the diagnostic process significantly"] },
        { icon: <FlaskConical />, title: 'Accelerated Drug Discovery & Research', points: ["Predicts molecular interactions to find drug candidates", "Analyzes clinical trial data for insights", "Streamlines the path from lab to market"] },
        { icon: <Activity />, title: 'Predictive Patient Outcome Analytics', points: ["Identifies at-risk patients for proactive intervention", "Personalizes treatment plans based on patient data", "Improves overall patient care and hospital efficiency"] },
        { icon: <ClipboardList />, title: 'Automated Clinical Trial Management', points: ["Streamlines patient recruitment and data collection", "Automates regulatory reporting and compliance checks", "Reduces administrative burden on research teams"] },
        { icon: <Bot />, title: 'Intelligent Patient Support & Triage', points: ["Provides 24/7 answers to patient questions", "Triages symptoms to guide patients to correct care", "Automates appointment scheduling and reminders"] },
      ]
    },
    agents: {
      title: 'Your Specialized AI Healthcare Team',
      items: [
        { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Manages the entire end-to-end patient booking process, from outreach to scheduled appointments.', link: '/solutions/appointment-setter-agent' },
        { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Provides instant, 24/7 support for patient inquiries, freeing up your staff to focus on care delivery.', link: '/solutions/customer-support-agent' },
        { icon: <Phone />, title: 'AI Dialer Agent', description: 'Adds a real-time voice channel for patient outreach, appointment reminders, and follow-up calls.', link: '/solutions/ai-dialer-agent' },
        { icon: <Star />, title: 'SEO + Reputation Agent', description: "Improves your clinic's online visibility and proactively manages patient reviews to build trust.", link: '/solutions/seo-reputation-agent' },
        { icon: <Share2 />, title: 'Social Media Manager Agent', description: 'Manages your social media presence, from creating content for health campaigns to monitoring community feedback.', link: '/solutions/social-media-manager-agent' },
      ]
    },
    results: {
      title: 'Measurable Improvements in Healthcare & Research',
      items: [
        { icon: <Zap />, value: '30%', title: 'Faster Diagnostic Reporting', description: 'Reduce the time from imaging to diagnosis, enabling quicker treatment decisions and better patient outcomes.' },
        { icon: <TrendingUp />, value: '25%', title: 'Increase in Clinical Trial Efficiency', description: 'Accelerate patient recruitment and data analysis, bringing vital treatments to market faster.' },
        { icon: <CheckCircle />, value: '40%', title: 'Improved Diagnostic Accuracy', description: 'Enhance the accuracy of diagnoses by providing AI-powered second opinions on medical imaging and data.' },
        { icon: <Clock />, title: 'Reduced Administrative Costs', description: 'Automate scheduling, billing, and compliance tasks, allowing staff to focus on patient care.' },
        { icon: <HeartPulse />, title: 'Enhanced Patient Outcomes', description: 'Improve health outcomes through personalized treatment plans and proactive risk identification.' },
      ]
    },
    cta: {
      title: 'Ready to Pioneer the Future of Health?',
      subtitle: 'Let NovaGent be your partner in transforming patient care and research. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // MANUFACTURING DATA
  // =================================================================
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    hero: {
      title: 'Revolutionize Your Factory Floor: AI for Smart Manufacturing',
      subtitle: "NovaGent empowers manufacturers to boost efficiency, reduce downtime, and enhance quality control with intelligent automation and predictive insights.",
      heroIcon: <Factory />
    },
    challenges: {
        title: "Overcoming Manufacturing's Toughest Hurdles",
        items: [
            { icon: <Wrench />, title: 'Operational Inefficiencies & Downtime', points: ["Tackles unplanned machine failures", "Reduces production bottlenecks", "Automates manual processes to increase output"] },
            { icon: <ShieldAlert />, title: 'Quality Control & Defect Reduction', points: ["Maintains consistent product quality", "Minimizes defects in high-volume production", "Ensures standards with automated inspection"] },
            { icon: <Network />, title: 'Complex Supply Chain Management', points: ["Navigates volatile supply chains", "Manages inventory with precision", "Ensures timely delivery of materials and goods"] },
            { icon: <Users />, title: 'Skilled Labor Shortages & Safety', points: ["Addresses the manufacturing skills gap", "Enhances worker safety on the factory floor", "Automates tasks to augment human labor"] },
        ]
    },
    solutions: {
        title: "NovaGent's AI-Powered Manufacturing Solutions",
        items: [
            { icon: <Cpu />, title: 'Predictive Maintenance Agent', points: ["Monitors equipment health in real-time", "Predicts failures before they occur", "Schedules maintenance to minimize downtime"] },
            { icon: <ScanSearch />, title: 'Automated Quality Inspection', points: ["Uses computer vision to inspect products", "Identifies defects with superhuman accuracy", "Operates 24/7 without interruption"] },
            { icon: <Waypoints />, title: 'Supply Chain Optimization', points: ["Provides end-to-end supply chain visibility", "Analyzes demand forecasts and supplier data", "Optimizes inventory levels to reduce costs"] },
            { icon: <Factory />, title: 'Production Scheduling & Optimization', points: ["Dynamically adjusts production schedules", "Maximizes throughput based on real-time data", "Balances material, machine, and order priorities"] },
            { icon: <Warehouse />, title: 'Smart Inventory Management', points: ["Automates inventory tracking and forecasting", "Prevents stockouts and overstock situations", "Reduces overall holding costs"] },
            { icon: <HardHat />, title: 'Worker Safety & Compliance', points: ["Monitors factory floor for safety hazards", "Ensures adherence to PPE protocols", "Alerts supervisors to potential incidents"] },
        ]
    },
    agents: {
        title: 'Your Dedicated Manufacturing AI Team',
        items: [
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Autonomously builds lists of B2B prospects, distributors, and potential supply chain partners.', link: '/solutions/lead-generation-agent' },
            { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Engages potential B2B customers and schedules meetings to discuss manufacturing capabilities.', link: '/solutions/appointment-setter-agent' },
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Provides 24/7 support for B2B clients regarding order status, shipping, and product specifications.', link: '/solutions/customer-support-agent' },
            { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Optimizes B2B ad campaigns on platforms like LinkedIn to maximize return on ad spend.', link: '/solutions/ad-campaign-manager-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: 'Improves search rankings for your manufacturing capabilities and manages your industry reputation.', link: '/solutions/seo-reputation-agent' },
        ]
    },
    results: {
        title: 'Tangible Results for Your Manufacturing Business',
        items: [
            { icon: <TrendingUp />, title: 'Increased Overall Equipment Effectiveness (OEE)', description: 'Significantly boost your OEE by minimizing downtime, improving performance, and ensuring quality.' },
            { icon: <Gauge />, title: 'Reduced Unplanned Downtime', description: 'Proactively address maintenance needs and prevent costly interruptions to your production schedule with predictive AI.' },
            { icon: <CheckCircle2 />, title: 'Improved Product Quality & Reduced Defects', description: 'Achieve higher consistency and lower defect rates through AI-powered quality assurance and automated inspection.' },
            { icon: <DollarSign />, title: 'Lowered Operational Costs', description: 'Optimize resource utilization, reduce waste, and streamline processes to decrease overall operational expenses.' },
            { icon: <Truck />, title: 'Enhanced Supply Chain Resilience', description: 'Build a more agile and responsive supply chain that can adapt to market changes and disruptions using AI-driven insights.' },
            { icon: <ShieldPlus />, title: 'Improved Workplace Safety', description: 'Create a safer manufacturing environment by proactively identifying and mitigating risks with AI monitoring.' },
        ]
    },
    cta: {
        title: 'Build Your Smart Factory of the Future, Today.',
        subtitle: 'Let NovaGent be your partner in optimizing your operations. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // MEDIA & ENTERTAINMENT DATA - UPDATED
  // =================================================================
  {
    slug: 'media',
    name: 'Media & Entertainment',
    hero: {
        title: 'Create the Future of Content with AI',
        subtitle: "From hyper-personalized recommendations to automated production workflows, NovaGent empowers media companies to captivate audiences and unlock new revenue streams.",
        heroIcon: <Film />
    },
    challenges: {
        title: "Navigating a Fragmented Media Landscape",
        items: [
            { icon: <Users />, title: 'Audience Fragmentation', points: ["Engages viewers across countless platforms", "Battles for limited audience attention", "Requires a unified content strategy"] },
            { icon: <Clapperboard />, title: 'Content Overload & Discovery', points: ["Helps your content stand out from competition", "Ensures content reaches the right audience", "Solves the 'what to watch' problem"] },
            { icon: <TrendingUp />, title: 'Monetization Pressure', points: ["Maximizes ad revenue and subscription value", "Adapts to a rapidly changing market", "Unlocks new, innovative revenue streams"] },
            { icon: <ShieldCheck />, title: 'Digital Rights & Piracy', points: ["Protects intellectual property online", "Ensures proper content licensing", "Tracks and manages distribution automatically"] },
        ]
    },
    solutions: {
        title: 'Your AI-Powered Content & Audience Engine',
        items: [
            { icon: <Film />, title: 'AI-Assisted Video Production', points: ["Automates rough cuts and highlight generation", "Transcribes audio and tags content with metadata", "Slashes production time and associated costs"] },
            { icon: <Radio />, title: 'Hyper-Personalized Content Curation', points: ["Analyzes user behavior for recommendations", "Delivers highly relevant content to each viewer", "Boosts audience engagement and retention"] },
            { icon: <Newspaper />, title: 'Dynamic Ad Insertion & Optimization', points: ["Places personalized ads in real-time", "Maximizes ad revenue based on viewer data", "Increases relevance for viewers"] },
            { icon: <BarChart2 />, title: 'Real-Time Audience Sentiment Analysis', points: ["Monitors social media and news for reactions", "Gauges response to content, talent, and campaigns", "Enables data-driven creative decisions"] },
            { icon: <Share2 />, title: 'Automated Social Media Management', points: ["Identifies trending topics in your niche", "Curates relevant content for your audience", "Automatically schedules posts to grow presence"] },
            { icon: <ShieldCheck />, title: 'Intelligent Digital Rights Management', points: ["Tracks content usage across the web", "Identifies unauthorized distribution", "Manages complex licensing agreements"] },
        ]
    },
    agents: {
        title: 'Meet Your AI Media Team',
        items: [
            { icon: <Share2 />, title: 'Social Media Manager Agent', description: 'A complete system to manage your social media presence, from content ideation to monitoring and reporting.', link: '/solutions/social-media-manager-agent' },
            { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Intelligently manages and optimizes paid ad campaigns to maximize Return On Ad Spend (ROAS).', link: '/solutions/ad-campaign-manager-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: "Improves your online presence through technical optimization and proactive reputation management.", link: '/solutions/seo-reputation-agent' },
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Manages subscriber inquiries, billing questions, and support requests 24/7.', link: '/solutions/customer-support-agent' },
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Builds hyper-targeted lists of potential advertisers, sponsors, or distribution partners.', link: '/solutions/lead-generation-agent' },
        ]
    },
    results: {
        title: 'Tangible Results for Your Media Business',
        items: [
            { icon: <TrendingUp />, title: 'Increased Audience Engagement', description: 'Boost watch time, click-through rates, and session duration with personalized content.' },
            { icon: <Target />, title: 'Higher Ad Revenue', description: 'Maximize CPMs and fill rates with dynamically inserted, highly targeted advertising.' },
            { icon: <Zap />, title: 'Reduced Production Costs', description: 'Cut down on manual labor and time spent on repetitive tasks in the content creation pipeline.' },
            { icon: <Lightbulb />, title: 'Deeper Audience Insights', description: 'Gain a comprehensive understanding of viewer preferences, behavior, and sentiment.' },
            { icon: <Settings />, title: 'Streamlined Operations', description: 'Automate workflows for content tagging, rights management, and social media distribution.' },
            { icon: <LineChart />, title: 'Improved Subscriber Retention', description: 'Reduce churn by delivering a superior, personalized user experience that builds loyalty.' },
        ]
    },
    cta: {
        title: 'Ready to Redefine Entertainment?',
        subtitle: 'Let NovaGent be your partner in creating the future of content. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // NONPROFIT DATA - UPDATED
  // =================================================================
  {
    slug: 'nonprofit',
    name: 'Nonprofit',
    hero: {
      title: 'Amplify Your Impact with AI-Powered Solutions',
      subtitle: "NovaGent empowers nonprofit organizations to streamline operations, enhance donor engagement, and maximize their mission's reach through intelligent automation.",
      heroIcon: <HeartHandshake />
    },
    challenges: {
        title: 'Navigating the Unique Landscape of Nonprofit Operations',
        items: [
            { icon: <HandCoins />, title: 'Securing Sustainable Funding', points: ["Overcomes intense competition for donations", "Improves donor retention with personalization", "Drives innovative fundraising strategies"] },
            { icon: <Users />, title: 'Maximizing Limited Resources', points: ["Operates with extreme efficiency on tight budgets", "Ensures impactful resource allocation", "Allows small teams to achieve more"] },
            { icon: <BarChart3 />, title: 'Demonstrating Tangible Impact', points: ["Effectively measures and reports on outcomes", "Communicates impact to stakeholders and funders", "Builds trust through data-backed results"] },
            { icon: <Megaphone />, title: 'Effective Volunteer & Community Engagement', points: ["Streamlines recruiting and management", "Fosters strong community connections", "Increases volunteer retention and satisfaction"] },
        ]
    },
    solutions: {
        title: "Intelligent Automation to Elevate Your Nonprofit's Mission",
        items: [
            { icon: <HeartHandshake />, title: 'AI-Powered Donor Relationship Management', points: ["Automates personalized donor communication", "Segments audiences for targeted appeals", "Predicts giving patterns to enhance fundraising"] },
            { icon: <FileText />, title: 'Intelligent Grant Proposal Assistant', points: ["Identifies relevant grant opportunities", "Assists in drafting compelling narratives", "Manages application deadlines efficiently"] },
            { icon: <Presentation />, title: 'Automated Impact Reporting & Analytics', points: ["Collects and analyzes program data", "Generates insightful reports for funders", "Visualizes key impact metrics automatically"] },
            { icon: <CalendarDays />, title: 'Streamlined Volunteer Coordination', points: ["Automates volunteer onboarding and scheduling", "Manages communication and task assignments", "Optimizes your volunteer program's effectiveness"] },
            { icon: <Share2 />, title: 'AI-Enhanced Advocacy Campaigns', points: ["Optimizes social media outreach for your cause", "Identifies key influencers to amplify your message", "Automates content dissemination and scheduling"] },
            { icon: <DatabaseZap />, title: 'Efficient Program Data Management', points: ["Centralizes and analyzes program data", "Identifies trends for better decision-making", "Measures outcomes more effectively"] },
        ]
    },
    agents: {
        title: 'Your Dedicated AI Team for Nonprofit Success',
        items: [
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Builds hyper-targeted lists of potential major donors, corporate sponsors, and grant providers.', link: '/solutions/lead-generation-agent' },
            { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Manages the entire process of booking meetings with potential donors and key stakeholders.', link: '/solutions/appointment-setter-agent' },
            { icon: <Phone />, title: 'AI Dialer Agent', description: 'Adds a powerful voice channel for fundraising campaigns, donor outreach, and volunteer coordination.', link: '/solutions/ai-dialer-agent' },
            { icon: <Share2 />, title: 'Social Media Manager Agent', description: 'A complete system to manage your social media, from creating content to monitoring engagement.', link: '/solutions/social-media-manager-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: "Improves your nonprofit's online visibility and manages your reputation to build community trust.", link: '/solutions/seo-reputation-agent' },
        ]
    },
    results: {
        title: 'Achieving Greater Impact and Sustainability',
        items: [
            { icon: <TrendingUp />, title: 'Increased Fundraising Efficiency', description: 'Boost donation revenue and grant acquisition rates through targeted, AI-driven strategies.' },
            { icon: <Goal />, title: 'Enhanced Program Effectiveness', description: 'Optimize resource allocation and program delivery based on data-driven insights for better outcomes.' },
            { icon: <Users />, title: 'Improved Stakeholder Engagement', description: 'Strengthen relationships with donors, volunteers, and beneficiaries through personalized communication.' },
            { icon: <Settings />, title: 'Streamlined Operational Processes', description: 'Reduce administrative burden and free up staff time to focus on core mission activities.' },
            { icon: <ShieldCheck />, title: 'Greater Transparency & Accountability', description: 'Clearly demonstrate impact and responsible stewardship of resources to build trust and credibility.' },
            { icon: <Sparkles />, title: 'Expanded Mission Reach & Awareness', description: 'Amplify your message and connect with a broader audience to grow your community of support.' },
        ]
    },
    cta: {
        title: 'Ready to Transform Your Nonprofit with AI?',
        subtitle: 'Let NovaGent be your partner in amplifying your impact. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // PROFESSIONAL SERVICES DATA
  // =================================================================
  {
    slug: 'professional-services',
    name: 'Professional Services',
    hero: {
      title: 'AI-Powered Efficiency for Professional Services',
      subtitle: "Automate client onboarding, streamline project management, and deliver exceptional value with NovaGent's AI agents.",
      heroIcon: <Briefcase />
    },
    challenges: {
        title: "Navigating Today's Professional Services Challenges",
        items: [
            { icon: <Users />, title: 'Complex Client Onboarding', points: ["Manages multi-step client intake", "Reduces bottlenecks from document collection", "Allows projects to start faster"] },
            { icon: <Clock />, title: 'Time-Intensive Administrative Tasks', points: ["Automates billable hour tracking", "Reduces time spent on invoicing", "Frees up time for high-value client work"] },
            { icon: <FileText />, title: 'Document Management & Research', points: ["Organizes complex case files automatically", "Conducts research and analysis faster", "Maintains compliance documentation with ease"] },
            { icon: <TrendingUp />, title: 'Scaling Service Delivery', points: ["Handles increased client workload efficiently", "Maintains high service quality while growing", "Improves profitability and scalability"] },
        ]
    },
    solutions: {
        title: 'How NovaGent Transforms Professional Services Operations',
        items: [
            { icon: <MessageSquare />, title: 'Automated Client Intake & Qualification', points: ["Handles initial client inquiries 24/7", "Collects necessary documentation automatically", "Qualifies prospects before they reach your team"] },
            { icon: <Calendar />, title: 'Intelligent Project Management', points: ["Tracks milestones and allocates resources", "Proactively identifies project risks", "Automatically updates clients on progress"] },
            { icon: <FileText />, title: 'AI-Powered Research & Document Analysis', points: ["Accelerates legal and case research", "Extracts key insights from vast document sets", "Reduces research time by up to 70%"] },
            { icon: <DollarSign />, title: 'Automated Billing & Time Tracking', points: ["Eliminates manual time entry errors", "Generates accurate invoices automatically", "Integrates with existing practice software"] },
            { icon: <Shield />, title: 'Compliance & Risk Management', points: ["Monitors deadlines and requirements", "Ensures adherence to industry standards", "Reduces liability and improves client trust"] },
            { icon: <Brain />, title: 'Strategic Business Intelligence', points: ["Analyzes practice performance data", "Identifies most profitable service areas", "Recommends growth opportunities"] },
        ]
    },
    agents: {
        title: 'Meet Your AI Team for Professional Services Excellence',
        items: [
            { icon: <Target />, title: 'Lead Generation Agent', description: 'Identifies and nurtures potential clients through targeted outreach and referral network management.', link: '/solutions/lead-generation-agent' },
            { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Manages client consultations, court dates, and internal meetings without human intervention.', link: '/solutions/appointment-setter-agent' },
            { icon: <MessageSquare />, title: 'Customer Support Agent', description: 'Handles client inquiries, case status updates, and routine communications 24/7.', link: '/solutions/customer-support-agent' },
            { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Creates and optimizes marketing campaigns for specific practice areas and client acquisition.', link: '/solutions/ad-campaign-manager-agent' },
            { icon: <Star />, title: 'SEO + Reputation Agent', description: "Manages your firm's online presence, client reviews, and search visibility to attract quality clients.", link: '/solutions/seo-reputation-agent' },
        ]
    },
    results: {
        title: 'Tangible Results for Your Professional Services Firm',
        items: [
            { icon: <Zap />, value: '50%', title: 'Faster Client Onboarding', description: 'Streamline intake processes and reduce time-to-engagement, allowing you to start billable work sooner.' },
            { icon: <Clock />, value: '30%', title: 'Increase in Billable Hours', description: "Eliminate administrative tasks and focus your team's expertise on high-value client work." },
            { icon: <CheckCircle />, value: '95%', title: 'Reduction in Billing Errors', description: 'Automated time tracking and invoicing ensures accurate billing and faster payment collection.' },
            { icon: <TrendingUp />, value: '40%', title: 'Improvement in Client Satisfaction', description: 'Consistent communication and proactive project management enhance the client experience.' },
            { icon: <Shield />, value: '100%', title: 'Compliance Monitoring', description: 'Never miss a deadline or regulatory requirement with automated compliance tracking.' },
            { icon: <Award />, value: '25%', title: 'Growth in Practice Revenue', description: 'Increased efficiency and client capacity drives sustainable business growth and profitability.' },
        ]
    },
    cta: {
        title: 'Ready to Transform Your Professional Services Practice?',
        subtitle: 'Let NovaGent be your partner in delivering exceptional value. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
  // =================================================================
  // REAL ESTATE DATA - UPDATED
  // =================================================================
  {
    slug: 'real-estate',
    name: 'Real Estate',
    hero: {
      title: 'AI-Powered Solutions for the Modern Market',
      subtitle: "From lead generation to closing, NovaGent's AI agents empower real estate professionals to automate tasks, nurture leads, and close more deals, faster.",
      heroIcon: <Home />
    },
    challenges: {
      title: 'Navigating the Competitive Real Estate Landscape',
      items: [
        { icon: <Target />, title: 'Consistent Lead Generation', points: ["Struggles with a fluctuating flow of new leads", "Competition for online visibility is high", "Requires nurturing leads across long sales cycles"] },
        { icon: <Clock />, title: 'Time-Consuming Admin Work', points: ["Spends hours on scheduling and paperwork", "Manual data entry leads to errors", "Reduces time available for client-facing activities"] },
        { icon: <Users />, title: '24/7 Client Expectations', points: ["Clients expect instant responses to inquiries", "Managing communications across multiple platforms", "Losing leads who don't get immediate answers"] },
        { icon: <DollarSign />, title: 'Accurate Property Valuation', points: ["Market conditions change rapidly", "Requires analysis of vast amounts of data", "Setting the right price is critical for sales"] },
      ]
    },
    solutions: {
      title: "How NovaGent Transforms Real Estate Operations",
      items: [
        { icon: <Bot />, title: 'AI-Powered Lead Nurturing', points: ["Engages with website leads instantly, 24/7", "Answers common property questions automatically", "Schedules viewings and qualifies buyers"] },
        { icon: <CalendarDays />, title: 'Automated Scheduling & Follow-Up', points: ["Manages viewing schedules and appointments", "Sends automated reminders to clients", "Initiates follow-up sequences post-viewing"] },
        { icon: <Search />, title: 'Intelligent Property Matching', points: ["Analyzes client preferences to suggest listings", "Sends personalized property alerts", "Keeps clients engaged with relevant options"] },
        { icon: <BarChart3 />, title: 'Market Analysis & Valuation', points: ["Analyzes comparable sales and market trends", "Provides data-driven pricing recommendations", "Generates comprehensive market reports"] },
        { icon: <ClipboardCheck />, title: 'Streamlined Transaction Coordination', points: ["Automates document collection and checklists", "Tracks transaction milestones and deadlines", "Keeps all parties updated automatically"] },
      ]
    },
    agents: {
      title: 'Your AI Team for Real Estate Success',
      items: [
        { icon: <Target />, title: 'Lead Generation Agent', description: 'Captures and qualifies leads from your website, social media, and real estate portals 24/7.', link: '/solutions/lead-generation-agent' },
        { icon: <Calendar />, title: 'Appointment Setter Agent', description: 'Schedules property viewings, client meetings, and consultations, syncing with your calendar.', link: '/solutions/appointment-setter-agent' },
        { icon: <MessageSquare />, title: 'Client Support Agent', description: 'Provides instant answers to common questions about properties, processes, and availability.', link: '/solutions/customer-support-agent' },
        { icon: <BarChart />, title: 'Ad Campaign Manager Agent', description: 'Creates and optimizes targeted ad campaigns for your listings on social media and search engines.', link: '/solutions/ad-campaign-manager-agent' },
        { icon: <Star />, title: 'SEO + Reputation Agent', description: "Manages your online presence, client testimonials, and local search visibility to build trust.", link: '/solutions/seo-reputation-agent' },
      ]
    },
    results: {
      title: 'Tangible Results for Your Real Estate Business',
      items: [
        { icon: <Zap />, value: '50%', title: 'Faster Lead Response Time', description: 'Engage every lead within seconds, dramatically increasing your conversion rate from inquiry to client.' },
        { icon: <Clock />, value: '15+', title: 'Hours Saved Per Week', description: 'Automate administrative tasks like scheduling and data entry, freeing you to focus on closing deals.' },
        { icon: <TrendingUp />, value: '30%', title: 'Increase in Client Appointments', description: 'Let your AI agent fill your calendar with qualified buyers and sellers without you lifting a finger.' },
        { icon: <Users />, title: 'Improved Client Satisfaction', description: 'Provide a seamless, responsive experience for your clients from first contact to final closing.' },
        { icon: <CheckCircle />, title: 'Reduced Time-on-Market', description: 'Price properties more accurately and market them more effectively to achieve faster sales.' },
      ]
    },
    cta: {
      title: 'Ready to Close More Deals with AI?',
      subtitle: 'Let NovaGent be your partner in revolutionizing your real estate business. Schedule a personalized consultation to see our AI agents in action.'
    }
  },
];

// Helper function to find data by slug
export const getIndustryDataBySlug = (slug: string): IndustryData | undefined => {
  return industries.find(industry => industry.slug === slug);
};