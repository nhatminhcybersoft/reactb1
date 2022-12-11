import React, { Component } from "react";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container px-lg-5">
            <a className="navbar-brand" href="#!">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#!">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="py-5">
          <div className="container px-lg-5">
            <div className="header_wrap bg-light rounded-3 text-center">
              <div className="m-4 m-lg-5">
                <h1 className="header_title">A warm welcome!</h1>
                <p className="header_intro">
                  Bootstrap utility classes are used to create this jumbotron
                  since the old component has been removed from the framework.
                  Why create custom CSS when you can use utilities?
                </p>
                <a className="btn btn-primary btn-lg" href="#!">
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="pt-4">
          <div className="myFeatures container px-lg-5">
            {/* Page Features*/}
            <div className="row gx-lg-5">
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0">
                  <div className="card-body text-center p-4 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i className="bi bi-collection" />
                    </div>
                    <h2>Fresh new layout</h2>
                    <p className="mb-0 pl-4 pr-4">
                      With Bootstrap 5, we've created a fresh new layout for
                      this template!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0">
                  <div className="card-body text-center p-4 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i className="bi bi-cloud-download" />
                    </div>
                    <h2>Free to download</h2>
                    <p className="mb-0 pl-4 pr-4">
                      As always, Start Bootstrap has a powerful collectin of
                      free templates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0">
                  <div className="card-body text-center p-4 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i className="bi bi-card-heading" />
                    </div>
                    <h2>Jumbotron hero header</h2>
                    <p className="mb-0 pl-4 pr-4">
                      The heroic part of this template is the jumbotron hero
                      header!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0">
                  <div className="card-body text-center p-4 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i className="bi bi-bootstrap" />
                    </div>
                    <h2>Feature boxes</h2>
                    <p className="mb-0 pl-4 pr-4">
                      We've created some custom feature boxes using Bootstrap
                      icons!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0">
                  <div className="card-body text-center p-4 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i className="bi bi-code" />
                    </div>
                    <h2>Simple clean code</h2>
                    <p className="mb-0 pl-4 pr-4">
                      We keep our dependencies up to date and squash bugs as
                      they come!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0">
                  <div className="card-body text-center p-4 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i className="bi bi-patch-check" />
                    </div>
                    <h2>A name you trust</h2>
                    <p className="mb-0 pl-4 pr-4">
                      Start Bootstrap has been the leader in free Bootstrap
                      templates since 2013!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-5">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright © Your Website 2022
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
