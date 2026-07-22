import type { ProjectCategory } from '@/types/projectCategory'

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  liveLink?: string
  liveLabel?: 'Live product' | 'Live preview' | 'RubyGems' | 'npm'
  githubLink?: string
  image: string
  category: ProjectCategory[]
}
