export const useStyles = (MUITheme) => ({
  card:{
    width:"50%", margin:"auto", marginTop:200, color:"black",padding:100,
    [MUITheme.breakpoints.only("xs")]: {
        margin:"150px auto",
        width:"90%",
        padding:"20px 5px",
        marginBottom:20
      },
},
  });