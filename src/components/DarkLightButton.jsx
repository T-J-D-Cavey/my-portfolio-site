export function DarkLightButton() {
    return (
        // I may need to change this structure, depends on how the div interacts with other elements
        // I want the button to stick to the top only after it reaches the top by scroll. 
        <div>
            {/* I should be able to avoid a Bootstrap component here as just need a Sun / Moon icon, 
            which is affected by the mode state and changes the file dynamically */}
            <button>Light mode</button>
        </div>
    )
}