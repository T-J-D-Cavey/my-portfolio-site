import { ClickABug } from "./projects/ClickABug"
import { Treadit } from "./projects/Treadit"
import { PollutionChecker } from "./projects/PollutionChecker"
import { RamenPopup } from "./projects/RamenPopup"

export function ProjectContainer({mode, modeStyles}) {
    return (
        <div>
            <div>
                <h2>Projects:</h2>
            </div>
            <ClickABug mode={mode} modeStyles={modeStyles} />
            <Treadit mode={mode} modeStyles={modeStyles} />
            <PollutionChecker mode={mode} modeStyles={modeStyles} />
            <RamenPopup mode={mode} modeStyles={modeStyles} />
        </div>
    )
}