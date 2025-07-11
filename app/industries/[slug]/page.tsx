import { notFound } from 'next/navigation';
import { getIndustryDataBySlug, industries } from '@/lib/industry-data';
// import AnimatedBackground from '@/components/animated-background';  // COMMENTED OUT
import MainNavigation from '@/components/main-navigation';
import { 
  IndustryHero, 
  ChallengesSection,
  SolutionsSection,
  ProblemCardsGrid,
  AgentsSection,
  ResultsSection,
  FinalCTA
} from '@/components/industry/industry-sections';
import { DashboardPreview, AgentConversation, SkillsTimeline, ResultsCarousel } from '@/components/industry/automotive';
import { 
  DashboardPreview as CommunicationsDashboardPreview, 
  AgentConversation as CommunicationsAgentConversation, 
  SkillsTimeline as CommunicationsSkillsTimeline, 
  ResultsCarousel as CommunicationsResultsCarousel 
} from '@/components/industry/communications';
import { 
  DashboardPreview as RealEstateDashboardPreview, 
  AgentConversation as RealEstateAgentConversation, 
  SkillsTimeline as RealEstateSkillsTimeline, 
  ResultsCarousel as RealEstateResultsCarousel 
} from '@/components/industry/real-estate';
import { 
  DashboardPreview as EducationDashboardPreview, 
  AgentConversation as EducationAgentConversation, 
  SkillsTimeline as EducationSkillsTimeline, 
  ResultsCarousel as EducationResultsCarousel 
} from '@/components/industry/education';
import { 
  DashboardPreview as EnergyUtilitiesDashboardPreview, 
  AgentConversation as EnergyUtilitiesAgentConversation, 
  SkillsTimeline as EnergyUtilitiesSkillsTimeline, 
  ResultsCarousel as EnergyUtilitiesResultsCarousel 
} from '@/components/industry/energy-utilities';
import { 
  DashboardPreview as EngineeringConstructionDashboardPreview, 
  AgentConversation as EngineeringConstructionAgentConversation, 
  SkillsTimeline as EngineeringConstructionSkillsTimeline, 
  ResultsCarousel as EngineeringConstructionResultsCarousel 
} from '@/components/industry/engineering-construction';
import { 
  DashboardPreview as FinancialDashboardPreview, 
  AgentConversation as FinancialAgentConversation, 
  SkillsTimeline as FinancialSkillsTimeline, 
  ResultsCarousel as FinancialResultsCarousel 
} from '@/components/industry/financial';
import { 
  DashboardPreview as HealthcareDashboardPreview, 
  AgentConversation as HealthcareAgentConversation, 
  SkillsTimeline as HealthcareSkillsTimeline, 
  ResultsCarousel as HealthcareResultsCarousel 
} from '@/components/industry/healthcare-life-sciences';
import { 
  DashboardPreview as ManufacturingDashboardPreview, 
  AgentConversation as ManufacturingAgentConversation, 
  SkillsTimeline as ManufacturingSkillsTimeline, 
  ResultsCarousel as ManufacturingResultsCarousel 
} from '@/components/industry/manufacturing';
import { 
  DashboardPreview as MediaDashboardPreview, 
  AgentConversation as MediaAgentConversation, 
  SkillsTimeline as MediaSkillsTimeline, 
  ResultsCarousel as MediaResultsCarousel 
} from '@/components/industry/media';
import { 
  DashboardPreview as NonprofitDashboardPreview, 
  AgentConversation as NonprofitAgentConversation, 
  SkillsTimeline as NonprofitSkillsTimeline, 
  ResultsCarousel as NonprofitResultsCarousel 
} from '@/components/industry/nonprofit';
import { 
  DashboardPreview as ProfessionalServicesDashboardPreview, 
  AgentConversation as ProfessionalServicesAgentConversation, 
  SkillsTimeline as ProfessionalServicesSkillsTimeline, 
  ResultsCarousel as ProfessionalServicesResultsCarousel 
} from '@/components/industry/professional-services';

interface IndustryPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industryData = getIndustryDataBySlug(slug);

  if (!industryData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* <AnimatedBackground /> */}  {/* COMMENTED OUT */}
      <div className="relative z-10">
        <MainNavigation />
        <main>
          <IndustryHero industry={industryData} />
          <ChallengesSection industry={industryData} />
          
          {/* Custom sections for Automotive, Communications, and Real Estate */}
          {slug === 'automotive' ? (
            <>
              <DashboardPreview />
              <AgentConversation />
              <SkillsTimeline />
              <ResultsCarousel />
            </>
          ) : slug === 'communications' ? (
            <>
              <CommunicationsDashboardPreview />
              <CommunicationsAgentConversation />
              <CommunicationsSkillsTimeline />
              <CommunicationsResultsCarousel />
            </>
          ) : slug === 'real-estate' ? (
            <>
              <RealEstateDashboardPreview />
              <RealEstateAgentConversation />
              <RealEstateSkillsTimeline />
              <RealEstateResultsCarousel />
            </>
          ) : slug === 'education' ? (
            <>
              <EducationDashboardPreview />
              <EducationAgentConversation />
              <EducationSkillsTimeline />
              <EducationResultsCarousel />
            </>
          ) : slug === 'energy-utilities' ? (
            <>
              <EnergyUtilitiesDashboardPreview />
              <EnergyUtilitiesAgentConversation />
              <EnergyUtilitiesSkillsTimeline />
              <EnergyUtilitiesResultsCarousel />
            </>
          ) : slug === 'engineering-construction' ? (
            <>
              <EngineeringConstructionDashboardPreview />
              <EngineeringConstructionAgentConversation />
              <EngineeringConstructionSkillsTimeline />
              <EngineeringConstructionResultsCarousel />
            </>
          ) : slug === 'financial-services' ? (
            <>
              <FinancialDashboardPreview />
              <FinancialAgentConversation />
              <FinancialSkillsTimeline />
              <FinancialResultsCarousel />
            </>
          ) : slug === 'healthcare-life-sciences' ? (
            <>
              <HealthcareDashboardPreview />
              <HealthcareAgentConversation />
              <HealthcareSkillsTimeline />
              <HealthcareResultsCarousel />
            </>
          ) : slug === 'manufacturing' ? (
            <>
              <ManufacturingDashboardPreview />
              <ManufacturingAgentConversation />
              <ManufacturingSkillsTimeline />
              <ManufacturingResultsCarousel />
            </>
          ) : slug === 'media' ? (
            <>
              <MediaDashboardPreview />
              <MediaAgentConversation />
              <MediaSkillsTimeline />
              <MediaResultsCarousel />
            </>
          ) : slug === 'nonprofit' ? (
            <>
              <NonprofitDashboardPreview />
              <NonprofitAgentConversation />
              <NonprofitSkillsTimeline />
              <NonprofitResultsCarousel />
            </>
          ) : slug === 'professional-services' ? (
            <>
              <ProfessionalServicesDashboardPreview />
              <ProfessionalServicesAgentConversation />
              <ProfessionalServicesSkillsTimeline />
              <ProfessionalServicesResultsCarousel />
            </>
          ) : (
            <>
              <SolutionsSection industry={industryData} />
              <ProblemCardsGrid />
              <AgentsSection industry={industryData} />
              <ResultsSection industry={industryData} />
            </>
          )}
          <FinalCTA industry={industryData} />
        </main>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industryData = getIndustryDataBySlug(slug);
  if (!industryData) {
    return { title: 'Industry Not Found' };
  }
  return {
    title: `AI for the ${industryData.name} Industry | NovaGent`,
    description: `Discover how NovaGent's autonomous AI agents are transforming the ${industryData.name} sector.`,
  };
}