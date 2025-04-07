// Import all images at the top
import skeletonLoader from '@/assets/images/projects/skeleton-loader.png'
import cinemad from '@/assets/images/projects/cinemad.png'
import portfolio from '@/assets/images/projects/portfolio.png'
import persogenApi from '@/assets/images/projects/persogen-api.png'
import persianCoffeeshop from '@/assets/images/projects/persian-coffeeshop.png'
import vueChatlog from '@/assets/images/projects/vue-chatlog.png'

import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cinemad',
    description:
      'Feature-rich film discovery application built with Ruby on Rails and Vue.js, offering comprehensive movie database and personalized user experience',
    technologies: ['Vue.js', 'Ruby on Rails', 'PostgreSQL', 'Vite'],
    demoLink: 'https://cinemad.emadrahimi.dev',
    githubLink: 'https://github.com/ersync/cinemad',
    image: cinemad,
    category: ['backend', 'frontend']
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'Responsive Vue portfolio featuring dark mode and smooth animated transitions',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    demoLink: 'https://emadrahimi.dev',
    githubLink: 'https://github.com/ersync/',
    image: portfolio,
    category: ['frontend']
  },
  {
    id: 3,
    title: 'Skeleton Loader Gem',
    description:
      'A Ruby gem that generates skeleton loading screens directly from backend code without JavaScript dependencies',
    technologies: ['Ruby', 'Ruby on Rails', 'CSS', 'Javascript'],
    demoLink: 'https://rubygems.org/gems/skeleton-loader',
    githubLink: 'https://github.com/ersync/skeleton-loader',
    image: skeletonLoader,
    category: ['backend']
  },
  {
    id: 4,
    title: 'Persogen API',
    description: 'Rails API service for generating realistic personal testing data',
    technologies: ['Ruby on Rails', 'REST API', 'RSpec', 'JWT Auth'],
    demoLink: 'https://github.com/ersync/persogen',
    githubLink: 'https://github.com/ersync/persogen',
    image: persogenApi,
    category: ['backend']
  },
  {
    id: 5,
    title: 'Persian Coffeeshop',
    description:
      'Modern Persian coffee shop website featuring RTL design and responsive Tailwind layouts',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Git'],
    demoLink: 'https://coffeeshop-ersync.vercel.app/',
    githubLink: 'https://github.com/ersync/coffeeshop-responsive-website',
    image: persianCoffeeshop,
    category: ['frontend']
  },
  {
    id: 6,
    title: 'Vue Chatlog',
    description: 'Vue demo showcasing mobile chat UI with customizable themes',
    technologies: ['Vue.js', 'HTML', 'Tailwind CSS', 'Vite'],
    demoLink: 'https://vue-chatlog.vercel.app/',
    githubLink: 'https://github.com/ersync?tab=repositories',
    image: vueChatlog,
    category: ['frontend']
  }
]
