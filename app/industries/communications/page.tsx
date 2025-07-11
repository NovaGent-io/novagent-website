import { Metadata } from 'next';
import { HeroSection } from './sections/hero-section';
import { ChallengesSection } from './sections/challenges-section';
import { AgentDashboard } from './sections/agent-dashboard';
import { AgentConversation } from './sections/agent-conversation';
import { CustomerJourney } from './sections/customer-journey';
import { ResultsSection } from './sections/results-section';
import { CTASection } from './sections/cta-section';

export const metadata: Metadata = {
  title: 'AI for Communications & PR | NovaGent',
  description: 'Amplify your message and automate your brand with NovaGent\'s AI-powered communications platform. 24/7 media monitoring, automated content creation, and real-time brand intelligence.',
};

export default function CommunicationsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <HeroSection />
      <ChallengesSection />
      <AgentDashboard />
      <AgentConversation />
      <CustomerJourney />
      <ResultsSection />
      <CTASection />
    </main>
  );
}
