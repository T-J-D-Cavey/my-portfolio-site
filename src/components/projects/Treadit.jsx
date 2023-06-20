import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'

export function Treadit() {
    return (
        <div>
            <section>
                <h3>Treadit</h3>
                <ul>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                </ul>
                <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See details
                </button>
                <button type="button" className="btn btn-light"><a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a></button>
            </section>
            
            {/* Modal: */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Click-a-bug</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h3>A project header</h3>
                      <p>A summary of the project. A summary of the project. 
                        A summary of the project. A summary of the project.</p>
                        <ul>
                            <li>Some tech used</li>
                            <li>Some tech used</li>
                            <li>Some tech used</li>
                            <li>Some tech used</li>
                            <li>Some tech used</li>
                            <li>Some tech used</li>
                        </ul>
                        <h3>Image to go here</h3>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}