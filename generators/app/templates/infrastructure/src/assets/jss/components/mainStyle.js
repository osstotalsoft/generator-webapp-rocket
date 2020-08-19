import styles from "assets/jss/styles";

const mainStyle = (theme) => {
  const { containerFluid } = styles(theme);

  return {
    content: {
      padding: "20px 25px",
      minHeight: "calc(100vh - 123px)",
      '@media (max-width: 480px)': {
        padding: 0,
        marginTop: "30px",
      },
    },
    container: { ...containerFluid },
  };
}

export default mainStyle;