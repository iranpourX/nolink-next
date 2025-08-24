"use client"

import React, {useEffect, useState} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {ErrorMessage} from '@hookform/error-message'
import {OTPInput, REGEXP_ONLY_DIGITS} from 'input-otp'
import {cn} from '@/utils/helper'
import {toast} from 'sonner'
import {Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import Btn from "@/components/ui/button/Btn";
import {useUser} from "@/context/UserContext"
import UserDropdown from "@/components/header/UserDropdown";

interface IFormInputs {
    phone: string
}

export default function AuthForm() {
    const [page, setPage] = useState<number>(1)
    const [countDown, setCountDown] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {showLoginPopup, setShowLoginPopup, user, loading: load} = useUser()

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
        setShowLoginPopup(false)
    }

    useEffect(() => {
        setIsOpen(showLoginPopup)
    }, [showLoginPopup])

    const change = (id: number) => {
        setPage(id)
    }

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
            body: JSON.stringify(value),
        })
        const {success} = await response.json()
        if (success) {
            setPage(2)
            toast.success('پیام ارسال شد')
            setCountDown(5000)
        }
        setLoading(false)
    }

    const OTPSubmit = async (e: string) => {
        const response = await fetch('/api/auth/verify-otp', {
            method: 'POST',
            body: JSON.stringify({
                phone: phoneNumber,
                code: e
            })
        })
        const {success} = await response.json()
        if (success) {
            toast.success('Otp verify otp')
            window.location.reload()
        }
    }

    useEffect(() => {
        const secondInterval = setInterval(() => {
            setCountDown(prev => (prev - 1 < 0 ? 0 : prev - 1))
        }, 1000)

        return () => {
            clearInterval(secondInterval)
        }
    })

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
                    <label htmlFor={'phone'} className="my-label">phone</label>
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
                user
                    ? (<UserDropdown toRight={true}/>)
                    :
                    load
                        ? (<>dsad;s;aldlsad</>)
                        : (<button
                            onClick={open}
                            type={'button'}
                            className="px-6 py-3 text-sm bg-white rounded-lg shadow flex justify-center items-center gap-3">
                            ورود | ثبت نام
                            <svg
                                className={'size-5 fill-gray-600 rotate-180'}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path
                                    d="M347.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-128-128c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L297.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l281.4 0L196.7 372.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l128-128zM336 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c44.2 0 80-35.8 80-80l0-288c0-44.2-35.8-80-80-80l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-96 0z"/>
                            </svg>
                        </button>)
            }

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <DialogBackdrop className="fixed inset-0 bg-black/40"/>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-sm rounded-lg bg-white p-6 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
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
                                                            autoComplete={'one-time-code'}
                                                            onComplete={(e) => OTPSubmit(e)}
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

                                                        <button
                                                            onClick={() => change(3)}
                                                            className="bg-transparent border text-sm mt-6 border-transparent text-blue-500 px-4">
                                                            Enter with Password
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                    }
                                })()
                            }

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

            {/*<div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">*/}
            {/*    <div className="p-10 shadow-2xs border border-gray-200 rounded-lg">*/}

            {/*        {*/}
            {/*            (() => {*/}
            {/*                switch (page) {*/}
            {/*                    case 1:*/}
            {/*                        return (<GetNumber/>)*/}
            {/*                    case 2:*/}
            {/*                        return (*/}
            {/*                            <div className="relative">*/}
            {/*                                <div className="flex flex-col justify-center items-center">*/}
            {/*                                    <svg*/}
            {/*                                        className="size-24 mt-4 fill-gray-400"*/}
            {/*                                        xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                        viewBox="0 0 384 512"*/}
            {/*                                    >*/}
            {/*                                        <path className="icon-secondary"*/}
            {/*                                              d="M48 64l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48l-32 0 0 24c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-24L96 16C69.5 16 48 37.5 48 64z"/>*/}
            {/*                                        <path*/}
            {/*                                            d="M256 16l0 24c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-24L96 16C69.5 16 48 37.5 48 64l0 384c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48l-32 0zm-16 0l-96 0 0 24c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-24zM32 64C32 28.7 60.7 0 96 0L288 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64z"/>*/}
            {/*                                    </svg>*/}

            {/*                                    <span className="font-medium mt-4">Verify your phone</span>*/}
            {/*                                    <span className="font-medium mt-4 text-sm text-gray-500">*/}
            {/*                                        Enter the verification code we sent to*/}
            {/*                                    </span>*/}
            {/*                                    <span className="font-semibold mt-2 text-sm text-gray-800">*/}
            {/*                                        09197459963 -  <button className="text-blue-500">edit</button>*/}
            {/*                                    </span>*/}

            {/*                                    <OTPInput*/}
            {/*                                        inputMode="tel"*/}
            {/*                                        pattern={REGEXP_ONLY_DIGITS}*/}
            {/*                                        maxLength={5}*/}
            {/*                                        autoComplete={'one-time-code'}*/}
            {/*                                        containerClassName="group mt-4 flex items-center has-[:disabled]:opacity-30"*/}
            {/*                                        render={({slots}) => (*/}
            {/*                                            <div className="flex gap-4">*/}
            {/*                                                {slots.slice(0, 5)*/}
            {/*                                                    .map(({char, hasFakeCaret, isActive}, idx) => (*/}
            {/*                                                        <div*/}
            {/*                                                            key={idx}*/}
            {/*                                                            className={cn(*/}
            {/*                                                                'relative size-12 text-xl',*/}
            {/*                                                                'flex items-center justify-center',*/}
            {/*                                                                'transition-all duration-100 border',*/}
            {/*                                                                ' rounded-lg outline-0 outline-blue-100',*/}
            {/*                                                                {'outline-3 outline-blue-300': isActive}*/}
            {/*                                                            )}*/}
            {/*                                                        >*/}
            {/*                                                            {char !== null && <div>{char}</div>}*/}
            {/*                                                            {hasFakeCaret &&*/}
            {/*                                                                <div*/}
            {/*                                                                    className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">*/}
            {/*                                                                    <div*/}
            {/*                                                                        className="w-0.5 h-8 bg-gray-400"/>*/}
            {/*                                                                </div>*/}
            {/*                                                            }*/}
            {/*                                                        </div>*/}
            {/*                                                    ))}*/}
            {/*                                            </div>*/}
            {/*                                        )}*/}
            {/*                                    />*/}

            {/*                                    <span className="font-medium my-4 text-sm text-gray-800">*/}
            {/*                                        Didn’t receive a code? ( {countDown}s ) -*/}
            {/*                                        <button*/}
            {/*                                            onClick={resend}*/}
            {/*                                            disabled={countDown > 0}*/}
            {/*                                            className="text-blue-500 font-semibold disabled:text-gray-400 ml-1"*/}
            {/*                                        >*/}
            {/*                                            Resend*/}
            {/*                                        </button>*/}
            {/*                                    </span>*/}

            {/*                                    <Btn className={'w-full'} loading={loading}>*/}
            {/*                                        Continue*/}
            {/*                                    </Btn>*/}

            {/*                                    <button*/}
            {/*                                        onClick={() => change(3)}*/}
            {/*                                        className="bg-transparent border text-sm mt-6 border-transparent text-blue-500 px-4">*/}
            {/*                                        Enter with Password*/}
            {/*                                    </button>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        )*/}
            {/*                    case 3:*/}
            {/*                        return (*/}
            {/*                            <div>*/}
            {/*                                <div className="mb-4 sm:mb-8 flex flex-col justify-center items-center">*/}
            {/*                                    <h1 className="mb-2 font-semibold text-gray-800 text-xl">*/}
            {/*                                        Enter your Password*/}
            {/*                                    </h1>*/}
            {/*                                </div>*/}

            {/*                                <form onSubmit={handleSubmit2(onSubmitPassword)}*/}
            {/*                                      className="gap-3 flex flex-col">*/}
            {/*                                    <Field className={'relative'}>*/}
            {/*                                        <label htmlFor={'password'} className="my-label">Password</label>*/}
            {/*                                        <input*/}
            {/*                                            maxLength={30}*/}
            {/*                                            id="password"*/}
            {/*                                            placeholder="Enter Password"*/}
            {/*                                            className={cn(*/}
            {/*                                                'block w-full rounded-lg border border-gray-300',*/}
            {/*                                                'bg-gray-50/85 p-2.5 text-sm text-gray-800 focus:outline-0',*/}
            {/*                                                'focus:ring-1 ring-blue-400 focus:border-blue-400',*/}
            {/*                                                [*/}
            {/*                                                    passwordError.password &&*/}
            {/*                                                    'ring-red-500 border-red-500 focus:border-red-500 focus:ring-red-500'*/}
            {/*                                                ]*/}
            {/*                                            )}*/}
            {/*                                            autoComplete={'off'}*/}
            {/*                                            type={showPassword ? "text" : "password"}*/}
            {/*                                            {...register2("password", {*/}
            {/*                                                required: 'password is required',*/}
            {/*                                                pattern: {*/}
            {/*                                                    value: /^\d+$/,*/}
            {/*                                                    message: "This input is number only.",*/}
            {/*                                                },*/}
            {/*                                                minLength: {*/}
            {/*                                                    value: 3,*/}
            {/*                                                    message: 'This input exceed maxLength'*/}
            {/*                                                }*/}
            {/*                                            })}*/}
            {/*                                        />*/}

            {/*                                        <span*/}
            {/*                                            onClick={() => setShowPassword(!showPassword)}*/}
            {/*                                            className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"*/}
            {/*                                        >*/}
            {/*                                            {showPassword ? (*/}
            {/*                                                <svg className={'size-5 fill-gray-400'}*/}
            {/*                                                     xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     viewBox="0 0 576 512">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M117.2 136C160.3 96 217.6 64 288 64s127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-13.3 32-42.1 80-85.2 120c-43.1 40-100.4 72-170.8 72s-127.7-32-170.8-72C74.1 336 45.3 288 32 256c13.3-32 42.1-80 85.2-120zM288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM192 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>*/}
            {/*                                                </svg>*/}
            {/*                                            ) : (*/}
            {/*                                                <svg className={'size-5 fill-gray-400'}*/}
            {/*                                                     xmlns="http://www.w3.org/2000/svg"*/}
            {/*                                                     viewBox="0 0 640 512">*/}
            {/*                                                    <path*/}
            {/*                                                        d="M25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4zM605.5 268.3c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-51.2 0-96 14.8-133.9 36.8l27.3 21.5C244.6 74.2 280.2 64 320 64c70.4 0 127.7 32 170.8 72c43.1 40 71.9 88 85.2 120c-9.2 22.1-25.9 52-49.5 81.5l25.1 19.8c25.6-32 43.7-64.4 53.9-89zM88.4 154.7c-25.6 32-43.7 64.4-53.9 89c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c51.2 0 96-14.8 133.9-36.8l-27.3-21.5C395.4 437.8 359.8 448 320 448c-70.4 0-127.7-32-170.8-72C106.1 336 77.3 288 64 256c9.2-22.1 25.9-52 49.5-81.5L88.4 154.7zM320 384c16.7 0 32.7-3.2 47.4-9.1l-30.9-24.4c-5.4 .9-10.9 1.4-16.5 1.4c-51 0-92.8-39.8-95.8-90.1l-30.9-24.4c-.9 6-1.3 12.2-1.3 18.5c0 70.7 57.3 128 128 128zM448 256c0-70.7-57.3-128-128-128c-16.7 0-32.7 3.2-47.4 9.1l30.9 24.4c5.4-.9 10.9-1.4 16.5-1.4c51 0 92.8 39.8 95.8 90.1l30.9 24.4c.9-6 1.3-12.2 1.3-18.5z"/>*/}
            {/*                                                </svg>*/}
            {/*                                            )}*/}
            {/*                                        </span>*/}

            {/*                                        <ErrorMessage*/}
            {/*                                            errors={passwordError}*/}
            {/*                                            name="password"*/}
            {/*                                            render={({message}) => <small*/}
            {/*                                                className="px-1 text-red-500 text-xs">{message}</small>}*/}
            {/*                                        />*/}

            {/*                                        {!passwordError.password && (<small className="h-6 block"></small>)}*/}

            {/*                                    </Field>*/}

            {/*                                    <Btn inType={'submit'} className={'w-full'} loading={loading}>*/}
            {/*                                        continue*/}
            {/*                                    </Btn>*/}

            {/*                                </form>*/}
            {/*                                <button*/}
            {/*                                    onClick={backToOtp}*/}
            {/*                                    className="bg-transparent w-full border text-sm mt-6 border-transparent text-blue-500 px-4">*/}
            {/*                                    Back to OTP*/}
            {/*                                </button>*/}
            {/*                            </div>*/}
            {/*                        )*/}
            {/*                }*/}
            {/*            })()*/}
            {/*        }*/}

            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}


