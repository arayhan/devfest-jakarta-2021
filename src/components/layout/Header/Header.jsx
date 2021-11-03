import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = () => {
	return (
		<header className="fixed w-full bg-white shadow-md">
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
};
