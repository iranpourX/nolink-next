"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Dropdown} from '../ui/dropdown/Dropdown'
import {DropdownItem} from '../ui/dropdown/DropdownItem'
import {cn} from "@/utils/helper";

export default function NotificationDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const [notifying, setNotifying] = useState(true)

    function toggleDropdown() {
        setIsOpen(!isOpen)
    }

    function closeDropdown() {
        setIsOpen(false)
    }

    const handleClick = () => {
        toggleDropdown()
        setNotifying(false)
    }

    return (
        <div className="relative">
            <button
                className="relative dropdown-toggle flex items-center justify-center transition-colors bg-transparent"
                onClick={handleClick}
            >
                <span
                    className={cn(
                        'absolute right-0 top-0 z-10 size-2 rounded-full bg-orange-400',
                        [!notifying ? 'hidden' : 'flex']
                    )}
                >
                    <span
                        className="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 animate-ping"></span>
                </span>
                <svg
                    className="size-5 fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        d="M208 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 16.8c80.9 8 144 76.2 144 159.2l0 29.1c0 43.7 17.4 85.6 48.3 116.6l2.8 2.8c8.3 8.3 13 19.6 13 31.3c0 24.5-19.8 44.3-44.3 44.3L44.3 416C19.8 416 0 396.2 0 371.7c0-11.7 4.7-23 13-31.3l2.8-2.8C46.6 306.7 64 264.8 64 221.1L64 192c0-83 63.1-151.2 144-159.2L208 16zm16 48C153.3 64 96 121.3 96 192l0 29.1c0 52.2-20.7 102.3-57.7 139.2L35.6 363c-2.3 2.3-3.6 5.4-3.6 8.7c0 6.8 5.5 12.3 12.3 12.3l359.4 0c6.8 0 12.3-5.5 12.3-12.3c0-3.3-1.3-6.4-3.6-8.7l-2.8-2.8c-36.9-36.9-57.7-87-57.7-139.2l0-29.1c0-70.7-57.3-128-128-128zM193.8 458.7c4.4 12.4 16.3 21.3 30.2 21.3s25.8-8.9 30.2-21.3c2.9-8.3 12.1-12.7 20.4-9.8s12.7 12.1 9.8 20.4C275.6 494.2 251.9 512 224 512s-51.6-17.8-60.4-42.7c-2.9-8.3 1.4-17.5 9.8-20.4s17.5 1.4 20.4 9.8z"/>
                </svg>
            </button>
            <Dropdown
                isOpen={isOpen}
                onClose={closeDropdown}
                className="absolute -right-[240px] mt-[17px] flex w-[350px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark sm:w-[361px] lg:right-0"
            >
                <div
                    className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
                    <h5 className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        Notification
                    </h5>
                    <button
                        onClick={toggleDropdown}
                        className="text-gray-500 transition dropdown-toggle dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                        <svg
                            className="fill-current"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col h-auto overflow-y-auto custom-scrollbar">

                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
                        >
                            <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/images/user/user-02.jpg"
                                    alt="User"
                                    className="w-full overflow-hidden rounded-full"
                                />
                                <span
                                    className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
                            </span>

                            <span className="block">
                                <span className="mb-1.5 space-x-1 block text-theme-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-medium text-gray-800 dark:text-white/90">Terry Franci</span>
                                    <span>requests permission to change</span>
                                    <span className="font-medium text-gray-800 dark:text-white/90">
                                        Project - Nganter App
                                    </span>
                                </span>
                                <span
                                    className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                                    <span>Project</span>
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>5 min ago</span>
                                </span>
                            </span>
                        </DropdownItem>
                    </li>

                    <li>
                        <DropdownItem
                            onItemClick={closeDropdown}
                            className="flex gap-3 rounded-lg border-b border-gray-100 p-3 px-4.5 py-3 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-white/5"
                        >
                            <span className="relative block w-full h-10 rounded-full z-1 max-w-10">
                                <Image
                                    width={40}
                                    height={40}
                                    src="/images/user/user-03.jpg"
                                    alt="User"
                                    className="w-full overflow-hidden rounded-full"
                                />
                                <span
                                    className="absolute bottom-0 right-0 z-10 h-2.5 w-full max-w-2.5 rounded-full border-[1.5px] border-white bg-success-500 dark:border-gray-900"></span>
                            </span>

                            <span className="block">
                                <span
                                    className="mb-1.5 block space-x-1  text-theme-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-medium text-gray-800 dark:text-white/90">Alena Franci</span>
                                    <span> requests permission to change</span>
                                    <span
                                        className="font-medium text-gray-800 dark:text-white/90">Project - Nganter App</span>
                                </span>
                                <span
                                    className="flex items-center gap-2 text-gray-500 text-theme-xs dark:text-gray-400">
                                    <span>Project</span>
                                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                    <span>8 min ago</span>
                                </span>
                            </span>
                        </DropdownItem>
                    </li>

                </ul>
                <Link
                    href="/"
                    className={cn(
                        'block px-4 py-2 mt-3 text-sm font-medium',
                        'text-center text-gray-700 bg-white border border-gray-300',
                        'rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800',
                        'dark:text-gray-400 dark:hover:bg-gray-700'
                    )}
                >
                    View All Notifications
                </Link>
            </Dropdown>
        </div>
    );
}
