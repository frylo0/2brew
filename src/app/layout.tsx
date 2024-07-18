import { Metadata } from 'next';

import '@/styles/global-in-js.css';
import '@/styles/global-in-css.css';

import { AgeRestrict } from '@/components/block/AgeRestrict/AgeRestrict';
import { NotARealWebsite } from '@/components/block/NotARealWebsite/NotARealWebsite';
import { WithClientAuth } from '@/lib/WithClientAuth';

export const metadata: Metadata = {
	title: `Two Chefs Brewing | DEMO`,
	description: `This is demo project! Discover the best independent brewery in the Netherlands! Explore our craft beers, visit our bar, or catch up on the latest news. Embrace the experience!`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<WithClientAuth>
					{children}
					<AgeRestrict />
					<NotARealWebsite />
				</WithClientAuth>
			</body>
		</html>
	);
}
