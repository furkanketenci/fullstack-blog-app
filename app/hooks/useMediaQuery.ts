'use client'

import { useState, useEffect } from 'react'

const BREAKPOINTS = {
    mobile: 768,    // 0-768px arası mobil
    tablet: 1024,   // 769-1024px arası tablet
    desktop: 1280   // 1024px üzeri desktop
} as const

function useMediaQuery(maxWidth: number): boolean {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMatches(window.innerWidth <= maxWidth)

            const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`)
            const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches)

            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }
    }, [maxWidth])

    return matches
}

export function useIsMobile() {
    return useMediaQuery(BREAKPOINTS.mobile)
}

export function useIsTablet() {
    const isMobileSize = useMediaQuery(BREAKPOINTS.mobile)
    const isTabletSize = useMediaQuery(BREAKPOINTS.tablet)
    return !isMobileSize && isTabletSize
}

export function useIsDesktop() {
    return !useMediaQuery(BREAKPOINTS.tablet)
}

// Özel breakpoint hooks
export function useIsSm() {
    return useMediaQuery(BREAKPOINTS.mobile)
}

export function useIsMd() {
    return useMediaQuery(BREAKPOINTS.mobile)
}

export function useIsLg() {
    return useMediaQuery(BREAKPOINTS.tablet)
}

export function useIsXl() {
    return useMediaQuery(BREAKPOINTS.desktop)
}

export function useIs2Xl() {
    return useMediaQuery(BREAKPOINTS.desktop)
} 