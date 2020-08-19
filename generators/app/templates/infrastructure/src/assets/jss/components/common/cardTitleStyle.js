import styles from "assets/jss/styles";

const cardTitleStyle = theme => {
  const {
    defaultFont
  } = styles(theme);

  return ({
    defaultFont,
    cardTitle: {
      ...theme.header.title,
      display: 'flex',
      flexGrow: 1,
      padding: '5px'
    },
    container: { 
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  })
};

export default cardTitleStyle;