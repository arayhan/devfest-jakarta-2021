import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
	return (
		<header className="relative shadow-md">
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
};
