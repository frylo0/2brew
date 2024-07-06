import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Common/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: ':Normal',
	},
};

export const Disabled: Story = {
	args: {
		placeholder: ':Disabled',
		disabled: true,
	},
};

export const Phone: Story = {
	args: {
		placeholder: ':Phone',
		type: 'phone',
		style: { width: '10em' },
	},
};
