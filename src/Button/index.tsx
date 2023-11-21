interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
	secondary?: boolean
	className?: string
}

export default function Button({ label, secondary, className, ...props }: Props) {
	const secondaryStyle =
		'border border-solid border-gray-800 text-gray-800 hover:bg-gray-600 hover:border-gray-600 hover:text-white disabled:bg-transparent disabled:hover:text-gray-800  '

	return (
		<button
			{...props}
			className={`disabled:scale-100 disabled:cursor-not-allowed px-4 py-2 active:scale-95 rounded-lg transition-all font-medium disabled:opacity-30 hover:bg-gray-600
             ${secondary ? secondaryStyle : 'bg-gray-800 text-white disabled:hover:bg-gray-800'} 
             ${className}`}
		>
			{label}
		</button>
	)
}
