import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DropdownMenu from "./DropdownMenu";
import { commonImages } from "../../data/common/images";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const state = useSelector((state: RootState) => state.auth);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className="flex flex-1 fixed w-full top-0 bg-bgCardWhite items-center content-center justify-between p-5 shadow-sm text-textNavLinkNormal max-w-screen-xl">
				<img className="h-9" src={commonImages.company_logo} alt="logo" />
				<div className="hidden justify-between items-center uppercase ml-10 w-3/5 md:flex ">
					<Navbar />
				</div>

				<div className="flex items-center gap-2">
					<button onClick={toggleMenu} className="md:hidden">
						{isMenuOpen ? <RxCross2 /> : <FaBars />}
					</button>
					{state.user ? (
						<DropdownMenu />
					) : (
						<Link
							to={"/auth/login"}
							className="bg-bgNormalButtonGreen p-2 font-semibold text-xs text-white"
						>
							Login
						</Link>
					)}
				</div>
			</div>

			{isMenuOpen && (
				<div className="flex absolute flex-col bg-bgHomeGreenSecond justify-between items-center uppercase gap-5 w-full md:mt-0 md:hidden">
					<Navbar />
				</div>
			)}
		</>
	);
};

export default Header;
