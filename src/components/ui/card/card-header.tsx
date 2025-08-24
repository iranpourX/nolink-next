import React, {ReactNode} from 'react'

interface ButtonProps {
    children?: ReactNode
    title: string
}

const CardHeader: React.FC<ButtonProps> = ({children, title}) => {
    return (
        <div
            className="flex items-center justify-between py-4 px-8 border-b border-b-gray-200 dark:border-b-gray-700">
            <h2 className="text-base font-semibold text-gray-800 dark:text-white">{title}</h2>

            {children}
        </div>
    )
}

export default CardHeader
