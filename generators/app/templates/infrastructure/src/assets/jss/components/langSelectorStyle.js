import styles from 'assets/jss/styles'

const langSelectorStyle = theme => {
  const { defaultFont } = styles(theme)

  return {
    langSelectorContainer: {
      width: '100%',
      verticalAlign: 'middle',
      color: 'inherit',
      '&:before,&:after': {
        display: 'none !important'
      }
    },
    langSelectorText: {
      ...defaultFont,
      margin: '0',
      position: 'relative',
      transform: 'translateX(0px)',
      opacity: '1',
      whiteSpace: 'nowrap',
      display: 'inline-block',
      transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
      fontSize: '15px',
      fontWeight: 'bold',
      paddingLeft: '25px'
    },
    langSelectorItem: {
      padding: '2px 16px'
    },
    langSelectMenu: {
      textOverflow: 'unset',
      paddingLeft: '10px'
    },
    langSelectCaret: {
      color: theme.palette.sideMenu.color,
      right: '10px'
    }
  }
}
export default langSelectorStyle