import cn from 'clsx';
import Link, { LinkProps } from 'next/link';
import ReactModal from 'react-modal';

import SVG_Facebook from '@/assets/vector/facebook.svg';
import SVG_Instagram from '@/assets/vector/instagram.svg';
import SVG_LinkedIn from '@/assets/vector/linkedin.svg';
import SVG_Untappd from '@/assets/vector/untappd.svg';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { Button } from '@/components/common/Button/Button';
import {
	sButtonClose,
	sHeader,
	sLogo,
	sMenuItem,
	sMenuList,
	sMobileMenu,
	sModal,
	sNav,
	sOverlay,
	sSocialIcons,
} from './MobileMenu.css';

export interface MobileMenuProps {
	className?: string;
	opened: boolean;
	onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ className = '', opened, onClose }) => {
	const handleLinkClick = () => onClose();

	return (
		<ReactModal
			isOpen={opened}
			onRequestClose={onClose}
			className={cn(sModal)}
			overlayClassName={cn(sOverlay)}
			shouldCloseOnEsc={true}
			shouldCloseOnOverlayClick={true}
			shouldFocusAfterRender={false}
		>
			<Adaptive className={cn(sMobileMenu, className)}>
				<header className={cn(sHeader)}>
					<figure className={cn(sLogo)}>
						Two Chefs
						<br /> Brewing
					</figure>

					<Button noArrow theme="white" onClick={onClose} className={cn(sButtonClose)}>
						Close
					</Button>
				</header>

				<nav className={cn(sNav)}>
					<ul className={cn(sMenuList)}>
						<MenuItem href="#about" onClick={handleLinkClick}>
							About us
						</MenuItem>
						<MenuItem href="#catalog" onClick={handleLinkClick}>
							Beers
						</MenuItem>
						<MenuItem href="#submit" onClick={handleLinkClick}>
							Buy
						</MenuItem>
						<MenuItem href="#contacts" onClick={handleLinkClick}>
							Contacts
						</MenuItem>
					</ul>
				</nav>

				<div className={cn(sSocialIcons)}>
					<Button shape="iconic" theme="white">
						<SVG_Instagram />
					</Button>

					<Button shape="iconic" theme="white">
						<SVG_Facebook />
					</Button>

					<Button shape="iconic" theme="white">
						<SVG_LinkedIn />
					</Button>

					<Button shape="iconic" theme="white">
						<SVG_Untappd />
					</Button>
				</div>
			</Adaptive>
		</ReactModal>
	);
};

interface MenuItemProps extends React.PropsWithChildren {
	className?: string;
	href: LinkProps['href'];
	onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ className, children, href, onClick }) => {
	return (
		<li className={cn(sMenuItem, className)} onClick={onClick}>
			<Link href={href}>{children}</Link>
		</li>
	);
};
