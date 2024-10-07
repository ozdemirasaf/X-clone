import { Popover, Transition } from "@headlessui/react"
import { useAccount } from "../../../../store/auth/hooks"
import More from "./more";

export default function Account() {

    const account = useAccount()
    console.log(account);
    return (
        <div className="mt-auto">
            <Popover className='relative'>
                <Popover.Button
                    className="my-3 p-3 rounded-full transition-colors hover:bg-[#eff3f41a] w-full flex items-center outline-none"
                >
                    <img src={account.avatar} alt="User Avatar" className="h-10 w-10 rounded-full" />
                    <div className="mx-3 text-[15px] text-left">
                        <h6 className="text-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#71767b] ">
                            @{account.username}
                        </div>

                    </div>
                    <svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75}>
                        <path
                            fill="currentColor"
                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                        </path>
                    </svg>
                </Popover.Button>
                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transfom scale-100 opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveTo="transfrom scale-95 opaciyt-0"
                >
                    <Popover.Panel className='absolute bottom-full w-[300px] py-3 overflow-hidden left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl'>
                        <More />
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}