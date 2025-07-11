import { 
  CostCounterSection,
  SplitScreenComparison,
  LostCustomerTimeline,
  ProblemCardsGrid
} from '@/components/industry/challenges-options';

export default function ChallengesPreview() {
  return (
    <div className="min-h-screen bg-black">
      {/* Option 1: Real-Time Cost Counter */}
      <div className="border-b-4 border-purple-500">
        <div className="bg-purple-900/20 p-4">
          <h2 className="text-2xl font-bold text-white text-center">Option 1: Real-Time Cost Counter</h2>
          <p className="text-center text-gray-300">Shows money being lost in real-time to create urgency</p>
        </div>
        <CostCounterSection />
      </div>

      {/* Option 2: Before/After Split Screen */}
      <div className="border-b-4 border-purple-500">
        <div className="bg-purple-900/20 p-4">
          <h2 className="text-2xl font-bold text-white text-center">Option 2: Before/After Split Screen</h2>
          <p className="text-center text-gray-300">Visual comparison of dealership with vs without AI</p>
        </div>
        <SplitScreenComparison />
      </div>

      {/* Option 3: Interactive Timeline */}
      <div className="border-b-4 border-purple-500">
        <div className="bg-purple-900/20 p-4">
          <h2 className="text-2xl font-bold text-white text-center">Option 3: Lost Customer Timeline</h2>
          <p className="text-center text-gray-300">Story-driven visualization showing how customers are lost</p>
        </div>
        <LostCustomerTimeline />
      </div>

      {/* Option 4: Problem Cards Grid */}
      <div className="border-b-4 border-purple-500">
        <div className="bg-purple-900/20 p-4">
          <h2 className="text-2xl font-bold text-white text-center">Option 4: Problem Cards Grid</h2>
          <p className="text-center text-gray-300">Modern card layout with severity indicators</p>
        </div>
        <ProblemCardsGrid />
      </div>
    </div>
  );
}
