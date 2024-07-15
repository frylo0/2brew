import cn from 'clsx';

import { BrewAround } from '@/components/section/BrewAround/BrewAround';
import { Header } from '@/components/section/Header/Header';
import { Preview } from '@/components/section/Preview/Preview';
import { sMain } from './page.css';

export default function Page() {
	return (
		<main className={cn(sMain)}>
			<Header />

			<Preview />
			<BrewAround />
		</main>
	);
}
