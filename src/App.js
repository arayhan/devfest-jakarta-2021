import { Container } from "./components/Container";
import ReactPlayer from "react-player";

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
							Register
						</a>
					</nav>
				</Container>
			</header>

			<div className="py-20">
				<Container className="flex items-center">
					<div className="space-y-10">
						<div className="space-y-3">
							<h1 className="text-3xl ">GDG Devfest 2021 Jakarta</h1>
							<p className="text-xl text-gray-500">
								"How to use technology to recover and boost community engagement
								because of pandemic"
							</p>
						</div>
						<button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
							Register
						</button>
					</div>
					<div>
						<div className="rounded-md overflow-hidden">
							<ReactPlayer url="https://www.youtube.com/watch?v=7BqKlQc6-Qc" />
						</div>
					</div>
				</Container>
			</div>

			<section className="bg-gray-100 py-20">
				<Container className="space-y-10">
					<div className="max-w-screen-lg mx-auto text-center space-y-3">
						<h1 className="text-3xl text-gray-800">Technologies</h1>
						<p className="text-gray-500 text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque voluptatem, vero iusto quo distinctio nesciunt aut
							obcaecati sunt? Tempore suscipit magnam fugit sint, minima aliquid
							adipisci veniam error quas facilis?
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center text-center">
						<div className="flex flex-col items-center justify-center space-y-6">
							<img
								className="w-28"
								src="https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg"
								alt=""
							/>
							<div className="text-lg text-blue-500">Android</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-6">
							<img
								className="w-28"
								src="https://lirp.cdn-website.com/aa0ef369/dms3rep/multi/opt/google-cloud-icon-400w.png"
								alt=""
							/>
							<div className="text-lg text-blue-500">Google Cloud</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-6">
							<img
								className="w-28"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"
								alt=""
							/>
							<div className="text-lg text-blue-500">Tensorflow</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-6">
							<img
								className="w-28"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/2048px-Google_Chrome_icon_%28September_2014%29.svg.png"
								alt=""
							/>
							<div className="text-lg text-blue-500">Web</div>
						</div>
					</div>
				</Container>
			</section>
		</div>
	);
}

export default App;
