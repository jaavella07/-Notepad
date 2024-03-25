import { ViewNotes, AddNotes } from "../components"

export const LayoutNote = () => {


  return (

    <>
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="card">
                <div className="card-body">
                  <AddNotes />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
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
