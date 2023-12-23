import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const AdminProfile: React.FC= () => {
const user = useSelector((state:RootState)=>state.auth.user)

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="bg-white shadow-md rounded-lg overflow-hidden w-80 mx-auto p-4">
				<img
					className="w-32 h-32 rounded-full mx-auto mb-4"
					src="https://lh3.googleusercontent.com/a/ACg8ocJJxyA7j5EwzHcI2Kv8zboqfahfHnbsgh0ytO5iev4lmw4=s432-c-no"
					alt="Admin Profile"
				/>
				<h2 className="text-xl font-bold text-gray-800 text-center mb-2">
					{user?.name}
				</h2>
				<p className="text-sm text-gray-600 text-center mb-4">
					Healthcare Administrator
				</p>

				<div className="border-t border-b border-gray-200 py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Email:</span>
						<span className="text-gray-800">{user?.email}</span>
					</div>
				</div>

				<div className="border-b border-gray-200 py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Phone:</span>
						<span className="text-gray-800">
							{user?.phone_number}
						</span>
					</div>
				</div>

				<div className="py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Role:</span>
						<span className="text-gray-800">{user?.role}</span>
					</div>
				</div>

				<button className="bg-bgNormalButtonGreen text-white px-4 py-2 rounded-full mt-4 hover:opacity-70 focus:outline-none focus:shadow-outline-blue active:bg-bgFooterGreen">
					Edit Profile
				</button>
			</div>
		</div>
	);
};

export default AdminProfile;
