import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'

export function ClickABug() {
    return (
        <div>
            <section>
                <h3>Click-A-Bug</h3>
                <p>An online game to test your reactions: 
                can you save the professor from the bugs in his servers?
                </p>
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See details
                </button>
                <button type="button" className="btn btn-info"><a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a></button>
            </section>
            
            {/* Modal: */}
            <div 
            className="modal fade" 
            id="exampleModal" 
            tabindex="-1" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Click-a-bug</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>An online game to test your reactions: 
                        can you save the professor from the bugs in his servers?</p>
                        <h4>DEVELOPMENT TOOLS</h4>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Some tech used</li>
                            <li>Some tech used</li>
                            <li>Some tech used</li>
                            <li>Netlify</li>
                        </ul>
                        <h3>Image to go here</h3>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-info"><a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a></button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}