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
					<div className="flex flex-wrap justify-center">
						<StreamCard />
						<StreamCard />
						<StreamCard />
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
