import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer";
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
