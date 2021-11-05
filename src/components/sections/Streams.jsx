import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { ROUTES } from "../../routes";
import { Container } from "../Container";
import { StreamCard } from "../StreamCard";

export const Streams = () => {
	return (
		<div className="bg-gray-100 py-16">
			<Container>
				<div className="space-y-14">
					<div className="grid lg:grid-cols-3 gap-6">
						<StreamCard
							thumbnail={require("../../assets/images/banner.png").default}
							day="1"
							topic="Machine Learning Day"
							date="Friday, 26 November 2021"
							time="18:15 - 21:40"
							url="https://gdg.community.dev/"
						/>
						<StreamCard
							thumbnail={require("../../assets/images/banner.png").default}
							day="2"
							topic="Android Day"
							date="Saturday, 27 November 2021"
							time="12:45 - 16:30"
							url="https://gdg.community.dev/"
						/>
						<StreamCard
							day="3"
							thumbnail={require("../../assets/images/banner.png").default}
							topic="Web Day"
							date="Sunday, 28 November 2021"
							time="12:45 - 16:30"
							url="https://gdg.community.dev/"
						/>
					</div>
					<div className="flex items-center justify-start">
						<Link
							className="group transition-all px-5 py-2 text-blue-700 rounded-md flex items-center space-x-5"
							to={ROUTES.SCHEDULES}
						>
							<span>See All Schedules</span>
							<span className="transition-all transform group-hover:pl-2">
								<FiChevronRight />
							</span>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};
