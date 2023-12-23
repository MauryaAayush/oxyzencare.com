import React, { useState } from "react";

const Calendar: React.FC = () => {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<string | null>("" || null);

	const daysOfWeek: string[] = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];
	const monthNames: string[] = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const getDaysInMonth = (year: number, month: number): number =>
		new Date(year, month + 1, 0).getDate();

	const getFirstDayOfMonth = (year: number, month: number): number =>
		new Date(year, month, 1).getDay();

	const daysInMonth: number = getDaysInMonth(
		currentDate.getFullYear(),
		currentDate.getMonth(),
	);
	const firstDayOfMonth: number = getFirstDayOfMonth(
		currentDate.getFullYear(),
		currentDate.getMonth(),
	);

	const calendarDays: (number | null)[] = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		calendarDays.push(null);
	}
	for (let i = 1; i <= daysInMonth; i++) {
		calendarDays.push(i);
	}

	const handlePrevMonth = (): void => {
		const newDate = new Date(currentDate);
		newDate.setMonth(currentDate.getMonth() - 1);
		setCurrentDate(newDate);
		setSelectedDate(null); // Reset selected date when changing the month
	};

	const handleNextMonth = (): void => {
		const newDate = new Date(currentDate);
		newDate.setMonth(currentDate.getMonth() + 1);
		setCurrentDate(newDate);
		setSelectedDate(null); // Reset selected date when changing the month
	};

	const handleDateClick = (day: string | number | null): void => {
		if (typeof day === "number") {
			setSelectedDate(day.toString());
		} else {
			setSelectedDate(null);
		}
	};

	return (
		<div className="max-w-screen-xl mt-2 shadow mb-9">
			<div className="flex items-center justify-between mb-4 p-4 bg-bgNormalButtonGreen rounded-t-lg">
				<h2 className="text-lg font-semibold text-white">
					{monthNames[currentDate.getMonth()]}{" "}
					{currentDate.getFullYear()}
				</h2>
				<div className="flex gap-4 font-semibold">
					<button className="" onClick={handlePrevMonth}>
						&lt;
					</button>
					<button className=" " onClick={handleNextMonth}>
						&gt;
					</button>
				</div>
			</div>

			<div className="grid grid-cols-7 p-5 pt-0 gap-4">
				{daysOfWeek.map((day) => (
					<div
						key={day}
						className="text-center text-xs font-semibold text-bgNormalButtonGreen"
					>
						{day}
					</div>
				))}
			</div>

			<div className="grid grid-cols-7 p-5 pt-0 gap-4 w-[450px] h-[220px]">
				{calendarDays.map((day, index) => (
					<div
						key={index}
						className={`text-center w-8 cursor-pointer rounded-full ${
							day === null
								? "text-gray-300"
								: selectedDate === day.toString()
								? "bg-bgNormalButtonGreen text-white"
								: "hover:bg-gray-100"
						}`}
						onClick={() => handleDateClick(day)}
					>
						{day}
					</div>
				))}
			</div>
		</div>
	);
};

export default Calendar;
