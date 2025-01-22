import type { Project } from '@/types/project'
export const projects: Project[] = [
  {
    id: 1,
    title: 'Skeleton Loader Gem',
    description: 'Customizable skeleton loading screens for Ruby on Rails applications',
    technologies: ['Ruby', 'Ruby on Rails', 'CSS', 'Javascript'],
    demoLink: 'https://rubygems.org/gems/skeleton-loader',
    githubLink: 'https://github.com/ersync/skeleton-loader',
    image: '/src/assets/images/projects/skeleton-loader.png',
    category: ['backend']
  },
  {
    id: 2,
    title: 'TMDB Clone',
    description:
      'Full-stack TMDB clone built with Rails and Vue, featuring personalized user experience',
    technologies: ['Vue.js', 'Ruby on Rails', 'Tailwind CSS', 'PostgreSQL'],
    demoLink: 'https://github.com/ersync/',
    githubLink: 'https://github.com/ersync/',
    image: '/src/assets/images/projects/tmdb-clone.png',
    category: ['backend', 'frontend']
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'Responsive Vue portfolio featuring dark mode and smooth animated transitions',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    demoLink: 'https://emadrahimi.dev',
    githubLink: 'https://github.com/ersync/',
    image: [
      '/src/assets/images/projects/portfolio.png',
      '/src/assets/images/projects/portfolio-dark.png'
    ],
    category: ['frontend']
  },
  {
    id: 4,
    title: 'Persogen API',
    description: 'Rails API service for generating realistic personal testing data',
    technologies: ['Ruby on Rails', 'REST API', 'RSpec', 'JWT Auth'],
    demoLink: 'https://github.com/ersync/persogen',
    githubLink: 'https://github.com/ersync/persogen',
    image: '/src/assets/images/projects/persogen-api.png',
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
    image: '/src/assets/images/projects/persian-coffeeshop.png',
    category: ['frontend']
  },
  {
    id: 6,
    title: 'Vue Chatlog',
    description: 'Vue demo showcasing mobile chat UI with customizable themes',
    technologies: ['Vue.js', 'HTML', 'Tailwind CSS', 'Vite'],
    demoLink: 'https://vue-chatlog.vercel.app/',
    githubLink: 'https://github.com/ersync?tab=repositories',
    image: '/src/assets/images/projects/vue-chatlog.png',
    category: ['frontend']
  }
]
