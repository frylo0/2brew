import cn from 'clsx';
import { useEffect } from 'react';
import ReactModal from 'react-modal';

import SVG_Cross from '@/assets/vector/cross.svg';
import { sAdaptive } from '../Adaptive/Adaptive.css';
import { Button } from '../Button/Button';
import { sContent, sCross, sModal, sOverlay, sScrollable } from './Modal.css';

export interface ModalProps extends React.PropsWithChildren {
	className?: string;
	opened: boolean;
	onClose: () => void;
	anchor?: string;
	closable?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
	className = '',
	children,
	opened,
	onClose,
	closable,
	anchor = 'body',
}) => {
	useEffect(() => {
		ReactModal.setAppElement(anchor);
	}, [anchor]);

	const handleCrossClick = () => onClose();

	return (
		<ReactModal
			isOpen={opened}
			onRequestClose={onClose}
			className={cn(sModal, sAdaptive)}
			overlayClassName={cn(sOverlay)}
			shouldCloseOnEsc={closable}
			shouldCloseOnOverlayClick={closable}
			shouldFocusAfterRender={false}
		>
			<div className={cn(sScrollable)}>
				<div className={cn(sContent, className)}>{children}</div>
			</div>

			{closable && (
				<div className={cn(sCross)}>
					<Button shape="iconic" onClick={handleCrossClick}>
						<SVG_Cross />
					</Button>
				</div>
			)}
		</ReactModal>
	);
};
