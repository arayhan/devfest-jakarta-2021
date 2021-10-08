import ReactPlayer from "react-player";
import { MdCalendarToday, MdLocationPin, MdSchedule } from "react-icons/md";
import { Container } from "./components/Container";
import { SpeakerCard } from "./components/SpeakerCard";

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

			<div className="py-24">
				<Container className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
					<div className="w-full space-y-8">
						<div className="space-y-3">
							<h1 className="text-3xl ">GDG Devfest 2021 Jakarta</h1>
							<p className="text-xl text-gray-500">
								"How to use technology to recover and boost community engagement
								because of pandemic"
							</p>
						</div>
						<div className="space-y-2">
							<div className="flex items-center text-gray-500 space-x-3">
								<div className="w-8 flex justify-center">
									<MdCalendarToday size={20} />
								</div>
								<span className="text-base">27 November 2021</span>
							</div>
							<div className="flex items-center text-gray-500 space-x-3">
								<div className="w-8 flex justify-center">
									<MdSchedule size={24} />
								</div>
								<span className="text-base">2 PM to 4 PM</span>
							</div>
							<div className="flex items-center text-gray-500 space-x-3">
								<div className="w-8 flex justify-center">
									<MdLocationPin size={24} />
								</div>
								<span className="text-base">Live on Youtube</span>
							</div>
						</div>
						<button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
							Register
						</button>
					</div>
					<div className="w-full">
						<div className="rounded-md overflow-hidden">
							<ReactPlayer
								width="100%"
								url="https://www.youtube.com/watch?v=7BqKlQc6-Qc"
							/>
						</div>
					</div>
				</Container>
			</div>

			<section className="bg-gray-100 py-24">
				<Container className="space-y-14">
					<div className="max-w-screen-lg mx-auto text-center space-y-6">
						<h1 className="text-3xl text-blue-700 font-semibold">
							Technologies
						</h1>
						<p className="text-gray-500 text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Doloremque voluptatem, vero iusto quo distinctio nesciunt aut
							obcaecati sunt? Tempore suscipit magnam fugit sint, minima aliquid
							adipisci veniam error quas facilis?
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
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

			<section className="py-24">
				<Container className="space-y-10">
					<div className="space-y-3">
						<h1 className="text-3xl text-blue-700 font-semibold">
							Featured Speakers
						</h1>
						<p className="text-lg text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							maiores laborum blanditiis earum rerum inventore atque soluta
							suscipit unde pariatur repudiandae numquam cum omnis laudantium
							doloribus, velit non dolorum? Sapiente.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
					</div>
				</Container>
			</section>

			<section className="bg-blue-500 py-24">
				<Container className="space-y-10">
					<div className="space-y-3">
						<h1 className="text-3xl text-white font-semibold">Agenda</h1>
						<p className="text-lg text-gray-200">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							maiores laborum blanditiis earum rerum inventore atque soluta
							suscipit unde pariatur repudiandae numquam cum omnis laudantium
							doloribus, velit non dolorum? Sapiente.
						</p>
					</div>
					<div className="grid lg:grid-cols-3 gap-8 text-white text-lg">
						<div>
							<div className="font-semibold border-white border-opacity-50 border-b py-3">
								Day 1
							</div>
							<div>
								<div className="flex py-3">
									<div className="w-48">10:00 - 11:00</div>
									<div className="w-full">
										<div className="text-xl text-white font-semibold">
											Registration
										</div>
									</div>
								</div>
								<div className="flex py-3">
									<div className="w-48">10:00 - 11:00</div>
									<div className="w-full">
										<div className="text-xl text-white font-semibold">
											Jetpack Compose: Modern UI Framework in Android
										</div>
										<div className="italic">Muh. Rahmatullah</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="font-semibold border-white border-opacity-50 border-b py-3">
								Day 2
							</div>
							<div>
								<div className="flex py-3">
									<div className="w-48">10:00 - 11:00</div>
									<div className="w-full">
										<div className="text-xl text-white font-semibold">
											Registration
										</div>
									</div>
								</div>
								<div className="flex py-3">
									<div className="w-48">10:00 - 11:00</div>
									<div className="w-full">
										<div className="text-xl text-white font-semibold">
											Jetpack Compose: Modern UI Framework in Android
										</div>
										<div className="italic">Muh. Rahmatullah</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="font-semibold border-white border-opacity-50 border-b py-3">
								Day 3
							</div>
							<div>
								<div className="flex py-3">
									<div className="w-48">10:00 - 11:00</div>
									<div className="w-full">
										<div className="text-xl text-white font-semibold">
											Registration
										</div>
									</div>
								</div>
								<div className="flex py-3">
									<div className="w-48">10:00 - 11:00</div>
									<div className="w-full">
										<div className="text-xl text-white font-semibold">
											Jetpack Compose: Modern UI Framework in Android
										</div>
										<div className="italic">Muh. Rahmatullah</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<section className="py-24">
				<Container className="space-y-10">
					<div className="space-y-3">
						<h1 className="text-3xl text-blue-700 font-semibold">Organizers</h1>
						<p className="text-lg text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							maiores laborum blanditiis earum rerum inventore atque soluta
							suscipit unde pariatur repudiandae numquam cum omnis laudantium
							doloribus, velit non dolorum? Sapiente.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
						<SpeakerCard />
					</div>
				</Container>
			</section>

			<section className="py-24 bg-gray-100">
				<Container className="space-y-10 text-center">
					<div className="space-y-3">
						<h1 className="text-3xl text-blue-700 font-semibold">
							Get notified about the important conference updates
						</h1>
						<p className="text-lg text-gray-500">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
							maiores laborum blanditiis earum rerum inventore atque soluta
							suscipit unde pariatur repudiandae numquam cum omnis laudantium
							doloribus, velit non dolorum? Sapiente.
						</p>
					</div>
					<div>
						<a
							className="bg-blue-500 px-8 py-3 rounded-md text-white"
							href="https://gdg.community.dev/devfest/"
							target="_blank"
							rel="noreferrer"
						>
							Learn more about DevFest
						</a>
					</div>
				</Container>
			</section>

			<footer>
				<div className="bg-blue-700">
					<Container className="text-center space-x-3 text-white py-10">
						<a href="https://developers.google.com/community/gdg/organizers#community-guidelines">
							Code of Conduct
						</a>
						<a href="https://developers.google.com/community-guidelines">
							Community Guidelines
						</a>
					</Container>
				</div>
				<div className="bg-blue-800">
					<Container className="text-center text-white py-3">
						<div>&copy; Copyright 2021 GDG Jakarta | All Right Reserved</div>
					</Container>
				</div>
			</footer>
		</div>
	);
}

export default App;
