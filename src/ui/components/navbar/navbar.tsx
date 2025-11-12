import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import HomeIcon from "../../icons/home";
import ProfileIcon from "../../icons/profile";
import ActionButton from "./action-button";
import NavItem from "./nav-item";

export default function Navbar(): JSX.Element {
	const { t } = useTranslation();
	const iconSizeClass = "w-5 h-5";

	return (
		<nav
			className={
				"fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 w-full"
			}
		>
			<div className={"max-w-7xl mx-auto px-4 py-1"}>
				<div className={"grid grid-cols-5 gap-1 py-3"}>
					<NavItem
						to="/"
						icon={<HomeIcon className={iconSizeClass} />}
						label={t("navbar.home")}
					/>
					<NavItem
						to="/"
						icon={<HomeIcon className={iconSizeClass} />}
						label={t("navbar.home")}
					/>

					<ActionButton />

					<NavItem
						to="/"
						icon={<HomeIcon className={iconSizeClass} />}
						label={t("navbar.home")}
					/>

					<NavItem
						to="/user/profile"
						icon={<ProfileIcon className={iconSizeClass} />}
						label={t("navbar.profile")}
					/>
				</div>
			</div>
		</nav>
	);
}
