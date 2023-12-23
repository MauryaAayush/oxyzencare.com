

import Calendar from "../../components/Calendar";
import { IoIosStar } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { patientImages } from "../../data/patient/images";
const SingleDoctor: React.FC = () => {
	return (
		<div className="flex flex-col mt-32 items-center  max-w-screen-xl">
			<div className="flex justify-center gap-11 bg-bgCardLightGreen p-6">
				<div className="">
					<img
						className="h-28 rounded-lg"
						src={patientImages.single_doctor_left_image}
						alt="single_doctor_image"
					/>
				</div>
				<div className="w-[600px] gap-2 flex flex-col justify-between">
					<h1 className="font-semibold text-xl">Dr. Shailendra</h1>
					<p>MBBS,MS - General Surgery</p>
					<p>General Surgen</p>
					<p>15 Years Experience Ovarall</p>
					<p>Medical Registration Verified</p>
					<p>95% (60 paitient)</p>
					<p className="text-xs w-[500px]">
						Emergency Care is the backbone of helthcare,providing
						curcial medical treatment to indivisual
						sudden,life-threatning illnesses or injuries
					</p>
					<p className="text-xs text-textGreenFirst text-end underline p-1">
						Share your Story
					</p>
				</div>
			</div>

			<div className="flex flex-col  gap-3 mt-3">
				<div className="flex items-start ">
					<p className="bg-bgCardLightGreen w-44 text-center p-2 font-semibold text-textGreenFirst underline">
						Appointment
					</p>
				</div>
				<div className="bg-bgCardLightGreen">
					<div className="p-4">
						<div className="flex justify-between">
							<div className="flex gap-3 items-center">
								<p className="text-textGreenFirst text-lg">
									<FaRegCalendarCheck />
								</p>

								<p>Clinic appointment</p>
							</div>

							<p className="text-textGreenFirst">₹ 500 fee</p>
						</div>
						<div className="mt-2 ml-8">
							<p className="font-semibold">Moon Mind Care</p>
							<p className="text-xs flex gap-2 items-center">
								<span className="flex text-textGreenFirst">
									<p className="text-sm">
										<IoIosStar />
									</p>

									<p>4.5</p>
								</span>
								<span className="text-textGreenFirst text-base">
									₹500
								</span>
								<span className="italic font-semibold text-gray-600">
									verified detail
								</span>
							</p>
						</div>
					</div>
					<div>
						<Calendar />
					</div>
				</div>
				<div>
					<div>
						<div>
							<p>Today</p>
							<p>8 Slots Available</p>
						</div>
						<div>
							<p>Tommorow</p>
							<p>8 Slots Available</p>
						</div>
						<div>
							<p>Sat,9 Dec</p>
							<p>8 Slots Available</p>
						</div>
					</div>

					<div>
						<h1>Morning(4 Slots)</h1>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div>
						<h1>Evening (4 Slots)</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleDoctor;
