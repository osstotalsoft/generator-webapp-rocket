import { styled } from '@mui/material'
import { includes } from 'ramda'

export const Container = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['fullWidth', 'hasHeader', 'hasFooter'])
})(({ fullWidth, hasHeader, hasFooter }) => ({
  height: hasHeader && hasFooter ? 'calc(100vh - 64px - 64px)' : hasHeader || hasFooter ? 'calc(100vh - 64px)' : '100vh',
  padding: fullWidth ? 0 : '20px 40px',
  overflow: 'auto',
  '@media (max-width: 480px)': {
    padding: '15px'
  }
}))
