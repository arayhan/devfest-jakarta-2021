import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SpeakerCard = ({
	name,
	institution,
	topic,
	avatar_url,
	roles,
	social_media,
	className,
}) => {
	return (
		<div className={className}>
			<div className={`shadow-lg bg-white rounded-lg`}>
				<div className="flex flex-col items-center px-3 py-6 border-b space-y-6">
					<div className="md:w-52 lg:w-60 px-8">
						<div className="w-52 h-52">
							<img
								className="w-full h-full rounded-full object-cover"
								src={avatar_url}
								alt={name}
							/>
						</div>
					</div>
					<div className="w-full space-y-6 text-center">
						<div className="space-y-1">
							<h1 className="text-lg font-semibold text-gray-700">{name}</h1>
							<div className="text-gray-500 text-sm">
								{roles} @{institution}
							</div>
						</div>
						<div className="flex justify-center text-gray-500">
							{social_media &&
								Object.keys(social_media).map((socmed) => (
									<a
										className="hover:text-blue-700 transition-all"
										href={social_media[socmed]}
										target="_blank"
										rel="noreferrer"
									>
										{socmed === "facebook" && <FaFacebook size={18} />}
										{socmed === "twitter" && <FaTwitter size={18} />}
										{socmed === "instagram" && <FaInstagram size={18} />}
										{socmed === "linkedin" && <FaLinkedin size={18} />}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
