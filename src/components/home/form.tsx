'use client'

import {cn} from "@/utils/helper";
import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useUser} from "@/context/UserContext"
import {ErrorMessage} from "@hookform/error-message";

interface IForm {
    url: string,
    domain_id?: string
    link_category_id?: string
    is_active?: boolean
    description: string
    password?: string
    user_title?: string
    start_date?: string
    end_date?: string
}

export default function Form() {
    const [loading, setLoading] = useState<boolean>(false)
    const {setShowLoginPopup, user} = useUser()

    const {
        handleSubmit,
        register,
        formState: {errors},
        reset,
        watch,
        setValue
    } = useForm<IForm>()

    const onSubmitInfo: SubmitHandler<IForm> = async (value) => {
        setLoading(true)
        const response = await fetch('/api/links/create', {
            body: JSON.stringify(value),
        })
        const data = await response.json()
        if (data.status === 200 && data.data.status.code === 200) {
            // toast.success(data.status.message)

        }
        setLoading(false)
    }

    const pasteIcon = () => {
        const expression = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        const regex = new RegExp(expression)
        if (navigator.clipboard && navigator.clipboard.readText) {
            navigator.clipboard.readText()
                .then(clipText => {
                    if (clipText.match(regex)) {
                        reset({url: clipText})
                    }
                })
                .catch(err => {
                    console.error('Failed to read clipboard contents: ', err)
                    alert('Please grant clipboard access to paste.')
                });
        } else {
            alert('Clipboard API not supported in this browser.')
        }
    }

    const cleanIcon = () => {
        setValue('url', '')
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmitInfo)}
            className={'w-full mt-8'}>
            <div
                className="relative md:bg-transparent bg-white border md:border-none border-gray-300 rounded-lg md:rounded-none overflow-hidden">
                <input
                    type="text"
                    placeholder="paste link"
                    {...register('url', {
                        required: 'مقدار خالی است',
                        pattern: {
                            value: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
                            message: 'its not link'
                        }
                    })}
                    className={cn(
                        'dark:bg-dark-900 w-full rounded-lg md:border md:border-gray-300',
                        'bg-white py-3.5 pl-4 pr-4 md:pr-38 text-lg text-gray-800 shadow-none md:shadow-xs',
                        'placeholder:text-gray-400 focus:border-blue-300 focus:outline-0',
                        'dark:border-gray-800 dark:bg-gray-900',
                        'dark:text-white dark:placeholder:text-gray-200'
                    )}
                />

                <div
                    className={cn(
                        'relative md:p-0 p-4 md:absolute flex gap-4 md:gap-2 justify-between',
                        'md:justify-center items-center md:right-2 md:top-1/2 md:-translate-y-1/2 md:-tracking-[0.2px]'
                    )}>

                    {
                        !!watch('url')
                            ? (<button
                                onClick={cleanIcon}
                                type={'button'}
                                className={cn(
                                    'flex items-center justify-center border-none py-3 md:py-2 px-2',
                                    'text-white bg-gray-100 md:bg-transparent rounded-lg md:rounded-none w-full md:w-auto',
                                    'dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 gap-1 md:gap-0'
                                )}>
                                <svg
                                    className="size-5 md:size-6 fill-gray-400 dark:fill-gray-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path
                                        d="M7.5 105c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l151 151 151-151c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-151 151 151 151c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-151-151-151 151c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l151-151-151-151z"/>
                                </svg>
                                <span className={'md:hidden text-gray-400 text-sm'}>clear</span>
                            </button>)
                            : (<button
                                onClick={pasteIcon}
                                type={'button'}
                                className={cn(
                                    'flex items-center justify-center border-none py-3 md:py-2 px-2',
                                    'text-white bg-gray-100 md:bg-transparent rounded-lg md:rounded-none w-full md:w-auto',
                                    'dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 gap-1 md:gap-0'
                                )}>

                                <svg
                                    className="size-5 md:size-6 fill-gray-400 dark:fill-gray-200"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512">
                                    <path
                                        d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm112 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
                                </svg>
                                <span className={'md:hidden text-gray-400 text-sm'}>copy</span>
                            </button>)
                    }

                    {
                        user
                            ? (<button
                                type={'submit'}
                                className={cn(
                                    'flex',
                                    'items-center rounded-lg border justify-center border-blue-600 bg-blue-600 w-full',
                                    'px-4 py-2 text-base font-semibold text-white',
                                    'dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400'
                                )}>
                                <span>Short it</span>
                            </button>)
                            : (<button
                                onClick={() => setShowLoginPopup(true)}
                                type={'button'}
                                className={cn(
                                    'flex',
                                    'items-center rounded-lg border justify-center border-blue-600 bg-blue-600 w-full',
                                    'px-4 py-2 text-base font-semibold text-white',
                                    'dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400'
                                )}>
                                <span>login first</span>
                            </button>)
                    }

                </div>
            </div>
            <ErrorMessage
                errors={errors}
                name="url"
                render={({message}) => <small
                    className="px-1 text-red-500 text-xs">{message}</small>}
            />

            {!errors.url && (<small className="h-6 block"></small>)}
        </form>
    )
}