import { Popover, Disclosure } from "@headlessui/react"
import classNames from "classnames"
import { Link } from "react-router-dom"

export default function More() {
    return (
        <Popover className="relative">
            <Popover.Button className="py-1 block group outline-none">
                <div className="p-3 rounded-full transition-colors inline-flex  items-center gap-5  group-hover:bg-[#eff3f41a]">

                    <div className="w-[26.25px] h-[26.25] relative">
                        <svg
                            viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path
                                fill="#e7e9ea"
                                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z">
                            </path>
                        </svg>
                    </div>

                    <div className="pr-4 text-xl">
                        Daha Fazla
                    </div>
                </div>
            </Popover.Button>

            <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden">

                <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                    <div className="w-[26.25px] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path
                                fill="#e7e9ea"
                                d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z">
                            </path>
                        </svg>
                    </div>

                    <div className="pr-4 text-xl font-bold">
                        Bağlan
                    </div>
                </button>

                <button className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a]">
                    <div className="w-[26.25px] h-[26.25] relative">
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25}>
                            <path
                                fill="#e7e9ea"
                                d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z">
                            </path>
                        </svg>
                    </div>

                    <div className="pr-4 text-xl font-bold">
                        Paran kazanma
                    </div>
                </button>

                <div className="h-px bg-[#2f3336] my-0.5 w-[89%] mx-auto" />

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className='h-[52px] flex items-center justify-between w-full px-4 font-bold transition-colors hover:bg-[#eff3f41a]'>
                                İçerik Üreticisi Stüdyosu
                                <svg className={classNames({
                                    "rotate-180 text-[#1d9bf0]": open
                                })} width={18.75} height={18.75} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="text-gray-500">
                                <Link className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium transition-colors hover:bg-[#eff3f41a] text-white">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                        <path
                                            fill="currentColor"
                                            d="M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z">
                                        </path>
                                    </svg>
                                    İstatislikler
                                </Link>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className='h-[52px] flex items-center justify-between w-full px-4 font-bold transition-colors hover:bg-[#eff3f41a]'>
                                Profesyonel Araçlar
                                <svg className={classNames({
                                    "rotate-180 text-[#1d9bf0]": open
                                })} width={18.75} height={18.75} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="text-gray-500">
                                <Link className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium transition-colors hover:bg-[#eff3f41a] text-white">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                        <path
                                            fill="currentColor"
                                            d="M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z">
                                        </path>
                                    </svg>
                                    Reklamlar
                                </Link>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>


                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className='h-[52px] flex items-center justify-between w-full px-4 font-bold transition-colors hover:bg-[#eff3f41a]'>
                                Ayarlar ve Destek
                                <svg className={classNames({
                                    "rotate-180 text-[#1d9bf0]": open
                                })} width={18.75} height={18.75} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="text-gray-500">
                                <Link className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium transition-colors hover:bg-[#eff3f41a] text-white">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                        <path
                                            fill="currentColor"
                                            d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z">
                                        </path>
                                    </svg>
                                    Ayarlar ve Gizlilik
                                </Link>

                                <Link className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium transition-colors hover:bg-[#eff3f41a] text-white">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                        <path
                                            fill="currentColor"
                                            d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z">
                                        </path>
                                    </svg>
                                    Yardım Merkezi
                                </Link>

                                <Link className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium transition-colors hover:bg-[#eff3f41a] text-white">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                        <path
                                            fill="currentColor"
                                            d="M22.21 2.793c-1.22-1.217-3.18-1.26-4.45-.097l-10.17 9.32C5.02 12.223 3 14.376 3 17v5h5c2.62 0 4.78-2.022 4.98-4.593L22.3 7.239c1.17-1.269 1.12-3.229-.09-4.446zM8 20H5v-3c0-1.657 1.34-3 3-3s3 1.343 3 3-1.34 3-3 3zM20.83 5.888l-8.28 9.033c-.5-1.09-1.38-1.971-2.47-2.47l9.03-8.28c.48-.44 1.22-.424 1.68.036s.48 1.201.04 1.681z">
                                        </path>
                                    </svg>
                                    Görünüm
                                </Link>


                                <Link className="flex items-center px-3 h-11 gap-3 text-[15px] font-medium transition-colors hover:bg-[#eff3f41a] text-white">
                                    <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                                        <path
                                            fill="currentColor"
                                            d="M11.999 22.25c-5.652 0-10.25-4.598-10.25-10.25S6.347 1.75 11.999 1.75 22.249 6.348 22.249 12s-4.598 10.25-10.25 10.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25-3.701-8.25-8.25-8.25zm.445 6.992c1.747-.096 3.748-.689 3.768-.695l.575 1.916c-.077.022-1.616.48-3.288.689v.498c.287 1.227 1.687 2.866 2.214 3.405l-1.428 1.4c-.188-.191-1.518-1.576-2.286-3.144-.769 1.568-2.098 2.952-2.286 3.144l-1.428-1.4c.527-.54 1.927-2.178 2.214-3.405v-.498c-1.672-.209-3.211-.667-3.288-.689l.575-1.916c.02.006 2.021.6 3.768.695m0 0c.301.017.59.017.891 0M12 6.25c-.967 0-1.75.78-1.75 1.75s.783 1.75 1.75 1.75 1.75-.78 1.75-1.75-.784-1.75-1.75-1.75z">
                                        </path>
                                    </svg>
                                    Klavye Kısayolları
                                </Link>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

            </Popover.Panel>

        </Popover >
    )
}