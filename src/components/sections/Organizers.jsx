import { Container } from "../Container";
import SPEAKERS_DATA from "../../data/speakers.json";
import { SpeakerCard } from "../SpeakerCard";

export const Organizers = () => {
	return (
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
					{SPEAKERS_DATA.map((speaker) => (
						<SpeakerCard
							name={speaker.name}
							topic={speaker.topic}
							avatar_url={speaker.avatar_url}
							roles={speaker.roles}
							social_media={speaker.social_media}
						/>
					))}
				</div>
			</Container>
		</section>
	);
};
