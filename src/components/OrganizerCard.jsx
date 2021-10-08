import { FaFacebook } from "react-icons/fa";

export const OrganizerCard = ({ className }) => {
	return (
		<div className={`${className}`}>
			<div className="shadow-md rounded-md p-6 space-y-6">
				<div className="w-44 h-44">
					<img
						className="w-full h-full object-cover rounded-full"
						src="https://internationalwomensday-2020.web.app/assets/images/teams/dana.jpg"
						alt=""
					/>
				</div>
				<div className="text-center">
					<div className="font-semibold text-gray-700">R. Surahutomo A.P</div>
					<div className="text-gray-400">Program</div>
				</div>
				<div className="flex justify-center">
					<a
						className="text-gray-400 hover:text-blue-700 transition-all"
						href="facebook.com"
					>
						<FaFacebook size={18} />
					</a>
				</div>
			</div>
		</div>
	);
};
