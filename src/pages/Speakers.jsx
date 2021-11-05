import Fade from "react-reveal/Fade";
import { Container } from "../components/Container";
import { SpeakersSection } from "../components/sections/SpeakersSection";

export const Speakers = () => {
	return (
		<div>
			<Container className="py-24 space-y-24">
				<Fade>
					<div className="space-y-3">
						<h1 className="text-6xl font-bold">Speakers.</h1>
						<p className="text-xl text-gray-500">
							Our speakers are influential folks & allies who have been
							associated with communities within their organisations, cities,
							country and beyond.
						</p>
					</div>
					<SpeakersSection />
				</Fade>
			</Container>
		</div>
	);
};
