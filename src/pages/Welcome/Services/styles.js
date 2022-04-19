export const useStyles = (MUITheme) => ({
grid:{
    padding:"40px 0px",
},
card:{
    borderRadius:25, boxShadow:"2px 2px 2px 4px #00000026",padding:"30px 0px", position:"relative", background:"transparent linear-gradient(180deg, #ffb7937a 0%, #00000000 100%) 0% 0% no-repeat padding-box",
    [MUITheme.breakpoints.only("sm")]: {
       // height:"100%"
      },
},
gridContainer:{
    margin:"50px auto", display:"flex", justifyContent:"center", width:"100%",
    [MUITheme.breakpoints.only("xs")]: {
        margin:"50px auto"
      },
}
  });
  