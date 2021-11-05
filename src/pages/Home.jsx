import { Banner } from "../components/sections/Banner";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { CTA } from "../components/sections/CTA";
import { About } from "../components/sections/About";
import { Streams } from "../components/sections/Streams";
import { Container } from "../components/Container";

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
				</Container>
			</section>

			<CTA />
		</div>
	);
};
