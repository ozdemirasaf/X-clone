import classNames from "classnames";
import { useAccount, useAccounts } from "../../../../../store/auth/hooks"
import { setCurrentAccount } from "../../../../../store/auth/actions";

export default function More() {

    const currentAccount = useAccount();
    const accounts = useAccounts();


    return (
        <div>
            {accounts.map(account => (
                <button disabled={currentAccount.id === account.id} onClick={() => {
                    setCurrentAccount(account)
                }} className={classNames("py-3 px-4 flex text-left w-full items-center transition-colors", {
                    "hover:bg-[#eff3f41a]": currentAccount.id !== account.id
                })}>
                    <img src={account.avatar} alt="User Avatar" className="h-10 w-10 rounded-full" />
                    <div className="mx-3 flex-1 text-[15px] text-left">
                        <h6 className="text-bold leading-[20px]">{account.fullName}</h6>
                        <div className="text-[#71767b] ">
                            @{account.username}
                        </div>
                    </div>
                    {currentAccount.id === account.id && (
                        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#26ad0b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#1ca03d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#00ba7c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    )}
                </button>
            ))}
            <div className="h-px bg-[#2f3336] my-3" />
            <button className="py-3 px-4 w-full font-[15px] font-bold text-left text-[#e7e9ea] transition-colors leading-[20px] hover:bg-[#eff3f41a]">
                Var olan bir hesap ekle
            </button>
            <button className="py-3 px-4 w-full font-[15px] font-bold text-left text-[#e7e9ea] transition-colors leading-[20px] hover:bg-[#eff3f41a]">
                Hesap yönet
            </button>
            <button className="py-3 px-4 w-full font-[15px] font-bold text-left text-[#e7e9ea] transition-colors leading-[20px] hover:bg-[#eff3f41a]">
                <div className="max-w-[228px]">
                    @Ömer asaf Özdemir Hesabında çıkış yap
                </div>
            </button>
        </div>
    )
}