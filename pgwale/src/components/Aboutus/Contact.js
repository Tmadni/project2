import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="col-md-8 col-12 mx-auto">
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <h1 className="text-center mt-4">Contact Us</h1>
          <div className="container shadow-lg border-0 p-4">
            <div className="row mt-3">
              <div className="col-md-12">
                <form className="needs-validation" novalidate>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label for="validationCustom01">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        placeholder="First name"
                        value=""
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="validationCustom03">Place</label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom03"
                        placeholder="City"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label for="validationCustom02">E-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        id="validationCustom02"
                        placeholder="E-mail"
                        value=""
                        required
                      />
                      <div className="valid-feedback">Looks good!</div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label for="validationCustom04">Mobile</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="validationCustom04"
                        placeholder="Mobile"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="form-control"
                      placeholder="Type msg here"
                    ></textarea>
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-dark" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
