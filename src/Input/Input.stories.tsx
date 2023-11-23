import type { Meta, StoryObj } from '@storybook/react'

import Input from '../Input'

const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		// backgroundColor: { control: 'color' },
	},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'This is an input',
		placeholder: 'This is a placeholder',
	},
}
