import SPEAKERS_DATA from "../../data/speakers.json";
import { SpeakerCard } from "../SpeakerCard";
import { ROUTES } from "../../routes";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FiChevronRight } from "react-icons/fi";

export const SpeakersSection = ({ showAll }) => {
	SPEAKERS_DATA.map((speaker, index) =>
		showAll && index < 5 ? SPEAKERS_DATA[index] : speaker
	);

	return (
		<div className="space-y-14">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
				{SPEAKERS_DATA.map((speaker) => (
					<SpeakerCard
						className="w-full"
						name={speaker.name}
						institution={speaker.institution}
						topic={speaker.topic}
						avatar_url={speaker.avatar_url}
						roles={speaker.roles}
						social_media={speaker.social_media}
					/>
				))}
			</div>
			{!showAll && (
				<div className="flex items-center justify-start">
					<Link
						className="group transition-all px-5 py-2 text-blue-700 rounded-md flex items-center space-x-5"
						to={ROUTES.SPEAKERS}
					>
						<span>See All Speakers</span>
						<span className="transition-all transform group-hover:pl-2">
							<FiChevronRight />
						</span>
					</Link>
				</div>
			)}
		</div>
	);
};
