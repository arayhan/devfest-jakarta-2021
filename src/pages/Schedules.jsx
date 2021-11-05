import { useState, useEffect } from "react";
import { Container } from "../components/Container";
import { Agenda } from "../components/sections/Agenda";
import ScheduleData from "../data/schedules.json";

export const Schedules = () => {
	const TABS_LABEL = ScheduleData.map((schedule) => schedule.label);

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [activeSchedule, setActiveSchedule] = useState(
		ScheduleData[activeTabIndex]
	);

	useEffect(() => {
		setActiveSchedule(ScheduleData[activeTabIndex]);
	}, [activeTabIndex]);

	return (
		<div>
			<Container className="py-24 space-y-12">
				<div className="space-y-3">
					<h1 className="text-6xl font-bold">Schedules.</h1>
					<p className="text-xl text-gray-500">
						Follow code demonstrations by our expert speakers on 3 different
						tracks. Check out the schedule below and don't forget to mark your
						calendar so that you don't miss out on any sessions.
					</p>
				</div>
				<div className="flex border-b overflow-x-auto">
					{TABS_LABEL.map((tab, index) => (
						<button
							className={`border-b-2 hover:bg-gray-50 px-8 py-3 transition-all ${
								index === activeTabIndex
									? "border-blue-700 text-blue-700 font-semibold"
									: "border-transparent text-gray-500"
							}`}
							onClick={() => setActiveTabIndex(index)}
						>
							{tab}
						</button>
					))}
				</div>

				<div className="text-center font-semibold text-3xl">
					{activeSchedule.topic} Day
				</div>

				<Agenda agendas={activeSchedule.agenda} />
			</Container>
		</div>
	);
};
