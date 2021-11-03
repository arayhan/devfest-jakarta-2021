import { Banner } from "../components/sections/Banner";
import { Topics } from "../components/sections/Topics";
import { Speakers } from "../components/sections/Speakers";
import { Agenda } from "../components/sections/Agenda";
import { Organizers } from "../components/sections/Organizers";
import { CTA } from "../components/sections/CTA";

export const Home = () => {
	return (
		<div>
			<Banner />
			<Topics />
			<Speakers />
			<Agenda />
			<Organizers />
			<CTA />
		</div>
	);
};
