import cn from 'clsx';

import { Modal, ModalProps } from '@/components/common/Modal/Modal';
import { IBeer } from '@/db/models/beer';
import { CardStack } from '../../CardStack/CardStack';
import { sProductModal } from './ProductModal.css';

export interface ProductModalProps extends Omit<ModalProps, 'closable'> {
	className?: string;
	product: IBeer | null;
}

export const ProductModal: React.FC<ProductModalProps> = ({ className = '', opened, onClose, product, ...props }) => {
	return (
		<Modal className={cn(sProductModal, className)} opened={opened} onClose={onClose} closable {...props}>
			<CardStack product={product} />
		</Modal>
	);
};
