import { ClickABug } from "./projects/ClickABug"
import { Treadit } from "./projects/Treadit"
import { PollutionChecker } from "./projects/PollutionChecker"
import { RamenPopup } from "./projects/RamenPopup"

export function ProjectContainer() {
    return (
        <div>
            <ClickABug />
            <Treadit />
            <PollutionChecker />
            <RamenPopup />
        </div>
    )
}