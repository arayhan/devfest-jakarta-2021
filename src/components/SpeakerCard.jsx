import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const SpeakerCard = ({
	name,
	topic,
	avatar_url,
	roles,
	social_media,
	className,
}) => {
	return (
		<div className={className}>
			<div className={`shadow-lg bg-white rounded-lg`}>
				<div className="px-6 py-3 border-b">
					<div className="text-center lg:text-left text-lg font-semibold text-gray-700">
						{topic}
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-center px-6 py-8 lg:space-x-6 border-b space-y-3 lg:space-y-0">
					<div className="w-40 lg:w-60">
						<div>
							<img
								className="w-full rounded-full"
								src={avatar_url}
								alt={name}
							/>
						</div>
					</div>
					<div className="w-full space-y-3 text-center lg:text-left">
						<h1 className="text-lg font-semibold text-gray-700">{name}</h1>
						<div className="text-gray-500 text-sm">
							{roles && roles.map((role) => <div>{role}</div>)}
						</div>
						<div className="flex justify-center lg:justify-start space-x-6 text-gray-500">
							{social_media &&
								Object.keys(social_media).map((socmed) => (
									<a
										className="hover:text-blue-700 transition-all"
										href={social_media[socmed]}
									>
										{socmed === "facebook" && <FaFacebook size={18} />}
										{socmed === "twitter" && <FaTwitter size={18} />}
										{socmed === "instagram" && <FaInstagram size={18} />}
									</a>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
