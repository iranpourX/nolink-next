import React, {ReactNode} from 'react'

interface ButtonProps {
    children?: ReactNode
}

const CardFooter: React.FC<ButtonProps> = ({children}) => {

    return (
        <div className="py-3 px-8 flex items-center justify-end border-t border-t-gray-200 dark:border-t-gray-700">
            {children}
        </div>
    )
}

export default CardFooter
