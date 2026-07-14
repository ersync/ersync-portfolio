import { ref, computed } from 'vue'
import type { PhaseId, PhaseSummary, PhaseDetails } from '@/types/journey'
import WindowIcon from '@heroicons/vue/24/outline/WindowIcon.js'
import CodeBracketIcon from '@heroicons/vue/24/outline/CodeBracketIcon.js'
import CommandLineIcon from '@heroicons/vue/24/outline/CommandLineIcon.js'
import CogIcon from '@heroicons/vue/24/outline/CogIcon.js'
import BeakerIcon from '@heroicons/vue/24/outline/BeakerIcon.js'
import RocketLaunchIcon from '@heroicons/vue/24/outline/RocketLaunchIcon.js'

const selectedPhase = ref<PhaseId>('frontend')
export type JourneyStatus = 'Completed' | 'In Progress' | 'Not Started'

const phasesSummaries = ref<PhaseSummary[]>([
  {
    id: 'basics',
    label: 'Web Basics',
    icon: WindowIcon,
    progress: 100,
    color: '#22d3ee'
  },
  {
    id: 'frontend',
    label: 'Frontend Mastery',
    icon: CodeBracketIcon,
    progress: 45,
    color: '#a78bfa'
  },
  {
    id: 'backend',
    label: 'Backend Mastery',
    icon: CommandLineIcon,
    progress: 60,
    color: '#f59e0b'
  }
])

const phasesContent = ref<Record<PhaseId, PhaseDetails>>({
  basics: {
    milestones: [
      {
        title: 'HTML & CSS',
        status: 'Completed',
        description: 'Modern semantic HTML5 and CSS3 fundamentals including Flexbox and Grid',
        technologies: ['HTML5', 'CSS3', 'Flexbox/Grid']
      },
      {
        title: 'JavaScript Core',
        status: 'Completed',
        description: 'Core JS concepts including ES6+, DOM manipulation, and async programming',
        technologies: ['JavaScript', 'ES6+', 'Async/Await']
      },
      {
        title: 'Build Tools',
        status: 'Completed',
        description: 'Modern development workflow with npm, Git, and build tools',
        technologies: ['Vite', 'Webpack', 'npm']
      },
      {
        title: 'Web APIs',
        status: 'Completed',
        description: 'Browser APIs, local storage, and modern web capabilities',
        technologies: ['REST', 'LocalStorage', 'Web APIs']
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
    milestones: [
      {
        title: 'Tailwind CSS',
        status: 'Completed',
        description: 'Utility-first CSS framework for rapid UI development',
        technologies: ['Tailwind', 'PostCSS', 'Responsive Design']
      },
      {
        title: 'Vue.js',
        status: 'In Progress',
        description: 'Component architecture, state management, and Vue ecosystem',
        technologies: ['Vue 3', 'Pinia', 'Vue Router']
      },
      {
        title: 'React',
        status: 'In Progress',
        description: 'React fundamentals, hooks, and state management patterns',
        technologies: ['React', 'Redux', 'Hooks']
      },
      {
        title: 'Advanced TypeScript',
        status: 'Not Started',
        description: 'Advanced types, generics, and design patterns',
        technologies: ['TypeScript', 'Design Patterns', 'Type Systems']
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
    milestones: [
      {
        title: 'PostgreSQL',
        status: 'Completed',
        description: 'Advanced database design and SQL optimization',
        technologies: ['PostgreSQL', 'SQL', 'Database Design']
      },
      {
        title: 'Ruby on Rails MVC',
        status: 'Completed',
        description: 'Rails architecture, ActiveRecord, and testing',
        technologies: ['Ruby', 'Rails', 'RSpec']
      },
      {
        title: 'API Development',
        status: 'In Progress',
        description: 'RESTful APIs, authentication, and GraphQL',
        technologies: ['REST', 'GraphQL', 'JWT']
      },
      {
        title: 'Advanced Backend',
        status: 'Not Started',
        description: 'Caching, background jobs, and performance optimization',
        technologies: ['Redis', 'Sidekiq', 'Performance']
      }
    ],
    tools: [
      { name: 'Ruby', icon: RocketLaunchIcon },
      { name: 'PostgreSQL', icon: BeakerIcon },
      { name: 'Postman', icon: CogIcon },
      { name: 'Docker', icon: CodeBracketIcon }
    ]
  }
})

export function usePhaseStore() {
  const currentPhase = computed(() =>
    phasesSummaries.value.find((phase) => phase.id === selectedPhase.value)
  )

  const currentPhaseColor = computed(() => currentPhase.value?.color)

  const currentPhaseContent = computed(() =>
    selectedPhase.value ? phasesContent.value[selectedPhase.value] : null
  )

  const selectPhase = (phaseId: PhaseId) => {
    selectedPhase.value = phaseId
  }

  const getMilestoneStatusClass = (status: JourneyStatus): string => {
    switch (status) {
      case 'Completed':
        return 'bg-gray-700/60 text-green-300'
      case 'In Progress':
        return 'bg-gray-700/60 text-yellow-300'
      case 'Not Started':
      default:
        return 'bg-gray-700/60 text-gray-300'
    }
  }

  return {
    selectedPhase,
    phasesSummaries,

    currentPhase,
    currentPhaseColor,
    currentPhaseContent,

    selectPhase,
    getMilestoneStatusClass
  }
}
