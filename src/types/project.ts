import type { ProjectCategory } from '@/types/projectCategory'

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  demoLink: string
  githubLink: string
  image: string | [string, string]
  category: ProjectCategory[]
}
