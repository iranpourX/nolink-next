import type React from "react"
import Link from "next/link"
import {cn} from "@/utils/helper"

interface DropdownItemProps {
    tag?: "a" | "button"
    href?: string
    onClick?: () => void
    onItemClick?: () => void
    baseClassName?: string
    className?: string
    children: React.ReactNode
}

export const DropdownItem: React.FC<DropdownItemProps> =
    ({
         tag = "button",
         href,
         onClick,
         onItemClick,
         baseClassName = "flex items-center w-full gap-3 rounded-lg p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800",
         className = "",
         children,
     }) => {
        const combinedClasses = cn(`${baseClassName} ${className}`.trim())

        const handleClick = (event: React.MouseEvent) => {
            if (tag === "button") {
                event.preventDefault()
            }
            if (onClick) {
                onClick()
            }
            if (onItemClick) {
                onItemClick()
            }
        }

        if (tag === "a" && href) {
            return (
                <Link href={href} className={combinedClasses} onClick={handleClick}>
                    {children}
                </Link>
            )
        }

        return (
            <button onClick={handleClick} className={combinedClasses}>
                {children}
            </button>
        )
    }
