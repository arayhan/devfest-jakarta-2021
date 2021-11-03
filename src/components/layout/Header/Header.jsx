import { forwardRef } from "react";
import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export const Header = forwardRef((props, ref) => {
	return (
		<header ref={ref} className="fixed top-0 left-0 w-full bg-white shadow-md">
			<HeaderDesktop />
			<HeaderMobile />
		</header>
	);
});
