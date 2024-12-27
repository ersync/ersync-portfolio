import type { Project } from '@/types/project'
export const projects: Project[] = [
  {
    id: 1,
    title: 'Skeleton Loader Gem',
    description:
      'A Ruby on Rails gem that provides customizable skeleton loading screens for improved user experience. Features include responsive design, customizable animations, and easy integration with Rails views.',
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
      'A comprehensive clone of TMDB (The Movie Database) with careful attention to detail and user experience improvements. Features include seamless user authentication, personalized favorites list, and detailed movie information. Built using Ruby on Rails for the backend API and Vue.js for the frontend, delivering a responsive and enhanced version of the original platform.',
    technologies: ['Vue.js', 'Ruby on Rails', 'Tailwind CSS', 'PostgreSQL'],
    demoLink: 'demo-url',
    githubLink: 'https://github.com/ersync/TMDB-clone',
    image: '/src/assets/images/projects/tmdb-clone.png',
    category: ['backend', 'frontend']
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description:
      'A modern, responsive portfolio website showcasing my projects and skills. Features smooth animations, and a responsive layout. Built with Vue.js and styled with Tailwind CSS for a clean, professional look.',
    technologies: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    demoLink: 'ersync.dev',
    githubLink: 'https://github.com/ersync/ersync-portfolio',
    image: '/src/assets/images/projects/portfolio.png',
    category: ['frontend']
  },
  {
    id: 4,
    title: 'Persogen API',
    description:
      'A Ruby on Rails REST API service that generates realistic fake personal data for testing and development purposes. Features include random generation of names, addresses, social security numbers, and other personal information with customizable formats.',
    technologies: ['Ruby on Rails', 'REST API', 'RSpec', 'JWT Auth'],
    demoLink: 'your-api-endpoint', // if public
    githubLink: 'your-github-repo-url',
    image: '/src/assets/images/projects/persogen-api.png',
    category: 'backend'
  },
  {
    id: 5,
    title: 'Persian Coffeeshop',
    description:
      'A fully responsive, Persian coffee shop website built with pure Tailwind CSS. Features include a modern design, responsive menu cards, beautiful hero section, and smooth animations. Optimized for both desktop and mobile devices with special attention to Persian typography and RTL layout.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Git'],
    demoLink: 'your-demo-url',
    githubLink: 'your-github-repo-url',
    image: '/src/assets/images/projects/persian-coffeeshop.png',
    category: ['frontend']
  },
  {
    id: 6,
    title: 'Vue Chatlog',
    description:
      'A Vue.js demo showcasing a chat message history within a mobile device frame. Features a sleek mobile UI presentation, customizable themes, and message display styling. Built with Vue.js and CSS to demonstrate mobile chat interface design patterns.',
    technologies: ['Vue.js', 'HTML', 'Tailwind CSS', 'Vite'],
    demoLink: 'your-demo-url',
    githubLink: 'your-github-repo-url',
    image: '/src/assets/images/projects/vue-chatlog.png',
    category: ['frontend']
  }
]
