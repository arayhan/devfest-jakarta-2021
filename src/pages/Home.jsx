import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { Banner } from "../components/sections/Banner";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { CTA } from "../components/sections/CTA";
import { About } from "../components/sections/About";
import { Streams } from "../components/sections/Streams";
import { Container } from "../components/Container";
import { ROUTES } from "../routes";

export const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Streams />

			<section className="py-24">
				<Container className="space-y-14">
					<div className="space-y-3">
						<h1 className="text-4xl text-blue-700 font-semibold">
							Featured Speakers
						</h1>
						<p className="text-lg text-gray-500">
							Our speakers are influential folks & allies who have been
							associated with communities within their organisations, cities,
							country and beyond.
						</p>
					</div>
					<SpeakersSection featured />

					<div className="flex items-center justify-start">
						<Link
							className="group transition-all px-5 py-2 text-blue-700 rounded-md flex items-center space-x-5 hover:bg-gray-50"
							to={ROUTES.SPEAKERS}
						>
							<span>See All Speakers</span>
							<span className="transition-all transform group-hover:pl-2">
								<FiChevronRight />
							</span>
						</Link>
					</div>
				</Container>
			</section>

			<CTA />
		</div>
	);
};
