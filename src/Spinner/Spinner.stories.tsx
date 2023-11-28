import type { Meta, StoryObj } from '@storybook/react'

import Spinner from '.'

const meta = {
	title: 'Components/Spinner',
	component: Spinner,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: { type: 'string', options: ['sm', 'md', 'lg'] },
	},
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		size: 'md',
	},
}
