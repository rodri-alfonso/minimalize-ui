import type { Meta, StoryObj } from '@storybook/react'

import ButtonGroup from '../ButtonGroup'

const meta = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		labelPrimary: 'ButtonGroup',
		labelSecondary: 'ButtonGroup',
	},
}
