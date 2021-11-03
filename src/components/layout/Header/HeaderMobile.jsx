import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDehaze } from "react-icons/md";
import { ROUTES } from "../../../routes";
import { Container } from "../../Container";
import { HeaderSideMenu } from "./HeaderSideMenu";

export const HeaderMobile = () => {
	const [showSideMenu, setShowSideMenu] = useState(false);

	const handleClose = () => setShowSideMenu(false);

	return (
		<div className="block lg:hidden">
			<HeaderSideMenu show={showSideMenu} onClose={handleClose} />
			<Container>
				<div className="flex items-center justify-between py-3 space-x-6">
					<Link to={ROUTES.HOME}>
						<img
							className="w-64"
							src={require("../../../assets/images/gdg-logo.svg").default}
							alt="GDG Logo"
						/>
					</Link>
					<button
						className="sm:p-4 transform sm:translate-x-4 transition-all hover:bg-gray-100 rounded-full outline-none"
						onClick={() => setShowSideMenu(!showSideMenu)}
					>
						<MdDehaze size={20} />
					</button>
				</div>
			</Container>
		</div>
	);
};
