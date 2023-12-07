interface ChipProps {
	variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark'
	className?: string
	label: string
}

export default function Chip({ label, variant = 'primary', className }: ChipProps) {
	const variantMap = {
		primary: 'bg-blue-500',
		secondary: 'bg-gray-500',
		success: 'bg-green-500',
		warning: 'bg-yellow-500',
		danger: 'bg-red-500',
		info: 'bg-blue-500',
		light: 'bg-gray-100',
		dark: 'bg-gray-800',
	}

	return <span className={`rounded-full px-3 py-0.5 ${variantMap[variant]} ${className}`}>{label}</span>
}
