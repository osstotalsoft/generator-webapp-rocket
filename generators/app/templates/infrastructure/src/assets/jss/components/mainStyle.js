const mainStyle = _theme => {
  return {
    container: props => ({
      padding: props.fullWidth ? 0 : '20px 40px',
      minHeight: 'calc(100vh - 123px)',
      '@media (max-width: 480px)': {
        padding: '15px'
      }
    })
  }
}

export default mainStyle
