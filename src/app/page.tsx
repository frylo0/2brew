import cn from 'clsx';

import { Header } from '@/components/section/Header/Header';
import { sMain } from './page.css';

export default function Page() {
	return (
		<main className={cn(sMain)}>
			<Header />
		</main>
	);
}
