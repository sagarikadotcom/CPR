import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import ShowCar from "./components/ShowCar"
import CARS, { CarType } from "./data/cars"
import { Button, Grid } from "@mui/material"
import RegistrationForm from "./components/RegistrationForm"
function App() {
	const [car, setCar] = useState<CarType>(CARS[0])
	const { colors } = car
	const controls = useAnimation()

	useEffect(() => {
		// Fetch all images
		const loadImages = async () => {
			await Promise.all(
				CARS.map((car) => {
					const img = new Image()
					img.src = car.img
					return img
				})
			)
		}
		loadImages()
	}, [])

	useEffect(() => {
		controls.start("animate")
	}, [car, controls])

	return (
		<>
		<Grid container  spacing={4}style={{ height:"100vh"}}>
<Grid item xs={12} sm={12}md={6} lg={6} style={{height:"100%"}}>
	<ShowCar car={car} setCar={setCar} /></Grid>

	
		<Grid item xs={12} sm={12}md={6} lg={6} style={{background: `radial-gradient(circle, rgb(255, 255, 255) 11%, rgb(4, 62, 111) 86%)	`}}>
			<div style={{margin:"1rem", padding:"1rem", height:"100%"}}>
			<RegistrationForm/>

			</div>
		</Grid>
			
		</Grid>
			
		
	
		</>
		
	)
}

export default App
