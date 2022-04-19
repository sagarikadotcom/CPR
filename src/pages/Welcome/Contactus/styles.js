
export const useStyles = (MUITheme) => ({

    gridContainer:{
        margin:"10px auto", display:"flex", justifyContent:"center", maxWidth:1298,
        [MUITheme.breakpoints.only("xs")]: {
            margin:0
          },
    }
      });
      