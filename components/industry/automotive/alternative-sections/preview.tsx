"use client";

import React, { useState } from 'react';
import { Dealership3DView } from './option1-dealership-3d';
import { AICommandCenter } from './option2-command-center';
import { CustomerJourneyFlow } from './option3-customer-journey';
import { LiveDataStream } from './option4-live-stream';
import { AIBrainNetwork } from './option5-ai-brain';
import { DigitalEmployee } from './option6-digital-employee';
import { AIThinkingProcess } from './option7-thinking-process';

export function AlternativeSectionsPreview() {
  const [selectedOption, setSelectedOption] = useState(5);

  const options = [
    { id: 1, name: '3D Dealership View', component: Dealership3DView },
    { id: 2, name: 'AI Command Center', component: AICommandCenter },
    { id: 3, name: 'Customer Journey Flow', component: CustomerJourneyFlow },
    { id: 4, name: 'Live Data Stream', component: LiveDataStream },
    { id: 5, name: 'AI Brain Network', component: AIBrainNetwork },
    { id: 6, name: 'Digital Employee Profile', component: DigitalEmployee },
    { id: 7, name: 'AI Thinking Process', component: AIThinkingProcess }
  ];

  const SelectedComponent = options.find(opt => opt.id === selectedOption)?.component || AIBrainNetwork;

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Option Selector */}
      <div className="sticky top-0 z-50 bg-slate-800 border-b border-slate-700 p-4">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold text-white mb-4">Preview Alternative Sections - AI Agent in Action</h1>
          <div className="flex flex-wrap gap-2">
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedOption === option.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-slate-400">
            <p>Options 5-7 are new concepts that align with NovaGent's "Managed AI" model:</p>
            <ul className="mt-2 space-y-1">
              <li>? <strong>AI Brain Network:</strong> Shows how multiple AI skills work together autonomously</li>
              <li>? <strong>Digital Employee:</strong> Presents the AI as a tireless team member with a work schedule</li>
              <li>? <strong>AI Thinking Process:</strong> Reveals the decision-making logic behind AI actions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Selected Component */}
      <SelectedComponent />
    </div>
  );
}
