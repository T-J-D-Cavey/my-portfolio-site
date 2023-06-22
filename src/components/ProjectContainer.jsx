import { ClickABug } from "./projects/ClickABug"
import { Treadit } from "./projects/Treadit"
import { PollutionChecker } from "./projects/PollutionChecker"
import { RamenPopup } from "./projects/RamenPopup"

export function ProjectContainer({mode, modeStyles}) {

    let backgroundColor = modeStyles[mode].background;
    let color = modeStyles[mode].color;
    // We may need to add some logic (Link or browserRouter) so that when hero banner 'see my work' is clicked, it moves to this component:

    return (
        <div>
            <div style={{backgroundColor: backgroundColor, color: color}} className='projectHeaderContainer'>
                <h2>Projects:</h2>
            </div>
            <ClickABug mode={mode} modeStyles={modeStyles} />
            <Treadit mode={mode} modeStyles={modeStyles} />
            <PollutionChecker mode={mode} modeStyles={modeStyles} />
            <RamenPopup mode={mode} modeStyles={modeStyles} />
        </div>
    )
}