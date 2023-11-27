import { createPortal } from 'react-dom'

export interface ModalBasicProps {
	title?: string
	labelPrimary?: string
	labelSecondary?: string
	onClickPrimary?: () => void
	onClickSecondary?: () => void
	isOpen: boolean
	onClose: () => void
	children?: React.ReactNode | React.ReactNode[]
}

export default function ModalBasic({
	isOpen,
	onClose,
	labelPrimary,
	labelSecondary,
	onClickPrimary,
	onClickSecondary,
	children,
	title,
}: ModalBasicProps) {
	return (
		<>
			{children}
			{isOpen &&
				createPortal(
					<section className='bg-black bg-opacity-80 absolute top-0 grid place-items-center w-full z-10 h-full transition-all'>
						<div className={`w-4/5 rounded-xl bg-white p-6 relative`}>
							<button
								className='absolute top-2 bg-gray-100 right-2 rounded-lg hover:bg-gray-200 hover:text-gray-700 text-gray-500 p-2 active:scale-90 transition-all'
								onClick={onClose}
							>
								<svg width='14' height='14' viewBox='0 0 14 14' fill='none' className=''>
									<path
										d='M12.8925 0.3025C12.5025 -0.0874998 11.8725 -0.0874998 11.4825 0.3025L6.5925 5.1825L1.7025 0.2925C1.3125 -0.0975 0.6825 -0.0975 0.2925 0.2925C-0.0975 0.6825 -0.0975 1.3125 0.2925 1.7025L5.1825 6.5925L0.2925 11.4825C-0.0975 11.8725 -0.0975 12.5025 0.2925 12.8925C0.6825 13.2825 1.3125 13.2825 1.7025 12.8925L6.5925 8.0025L11.4825 12.8925C11.8725 13.2825 12.5025 13.2825 12.8925 12.8925C13.2825 12.5025 13.2825 11.8725 12.8925 11.4825L8.0025 6.5925L12.8925 1.7025C13.2725 1.3225 13.2725 0.6825 12.8925 0.3025Z'
										fill='currentColor'
									/>
								</svg>
							</button>
							<div className='grid justify-center h-full gap-6 py-5 w-4/5 mx-auto'>
								<span className='text-center pb-2 font-semibold text-xl'>{title}</span>
								<div className='w-full px-8 font-semibold'>
									<button
										className='mb-3 bg-gray-800 text-white px-9 w-full py-2 rounded-xl active:scale-95 transition-all'
										onClick={onClickPrimary}
									>
										{labelPrimary}
									</button>
									<button
										className='border border-solid hover:border-gray-400 hover:text-gray-700 border-gray-300 text-gray-500 px-9 py-2  w-full rounded-xl active:scale-95 transition-all'
										onClick={onClickSecondary}
									>
										{labelSecondary}
									</button>
								</div>
							</div>
						</div>
					</section>,
					document.body
				)}
		</>
	)
}
