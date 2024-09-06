import cn from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import PNG_Footer from '@/assets/raster/footer.png';
import SVG_Facebook from '@/assets/vector/facebook.svg';
import SVG_Instagram from '@/assets/vector/instagram.svg';
import SVG_LinkedIn from '@/assets/vector/linkedin.svg';
import SVG_Untappd from '@/assets/vector/untappd.svg';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { Button } from '@/components/common/Button/Button';
import { social } from '@/constants/project';
import { layoutFill } from '@/lib/nextjs-legacy';
import { sContent, sFigure, sFooter, sGrid, sItem, sMetaData, sSocial, sTitle } from './Footer.css';

export interface FooterProps {
	className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
	return (
		<footer className={cn(sFooter, className)} id="contacts">
			<Adaptive className={cn(sContent)}>
				<h3 className={cn(sTitle)}>Let&apos;s start</h3>

				<div className={cn(sGrid)}>
					<ul className={cn(sMetaData)}>
						<Item title="I want to call!" value="+31208948944" />
						<Item title="Connect witj us" value="info@twochefsbrewing.com" />
						<Item title="Wholesale" value="webshop@twochefsbrewing.com" />
						<Item title="Main office" value="Moezelhavenweg 6, 1043 AM Amsterdam" />
						<Item title="KVK" value="65022831" />
						<Item title="BTW" value="NL855939709B01" />
					</ul>

					<div className={cn(sSocial)}>
						<Link href={social.instagram}>
							<Button shape="iconic" theme="black">
								<SVG_Instagram />
							</Button>
						</Link>

						<Link href={social.facebook}>
							<Button shape="iconic" theme="black">
								<SVG_Facebook />
							</Button>
						</Link>

						<Link href={social.linkedIn}>
							<Button shape="iconic" theme="black">
								<SVG_LinkedIn />
							</Button>
						</Link>

						<Link href={social.untappd}>
							<Button shape="iconic" theme="black">
								<SVG_Untappd />
							</Button>
						</Link>
					</div>

					<figure className={cn(sFigure)}>
						<Image src={PNG_Footer} alt="Brewing" style={{ ...layoutFill, objectFit: 'cover' }} />
					</figure>
				</div>
			</Adaptive>
		</footer>
	);
};

interface ItemProps {
	className?: string;
	title: string;
	value: string;
}

const Item: React.FC<ItemProps> = ({ className, title, value }) => {
	return (
		<li className={cn(sItem, className)}>
			<span>{title}</span>
			<strong>{value}</strong>
		</li>
	);
};
