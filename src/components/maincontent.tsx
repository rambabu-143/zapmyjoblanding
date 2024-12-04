export default function Maincontent() {
    return (

        <main className="text-primary-700 text-standard font-matter leading-normal">
            <div className="px-0 md:px-0">
                <div className="live-chat-loader-placeholder" style={{ fontFamily: 'intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif', color: 'white', fontSize: '16px', lineHeight: '1.5', WebkitTextSizeAdjust: '100%', WebkitFontSmoothing: 'antialiased' }}>
                    <div role="button" aria-label="Load Chat" aria-busy="true" aria-live="polite" style={{ position: 'fixed', zIndex: 2147483004, padding: '0 !important', margin: '0 !important', border: 'none', bottom: '20px', right: '20px', maxWidth: '48px', width: '48px', maxHeight: '48px', height: '48px', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16)', transition: 'transform 167ms cubic-bezier(0.33, 0.00, 0.00, 1.00)', boxSizing: 'content-box', background: '#333333' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, width: '48px', height: '48px', transition: 'transform 100ms linear, opacity 80ms linear', transform: 'rotate(0deg) scale(1)', opacity: 1 }}>
                            <svg height="24px" width="24px" focusable="false" aria-hidden="true" viewBox="0 0 28 32">
                                <path fill="white" d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z">
                                </path>
                            </svg>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, width: '48px', height: '48px', transition: 'transform 100ms linear, opacity 80ms linear', transform: 'rotate(-30deg)', opacity: 0 }}>
                            <svg focusable="false" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="calendar-grid">
                    <section className="mx-3 md:mx-0">
                        <div className="mx-auto w-full relative max-w-[1200px] gap-8 rounded-xl px-1 shadow-fade bg-white mb-1 overflow-hidden py-0 pt-12 md:px-0 md:py-0 md:pt-12 lg:py-20 lg:pl-12">
                            <div className="absolute -bottom-20 -top-20 right-0 z-[1] hidden lg:block">
                                <div className="relative h-[calc(100%+10rem)] w-[800px]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent">
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-white/0">
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/10 to-white/5">
                                    </div><img alt="background grid" width={1200} height={1200} decoding="async" data-nimg={1} className="h-full w-full object-cover" style={{ color: 'transparent' }} src="/homepage-grid.svg" />
                                </div>
                            </div>
                            <div className="grid w-full grid-cols-1 items-center justify-start gap-4 md:gap-[6%] py-0 lg:grid-cols-[45%_auto] lg:items-start ">
                                <div className="animate-move-up z-[3] w-full flex-col items-center pt-4 text-center lg:items-start lg:text-left">
                                    <div className="flex flex-col pb-3.5 items-center text-center lg:items-start lg:text-left">
                                        <a href="https://cal.com/blog/v-4-7"><span className="my-3 flex items-center justify-center mb-4"><span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-[#F5F5F5] flex-row-reverse [&_span]:hover:translate-x-1 [&_span]:focus-visible:translate-x-1"><span className="flex h-5 w-auto items-center justify-center py-[1.33px] transition-transform duration-300 [&_svg]:h-full [&_svg]:w-auto [&_svg]:shrink-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg></span>
                                            <p className="text-xs text-[#242424]">Cal.com launches v4.7</p>
                                        </span></span></a>
                                        <h1 className="font-cal text-[40px] leading-none md:text-[65px] lg:text-[60px] xl:text-[69px] pb-3">
                                            <span data-br=":Riof7jl6:" data-brr={1} style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>The
                                                better way to schedule your meetings</span>
                                        </h1>
                                        <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">A fully
                                            customizable scheduling experience for individuals, businesses taking calls
                                            and developers building scheduling platforms where users meet users.</p>
                                    </div>
                                    <div className="w-full md:w-auto lg:w-[90%]">
                                        <div className="grid grid-cols-1 place-items-center items-center gap-4 w-max mx-auto px-5 md:grid-cols-2 lg:w-full lg:grid-cols-[repeat(auto-fit,minmax(210px,1fr))] lg:px-0 md:[&>*]:w-max lg:[&>*]:w-full">
                                            <button className="text-sm font-medium relative border border-[transparent] dark:text-black bg-neutral-900 dark:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 hover:opacity-90 transition-all duration-150 ease-in-out flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] px-4 py-2 text-white shadow-inner hover:bg-[#1f1f1f] hover:shadow-none sm:w-72 md:w-full"><img alt="Sign up with Google" loading="lazy" width={20} height={20} decoding="async" data-nimg={1} className="h-4 w-4" style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729797489-google.svg" />
                                                <p className="text-sm">Sign up with Google</p>
                                            </button><a href="https://app.cal.com/signup" className="text-sm font-medium relative dark:text-black dark:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 hover:opacity-90 transition-all duration-150 ease-in-out flex w-72 items-center justify-center gap-2 rounded-xl border border-black/20 bg-[#F2F2F3] px-4 py-2 text-gray-900 hover:bg-[#F2F2F3] hover:shadow-none md:w-full">
                                                <p className="text-sm">Sign up with email</p>
                                            </a>
                                        </div>
                                        <p className="mt-4 text-center text-sm text-[#898989]">No credit card required
                                        </p>
                                    </div>
                                </div>
                                <div className="relative z-[2] justify-self-center self-center mx-auto origin-top-left top-4 md:top-0">
                                    <div className="origin-center transform rounded-xl border bg-[#FAFAFA] p-1 animate-move-up lg:animate-fade-right">
                                        <div className="grid grid-cols-1 md:grid-cols-[280px_auto] h-[580px] md:h-[410px] w-fit items-start justify-start overflow-clip rounded-[0.56rem] border border-gray-200">
                                            <div className="flex md:h-full flex-col items-start justify-start gap-3 md:gap-6 md:overflow-hidden md:border-r bg-white p-3 md:p-5">
                                                <div className="flex flex-col items-start justify-start gap-2 md:gap-6">
                                                    <div className="flex h-auto md:h-[132px] flex-col items-start justify-start gap-2 p-1 animate-fade-in">
                                                        <div className="flex h-12 flex-col items-start justify-start gap-2 self-stretch">
                                                            <div className="inline-flex w-6 items-start justify-start gap-1 rounded-[120px]">
                                                                <img className="h-6 shrink grow basis-0 rounded-full" src="/alex-fisher.jpg" />
                                                            </div>
                                                            <div className="self-stretch font-sans text-sm font-medium leading-none text-gray-500">
                                                                Alex Fisher</div>
                                                        </div>
                                                        <div className="flex h-[68px] flex-col items-start justify-start gap-3 self-stretch">
                                                            <div className="font-cal self-stretch text-xl font-semibold leading-tight tracking-tight text-[#101010]">
                                                                Design Workshop</div>
                                                            <div className="self-stretch font-sans text-sm font-medium leading-[17.50px] text-gray-700">
                                                                A longer chat to run through design.</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex h-auto md:h-[92px] flex-col items-start justify-start gap-1 animate-fade-in">
                                                        <div className="inline-flex items-center justify-start gap-2 self-stretch p-1">
                                                            <img alt="cal audio" loading="lazy" width={18} height={18} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="/clock.svg" />
                                                            <div className="flex h-5 shrink grow basis-0 items-center justify-start gap-1">
                                                                <div className="font-sans text-sm font-medium leading-tight text-gray-700 h-4 w-24 animate-pulse rounded-lg bg-gray-100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex items-center justify-start gap-2 self-stretch p-1">
                                                            <img alt="cal video" loading="lazy" width={18} height={18} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="/cal-video.svg" />
                                                            <div className="flex h-5 shrink grow basis-0 items-center justify-start gap-1">
                                                                <div className="font-sans text-sm font-medium leading-tight text-gray-700 h-4 w-24 animate-pulse rounded-lg bg-gray-100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex items-center justify-start gap-2 rounded p-1">
                                                            <img alt="globe" loading="lazy" width={18} height={18} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="/globe.svg" />
                                                            <div className="flex items-center justify-start gap-1 rounded">
                                                                <div className="font-sans text-sm font-medium leading-tight text-gray-700 h-4 w-24 animate-pulse rounded-lg bg-gray-100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inline-flex flex-col items-start justify-start gap-2 bg-white p-3 md:p-5">
                                                <div className="inline-flex items-center justify-between self-stretch">
                                                    <div className="flex items-baseline justify-center gap-1">
                                                        <div className="font-sans text-base font-semibold leading-none text-[#101010]">
                                                            Nov</div>
                                                        <div className="font-sans text-sm font-medium leading-none text-gray-500">
                                                            2024</div>
                                                    </div>
                                                    <div className="flex items-end justify-start">
                                                        <div className="inline-flex h-9 w-9 flex-col items-center justify-center rounded-lg">
                                                            <div className="relative h-4 w-4" />
                                                        </div>
                                                        <div className="inline-flex h-9 w-9 flex-col items-center justify-center rounded-lg">
                                                            <div className="relative h-4 w-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start justify-start">
                                                    <div className="inline-flex items-start justify-start">
                                                        <div className="inline-flex h-12 w-14 flex-col items-center justify-center p-4">
                                                            <div className="font-sans text-xs font-medium leading-3 text-gray-400">SUN</div>
                                                        </div>
                                                        <div className="inline-flex h-12 w-14 flex-col items-center justify-center p-4">
                                                            <div className="font-sans text-xs font-medium leading-3 text-gray-700">MON</div>
                                                        </div>
                                                        <div className="inline-flex h-12 w-14 flex-col items-center justify-center p-4">
                                                            <div className="font-sans text-xs font-medium leading-3 text-gray-700">TUE</div>
                                                        </div>
                                                        <div className="inline-flex h-12 w-14 flex-col items-center justify-center p-4">
                                                            <div className="font-sans text-xs font-medium leading-3 text-gray-700">WED</div>
                                                        </div>
                                                        <div className="inline-flex h-12 w-14 flex-col items-center justify-center p-4">
                                                            <div className="font-sans text-xs font-medium leading-3 text-gray-700">THU</div>
                                                        </div>
                                                        <div className="inline-flex h-12 w-14 flex-col items-center justify-center p-4">
                                                            <div className="font-sans text-xs font-medium leading-3 text-gray-700">FRI</div>
                                                        </div>
                                                        <div className="inline-flex h-12 w-14 flex-col items-center justify-center p-4">
                                                            <div className="font-sans text-xs font-medium leading-3 text-gray-400">SAT</div>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-start justify-start">
                                                        <div className="relative h-14 w-14 rounded-sm" />
                                                        <div className="relative h-14 w-14 rounded-sm" />
                                                        <div className="relative h-14 w-14 rounded-sm" />
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                1</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                2</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                3</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                4</div>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-start justify-start">
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                5</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                6</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                7</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                8</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                9</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                10</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                11</div>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-start justify-start">
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                12</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                13</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                14</div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1
    bg-gray-200">
                                                                <div className="text-center font-sans text-sm font-medium leading-none
        text-[#101010]
        ">15</div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1
    bg-gray-200">
                                                                <div className="text-center font-sans text-sm font-medium leading-none
        text-[#101010]
        ">16</div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1
    bg-gray-200">
                                                                <div className="text-center font-sans text-sm font-medium leading-none
        text-[#101010]
        ">17</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                18</div>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-start justify-start">
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                19</div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1
    bg-gray-200">
                                                                <div className="text-center font-sans text-sm font-medium leading-none
        text-[#101010]
        ">20</div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1
    bg-gray-200">
                                                                <div className="text-center font-sans text-sm font-medium leading-none
        text-[#101010]
        ">21</div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1
    bg-gray-200">
                                                                <div className="text-center font-sans text-sm font-medium leading-none
        text-[#101010]
        ">22</div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1
    bg-gray-200">
                                                                <div className="text-center font-sans text-sm font-medium leading-none
        text-[#101010]
        ">23</div>
                                                            </div>
                                                        </div>
                                                        <div className="inline-flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-sm p-0.5">
                                                            <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-0.5 self-stretch rounded p-1 bg-[#242424]">
                                                                <div className="text-center font-sans text-sm font-medium leading-none text-gray-50">24</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                25</div>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-start justify-start">
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                26</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                27</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                28</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                29</div>
                                                        </div>
                                                        <div className="flex h-14 w-14 items-center justify-center rounded-sm pb-4 pl-[15px] pr-[15.76px] pt-[14.76px]">
                                                            <div className="w-[25.24px] self-stretch text-center font-sans text-sm font-medium leading-none text-gray-400">
                                                                30</div>
                                                        </div>
                                                        <div className="relative h-14 w-14 rounded-sm" />
                                                        <div className="relative h-14 w-14 rounded-sm" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-3 md:mx-0">
                        <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl bg-transparent px-2 py-5 md:px-2 md:py-5">
                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                                <div className="mb-6 lg:mb-0 lg:w-1/4">
                                    <h1 className="max-w-[220px] text-[14px] font-normal text-[#898989] md:ml-2">Trusted
                                        by
                                        fast-growing companies around the world</h1>
                                </div>
                                <div className="grid grid-cols-2 gap-6 md:grid-cols-5 lg:max-w-4xl lg:gap-10">
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={59} height={22} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726142372-deel-1.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={98} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726142372-vercel-logo.svg" />
                                    </div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={139} height={32} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731350987-mercury.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={82} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731689014-angellist.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={107} height={34} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731351596-clip-path-group-marketing-site-3-0.svg" />
                                    </div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 md:hidden"><img alt="Customer Logo" loading="lazy" width={123} height={26} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731689082-storyblok.svg" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-3 md:mx-0">
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
                                    <div className="flex min-h-[200px] justify-center">
                                        <div className="aspect-video w-full overflow-clip">
                                            <div className="@container mt-[-5%] grid h-full w-full grid-cols-1 place-items-center px-1 [&>*]:[grid-area:1/1]">
                                                <div className="grid h-full w-full grid-cols-1 place-items-center [&>*]:[grid-area:1/1] connected-calendars_fadeout__UyWpS">
                                                    <div className="border-subtle aspect-square rounded-full border w-[100cqw]">
                                                    </div>
                                                    <div className="border-subtle aspect-square rounded-full border w-[80cqw]">
                                                    </div>
                                                    <div className="border-subtle aspect-square rounded-full border w-[60cqw]">
                                                    </div>
                                                    <div className="border-subtle aspect-square rounded-full border w-[40cqw]">
                                                    </div>
                                                </div>
                                                <div className="relative z-10 grid h-full w-full grid-cols-1 place-items-center [--fade-start:70%] connected-calendars_fadeout__UyWpS">
                                                    <span className="shadow-fade absolute block aspect-square h-12 w-12 rounded-full bg-white p-3 [&_svg]:h-auto [&_svg]:w-full connected-calendars_logo1__JWR62"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="none">
                                                        <path fill="#fff" d="M16.034 5.156H5.11V16.08h10.923V5.156Z" />
                                                        <path fill="#EA4335" d="m16.034 20.998 4.915-4.915-2.458-.419-2.457.42-.449 2.247.449 2.668Z">
                                                        </path>
                                                        <path fill="#188038" d="M.196 16.083v3.277C.196 20.265.93 21 1.835 21H5.11l.505-2.458-.505-2.458-2.677-.419-2.238.42Z">
                                                        </path>
                                                        <path fill="#1967D2" d="M20.949 5.157V1.881c0-.906-.733-1.639-1.639-1.639h-3.276c-.3 1.22-.449 2.116-.449 2.691 0 .575.15 1.317.449 2.224 1.087.312 1.906.467 2.457.467.552 0 1.37-.155 2.458-.467Z">
                                                        </path>
                                                        <path fill="#FBBC04" d="M20.95 5.156h-4.916V16.08h4.915V5.156Z" />
                                                        <path fill="#34A853" d="M16.034 16.078H5.11v4.915h10.923v-4.915Z" />
                                                        <path fill="#4285F4" d="M16.034.242h-14.2C.93.242.197.975.197 1.881V16.08h4.915V5.157h10.923V.242Z">
                                                        </path>
                                                        <path fill="#4285F4" d="M7.352 13.633c-.408-.276-.691-.68-.845-1.211l.947-.391c.086.328.236.582.45.762.214.18.473.269.776.269.31 0 .576-.094.799-.283a.903.903 0 0 0 .335-.72.892.892 0 0 0-.353-.728c-.235-.189-.53-.283-.882-.283h-.547v-.938h.491c.303 0 .559-.082.766-.246a.81.81 0 0 0 .312-.673.744.744 0 0 0-.279-.607c-.186-.152-.42-.228-.706-.228-.278 0-.5.073-.663.222-.164.15-.287.338-.358.548l-.938-.39c.124-.353.352-.664.687-.933.334-.27.762-.405 1.28-.405.384 0 .73.074 1.035.223.306.149.546.355.72.617.173.264.26.559.26.886 0 .335-.081.617-.242.85-.162.232-.36.409-.594.533v.056c.303.125.566.33.761.594.198.266.298.585.298.956s-.094.703-.283.994c-.188.29-.449.52-.78.687a2.457 2.457 0 0 1-1.117.25 2.314 2.314 0 0 1-1.33-.412Zm5.82-4.703-1.04.753-.52-.79 1.866-1.346h.716v6.35h-1.022V8.93Z">
                                                        </path>
                                                    </svg></span><span className="shadow-fade absolute block aspect-square h-12 w-12 rounded-full bg-white p-3 [&_svg]:h-auto [&_svg]:w-full connected-calendars_logo2__e3diy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 21" fill="none">
                                                        <g clipPath="url(#a)">
                                                            <path fill="#0A2767" d="M22.185 10.522a.478.478 0 0 0-.234-.413h-.003l-.01-.005-7.622-4.41a1.034 1.034 0 0 0-1.144 0l-7.623 4.41-.009.005a.48.48 0 0 0 .012.832l7.623 4.41a1.044 1.044 0 0 0 1.143 0l7.623-4.41a.477.477 0 0 0 .244-.42Z">
                                                            </path>
                                                            <path fill="#0364B8" d="M6.438 7.579h5.003v4.481H6.438V7.58Zm14.724-4.556V.973a.939.939 0 0 0-.928-.95H7.252a.939.939 0 0 0-.928.95v2.05l7.675 2 7.163-2Z">
                                                            </path>
                                                            <path fill="#0078D4" d="M6.324 3.023h5.117v4.5H6.324v-4.5Z" />
                                                            <path fill="#28A8EA" d="M16.557 3.023h-5.116v4.5l5.116 4.5h4.605v-4.5l-4.605-4.5Z">
                                                            </path>
                                                            <path fill="#0078D4" d="M11.44 7.523h5.117v4.5H11.44v-4.5Z" />
                                                            <path fill="#0364B8" d="M11.44 12.023h5.117v4.5H11.44v-4.5Z" />
                                                            <path fill="#14447D" d="M6.438 12.063h5.003v4.074H6.438v-4.075Z" />
                                                            <path fill="#0078D4" d="M16.557 12.023h4.605v4.5h-4.605v-4.5Z" />
                                                            <path fill="url(#b)" d="m21.95 10.915-.01.005-7.623 4.19a1.081 1.081 0 0 1-.516.156l-.416-.238a1.037 1.037 0 0 1-.102-.058l-7.726-4.309h-.003l-.253-.138v8.482a1.037 1.037 0 0 0 1.056 1.018h14.789c.008 0 .016-.004.025-.004.123-.007.243-.032.358-.073a1.386 1.386 0 0 0 .237-.134c.262-.189.417-.488.419-.807v-8.482c0 .163-.09.312-.235.392Z">
                                                            </path>
                                                            <path fill="#0A2767" d="M21.776 10.49v.521l-7.972 5.363-8.252-5.708a.005.005 0 0 0-.005-.005l-.758-.445V9.84l.313-.005.66.37.015.005.056.035s7.756 4.325 7.777 4.335l.297.17c.025-.01.05-.02.082-.03.015-.01 7.7-4.235 7.7-4.235l.087.005Z" opacity=".5" />
                                                            <path fill="#1490DF" d="m21.95 10.915-.01.005-7.623 4.19c-.033.02-.066.04-.102.056a1.09 1.09 0 0 1-1.04-.056L5.55 10.92l-.009-.005a.449.449 0 0 1-.24-.392v8.482a1.037 1.037 0 0 0 1.054 1.018H21.13a1.037 1.037 0 0 0 1.055-1.017v-8.483c0 .163-.09.312-.234.392Z">
                                                            </path>
                                                            <path fill="#000" d="m14.428 15.047-.114.062a1.08 1.08 0 0 1-.504.16l2.9 3.353 5.06 1.191c.139-.102.249-.237.32-.391l-7.662-4.375Z" opacity=".1" />
                                                            <path fill="#000" d="m14.945 14.766-.63.346c-.034.02-.068.04-.103.057-.126.06-.262.095-.402.104l1.359 3.661 6.602.88c.26-.19.414-.49.414-.807v-.11l-7.24-4.131Z" opacity=".05" />
                                                            <path fill="#28A8EA" d="M6.37 20.023h14.758c.227.002.449-.069.632-.2l-8.375-4.794a1.028 1.028 0 0 1-.102-.058l-7.726-4.309h-.004l-.252-.139v8.453c0 .578.478 1.047 1.07 1.047Z">
                                                            </path>
                                                            <path fill="#000" d="M12.464 4.94v10.665a.92.92 0 0 1-.589.85.898.898 0 0 1-.348.07H5.301V4.523h1.023v-.5h5.204a.93.93 0 0 1 .936.917Z" opacity=".1" />
                                                            <path fill="#000" d="M11.952 5.44v10.665a.798.798 0 0 1-.077.35.932.932 0 0 1-.86.569H5.302v-12.5h5.715a.875.875 0 0 1 .425.104.907.907 0 0 1 .511.812Z" opacity=".2" />
                                                            <path fill="#000" d="M11.952 5.44v9.665a.934.934 0 0 1-.936.918H5.3v-11.5h5.715a.875.875 0 0 1 .425.105.907.907 0 0 1 .511.812Z" opacity=".2" />
                                                            <path fill="#000" d="M11.44 5.44v9.665a.93.93 0 0 1-.936.918H5.301v-11.5h5.203a.926.926 0 0 1 .937.917Z" opacity=".2" />
                                                            <path fill="url(#c)" d="M1.123 4.523h9.38c.518 0 .938.41.938.917v9.167c0 .506-.42.916-.938.916h-9.38a.927.927 0 0 1-.938-.916V5.44c0-.506.42-.917.938-.917Z">
                                                            </path>
                                                            <path fill="#fff" d="M3.116 8.364a2.689 2.689 0 0 1 1.071-1.157A3.298 3.298 0 0 1 5.89 6.79a3.07 3.07 0 0 1 1.576.396c.45.262.811.646 1.042 1.105.251.506.376 1.063.365 1.625a3.692 3.692 0 0 1-.376 1.7 2.73 2.73 0 0 1-1.074 1.143 3.193 3.193 0 0 1-1.634.406 3.137 3.137 0 0 1-1.61-.4 2.71 2.71 0 0 1-1.056-1.107 3.416 3.416 0 0 1-.37-1.605c-.01-.583.114-1.16.364-1.69Zm1.142 2.715c.123.304.332.568.603.76.275.189.605.286.941.278.358.014.71-.087 1.005-.286.267-.192.47-.457.585-.761.128-.34.192-.7.187-1.062a3.164 3.164 0 0 0-.176-1.075 1.7 1.7 0 0 0-.567-.793 1.582 1.582 0 0 0-.996-.3c-.343-.008-.68.09-.964.28-.275.194-.488.46-.613.767a2.985 2.985 0 0 0-.005 2.193v-.001Z">
                                                            </path>
                                                            <path fill="#50D9FF" d="M16.557 3.023h4.605v4.5h-4.605v-4.5Z" />
                                                        </g>
                                                        <defs>
                                                            <linearGradient id="b" x1="13.743" x2="13.743" y1="10.523" y2="20.023" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#35B8F1" />
                                                                <stop offset={1} stopColor="#28A8EA" />
                                                            </linearGradient>
                                                            <linearGradient id="c" x1="2.14" x2="9.235" y1="3.807" y2="16.381" gradientUnits="userSpaceOnUse">
                                                                <stop stopColor="#1784D9" />
                                                                <stop offset=".5" stopColor="#107AD5" />
                                                                <stop offset={1} stopColor="#0A63C9" />
                                                            </linearGradient>
                                                            <clipPath id="a">
                                                                <path fill="#fff" d="M.185.023h22v20h-22z" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></span><span className="shadow-fade absolute block aspect-square h-12 w-12 rounded-full bg-white p-3 [&_svg]:h-auto [&_svg]:w-full connected-calendars_logo3__BC76f"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none">
                                                        <g filter="url(#a)">
                                                            <g clipPath="url(#b)">
                                                                <path fill="#F6F5F4" d="M4.212 10.557v7.487c0 .239 0 .477.002.716 0 .201.004.403.01.604a8.9 8.9 0 0 0 .115 1.314c.079.44.209.85.413 1.249a4.21 4.21 0 0 0 1.836 1.836c.399.204.809.332 1.248.412.433.077.875.103 1.314.116.2.005.403.007.604.01h8.92c.201-.002.403-.005.604-.01.438-.013.88-.039 1.314-.116.44-.079.849-.209 1.248-.412a4.213 4.213 0 0 0 1.836-1.836c.204-.4.332-.81.413-1.249.077-.433.103-.874.115-1.314.006-.2.008-.403.01-.604V10.368H4.212v.19Z">
                                                                </path>
                                                                <path fill="#EE544A" d="M24.2 9.234a8.883 8.883 0 0 0-.115-1.314 4.403 4.403 0 0 0-.413-1.249 4.23 4.23 0 0 0-.772-1.064 4.214 4.214 0 0 0-1.064-.772 4.427 4.427 0 0 0-1.248-.412 8.901 8.901 0 0 0-1.314-.116c-.2-.005-.403-.007-.604-.01H9.752c-.201.002-.403.005-.604.01-.438.013-.88.039-1.314.116-.44.079-.849.209-1.248.412A4.213 4.213 0 0 0 4.75 6.67c-.204.4-.332.81-.413 1.249a8.656 8.656 0 0 0-.114 1.314c-.005.2-.008.403-.01.604l-.001.527H24.21l-.001-.527a25.33 25.33 0 0 0-.01-.604Z">
                                                                </path>
                                                                <path fill="#fff" d="M11.088 8.744a.81.81 0 0 1-.33-.31.956.956 0 0 1-.126-.468v-.018h.58l.003.012a.47.47 0 0 0 .05.196c.03.056.072.101.127.133a.393.393 0 0 0 .199.048c.125 0 .22-.038.287-.113.066-.076.1-.185.1-.33V5.946h.598V7.9c0 .302-.086.535-.257.703-.171.167-.411.25-.722.25-.197.001-.367-.036-.508-.109Zm2.547-.022a.977.977 0 0 1-.563-.928V5.945h.598v1.796c0 .184.053.332.157.442.104.11.253.164.444.164.194 0 .34-.054.444-.164a.618.618 0 0 0 .154-.442V5.945h.598v1.85c0 .21-.048.395-.145.555a.978.978 0 0 1-.414.371 1.43 1.43 0 0 1-.638.133 1.43 1.43 0 0 1-.635-.132Zm2.308-2.777h.598v2.366h1.25v.494h-1.849v-2.86h.001Z">
                                                                </path>
                                                                <path fill="#2C2C2C" d="M11.154 13.29h-.024L8.786 14.86v-.835l2.356-1.618h.806v8.739h-.793v-7.854h-.001Zm7.666-.127v-.018h-4.87v-.739h5.687v.77l-4.003 7.969h-.872l4.058-7.982Z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="b">
                                                                <rect width={20} height={20} x="4.212" y="4.297" fill="#fff" rx={4} />
                                                            </clipPath>
                                                            <filter id="a" width={28} height={28} x=".212" y=".297" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
                                                                </feColorMatrix>
                                                                <feOffset />
                                                                <feGaussianBlur stdDeviation={2} />
                                                                <feComposite in2="hardAlpha" operator="out">
                                                                </feComposite>
                                                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0">
                                                                </feColorMatrix>
                                                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2545_2259" />
                                                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_2545_2259" result="shape" />
                                                            </filter>
                                                        </defs>
                                                    </svg></span>
                                                </div>
                                                <div className="shadow-fade h-auto w-[25%] rounded-full px-4 py-3"><img src="/logo.svg" alt="logo" className="h-auto w-full" /></div>
                                            </div>
                                        </div>
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
                    <div className="px-0 md:px-0">
                        <section className="mx-3 md:mx-0">
                            <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl px-1 py-6 md:px-1 md:py-20 bg-transparent">
                                <div className="flex flex-col pb-3.5 items-center text-center">
                                    <div><span className="my-3 flex items-center justify-center mb-4"><span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-white"><span className="flex h-5 w-auto items-center justify-center py-[1.33px] transition-transform duration-300 [&_svg]:h-full [&_svg]:w-auto [&_svg]:shrink-0"><img alt="Benefits" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="h-5 w-5" style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729632030-luggage.svg" /></span>
                                        <p className="text-xs text-[#242424]">Benefits</p>
                                    </span></span></div>
                                    <h1 className="font-cal !leading-xs md:!leading-h1 text-[32px] lg:text-5xl pb-3">
                                        <span data-br=":R1577jl6:" data-brr={1} style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>Your
                                            all-purpose scheduling app</span>
                                    </h1>
                                    <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">Discover a
                                        variety of our advanced features. Unlimited and free for individuals.</p>
                                    <div className="mt-6 flex items-center justify-center gap-4"><a className="inline-flex items-center px-3 py-2 text-sm font-medium border border-[transparent] dark:text-black text-white bg-neutral-900 dark:bg-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 hover:opacity-90 transition-all duration-150 ease-in-out group relative overflow-hidden rounded-xl bg-gradient-to-b from-[#2c2c30] to-[#1d1d20] before:pointer-events-none before:absolute before:inset-0 before:rounded-xl before:shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset]" href="https://app.cal.com/signup">Sign up<div className="ml-3 mt-0.5 scale-150">
                                        <svg className="stroke-gray-400 stroke-2" fill="none" width={7} height={7} viewBox="0 0 10 10" aria-hidden="true">
                                            <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7" />
                                            <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4" />
                                        </svg>
                                    </div></a></div>
                                </div>
                                <div className="mt-4 grid grid-cols-1 grid-rows-[auto_auto_1fr] gap-8 md:grid-cols-2 md:px-2">
                                    <div className="shadow-fade row-span-3 grid grid-rows-[subgrid] gap-0 overflow-clip rounded-xl bg-white p-8 pb-0">
                                        <p className="mb-2 text-xl font-medium [text-wrap:balance]">Avoid meeting
                                            overload
                                        </p>
                                        <p className="text-md text-gray-500 [text-wrap:balance]">Only get booked when
                                            you
                                            want to. Set daily, weekly or monthly limits and add buffers around your
                                            events to allow you to focus or take a break.</p>
                                        <div className="mt-5">
                                            <div className="pointer-events-none grid h-full w-full place-items-center overflow-clip">
                                                <div className="-mb-6 grid h-full w-full max-w-[400px] pt-8 [&>*]:[grid-area:1/1]">
                                                    <div className="border-subtle h-full w-full rounded-t-3xl border-l border-r border-t bg-white relative -top-8 mx-auto max-w-[80%] opacity-60">
                                                    </div>
                                                    <div className="border-subtle h-full w-full rounded-t-3xl border-l border-r border-t bg-white relative -top-4 mx-auto max-w-[90%] opacity-80">
                                                    </div>
                                                    <div className="border-subtle h-full w-full rounded-t-3xl border-l border-r border-t bg-white relative p-6">
                                                        <p className="text-md mb-4 font-medium text-gray-400">Notice and
                                                            buffers</p><label className="text-emphasis mb-2 block text-sm font-medium leading-none">Minimum
                                                                Notice</label>
                                                        <div >
                                                            <div />
                                                            <style data-emotion="css b62m3t-container" dangerouslySetInnerHTML={{ __html: "\n                                                                .css-b62m3t-container {\n                                                                    position: relative;\n                                                                    box-sizing: border-box;\n                                                                }\n                                                            " }} />
                                                            <div className=" css-b62m3t-container">
                                                                <style data-emotion="css 7pg0cj-a11yText" dangerouslySetInnerHTML={{ __html: "\n                                                                    .css-7pg0cj-a11yText {\n                                                                        z-index: 9999;\n                                                                        border: 0;\n                                                                        clip: rect(1px, 1px, 1px, 1px);\n                                                                        height: 1px;\n                                                                        width: 1px;\n                                                                        position: absolute;\n                                                                        overflow: hidden;\n                                                                        padding: 0;\n                                                                        white-space: nowrap;\n                                                                    }\n                                                                " }} /><span id="react-select-2-live-region" className="css-7pg0cj-a11yText" /><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" /><span data-testid="select-control">
                                                                    <style data-emotion="css cp01gg-control" dangerouslySetInnerHTML={{ __html: "\n                                                                        .css-cp01gg-control {\n                                                                            -webkit-align-items: center;\n                                                                            -webkit-box-align: center;\n                                                                            -ms-flex-align: center;\n                                                                            align-items: center;\n                                                                            cursor: default;\n                                                                            display: -webkit-box;\n                                                                            display: -webkit-flex;\n                                                                            display: -ms-flexbox;\n                                                                            display: flex;\n                                                                            -webkit-box-flex-wrap: wrap;\n                                                                            -webkit-flex-wrap: wrap;\n                                                                            -ms-flex-wrap: wrap;\n                                                                            flex-wrap: wrap;\n                                                                            -webkit-box-pack: justify;\n                                                                            -webkit-justify-content: space-between;\n                                                                            justify-content: space-between;\n                                                                            min-height: 38px;\n                                                                            outline: 0 !important;\n                                                                            position: relative;\n                                                                            -webkit-transition: all 100ms;\n                                                                            transition: all 100ms;\n                                                                            box-sizing: border-box;\n                                                                        }\n                                                                    " }} />
                                                                    <div className="bg-default border-default !min-h-9 h-9 text-sm leading-4 placeholder:text-sm placeholder:font-normal dark:focus:border-emphasis focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-default hover:border-emphasis rounded-md transition border py-2 px-3 css-cp01gg-control">
                                                                        <style data-emotion="css 14oxtc6" dangerouslySetInnerHTML={{ __html: "\n                                                                            .css-14oxtc6 {\n                                                                                -webkit-align-items: center;\n                                                                                -webkit-box-align: center;\n                                                                                -ms-flex-align: center;\n                                                                                align-items: center;\n                                                                                display: grid;\n                                                                                -webkit-flex: 1;\n                                                                                -ms-flex: 1;\n                                                                                flex: 1;\n                                                                                -webkit-box-flex-wrap: wrap;\n                                                                                -webkit-flex-wrap: wrap;\n                                                                                -ms-flex-wrap: wrap;\n                                                                                flex-wrap: wrap;\n                                                                                -webkit-overflow-scrolling: touch;\n                                                                                position: relative;\n                                                                                overflow: hidden;\n                                                                                box-sizing: border-box;\n                                                                            }\n                                                                        " }} />
                                                                        <div className="text-emphasis placeholder:text-muted flex gap-1 css-14oxtc6">
                                                                            <style data-emotion="css vy4nui" dangerouslySetInnerHTML={{ __html: "\n                                                                                .css-vy4nui {\n                                                                                    visibility: visible;\n                                                                                    -webkit-transform: translateZ(0);\n                                                                                    -moz-transform: translateZ(0);\n                                                                                    -ms-transform: translateZ(0);\n                                                                                    transform: translateZ(0);\n                                                                                    -webkit-flex: 1 1 auto;\n                                                                                    -ms-flex: 1 1 auto;\n                                                                                    flex: 1 1 auto;\n                                                                                    display: inline-grid;\n                                                                                    grid-area: 1/1/2/3;\n                                                                                    grid-template-columns: 0 min-content;\n                                                                                    box-sizing: border-box;\n                                                                                }\n\n                                                                                .css-vy4nui:after {\n                                                                                    content: attr(data-value) \" \";\n                                                                                    visibility: hidden;\n                                                                                    white-space: pre;\n                                                                                    grid-area: 1/2;\n                                                                                    font: inherit;\n                                                                                    min-width: 2px;\n                                                                                    border: 0;\n                                                                                    margin: 0;\n                                                                                    outline: 0;\n                                                                                    padding: 0;\n                                                                                }\n                                                                            " }} />
                                                                            <div className="text-emphasis css-vy4nui" data-value="3 hours"><input className="focus:ring-0 focus:ring-offset-0 dark:!text-darkgray-900 !text-emphasis" style={{ color: 'inherit', background: 0, opacity: 1, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: 0, margin: 0, outline: 0, padding: 0 }} autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-2-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-2-placeholder" defaultValue="3 hours" /></div>
                                                                        </div>
                                                                        <style data-emotion="css 1wy0on6" dangerouslySetInnerHTML={{ __html: "\n                                                                            .css-1wy0on6 {\n                                                                                -webkit-align-items: center;\n                                                                                -webkit-box-align: center;\n                                                                                -ms-flex-align: center;\n                                                                                align-items: center;\n                                                                                -webkit-align-self: stretch;\n                                                                                -ms-flex-item-align: stretch;\n                                                                                align-self: stretch;\n                                                                                display: -webkit-box;\n                                                                                display: -webkit-flex;\n                                                                                display: -ms-flexbox;\n                                                                                display: flex;\n                                                                                -webkit-flex-shrink: 0;\n                                                                                -ms-flex-negative: 0;\n                                                                                flex-shrink: 0;\n                                                                                box-sizing: border-box;\n                                                                            }\n                                                                        " }} />
                                                                        <div className="text-default css-1wy0on6">
                                                                            <style data-emotion="css j4w2j1-indicatorSeparator" dangerouslySetInnerHTML={{ __html: "\n                                                                                .css-j4w2j1-indicatorSeparator {\n                                                                                    -webkit-align-self: stretch;\n                                                                                    -ms-flex-item-align: stretch;\n                                                                                    align-self: stretch;\n                                                                                    width: 1px;\n                                                                                    box-sizing: border-box;\n                                                                                }\n                                                                            " }} /><span className=" css-j4w2j1-indicatorSeparator" />
                                                                            <style data-emotion="css g56vrd-indicatorContainer" dangerouslySetInnerHTML={{ __html: "\n                                                                                .css-g56vrd-indicatorContainer {\n                                                                                    display: -webkit-box;\n                                                                                    display: -webkit-flex;\n                                                                                    display: -ms-flexbox;\n                                                                                    display: flex;\n                                                                                    -webkit-transition: color 150ms;\n                                                                                    transition: color 150ms;\n                                                                                    box-sizing: border-box;\n                                                                                }\n                                                                            " }} />
                                                                            <div className="text-default css-g56vrd-indicatorContainer" aria-hidden="true">
                                                                                <style data-emotion="css 8mmkcg" dangerouslySetInnerHTML={{ __html: "\n                                                                                    .css-8mmkcg {\n                                                                                        display: inline-block;\n                                                                                        fill: currentColor;\n                                                                                        line-height: 1;\n                                                                                        stroke: currentColor;\n                                                                                        stroke-width: 0;\n                                                                                    }\n                                                                                " }} /><svg height={20} width={20} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                                                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                                    </path>
                                                                                </svg>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                            <div><label className="text-emphasis mb-2 block text-sm font-medium leading-none w-full overflow-hidden overflow-ellipsis whitespace-nowrap">Buffer
                                                                before event</label>
                                                                <div >
                                                                    <div />
                                                                    <style data-emotion="css b62m3t-container" dangerouslySetInnerHTML={{ __html: "\n                                                                        .css-b62m3t-container {\n                                                                            position: relative;\n                                                                            box-sizing: border-box;\n                                                                        }\n                                                                    " }} />
                                                                    <div className=" css-b62m3t-container">
                                                                        <style data-emotion="css 7pg0cj-a11yText" dangerouslySetInnerHTML={{ __html: "\n                                                                            .css-7pg0cj-a11yText {\n                                                                                z-index: 9999;\n                                                                                border: 0;\n                                                                                clip: rect(1px, 1px, 1px, 1px);\n                                                                                height: 1px;\n                                                                                width: 1px;\n                                                                                position: absolute;\n                                                                                overflow: hidden;\n                                                                                padding: 0;\n                                                                                white-space: nowrap;\n                                                                            }\n                                                                        " }} /><span id="react-select-3-live-region" className="css-7pg0cj-a11yText" /><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" /><span data-testid="select-control">
                                                                            <style data-emotion="css cp01gg-control" dangerouslySetInnerHTML={{ __html: "\n                                                                                .css-cp01gg-control {\n                                                                                    -webkit-align-items: center;\n                                                                                    -webkit-box-align: center;\n                                                                                    -ms-flex-align: center;\n                                                                                    align-items: center;\n                                                                                    cursor: default;\n                                                                                    display: -webkit-box;\n                                                                                    display: -webkit-flex;\n                                                                                    display: -ms-flexbox;\n                                                                                    display: flex;\n                                                                                    -webkit-box-flex-wrap: wrap;\n                                                                                    -webkit-flex-wrap: wrap;\n                                                                                    -ms-flex-wrap: wrap;\n                                                                                    flex-wrap: wrap;\n                                                                                    -webkit-box-pack: justify;\n                                                                                    -webkit-justify-content: space-between;\n                                                                                    justify-content: space-between;\n                                                                                    min-height: 38px;\n                                                                                    outline: 0 !important;\n                                                                                    position: relative;\n                                                                                    -webkit-transition: all 100ms;\n                                                                                    transition: all 100ms;\n                                                                                    box-sizing: border-box;\n                                                                                }\n                                                                            " }} />
                                                                            <div className="bg-default border-default !min-h-9 h-9 text-sm leading-4 placeholder:text-sm placeholder:font-normal dark:focus:border-emphasis focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-default hover:border-emphasis rounded-md transition border py-2 px-3 css-cp01gg-control">
                                                                                <style data-emotion="css 14oxtc6" dangerouslySetInnerHTML={{ __html: "\n                                                                                    .css-14oxtc6 {\n                                                                                        -webkit-align-items: center;\n                                                                                        -webkit-box-align: center;\n                                                                                        -ms-flex-align: center;\n                                                                                        align-items: center;\n                                                                                        display: grid;\n                                                                                        -webkit-flex: 1;\n                                                                                        -ms-flex: 1;\n                                                                                        flex: 1;\n                                                                                        -webkit-box-flex-wrap: wrap;\n                                                                                        -webkit-flex-wrap: wrap;\n                                                                                        -ms-flex-wrap: wrap;\n                                                                                        flex-wrap: wrap;\n                                                                                        -webkit-overflow-scrolling: touch;\n                                                                                        position: relative;\n                                                                                        overflow: hidden;\n                                                                                        box-sizing: border-box;\n                                                                                    }\n                                                                                " }} />
                                                                                <div className="text-emphasis placeholder:text-muted flex gap-1 css-14oxtc6">
                                                                                    <style data-emotion="css vy4nui" dangerouslySetInnerHTML={{ __html: "\n                                                                                        .css-vy4nui {\n                                                                                            visibility: visible;\n                                                                                            -webkit-transform: translateZ(0);\n                                                                                            -moz-transform: translateZ(0);\n                                                                                            -ms-transform: translateZ(0);\n                                                                                            transform: translateZ(0);\n                                                                                            -webkit-flex: 1 1 auto;\n                                                                                            -ms-flex: 1 1 auto;\n                                                                                            flex: 1 1 auto;\n                                                                                            display: inline-grid;\n                                                                                            grid-area: 1/1/2/3;\n                                                                                            grid-template-columns: 0 min-content;\n                                                                                            box-sizing: border-box;\n                                                                                        }\n\n                                                                                        .css-vy4nui:after {\n                                                                                            content: attr(data-value) \" \";\n                                                                                            visibility: hidden;\n                                                                                            white-space: pre;\n                                                                                            grid-area: 1/2;\n                                                                                            font: inherit;\n                                                                                            min-width: 2px;\n                                                                                            border: 0;\n                                                                                            margin: 0;\n                                                                                            outline: 0;\n                                                                                            padding: 0;\n                                                                                        }\n                                                                                    " }} />
                                                                                    <div className="text-emphasis css-vy4nui" data-value="30 mins"><input className="focus:ring-0 focus:ring-offset-0 dark:!text-darkgray-900 !text-emphasis" style={{ color: 'inherit', background: 0, opacity: 1, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: 0, margin: 0, outline: 0, padding: 0 }} autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-3-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-3-placeholder" defaultValue="30 mins" /></div>
                                                                                </div>
                                                                                <style data-emotion="css 1wy0on6" dangerouslySetInnerHTML={{ __html: "\n                                                                                    .css-1wy0on6 {\n                                                                                        -webkit-align-items: center;\n                                                                                        -webkit-box-align: center;\n                                                                                        -ms-flex-align: center;\n                                                                                        align-items: center;\n                                                                                        -webkit-align-self: stretch;\n                                                                                        -ms-flex-item-align: stretch;\n                                                                                        align-self: stretch;\n                                                                                        display: -webkit-box;\n                                                                                        display: -webkit-flex;\n                                                                                        display: -ms-flexbox;\n                                                                                        display: flex;\n                                                                                        -webkit-flex-shrink: 0;\n                                                                                        -ms-flex-negative: 0;\n                                                                                        flex-shrink: 0;\n                                                                                        box-sizing: border-box;\n                                                                                    }\n                                                                                " }} />
                                                                                <div className="text-default css-1wy0on6">
                                                                                    <style data-emotion="css j4w2j1-indicatorSeparator" dangerouslySetInnerHTML={{ __html: "\n                                                                                        .css-j4w2j1-indicatorSeparator {\n                                                                                            -webkit-align-self: stretch;\n                                                                                            -ms-flex-item-align: stretch;\n                                                                                            align-self: stretch;\n                                                                                            width: 1px;\n                                                                                            box-sizing: border-box;\n                                                                                        }\n                                                                                    " }} /><span className=" css-j4w2j1-indicatorSeparator" />
                                                                                    <style data-emotion="css g56vrd-indicatorContainer" dangerouslySetInnerHTML={{ __html: "\n                                                                                        .css-g56vrd-indicatorContainer {\n                                                                                            display: -webkit-box;\n                                                                                            display: -webkit-flex;\n                                                                                            display: -ms-flexbox;\n                                                                                            display: flex;\n                                                                                            -webkit-transition: color 150ms;\n                                                                                            transition: color 150ms;\n                                                                                            box-sizing: border-box;\n                                                                                        }\n                                                                                    " }} />
                                                                                    <div className="text-default css-g56vrd-indicatorContainer" aria-hidden="true">
                                                                                        <style data-emotion="css 8mmkcg" dangerouslySetInnerHTML={{ __html: "\n                                                                                            .css-8mmkcg {\n                                                                                                display: inline-block;\n                                                                                                fill: currentColor;\n                                                                                                line-height: 1;\n                                                                                                stroke: currentColor;\n                                                                                                stroke-width: 0;\n                                                                                            }\n                                                                                        " }} /><svg height={20} width={20} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                                            </path>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div><label className="text-emphasis mb-2 block text-sm font-medium leading-none w-full overflow-hidden overflow-ellipsis whitespace-nowrap">Buffer
                                                                after event</label>
                                                                <div >
                                                                    <div />
                                                                    <style data-emotion="css b62m3t-container" dangerouslySetInnerHTML={{ __html: "\n                                                                        .css-b62m3t-container {\n                                                                            position: relative;\n                                                                            box-sizing: border-box;\n                                                                        }\n                                                                    " }} />
                                                                    <div className=" css-b62m3t-container">
                                                                        <style data-emotion="css 7pg0cj-a11yText" dangerouslySetInnerHTML={{ __html: "\n                                                                            .css-7pg0cj-a11yText {\n                                                                                z-index: 9999;\n                                                                                border: 0;\n                                                                                clip: rect(1px, 1px, 1px, 1px);\n                                                                                height: 1px;\n                                                                                width: 1px;\n                                                                                position: absolute;\n                                                                                overflow: hidden;\n                                                                                padding: 0;\n                                                                                white-space: nowrap;\n                                                                            }\n                                                                        " }} /><span id="react-select-4-live-region" className="css-7pg0cj-a11yText" /><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText" /><span data-testid="select-control">
                                                                            <style data-emotion="css cp01gg-control" dangerouslySetInnerHTML={{ __html: "\n                                                                                .css-cp01gg-control {\n                                                                                    -webkit-align-items: center;\n                                                                                    -webkit-box-align: center;\n                                                                                    -ms-flex-align: center;\n                                                                                    align-items: center;\n                                                                                    cursor: default;\n                                                                                    display: -webkit-box;\n                                                                                    display: -webkit-flex;\n                                                                                    display: -ms-flexbox;\n                                                                                    display: flex;\n                                                                                    -webkit-box-flex-wrap: wrap;\n                                                                                    -webkit-flex-wrap: wrap;\n                                                                                    -ms-flex-wrap: wrap;\n                                                                                    flex-wrap: wrap;\n                                                                                    -webkit-box-pack: justify;\n                                                                                    -webkit-justify-content: space-between;\n                                                                                    justify-content: space-between;\n                                                                                    min-height: 38px;\n                                                                                    outline: 0 !important;\n                                                                                    position: relative;\n                                                                                    -webkit-transition: all 100ms;\n                                                                                    transition: all 100ms;\n                                                                                    box-sizing: border-box;\n                                                                                }\n                                                                            " }} />
                                                                            <div className="bg-default border-default !min-h-9 h-9 text-sm leading-4 placeholder:text-sm placeholder:font-normal dark:focus:border-emphasis focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-default hover:border-emphasis rounded-md transition border py-2 px-3 css-cp01gg-control">
                                                                                <style data-emotion="css 14oxtc6" dangerouslySetInnerHTML={{ __html: "\n                                                                                    .css-14oxtc6 {\n                                                                                        -webkit-align-items: center;\n                                                                                        -webkit-box-align: center;\n                                                                                        -ms-flex-align: center;\n                                                                                        align-items: center;\n                                                                                        display: grid;\n                                                                                        -webkit-flex: 1;\n                                                                                        -ms-flex: 1;\n                                                                                        flex: 1;\n                                                                                        -webkit-box-flex-wrap: wrap;\n                                                                                        -webkit-flex-wrap: wrap;\n                                                                                        -ms-flex-wrap: wrap;\n                                                                                        flex-wrap: wrap;\n                                                                                        -webkit-overflow-scrolling: touch;\n                                                                                        position: relative;\n                                                                                        overflow: hidden;\n                                                                                        box-sizing: border-box;\n                                                                                    }\n                                                                                " }} />
                                                                                <div className="text-emphasis placeholder:text-muted flex gap-1 css-14oxtc6">
                                                                                    <style data-emotion="css vy4nui" dangerouslySetInnerHTML={{ __html: "\n                                                                                        .css-vy4nui {\n                                                                                            visibility: visible;\n                                                                                            -webkit-transform: translateZ(0);\n                                                                                            -moz-transform: translateZ(0);\n                                                                                            -ms-transform: translateZ(0);\n                                                                                            transform: translateZ(0);\n                                                                                            -webkit-flex: 1 1 auto;\n                                                                                            -ms-flex: 1 1 auto;\n                                                                                            flex: 1 1 auto;\n                                                                                            display: inline-grid;\n                                                                                            grid-area: 1/1/2/3;\n                                                                                            grid-template-columns: 0 min-content;\n                                                                                            box-sizing: border-box;\n                                                                                        }\n\n                                                                                        .css-vy4nui:after {\n                                                                                            content: attr(data-value) \" \";\n                                                                                            visibility: hidden;\n                                                                                            white-space: pre;\n                                                                                            grid-area: 1/2;\n                                                                                            font: inherit;\n                                                                                            min-width: 2px;\n                                                                                            border: 0;\n                                                                                            margin: 0;\n                                                                                            outline: 0;\n                                                                                            padding: 0;\n                                                                                        }\n                                                                                    " }} />
                                                                                    <div className="text-emphasis css-vy4nui" data-value="30 mins"><input className="focus:ring-0 focus:ring-offset-0 dark:!text-darkgray-900 !text-emphasis" style={{ color: 'inherit', background: 0, opacity: 1, width: '100%', gridArea: '1 / 2', font: 'inherit', minWidth: '2px', border: 0, margin: 0, outline: 0, padding: 0 }} autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-4-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-4-placeholder" defaultValue="30 mins" /></div>
                                                                                </div>
                                                                                <style data-emotion="css 1wy0on6" dangerouslySetInnerHTML={{ __html: "\n                                                                                    .css-1wy0on6 {\n                                                                                        -webkit-align-items: center;\n                                                                                        -webkit-box-align: center;\n                                                                                        -ms-flex-align: center;\n                                                                                        align-items: center;\n                                                                                        -webkit-align-self: stretch;\n                                                                                        -ms-flex-item-align: stretch;\n                                                                                        align-self: stretch;\n                                                                                        display: -webkit-box;\n                                                                                        display: -webkit-flex;\n                                                                                        display: -ms-flexbox;\n                                                                                        display: flex;\n                                                                                        -webkit-flex-shrink: 0;\n                                                                                        -ms-flex-negative: 0;\n                                                                                        flex-shrink: 0;\n                                                                                        box-sizing: border-box;\n                                                                                    }\n                                                                                " }} />
                                                                                <div className="text-default css-1wy0on6">
                                                                                    <style data-emotion="css j4w2j1-indicatorSeparator" dangerouslySetInnerHTML={{ __html: "\n                                                                                        .css-j4w2j1-indicatorSeparator {\n                                                                                            -webkit-align-self: stretch;\n                                                                                            -ms-flex-item-align: stretch;\n                                                                                            align-self: stretch;\n                                                                                            width: 1px;\n                                                                                            box-sizing: border-box;\n                                                                                        }\n                                                                                    " }} /><span className=" css-j4w2j1-indicatorSeparator" />
                                                                                    <style data-emotion="css g56vrd-indicatorContainer" dangerouslySetInnerHTML={{ __html: "\n                                                                                        .css-g56vrd-indicatorContainer {\n                                                                                            display: -webkit-box;\n                                                                                            display: -webkit-flex;\n                                                                                            display: -ms-flexbox;\n                                                                                            display: flex;\n                                                                                            -webkit-transition: color 150ms;\n                                                                                            transition: color 150ms;\n                                                                                            box-sizing: border-box;\n                                                                                        }\n                                                                                    " }} />
                                                                                    <div className="text-default css-g56vrd-indicatorContainer" aria-hidden="true">
                                                                                        <style data-emotion="css 8mmkcg" dangerouslySetInnerHTML={{ __html: "\n                                                                                            .css-8mmkcg {\n                                                                                                display: inline-block;\n                                                                                                fill: currentColor;\n                                                                                                line-height: 1;\n                                                                                                stroke: currentColor;\n                                                                                                stroke-width: 0;\n                                                                                            }\n                                                                                        " }} /><svg height={20} width={20} viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg">
                                                                                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                                                                                            </path>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow-fade row-span-3 grid grid-rows-[subgrid] gap-0 overflow-clip rounded-xl bg-white p-8 pb-0">
                                        <p className="mb-2 text-xl font-medium [text-wrap:balance]">Stand out with a
                                            custom
                                            booking link</p>
                                        <p className="text-md text-gray-500 [text-wrap:balance]">Customize your booking
                                            link
                                            so it’s short and easy to remember for your bookers. No more long,
                                            complicated links one can easily forget.</p>
                                        <div className="mt-5"><a href="https://cal.com/rick">
                                            <div className="pointer-events-none mx-auto grid h-full w-full max-w-[350px] place-items-center overflow-clip pt-8 [&>*]:[grid-area:1/1]">
                                                <div className="border-subtle h-full w-full rounded-t-3xl border-l border-r border-t bg-white relative -top-4 mx-auto max-w-[90%] opacity-80">
                                                </div>
                                                <div className="border-subtle h-full w-full rounded-t-3xl border-l border-r border-t bg-white relative p-6 pb-0">
                                                    <span className="font-cal shadow-fade absolute -top-6 left-1/2 block -translate-x-1/2 rounded-2xl bg-[#f7f7f7] px-5 py-3 text-xl font-bold">cal.com/rick</span>
                                                    <div><img src="/home/rickastley.png" alt="Avatar of exmaple user" className="mb-2 h-8 w-8 rounded-full" />
                                                        <p className="text-content-subtle mb-1 text-base font-medium">
                                                            Rick Astley</p>
                                                        <p className="mb-4 text-2xl font-semibold text-black">
                                                            Dancing
                                                            Lessons</p>
                                                        <p className="mb-4 grid grid-cols-[auto_1fr] items-baseline gap-2 text-sm font-medium">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info relative top-[2px] h-4 w-4 stroke-gray-400">
                                                                <circle cx={12} cy={12} r={10} />
                                                                <path d="M12 16v-4" />
                                                                <path d="M12 8h.01" />
                                                            </svg>Cal.com will never give you up.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a></div>
                                    </div>
                                    <div className="shadow-fade row-span-3 grid grid-rows-[subgrid] gap-0 overflow-clip rounded-xl bg-white p-8 pb-0">
                                        <p className="mb-2 text-xl font-medium [text-wrap:balance]">Streamline your
                                            bookers’
                                            experience</p>
                                        <p className="text-md text-gray-500 [text-wrap:balance]">Let your bookers
                                            overlay
                                            their calendar, receive booking confirmations via text or email, get events
                                            added to their calendar, and allow them to reschedule with ease.</p>
                                        <div className="mt-5">
                                            <div className="pointer-events-none relative -ml-8 h-full min-h-[250px] w-[calc(100%+2rem)] overflow-clip md:aspect-[3/1.4]">
                                                <div className="border-subtle absolute right-0 top-0 h-full shrink-0 rounded-t-3xl border-l border-r border-t bg-white">
                                                    <header className="border-subtle flex justify-end gap-4 border-b px-4 py-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex h-auto w-auto flex-row items-center">
                                                                <button type="button" role="switch" aria-checked="true" data-state="checked" value="on" className="bg-brand-default dark:bg-brand-emphasis h-5 w-[34px] rounded-full shadow-none transition focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"><span data-state="checked" id="radix-:Ratp77jl6:" className="h-[14px] w-[14px] ltr:translate-x-[4px] rtl:-translate-x-[4px] ltr:[&[data-state='checked']]:translate-x-[17px] rtl:[&[data-state='checked']]:-translate-x-[17px] block rounded-full transition will-change-transform bg-brand-accent shadow-inner" /></button><input type="checkbox" aria-hidden="true" style={{ transform: 'translateX(-100%)', position: 'absolute', pointerEvents: 'none', opacity: 0, margin: 0 }} tabIndex={-1} defaultChecked defaultValue="on" />
                                                            </div><label className="text-emphasis block text-sm font-medium leading-none mb-0">Overlay
                                                                my calendar</label>
                                                        </div>
                                                        <div>
                                                            <div role="group" dir="ltr" className="min-h-9 border-default relative inline-flex gap-0.5 rounded-md border p-1 rtl:flex-row-reverse bg-subtle [&_button[data-state=on]]:shadow-fade border-none [--cal-text:#ccc] [&_button[data-state=on]]:bg-white [&_button[data-state=on]]:text-black" tabIndex={-1} style={{ outline: 'none' }}><button type="button" data-state="on" role="radio" aria-checked="true" data-testid="toggle-group-item-12h" className="aria-checked:bg-emphasis relative rounded-[4px] px-3 py-1 text-sm leading-tight transition text-default [&[aria-checked='false']]:hover:text-emphasis" tabIndex={-1} data-radix-collection-item>
                                                                <div className="item-center flex justify-center ">
                                                                    12h
                                                                </div>
                                                            </button><button type="button" data-state="off" role="radio" aria-checked="false" data-testid="toggle-group-item-24h" className="aria-checked:bg-emphasis relative rounded-[4px] px-3 py-1 text-sm leading-tight transition text-default [&[aria-checked='false']]:hover:text-emphasis" tabIndex={-1} data-radix-collection-item>
                                                                    <div className="item-center flex justify-center ">
                                                                        24h
                                                                    </div>
                                                                </button></div>
                                                        </div>
                                                    </header>
                                                    <div className="grid h-full grid-cols-[repeat(6,105px)] grid-rows-[auto_1fr] text-sm">
                                                        <div className="border-subtle text-subtle col-span-6 grid grid-cols-[subgrid] border-b py-2 text-center text-xs font-medium">
                                                            <p>Sun 05</p>
                                                            <p>Mon 06</p>
                                                            <p>Tue 07</p>
                                                            <p className="text-black">Wed <span className="rounded-lg bg-black px-1 py-[2px] text-white">08</span>
                                                            </p>
                                                            <p>Thu 09</p>
                                                            <p>Fri 10</p>
                                                        </div>
                                                        <div className="divide-subtle col-span-6 grid h-full grid-cols-[subgrid] divide-x [--fifteen-min-size:30px] [--thirty-min-size:calc(var(--fifteen-min-size)*2)] [&>div]:grid [&>div]:grid-cols-1 [&>div]:grid-rows-[repeat(5,var(--fifteen-min-size))]">
                                                            <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                                                            </div>
                                                            <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                                                                <div className="m-[2px] rounded-lg p-2 row-span-6 row-start-1 text-[#0561A2 bg-[#D9F3FF]">
                                                                    <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">Making
                                                                        coffee</span><span className="block text-[10px] leading-[1.5] opacity-50">09:00
                                                                            AM - 4PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                                                                <div className="m-[2px] rounded-lg p-2 row-span-2 row-start-3 text-[#B081D7 bg-[#E9DDFE]">
                                                                    <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">Breakfast</span><span className="block text-[10px] leading-[1.5] opacity-50">11:30
                                                                        AM - 2PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                                                                <div className="m-[2px] rounded-lg p-2 row-span-2 row-start-1 text-[#B081D7 bg-[#E9DDFE]">
                                                                    <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">Breakfast</span><span className="block text-[10px] leading-[1.5] opacity-50">11:30
                                                                        AM - 2 PM</span>
                                                                </div>
                                                                <div className="m-[2px] rounded-lg p-2 row-span-3 row-start-4 bg-[#F5F5F5] text-[#434C5C]">
                                                                    <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">Design
                                                                        conference</span><span className="block text-[10px] leading-[1.5] opacity-50">6
                                                                            PM - 8:30 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                                                                <div className="m-[2px] rounded-lg p-2 row-span-6 row-start-3 text-[#882D2F bg-[#F9D7D9]">
                                                                    <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">Hiring
                                                                        call</span><span className="block text-[10px] leading-[1.5] opacity-50">7:30
                                                                            PM - 8:30 PM</span>
                                                                </div>
                                                            </div>
                                                            <div className="bg-[repeating-linear-gradient(transparent,_transparent_var(--thirty-min-size),_#E5E7EB_var(--thirty-min-size),_#E5E7EB_calc(var(--thirty-min-size)+1px))]">
                                                                <div className="m-[2px] rounded-lg p-2 row-span-4 row-start-2 text-[#0561A2 bg-[#D9F3FF]">
                                                                    <span className="block text-[11px] font-semibold leading-[1.3] opacity-80">Hiring
                                                                        call</span><span className="block text-[10px] leading-[1.5] opacity-50">8:30
                                                                            PM - 9:30 PM</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shadow-fade row-span-3 grid grid-rows-[subgrid] gap-0 overflow-clip rounded-xl bg-white p-8 pb-0">
                                        <p className="mb-2 text-xl font-medium [text-wrap:balance]">Reduce no-shows with
                                            automated reminders</p>
                                        <p className="text-md text-gray-500 [text-wrap:balance]">Easily send sms or
                                            email
                                            reminders about bookings, and send automated follow-ups to gather any
                                            relevant information before the meeting.</p>
                                        <div className="mt-5">
                                            <div className="pointer-events-none mx-auto grid h-full w-full items-center py-5 md:w-[80%]">
                                                <div className="grid [&>*]:[grid-area:1/1]">
                                                    <div className="shadow-fade rounded-2xl bg-[#f7f7f7] p-3 relative top-4 scale-[0.8] opacity-40">
                                                    </div>
                                                    <div className="shadow-fade rounded-2xl bg-[#f7f7f7] p-3 relative top-0 scale-90 opacity-70">
                                                    </div>
                                                    <div className="shadow-fade rounded-2xl bg-[#f7f7f7] p-3 relative -top-4 z-10">
                                                        <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-[40px_minmax(0,1fr)_auto]">
                                                            <svg className="self-center" width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <rect width={40} height={40} rx={10} fill="#333333">
                                                                </rect>
                                                                <path d="M14.5291 26.208C11.2011 26.208 8.68906 23.616 8.68906 20.416C8.68906 17.2 11.0731 14.592 14.5291 14.592C16.3531 14.592 17.6171 15.152 18.6251 16.352L17.0411 17.728C16.3691 17.024 15.5371 16.672 14.5291 16.672C12.3691 16.672 11.0091 18.368 11.0091 20.416C11.0091 22.464 12.3691 24.128 14.5771 24.128C15.6651 24.128 16.4811 23.76 17.1371 23.04L18.7691 24.432C17.9211 25.456 16.4811 26.208 14.5291 26.208ZM22.8461 26.208C20.5581 26.208 18.7341 24.272 18.7341 21.872C18.7341 19.472 20.5581 17.504 22.8461 17.504C24.2861 17.504 25.0381 18.096 25.4861 18.992V17.68H27.6301V26H25.5341V24.64C25.0861 25.584 24.3341 26.208 22.8461 26.208ZM20.8941 21.856C20.8941 23.12 21.8221 24.256 23.1981 24.256C24.6221 24.256 25.5341 23.168 25.5341 21.872C25.5341 20.576 24.6221 19.456 23.1981 19.456C21.8221 19.456 20.8941 20.56 20.8941 21.856ZM28.9134 26V14.32H31.0734V26H28.9134Z" fill="white" />
                                                            </svg>
                                                            <div className="max-sm:col-span-2 max-sm:row-start-2">
                                                                <p className="font-cal w-full max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                                                                    Reminder: Design meeting in 30 minutes</p>
                                                                <p className="text-base text-[#898989]">This is a
                                                                    reminder
                                                                    about your upcoming event at 4:15 pm</p>
                                                            </div>
                                                            <div className="py-1 text-right">8m ago</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-10 mt-20">
                                        <div className="flex flex-col pb-3.5 items-center text-center">
                                            <h1 className="font-cal !leading-xs md:!leading-h1 text-[32px] lg:text-5xl pb-3">
                                                <span data-br=":R4t77jl6:" data-brr={1} style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>...and
                                                    so much more!</span>
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="mx-auto grid grid-cols-2 place-items-center content-center sm:grid-cols-4 md:w-max  lg:grid-cols-4">
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="Accept payments" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720457-money-bill-dollar-euro.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                Accept payments</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            Accept payments</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">You
                                                            can
                                                            monetize your bookings through our Stripe integration.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="Built-in video conferencing" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720457-video-camera-play.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                Built-in video conferencing</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            Built-in video conferencing</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">Cal
                                                            Video is our in-house video conferencing platform.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="Short booking links" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720457-link-lines-document.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                Short booking links</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            Short booking links</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">
                                                            Each
                                                            booking link can be short which makes it easy to remember.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="Privacy first" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720457-shield-2-check-1.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                Privacy first</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            Privacy first</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">Our
                                                            solution has been designed to keep your information private
                                                            and protected.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="65+ languages" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720457-frame.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                65+ languages</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            65+ languages</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">
                                                            Talk to
                                                            anyone around the globe with support for 65+ languages.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="Easy embeds" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720402-whisper-api.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                Easy embeds</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            Easy embeds</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">
                                                            Embed
                                                            your booking page anywhere with just a few clicks.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="All your favorite apps" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720395-game-shapes-icon.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                All your favorite apps</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            All your favorite apps</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">
                                                            Effortlessly integrate with your favorite popular apps.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="perspective-1000 h-40 w-full max-w-[180px]">
                                                <div className="shadow-fade group relative grid h-full w-full overflow-clip rounded-2xl bg-white [&>*]:[grid-area:1/1] ">
                                                    <div className="flex h-full w-full flex-col items-center p-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0 ">
                                                        <div className="flex h-20 items-center justify-center">
                                                            <div className="shadow-fade relative grid h-[64px] w-[64px] shrink-0 place-items-center rounded-lg bg-neutral-100 text-gray-700">
                                                                <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div>
                                                                <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-gray-300">
                                                                </div><img alt="Simple customization" loading="lazy" width={24} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729720388-visit-page-open-app.svg" />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-grow items-center">
                                                            <h1 className="text-center text-base font-semibold leading-tight">
                                                                Simple customization</h1>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex h-full w-full scale-95 select-none flex-col items-center justify-center rounded-xl p-2 opacity-0 transition-[opacity,transform] duration-300 group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100 group-focus-visible:pointer-events-auto group-focus-visible:scale-100 group-focus-visible:opacity-100">
                                                        <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-gray-200">
                                                        </div>
                                                        <p className="mb-2 text-center text-sm font-semibold leading-tight md:text-base">
                                                            Simple customization</p>
                                                        <p className="text-center text-sm font-medium text-gray-700">
                                                            Easily
                                                            customize your booking page to fit your brand.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <section className="mx-3 md:mx-0">
                        <div className="mx-auto w-full relative max-w-[1200px] gap-8 rounded-xl py-6 md:py-20 bg-transparent overflow-clip px-0 md:px-0">
                            <div className="px-3">
                                <div className="flex flex-col pb-3.5 items-center text-center">
                                    <div><span className="my-3 flex items-center justify-center mb-4"><span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-white">
                                        <p className="text-xs text-[#242424]">Testimonials</p>
                                    </span></span></div>
                                    <h1 className="font-cal !leading-xs md:!leading-h1 text-[32px] lg:text-5xl pb-3">
                                        <span data-br=":R15f7jl6:" data-brr={1} style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>Don’t
                                            take our word for it</span>
                                    </h1>
                                    <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">Our users
                                        are
                                        our best ambassadors. Discover why we're the top choice for scheduling
                                        meetings.</p>
                                </div>
                            </div>
                            <div className="relative -mx-3 mt-2.5 flex items-center justify-center overflow-hidden p-8">
                                <div className="relative flex h-96 sm:h-64 w-full items-center justify-center">
                                    <div className="absolute grid min-h-[270px] h-full w-full max-w-[590px] grid-cols-1 transition-all duration-1000 ease-in-out z-20 transform scale-100 opacity-100">
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="shadow-fade rounded-xl bg-[#FCFCFC] p-[24px]">
                                                <div className="grid min-h-full grid-rows-[1fr_auto]">
                                                    <div className=" whitespace-normal pb-5 text-xl font-semibold sm:text-2xl">
                                                        <p>"More elegant than Calendly, more open than SavvyCal,
                                                            Cal.com works and it feels just right."</p>
                                                    </div>
                                                    <div className="mt-auto flex items-center"><img alt="Flo Merian" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} className="h-11 w-11 rounded-xl object-cover" style={{ color: 'transparent' }} srcSet="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1709826484-flo-merian.jpeg&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1709826484-flo-merian.jpeg&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1709826484-flo-merian.jpeg&w=96&q=75" />
                                                        <div className="ml-3 ">
                                                            <p className="text-sm font-medium text-gray-900">Flo Merian
                                                            </p>
                                                            <p className="text-sm text-gray-500">Product Marketing,
                                                                Mintlify
                                                            </p>
                                                        </div>
                                                        <div className="border-subtle ml-4 hidden border-l pl-4 md:flex">
                                                            <img alt="Flo Merian" loading="lazy" width={50} height={100} decoding="async" data-nimg={1} className="h-auto max-w-full object-contain" style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726587541-mintlify-logo.svg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute grid min-h-[270px] h-full w-full max-w-[590px] grid-cols-1 transition-all duration-1000 ease-in-out z-10 transform scale-100 opacity-60 translate-x-[100%]">
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="shadow-fade rounded-xl bg-[#FCFCFC] p-[24px]">
                                                <div className="grid min-h-full grid-rows-[1fr_auto]">
                                                    <div className=" whitespace-normal pb-5 text-xl font-semibold sm:text-2xl">
                                                        <p>"I finally made the move to Cal after I couldn't
                                                            find how to edit events in the Calendly dashboard."</p>
                                                    </div>
                                                    <div className="mt-auto flex items-center"><img alt="Ant Wilson" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} className="h-11 w-11 rounded-xl object-cover" style={{ color: 'transparent' }} srcSet="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726586694-ant-wilson-profile.png&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726586694-ant-wilson-profile.png&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726586694-ant-wilson-profile.png&w=96&q=75" />
                                                        <div className="ml-3 ">
                                                            <p className="text-sm font-medium text-gray-900">Ant Wilson
                                                            </p>
                                                            <p className="text-sm text-gray-500">Co-Founder &amp; CTO,
                                                                Supabase</p>
                                                        </div>
                                                        <div className="border-subtle ml-4 hidden border-l pl-4 md:flex">
                                                            <img alt="Ant Wilson" loading="lazy" width={50} height={100} decoding="async" data-nimg={1} className="h-auto max-w-full object-contain" style={{ color: 'transparent' }} srcSet="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726586386-supabase-logo-1.png&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726586386-supabase-logo-1.png&w=128&q=75 2x" src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726586386-supabase-logo-1.png&w=128&q=75" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute grid min-h-[270px] h-full w-full max-w-[590px] grid-cols-1 transition-all duration-1000 ease-in-out z-0 opacity-0">
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="shadow-fade rounded-xl bg-[#FCFCFC] p-[24px]">
                                                <div className="grid min-h-full grid-rows-[1fr_auto]">
                                                    <div className=" whitespace-normal pb-5 text-xl font-semibold sm:text-2xl">
                                                        <p>"I think Cal.com has a very good chance of creating a
                                                            new category around being both great and well
                                                            designed."</p>
                                                    </div>
                                                    <div className="mt-auto flex items-center"><img alt="Guillermo Rauch" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} className="h-11 w-11 rounded-xl object-cover" style={{ color: 'transparent' }} srcSet="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726585755-guillermo-rauch-twitter.jpeg&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726585755-guillermo-rauch-twitter.jpeg&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1726585755-guillermo-rauch-twitter.jpeg&w=96&q=75" />
                                                        <div className="ml-3 ">
                                                            <p className="text-sm font-medium text-gray-900">Guillermo
                                                                Rauch
                                                            </p>
                                                            <p className="text-sm text-gray-500">CEO, Vercel</p>
                                                        </div>
                                                        <div className="border-subtle ml-4 hidden border-l pl-4 md:flex">
                                                            <img alt="Guillermo Rauch" loading="lazy" width={50} height={100} decoding="async" data-nimg={1} className="h-auto max-w-full object-contain" style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726585996-vercel-logo.svg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute grid min-h-[270px] h-full w-full max-w-[590px] grid-cols-1 transition-all duration-1000 ease-in-out z-0 opacity-0">
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="shadow-fade rounded-xl bg-[#FCFCFC] p-[24px]">
                                                <div className="grid min-h-full grid-rows-[1fr_auto]">
                                                    <div className=" whitespace-normal pb-5 text-xl font-semibold sm:text-2xl">
                                                        <p>"Just gave it a go and it's definitely the easiest
                                                            meeting I've ever scheduled!"</p>
                                                    </div>
                                                    <div className="mt-auto flex items-center"><img alt="Aria Minaei" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} className="h-11 w-11 rounded-xl object-cover" style={{ color: 'transparent' }} srcSet="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1709826626-aria.jpeg&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1709826626-aria.jpeg&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1709826626-aria.jpeg&w=96&q=75" />
                                                        <div className="ml-3 ">
                                                            <p className="text-sm font-medium text-gray-900">Aria Minaei
                                                            </p>
                                                            <p className="text-sm text-gray-500">CEO, Theatre.JS</p>
                                                        </div>
                                                        <div className="border-subtle ml-4 hidden border-l pl-4 md:flex">
                                                            <img alt="Aria Minaei" loading="lazy" width={50} height={100} decoding="async" data-nimg={1} className="h-auto max-w-full object-contain" style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1724694436-theatre.svg" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute grid min-h-[270px] h-full w-full max-w-[590px] grid-cols-1 transition-all duration-1000 ease-in-out z-10 transform scale-100 opacity-60 -translate-x-[100%]">
                                        <div className="relative grid p-3 shadow-[1px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] before:pointer-events-none before:absolute before:left-[-100vw] before:right-[-100vw] before:top-0 before:h-full before:shadow-[0px_1px_0px_0px_#E1E2E3,inset_1px_1px_0px_0px_#E1E2E3] after:pointer-events-none after:absolute after:left-0 after:top-full after:h-8 after:w-full after:shadow-[1px_0px_0px_0px_#E1E2E3,inset_1px_0px_0px_0px_#E1E2E3] after:hidden">
                                            <span aria-hidden="true" className="pointer-events-none absolute bottom-[-11px] left-[-11px] right-[-11px] top-[-11px] z-10 bg-[url(/cross.svg),url(/cross.svg),url(/cross.svg),url(/cross.svg)] bg-[length:22px] bg-[position:top_left,top_right,bottom_left,bottom_right] bg-no-repeat" />
                                            <div className="shadow-fade rounded-xl bg-[#FCFCFC] p-[24px]">
                                                <div className="grid min-h-full grid-rows-[1fr_auto]">
                                                    <div className=" whitespace-normal pb-5 text-xl font-semibold sm:text-2xl">
                                                        <p>"I just migrated from Calendly to Cal.com"</p>
                                                    </div>
                                                    <div className="mt-auto flex items-center"><img alt="Kent C. Dodds" loading="lazy" width={40} height={40} decoding="async" data-nimg={1} className="h-11 w-11 rounded-xl object-cover" style={{ color: 'transparent' }} srcSet="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1724694222-6aczo99k_400x400.jpg&w=48&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1724694222-6aczo99k_400x400.jpg&w=96&q=75 2x" src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1724694222-6aczo99k_400x400.jpg&w=96&q=75" />
                                                        <div className="ml-3 ">
                                                            <p className="text-sm font-medium text-gray-900">Kent C.
                                                                Dodds
                                                            </p>
                                                            <p className="text-sm text-gray-500">Founder of EpicWeb.dev
                                                            </p>
                                                        </div>
                                                        <div className="border-subtle ml-4 hidden border-l pl-4 md:flex">
                                                            <img alt="Kent C. Dodds" loading="lazy" width={50} height={100} decoding="async" data-nimg={1} className="h-auto max-w-full object-contain" style={{ color: 'transparent' }} srcSet="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1724694330-epicwebdev2.png&w=64&q=75 1x, /_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1724694330-epicwebdev2.png&w=128&q=75 2x" src="/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F77432%2F1724694330-epicwebdev2.png&w=128&q=75" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-3 md:mx-0">
                        <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl px-1 py-6 md:px-1 md:py-20 shadow-fade bg-white mb-1">
                            <div className="lg:space-x- flex flex-col items-center md:mx-8 lg:flex-row gap-4">
                                <div className="flex flex-col text-center lg:flex-1 lg:items-start lg:justify-center lg:text-left">
                                    <div className="flex flex-col pb-3.5 items-center text-center lg:items-start lg:text-left">
                                        <div><span className="my-3 flex items-center justify-center mb-4"><span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-white">
                                            <p className="text-xs text-[#242424]">App store</p>
                                        </span></span></div>
                                        <h1 className="font-cal md:!leading-h1 text-[38px] tracking-[-0.015em] md:text-[45px] lg:text-[48px] pb-3 max-w-full leading-h1">
                                            <p className="mx-2 md:mx-0">Connect your favorite apps</p>
                                        </h1>
                                        <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">Cal.com
                                            has
                                            built-in integrations for all the apps you already know and love.</p>
                                    </div><a className="text-sm dark:text-black dark:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 hover:opacity-90 transition-all duration-150 ease-in-out group relative mx-auto mt-3 inline-flex max-w-max items-center overflow-hidden rounded-xl border border-[#DADADD] bg-[#F3F3F4] px-3 py-1 font-medium text-[#242424] shadow-sm hover:bg-[#F3F3F4] hover:shadow-sm lg:mx-0" href="https://app.cal.com/apps">Explore our apps<div className="ml-3 mt-0.5 scale-150"><svg className="stroke-[#858585] " fill="none" width={6} height={6} viewBox="0 0 10 10" aria-hidden="true">
                                        <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7">
                                        </path>
                                        <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4">
                                        </path>
                                    </svg></div>
                                        <div className="absolute inset-0">
                                            <div className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-b from-white opacity-90">
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="mt-8 flex justify-center lg:mt-0"><img alt="Integration Logos" loading="lazy" width={450} height={200} decoding="async" data-nimg={1} className="object-contain" style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1732906465-marketing-site-3-0-frame-9.svg" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-3 md:mx-0">
                        <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl px-1 py-6 md:py-20 bg-transparent md:px-0">
                            <div className="flex flex-col pb-3.5 items-center text-center">
                                <div><span className="my-3 flex items-center justify-center mb-4"><span className="shadow-fade inline-flex items-center justify-start gap-1 rounded-full px-3.5 py-1 bg-white"><span className="flex h-5 w-auto items-center justify-center py-[1.33px] transition-transform duration-300 [&_svg]:h-full [&_svg]:w-auto [&_svg]:shrink-0"><img alt="wall of love" loading="lazy" width={100} height={100} decoding="async" data-nimg={1} className="h-5 w-5" style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1729431958-people-like-love-heart-1.svg" /></span>
                                    <p className="text-xs text-[#242424]">Wall of love</p>
                                </span></span></div>
                                <h1 className="font-cal !leading-xs md:!leading-h1 text-[32px] lg:text-5xl pb-3"><span data-br=":R15v7jl6:" data-brr={1} style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}>See
                                    why our users love Cal.com</span>
                                </h1>
                                <p className="max-w-md text-base text-[#898989] lg:max-w-2xl lg:text-lg">Read the impact
                                    we've had from those who matter most - our customers.</p>
                            </div>
                            <div style={{ width: '100%' }} className="senja-embed mt-4" data-id="6a0c4b74-527a-4058-bded-8a358821c1a0" />
                        </div>
                    </section>
                    <section className="mx-3 md:mx-0">
                        <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl bg-transparent px-2 py-5 md:px-2 md:py-5">
                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                                <div className="mb-6 lg:mb-0 lg:w-1/4">
                                    <h1 className="max-w-[220px] text-[14px] font-normal text-[#898989] md:ml-2">
                                        Scheduling
                                        for companies and employees of</h1>
                                </div>
                                <div className="grid grid-cols-2 gap-6 md:grid-cols-5 lg:max-w-4xl lg:gap-10">
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={59} height={22} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726142372-deel-1.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={98} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726142372-vercel-logo.svg" />
                                    </div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={139} height={32} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731350987-mercury.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={82} height={24} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731689014-angellist.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={107} height={34} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731351596-clip-path-group-marketing-site-3-0.svg" />
                                    </div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={123} height={26} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731689082-storyblok.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={104} height={25} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726142373-orrick-1.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={101} height={15} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1731689357-antimetal.svg" /></div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={92} height={22} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726142372-supabase-logo.svg" />
                                    </div>
                                    <div className="mt-8 flex items-center justify-center lg:mt-0 "><img alt="Customer Logo" loading="lazy" width={87} height={25} decoding="async" data-nimg={1} style={{ color: 'transparent' }} src="https://www.datocms-assets.com/77432/1726142372-okteto-1.svg" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-3 md:mx-0">
                        <div className="mx-auto w-full relative max-w-[1200px] gap-8 overflow-clip rounded-xl px-1 py-6 md:px-1 md:py-20 shadow-fade bg-white my-2">
                            <div className="absolute inset-0 z-0"><img alt="squares" loading="lazy" decoding="async" data-nimg="fill" className="animate-fade-in z-0 object-cover opacity-60" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, objectFit: 'cover', color: 'transparent', maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 80%), linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.7) 100%)' }} sizes="(max-width: 768px) 100vw, (min-width: 1200px) 1200px" srcSet="/_next/image?url=%2Fsquares-footer.png&w=640&q=100 640w, /_next/image?url=%2Fsquares-footer.png&w=750&q=100 750w, /_next/image?url=%2Fsquares-footer.png&w=828&q=100 828w, /_next/image?url=%2Fsquares-footer.png&w=1080&q=100 1080w, /_next/image?url=%2Fsquares-footer.png&w=1200&q=100 1200w, /_next/image?url=%2Fsquares-footer.png&w=1920&q=100 1920w, /_next/image?url=%2Fsquares-footer.png&w=2048&q=100 2048w, /_next/image?url=%2Fsquares-footer.png&w=3840&q=100 3840w" src="/_next/image?url=%2Fsquares-footer.png&w=3840&q=100" /></div>
                            <div className="relative z-10 text-center md:max-w-none">
                                <h2 className="font-cal md:!leading-xl text-[35px] tracking-[-0.002em] md:text-[45px] mx-auto max-w-lg text-center">
                                    Smarter, simpler scheduling</h2>
                                <div className="mb-9 mt-8">
                                    <div className="mb-4 flex justify-center gap-4 text-center"><a className="inline-flex items-center px-3 py-2 text-sm font-medium border border-[transparent] dark:text-black text-white dark:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 hover:opacity-90 transition-all duration-150 ease-in-out group relative overflow-hidden rounded-xl bg-[#2c2c30] hover:bg-[#2c2c30]" href="https://cal.com/signup">Get Started<div className="ml-3 mt-0.5 scale-150">
                                        <svg className="stroke-gray-400 stroke-2" fill="none" width={7} height={7} viewBox="0 0 10 10" aria-hidden="true">
                                            <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7" />
                                            <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4" />
                                        </svg>
                                    </div>
                                        <div className="absolute inset-0">
                                            <div className="pointer-events-none absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-b from-white opacity-60">
                                            </div>
                                        </div>
                                    </a></div>
                                </div>
                                <div className="mx-auto grid max-w-[900px] grid-cols-2 items-center justify-center justify-items-center gap-7 sm:grid-cols-3 md:grid-cols-3 lg:flex lg:gap-8  lg:space-y-0">
                                    <img alt="Product of the Day" className="max-h-9 w-auto" src="/product-of-the-day.svg" /><img alt="Product of the Week" className="max-h-9 w-auto" src="/product-of-the-week.svg" /><img alt="Product of the Month" className="max-h-9 w-auto" src="/product-of-the-month.svg" /><img className="max-h-9 w-auto" alt="Cal.com on Product Hunt" src="/producthunt.svg" /><img className="max-h-9 w-auto" alt="Cal.com on Google" src="/google-reviews.svg" /><img className="max-h-9 w-auto" alt="Cal.com on G2" src="/g2.svg" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section className="mx-3 md:mx-0">
                <div className="mx-auto relative max-w-[1200px] gap-8 overflow-clip rounded-xl px-1 md:py-20 bg-transparent text-black mt-12 flex h-full w-full flex-col py-14 md:px-0">
                    <div className="flex w-full flex-col gap-6 md:flex-row md:justify-between">
                        <div className="mb-12 flex flex-col text-sm md:pl-2 lg:mb-0">
                            <div className="flex pb-2 lg:pb-7">
                                <div className="flex"><a href="/"><svg width={109} height={23} viewBox="0 0 109 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <title>Cal.com logo</title>
                                    <path d="M11.7 22.39C15.36 22.39 18.06 20.98 19.65 19.06L16.59 16.45C15.36 17.8 13.83 18.49 11.79 18.49C7.65 18.49 5.1 15.37 5.1 11.53C5.1 7.69 7.65 4.51 11.7 4.51C13.59 4.51 15.15 5.17 16.41 6.49L19.38 3.91C17.49 1.66 15.12 0.609998 11.7 0.609998C5.22 0.609998 0.75 5.5 0.75 11.53C0.75 17.53 5.46 22.39 11.7 22.39ZM27.2944 22.39C30.0844 22.39 31.4944 21.22 32.3344 19.45V22H36.2644V6.4H32.2444V8.86C31.4044 7.18 29.9944 6.07 27.2944 6.07C23.0044 6.07 19.5844 9.76 19.5844 14.26C19.5844 18.76 23.0044 22.39 27.2944 22.39ZM23.6344 14.23C23.6344 11.8 25.3744 9.73 27.9544 9.73C30.6244 9.73 32.3344 11.83 32.3344 14.26C32.3344 16.69 30.6244 18.73 27.9544 18.73C25.3744 18.73 23.6344 16.6 23.6344 14.23ZM38.6707 22H42.7207V0.0999994H38.6707V22ZM47.276 22.39C48.836 22.39 49.946 21.19 49.946 19.75C49.946 18.34 48.836 17.14 47.276 17.14C45.716 17.14 44.576 18.34 44.576 19.75C44.576 21.19 45.716 22.39 47.276 22.39ZM58.6498 22.39C61.7098 22.39 63.8698 21.28 65.3398 19.39L62.3998 16.84C61.5898 17.92 60.5698 18.7 59.0098 18.7C56.4298 18.7 54.6598 16.63 54.6598 14.2C54.6598 11.77 56.3398 9.7 58.9198 9.7C60.2998 9.7 61.4998 10.39 62.2198 11.47L65.3398 8.92C64.0198 7.09 61.7098 5.98 58.8598 6.01C54.0898 6.04 50.6098 9.67 50.6098 14.2C50.6098 18.73 54.1798 22.39 58.6498 22.39ZM73.6561 22.39C78.4861 22.39 81.9661 18.73 81.9661 14.23C81.9661 9.73 78.4861 6.04 73.6561 6.04C68.8261 6.04 65.3461 9.73 65.3461 14.23C65.3461 18.73 68.8261 22.39 73.6561 22.39ZM69.3961 14.23C69.3961 11.8 71.0761 9.73 73.6561 9.73C76.2361 9.73 77.9161 11.8 77.9161 14.23C77.9161 16.66 76.2361 18.7 73.6561 18.7C71.0761 18.7 69.3961 16.66 69.3961 14.23ZM83.7586 22H87.8086V13.45C87.8086 10.75 89.3386 9.58 91.0486 9.58C93.0586 9.58 94.4086 10.75 94.4086 13.45V22H98.4586V13.45C98.4586 10.45 99.7486 9.58 101.639 9.58C103.469 9.58 104.759 10.75 104.759 13.45V22H108.809V12.46C108.809 8.53 106.229 6.04 102.869 6.04C100.139 6.04 98.6386 7.09 97.5886 8.98C96.5686 7.09 94.7086 6.04 92.5186 6.04C90.1186 6.04 88.5586 6.94 87.7486 8.68V6.4H83.7586V22Z" fill="#000000" />
                                </svg></a><span className="font-cal -mt-1.5">®</span></div>
                            </div>
                            <p className="max-w-[250px] lg:block">Cal.com® and Cal® are a registered trademark by
                                Cal.com,
                                Inc. All rights reserved.</p>
                            <div className="mt-6 flex h-12 w-[300px] place-items-center gap-3"><a className="block" href="/security"><img alt="EU-US Privacy Shield" loading="lazy" width={500} height={500} decoding="async" data-nimg={1} className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0" style={{ color: 'transparent' }} src="/home/footer/eu-us.svg" /></a><a className="block" href="/security"><img alt="ISO 27001" loading="lazy" width={500} height={500} decoding="async" data-nimg={1} className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0" style={{ color: 'transparent' }} src="/home/footer/iso-dark.svg" /></a><a className="block" href="/security"><img alt="SOC2" loading="lazy" width={500} height={500} decoding="async" data-nimg={1} className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0" style={{ color: 'transparent' }} src="/home/footer/soc2-dark.svg" /></a><a className="block" href="/security"><img alt="CCPA" loading="lazy" width={500} height={500} decoding="async" data-nimg={1} className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0" style={{ color: 'transparent' }} src="/home/footer/ccpa-dark.svg" /></a><a className="block" href="/security"><img alt="GDPR" loading="lazy" width={500} height={500} decoding="async" data-nimg={1} className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0" style={{ color: 'transparent' }} src="/home/footer/gdpr-dark.svg" /></a><a className="block" href="/security"><img alt="HIPAA" loading="lazy" width={500} height={500} decoding="async" data-nimg={1} className="min-w-11 h-12 w-full opacity-80 grayscale hover:opacity-100 hover:grayscale-0" style={{ color: 'transparent' }} src="/home/footer/hipaa-dark.svg" /></a></div>
                            <div className="mt-6 flex gap-4"><a className="[&>svg]:transition-fill hover:invert [&>svg]:duration-150" aria-label="Twitter" target="_blank" rel="noopener" href="https://go.cal.com/x"><svg className="fill-primary-300 mt-1" width={22} height={22} viewBox="0 0 26 26" aria-label="X formerly known as Twitter" fill="currentColor">
                                <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z">
                                </path>
                            </svg></a><a className="[&>svg]:transition-fill hover:invert [&>svg]:duration-150" aria-label="GitHub" target="_blank" rel="noopener" href="https://github.com/calcom"><svg className="fill-primary-300" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.197 8.839 21.521C9.339 21.613 9.521 21.304 9.521 21.038C9.521 20.801 9.513 20.17 9.508 19.335C6.726 19.94 6.139 17.992 6.139 17.992C5.685 16.834 5.029 16.526 5.029 16.526C4.121 15.906 5.098 15.918 5.098 15.918C6.101 15.988 6.629 16.95 6.629 16.95C7.521 18.48 8.97 18.038 9.539 17.782C9.631 17.135 9.889 16.694 10.175 16.444C7.955 16.191 5.62 15.331 5.62 11.493C5.62 10.4 6.01 9.505 6.649 8.805C6.546 8.552 6.203 7.533 6.747 6.155C6.747 6.155 7.587 5.885 9.497 7.181C10.3128 6.95851 11.1544 6.84519 12 6.844C12.85 6.848 13.705 6.959 14.504 7.181C16.413 5.885 17.251 6.154 17.251 6.154C17.797 7.533 17.453 8.552 17.351 8.805C17.991 9.505 18.379 10.4 18.379 11.493C18.379 15.341 16.04 16.188 13.813 16.436C14.172 16.745 14.491 17.356 14.491 18.291C14.491 19.629 14.479 20.71 14.479 21.038C14.479 21.306 14.659 21.618 15.167 21.52C17.1583 20.8521 18.8893 19.5753 20.1155 17.87C21.3416 16.1648 22.0009 14.1173 22 12.017C22 6.484 17.522 2 12 2Z">
                                </path>
                            </svg></a><a className="[&>svg]:transition-fill hover:invert [&>svg]:duration-150" aria-label="Youtube" target="_blank" rel="noopener" href="https://go.cal.com/youtube"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.49952 17C1.80094 13.7033 1.80094 10.2967 2.49952 7C2.59131 6.66521 2.76866 6.36007 3.01413 6.11461C3.25959 5.86914 3.56473 5.69179 3.89952 5.6C9.26297 4.71146 14.7361 4.71146 20.0995 5.6C20.4343 5.69179 20.7394 5.86914 20.9849 6.11461C21.2304 6.36007 21.4077 6.66521 21.4995 7C22.1981 10.2967 22.1981 13.7033 21.4995 17C21.4077 17.3348 21.2304 17.6399 20.9849 17.8854C20.7394 18.1309 20.4343 18.3082 20.0995 18.4C14.7361 19.2887 9.26295 19.2887 3.89952 18.4C3.56473 18.3082 3.25959 18.1309 3.01413 17.8854C2.76866 17.6399 2.59131 17.3348 2.49952 17Z" stroke="#A3A3A3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10 15L15 12L10 9V15Z" stroke="#A3A3A3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg></a><a className="[&>svg]:transition-fill hover:invert [&>svg]:duration-150" aria-label="Instagram" target="_blank" rel="noopener" href="https://go.cal.com/instagram"><svg className="fill-primary-300 mt-[1px]" width={21} height={21} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                                <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)" />
                            </svg></a><a className="[&>svg]:transition-fill hover:invert [&>svg]:duration-150" aria-label="Community" target="_blank" rel="noopener" href="https://go.cal.com/discord"><svg aria-hidden="true" height={22} viewBox="0 0 16 16" version="1.1" width={22} data-view-component="true" className="fill-primary-300 mt-0.5">
                                <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z">
                                </path>
                            </svg></a><a className="[&>svg]:transition-fill hover:invert [&>svg]:duration-150" aria-label="Product Hunt" target="_blank" rel="noopener" href="https://go.cal.com/producthunt"><svg className="fill-primary-300" width={24} height={24} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M160 320C248.365 320 320 248.365 320 160C320 71.6347 248.365 -9.53674e-06 160 -9.53674e-06C71.6347 -9.53674e-06 0 71.6347 0 160C0 248.365 71.6347 320 160 320ZM136 160.001L181.333 160C194.588 160 205.333 149.255 205.333 136C205.333 122.745 194.588 112.001 181.333 112.001H136V160.001ZM104 80H181.333C212.261 80 237.333 105.072 237.333 136C237.333 166.928 212.261 192.001 181.333 192.001H136V240H104V80Z" fill="#A3A3A3" />
                            </svg></a><a className="[&>svg]:transition-fill hover:invert [&>svg]:duration-150" aria-label="Hacker News" target="_blank" rel="noopener" href="https://go.cal.com/hackernews"><svg className="fill-primary-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={24} height={24}>
                                <path d="M4,4v42h42V4H4z M44,44H6V6h38V44z M42,8H8v34h34V8z M27,28v8h-4v-8l-7-13h3.18L25,25.19L30.82,15H34L27,28z">
                                </path>
                            </svg></a></div>
                            <p className="mt-2 max-w-[350px] pr-4 text-base transition-opacity ease-in-out">Our mission
                                is
                                to connect a billion people by 2031 through calendar scheduling.</p>
                            <div className="mt-4 self-start"><button type="button" className="inline-flex items-center px-3 py-2 text-sm leading-4 font-medium relative dark:text-black dark:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900 duration-150 ease-in-out radix-state-open:opacity-70 min-w-32 mr-4 rounded-md transition-colors hover:opacity-70 hover:shadow-none radix-state-open:text-black border border-neutral-300 bg-neutral-200 text-black hover:bg-neutral-200 hover:text-black" id="radix-:R1jfjl6:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><span className="truncate py-[2px] font-normal">English</span></button></div>
                        </div>
                        <div className="w-full md:flex md:w-auto md:justify-end">
                            <nav className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
                                <ul>
                                    <li className="text-[17px] font-semibold">Solutions</li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="https://github.com/calcom/cal.com">Self-hosted</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/pricing">SaaS
                                        Hosting</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="https://cal.com/docs/">Docs</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/ai">Cal.ai
                                        – AI
                                        Phone Agent</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/enterprise">Enterprise</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/platform">Platform</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/platform">Cal.com Atoms</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/unified">Unified Calendar API</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/download">Desktop App</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/faq">FAQ</a>
                                    </li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="https://cal.com/docs/enterprise-features/api">Enterprise API</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="https://github.com/calcom/cal.com">Github</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="https://cal.com/docs/introduction/quick-start/self-hosting/docker">Docker</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="text-[17px] font-semibold">Use Cases</li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/sales-teams">Sales</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/marketing">Marketing</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/talent-acquisition-teams">Talent Acquisition</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/customer-support">Customer Support</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/higher-education">Higher Education</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/usecases/telehealth">Telehealth</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/professional-services">Professional Services</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/usecases/hiring-marketplace">Hiring Marketplace</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/people-operations">Human Resources</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/usecases/education">Tutoring</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/c-suite">C-suite</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/scheduling/law">Law</a></li>
                                </ul>
                                <ul>
                                    <li className="text-[17px] font-semibold">Resources</li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/blog">Blog</a>
                                    </li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/merch">Merch
                                        Store</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/open">Open
                                        Startup</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/teams">Teams</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/embed">Embed</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/recurring-events">Recurring events</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/developers">Developers</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/routing-forms">Routing Forms</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/workflows">Workflows</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/app-store">App Store</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/opt-in">Requires confirmation</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/payments">Payments</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/resources/feature/cal-video">Video Conferencing</a></li>
                                </ul>
                                <ul>
                                    <li className="text-[17px] font-semibold">Company</li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/jobs">Jobs</a>
                                    </li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/about">About</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="https://app.cal.com/support">Support</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/privacy">Privacy</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/terms">Terms</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="https://github.com/calcom/cal.com/blob/main/LICENSE">License</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/security">Security</a></li>
                                    <li className="pt-4 text-[17px]"><a className="flex items-start text-[16px] hover:opacity-50" href="/subscribe">Changelog</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
