import Header from "./Component/Header";
import profil from "./assets/profil.jpg";
import {
	Card,
	CardBody,
	CardHeader,
	Carousel,
	Chip,
	IconButton,
	Tooltip,
	Typography,
} from "@material-tailwind/react";
import data from "./data.json";
import "./App.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";

function App() {
    const [isMobile, setIsMobile] = React.useState(false);

    useEffect(() => {
        const handleResize = () => {
            let p;
            if(window.innerWidth < 640) {
                p = 1;
            } else if(window.innerWidth < 768) {
                p = 5;
            } else if(window.innerWidth < 1024) {
                p = 7;
            } else {
                p = 8;
            }
            setIsMobile(experienceSize + p * 16 > window.innerWidth);
            console.log(experienceSize, p, p * 16, experienceSize + p * 16, window.innerWidth, experienceSize + p * 16 > window.innerWidth)
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

	const realisation = data.realisation.map((item, j) => (
		<Card
			className="mt-6 my-6 mx-auto lg:w-80 md:w-60 sm:w-80 hover:shadow-xl transition-shadow"
			key={item.name + "_" + j}
		>
			<CardHeader color="white" className="relative border">
				{item.img.length === 1 ? (
					<img
						src={require("./assets/" + item.img[0])}
						alt={item.name}
						className="max-h-72 m-auto"
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
								<ArrowLeftIcon
									className="size-6"
									strokeWidth={2}
									color={firstIndex ? "#d1d5db" : "black"}
								/>
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
								<ArrowRightIcon
									className="size-6"
									strokeWidth={2}
									color={lastIndex ? "#d1d5db" : "black"}
								/>
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

    const experienceSize = data.experience.map((item) => item.date.length * 8).reduce((a, b) => a + b, 0) + 48;

	const experience = data.experience.map((item, j) => {
		let width = item.date.length * 8;
		let width2 = Math.sqrt(2 * 80 ** 2);
		let translateX = (84 * (Math.sqrt(2) - 1)) / Math.sqrt(2);
		return (
			<div
				className={
					"h-full flex " +
					(j % 2 === 0 ? "flex-col" : "flex-col-reverse")
				}
				key={item.name + "_" + j}
			>
				<div
					className={
						"h-1/2 flex " +
						(j % 2 === 0 ? "flex-col" : "flex-col-reverse")
					}
					style={{ width: width + "px" }}
				>
					<div className="flex h-1/2 relative">
						<Tooltip
							placement="right"
							className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
							content={
								<div className="w-80">
									<Typography color="blue-gray" variant="h5">
										{item.name}
									</Typography>
									<Typography color="blue-gray" variant="h6">
										{item.where}
									</Typography>
									<Typography
										color="blue-gray"
										variant="paragraph"
									>
										{item.what}
									</Typography>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal opacity-80"
									>
										{item.desc}
									</Typography>
									{item.special && (
										<Typography
											variant="small"
											color="blue-gray"
											className="font-normal opacity-80 before:content-['✭'] before:mr-1 before:text-yellow-800 after:content-['✭'] after:ml-1 after:text-yellow-800"
										>
											{item.special}
										</Typography>
									)}
								</div>
							}
						>
							<Chip
								size="lg"
								value={item.date}
								className={
									"absolute left-1/2 z-10 text-sm -translate-x-1/2 " +
									(j % 2 === 0
										? "-translate-y-full top-full"
										: "top-0")
								}
							/>
						</Tooltip>
					</div>
					<div className="flex flex-row-reverse h-1/2 relative w-40">
						<div
							className={
								"border-b border-black top-1/2 absolute " +
								(j % 2 === 0 ? "rotate-45" : "-rotate-45")
							}
							style={
								{
									width: width2 + "px",
									"--tw-translate-x": translateX + "px",
								} as React.CSSProperties
							}
						></div>
						<div className={"absolute left-full size-4 bg-white z-10 border-black border-2 rounded-full -translate-y-1/2 " + 
                            (j % 2 === 0 ? "top-full" : "")}>
                        </div>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div className="App">
			<Header />
			<div
				className={
					"max-w-full flex md:p-32 sm:p-20 p-12 md:flex-row flex-col"
				}
				id="qui-suis-je"
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
			<div
				className="flex max-w-full flex-col lg:p-32 md:p-28 sm:p-20 p-4 lg:pt-24 md:pt-20 sm:pt-12 pt-0 sm:!pb-12 !pb-4"
				id="realisation"
			>
				<Typography variant="h2" className="mb-8 ml-8">
					Mes réalisations
				</Typography>
				<div className="max-w-full grid flex-wrap justify-around gap-4 grid-cr items-center">
					{realisation}
				</div>
			</div>
			<div
				className="flex max-w-full flex-col lg:p-32 md:p-28 sm:p-20 p-4 lg:pt-24 md:pt-20 sm:pt-12 pt-0 sm:!pb-12 !pb-4"
				id="xp"
			>
				<Typography variant="h2" className="mb-8 ml-8">
					Mes expériences
				</Typography>
				<div className={"max-w-full h-80 flex flex-row relative w-fit m-auto " + (isMobile ? "none" : "")}>
					{experience}
					<div className="w-12"></div>
					<div className="w-full absolute h-[1px] border-b-2 border-black top-1/2"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
