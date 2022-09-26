import { styled } from '@mui/material'
import { includes } from 'ramda'

export const Container = styled('div', {
  shouldForwardProp: prop => !includes(prop, ['fullWidth'])
})(({ fullWidth }) => ({
  padding: fullWidth ? 0 : '20px 40px',
  minHeight: 'calc(100vh - 123px)',
  '@media (max-width: 480px)': {
    padding: '15px'
  }
}))
