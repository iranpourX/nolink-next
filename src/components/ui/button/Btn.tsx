import React, {ReactNode} from 'react'
import {cn} from '@/utils/helper'

interface ButtonProps {
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
    variant?: "primary" | "outline"
    startIcon?: ReactNode
    endIcon?: ReactNode
    onClick?: () => void
    loading?: boolean
    className?: string
    inType?: "button" | "submit"
    form?: string
    ref?: React.ForwardedRef<HTMLButtonElement>
}

const Btn: React.FC<ButtonProps> =
    ({
         children,
         size = "md",
         variant = "primary",
         onClick,
         className = "",
         loading = false,
         inType = "button",
         form,
        ref
     }) => {
        const sizeClasses = {
            sm: "px-3.5 py-2 text-xs",
            md: "px-4 py-2.5 text-sm",
            lg: "px-4 py-2.5 text-base",
            xl: "px-5 py-3 text-lg"
        }

        const variantClasses = {
            primary: "bg-blue-500 text-white shadow-xs disabled:opacity-50",
            outline: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
        }

        return (
            <button
                ref={ref}
                type={inType}
                className={cn(
                    'flex items-center justify-center font-medium gap-2',
                    'rounded-lg transition disabled:cursor-not-allowed',
                    sizeClasses[size], variantClasses[variant], className
                )}
                form={form}
                onClick={onClick}
                disabled={loading}
            >
                {loading ? (
                    <svg className="size-5 fill-white animate-spin"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512">
                        <path
                            d="M457 372c11.5 6.6 26.3 2.7 31.8-9.3C503.7 330.2 512 294.1 512 256C512 122.7 410.1 13.2 280 1.1C266.8-.1 256 10.7 256 24s10.8 23.9 24 25.4C383.5 61.2 464 149.2 464 256c0 29.3-6.1 57.3-17 82.6c-5.3 12.2-1.5 26.8 10 33.5z"/>
                    </svg>
                ) : children}
            </button>
        )
    }

export default Btn
