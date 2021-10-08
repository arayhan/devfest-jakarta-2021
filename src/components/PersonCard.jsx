import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const PersonCard = () => {
	return (
		<div className="shadow-lg bg-white">
			<div className="flex items-center p-5 rounded-md space-x-6 border-b">
				<div>
					<div>
						<img
							className="w-32 rounded-full"
							src="https://internationalwomensday-2020.web.app/assets/images/speakers/galuh-sahid.jpg"
							alt=""
						/>
					</div>
				</div>
				<div className="space-y-3">
					<h1 className="text-xl font-semibold">Galuh Sahid</h1>
					<div className="text-gray-500 text-sm">
						<div>GDE Machine Learning</div>
						<div>Data Scientist</div>
					</div>
					<img
						className="w-16"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gojek_logo_2019.svg/2560px-Gojek_logo_2019.svg.png"
						alt=""
					/>
				</div>
			</div>
			<div className="p-3 flex space-x-6 text-gray-500 justify-center">
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
	);
};
