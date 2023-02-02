import { useCallback, useEffect, useState } from 'react'

type UseIsLargerParms = {
  width: number
  em?: string
}

export function useIsLargerThen({ width }: UseIsLargerParms) {
  const [isLarge, setIsLarge] = useState(true)

  const handleWindowResize = useCallback(() => {
    const windowsWidth = document.documentElement.clientWidth

    if (windowsWidth < width) {
      setIsLarge(false)
    } else {
      setIsLarge(true)
    }
  }, [width])

  useEffect(() => {
    window.addEventListener('resize', () => handleWindowResize(), true)

    window.removeEventListener('resize', () => {}, true)
  }, [handleWindowResize])

  return {
    isLarge,
  }
}
