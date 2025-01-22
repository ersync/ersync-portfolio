import { defineStore } from 'pinia'
import { ref } from 'vue'

interface ThemeSettings {
  dark: boolean
  system: boolean
}

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref<boolean>(false)
  const isSystemTheme = ref<boolean>(true)

  const init = () => {
    const saved = localStorage.getItem('theme-settings')

    if (saved) {
      try {
        const parsedSettings = JSON.parse(saved) as ThemeSettings
        isDark.value = Boolean(parsedSettings.dark)
        isSystemTheme.value = Boolean(parsedSettings.system)
      } catch (error) {
        console.error('Failed to parse theme settings:', error)
        setSystemTheme()
      }
    } else {
      setSystemTheme()
    }

    applyTheme()
    setupSystemThemeListener()
  }

  const toggleTheme = () => {
    isSystemTheme.value = false
    isDark.value = !isDark.value
    saveSettings()
    applyTheme()
  }

  const setSystemTheme = () => {
    isSystemTheme.value = true
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    saveSettings()
    applyTheme()
  }

  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function saveSettings() {
    localStorage.setItem(
      'theme-settings',
      JSON.stringify({
        dark: isDark.value,
        system: isSystemTheme.value
      })
    )
  }

  function setupSystemThemeListener() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (isSystemTheme.value) {
        isDark.value = e.matches
        applyTheme()
      }
    })
  }

  init()

  return {
    isDark,
    isSystemTheme,
    toggleTheme,
    setSystemTheme,
    init
  }
})
