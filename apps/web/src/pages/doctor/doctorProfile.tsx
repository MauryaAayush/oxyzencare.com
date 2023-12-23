import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const DoctorProfile: React.FC = () => {
    const user = useSelector((state:RootState)=>state.auth.user)
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-10">
			<div className="bg-white shadow-md rounded-lg overflow-hidden w-96 mx-auto p-6">
				<img
					className="w-40 h-40 rounded-full mx-auto mb-4"
					src="https://lh3.googleusercontent.com/a/ACg8ocJJxyA7j5EwzHcI2Kv8zboqfahfHnbsgh0ytO5iev4lmw4=s432-c-no"
					alt="Doctor Profile"
				/>
				<h2 className="text-xl font-bold text-gray-800 text-center mb-2">
					Dr. {user?.name}
				</h2>
				<p className="text-sm text-gray-600 text-center mb-4">
					Cardiologist
				</p>

				<div className="border-t border-b border-gray-200 py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Experience:</span>
						<span className="text-gray-800">10 years</span>
					</div>
				</div>

				<div className="border-b border-gray-200 py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Education:</span>
						<div className="flex flex-col">
							<span className="text-gray-800">
								MD in Cardiology
							</span>
							<span className="text-gray-800">
								MBBS, XYZ University
							</span>
						</div>
					</div>
				</div>

				<div className="border-b border-gray-200 py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Email:</span>
						<span className="text-gray-800">{user?.email}</span>
					</div>
				</div>

				<div className="border-b border-gray-200 py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Phone:</span>
						<span className="text-gray-800">123-456-7890</span>
					</div>
				</div>

				<div className="py-2">
					<div className="flex justify-between items-center">
						<span className="text-gray-600">Availability:</span>
						<span className="text-green-600">Available Now</span>
					</div>
				</div>

				<button className="bg-bgNormalButtonGreen text-white px-4 py-2 rounded-full mt-4 hover:opacity-60 focus:outline-none focus:shadow-outline-blue active:bg-bgFooterGreen">
					Book Appointment
				</button>
			</div>
		</div>
	);
};

export default DoctorProfile;




