import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/sections/Header";
import { Footer } from "./components/sections/Footer";
import { ROUTES } from "./routes";

function App() {
	return (
		<div className="App">
			<Header />

			<Switch>
				<Route path={ROUTES.HOME}>
					<Home />
				</Route>
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
