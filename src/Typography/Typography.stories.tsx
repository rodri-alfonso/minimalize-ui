import type { Meta, StoryObj } from '@storybook/react'

import Typography from '../Typography/'

const meta = {
	title: 'Components/Typography',
	component: Typography,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
		as: { type: 'string' },
		variant: { type: 'string' },
		text: { type: 'string' },
	},
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Body1: Story = {
	args: {
		as: 'h1',
		variant: 'body1',
		text: 'Body 1',
	},
}

export const Body2: Story = {
	args: {
		as: 'h2',
		variant: 'body2',
		text: 'Body 2',
	},
}

export const H3: Story = {
	args: {
		as: 'h3',
		variant: 'h3',
		text: 'H3',
	},
}
