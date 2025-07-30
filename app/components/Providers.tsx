'use client'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Create Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#0a66c2', // LinkedIn blue
    },
    background: {
      default: '#f4f2ee', // Light gray background
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
})

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
} 