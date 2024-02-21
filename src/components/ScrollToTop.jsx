import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation()
    useEffect(() => {
        FaWindow.scrollTo(0, 0)
    }, [pathname])
    return children || null;
}

export default ScrollToTop
