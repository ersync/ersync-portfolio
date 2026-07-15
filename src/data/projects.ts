import skeletonLoader from '@/assets/images/projects/skeleton-loader.webp'
import cinemad from '@/assets/images/projects/cinemad.webp'
import satryar from '@/assets/images/projects/satryar.webp'
import persogenApi from '@/assets/images/projects/persogen-api.webp'
import persianCoffeeshop from '@/assets/images/projects/persian-coffeeshop.webp'

import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Cinemad',
    description:
      'A film-discovery product with a Rails and PostgreSQL API and a Vue interface, including search, filtering, authentication, profiles, watchlists, and ratings.',
    technologies: ['Vue.js', 'Ruby on Rails', 'PostgreSQL', 'Vite'],
    liveLink: 'https://cinemad.emadrahimi.dev',
    liveLabel: 'Live product',
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
    liveLink: 'https://satryar.ir',
    liveLabel: 'Live product',
    image: satryar,
    category: ['frontend']
  },
  {
    id: 4,
    title: 'Skeleton Loader Gem',
    description:
      'A Ruby gem for generating skeleton loading states in Rails without client-side dependencies.',
    technologies: ['Ruby', 'Ruby on Rails', 'CSS', 'JavaScript'],
    liveLink: 'https://rubygems.org/gems/skeleton-loader',
    liveLabel: 'RubyGems',
    githubLink: 'https://github.com/ersync/skeleton-loader',
    image: skeletonLoader,
    category: ['backend']
  },
  {
    id: 5,
    title: 'Persogen API',
    description:
      'A documented API for generating realistic synthetic test identities, with JWT authentication and RSpec test coverage.',
    technologies: ['Ruby on Rails', 'REST API', 'RSpec', 'JWT Auth'],
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
    liveLink: 'https://coffeeshop.emadrahimi.dev',
    liveLabel: 'Live preview',
    githubLink: 'https://github.com/ersync/coffeeshop-responsive-website',
    image: persianCoffeeshop,
    category: ['frontend']
  }
]
