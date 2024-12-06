

import React from 'react'
import OrbitingCircles from './ui/orbiting-circles';


const Icons = {
    gitHub: () => (
        <svg width="100" height="100" viewBox="0 0 438.549 438.549">
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            />
        </svg>
    ),
    notion: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
                fill="#ffffff"
            />
            <path
                d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
                fill="#000000"
                fillRule="evenodd"
                clipRule="evenodd"
            />
        </svg>
    ),
    openai: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
    ),
    googleDrive: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 87.3 78"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
                fill="#0066da"
            />
            <path
                d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
                fill="#00ac47"
            />
            <path
                d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
                fill="#ea4335"
            />
            <path
                d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
                fill="#00832d"
            />
            <path
                d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
                fill="#2684fc"
            />
            <path
                d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
                fill="#ffba00"
            />
        </svg>
    ),
    whatsapp: () => (
        <svg
            width="100"
            height="100"
            viewBox="0 0 175.216 175.552"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient
                    id="b"
                    x1="85.915"
                    x2="86.535"
                    y1="32.567"
                    y2="137.092"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#57d163" />
                    <stop offset="1" stopColor="#23b33a" />
                </linearGradient>
                <filter
                    id="a"
                    width="1.115"
                    height="1.114"
                    x="-.057"
                    y="-.057"
                    colorInterpolationFilters="sRGB"
                >
                    <feGaussianBlur stdDeviation="3.531" />
                </filter>
            </defs>
            <path
                d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
                fill="#b3b3b3"
                filter="url(#a)"
            />
            <path
                d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
                fill="#ffffff"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
                fill="url(#linearGradient1780)"
            />
            <path
                d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
                fill="url(#b)"
            />
            <path
                d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
                fill="#ffffff"
                fillRule="evenodd"
            />
        </svg>
    ),
};

const HowitWorks = () => {
    return (
        <section className="mx-3  md:mx-0">
            <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl py-6 md:py-20 bg-transparent px-1 md:px-1">
                <div className="flex flex-col pb-3.5 items-center text-center">
                    <div><span className="my-3 flex items-center justify-center mb-4"><span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-white"><span className="flex h-5 w-auto items-center justify-center py-[1.33px] transition-transform duration-300 [&_svg]:h-full [&_svg]:w-auto [&_svg]:shrink-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg></span>
                        <p className="text-xs text-[#242424]">How it works</p>
                    </span></span></div>
                    <h1 className="font-cal !leading-xs md:!leading-h1 text-[32px] lg:text-5xl pb-3"><span data-br=":R14v7jl6:" data-brr={1} style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>With
                        us, scheduling is easy</span>
                    </h1>
                    <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">Effortless
                        scheduling for individuals, powerful solutions for fast-growing modern companies.
                    </p>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="shadow-fade grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-white">
                        <div className="px-[20px] py-[20px]"><span className="mb-3 inline-block rounded-md bg-gray-200 px-2 py-1 font-mono text-sm font-bold text-gray-500">01</span>
                            <p className="text-md mb-2 font-semibold">Connect your calendar</p>
                            <p className="text-content-subtle max-w-[300px] text-[#898989]">We'll
                                handle
                                all the cross-referencing, so you don't have to worry about double
                                bookings.</p>
                        </div>
                        <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                                Circles
                            </span>

                            {/* Inner Circles */}
                            <OrbitingCircles
                                className="size-[30px] border-none bg-transparent"
                                duration={20}
                                delay={20}
                                radius={80}
                            >
                                <Icons.whatsapp />
                            </OrbitingCircles>
                            <OrbitingCircles
                                className="size-[30px] border-none bg-transparent"
                                duration={20}
                                delay={10}
                                radius={80}
                            >
                                <Icons.notion />
                            </OrbitingCircles>

                            {/* Outer Circles (reverse) */}
                            <OrbitingCircles
                                className="size-[50px] border-none bg-transparent"
                                radius={190}
                                duration={20}
                                reverse
                            >
                                <Icons.googleDrive />
                            </OrbitingCircles>
                            <OrbitingCircles
                                className="size-[50px] border-none bg-transparent"
                                radius={190}
                                duration={20}
                                delay={20}
                                reverse
                            >
                                <Icons.gitHub />
                            </OrbitingCircles>
                        </div>

                    </div>
                    <div className="shadow-fade grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-white">
                        <div className="px-[20px] py-[20px]"><span className="mb-3 inline-block rounded-md bg-gray-200 px-2 py-1 font-mono text-sm font-bold text-gray-500">02</span>
                            <p className="text-md mb-2 font-semibold">Set your availability</p>
                            <p className="text-content-subtle max-w-[300px] text-[#898989]">Want to block
                                off
                                weekends? Set up any buffers? We make that easy.</p>
                        </div>
                        <div className="flex min-h-[200px] justify-center">
                            <div className="grid h-full w-full overflow-clip pl-[20%] [&>*]:[grid-area:1/1]">
                                <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-white p-5 opacity-60">
                                </div>
                                <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-white p-5 relative -left-4 top-3 opacity-80">
                                </div>
                                <div className="border-subtle h-full w-[120%] rounded-tl-3xl border-l border-t bg-white p-5 relative -left-8 top-6">
                                    <div className="grid max-w-[90%] grid-cols-[auto_1fr_auto_1fr] gap-4">
                                        <div className="col-span-4 grid grid-cols-[subgrid] items-center gap-2">
                                            <div>
                                                <div className="flex h-auto w-auto flex-row items-center">
                                                    <button type="button" role="switch" aria-checked="true" data-state="checked" data-disabled disabled value="on" className="bg-brand-default dark:bg-brand-emphasis cursor-not-allowed h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"><span data-state="checked" data-disabled id="radix-:R5t8v7jl6:" className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&[data-state='checked']]:translate-x-[17px] rtl:[&[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-brand-accent shadow-inner" /></button><input type="checkbox" aria-hidden="true" disabled style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: 0, margin: 0 }} tabIndex={-1} defaultChecked defaultValue="on" />
                                                </div>
                                            </div><input type="text" className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity" defaultValue="8:30 am" /><span className="px-2 transition-opacity">-</span><input type="text" className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity" defaultValue="5:00 pm" />
                                        </div>
                                        <div className="col-span-4 grid grid-cols-[subgrid] items-center gap-2">
                                            <div>
                                                <div className="flex h-auto w-auto flex-row items-center">
                                                    <button type="button" role="switch" aria-checked="true" data-state="checked" data-disabled disabled value="on" className="bg-brand-default dark:bg-brand-emphasis cursor-not-allowed h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"><span data-state="checked" data-disabled id="radix-:R6t8v7jl6:" className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&[data-state='checked']]:translate-x-[17px] rtl:[&[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-brand-accent shadow-inner" /></button><input type="checkbox" aria-hidden="true" disabled style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: 0, margin: 0 }} tabIndex={-1} defaultChecked defaultValue="on" />
                                                </div>
                                            </div><input type="text" className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity" defaultValue="9:00 am" /><span className="px-2 transition-opacity">-</span><input type="text" className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity" defaultValue="6:00 pm" />
                                        </div>
                                        <div className="col-span-4 grid grid-cols-[subgrid] items-center gap-2">
                                            <div>
                                                <div className="flex h-auto w-auto flex-row items-center">
                                                    <button type="button" role="switch" aria-checked="true" data-state="checked" data-disabled disabled value="on" className="bg-brand-default dark:bg-brand-emphasis cursor-not-allowed h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"><span data-state="checked" data-disabled id="radix-:R7t8v7jl6:" className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&[data-state='checked']]:translate-x-[17px] rtl:[&[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-brand-accent shadow-inner" /></button><input type="checkbox" aria-hidden="true" disabled style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: 0, margin: 0 }} tabIndex={-1} defaultChecked defaultValue="on" />
                                                </div>
                                            </div><input type="text" className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity" defaultValue="10:00 am" /><span className="px-2 transition-opacity">-</span><input type="text" className="hover:border-emphasis dark:focus:border-emphasis border-default bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default focus:border-subtle block h-9 rounded-md border px-3 py-2 text-sm leading-4 focus:outline-none focus:ring-2 disabled:cursor-not-allowed w-full pointer-events-none mb-0 transition-opacity" defaultValue="7:00 pm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-fade grid grid-cols-1 grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-white">
                        <div className="px-[20px] py-[20px]"><span className="mb-3 inline-block rounded-md bg-gray-200 px-2 py-1 font-mono text-sm font-bold text-gray-500">03</span>
                            <p className="text-md mb-2 font-semibold">Choose how to meet</p>
                            <p className="text-content-subtle max-w-[300px] text-[#898989]">It could be a
                                video
                                chat, phone call, or a walk in the park!</p>
                        </div>
                        <div className="flex min-h-[200px] justify-center">
                            <div className="grid h-full w-full max-w-[600px] overflow-clip pl-[10%] [&>*]:[grid-area:1/1]">
                                <div className="border-subtle h-full w-[120%] rounded-t-3xl border-l border-r border-t bg-white md:w-full lg:w-[120%] relative grid grid-rows-[auto_1fr_auto] opacity-80">
                                    <div className="flex gap-1 border-b border-gray-200 px-5 py-3"><span className="h-2 w-2 rounded-full bg-gray-400" /><span className="h-2 w-2 rounded-full bg-gray-400" /><span className="h-2 w-2 rounded-full bg-gray-400" /></div>
                                    <div className="grid grid-cols-2">
                                        <div className="relative grid place-items-center border-r border-gray-200 py-4">
                                            <div className="absolute h-16 w-16 animate-ping rounded-full bg-gray-400/20">
                                            </div><svg width={46} height={56} viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.4">
                                                    <path d="M22.6401 0.870911C15.4435 0.870911 9.60945 6.70492 9.60945 13.9015C9.60945 21.0982 15.4435 26.9322 22.6401 26.9322C29.8367 26.9322 35.6707 21.0982 35.6707 13.9015C35.6707 6.70492 29.8367 0.870911 22.6401 0.870911Z" fill="#727272" />
                                                    <path d="M22.6404 29.8279C12.9174 29.8279 5.15769 34.9419 1.07493 42.5358C-0.747107 45.9247 -0.0603644 49.4423 1.95953 51.9551C3.90921 54.3806 7.07211 55.8891 10.4647 55.8891H34.8161C38.2087 55.8891 41.3716 54.3806 43.3213 51.9551C45.3412 49.4423 46.0279 45.9247 44.2059 42.5358C40.1231 34.9419 32.3634 29.8279 22.6404 29.8279Z" fill="#727272" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="relative grid place-items-center py-4">
                                            <div className="absolute h-16 w-16 animate-ping rounded-full bg-gray-400/20">
                                            </div><svg width={46} height={56} viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.4">
                                                    <path d="M22.6401 0.870911C15.4435 0.870911 9.60945 6.70492 9.60945 13.9015C9.60945 21.0982 15.4435 26.9322 22.6401 26.9322C29.8367 26.9322 35.6707 21.0982 35.6707 13.9015C35.6707 6.70492 29.8367 0.870911 22.6401 0.870911Z" fill="#727272" />
                                                    <path d="M22.6404 29.8279C12.9174 29.8279 5.15769 34.9419 1.07493 42.5358C-0.747107 45.9247 -0.0603644 49.4423 1.95953 51.9551C3.90921 54.3806 7.07211 55.8891 10.4647 55.8891H34.8161C38.2087 55.8891 41.3716 54.3806 43.3213 51.9551C45.3412 49.4423 46.0279 45.9247 44.2059 42.5358C40.1231 34.9419 32.3634 29.8279 22.6404 29.8279Z" fill="#727272" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="flex items-center justify-center gap-4 rounded-t-2xl border-l border-r border-t border-gray-200 px-5 py-3">
                                            <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.66663 5C3.56206 5 2.66663 5.89543 2.66663 7V9C2.66663 10.1046 3.56206 11 4.66663 11H8.66663C9.7712 11 10.6666 10.1046 10.6666 9V7C10.6666 5.89543 9.7712 5 8.66663 5H4.66663ZM11.6666 7.44906C11.6666 7.16343 11.7888 6.89142 12.0023 6.70165L13.0023 5.81276C13.6472 5.23952 14.6666 5.69733 14.6666 6.56018V9.43982C14.6666 10.3027 13.6472 10.7605 13.0023 10.1872L12.0023 9.29834C11.7888 9.10857 11.6666 8.83657 11.6666 8.55093V7.44906Z" fill="#242424" />
                                            </svg><svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.66659 2C9.73186 2 10.6026 2.83285 10.6632 3.88293L6.66659 7.87956V4C6.66659 2.89543 7.56202 2 8.66659 2Z" fill="black" />
                                                <path d="M10.6666 6.70711L14.3535 3.02022C14.5487 2.82496 14.5487 2.50838 14.3535 2.31311C14.1582 2.11785 13.8416 2.11785 13.6464 2.31311L2.9797 12.9798C2.78444 13.175 2.78444 13.4916 2.9797 13.6869C3.17496 13.8821 3.49154 13.8821 3.68681 13.6869L6.1303 11.2434C6.70617 11.667 7.40714 11.9055 8.16659 11.9769V13.5C8.16659 13.7761 8.39044 14 8.66659 14C8.94273 14 9.16659 13.7761 9.16659 13.5V11.9769C10.0658 11.8924 10.8831 11.5736 11.5077 10.9905C12.2522 10.2957 12.6666 9.27833 12.6666 8C12.6666 7.72386 12.4427 7.5 12.1666 7.5C11.8904 7.5 11.6666 7.72386 11.6666 8C11.6666 9.05501 11.331 9.78763 10.8254 10.2595C10.3141 10.7367 9.57214 11 8.66659 11C7.94589 11 7.32879 10.8332 6.84913 10.5246L7.6506 9.72309C7.94836 9.89904 8.29568 10 8.66659 10C9.77116 10 10.6666 9.10457 10.6666 8V6.70711Z" fill="black" />
                                                <path d="M5.74065 8.8055C5.69246 8.56097 5.66659 8.29291 5.66659 8C5.66659 7.72386 5.44273 7.5 5.16659 7.5C4.89044 7.5 4.66659 7.72386 4.66659 8C4.66659 8.59793 4.75725 9.13877 4.92994 9.61621L5.74065 8.8055Z" fill="black" />
                                            </svg><svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.66659 10C8.6121 10 10.9999 7.91067 10.9999 5.33334C10.9999 2.75601 8.6121 0.666672 5.66659 0.666672C2.72107 0.666672 0.333252 2.75601 0.333252 5.33334C0.333252 6.29055 0.662614 7.18044 1.22759 7.921C1.31734 8.10307 1.5023 8.6858 0.999917 9.8243C0.75341 10.3294 0.644656 10.6667 0.999917 10.6667C1.74704 10.6667 2.09921 10.4235 2.46517 10.1708C2.7706 9.95997 3.08564 9.74246 3.6479 9.65413C4.27058 9.8771 4.95218 10 5.66659 10Z" fill="#242424" />
                                            </svg><svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.99996 0H2.33329C1.41282 0 0.666626 0.746192 0.666626 1.66667V6.33333C0.666626 7.25381 1.41282 8 2.33329 8H8.99996C9.92043 8 10.6666 7.25381 10.6666 6.33333V1.66667C10.6666 0.746192 9.92043 0 8.99996 0ZM1.66663 1.66667C1.66663 1.29848 1.9651 1 2.33329 1H8.99996C9.36815 1 9.66663 1.29848 9.66663 1.66667V6.33333C9.66663 6.70152 9.36815 7 8.99996 7H2.33329C1.9651 7 1.66663 6.70152 1.66663 6.33333V1.66667ZM2.99996 9C2.72382 9 2.49996 9.22386 2.49996 9.5C2.49996 9.77614 2.72382 10 2.99996 10H8.33329C8.60944 10 8.83329 9.77614 8.83329 9.5C8.83329 9.22386 8.60944 9 8.33329 9H2.99996Z" fill="#242424" />
                                            </svg><svg width={13} height={8} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.37111 3.85547H3.08389V3.07859H3.37547C3.66269 3.07859 3.81936 3.18248 3.81936 3.44444V3.46251C3.81936 3.72448 3.67139 3.85547 3.37111 3.85547Z" fill="#242424" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.666626 2.66667C0.666626 1.19391 1.86053 0 3.33329 0H9.99996C11.4727 0 12.6666 1.19391 12.6666 2.66667V5.33333C12.6666 6.80609 11.4727 8 9.99996 8H3.33329C1.86053 8 0.666626 6.80609 0.666626 5.33333V2.66667ZM2.19611 5.61247V2.38302H3.41463C4.22843 2.38302 4.68103 2.72629 4.68103 3.40831V3.42638C4.68103 3.88708 4.44603 4.14454 4.11964 4.27552L4.86381 5.61247H3.9238L3.29278 4.45619H3.08389V5.61247H2.19611ZM5.59202 5.61247V2.38302H7.74185V3.09666H6.47981V3.65221H7.48509V4.31165H6.47981V4.89883H7.81148V5.61247H5.59202ZM9.99821 5.66667C10.8033 5.66667 11.3865 5.23306 11.4474 4.39747H10.5596C10.5161 4.75429 10.2941 4.92593 9.9808 4.92593C9.55432 4.92593 9.31497 4.59621 9.31497 4.01355V3.97742C9.31497 3.39024 9.56738 3.06504 9.96775 3.06504C10.2811 3.06504 10.4552 3.24571 10.49 3.57543H11.4082C11.3342 2.72177 10.7728 2.33333 9.9634 2.33333C9.05385 2.33333 8.37496 2.98826 8.37496 3.98193C8.37496 4.97876 8.97595 5.66667 9.99821 5.66667Z" fill="#242424" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HowitWorks