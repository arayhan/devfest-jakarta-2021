import { useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer";
import { ROUTES } from "./routes";
import { Speakers } from "./pages/Speakers";
import { Schedules } from "./pages/Schedules";
import { Organizers } from "./pages/Organizers";

function App() {
	const headerRef = useRef();

	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		setHeaderHeight(headerRef.current ? headerRef.current.clientHeight : 0);
	}, [headerRef]);

	return (
		<div className="App">
			<Header ref={headerRef} />

			<div style={{ marginTop: headerHeight }}>
				<Switch>
					<Route path={ROUTES.SPEAKERS}>
						<Speakers />
					</Route>
					<Route path={ROUTES.SCHEDULES}>
						<Schedules />
					</Route>
					<Route path={ROUTES.ORGANIZERS}>
						<Organizers />
					</Route>
					<Route path={ROUTES.HOME}>
						<Home />
					</Route>
				</Switch>
			</div>

			<Footer />
		</div>
	);
}

export default App;
