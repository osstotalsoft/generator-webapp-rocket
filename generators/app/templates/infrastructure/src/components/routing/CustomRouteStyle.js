import { styled } from '@mui/material'
import { includes } from 'ramda'

export const Container = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['fullWidth', 'footer'])
})(({ fullWidth, footer }) => ({
  height: `calc(100vh - 64px - ${footer ? 64 : 0}px)`,
  padding: fullWidth ? 0 : '20px 40px',
  overflow: 'auto',
  '@media (max-width: 480px)': {
    padding: '15px'
  }
}))
