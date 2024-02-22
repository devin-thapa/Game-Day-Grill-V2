"use client"
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export const ContextWrapper = ({ children }: any) => {
    const  { theme } = useContext(ThemeContext)
    return (
        <div data-theme={theme}>{children}</div>
    )
}