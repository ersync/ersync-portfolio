import skeletonLoader from '@/assets/images/projects/skeleton-loader.webp'
import cinemad from '@/assets/images/projects/cinemad.webp'
import satryar from '@/assets/images/projects/satryar.webp'
import portfolio from '@/assets/images/projects/portfolio.webp'
import persogenApi from '@/assets/images/projects/persogen-api.webp'
import persianCoffeeshop from '@/assets/images/projects/persian-coffeeshop.webp'

import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cinemad',
    description:
      'A full-stack film discovery product with a deep movie catalogue and a personalized browsing experience.',
    technologies: ['Vue.js', 'Ruby on Rails', 'PostgreSQL', 'Vite'],
    demoLink: 'https://cinemad.emadrahimi.dev',
    githubLink: 'https://github.com/ersync/cinemad',
    image: cinemad,
    category: ['backend', 'frontend']
  },
  {
    id: 2,
    title: 'SatrYar',
    description:
      'A Persian-first document studio that turns raw text and Markdown into polished, paginated Word and PDF files—all locally in the browser.',
    technologies: ['Svelte 5', 'TypeScript', 'SvelteKit', 'Vite'],
    demoLink: 'https://satryar.ir',
    image: satryar,
    category: ['frontend']
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description:
      'A fast, responsive portfolio built as an evolving home for my work and experiments.',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    demoLink: 'https://emadrahimi.dev',
    githubLink: 'https://github.com/ersync',
    image: portfolio,
    category: ['frontend']
  },
  {
    id: 4,
    title: 'Skeleton Loader Gem',
    description:
      'A Ruby gem that creates skeleton loading screens from backend code, without a JavaScript dependency.',
    technologies: ['Ruby', 'Ruby on Rails', 'CSS', 'Javascript'],
    demoLink: 'https://rubygems.org/gems/skeleton-loader',
    githubLink: 'https://github.com/ersync/skeleton-loader',
    image: skeletonLoader,
    category: ['backend']
  },
  {
    id: 5,
    title: 'Persogen API',
    description: 'A Rails API for generating realistic personal data for development and testing.',
    technologies: ['Ruby on Rails', 'REST API', 'RSpec', 'JWT Auth'],
    demoLink: 'https://github.com/ersync/persogen',
    githubLink: 'https://github.com/ersync/persogen',
    image: persogenApi,
    category: ['backend']
  },
  {
    id: 6,
    title: 'Persian Coffeeshop',
    description:
      'A responsive Persian coffee shop experience designed from the start for right-to-left reading.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Git'],
    demoLink: 'https://coffeeshop.emadrahimi.dev',
    githubLink: 'https://github.com/ersync/coffeeshop-responsive-website',
    image: persianCoffeeshop,
    category: ['frontend']
  }
]
