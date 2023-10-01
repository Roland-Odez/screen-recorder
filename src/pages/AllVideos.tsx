import React from 'react'

const AllVideos = () => {
    return (
        <div className='flex flex-col'>
            <div className='px-[100px] py-[43px] mx-auto'>
                <div className="w-[1240px] h-[69px] justify-between items-center inline-flex">
                    <div className="flex-col justify-start items-start gap-2 inline-flex">
                        <div className="text-neutral-900 text-[32px] font-bold font-['Sora']">Hello, John Mark</div>
                        <div className="text-neutral-900 text-opacity-70 text-lg font-normal font-['Work Sans']">Here are your recorded videos</div>
                    </div>
                    <div className="w-[400px] pl-6 pr-10 py-6 bg-gray-400 bg-opacity-10 rounded-xl border border-gray-200 flex-col justify-center items-start gap-2 inline-flex">
                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                            <div className="w-5 h-5 justify-center items-center flex">
                                <div className="w-5 h-5 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M9.58268 18.0001C13.9549 18.0001 17.4993 14.4557 17.4993 10.0834C17.4993 5.71116 13.9549 2.16675 9.58268 2.16675C5.21043 2.16675 1.66602 5.71116 1.66602 10.0834C1.66602 14.4557 5.21043 18.0001 9.58268 18.0001Z" stroke="#C3C3C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18.3327 18.8334L16.666 17.1667" stroke="#C3C3C3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <input className="placeholder:text-stone-300 bg-transparent outline-none text-stone-300 placeholder:text-sm font-normal placeholder:font-['Work Sans']" placeholder='Search for a particular video' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 flex justify-center items-center'>
                <div className='flex flex-col gap-y-10 pb-20'>
                    <div className="w-[1178px] h-[367px] flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-neutral-900 text-opacity-80 text-lg font-medium font-['Work Sans']">Recent files</div>
                        <div className="justify-center items-center gap-16 inline-flex">
                            <div className="w-[557px] px-4 pt-4 pb-6 bg-neutral-50 bg-opacity-50 rounded-3xl border border-gray-400 border-opacity-60 flex-col justify-center items-center gap-6 inline-flex">
                                <div className="w-[525px] h-52 pl-[446px] pr-2 pt-[168px] pb-2 rounded-xl border border-gray-200 justify-end items-center inline-flex">
                                    <div className="self-stretch px-4 py-2 bg-gray-200 rounded justify-center items-center gap-2 inline-flex">
                                        <div className="text-slate-950 text-sm font-medium font-['Work Sans']">00:34</div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-start inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                                        <div className="text-neutral-900 text-xl font-medium font-['Work Sans'] capitalize">How to create Facebook Ad listing</div>
                                        <div className="text-gray-400 text-base font-normal font-['Work Sans'] uppercase">SEPTEMBER 23, 2023</div>
                                    </div>
                                    <div className="justify-start items-start gap-6 flex">
                                        <div className="w-6 h-6 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 12H16" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 -rotate-90 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" stroke="#141414" stroke-width="1.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[557px] px-4 pt-4 pb-6 bg-neutral-50 bg-opacity-50 rounded-3xl border border-gray-400 border-opacity-60 flex-col justify-center items-center gap-6 inline-flex">
                                <div className="w-[525px] h-52 pl-[446px] pr-2 pt-[168px] pb-2 rounded-xl border border-gray-200 justify-end items-center inline-flex">
                                    <div className="self-stretch px-4 py-2 bg-gray-200 rounded justify-center items-center gap-2 inline-flex">
                                        <div className="text-slate-950 text-sm font-medium font-['Work Sans']">00:34</div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-start inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                                        <div className="text-neutral-900 text-xl font-medium font-['Work Sans'] capitalize">How to create Facebook Ad listing</div>
                                        <div className="text-gray-400 text-base font-normal font-['Work Sans'] uppercase">SEPTEMBER 23, 2023</div>
                                    </div>
                                    <div className="justify-start items-start gap-6 flex">
                                        <div className="w-6 h-6 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 12H16" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 -rotate-90 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" stroke="#141414" stroke-width="1.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1178px] h-[367px] flex-col justify-start items-start gap-6 inline-flex">
                        <div className="text-neutral-900 text-opacity-80 text-lg font-medium font-['Work Sans']">Files from last week</div>
                        <div className="justify-center items-center gap-16 inline-flex">
                            <div className="w-[557px] px-4 pt-4 pb-6 bg-neutral-50 bg-opacity-50 rounded-3xl border border-gray-400 border-opacity-60 flex-col justify-center items-center gap-6 inline-flex">
                                <div className="w-[525px] h-52 pl-[446px] pr-2 pt-[168px] pb-2 rounded-xl border border-gray-200 justify-end items-center inline-flex">
                                    <div className="self-stretch px-4 py-2 bg-gray-200 rounded justify-center items-center gap-2 inline-flex">
                                        <div className="text-slate-950 text-sm font-medium font-['Work Sans']">00:34</div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-start inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                                        <div className="text-neutral-900 text-xl font-medium font-['Work Sans'] capitalize">How to create Facebook Ad listing</div>
                                        <div className="text-gray-400 text-base font-normal font-['Work Sans'] uppercase">SEPTEMBER 23, 2023</div>
                                    </div>
                                    <div className="justify-start items-start gap-6 flex">
                                        <div className="w-6 h-6 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 12H16" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 -rotate-90 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" stroke="#141414" stroke-width="1.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[557px] px-4 pt-4 pb-6 bg-neutral-50 bg-opacity-50 rounded-3xl border border-gray-400 border-opacity-60 flex-col justify-center items-center gap-6 inline-flex">
                                <div className="w-[525px] h-52 pl-[446px] pr-2 pt-[168px] pb-2 rounded-xl border border-gray-200 justify-end items-center inline-flex">
                                    <div className="self-stretch px-4 py-2 bg-gray-200 rounded justify-center items-center gap-2 inline-flex">
                                        <div className="text-slate-950 text-sm font-medium font-['Work Sans']">00:34</div>
                                    </div>
                                </div>
                                <div className="self-stretch justify-between items-start inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                                        <div className="text-neutral-900 text-xl font-medium font-['Work Sans'] capitalize">How to create Facebook Ad listing</div>
                                        <div className="text-gray-400 text-base font-normal font-['Work Sans'] uppercase">SEPTEMBER 23, 2023</div>
                                    </div>
                                    <div className="justify-start items-start gap-6 flex">
                                        <div className="w-6 h-6 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 12H16" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="w-6 h-6 -rotate-90 justify-center items-center flex">
                                            <div className="w-6 h-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z" stroke="#141414" stroke-width="1.5" />
                                                    <path d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z" stroke="#141414" stroke-width="1.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllVideos