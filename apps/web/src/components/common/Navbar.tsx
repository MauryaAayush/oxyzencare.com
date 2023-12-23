import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { Role } from "../../constant/role";

type LinkType = {
	path: string;
	name: string;
};

const Navbar: React.FC = () => {
	const user = useSelector((state: RootState) => state.auth?.user);
	const [isClicked, setIsClicked] = useState<string>("home");

	const handleClick = (value: string) => {
		setIsClicked(value);
	};

	const navLinks: LinkType[] = [
		{
			path: "/",
			name: "home",
		},
		{
			path: "/hospitals",
			name: "hospitals",
		},
		{
			path: "/doctors",
			name: "doctors",
		},
		{
			path: "/cities",
			name: "cities",
		},
		{
			path: "/categories",
			name: "categories",
		},
		{
			path: "/about",
			name: "about",
		},
	];

	return (
		<>
			{navLinks.map((link: LinkType, index: number) => (
				<Link
					key={index}
					onClick={() => handleClick(link.name)}
					to={link.path}
					className={`
            font-semibold
            text-xs
            ${
				isClicked === link.name
					? "text-textGreenFirst"
					: "text-gray-500"
			}`}
				>
					{link.name}
				</Link>
			))}
			{user && user.role !== Role.Patient ? (
				<button className="w-1/2 bg-bgNormalButtonGreen p-2 font-semibold text-xs rounded-full text-white mr-2 md:w-auto uppercase">
					Role : {user?.role}
				</button>
			) : (
				<button className="w-1/2 bg-bgNormalButtonGreen p-2 font-semibold text-xs rounded-full text-white mr-2 md:w-auto ">
					Appointment
				</button>
			)}
		</>
	);
};

export default Navbar;
