import { Banner } from "../components/sections/Banner";
import { Topics } from "../components/sections/Topics";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { Agenda } from "../components/sections/Agenda";
import { Organizers } from "../components/sections/Organizers";
import { CTA } from "../components/sections/CTA";
import { About } from "../components/sections/About";
import { Streams } from "../components/sections/Streams";

export const Home = () => {
	return (
		<div>
			<Banner />
			<About />
			<Streams />
			<SpeakersSection />
			<CTA />
		</div>
	);
};
