import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export let MUITheme = createTheme({
  overrides: {
    MuiInput: {
      root: {
       
      },
      underline: {
        "&&&&:hover:before": {
          borderBottom: "none",
        },
        "&&&&:after": {
          borderBottom: "none",
        },
        "&&&&:before": {
          borderBottom: "none",
        },
              "&$error": {
          "&:after": {
            borderBottomColor: "#F3FF00",
          },
        },
      },
      input: {
        "&[type=number]": {
          "-moz-appearance": "textfield",
        },
        "&::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "&::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      },
    },
  
    MuiTab: {
      textColorPrimary: {
        "&$disabled": {
          color: "#9F9BA8",
        },
      },
    },
    MuiFilledInput: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&$focused": {
          backgroundColor: "transparent",
        },
      },
      underline: {
        "&&&&:hover:before": {
          borderBottom: "none",
        },
        "&&&&:after": {
          borderBottom: "none",
        },
        "&&&&:before": {
          borderBottom: "none",
        },
      },
      input: {
        padding: 15,
        fontSize: 18,
        height: 50,
        textAlign: "center",
        "&[type=number]": {
          "-moz-appearance": "textfield",
        },
        "&::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "&::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      },
    },
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0,
        lineHeight: 2,
      },
    },
    MuiSvgIcon: {
      root: {
        height: 14,
        width: 14,
      },
    },
    MuiListItem: {
      root: {
        "&:hover": {
          backgroundColor: "#30274a",
        },
        "&$selected": {
          backgroundColor: "#30274a!important",
        },
      },
      button: {
        "&:hover": {
          backgroundColor: "#30274a",
        },
        "&$selected": {
          backgroundColor: "none",
        },
      },
    },
   
    MuiStepConnector: {
      vertical: {
        padding: "0px 0 0px",
        marginLeft: 7,
      },
    },
    MuiPickersClock: {
      clock: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      },
      pin: {
        backgroundColor: "#FF740F",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      },
    },
    MuiPickersModal: {
      dialogRoot: {
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(135deg, #0F0426 0%, #080033 100%)",
      },
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: "#FF740F",
      },
      thumb: {
        backgroundColor: "#FF740F",
        border: `14px solid ${"#FF740F"}`,
      },
      noPoint: {
        backgroundColor: "#FF740F",
      },
    },
    MuiPickersClockNumber: {
      clockNumber: {
        color: "#ffffff",
      },
      clockNumberSelected: {
        color: "black",
      },
    },

    MuiPickersCalendarHeader: {
      iconButton: {
        backgroundColor: "none",
      },
      dayLabel: {
        color: "#ffffff",
      },
    },
  
    MuiToolbar: {
      regular: {
        position: "absolute",
      },
    },
    MuiPaper: {
      root: {
        color: "#ffffff",
      },
    },
    MuiIconButton: {
      root: {
        padding: 0,
      },
      colorSecondary: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
    },
    colorSecondary: {
      Mui: {
        checked: {
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      "&$disabled": {
        color: "white",
        cursor: "not-allowed",
      },
    },

    MuiPickersDay: {
      daySelected: {
        backgroundColor: "#FF740F",
        color: "black",
        "&:hover": {
          backgroundColor: "#FF740F",
        },
      },
    },
    pickerIcon: {
      color: "#FF740F",
      padding: 0,
    },
    MuiFormHelperText: {
      root: {
        "&$error": {
          color: "#F3FF00",
        },
      },
    },
    MuiListItemIcon: {
      root: {
        color: "#FFFF",
      },
    },
    MuiButton: {
      iconSizeMedium: {
        "& > *:first-child": {
          fontSize: 12,
        },
      },
      outlined: {
        padding: "0.357rem 1.071rem",
      },
    },
    MuiFormLabel:{
      root:{
        color:"black"
      }
    },
    MuiSnackbarContent: {
      action: {
        marginLeft: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "-25px",
        padding: 7,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "none",
      },
    },
    MuiTableRow: {
      root: {
        borderBottom: "1px solid #453d62",
      },
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    types: {
      
    },
    grey: {
      A2: "#14092A",
      A5: "#1B1131",
      A10: "#271D3B",
      A30: "#574F67",
      A50: "#080213",
      A60: "#9F9BA8",
      A70: "#B7B3BD",
      A80: "#CFCDD4",

      B2: "#0D0537",
      B5: "#150D3D",
      B10: "#201947",
      B50: "#04001A",

      C2: "#0D0537",
      C5: "#150D3D",
      C10: "#201947",
    },
    
    success: { main: "#49C83E" },
    error: { main: "#F3FF00" },
    infoBoxLink: "#067AD7",
    warning: { main: "#F18D5A" },
    danger: { main: "red" },
    rating: { main: "#ffb400" },
  },
  typography: {
    fontFamily: "poppins",
    fontStyle: "normal",
    letterSpacing: 0,
    fontSize: 16,
    color:"black",
    h1: {
      position: "absolute",
      color: "#FF740F",
      fontWeight: 300,
      fontSize: "1.875rem",
      display: "flex",
      alignItems: "center",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      color: "white",
    },
    h3: {
      fontSize: "1.125rem",
      fontWeight: 600,
      color: "#FFFF",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "normal",
      color: "#574F67",
    },
    h5: {
      fontWeight: "normal",
      fontSize: "0.875rem",
      textTransform: "none",
      color: "#FFFF",
    },
    p: {
      fontSize: "0.75rem",
    },
    subtitle1: {
      fontWeight: "normal",
      fontSize: "0.75rem",
      color: "#9F9BA8",
    },
    body1: {
      fontSize: "0.875rem",
    },
  },
});
MUITheme = responsiveFontSizes(MUITheme);
export default MUITheme;
