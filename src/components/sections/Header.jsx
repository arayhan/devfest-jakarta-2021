import { Container } from "../Container";

export const Header = () => {
	return (
		<header className="shadow-md py-5">
			<Container className="flex items-center justify-between">
				<div>
					<a href="#">
						<img
							className="w-28"
							src={require("../../assets/images/gdg-logo.png").default}
							alt="GDG Logo"
						/>
					</a>
				</div>
				<nav>
					<a
						className="text-gray-500 hover:text-blue-800 transition-all py-5"
						href="#"
					>
						Register
					</a>
				</nav>
			</Container>
		</header>
	);
};
