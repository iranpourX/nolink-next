import React, {ReactNode} from 'react'

interface ButtonProps {
    children: ReactNode
    title?: string
    className?: string
}

const Card: React.FC<ButtonProps> = ({children, className}) => {

    return (
        <div className={`rounded-lg border border-gray-100 dark:border-gray-800 shadow-xs bg-white dark:bg-gray-800 ${className}`}>

            {children}

        </div>
    );
};

export default Card;
