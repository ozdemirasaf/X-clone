import { Link } from "react-router-dom";
import { numberFormat } from "../../../utils/formats";

export default function Topic({ items }) {
    return (
        <Link
            to='/'
            className="py-3 px-4 hover:bg-white/[0.03] relative transition-colors"
        >
            <div className="text-[13px] text-[#71767b] leading-4">{items.title}</div>
            <div className="text-[15px] font-bold leading-5 mt-0.5">
                {items.topic.type === "tag" && "#"} {items.topic.value}
            </div>
            {items?.postCount && (
                <div className="text-[13px] text-[#71767b] mt-1 leading-4">
                    {numberFormat(items.postCount)} posts
                </div>
            )}

            <button
                className="w-[34.75px] h-[34.75px] rounded-full absolute top-0 right-0 flex items-center justify-center hover:bg-[#1d9bf01a] hover:text-[#1d9bf01a] transition-colors"
            >
                <svg viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z">
                    </path>
                </svg>
            </button>

        </Link >
    )
}