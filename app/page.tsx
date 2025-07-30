'use client'

import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Link,
  Avatar,
  Paper,
  Divider,
} from '@mui/material'
import { Google as GoogleIcon } from '@mui/icons-material'

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (status === 'authenticated' && session) {
      router.push('/dashboard')
    }
  }, [session, status, router])

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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f4f2ee',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: '#0a66c2',
            cursor: 'pointer',
          }}
        >
          DevLink
        </Typography>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="sm"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 400,
            borderRadius: 2,
            bgcolor: 'white',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#191919',
                mb: 1,
              }}
            >
              Stay updated on your professional world
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                fontSize: '1.1rem',
              }}
            >
              Sign in to access your professional network
            </Typography>
          </Box>

          {/* Sign in with Google Button */}
          <Button
            variant="outlined"
            fullWidth
            size="large"
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            sx={{
              py: 1.5,
              borderColor: '#dadce0',
              borderWidth: 1.5,
              color: '#3c4043',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                borderColor: '#dadce0',
                bgcolor: '#f8f9fa',
              },
            }}
            startIcon={
              <Box
                component="img"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY0IDkuMjA0NTVDMTcuNjQgOC41NjY0MSAxNy41ODI3IDcuOTUyNzMgMTcuNDc2NCA3LjM2MzY0SDlWMTAuODQ1SDExLjQ0NzNDMTEuMzc4OSAxMS42Njk5IDEwLjg3MTggMTIuMzY5NiAxMC4wNzE4IDEyLjg5OTlWMTUuMTgxOEgxMy4zODE4QzE1LjE0NTUgMTMuNzI3MyAxNi4wMzY0IDExLjUxNzMgMTYuMDM2NCA5LjIwNDU1WiIgZmlsbD0iIzQyODVGNAoiLz4KPHBhdGggZD0iTTkgMTcuOTk5OEMxMS40MyAxNy45OTk4IDEzLjQ2NzMgMTcuMTk5OSAxNC45NTQ1IDE1LjgxODJMMTIuNjM2NCAxMy41MDAwQzExLjg4NzMgMTQuMDQ1NSAxMC45NTQ1IDE0LjM2MzYgOSAxNC4zNjM2QzYuNjU0NTUgMTQuMzYzNiA0LjY3MTgyIDEyLjg2MzYgMy45NzI3MyAxMC43MjczSDAuNjM2MzY0VjEzLjA5MDlDMC42MzYzNjQgMTYuNzI3MyAyLjU0NTQ1IDE5Ljk5OTggOSAxOS45OTk4WiIgZmlsbD0iIzM0QTg1MyIvPgo8cGF0aCBkPSJNMy45NzI3MyAxMC43MjczQzMuNzcyNzMgMTAuMTgxOCAzLjY2MzY0IDkuNTkwOTEgMy42NjM2NCA4Ljk5OTk5QzMuNjYzNjQgOC40MDkwOSAzLjc3MjczIDcuODE4MTggMy45NzI3MyA3LjI3MjczVjQuOTA5MDlIMC42MzYzNjRDMC4yMzE4MTggNi4xNTQ1NSAwIDcuNTQ1NDUgMCA4Ljk5OTk5QzAgMTAuNDU0NSAwLjIzMTgxOCAxMS44NDU1IDAuNjM2MzY0IDEzLjA5MDlMMy45NzI3MyAxMC43MjczWiIgZmlsbD0iI0ZCQjAwNSIvPgo8cGF0aCBkPSJNOSAzLjYzNjM2QzEwLjMxODIgMy42MzYzNiAxMS40NzI3IDQuMDQ1NDUgMTIuMzYzNiA0LjgxODE4TDE0LjgxODIgMi4zNjM2NEMxMy40NjczIDAuOTkwOTA5IDExLjQzIDAgOSAwQzUuNDU0NTUgMCAyLjU0NTQ1IDIuNzI3MjcgMC42MzYzNjQgNi42MzYzNkwzLjk3MjczIDguOTk5OTlDNC42NzE4MiA2Ljg2MzY0IDYuNjU0NTUgNS4zNjM2NCA5IDUuMzYzNjRaIiBmaWxsPSIjRUE0MzA1Ii8+Cjwvc3ZnPgo="
                alt="Google"
                sx={{ width: 18, height: 18 }}
              />
            }
          >
            Sign in with Google
          </Button>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: '#666666' }}>
              or
            </Typography>
          </Divider>

          {/* Email/Password Form (Placeholder) */}
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email or Phone"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#dadce0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#dadce0',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#dadce0',
                  },
                  '&:hover fieldset': {
                    borderColor: '#dadce0',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                bgcolor: '#0a66c2',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#004182',
                },
              }}
            >
              Sign in
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Link
              href="#"
              variant="body2"
              sx={{
                color: '#0a66c2',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Forgot password?
            </Link>
          </Box>
        </Paper>

        {/* Footer */}
        <Box
          sx={{
            mt: 4,
            textAlign: 'center',
            color: '#666666',
          }}
        >
          <Typography variant="body2" sx={{ mb: 1 }}>
            New to DevLink?{' '}
            <Link
              href="#"
              sx={{
                color: '#0a66c2',
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Join now
            </Link>
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mb: 1 }}>
            <Link
              href="#"
              sx={{
                color: '#666666',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              User Agreement
            </Link>
            {' • '}
            <Link
              href="#"
              sx={{
                color: '#666666',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Link>
            {' • '}
            <Link
              href="#"
              sx={{
                color: '#666666',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Cookie Policy
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
} 