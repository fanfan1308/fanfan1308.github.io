import React from "react";
import {
	Collapse,
	IconButton,
	Navbar,
	Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SiLinkedin } from "@icons-pack/react-simple-icons";
import ft from "../assets/ft.png";

export default function Header() {
	const [openNav, setOpenNav] = React.useState(false);

	const handleWindowResize = () =>
		window.innerWidth >= 960 && setOpenNav(false);

	React.useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const navlist = (
		<ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			{[
				["Qui suis-je?", "qui-suis-je"],
				["Réalisations", "realisation"],
				["Expérience", "xp"],
				["Formation", "formation"],
				["Contact", "contact"],
			].map((item) => (
				<Typography
					as="li"
					variant="small"
					color="blue-gray"
					className="p-1 font-medium"
					key={item[1]}
					placeholder={""}
				>
					<a
						href={"#" + item[1]}
						className="flex items-center hover:text-blue-500 transition-colors"
					>
						{item[0]}
					</a>
				</Typography>
			))}
		</ul>
	);

	return (
		<Navbar
			className={"sticky top-0 z-[51] h-max max-w-full rounded-none"}
			placeholder={""}
		>
			<div className="flex items-center justify-between text-blue-gray-900">
				<div className={"flex"}>
					<img src={ft} className={"h-10 mr-3"} alt="logo" />
					<Typography
						as="a"
						href="#"
						variant="h6"
						className="mr-4 cursor-pointer py-1.5"
						placeholder={""}
					>
						Fany TOLZA
					</Typography>
				</div>
				<div className="hidden lg:block">{navlist}</div>
				<div className="flex">
					<div className="block">
						<a
							href={"https://www.linkedin.com/in/fany-tolza/"}
							target="_blank"
							rel="noreferrer"
						>
							<SiLinkedin color="default" size={"24"} />
						</a>
					</div>
                    <div className="block lg:hidden mx-3"></div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        placeholder={""}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
				</div>
			</div>
			<Collapse open={openNav}>{navlist}</Collapse>
		</Navbar>
	);
}
