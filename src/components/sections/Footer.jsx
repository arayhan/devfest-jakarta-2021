import { Container } from "../Container";

export const Footer = () => {
	return (
		<footer>
			<div className="bg-blue-700">
				<Container className="text-center space-x-3 text-white py-10">
					<a href="https://developers.google.com/community/gdg/organizers#community-guidelines">
						Code of Conduct
					</a>
					<a href="https://developers.google.com/community-guidelines">
						Community Guidelines
					</a>
				</Container>
			</div>
			<div className="bg-blue-800">
				<Container className="text-center text-white py-3">
					<div>&copy; Copyright 2021 GDG Jakarta | All Right Reserved</div>
				</Container>
			</div>
		</footer>
	);
};
