import cn from 'clsx';
import { FormEventHandler } from 'react';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import { Modal, ModalProps } from '@/components/common/Modal/Modal';
import { IBeer } from '@/db/models/beer';
import {
	sBtn,
	sFields,
	sSubmitForm,
	sSubmitFormModal,
	sSubmitSucceedModal,
	sSucceedTitle,
	sTip,
	sTitle,
} from './SubmitForm.css';

export interface SubmitFormProps {
	className?: string;
	product?: IBeer;
	option?: string;
	onSubmit?: (formData: FormData, product?: IBeer, option?: string) => void;
}

export const SubmitForm: React.FC<SubmitFormProps> = ({ className = '', onSubmit, product, option }) => {
	const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		console.log({ formData: Object.fromEntries(formData.entries()), product, option });

		onSubmit?.(formData, product, option);
	};

	return (
		<form className={cn(sSubmitForm, className)} onSubmit={handleSubmit}>
			<h2 className={cn(sTitle)}>Submit your application</h2>

			<p className={cn(sTip)}>
				If you want to order our products, fill out the form and we will contact you shortly to discuss the details.
			</p>

			<div className={cn(sFields)}>
				<Input placeholder="Your name" name="name" required />
				<Input placeholder="Phone number" type="phone" name="phone" />
				<Input placeholder="Email address" name="email" required />

				<Button className={cn(sBtn)}>Send a request</Button>
			</div>
		</form>
	);
};

interface SubmitFormModalProps extends Omit<ModalProps, 'closable'>, SubmitFormProps {
	className?: string;
}

export const SubmitFormModal: React.FC<SubmitFormModalProps> = ({ className, onSubmit, product, option, ...props }) => {
	return (
		<Modal className={cn(sSubmitFormModal, className)} closable {...props}>
			<SubmitForm onSubmit={onSubmit} product={product} option={option} />
		</Modal>
	);
};

interface SubmitSucceedModalProps extends Omit<ModalProps, 'closable'> {
	className?: string;
}

export const SubmitSucceedModal: React.FC<SubmitSucceedModalProps> = ({ className, ...props }) => {
	return (
		<Modal className={cn(sSubmitSucceedModal, className)} closable {...props}>
			<h2 className={cn(sSucceedTitle)}>Thank you. Submitted!</h2>
			<p>We will contact you shortly to discuss the details</p>
		</Modal>
	);
};
