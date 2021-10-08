import { Header } from "./components/sections/Header";
import { Banner } from "./components/sections/Banner";
import { Topics } from "./components/sections/Topics";
import { Speakers } from "./components/sections/Speakers";
import { Agenda } from "./components/sections/Agenda";
import { Organizers } from "./components/sections/Organizers";
import { CTA } from "./components/sections/CTA";
import { Footer } from "./components/sections/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Topics />
			<Speakers />
			<Agenda />
			<Organizers />
			<CTA />
			<Footer />
		</div>
	);
}

export default App;
