

export const useStyles = (MUITheme) => ({
      banner:{
            height:575,
            width:"100%",
            backgroundSize:"cover",
           
      [MUITheme.breakpoints.only("xs")]: {
           height:300,
           marginTop:66
          },
      },
      button:{
            background: '#02b7ff',
            color: 'white',
            fontWeight: 'bolder',
            marginRight:20
      },
      eventDetails:{
            fontSize: '14px',
marginTop: '8px'
      }
      });
      