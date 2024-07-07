'use client';

import cn from 'clsx';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

import { Button } from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import { sAgeRestrict, sButtonCancel, sControls, sForm, sTitle } from './AgeRestrict.css';

export interface AgeRestrictProps {
	className?: string;
}

export const AgeRestrict: React.FC<AgeRestrictProps> = ({ className = '' }) => {
	const [opened, setOpened] = useState(false);
	const [ageVerified, setAgeVerified] = useLocalStorage('isAgeVerified', false);

	const handleClose = () => setOpened(false);

	useEffect(() => {
		if (!ageVerified) setOpened(true);
	}, [ageVerified]);

	const handleAgeAgreementClick = () => {
		setAgeVerified(true);
		handleClose();
	};

	const handleAgeDeclineClick = () => {
		window.location.href = 'https://www.youtube.com/c/deofficielepeppa';
	};

	return (
		<Modal className={cn(sAgeRestrict, className)} opened={opened} onClose={handleClose} closable={false}>
			<h2 className={cn(sTitle)}>
				Are you
				<br /> 18 years old?
			</h2>

			<div className={cn(sForm)}>
				<p>Doesn&apos;t really matter if you are really an adult</p>

				<div className={cn(sControls)}>
					<Button noArrow onClick={handleAgeAgreementClick}>
						Yes
					</Button>
					<Button className={cn(sButtonCancel)} noArrow onClick={handleAgeDeclineClick}>
						No
					</Button>
				</div>
			</div>
		</Modal>
	);
};
