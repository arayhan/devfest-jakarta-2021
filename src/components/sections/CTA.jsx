import { Container } from "../Container";

export const CTA = () => {
	return (
		<section className="py-24 bg-gray-100">
			<Container className="space-y-10 text-center">
				<div className="space-y-3">
					<h1 className="text-3xl text-blue-700 font-semibold">
						Get notified about the important conference updates
					</h1>
					<p className="text-lg text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
						maiores laborum blanditiis earum rerum inventore atque soluta
						suscipit unde pariatur repudiandae numquam cum omnis laudantium
						doloribus, velit non dolorum? Sapiente.
					</p>
				</div>
				<div>
					<a
						className="bg-blue-700 px-8 py-3 rounded-md text-white"
						href="https://gdg.community.dev/devfest/"
						target="_blank"
						rel="noreferrer"
					>
						Learn more about DevFest
					</a>
				</div>
			</Container>
		</section>
	);
};
