import type { Meta, StoryObj } from '@storybook/react'

import Chip from '.'

const meta = {
	title: 'Components/Chip',
	component: Chip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			type: 'string',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
		},
	},
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		label: 'Chip',
		variant: 'primary',
	},
}
