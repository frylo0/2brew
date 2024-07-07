import cn from 'clsx';
import Link, { LinkProps } from 'next/link';

import SVG_Facebook from '@/assets/vector/facebook.svg';
import SVG_Instagram from '@/assets/vector/instagram.svg';
import SVG_LinkedIn from '@/assets/vector/linkedin.svg';
import SVG_Untappd from '@/assets/vector/untappd.svg';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { Button } from '@/components/common/Button/Button';
import { sContent, sHeader, sLogo, sMenu, sMenuItem, sMenuList, sSocialLinks } from './Header.css';

export interface HeaderProps {
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
	return (
		<header className={cn(sHeader, className)}>
			<Adaptive className={cn(sContent)}>
				<figure className={cn(sLogo)}>Two Chefs Brewing</figure>

				<nav className={cn(sMenu)}>
					<ul className={cn(sMenuList)}>
						<MenuItem href="#">About us</MenuItem>
						<MenuItem href="#">Beers</MenuItem>
						<MenuItem href="#">Buy</MenuItem>
						<MenuItem href="#">Contacts</MenuItem>
					</ul>
				</nav>

				<div className={cn(sSocialLinks)}>
					<Link href="https://www.instagram.com/twochefsbrewing/" target="_blank">
						<Button shape="iconic">
							<SVG_Instagram />
						</Button>
					</Link>

					<Link href="https://nl-nl.facebook.com/TwoChefsBrewing/" target="_blank">
						<Button shape="iconic">
							<SVG_Facebook />
						</Button>
					</Link>

					<Link href="https://nl.linkedin.com/company/two-chefs-brewing" target="_blank">
						<Button shape="iconic">
							<SVG_LinkedIn />
						</Button>
					</Link>

					<Link href="https://untappd.com/TwoChefsBrewing" target="_blank">
						<Button shape="iconic">
							<SVG_Untappd />
						</Button>
					</Link>
				</div>
			</Adaptive>
		</header>
	);
};

interface MenuItemProps extends React.PropsWithChildren {
	className?: string;
	href: LinkProps['href'];
}

const MenuItem: React.FC<MenuItemProps> = ({ className, children, href }) => {
	return (
		<li className={cn(sMenuItem, className)}>
			<Link href={href}>{children}</Link>
		</li>
	);
};
