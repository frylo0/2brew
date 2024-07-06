import SVG_Cross from '@/assets/vector/cross.svg';
import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Common/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		shape: { control: 'select', options: ['wide', 'iconic'] },
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Wide: Story = {
	args: {
		shape: 'wide',
		children: 'Button',
	},
};

export const WideDisabled: Story = {
	args: {
		shape: 'wide',
		children: 'Button',
		disabled: true,
	},
};

export const Iconic: Story = {
	args: {
		shape: 'iconic',
		children: <SVG_Cross />,
	},
};

export const IconicDisabled: Story = {
	args: {
		shape: 'iconic',
		children: <SVG_Cross />,
		disabled: true,
	},
};
