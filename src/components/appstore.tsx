import React from 'react'

const Appstore = () => {
    return (
        <section className="mx-3 md:mx-0 ">
            <div className="mx-auto w-full relative max-w-[1200px] gap-8  overflow-clip rounded-xl px-1 py-6 md:px-1 md:py-20 shadow-fade bg-white mb-1">
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
    )
}

export default Appstore