import type { ProjectCategory } from '@/types/projectCategory'

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  liveLink?: string
  liveLabel?: 'Live product' | 'Live preview' | 'RubyGems'
  githubLink?: string
  image: string
  category: ProjectCategory[]
}
