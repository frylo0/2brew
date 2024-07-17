import cn from 'clsx';

import { Cheers } from '@/components/block/Cheers/Cheers';
import { BrewAround } from '@/components/section/BrewAround/BrewAround';
import { CardStack } from '@/components/section/CardStack/CardStack';
import { Catalog } from '@/components/section/Catalog/Catalog';
import { Header } from '@/components/section/Header/Header';
import { Preview } from '@/components/section/Preview/Preview';
import { InitBeers$ } from '@/stores/beers.store';
import { sMain } from './page.css';

export default function Page() {
	return (
		<>
			<InitBeers$ />

			<main className={cn(sMain)}>
				<Header />

				<Preview />
				<BrewAround />
				<Cheers />
				<CardStack />
				<Catalog />
			</main>
		</>
	);
}
