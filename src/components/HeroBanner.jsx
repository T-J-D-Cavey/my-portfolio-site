import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'

export function HeroBanner() {
    return (
        <div>
            <div className='hero-container'>
                <h1>Hi, I'm Tim Cavey.
                    <br />
                    A front-end web developer
                </h1>
                {/* I need to get a Bootstrap button component used for this button: */}
                <button type="button" className="btn btn-info"><a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a></button>
            </div>
        </div>
    )
}