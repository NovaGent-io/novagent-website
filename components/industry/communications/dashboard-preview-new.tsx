"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Sparkles, Zap, MessageSquare, Calendar, Users, Star, TrendingUp, FileText, Phone, Mic, PenTool, BarChart, Target, GanttChartSquare, AlertCircle, Share2, Mail } from 'lucide-react';

export function DashboardPreview() {
  const [activeSkills, setActiveSkills] = useState<string[]>([]);
  const [pulseOrigin, setPulseOrigin] = useState({ x: 50, y: 50 });
  const [currentScenario, setCurrentScenario] = useState(0);
  const [sequenceStep, setSequenceStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showConnections, setShowConnections] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const skills = [
    { id: 'media', name: 'Media Outreach', icon: Mic, position: { x: 20, y: 20 } },
    { id: 'brand', name: 'Brand Monitor', icon: AlertCircle, position: { x: 80, y: 20 } },
    { id: 'content', name: 'Content Creation', icon: PenTool, position: { x: 20, y: 80 } },
    { id: 'reputation', name: 'SEO & Reputation', icon: Star, position: { x: 80, y: 80 } },
    { id: 'crisis', name: 'Crisis Management', icon: Users, position: { x: 15, y: 50 } },
    { id: 'analytics', name: 'Analytics & Reporting', icon: BarChart, position: { x: 85, y: 50 } },
    { id: 'project', name: 'Project Management', icon: GanttChartSquare, position: { x: 50, y: 15 } },
    { id: 'outreach', name: 'Lead Generation', icon: Target, position: { x: 50, y: 85 } }
  ];

  const scenarios = [
    {
      trigger: "Crisis alert detected",
      sequence: ['brand', 'crisis', 'content', 'media'],
      story: "At 2:47 AM, negative press coverage surfaces. AI instantly analyzes sentiment, drafts response strategies, and alerts key stakeholders."
    },
    {
      trigger: "Major tech publication announces industry report",
      sequence: ['brand', 'outreach', 'content', 'analytics'],
      story: "Your competitor is mentioned but you're not. AI crafts expert commentary, identifies reporter contact, and sends personalized pitch within