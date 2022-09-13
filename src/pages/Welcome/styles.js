import MUITheme from "../../assets/MUITheme";
import ExtraBoldFont from "../../assets/fonts/Poppins-ExtraBold.ttf";
import BoldFont from "../../assets/fonts/Poppins-ExtraBold.ttf";
import RegularFont from "../../assets/fonts/Poppins-Regular.ttf";

import Banner from "../../assets/images/Enquiry/bg.jpg";
const poppinsBoldFont = new FontFace("Poppins Bold", `url(${BoldFont})`);
const poppinsExtraBoldFont = new FontFace("Poppins ExtraBold", `url(${ExtraBoldFont})`);
const poppinsRegularFont = new FontFace("Poppins Regular", `url(${RegularFont})`);

poppinsExtraBoldFont
  .load()
  .then(function (loadedFont) {
    document.fonts.add(loadedFont);
  })
  .catch((error) => error);
poppinsBoldFont
  .load()
  .then(function (loadedFont) {
    document.fonts.add(loadedFont);
  })
  .catch((error) => error);
poppinsRegularFont
  .load()
  .then(function (loadedFont) {
    document.fonts.add(loadedFont);
  })
  .catch((error) => error);

export const useStyles = () => ({
  bannerGrid: {
    background: `url(${Banner}) no-repeat center center`,
    backgroundSize: "cover",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "100vh",
    scrollSnapAlign: "center",
    display: "grid",
    alignContent: "end",
    zIndex: "1",
  },
  hoverSignUp: {
    "&:hover": {
      border: "2px solid rgb(178, 81, 10)",
      boxShadow: "none",
    },
  },
  typo: {
    color: "white",
    fontSize: 120,
    fontFamily: "Poppins ExtraBold",
    lineHeight: 1.2,
    [MUITheme.breakpoints.up("xs")]: {
      fontSize: 96,
    },
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 40,
    },
  },
  container: {
    width: "100%",
    height: "100%",
    color: "white",
    scrollBehavior: "smooth",
    scrollSnapType: "mandatory",
  },
  fanContainer: {
    width: "100%",
    color: MUITheme.palette.primary.main,
    scrollBehavior: "smooth",
    scrollSnapType: "mandatory",
    padding: "0 15%",
    backgroundColor: "white",
    textAlign: "center",
    [MUITheme.breakpoints.only("xs")]: {
      padding: "0 5%",
    },
  },
  fanHeader: {
    fontSize: 64,
    color: "#000000",
    marginTop: "200px",
    marginBottom: "120px",
    fontFamily: "Poppins ExtraBold",
    [MUITheme.breakpoints.only("sm")]: {
      fontSize: 32,
      marginTop: "96px",
      marginBottom: "64px",
    },
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 32,
      marginTop: "48px",
      marginBottom: "48px",
    },
  },
  fanDesc: {
    fontFamily: "Poppins Regular",
    fontSize: 32,
    color: "#574F67",
    letterSpacing: 0,
    textAlign: "left",
    marginTop: "6%",
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 24,
      textAlign: "center",
    },
  },
  artistContainer: {
    background: "transparent linear-gradient(180deg, #100064 0%, #080033 100%) 0% 0% no-repeat padding-box",
    width: "100%",
    scrollBehavior: "smooth",
    scrollSnapType: "mandatory",
    padding: "0% 11%",

    justifyContent: "center",
    [MUITheme.breakpoints.only("xs")]: {
      padding: "0% 5%",
    },
  },
  artistHeader: {
    fontSize: 64,
    color: "white",
    fontFamily: "Poppins ExtraBold",
    letterSpacing: 0,
    textAlign: "center",
    marginTop: "200px",
    [MUITheme.breakpoints.only("sm")]: {
      marginTop: "96px",
    },
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 32,
      margin: "0% 12%",
      marginTop: "48px",
    },
  },
  artistHeaderDesc: {
    fontSize: 32,
    color: "#CFCDD4",
    fontFamily: "Poppins Regular",
    letterSpacing: 0,
    textAlign: "center",
    margin: "0% 10%",
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 24,
    },
  },
  artistDescHeader: {
    fontSize: 32,
    fontFamily: "Poppins Bold",
    textAlign: "center",
    marginTop: "3%",
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 24,
      margin: "0% 12%",
    },
  },
  artistDescContent: {
    fontSize: 24,
    fontFamily: "Poppins Regular",
    color: "#CFCDD4",
    textAlign: "center",
    marginTop: "1.5%",
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 16,
      margin: "0% 12%",
    },
  },
  images: {
    maxWidth: 480,
    maxHeight: 264,
    [MUITheme.breakpoints.only("xs")]: {
      width: 80,
      height: 80,
    },
  },
  scheduleImage: {
    [MUITheme.breakpoints.only("xs")]: {
      width: 240,
      height: 118,
    },
  },
  containerDiv: {
    maxWidth: 1092,
    margin: "auto",
  },
  HeaderGrid: {
    display: "flex",
    justifyContent: "center",
    marginTop: "120px",
    [MUITheme.breakpoints.only("sm")]: {
      marginTop: "64px",
    },
    [MUITheme.breakpoints.only("xs")]: {
      marginTop: "48px",
    },
  },
  innerContainer: {
    marginTop: "0",
  },
  fanProfileImage: {
    maxWidth: "90%",
    maxHeight: 264,
    [MUITheme.breakpoints.only("xs")]: {
      width: "224px",
      height: "145px",
    },
  },
  fanImageDesc: {
    display: "flex",
    alignItems: "center",
  },
  ButtonGrid: {
    display: "flex",
    justifyContent: "center",
    margin: "120px 0 200px 0px",
    [MUITheme.breakpoints.only("sm")]: {
      margin: "64px 0 96px 0px",
    },
    [MUITheme.breakpoints.only("xs")]: {
      margin: "48px 0 64px 0px",
    },
  },
  artistImage: {
    maxWidth: 480,
    maxHeight: 264,
    [MUITheme.breakpoints.only("xs")]: {
      width: 120,
      height: 120,
    },
  },
  main: {
    height: "50vh",
  },
  root: {
   marginTop:160,
   [MUITheme.breakpoints.only("xs")]: {
   marginTop:50
  },
  
  },
  image: {
    background: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),url(${Banner}) no-repeat center center`,
   
    backgroundColor: MUITheme.palette.type === "light" ? MUITheme.palette.grey[50] : MUITheme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "white",
    height: "100vh",
    cursor: "pointer",
    [MUITheme.breakpoints.only("sm")]: {
      height: "427px",
    },
    [MUITheme.breakpoints.only("xs")]: {
      backgroundSize: "cover",
      height: "50vh",
      position:"relative",
      background: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),url(${Banner}) no-repeat center center`,
marginTop:48


    },
  },
  avatar: {
    margin: MUITheme.spacing(1),
    backgroundColor: MUITheme.palette.secondary.main,
  },
  submit: {
    margin: MUITheme.spacing(3, 0, 2),
  },
  signUpHeader: {
    fontSize: 32,
    fontFamily: "Poppins Bold",
    textAlign: "center",
    color: "#1B1131",
    [MUITheme.breakpoints.only("xs")]: {
      fontSize: 24,
    },
  },
  signupAction: {
    color: "#574F67",
    padding: "16px",
  },
  signupActionLink: {
    fontSize: 14,
    color: "#FF740F",
    cursor: "pointer",
  },
  signupPadding: {
    border: "0",
    margin: "0",
    display: "inline-flex",
    padding: "0",
    position: "relative",
    minWidth: "0",
    flexDirection: "column",
    verticalAlign: "top",
  },
  input: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    color: "Black",
    borderBottom: "none",
    fontSize: 14,
  },
  underline: {
    borderBottom: "1px solid orange",
  },
  label: {
    color: "#9F9BA8",
    fontSize: 14,
    "&.Mui-focused": {
      color: "#9F9BA8",
      fontSize: 14,
      [MUITheme.breakpoints.only("xs")]: {
        width: 120,
        height: 120,
      },
    },
  },
  helperText: {
    color: "red",
    fontSize: 12,
  },
  formGrid: {
    height: "-webkit-fill-available",
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    height:"100vh"
  },
  div: {
    maxWidth: 350,
    margin:"auto"
  },
  actionHeader: {
    textAlign: "center",
    marginTop: 16,
  },
  formContainer: {
    marginTop: 40,
    width: "100%",
  },
  forgotPassword: {
    fontSize: 14,
    color: MUITheme.palette.secondary.main,
    cursor: "pointer",
    marginTop: 40,
  },
  signUpBtn: {
    marginTop: 40,
  },
  buttonContainer: {
    display: "glex",
    justifyContent: "center",
    textAlign: "center",
  },
  arrowDiv: {
    marginTop: 90,
  },
  arrowIcon: {
    fontSize: 37,
  },
  scrollToTop: {
    position: "fixed",
    bottom: "20px",
    right: "30px",
    cursor: "pointer",
  },
  buttonmargin: {
    margin: "56px",
  },
  headerAppbar: {
    boxShadow: "none",
    backgroundColor: "transparent",
    [MUITheme.breakpoints.only("xs")]: {
      marginLeft: 45,
    },
  },
  activeTab: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "bold",
    opacity: 1,
    letterSpacing: 0,
    textTransform: "none",
    color: "#212121",
  },
  defaultTab: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "bold",
    opacity: 1,
    letterSpacing: 0,
    textTransform: "none",
    color: "#9F9BA8",
  },
  divider: {
    marginTop: -1,
  },
  paper:{
    height:"100vh",
    [MUITheme.breakpoints.only("xs")]: {
    height:"100%",

       marginTop:0,
    },
  },
  snippet:{
    maxWidth:1289,
    [MUITheme.breakpoints.only("xs")]: {
     width:"100%"
     },
  },
  registerNowbtn:{
    border:"3px solid #01b7ff",
    background:"#01b7ff",
    fontSize:30,
    borderRadius:"75px",
    padding:16,
    [MUITheme.breakpoints.only("xs")]: {
      borderRadius:"25px",
    border:"2px solid #01b7ff",
    fontSize:16,
    padding:8,


    }

  },
  btnContainer:{
    [MUITheme.breakpoints.only("xs")]: {
  position:"absolute", bottom:"25px"
    }
  }
});
