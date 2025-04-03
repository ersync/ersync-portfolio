import { ref, onMounted } from 'vue'

interface DocumentTouch {
  new(): DocumentTouch
}

declare global {
  interface Window {
    DocumentTouch?: DocumentTouch
  }
}

export const useDeviceDetection = () => {
  const isMobileDevice = ref(false)

  const checkMobileDevice = (): void => {
    const hasTouchScreen: boolean =
      navigator.maxTouchPoints > 0 ||
      'ontouchstart' in window ||
      !!(window.DocumentTouch && document instanceof window.DocumentTouch)

    const isMobileUA: boolean = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

    isMobileDevice.value = hasTouchScreen && isMobileUA
  }

  onMounted(() => {
    checkMobileDevice()
  })

  return {
    isMobileDevice
  }
}
