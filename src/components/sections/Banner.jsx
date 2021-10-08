import ReactPlayer from "react-player";
import { MdCalendarToday, MdLocationPin, MdSchedule } from "react-icons/md";
import { Container } from "../Container";

export const Banner = () => {
	return (
		<div className="py-24">
			<Container className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
				<div className="w-full space-y-8">
					<div className="space-y-3">
						<h1 className="text-3xl ">GDG Devfest 2021 Jakarta</h1>
						<p className="text-xl text-gray-500">
							"How to use technology to recover and boost community engagement
							because of pandemic"
						</p>
					</div>
					<div className="space-y-2">
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdCalendarToday size={20} />
							</div>
							<span className="text-base">27 November 2021</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">2 PM to 4 PM</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdLocationPin size={24} />
							</div>
							<span className="text-base">Live on Youtube</span>
						</div>
					</div>
					<button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
						Register
					</button>
				</div>
				<div className="w-full">
					<div className="rounded-md overflow-hidden">
						<ReactPlayer
							width="100%"
							url="https://www.youtube.com/watch?v=7BqKlQc6-Qc"
						/>
					</div>
				</div>
			</Container>
		</div>
	);
};
