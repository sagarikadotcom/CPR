

export const useStyles = (MUITheme) => ({
    card:{
        width:"80%", margin:"auto", marginTop:200, color:"black",
        [MUITheme.breakpoints.only("xs")]: {
            margin:"70px auto"
          },
    },
    heading:{
      fontSize:38, fontWeight:700, textAlign :"center", margin:"20px auto",
      [MUITheme.breakpoints.only("xs")]: {
        fontSize:26,
      },
    }
      });
      