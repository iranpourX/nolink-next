'use client'

import React, {useEffect, useRef, useState} from "react"
import {useForm, SubmitHandler} from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
import {cn} from "@/utils/helper"
import Btn from "@/components/ui/button/Btn"
import {OTPInput, REGEXP_ONLY_DIGITS} from "input-otp"

interface IFormInputs {
    phone: string
}

export default function Form() {
    const [page, setPage] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const [countDown, setCountDown] = useState<number>(0)
    const [phoneNumber, setPhoneNumber] = useState<string>('')

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm<IFormInputs>()


    const onSubmitPhone: SubmitHandler<IFormInputs> = async (value) => {
        setLoading(true)
        setPhoneNumber(value.phone)

        const response = await fetch('/api/auth/send-otp', {
            method: 'POST',
            body: JSON.stringify(value)
        })
        const data = await response.json()
        if (data.success) {
            setPage(2)
        }

        setLoading(false)
    }

    useEffect(() => {
        const secondInterval = setInterval(() => {
            setCountDown(prev => (prev - 1 < 0 ? 0 : prev - 1))
        }, 1000)

        return () => {
            clearInterval(secondInterval)
        }
    })

    const OTPSubmit = async (e: string) => {
        const response = await fetch('/api/auth/verify-otp', {
            method: 'POST',
            body: JSON.stringify({
                phone: phoneNumber,
                code: e
            })
        })
        const data = await response.json()

        console.log(data)
        if (data.success) {
            console.log('Otp verify otp')
        }
    }

    const resend = () => {
        setCountDown(10)
    }

    const GetNumber = () => {
        return (
            <div>
                <div className="mb-4 sm:mb-8 px-6 flex flex-col justify-center items-center">
                    <h1 className="mb-2 font-semibold text-gray-800 text-xl">
                        Sign In
                    </h1>
                    <p className={'text-sm text-gray-500'}>
                        To use all features of Nolink, Enter your phone number, you’ll receive a one-time code
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmitPhone)}
                    className="flex flex-col">
                    <label htmlFor={'phone'} className="my-label">Phone</label>
                    <input
                        maxLength={11}
                        id="phone"
                        placeholder="09.."
                        inputMode={'tel'}
                        className={cn(
                            'block w-full rounded-lg border border-gray-300 mb-1',
                            'bg-gray-50/85 p-2.5 text-sm text-gray-800 focus:outline-0',
                            'focus:ring-2 ring-blue-100 focus:border-blue-200',
                            [
                                errors.phone &&
                                'ring-red-400 border-red-400 focus:border-red-400 focus:ring-red-400'
                            ]
                        )}
                        autoComplete={'off'}
                        {...register("phone", {
                            required: 'phone number is required',
                            pattern: {
                                value: /^\d+$/,
                                message: "This input is number only.",
                            },
                            minLength: {
                                value: 10,
                                message: 'This input exceed maxLength'
                            }
                        })}
                    />

                    <ErrorMessage
                        errors={errors}
                        name="phone"
                        render={({message}) => <small
                            className="px-1 text-red-500 text-xs">{message}</small>}
                    />

                    {!errors.phone && (<small className="h-4 block"></small>)}

                    <span className={'text-sm my-2'}>I accept privacy policy of using Nolink</span>

                    <Btn inType={'submit'} loading={loading}>
                        submit
                    </Btn>
                </form>

            </div>
        )
    }

    return (
        <>
            {
                (() => {
                    switch (page) {
                        case 1:
                            return (<GetNumber/>)
                        case 2:
                            return (
                                <div className="relative">
                                    <div className="flex flex-col justify-center items-center">
                                        <svg
                                            className="size-24 mt-4 fill-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 384 512"
                                        >
                                            <path className="icon-secondary"
                                                  d="M48 64l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48l-32 0 0 24c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-24L96 16C69.5 16 48 37.5 48 64z"/>
                                            <path
                                                d="M256 16l0 24c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-24L96 16C69.5 16 48 37.5 48 64l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48l-32 0zm-16 0l-96 0 0 24c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-24zM32 64C32 28.7 60.7 0 96 0L288 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64z"/>
                                        </svg>

                                        <span className="font-medium mt-4">Verify your phone</span>
                                        <span className="font-medium mt-4 text-sm text-gray-500">
                                                                    Enter the verification code we sent to
                                                                </span>
                                        <span className="font-semibold mt-2 text-sm text-gray-800">
                                                                    09197459963 -  <button
                                            className="text-blue-500">edit</button>
                                                                </span>
                                        <OTPInput
                                            inputMode="tel"
                                            pattern={REGEXP_ONLY_DIGITS}
                                            maxLength={4}
                                            onComplete={(e) => OTPSubmit(e)}
                                            autoComplete={'one-time-code'}
                                            containerClassName="group mt-4 flex items-center has-[:disabled]:opacity-30"
                                            render={({slots}) => (
                                                <div className="flex gap-4">
                                                    {slots.slice(0, 4)
                                                        .map(({char, hasFakeCaret, isActive}, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={cn(
                                                                    'relative size-12 text-xl',
                                                                    'flex items-center justify-center',
                                                                    'transition-all duration-100 border',
                                                                    ' rounded-lg outline-0 outline-blue-100',
                                                                    {'outline-3 outline-blue-300': isActive}
                                                                )}
                                                            >
                                                                {char !== null && <div>{char}</div>}
                                                                {hasFakeCaret &&
                                                                    <div
                                                                        className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
                                                                        <div
                                                                            className="w-0.5 h-8 bg-gray-400"/>
                                                                    </div>
                                                                }
                                                            </div>
                                                        ))}
                                                </div>
                                            )}
                                        />


                                        <span className="font-medium my-4 text-sm text-gray-800">
                                            Didn’t receive a code? ( {countDown}s ) -
                                            <button
                                                onClick={resend}
                                                disabled={countDown > 0}
                                                className="text-blue-500 font-semibold disabled:text-gray-400 ml-1"
                                            >
                                                Resend
                                            </button>
                                        </span>

                                        <Btn className={'w-full'} loading={loading}>
                                            Continue
                                        </Btn>
                                    </div>
                                </div>
                            )
                    }
                })()
            }

        </>
    )
}