export const useStyles = (MUITheme) => ({
    headerGrid:{
      width:"50%", margin:"auto", marginTop:200, color:"black",padding:100,
      [MUITheme.breakpoints.only("xs")]: {
          margin:"150px auto",
          width:"90%",
          padding:"20px 5px",
          marginBottom:20
        },
  },
  headerGridContainer:{
    maxWidth:1284, margin:"auto"
  },
  logoGrid:{
    [MUITheme.breakpoints.only("xs")]: {
    display:"flex",
justifyContent:"center"
    }
  },
  callUsBtnGrid:{
    display:"flex", justifyContent:"flex-end", alignItems:"center",
    [MUITheme.breakpoints.only("xs")]: {
        display:"flex",
    justifyContent:"center"
        }
  },
  anchor:{
    borderBottom:"none",
    textDecoration:"none",
    color:"black"
  },
  numOneDogTrainerImg:{
   
  },
  mainHeader:{
    color: "#181818",
    fontSize: "2.1875rem",
    fontWeight: 800,
    textAlign:"left",
    marginBottom:0,
    [MUITheme.breakpoints.only("xs")]: {
      textAlign:"center"
      }
    
},
numberGridContainer:{
  background:"white", maxWidth:1248, margin:"auto",display:"flex",justifyContent:"space-around"
},
numbersGridItem:{
  textAlign:"center",
},
numnbersH4:{
  fontSize:24,
  
},
hightLightGidContainer:{
  maxWidth:1284,
  margin:"auto",
  marginTop:100,
  marginBottom:100
},
listGridItem:{
  backgroud:"red"
},
highLightsHeader:{
  fontSize:26,
  fontWeight:900,
  paddingLeft:24
},
tickIcon:{
  color:"#00ABF7",
  fontSize:24,
  margin:"0px 10px"
},
listContainer:{
  padding:24,
  paddingLeft:0
},
lisItem:{
  display:"flex",
  padding:16
},
syllabusGridContainer:{
  maxWidth:1284,
  margin:"auto",
  marginTop:100,
  marginBottom:100
},
syllabusHeader:{
  fontSize:26,
  fontWeight:900,
  paddingLeft:24
},
syllausuImg:{
  [MUITheme.breakpoints.only("xs")]: {
  width:"100%"
  }
},
masterClassContainer:{
  maxWidth:1284,
   margin:"auto",
    display:"block",
  padding:10

},
masterclassdiv:{
  display:"block"
},
masterClassHeader:{
  fontSize:26,
  fontWeight:900
},
masterClassItem:{
  display:"flex",
  padding:16
},
masterClassItemText:{
  fontSize:18,
  fontWeight:600,
},
noOneHeaderLogo:{
  display:"flex", 
  justifyContent:"left",
  [MUITheme.breakpoints.only("xs")]: {
    justifyContent:"center"
    }
},
noOneMainHeader:{
  fontSize:"1.125rem", fontWeight:700, marginBottom:"1.75em",
  textAlign:"left",
  [MUITheme.breakpoints.only("xs")]: {
    textAlign:"center",
    }
},
noOneDesc:{
  fontSize:"1.125rem", fontWeight:400, overflowWrap: "break-word", marginBottom:"1.75em",
  textAlign:"left",
  [MUITheme.breakpoints.only("xs")]: {
    textAlign:"center",
    }
},
limitedSeats:{
  fontStyle:"italic", fontSize:"1.125rem", marginBottom:"1.75em", color:"red", fontWeight:700,
  textAlign:"left",
  [MUITheme.breakpoints.only("xs")]: {
    textAlign:"center",
    }
},
earlyBird:{
  fontStyle:"italic", fontSize:"1.125rem", marginBottom:"1.75em", color:"#0000ff", fontWeight:700,textAlign:"center"
  
},
industryExperts:{
  textAlign:"center",
  [MUITheme.breakpoints.only("xs")]: {
width:"50"
  }
}
    });
