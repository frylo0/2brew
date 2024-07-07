import { useEffect, useState } from 'react';

import { Modal } from './Modal';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Common/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Has cross in the right top corner.
 */
export const Closable: Story = {
	render: (args) => {
		const [opened, setOpened] = useState(args.opened);

		useEffect(() => {
			setOpened(args.opened);
		}, [args.opened]);

		const handleOpen = () => setOpened(true);
		const handleClose = () => setOpened(false);

		return (
			<>
				<button onClick={handleOpen}>Open Modal</button>
				<Modal opened={opened} onClose={handleClose} anchor="body" closable={args.closable}>
					<p>Hello, World!</p>
				</Modal>
			</>
		);
	},
	args: {
		opened: false,
		onClose: () => void 0,
		closable: true,
	},
};

export const ALotOfContent: Story = {
	render: (args) => {
		const [opened, setOpened] = useState(args.opened);

		useEffect(() => {
			setOpened(args.opened);
		}, [args.opened]);

		const handleOpen = () => setOpened(true);
		const handleClose = () => setOpened(false);

		return (
			<>
				<button onClick={handleOpen}>Open Modal</button>
				<Modal opened={opened} onClose={handleClose} anchor="body" closable={args.closable}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium nihil magni doloremque neque
						maiores ipsum cupiditate sunt eum? Optio, quas! Temporibus, est omnis possimus facere dignissimos sint
						beatae repellendus nostrum nisi voluptates expedita eos sed consequuntur sapiente. Voluptatem, ex? Fugiat
						excepturi deleniti minus odio quae itaque inventore nostrum explicabo quaerat quas? Repellat, consequuntur
						fugit aliquam dolor neque blanditiis vitae exercitationem! Voluptatibus perferendis quo placeat delectus
						blanditiis quis, dolore quidem expedita, tempore voluptate ducimus? Cum, quia repellendus magni voluptates
						at iure optio odio blanditiis nam harum, expedita perspiciatis qui tempore maiores ab! Voluptatem nihil
						beatae, voluptate velit commodi eum at obcaecati facilis dignissimos, maiores dolor rerum, consectetur ab
						ullam. Reiciendis alias sunt doloremque porro et eum eligendi optio cumque officia tempore dolorem repellat
						consequatur quo neque libero cum qui tempora est dolore voluptatem obcaecati voluptatum accusantium, totam
						ad. Exercitationem dignissimos amet culpa quia. Minima voluptatum commodi labore! Ut consequuntur at tempora
						quae, architecto labore ullam quo. Numquam unde ut fugiat corrupti aliquam. Dignissimos natus sed, error
						voluptas ullam quaerat aliquam veniam maiores ea nemo architecto blanditiis vero at earum nihil? In iste
					</p>

					<br />

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque adipisci, soluta autem harum fuga
						exercitationem rerum quis impedit iusto ipsam sint dignissimos consequatur inventore facere? Neque ipsum
						quibusdam ut excepturi officia fuga a voluptate eligendi atque mollitia ipsa illo illum voluptates expedita,
						officiis esse. Delectus autem error qui sed voluptate dicta, distinctio, nulla veniam soluta magni dolores,
						id officiis rem assumenda consectetur est iusto ducimus quas aspernatur? Libero doloremque atque laborum
						impedit molestias aspernatur, voluptas id praesentium provident eius, eligendi incidunt aliquid natus cumque
						beatae! Dolorem esse voluptatum est nihil ipsum temporibus consequuntur sunt debitis maxime libero sint,
						commodi nesciunt accusamus, qui sapiente vitae illum! Neque hic iure sequi magni quas doloremque, repellat
						voluptate voluptas laborum mollitia voluptatum recusandae adipisci! Omnis fugit mollitia saepe commodi
						reprehenderit, aliquid, dolorum sed quisquam explicabo error quos? Omnis totam dolor soluta, qui eaque ab
						nesciunt, alias culpa error molestias recusandae praesentium et laboriosam eveniet nisi! Error animi,
						ratione consequatur deserunt non tempora aperiam doloremque deleniti cum magnam est nesciunt? Ipsam sapiente
						eligendi consequatur nemo odit perspiciatis ratione possimus, eaque sint numquam, sed autem exercitationem
						voluptas. Officia, eius temporibus ea enim cumque aperiam necessitatibus laboriosam magni perferendis
						dignissimos ullam iste rem explicabo fugiat unde autem illo reiciendis vero quis dicta, distinctio doloribus
						nesciunt voluptatibus quaerat? Non possimus nihil est dignissimos, ea tempore nisi. Delectus, in maiores
						ipsam doloremque magnam eos ipsum ut dolores dicta architecto quaerat aliquam accusantium hic nam facere
						earum illum! Architecto sapiente dolore repellat molestiae voluptates libero aliquam obcaecati laboriosam
						quisquam assumenda. Tenetur ab aliquam nostrum.
					</p>
				</Modal>
			</>
		);
	},
	args: {
		opened: false,
		onClose: () => void 0,
		closable: true,
	},
};

/**
 * Closes modal only with inner button. Esc and click on overlay do not work.
 */
export const NotClosable: Story = {
	render: (args) => {
		const [opened, setOpened] = useState(args.opened);

		useEffect(() => {
			setOpened(args.opened);
		}, [args.opened]);

		const handleOpen = () => setOpened(true);
		const handleClose = () => setOpened(false);

		return (
			<>
				<button onClick={handleOpen}>Open Modal</button>
				<Modal opened={opened} onClose={handleClose} anchor="body" closable={args.closable}>
					<p>Hello, World!</p>
					<button onClick={handleClose}>Close Modal</button>
				</Modal>
			</>
		);
	},
	args: {
		opened: false,
		onClose: () => void 0,
		closable: false,
	},
};
