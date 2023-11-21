import type { Meta, StoryObj } from '@storybook/react'

import Button from '../Button'

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
		disabled: { control: 'boolean' },
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		label: 'Button',
		disabled: false,
	},
}

export const Secondary: Story = {
	args: {
		label: 'Button',
		secondary: true,
		disabled: false,
	},
}
