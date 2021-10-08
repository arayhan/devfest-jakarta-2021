import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const SpeakerCard = () => {
	return (
		<div className="shadow-lg bg-white rounded-lg">
			<div className="px-6 py-3 border-b">
				<div className="text-center lg:text-left text-lg font-semibold text-gray-700">
					"Jetpack Compose: Modern UI Framework in Android"
				</div>
			</div>
			<div className="flex flex-col lg:flex-row items-center px-6 py-8 lg:space-x-6 border-b space-y-3 lg:space-y-0">
				<div className="w-40 lg:w-60">
					<div>
						<img
							className="w-full rounded-full"
							src="https://internationalwomensday-2020.web.app/assets/images/speakers/galuh-sahid.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="w-full space-y-3 text-center lg:text-left">
					<h1 className="text-lg font-semibold text-gray-700">Galuh Sahid</h1>
					<div className="text-gray-500 text-sm">
						<div>GDE Machine Learning</div>
						<div>Data Scientist</div>
						<div>Gojek</div>
					</div>
					<div className="flex justify-center lg:justify-start space-x-6 text-gray-500">
						<a className="hover:text-blue-700 transition-all" href="#">
							<FaFacebook size={18} />
						</a>
						<a className="hover:text-blue-700 transition-all" href="#">
							<FaTwitter size={18} />
						</a>
						<a className="hover:text-blue-700 transition-all" href="#">
							<FaInstagram size={18} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
