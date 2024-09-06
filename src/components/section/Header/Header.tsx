'use client';

import cn from 'clsx';
import Link, { LinkProps } from 'next/link';
import { useState } from 'react';

import SVG_Facebook from '@/assets/vector/facebook.svg';
import SVG_Instagram from '@/assets/vector/instagram.svg';
import SVG_LinkedIn from '@/assets/vector/linkedin.svg';
import SVG_Untappd from '@/assets/vector/untappd.svg';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { Button } from '@/components/common/Button/Button';
import {
	sAside,
	sContent,
	sHeader,
	sLogo,
	sLogoBr,
	sMenu,
	sMenuButton,
	sMenuItem,
	sMenuList,
	sSocialLinks,
} from './Header.css';
import { MobileMenu } from './MobileMenu/MobileMenu';

export interface HeaderProps {
	className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
	const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

	const handleMobileMenuClose = () => setIsMobileMenuOpened(false);
	const handleMobileMenuOpen = () => setIsMobileMenuOpened(true);

	return (
		<header className={cn(sHeader, className)}>
			<Adaptive className={cn(sContent)}>
				<figure className={cn(sLogo)}>
					Two Chefs
					<br className={cn(sLogoBr)} /> Brewing
				</figure>

				<nav className={cn(sMenu)}>
					<ul className={cn(sMenuList)}>
						<MenuItem href="#about">About us</MenuItem>
						<MenuItem href="#catalog">Beers</MenuItem>
						<MenuItem href="#submit">Buy</MenuItem>
						<MenuItem href="#contacts">Contacts</MenuItem>
					</ul>
				</nav>

				<div className={cn(sAside)}>
					<div className={cn(sSocialLinks)}>
						<Link href="https://www.instagram.com/twochefsbrewing/" target="_blank">
							<Button shape="iconic" theme="white">
								<SVG_Instagram />
							</Button>
						</Link>

						<Link href="https://nl-nl.facebook.com/TwoChefsBrewing/" target="_blank">
							<Button shape="iconic" theme="white">
								<SVG_Facebook />
							</Button>
						</Link>

						<Link href="https://nl.linkedin.com/company/two-chefs-brewing" target="_blank">
							<Button shape="iconic" theme="white">
								<SVG_LinkedIn />
							</Button>
						</Link>

						<Link href="https://untappd.com/TwoChefsBrewing" target="_blank">
							<Button shape="iconic" theme="white">
								<SVG_Untappd />
							</Button>
						</Link>
					</div>

					<Button className={cn(sMenuButton)} noArrow onClick={handleMobileMenuOpen}>
						Menu
					</Button>

					<MobileMenu opened={isMobileMenuOpened} onClose={handleMobileMenuClose} />
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
