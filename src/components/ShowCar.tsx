import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import CARS, { CarType } from "../data/cars"

interface ShowCarProps {
	car: CarType
	setCar: React.Dispatch<React.SetStateAction<CarType>>
}

function ShowCar({ car,  }: ShowCarProps) {
	const { img,  } = car
	const controls = useAnimation()



	return (
	
			<div  style={{height:"100%"}} >
				<img src={img}  style={{height:"100%", width:"100%"}}/>
				
			</div>
	)
}

export default ShowCar
