import { ViewNotes, AddNotes } from "../components"

export const LayoutNote = () => {


  return (

    <>
      < div className="section-container">
          <div className="row">
            <div className="col-sm-4">
              <div className="card-add">
                <div className="card-body">
                  <AddNotes />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card-view">
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
