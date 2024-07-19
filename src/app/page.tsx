import cn from 'clsx';

import { Cheers } from '@/components/block/Cheers/Cheers';
import { BrewAround } from '@/components/section/BrewAround/BrewAround';
import { CardStack } from '@/components/section/CardStack/CardStack';
import { Catalog } from '@/components/section/Catalog/Catalog';
import { Form } from '@/components/section/Form/Form';
import { Gallery } from '@/components/section/Gallery/Gallery';
import { Header } from '@/components/section/Header/Header';
import { Preview } from '@/components/section/Preview/Preview';
import { WhereBuy } from '@/components/section/WhereBuy/WhereBuy';
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
				<WhereBuy />
				<Cheers />
				<Gallery />
				<Form />
			</main>
		</>
	);
}
