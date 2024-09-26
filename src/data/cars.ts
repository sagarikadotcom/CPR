import c1 from "../assets/TTT.png"

export interface CarType {
	img: string
	colors: string[]
}

const CARS: CarType[] = [
	{
		img: c1,
		colors: ["#082739", "#004f97"],
	},
	
]

export default CARS