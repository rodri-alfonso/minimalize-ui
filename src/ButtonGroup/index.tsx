import Button from '../Button'

interface ButtonGroupProps {
	labelPrimary: string
	labelSecondary: string
	onClickPrimary?: () => void
	onClickSecondary?: () => void
	disabledPrimary?: boolean
}

export default function ButtonGroup({
	labelPrimary,
	disabledPrimary,
	labelSecondary,
	onClickPrimary = () => {},
	onClickSecondary = () => {},
}: ButtonGroupProps) {
	return (
		<div className='w-full grid gap-2'>
			<Button label={labelPrimary} disabled={disabledPrimary} onClick={onClickPrimary} />
			<Button label={labelSecondary} onClick={onClickSecondary} secondary />
		</div>
	)
}
