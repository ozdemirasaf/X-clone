import Button from '../../../../components/buttons'
export default function Premium() {
    return (
        <section
            className="bg-[#16181c] mb-4 rounded-2x1 border border-[#16181c] py-3 px-4 flex flex-col gap-2.5"
        >
            <h6 className="text-xl leading-6 font-extrabold">Premium'a Abone Ol</h6>
            <p className="leading-5 text-[15px] font-bold">
                Yeni özellikleri açma için abone ol ve uygun olman durumunda reklam geliri payı kazan.
            </p>
            <div className="self-start">
                <Button>Abone ol</Button>
            </div>
        </section>
    )
}