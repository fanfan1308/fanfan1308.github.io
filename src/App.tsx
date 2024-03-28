import Header from "./Component/Header";
import profil from "./assets/profil.jpg";
import {
	Card,
	CardBody,
	CardHeader,
	Carousel,
	IconButton,
	Typography,
} from "@material-tailwind/react";
import data from "./data.json";
import "./App.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

function App() {
	const realisation = data.realisation.map((item) => (
		<Card
			className="mt-6 my-6 mx-auto lg:w-80 md:w-60 sm:w-80 hover:shadow-xl transition-shadow"
			key={item.name}
		>
			<CardHeader color="white" className="relative border-[1px]">
				{item.img.length === 1 ? (
					<img
						src={require("./assets/" + item.img[0])}
						alt={item.name}
                        className="max-h-72"
					/>
				) : (
					<Carousel
						prevArrow={({ handlePrev, firstIndex }) => (
							<IconButton
								variant="text"
								size="lg"
								onClick={handlePrev}
								className="!absolute top-2/4 left-4 -translate-y-2/4"
							>
								<ArrowLeftIcon className="h-6 w-6" strokeWidth={2} color={firstIndex ? "#d1d5db" : "black"}/>
							</IconButton>
						)}
						nextArrow={({ handleNext, lastIndex }) => (
							<IconButton
								variant="text"
								color="black"
								size="lg"
								onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
							>
								<ArrowRightIcon className="h-6 w-6" strokeWidth={2}  color={lastIndex ? "#d1d5db" : "black"}/>
							</IconButton>
						)}
                        className="items-center"
					>
						{item.img.map((img, i) => (
							<img
								src={require("./assets/" + img)}
								alt={item.name + "_" + i}
								key={item.name + "_" + i}
                                className="max-h-72 m-auto"
							/>
						))}
					</Carousel>
				)}
			</CardHeader>
			<CardBody>
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{item.name}
				</Typography>
				<Typography>{item.desc}</Typography>
			</CardBody>
		</Card>
	));

	return (
		<div className="App">
			<Header />
			<div
				className={
					"max-w-full flex md:p-32 sm:p-20 p-12 md:flex-row flex-col"
				}
			>
				<div className="h-fit md:my-auto sm:mr-10 self-center mb-10">
					<img
						src={profil}
						className="md:max-h-[50rem] lg:max-h-96 max-h-80 rounded-lg"
						alt="profil"
					/>
				</div>
				<div className={"flex flex-col m-auto"}>
					<Typography variant="h2" className="mb-5">
						Qui suis-je ?
					</Typography>
					<Typography variant="lead">
						Moi, c'est Fany, étudiante en communication actuellement
						en 5ᵉ année de Bachelor à Sup’ de Com Montpellier 😀
					</Typography>
				</div>
			</div>
			<div className="max-w-full grid lg:p-32 md:p-28 sm:p-20 p-4 flex-wrap justify-around gap-4 grid-cr items-center">
				{realisation}
			</div>
		</div>
	);
}

export default App;
