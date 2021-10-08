import { Container } from "./components/Container";

function App() {
	return (
		<div className="App">
			<header className="shadow-md py-5">
				<Container className="flex items-center justify-between">
					<div>
						<a href="#">
							<img
								className="w-28"
								src={require("./assets/images/gdg-logo.png").default}
								alt="GDG Logo"
							/>
						</a>
					</div>
					<nav>
						<a
							className="text-gray-500 hover:text-blue-800 transition-all py-5"
							href="#"
						>
							Registration
						</a>
					</nav>
				</Container>
			</header>
		</div>
	);
}

export default App;
