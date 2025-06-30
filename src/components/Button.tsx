export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className='px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white' onClick={onClick}>
    {children}
  </button>
)
