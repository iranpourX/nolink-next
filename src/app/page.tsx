import type {Metadata} from "next"
import Link from "next/link"
// import {cn} from "@/utils/helper";
import React from "react";
import AuthForm from "@/components/auth/AuthForm";
import Form from "@/components/home/form"

export const metadata: Metadata = {
    title: 'Nolink'
}

export default function Home() {
    return (
        <div className={'min-h-screen relative'}>
            <header className="px-4 lg:px-16 py-6 lg:py-8 flex justify-between items-center">

                <AuthForm/>

                <Link prefetch={false} href="/" className="flex items-center">
                    <h1 className="text-center justify-start text-black text-2xl font-extrabold">نولینک</h1>
                    <div className="relative">
                        <svg className={'size-12 fill-none'} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.5 27.75V22.5C25.5 17.5294 21.4706 13.5 16.5 13.5V13.5C11.5294 13.5 7.5 17.5294 7.5 22.5L7.5 27.75"
                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                            <path
                                d="M16.3865 22.875V25.5C16.3865 32.1274 21.7591 37.5 28.3865 37.5V37.5C35.014 37.5 40.3865 32.1274 40.3865 25.5V21.375C40.3865 15.576 35.6855 10.875 29.8865 10.875V10.875"
                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                            <circle cx="33" cy="22.875" r="2.25" fill="#0094FF"/>
                        </svg>

                    </div>
                </Link>
            </header>

            <div className={'relative'}>
                <div className="flex justify-center items-center mt-16 gap-y-6">
                    <div className="flex flex-col justify-start items-center p-4 gap-y-8">
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="text-center text-2xl md:text-4xl font-bold">
                                کوتاه کــن، بـسـنـج، پـیـشـرفـت کــن
                            </h2>
                            <h3 className="text-center text-gray-500 text-base md:text-lg font-medium">
                                نولینک، راهی سریع و هوشمند برای کوتاه‌کردن و مدیریت لینک‌های طـــــــــــولانی
                            </h3>
                        </div>

                        <Form/>

                        <div className="rounded-lg flex flex-col w-full overflow-hidden">

                            <div
                                className="px-4 py-6 bg-white last:border-none border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
                                <div className="flex justify-center items-center gap-3">
                                    <div className="relative overflow-hidden">
                                        <svg className={'size-8 fill-none'} viewBox="0 0 48 48"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M25.5 27.75V22.5C25.5 17.5294 21.4706 13.5 16.5 13.5V13.5C11.5294 13.5 7.5 17.5294 7.5 22.5L7.5 27.75"
                                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                                            <path
                                                d="M16.3865 22.875V25.5C16.3865 32.1274 21.7591 37.5 28.3865 37.5V37.5C35.014 37.5 40.3865 32.1274 40.3865 25.5V21.375C40.3865 15.576 35.6855 10.875 29.8865 10.875V10.875"
                                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                                            <circle cx="33" cy="22.875" r="2.25" fill="#0094FF"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <div className="inline-flex justify-start items-start gap-2">
                                            <div
                                                className="justify-start text-Color-Primary-Primary text-base font-medium leading-none">amzn.id/ffYHHcGm
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch justify-start text-slate-500 text-xs font-normal leading-none">amazon.com/dp/B0CSLKLKS/sjikjd=jndd_jdjmLldhsnkos
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between grow md:justify-end gap-1">
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M144 64L48 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32zm96 288l-96 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM48 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM304 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0zM256 80c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm0 224c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 68 64 0 0-68c0-8.8 7.2-16 16-16s16 7.2 16 16l0 84c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-68-32 0 0 152c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-168zM88 104l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zM72 376c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zM344 104l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zM320 448c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm96-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>Qr code</span>
                                    </button>
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400 rotate-180'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M64 480l224 0c17.7 0 32-14.3 32-32l0-64 32 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 32-64 0c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zM224 320l224 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zm-64-32l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>Copy</span>
                                    </button>
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512">
                                            <path
                                                d="M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>More</span>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="px-4 py-6 bg-white last:border-none border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
                                <div className="flex justify-center items-center gap-3">
                                    <div className="relative overflow-hidden">
                                        <svg className={'size-8 fill-none'} viewBox="0 0 48 48"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M25.5 27.75V22.5C25.5 17.5294 21.4706 13.5 16.5 13.5V13.5C11.5294 13.5 7.5 17.5294 7.5 22.5L7.5 27.75"
                                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                                            <path
                                                d="M16.3865 22.875V25.5C16.3865 32.1274 21.7591 37.5 28.3865 37.5V37.5C35.014 37.5 40.3865 32.1274 40.3865 25.5V21.375C40.3865 15.576 35.6855 10.875 29.8865 10.875V10.875"
                                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                                            <circle cx="33" cy="22.875" r="2.25" fill="#0094FF"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <div className="inline-flex justify-start items-start gap-2">
                                            <div
                                                className="justify-start text-Color-Primary-Primary text-base font-medium leading-none">amzn.id/ffYHHcGm
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch justify-start text-slate-500 text-xs font-normal leading-none">amazon.com/dp/B0CSLKLKS/sjikjd=jndd_jdjmLldhsnkos
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between grow md:justify-end gap-1">
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M144 64L48 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32zm96 288l-96 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM48 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM304 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0zM256 80c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm0 224c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 68 64 0 0-68c0-8.8 7.2-16 16-16s16 7.2 16 16l0 84c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-68-32 0 0 152c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-168zM88 104l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zM72 376c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zM344 104l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zM320 448c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm96-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>Qr code</span>
                                    </button>
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400 rotate-180'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M64 480l224 0c17.7 0 32-14.3 32-32l0-64 32 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 32-64 0c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zM224 320l224 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zm-64-32l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>Copy</span>
                                    </button>
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512">
                                            <path
                                                d="M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>More</span>
                                    </button>
                                </div>
                            </div>

                            <div
                                className="px-4 py-6 bg-white last:border-none border-b border-gray-200 flex items-center justify-between flex-wrap gap-4">
                                <div className="flex justify-center items-center gap-3">
                                    <div className="relative overflow-hidden">
                                        <svg className={'size-8 fill-none'} viewBox="0 0 48 48"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M25.5 27.75V22.5C25.5 17.5294 21.4706 13.5 16.5 13.5V13.5C11.5294 13.5 7.5 17.5294 7.5 22.5L7.5 27.75"
                                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                                            <path
                                                d="M16.3865 22.875V25.5C16.3865 32.1274 21.7591 37.5 28.3865 37.5V37.5C35.014 37.5 40.3865 32.1274 40.3865 25.5V21.375C40.3865 15.576 35.6855 10.875 29.8865 10.875V10.875"
                                                stroke="#0094FF" strokeWidth="4.5" strokeLinecap="round"/>
                                            <circle cx="33" cy="22.875" r="2.25" fill="#0094FF"/>
                                        </svg>
                                    </div>
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <div className="inline-flex justify-start items-start gap-2">
                                            <div
                                                className="justify-start text-Color-Primary-Primary text-base font-medium leading-none">amzn.id/ffYHHcGm
                                            </div>
                                        </div>
                                        <div
                                            className="self-stretch justify-start text-slate-500 text-xs font-normal leading-none">amazon.com/dp/B0CSLKLKS/sjikjd=jndd_jdjmLldhsnkos
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between grow md:justify-end gap-1">
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M144 64L48 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32zm96 288l-96 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM48 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM304 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0zM256 80c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm0 224c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 68 64 0 0-68c0-8.8 7.2-16 16-16s16 7.2 16 16l0 84c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-68-32 0 0 152c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-168zM88 104l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zM72 376c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zM344 104l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16zM320 448c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16zm96-16l16 0c8.8 0 16 7.2 16 16l0 16c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-16c0-8.8 7.2-16 16-16z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>Qr code</span>
                                    </button>
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400 rotate-180'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M64 480l224 0c17.7 0 32-14.3 32-32l0-64 32 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64l64 0 0 32-64 0c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zM224 320l224 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32L224 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32zm-64-32l0-224c0-35.3 28.7-64 64-64L448 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>Copy</span>
                                    </button>
                                    <button type={'button'}
                                            className="px-2 py-2.5 rounded-lg flex w-full md:w-auto bg-gray-100 md:bg-transparent justify-center items-center gap-2.5">
                                        <svg
                                            className={'size-5 fill-gray-400'}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 128 512">
                                            <path
                                                d="M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z"/>
                                        </svg>
                                        <span className={'md:hidden text-sm text-gray-500'}>More</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}