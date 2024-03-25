import { ViewNotes, AddNotes } from "../components"

export const LayoutNote = () => {


  return (

    <>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 card bg-secondary">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <AddNotes />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <ViewNotes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
