import ReactPlayer from "react-player";
import { MdDateRange, MdLaunch, MdSchedule } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { Container } from "../Container";

export const About = () => {
	return (
		<div className="py-24">
			<Container className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-20">
				<div className="w-full space-y-10">
					<div className="space-y-6">
						<h1 className="text-4xl font-display font-semibold">
							GDG Devfest 2021 Jakarta
						</h1>
						<p className="text-xl text-gray-500">
							"How to use technology to recover and boost community engagement
							because of pandemic"
						</p>
					</div>
					<div className="space-y-3">
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdDateRange size={24} />
							</div>
							<span className="text-base">26 - 28 November 2021</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<MdSchedule size={24} />
							</div>
							<span className="text-base">2 PM to 4 PM</span>
						</div>
						<div className="flex items-center text-gray-500 space-x-3">
							<div className="w-8 flex justify-center">
								<FaYoutube size={24} />
							</div>
							<span className="text-base">Live on Youtube</span>
						</div>
					</div>
					<a
						className="bg-blue-700 inline-flex items-center rounded-full px-6 py-3 text-sm text-white space-x-3 shadow-md transition-all hover:bg-blue-800 hover:px-8"
						href="https://gdg.community.dev/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="tracking-wider">Register</span>
						<span>
							<MdLaunch size={16} />
						</span>
					</a>
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
