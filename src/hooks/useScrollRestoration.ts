import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const scrollPositions: Record<string, number> = {}

export function useScrollRestoration() {
  const location = useLocation()

  useEffect(() => {
    // 현재 위치 저장 (페이지 떠나기 전)
    const saveScrollPosition = () => {
      scrollPositions[location.key] = window.scrollY
    }

    window.addEventListener('beforeunload', saveScrollPosition)

    return () => {
      // cleanup 시 현재 스크롤 위치 저장
      scrollPositions[location.key] = window.scrollY
      window.removeEventListener('beforeunload', saveScrollPosition)
    }
  }, [location.key])

  useEffect(() => {
    // 페이지 진입 시 저장된 위치로 복원 또는 해시 위치로 이동
    const savedPosition = scrollPositions[location.key]

    if (location.hash) {
      // 해시가 있으면 해당 섹션으로 스크롤
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else if (savedPosition !== undefined) {
      // 저장된 위치가 있으면 복원 (뒤로가기)
      setTimeout(() => {
        window.scrollTo(0, savedPosition)
      }, 0)
    }
  }, [location.key, location.hash])
}
