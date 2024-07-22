import { Metadata } from 'next';

import '@/styles/global-in-js.css';
import '@/styles/global-in-css.css';

import { AgeRestrict } from '@/components/block/AgeRestrict/AgeRestrict';
import { NotARealWebsite } from '@/components/block/NotARealWebsite/NotARealWebsite';
import { BASE_URL } from '@/constants/env';
import { WithClientAuth } from '@/lib/WithClientAuth';

export const metadata: Metadata = {
	title: `Two Chefs Brewing | DEMO`,
	description: `This is demo project! Discover the best independent brewery in the Netherlands! Explore our craft beers, visit our bar, or catch up on the latest news. Embrace the experience!`,

	metadataBase: new URL(BASE_URL || 'Invalid env file'),
	applicationName: '2brew',
	keywords: ['Next.js', 'React', 'TypeScript', 'DEMO', 'frylo', 'frylo0', 'frylo.d.ts'],
	authors: [{ name: 'Frylo', url: 'https://frylo.org' }],
	creator: 'frylo.d.ts',
	publisher: 'frylo.d.ts',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
				<meta name="msapplication-TileColor" content="#eeeeee" />
				<meta name="theme-color" content="#ffffff" />
			</head>

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
