interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
	secondary?: boolean
	className?: string
	variant?: 'default' | 'outlined' | 'ghost' | 'text'
	rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
}

export default function Button({ label, secondary, className, ...props }: Props) {
	const secondaryStyle =
		'border border-solid hover:border-gray-400 hover:text-gray-700 border-gray-300 text-gray-500 hover:bg-gray-50'

	return (
		<button
			{...props}
			className={`disabled:scale-100 disabled:cursor-not-allowed px-4 py-2 active:scale-95 rounded-lg transition-all font-medium disabled:opacity-30
             ${secondary ? secondaryStyle : 'hover:bg-gray-600 bg-gray-800 text-white disabled:hover:bg-gray-800'} 
             ${className}`}
		>
			{label}
		</button>
	)
}
