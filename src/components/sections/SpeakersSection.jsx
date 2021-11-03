import { Container } from "../Container";
import SPEAKERS_DATA from "../../data/speakers.json";
import { SpeakerCard } from "../SpeakerCard";
import { ROUTES } from "../../routes";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FiChevronRight } from "react-icons/fi";

export const SpeakersSection = ({ showAll }) => {
	return (
		<section className="py-24">
			<Container className="space-y-14">
				<div className="space-y-3">
					<h1 className="text-4xl text-blue-700 font-semibold">
						{showAll ? "Speakers" : "Featured Speakers"}
					</h1>
					<p className="text-lg text-gray-500">
						Our speakers are influential folks & allies who have been associated
						with communities within their organisations, cities, country and
						beyond.
					</p>
				</div>

				<div className="flex justify-center flex-wrap">
					{SPEAKERS_DATA.map((speaker, index) =>
						!showAll ? (
							index < 4 && (
								<SpeakerCard
									className="sm:w-1/3 lg:w-1/4 p-3"
									name={speaker.name}
									institution={speaker.institution}
									topic={speaker.topic}
									avatar_url={speaker.avatar_url}
									roles={speaker.roles}
									social_media={speaker.social_media}
								/>
							)
						) : (
							<SpeakerCard
								className="sm:w-1/3 lg:w-1/4 p-3"
								name={speaker.name}
								institution={speaker.institution}
								topic={speaker.topic}
								avatar_url={speaker.avatar_url}
								roles={speaker.roles}
								social_media={speaker.social_media}
							/>
						)
					)}
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
			</Container>
		</section>
	);
};
