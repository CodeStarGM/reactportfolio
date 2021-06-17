import React from "react";

function Contact() {
  const showAlert = () => {
    const liner = <br />;
    alert(
      " This form does not send your message to me its just a simple form so if you want to contact me then check the footer links"
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Feel Free To Send Queries</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Smith"
                  required
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="phone"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="0333233233"
                  required
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your Precious Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="col-12">
                <button
                  onClick={showAlert}
                  class="btn btn-block btn-outline-success"
                  type="submit"
                >
                  Submit Query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
