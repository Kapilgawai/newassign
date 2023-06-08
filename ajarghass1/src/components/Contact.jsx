import React from 'react'

const Contact = () => {
  return (
    <div>


      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>
              Hav Some Questions?
            </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="name" />


              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                
              </div>


              <div class="mb-10">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-dark py-3 my-4">Send Message</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Contact