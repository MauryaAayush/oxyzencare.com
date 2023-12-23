import React from "react";
import DoctorCard, { DoctorCardProps } from "../../components/DoctorCard";
import { patientImages } from "../../data/patient/images";

const Doctors: React.FC = () => {
	const numberOfElements = 50;
	const newArray = Array.from(
		{ length: numberOfElements },
		(_, index) => index + 1,
	);

	const customProps: DoctorCardProps = {
		image: patientImages.doctor_card_image,
		name: "Shailendra",
		specialist: "Dentist",
		experience: 7,
	};

	return (
		<div className="grid grid-cols-4 gap-6 mt-24 p-16">
			{newArray.map((_, index) => (
				<DoctorCard key={index} {...customProps} />
			))}
		</div>
	);
};

export default Doctors;
