export const useStyles = (MUITheme) => ({
  LoginContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
  accountActionsContainer: {
    display: "flex",
  },
  link: {
    textAlign: "center",
  },
  icon: {
    color: MUITheme.palette.primary.main,
    width: 20,
    height: 20,
    padding: 5,
  },
  errorIcon: {
    width: 20,
    height: 20,
    padding: 5,
  },
  formGrid: {
    justifyContent: "center",
    height: 70,
    color: MUITheme.palette.grey.A60,
  },
  panel: {
    boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.06)",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "20px 20px 20px 20px",
    [MUITheme.breakpoints.only("xs")]: {
      background: "transparent",
      padding: 0,
      minWidth: 260,
    },
  },
  box: {
    position: "absolute",
    left: "50%",
    top: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    [MUITheme.breakpoints.only("xs")]: {
      top: "55%",
    },
    [MUITheme.breakpoints.up("xl")]: {
      top: "30%",
    },
  },
  textLabel: {
    color: MUITheme.palette.grey.A60,
    fontSize: 14,
  },
  alertContainer: {
    height: 10,
  },
  div: {
    margin: "15%",
  },
  hoverSignUp: {
    "&:hover": {
      border: "2px solid rgb(178, 81, 10)",
    },
  },
});