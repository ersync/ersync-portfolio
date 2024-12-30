import type { Component } from 'vue'

export type PhaseId = 'basics' | 'frontend' | 'backend'
export type MilestoneStatus = 'Not Started' | 'In Progress' | 'Completed'

export interface PhaseSummary {
  id: PhaseId
  label: string
  icon: Component
  period: string
  progress: number
  color: string
}

export interface PhaseDetails {
  milestones: Milestone[]
  tools: Tool[]
}

export interface Milestone {
  title: string
  status: MilestoneStatus
  description: string
  technologies: string[]
  timeframe: string
}

export interface Tool {
  name: string
  icon: Component
}
