import cn from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

import SVG_Behance from '@/assets/vector/behance.svg';
import SVG_GitHub from '@/assets/vector/github.svg';
import SVG_2Brew from '@/assets/vector/two-chefs-brewing.svg';
import {
	s2Brew,
	sBehance,
	sButton,
	sGitHub,
	sIcon,
	sNotARealWebsite,
	sSources,
	sTextDesktop,
	sTextMobile,
	sTitle,
} from './NotARealWebsite.css';

export interface NotARealWebsiteProps {
	className?: string;
}

export const NotARealWebsite: React.FC<NotARealWebsiteProps> = ({ className = '' }) => {
	return (
		<div className={cn(sNotARealWebsite, className)}>
			<p className={cn(sTextDesktop)}>
				👉 This is a demo website for showcasing frontend skills. Not a real product. Check out the sources
			</p>
			<p className={cn(sTextMobile)}>
				<span>👉</span> <span>It&apos;s not a real product, check sources</span>
			</p>

			<div className={cn(sSources)}>
				<Button href="https://github.com/frylo0/2brew" icon={<SVG_GitHub />} title="GitHub" className={cn(sGitHub)} />
				<Button
					href="https://www.behance.net/gallery/200329475/Two-Chefs-brewing-UIUX-Design-Landing-Concept?tracking_source=search_projects|landing+page+figma+shop&l=3"
					icon={<SVG_Behance />}
					title="Behance"
					className={cn(sBehance)}
				/>
				<Button
					href="https://twochefsbrewing.com"
					icon={<SVG_2Brew />}
					title="Two Chefs Brewing"
					className={cn(s2Brew)}
				/>
			</div>
		</div>
	);
};

interface ButtonProps {
	className?: string;
	title: ReactNode;
	href: LinkProps['href'];
	icon: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, title, href, icon }) => {
	return (
		<Link className={cn(sButton, className)} href={href} target="_blank">
			<figure className={cn(sIcon)}>{icon}</figure>
			<span className={cn(sTitle)}>{title}</span>
		</Link>
	);
};
