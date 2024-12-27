export type FilterCategory = 'all' | 'frontend' | 'backend'
export type ProjectCategory = Exclude<FilterCategory, 'all'>
export const categories = ['all', 'frontend', 'backend'] as const
export const isProjectCategory = (cat: FilterCategory): cat is ProjectCategory => {
  return cat !== 'all'
}
