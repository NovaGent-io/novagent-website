import { notFound } from 'next/navigation';
import { getIndustryDataBySlug, industries } from '@/lib/industry-data';
// import AnimatedBackground from '@/components/animated-background';  // COMMENTED OUT
import MainNavigation from '@/components/main-navigation';
import { 
  IndustryHero, 
  ChallengesSection,
  SolutionsSection,
  AgentsSection,
  ResultsSection,
  FinalCTA
} from '@/components/industry/industry-sections';

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
          <SolutionsSection industry={industryData} />
          <AgentsSection industry={industryData} />
          <ResultsSection industry={industryData} />
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