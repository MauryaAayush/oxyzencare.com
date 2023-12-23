import React from "react";
// import DropdownMenu from "./DropdownMenu"; // Assuming you have the DropdownMenu component

const Profile: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
				<div className="flex items-center justify-center mb-4">
					{/* Replace the image URL with the actual URL of the patient's profile picture */}
					<img
						className="w-16 h-16 rounded-full mr-4"
						src="https://lh3.googleusercontent.com/a/ACg8ocJJxyA7j5EwzHcI2Kv8zboqfahfHnbsgh0ytO5iev4lmw4=s432-c-no"
						alt="patient photo"
					/>
					<div>
						<div className="font-medium text-xl">Shailendra Kumar</div>
						<div className="text-gray-500">Patient ID: 123456</div>
					</div>
				</div>

				<div className="mb-4">
					<div className="font-medium mb-2">Contact Information</div>
					<div className="text-gray-600">patient@example.com</div>
					<div className="text-gray-600">123-456-7890</div>
				</div>

				<div className="mb-4">
					<div className="font-medium mb-2">Medical History</div>
					<ul>
						<li className="mb-2">
							<span className="font-semibold">Condition:</span>{" "}
							Chronic Pain
						</li>
						<li className="mb-2">
							<span className="font-semibold">Medications:</span>{" "}
							Painkillers, Muscle Relaxants
						</li>
					</ul>
				</div>

				<div className="mb-4">
					<div className="font-medium mb-2">Appointments</div>
					<ul>
						<li className="mb-2">
							<span className="font-semibold">Date:</span> January
							15, 2023
						</li>
						<li className="mb-2">
							<span className="font-semibold">Time:</span> 10:00
							AM - 11:00 AM
						</li>
						{/* Add more appointments as needed */}
					</ul>
				</div>

				{/* <div>
					<DropdownMenu />
				</div> */}
			</div>
		</div>
	);
};

export default Profile;
