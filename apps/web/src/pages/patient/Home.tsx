import { patientImages } from "../../data/patient/images";

const Home: React.FC = () => {
	console.log(patientImages)
	return (
		<>
			<div className="flex flex-col bg-bgHomeGreenSecond mt-[70px] justify-around max-w-screen-xl md:flex-row">
				<div className="w-full font-sans p-4 sm:p-16 mt-0 md:mt-32 md:w-2/4">
					<h1
						className=" text-xl sm:text-xl  uppercase font-rubik text-textGreenFirst"
						style={{ letterSpacing: "3px" }}
					>
						welcome to Oxyzen
					</h1>
					<h1 className="text-3xl text-textNormalBlack  mt-6 font-rubik  sm:text-4xl w-96">
						We Are Here to Hear
					</h1>
					<h1 className="text-3xl text-textNormalBlack  font-rubik  sm:text-4xl w-96">
						and Heal Your
					</h1>
					<h1 className="text-3xl text-textNormalBlack  font-rubik  sm:text-4xl w-96">
						Help Problems
					</h1>

					<div className="mt-14 ml-0 sm:ml-0 flex gap-5">
						<button className="bg-bgNormalButtonGreen text-sm  text-white p-2 pl-4 pr-4 rounded-full">
							Get Started
						</button>
						<button className="border-bgFooterButton text-sm font-semibold border-2 text-textNormalBlack p-2 pl-4 pr-4 rounded-full">
							Contact Us
						</button>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center md:items-end md:justify-end  ">
					<img
						className="w-52  sm:h-5/6  sm:w-2/5 md:w-full"
						src={patientImages.home_happy_standing_doctor}
						alt="happy-doctor-image"
					/>
				</div>
			</div>
			<div className=" flex flex-col items-center justify-around h-96 sm:h-fit bg-bgFooterGreen   max-w-screen-xl  sm:flex-row">
				<div className="flex h-52 items-center gap-3 w-80">
					<div className="bg-white p-3 rounded-full ">
						<img
							className="h-10 w-24"
							src={patientImages.home_doctor_icon}
							alt="doctor-icon"
						/>
					</div>
					<div className="flex flex-col justify-between text-white h-20">
						<h1 className="text-xl font-semibold">
							Expert Doctors
						</h1>
						<p className="text-xs font-semibold">
							They are always answerable to consultant.This is the
							lowest level of doctor in the hirarcy
						</p>
					</div>
				</div>

				<div className="flex h-52 items-center justify-between gap-3 w-80">
					<div className="bg-white p-3 rounded-full">
						<img
							className="h-10 w-32"
							src={patientImages.home_hospital_icon}
							alt="doctor-icon"
						/>
					</div>
					<div className="flex flex-col justify-between text-white h-20">
						<h1 className="text-xl font-semibold">
							Emergency Care
						</h1>
						<p className="text-xs font-semibold">
							Emergency Care is the backbone of
							helthcare,providing curcial medical treatment to
							indivisual sudden,life-threatning illnesses or
							injuries
						</p>
					</div>
				</div>

				<div className="flex h-52 items-center gap-3 w-80">
					<div className="bg-white p-3 rounded-full">
						<img
							className="h-10 w-24"
							src={patientImages.home_call_icon}
							alt="doctor-icon"
						/>
					</div>
					<div className="flex flex-col justify-between text-white h-20">
						<h1 className="text-xl font-semibold">
							24/7 Full Support
						</h1>
						<p className="text-xs font-semibold">
							Helplines are often available 24/7 so you can
							contact them at any time of the day or night.
						</p>
					</div>
				</div>
			</div>

			<div className="max-w-screen-xl flex justify-center gap-24 p-6 border-bgBorder border-b-2 mb-3">
				<div className="flex justify-around p-7 gap-4">
					<img
						className="h-[350px]"
						src={patientImages.home_young_women_doctor}
						alt="young-women-doctor"
					/>
					<img
						className="h-[350px] mt-6"
						src={patientImages.home_doctor_discussion}
						alt="doctors-discussion"
					/>
				</div>
				<div className="p-7 max-w-lg flex flex-col justify-around">
					<h1
						className=" text-xl uppercase text-textGreenFirst"
						style={{ letterSpacing: "3px" }}
					>
						About Oxizen
					</h1>
					<h1 className="text-3xl font-semibold">
						We Colaborate for Better Helthcare
					</h1>
					<p className="text-xs font-semibold text-textNormalGray">
						I apologize for any confusion. It seems there was a
						misunderstanding. The code I provided is the same as the
						one you shared. It looks correct, and it should work as
						intended.
					</p>

					<div className="flex justify-between">
						<div className="w-56">
							<h1 className="font-semibold">Our Vision</h1>
							<p className="text-xs font-semibold text-textNormalGray">
								The code I provided is the same as the one you
								shared. It looks correct, and it should work as
								intended.
							</p>
						</div>
						<div className="w-56">
							<h1 className="font-semibold">Our Mission</h1>
							<p className="text-xs font-semibold text-textNormalGray">
								The code I provided is the same as the one you
								shared. It looks correct, and it should work as
								intended.
							</p>
						</div>
					</div>
					<button className="bg-bgNormalButtonGreen text-sm font-semibold text-white p-2 pl-4 pr-4 w-32 rounded-full">
						Learn More
					</button>
				</div>
			</div>

			{/* ---------------------------------------------------------------------- */}

			<div className=" max-w-screen-xl flex flex-col  p-10  mb-3 border-b-bgBorder border-b-2">
				<h1
					className=" text-xl uppercase text-textGreenFirst"
					style={{ letterSpacing: "3px" }}
				>
					Our Services
				</h1>
				<h1 className="text-3xl font-semibold">
					Amazing Medical Facilities Just for You
				</h1>

				<div className="grid grid-flow-col grid-rows-6 md:grid-rows-2  sm:grid-rows-3 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
					<div className="bg-bgCardLightGreen p-8  flex flex-col justify-around gap-3">
						<div className="bg-white w-16 h-14 p-2 rounded-full flex items-center justify-center">
							<img
								className=" h-8 "
								src={patientImages.home_medicine_icon}
								alt="medicine-icon"
							/>
						</div>

						<h1 className="font-semibold">Pharmacy Service</h1>
						<p className="text-xs font-semibold text-textNormalGray">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>
						<p className="text-bgNormalButtonGreen font-semibold text-xs">
							Learn More &rarr;
						</p>
					</div>

					<div className="bg-bgCardLightGreen p-8  flex flex-col justify-around gap-3">
						<div className="bg-white w-16 h-14 p-2 rounded-full flex items-center justify-center">
							<img
								className=" h-8"
								src={patientImages.home_medicine_icon}
								alt="medicine-icon"
							/>
						</div>

						<h1 className="font-semibold">Helth Constituation</h1>
						<p className="text-xs font-semibold text-textNormalGray">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>
						<p className="text-bgNormalButtonGreen font-semibold text-xs">
							Learn More &rarr;
						</p>
					</div>

					<div className="bg-bgCardLightGreen p-8 flex flex-col justify-around gap-3">
						<div className="bg-white w-16 h-14 p-2 rounded-full flex items-center justify-center">
							<img
								className=" h-8"
								src={patientImages.home_medicine_icon}
								alt="medicine-icon"
							/>
						</div>

						<h1 className="font-semibold">Medical Specialist</h1>
						<p className="text-xs font-semibold text-textNormalGray">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>
						<p className="text-bgNormalButtonGreen font-semibold text-xs">
							Learn More &rarr;
						</p>
					</div>

					<div className="bg-bgCardLightGreen p-8  flex flex-col justify-around gap-3">
						<div className="bg-white w-16 h-14 p-2 rounded-full flex items-center justify-center">
							<img
								className=" h-8"
								src={patientImages.home_medicine_icon}
								alt="medicine-icon"
							/>
						</div>

						<h1 className="font-semibold">Ambulance Service</h1>
						<p className="text-xs font-semibold text-textNormalGray">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>
						<p className="text-bgNormalButtonGreen font-semibold text-xs">
							Learn More &rarr;
						</p>
					</div>

					<div className="bg-bgCardLightGreen p-8  flex flex-col justify-around gap-3">
						<div className="bg-white w-16 h-14 p-2 rounded-full flex items-center justify-center">
							<img
								className=" h-8"
								src={patientImages.home_medicine_icon}
								alt="medicine-icon"
							/>
						</div>

						<h1 className="font-semibold">Medical Checkup</h1>
						<p className="text-xs font-semibold text-textNormalGray">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>
						<p className="text-bgNormalButtonGreen font-semibold text-xs">
							Learn More &rarr;
						</p>
					</div>

					<div className="bg-bgCardLightGreen p-8  flex flex-col justify-around gap-3">
						<div className="bg-white w-16 h-14 p-2 rounded-full flex items-center justify-center">
							<img
								className=" h-8"
								src={patientImages.home_medicine_icon}
								alt="medicine-icon"
							/>
						</div>

						<h1 className="font-semibold">Helth Assurance</h1>
						<p className="text-xs font-semibold text-textNormalGray">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>
						<p className="text-bgNormalButtonGreen font-semibold text-xs">
							Learn More &rarr;
						</p>
					</div>
				</div>

				<div
					className=" flex justify-end p-12 mt-24 "
					style={{
						backgroundImage: `url(${patientImages.home_doctor_bg_image})`,
					}}
				>
					<div className="bg-bgFooterGreen flex flex-col justify-between text-white h-[500px] w-[400px] rounded-md p-10 items-start">
						<h1
							className="uppercase text-white"
							style={{ letterSpacing: "3px" }}
						>
							Working Hours
						</h1>
						<h1 className="font-semibold text-xl">
							Helthcare at its Finest
						</h1>
						<p className="text-xs font-semibold text-gray-200">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>
						<div className="flex  items-center gap-3 border-b-2 pb-2 border-bgBorder">
							<p className="text-lg"> Mon - Wed</p>
							<p className="text-lg"> 7Am - 11Pm</p>
							<button className="bg-bgFooterButton p-1 pl-3 pr-3 text-sm rounded-full border-2 border-bgBorder">
								Book Now
							</button>
						</div>

						<div className="flex  items-center gap-3 border-b-2 pb-2 border-bgBorder">
							<p className="text-lg"> Mon - Wed</p>{" "}
							<p className="text-lg"> 7Am - 11Pm</p>
							<button className="bg-bgFooterButton p-1 pl-3 pr-3 text-sm rounded-full border-2 border-bgBorder">
								Book Now
							</button>
						</div>

						<div className="flex  items-center gap-3 border-b-2 pb-2 border-bgBorder">
							<p className="text-lg"> Mon - Wed</p>{" "}
							<p className="text-lg"> 7Am - 11Pm</p>
							<button className="bg-bgFooterButton p-1 pl-3 pr-3 text-sm rounded-full border-2 border-bgBorder">
								Book Now
							</button>
						</div>

						<div className="flex  items-center gap-3 border-b-2 pb-2 border-bgBorder">
							<p className="text-lg"> Mon - Wed</p>{" "}
							<p className="text-lg"> 7Am - 11Pm</p>
							<button className="bg-bgFooterButton p-1 pl-3 pr-3 text-sm rounded-full border-2 border-bgBorder">
								Book Now
							</button>
						</div>

						<button className="bg-bgFooterButton p-1 pl-4 pr-4 text-sm  rounded-full border-2 border-bgBorder">
							Make an Appointment
						</button>
					</div>
				</div>
			</div>

			<div className="p-10 border-b-2 border-b-bgBorder ">
				<div className="flex justify-center gap-10 ">
					<img
						className="h-[600px] rounded-lg"
						src={patientImages.home_calling_doctor_image}
						alt="calling-doctor-image"
					/>

					<div className="w-[500px] flex flex-col items-start justify-between">
						<h1
							className=" text-lg uppercase  text-textGreenFirst"
							style={{ letterSpacing: "3px" }}
						>
							Appointment
						</h1>
						<h1 className="text-4xl ">
							Amazing Medical Facilities Just for You
						</h1>
						<p className="text-xs  text-textNormalGray w-80">
							I apologize for any confusion. It seems there was a
							misunderstanding. The code I provided is the same as
							the one you shared. It looks correct, and it should
							work as intended.
						</p>

						<form className=" flex flex-col  w-[350px] mt-2 justify-between gap-2">
							<div>
								<span className="text-sm">Your Name</span>
								<span className="text-bgNormalButtonGreen">
									*
								</span>
							</div>

							<input
								className="outline-none border-2 p-2 pl-5 pr-5 mt-2  rounded-lg border-gray-300 placeholder:text-gray-300 text-sm"
								type="text"
								name=""
								placeholder="Your Name"
								id=""
							/>

							<div>
								<span className="text-sm">Phone</span>
								<span className="text-bgNormalButtonGreen">
									*
								</span>
							</div>

							<input
								className="outline-none border-2 p-2 pl-5 pr-5 mt-2  rounded-lg w-44 border-gray-300 placeholder:text-gray-300 text-sm"
								type="text"
								name=""
								placeholder="+91 7518078980"
								id=""
							/>

							<div className="flex  justify-between">
								<div className="flex flex-col ">
									<div>
										<span className="text-sm">Date</span>
										<span className="text-bgNormalButtonGreen">
											*
										</span>
									</div>

									<input
										className="outline-none border-2 p-2 pl-5 pr-5 mt-2  rounded-lg w-40 border-gray-300 placeholder:text-gray-300 text-sm"
										type="text"
										name=""
										placeholder="Select Date"
										id=""
									/>
								</div>

								<div className="flex flex-col">
									<div>
										<span className="text-sm">Time</span>
										<span className="text-bgNormalButtonGreen">
											*
										</span>
									</div>

									<input
										className="outline-none border-2 p-2 pl-5 pr-5 mt-2  rounded-lg w-40 border-gray-300 placeholder:text-gray-300 text-sm"
										type="text"
										name=""
										placeholder="Select Time"
										id=""
									/>
								</div>
							</div>

							<div>
								<span className="text-sm">Message</span>
							</div>

							<input
								className="outline-none border-2 p-2 pl-5 pr-5 mt-2  rounded-lg border-gray-300 placeholder:text-gray-300 text-sm"
								type="text"
								name=""
								placeholder="Hello There !"
								id=""
							/>
						</form>
						<button className="bg-bgNormalButtonGreen p-2 pl-4 pr-4 text-sm  rounded-full border-2 border-bgBorder text-white">
							Make an Appointment
						</button>
					</div>
				</div>
			</div>

			<div className="p-10  flex flex-col justify-between items-center gap-11 ">
				<h1
					className=" text-lg uppercase  text-textGreenFirst"
					style={{ letterSpacing: "3px" }}
				>
					Appointment
				</h1>

				<h1 className="text-4xl w-[500px] text-center">
					Amazing Medical Facilities Just for You
				</h1>

				<div className="flex gap-5">
					<div>
						<img
							className="h-56"
							src={patientImages.home_card_doctor_image}
							alt=""
						/>
						<h1 className="mt-3">James Samuels</h1>
						<p className="text-sm text-textNormalGray">
							Pediatrics
						</p>
					</div>

					<div>
						<img
							className="h-56"
							src={patientImages.home_card_doctor_image}
							alt=""
						/>
						<h1 className="mt-3">James Samuels</h1>
						<p className="text-sm text-textNormalGray">
							Pediatrics
						</p>
					</div>

					<div>
						<img
							className="h-56"
							src={patientImages.home_card_doctor_image}
							alt=""
						/>
						<h1 className="mt-3">James Samuels</h1>
						<p className="text-sm text-textNormalGray">
							Pediatrics
						</p>
					</div>

					<div>
						<img
							className="h-56"
							src={patientImages.home_card_doctor_image}
							alt=""
						/>
						<h1 className="mt-3">James Samuels</h1>
						<p className="text-sm text-textNormalGray">
							Pediatrics
						</p>
					</div>
				</div>
			</div>

			<div className=" flex bg-bgFooterGreen mt-6 justify-center max-w-screen-xl mb-4 h-[300px]">
				<div className=" p-6 w-[500px]">
					<h1
						className=" text-lg  uppercase font-rubik text-white"
						style={{ letterSpacing: "3px" }}
					>
						welcome to Oxyzen
					</h1>
					<h1 className="text-3xl text-white  font-rubik w-[500px]">
						We Are Here to Hear and Heal Your Help Problems
					</h1>

					<p className="text-sm text-gray-200 w-80">
						I apologize for any confusion. It seems there was a
						misunderstanding. The code I provided is the same as the
						one you shared.
					</p>
					<div className="mt-6 ml-0 sm:ml-0 flex gap-5">
						<button className="bg-white text-sm  text-black p-2 pl-4 pr-4 rounded-full">
							Get Started
						</button>
						<button className="border-bgBorder text-sm  border-2 text-white p-2 pl-4 pr-4 rounded-full">
							Contact Us
						</button>
					</div>
				</div>
				<div className="flex items-end">
					<img
						className="h-[330px] "
						src={patientImages.home_happy_standing_doctor}
						alt="happy-doctor-image"
					/>
				</div>
			</div>

			<div className="flex justify-center items-center p-14 gap-5">
				<div className="h-[300px] w-[250px] flex flex-col shadow-md rounded-md ">
					<img className="h-[170px]" src={patientImages.home_card_doctor_image} alt="" />
					<div className="p-3 flex flex-col ">
						<p
							className="text-xs text-textGreenFirst uppercase "
							style={{ letterSpacing: "3px" }}
						>
							september 20,2023
						</p>
						<h1 className="font-semibold text-sm mt-2">
							Can creatine supplements help people
						</h1>
						<p className="text-xs text-gray-400 mt-2">
							I apologize for any confusion. It seems there was a
						</p>
					</div>
				</div>
				<div className="h-[300px] w-[250px] flex flex-col shadow-md rounded-md">
					<img className="h-[170px]" src={patientImages.home_card_doctor_image} alt="" />
					<div className="p-3 flex flex-col ">
						<p
							className="text-xs text-textGreenFirst uppercase "
							style={{ letterSpacing: "3px" }}
						>
							september 20,2023
						</p>
						<h1 className="font-semibold text-sm mt-2">
							Can creatine supplements help people
						</h1>
						<p className="text-xs text-gray-400 mt-2">
							I apologize for any confusion. It seems there was a
						</p>
					</div>
				</div>
				<div className="h-[300px] w-[250px] flex flex-col shadow-md rounded-md">
					<img className="h-[170px]" src={patientImages.home_card_doctor_image} alt="" />
					<div className="p-3 flex flex-col ">
						<p
							className="text-xs text-textGreenFirst uppercase "
							style={{ letterSpacing: "3px" }}
						>
							september 20,2023
						</p>
						<h1 className="font-semibold text-sm mt-2">
							Can creatine supplements help people
						</h1>
						<p className="text-xs text-gray-400 mt-2">
							I apologize for any confusion. It seems there was a
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
