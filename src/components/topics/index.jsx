import { topics } from "../../utils/consts";
import Topic from "./topic";

export default function Topics() {
    return (
        <section className="bg-[#16181c] mb-4 rounded-2x1 border border-[#16181c]">
            <h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex itemc-center text-[#e7e9ea]">İlgini çekebilicek gündemler</h5>

            <div className="grid">
                {topics.map((topic, index) => <Topic items={topic} key={index} />)}
            </div>

        </section>
    )
}