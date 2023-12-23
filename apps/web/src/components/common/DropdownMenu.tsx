import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "../../redux/store";
import { userLogout } from "../../redux/auth/auth.actions";
import { useSelector } from "react-redux";


const DropdownMenu: React.FC = () => {
	const user = useSelector((state:RootState)=>state.auth.user)
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const disptach = useAppDispatch();
	const Navigate = useNavigate();

	const handleDropdownToggle = () => {
		setDropdownOpen(!isDropdownOpen);
	};

	const handleLogout = () => {
		disptach(userLogout());
		Navigate("/auth/login");
	};

	return (
		<div className="relative inline-block text-left">
			<button
				onClick={handleDropdownToggle}
				type="button"
				className="bg-bgNormalButtonGreen p-2 font-semibold text-xs text-white"
			>
				{user?.name}
			</button>

			{isDropdownOpen && (
				<div className="absolute right-0 mt-1 bg-white  shadow-lg ring-1 ring-black ring-opacity-5">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						<Link
							to={ `${user?.role}/profile`}
							className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
							role="menuitem"
							onClick={handleDropdownToggle}
						>
							Profile
						</Link>
						<button
							onClick={handleLogout}
							className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-left"
							role="menuitem"
						>
							Logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;
