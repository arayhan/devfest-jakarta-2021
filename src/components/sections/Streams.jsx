import { Container } from "../Container";
import { StreamCard } from "../StreamCard";

export const Streams = () => {
	return (
		<div className="bg-gray-100 py-16">
			<Container>
				<div className="flex flex-wrap justify-center">
					<StreamCard />
					<StreamCard />
					<StreamCard />
				</div>
			</Container>
		</div>
	);
};
