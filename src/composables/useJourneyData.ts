import { ref, computed, Component } from 'vue'
import {
  BeakerIcon,
  CodeBracketIcon,
  CogIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  WindowIcon
} from '@heroicons/vue/24/outline'

interface Technology {
  name: string
  icon: Component
}

interface JourneyItem {
  title: string
  status: 'Completed' | 'In Progress' | 'Not Started'
  description: string
  technologies: string[]
  timeframe: string
}

export interface PhaseContent {
  items: JourneyItem[]
  tools: Technology[]
}

interface JourneyPoint {
  id: string
  label: string
  icon: Component
  period: string
  progress: number
  color: string
}

export const useJourneyData = () => {
  const selectedPhase = ref('')

  const journeyPoints: JourneyPoint[] = [
    {
      id: 'basics',
      label: 'Web Basics',
      icon: WindowIcon,
      period: '2022',
      progress: 100,
      color: '#00DEB6'
    },
    {
      id: 'frontend',
      label: 'Frontend Mastery',
      icon: CodeBracketIcon,
      period: '2023',
      progress: 45,
      color: '#6366F1'
    },
    {
      id: 'backend',
      label: 'Backend Mastery',
      icon: CommandLineIcon,
      period: '2024',
      progress: 60,
      color: '#F43F5E'
    }
  ]

  const phaseContent: Record<string, PhaseContent> = {
    basics: {
      items: [
        {
          title: 'HTML & CSS',
          status: 'Completed',
          description: 'Modern semantic HTML5 and CSS3 fundamentals including Flexbox and Grid',
          technologies: ['HTML5', 'CSS3', 'Flexbox/Grid'],
          timeframe: '3 months'
        },
        {
          title: 'JavaScript Core',
          status: 'Completed',
          description: 'Core JS concepts including ES6+, DOM manipulation, and async programming',
          technologies: ['JavaScript', 'ES6+', 'Async/Await'],
          timeframe: '3 months'
        },
        {
          title: 'Build Tools',
          status: 'Completed',
          description: 'Modern development workflow with npm, Git, and build tools',
          technologies: ['Vite', 'Webpack', 'npm'],
          timeframe: '2 months'
        },
        {
          title: 'Web APIs',
          status: 'Completed',
          description: 'Browser APIs, local storage, and modern web capabilities',
          technologies: ['REST', 'LocalStorage', 'Web APIs'],
          timeframe: '2 months'
        }
      ],
      tools: [
        { name: 'VS Code', icon: CogIcon },
        { name: 'Chrome DevTools', icon: BeakerIcon },
        { name: 'Git', icon: CodeBracketIcon },
        { name: 'npm', icon: RocketLaunchIcon }
      ]
    },
    frontend: {
      items: [
        {
          title: 'Tailwind CSS',
          status: 'Completed',
          description: 'Utility-first CSS framework for rapid UI development',
          technologies: ['Tailwind', 'PostCSS', 'Responsive Design'],
          timeframe: '2 months'
        },
        {
          title: 'Vue.js',
          status: 'In Progress',
          description: 'Component architecture, state management, and Vue ecosystem',
          technologies: ['Vue 3', 'Pinia', 'Vue Router'],
          timeframe: '4 months'
        },
        {
          title: 'React',
          status: 'Not Started',
          description: 'React fundamentals, hooks, and state management patterns',
          technologies: ['React', 'Redux', 'Hooks'],
          timeframe: '4 months'
        },
        {
          title: 'Advanced TypeScript',
          status: 'Not Started',
          description: 'Advanced types, generics, and design patterns',
          technologies: ['TypeScript', 'Design Patterns', 'Type Systems'],
          timeframe: '2 months'
        }
      ],
      tools: [
        { name: 'Vite', icon: RocketLaunchIcon },
        { name: 'Webpack', icon: CogIcon },
        { name: 'Vitest', icon: BeakerIcon },
        { name: 'Vitest', icon: CodeBracketIcon }
      ]
    },
    backend: {
      items: [
        {
          title: 'PostgreSQL',
          status: 'Completed',
          description: 'Advanced database design and SQL optimization',
          technologies: ['PostgreSQL', 'SQL', 'Database Design'],
          timeframe: '2 months'
        },
        {
          title: 'Ruby on Rails MVC',
          status: 'Completed',
          description: 'Rails architecture, ActiveRecord, and testing',
          technologies: ['Ruby', 'Rails', 'RSpec'],
          timeframe: '4 months'
        },
        {
          title: 'API Development',
          status: 'In Progress',
          description: 'RESTful APIs, authentication, and GraphQL',
          technologies: ['REST', 'GraphQL', 'JWT'],
          timeframe: '3 months'
        },
        {
          title: 'Advanced Backend',
          status: 'Not Started',
          description: 'Caching, background jobs, and performance optimization',
          technologies: ['Redis', 'Sidekiq', 'Performance'],
          timeframe: '3 months'
        }
      ],
      tools: [
        { name: 'Ruby', icon: RocketLaunchIcon },
        { name: 'PostgreSQL', icon: BeakerIcon },
        { name: 'Postman', icon: CogIcon },
        { name: 'Docker', icon: CodeBracketIcon }
      ]
    }
  }

  const selectedPhaseContent = computed(() =>
    selectedPhase.value ? phaseContent[selectedPhase.value] : null
  )

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-700'
      case 'Not Started':
        return 'bg-gray-100 text-gray-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return {
    selectedPhase,
    journeyPoints,
    phaseContent,
    selectedPhaseContent,
    getStatusClass
  }
}
