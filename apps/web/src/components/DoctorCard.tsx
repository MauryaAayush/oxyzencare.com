import React from "react";
import { BiLike } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";

export interface DoctorCardProps {
	image: string;
	name: string;
	specialist: string;
	experience: number; // Corrected type to number
}

const DoctorCard: React.FC<DoctorCardProps> = (props) => {
	const { image, name, specialist, experience } = props;

	return (
		<div className="shadow-lg flex flex-col rounded-md">
			<img className="h-48" src={image} alt="calling-doctor" />
			<div className="p-3">
				<h1 className="font-semibold"> Dr.{name}</h1>
				<p className="text-textGreenFirst">{specialist}</p>
				<p className="text-gray-400 text-sm">
					{experience} Year Experience
				</p>

				<div className="flex justify-between mt-5 ">
					<button className="text-sm flex  items-center">
						<div className="text-xl text-textGreenFirst">
							<TbPointFilled />
						</div>

						<div className="bg-bgNormalButtonGreen text-xs flex items-center p-1 text-white gap-1 rounded-md">
							<BiLike />
							89 %
						</div>
					</button>
					<button className="bg-bgNormalButtonGreen p-1 text-xs text-white rounded-lg">
						Book Appointment
					</button>
				</div>
			</div>
		</div>
	);
};

export default DoctorCard;
