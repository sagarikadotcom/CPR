export const useStyles = (MUITheme) => ({
    appBarRoot: {
      height: 110,
      padding: "1.714rem",
      backgroundColor: "inherit",
      background: "transparent linear-gradient(178deg, #01b7ff 0%, #00000000 100%) 0% 0% no-repeat padding-box",
      [MUITheme.breakpoints.only("xs")]: {
        padding: 12,
        height: "66px",
      },
    },
    triggeredRoot: {
      height: 100,
      padding: "1.714rem",
      background: "#FFFFFF 0% 0% no-repeat padding-box;",
      boxShadow: "0px 3px 6px #00000029",
      opacity: 1,
      [MUITheme.breakpoints.only("sm")]: {
        height: 96,
      },
      [MUITheme.breakpoints.only("xs")]: {
        padding: 16,
        height: 66,
      },
    },
    toolBarRoot: {
      padding: 0,
      display: "contents",
    },
    toolBarDiv: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
      height: "100%",
      cursor: "pointer",
      "@media (max-width:332px)": {
        width: "104%",
      },
    },
    signInBtn: {
      "&:hover": {
        border: `2px solid ${MUITheme.palette.primary.main}`,
      },
    },
    TriggeredSignInBtn: {
      "&:hover": {
        border: `2px solid ${MUITheme.palette.grey.A30}`,
      },
    },
    logo: {
      width: 400,
      height: 100,
      [MUITheme.breakpoints.only("xs")]: {
        width: 100,
        height: 15,
      },
    },
    userBtn: {
      "&:hover": {
        padding: "0.75rem 1.5rem",
        background: "#FFFFFF26 0% 0% no-repeat padding-box",
        borderRadius: 28,
        minWidth: 78,
      },
    },
    hoverSignUp: {
      "&:hover": {
        border: "2px solid rgb(178, 81, 10)",
      },
    },
    hoverUserBtn: {
      "&:hover": {
        padding: "0.75rem 1.5rem",
        background: "#CFCDD4 0% 0% no-repeat padding-box",
        borderRadius: 28,
        minWidth: 78,
      },
    },
    mobileSignInBtn: {
      border: `1px solid ${MUITheme.palette.grey.A30}`,
      color: "#574F67",
      "&:hover": {
        border: `1px solid ${MUITheme.palette.grey.A30}`,
      },
    },
    buttonsDiv:{
      width: "55%",

      display: "flex",

      justifyContent: "space-evenly"
    },
    btn:{
fontSize:21
    }
  });
  