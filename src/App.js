import { useState, useRef, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer";
import { ROUTES } from "./routes";
import { Speakers } from "./pages/Speakers";

function App() {
	const headerRef = useRef();

	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		console.log(headerRef);
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
						<Home />
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
