import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { Container } from "../Container";

export const Header = () => {
	return (
		<header className="shadow-md py-5">
			<Container className="flex items-center justify-between">
				<div>
					<Link to={ROUTES.HOME}>
						<img
							className="w-28"
							src={require("../../assets/images/gdg-logo.png").default}
							alt="GDG Logo"
						/>
					</Link>
				</div>
				<nav>
					<a
						className="text-gray-500 hover:text-blue-800 transition-all p-6 hover:bg-gray-100"
						href="https://gdg.community.dev/"
						target="_blank"
						rel="noreferrer"
					>
						Register
					</a>
				</nav>
			</Container>
		</header>
	);
};
