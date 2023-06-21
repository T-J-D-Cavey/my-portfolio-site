import Button from 'react-bootstrap/Button';

export function DarkLightButton({mode, changeMode}) {
    const clickHanlder = (e) => {
        e.preventDefault();
        changeMode();
    }
    console.log(mode);
    return (
        // I may need to change this structure, depends on how the div interacts with other elements
        // I want the button to stick to the top only after it reaches the top by scroll. 
        <div>
            {/* I should be able to avoid a Bootstrap component here as just need a Sun / Moon icon, 
            which is affected by the mode state and changes the file dynamically */}
              <Button onClick={clickHanlder}variant="info">
                Light / Dark mode
              </Button>
        </div>
    )
}