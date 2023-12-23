import React from "react";
import { BiLike } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";

interface HospitalCardProps {
	hospital_image: string;
	hospital_name: string;
	hospital_specialist: string;
	minCost: number;
}

const HospitalCard: React.FC<HospitalCardProps> = (props) => {
	const { hospital_image, hospital_name, hospital_specialist, minCost } =
		props;

	return (
		<div className="shadow-lg flex flex-col rounded-md">
			<img className="h-48" src={hospital_image} alt="calling-doctor" />
			<div className="p-3">
				<h1 className="font-semibold"> {hospital_name}</h1>
				<p className="text-textGreenFirst">{hospital_specialist}</p>
				<p className="text-gray-400 text-sm">
					₹ {minCost} Consultation Fees
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

export default HospitalCard;
