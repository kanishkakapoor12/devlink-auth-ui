'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {
  Container,
  Box,
  Typography,
  Button,
  Avatar,
  Paper,
  Grid,
} from '@mui/material'
import { Logout as LogoutIcon } from '@mui/icons-material'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#f4f2ee',
        }}
      >
        <Typography>Loading...</Typography>
      </Box>
    )
  }

  if (!session) {
    return null
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f4f2ee',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              color: '#0a66c2',
            }}
          >
            DevLink
          </Typography>
          <Button
            variant="outlined"
            startIcon={<LogoutIcon />}
            onClick={() => signOut({ callbackUrl: '/' })}
            sx={{
              borderColor: '#0a66c2',
              color: '#0a66c2',
              '&:hover': {
                borderColor: '#004182',
                bgcolor: 'rgba(10, 102, 194, 0.04)',
              },
            }}
          >
            Sign Out
          </Button>
        </Box>

        {/* User Profile Card */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
            bgcolor: 'white',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                src={session.user?.image || undefined}
                alt={session.user?.name || 'User'}
                sx={{
                  width: 80,
                  height: 80,
                  fontSize: '2rem',
                }}
              />
            </Grid>
            <Grid item xs>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#191919',
                  mb: 1,
                }}
              >
                Welcome back, {session.user?.name || 'User'}!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#666666',
                  mb: 2,
                }}
              >
                {session.user?.email}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                }}
              >
                You are successfully signed in with Google OAuth.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Additional Content */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mt: 3,
            borderRadius: 2,
            bgcolor: 'white',
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              color: '#191919',
              mb: 2,
            }}
          >
            Your Professional Dashboard
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              mb: 2,
            }}
          >
            This is your protected dashboard area. Here you can:
          </Typography>
          <Box component="ul" sx={{ pl: 2, color: '#666666' }}>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              View your professional profile
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Connect with other professionals
            </Typography>
            <Typography component="li" variant="body1" sx={{ mb: 1 }}>
              Access your network updates
            </Typography>
            <Typography component="li" variant="body1">
              Manage your account settings
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
} 