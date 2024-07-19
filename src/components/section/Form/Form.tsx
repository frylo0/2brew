'use client';

import cn from 'clsx';
import { useState } from 'react';

import { SubmitForm, SubmitFormProps, SubmitSucceedModal } from '@/components/block/SubmitForm/SubmitForm';
import { Adaptive } from '@/components/common/Adaptive/Adaptive';
import { useBeers$ } from '@/stores/beers.store';
import { sForm } from './Form.css';

export interface FormProps {
	className?: string;
}

export const Form: React.FC<FormProps> = ({ className = '' }) => {
	const { sendOrder } = useBeers$();

	const [thanksOpened, setThanksOpened] = useState(false);

	const handleSubmit: SubmitFormProps['onSubmit'] = async (formData, product, option) => {
		const sent = sendOrder(formData, product, option);
		if (!sent) return;
		setThanksOpened(true);
	};

	const handleThanksClose = () => setThanksOpened(false);

	return (
		<Adaptive as="section" className={cn(sForm, className)}>
			<SubmitForm onSubmit={handleSubmit} />
			<SubmitSucceedModal opened={thanksOpened} onClose={handleThanksClose} />
		</Adaptive>
	);
};
