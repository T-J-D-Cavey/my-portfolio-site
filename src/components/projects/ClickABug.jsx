import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.js'

export function ClickABug() {
    return (
        <div>
            <section>
                <h3>Click-A-Bug</h3>
                <ul>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                    <li>Some tech used</li>
                </ul>
                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See details
                </button>
                <button type="button" class="btn btn-dark"><a href='https://github.com/T-J-D-Cavey' target='_blank'>Visit site</a></button>
            </section>
            
            {/* Modal: */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">Click-a-bug</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
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
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}