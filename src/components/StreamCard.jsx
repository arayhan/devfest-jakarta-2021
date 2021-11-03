import { MdOndemandVideo } from "react-icons/md";

export const StreamCard = ({ thumbnail, day, topic, date, time, url }) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/3 p-3">
			<div className="bg-white rounded-md shadow-md">
				<div className="p-3 h-72">
					<img
						className="rounded-md w-full h-full object-cover"
						src={thumbnail}
						alt=""
					/>
				</div>
				<div className="p-3 space-y-3">
					<div className="font-semibold text-xl">
						Day {day} • {topic}
					</div>
					<div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-0">
						<div className="space-y-3">
							<div className="space-y-1 text-gray-500 text-sm">
								<div className="flex items-center space-x-3">
									<span>{date}</span>
								</div>
								<div className="flex items-center space-x-3">
									<span>{time}</span>
								</div>
							</div>
						</div>
						<div>
							<a
								className="border border-red-500 inline-flex items-center rounded-md px-4 py-2 text-sm text-red-500 space-x-3 transition-all hover:bg-red-50"
								href={url}
								target="_blank"
								rel="noreferrer"
							>
								<span>
									<MdOndemandVideo size={20} />
								</span>
								<span>Watch Now</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
