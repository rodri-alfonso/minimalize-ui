import React from 'react'

export interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
	text: string
	as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
	variant?:
		| 'body1'
		| 'body2'
		| 'button'
		| 'caption'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
}

export default function Typography({ text, variant = 'body1', as = 'p', ...props }: TypographyProps) {
	const VARIANT_CLASSNAME_MAP = {
		body1: 'text-base font-normal',
		body2: 'text-sm font-normal',
		button: 'text-sm font-medium',
		caption: 'text-xs font-normal',
		h1: 'text-3xl font-light',
		h2: 'text-2xl font-light',
		h3: 'text-xl font-light',
		h4: 'text-lg font-light',
		h5: 'text-base font-light',
		h6: 'text-sm font-light',
		subtitle1: 'text-base font-medium',
		subtitle2: 'text-sm font-medium',
	}

	return React.createElement(
		as,
		{
			...props,
			className: [VARIANT_CLASSNAME_MAP[variant], props.className].join(' '),
		},
		text
	)
}
