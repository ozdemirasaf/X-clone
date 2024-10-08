import { topics } from "../../../../utils/consts";
import Topic from "./topic";
import SidebarSection from "../../../../components/sidebar-section";

export default function Topics() {
    return (
        <SidebarSection
            title="İlgini çekebilicek gündemler"
            more="/trends"
        >
            {topics.map((topic, index) => <Topic items={topic} key={index} />)}
        </SidebarSection>

    )
}