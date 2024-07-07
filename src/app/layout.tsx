import { Metadata } from 'next';

import '@/styles/global-in-js.css';
import '@/styles/global-in-css.css';

import { AgeRestrict } from '@/components/block/AgeRestrict/AgeRestrict';
import { NotARealWebsite } from '@/components/block/NotARealWebsite/NotARealWebsite';
import { WithClientAuth } from '@/lib/WithClientAuth';

export const metadata: Metadata = {
	title: `TypeScript starter for Next.js`,
	description: `TypeScript starter for Next.js that includes all you need to build amazing apps`,
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
