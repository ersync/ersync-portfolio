export type FilterCategory = 'all' | 'frontend' | 'backend' | 'tooling'
export type ProjectCategory = Exclude<FilterCategory, 'all'>
export const categories = ['all', 'frontend', 'backend', 'tooling'] as const
export const isProjectCategory = (cat: FilterCategory): cat is ProjectCategory => {
  return cat !== 'all'
}
