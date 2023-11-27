import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import Button from '../Button'

import ModalBasic from '.'

const meta = {
	title: 'Components/ModalBasic',
	component: ModalBasic,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		isOpen: { control: 'boolean' },
		labelPrimary: { control: 'text' },
		labelSecondary: { control: 'text' },
		title: { control: 'text' },
	},
} satisfies Meta<typeof ModalBasic>

export default meta

export const Primary = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='w-full'>
			<ModalBasic
				isOpen={isOpen}
				title='Modal'
				labelPrimary='Acept'
				labelSecondary='Cancel'
				onClickPrimary={() => setIsOpen(false)}
				onClickSecondary={() => setIsOpen(false)}
				onClose={() => setIsOpen(false)}
			>
				<Button label='Open' onClick={() => setIsOpen(true)} />
			</ModalBasic>
		</div>
	)
}
