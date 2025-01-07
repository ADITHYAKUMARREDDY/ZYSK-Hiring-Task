import lo1 from '../assets/image.svg'
const Footer = () => {
  return (
    <footer className=" py-5 " style={{ backgroundColor: "#ffffff" }}>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Product Column */}
          <div className="col-6 col-md-2 mb-4 mx-auto">
            <h6 className="fw-bold">Product</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Overview</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Features</a></li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Solutions
                  <span
                    className="badge \ text-success border border-success ms-1"
                    style={{
                      padding: "0.2em 0.4em",
                      fontSize: "0.75em",
                      fontWeight: "bold",
                      borderRadius: "20px",
                      backgroundColor: "#ffffff" 
                    }}
                  >
                    New
                  </span>
                </a>
              </li>
              <li><a href="#" className="text-muted text-decoration-none">Tutorials</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Releases</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-6 col-md-2 mb-4 mx-auto">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Press</a></li>
              <li><a href="#" className="text-muted text-decoration-none">News</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Media kit</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-6 col-md-2 mb-4 mx-auto">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Newsletter</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Events</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Help centre</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Tutorials</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support</a></li>
            </ul>
          </div>

          {/* Use Cases Column */}
          <div className="col-6 col-md-2 mb-4 mx-auto">
            <h6 className="fw-bold">Use cases</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Startups</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Enterprise</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Government</a></li>
              <li><a href="#" className="text-muted text-decoration-none">SaaS centre</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Marketplaces</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Ecommerce</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="col-6 col-md-2 mb-4 mx-auto">
            <h6 className="fw-bold">Social</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Twitter</a></li>
              <li><a href="#" className="text-muted text-decoration-none">LinkedIn</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Facebook</a></li>
              <li><a href="#" className="text-muted text-decoration-none">GitHub</a></li>
              <li><a href="#" className="text-muted text-decoration-none">AngelList</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Dribbble</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-6 col-md-2 mb-4 mx-auto">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Terms</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Privacy</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Cookies</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Licenses</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Settings</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row align-items-center mt-4">
          <div className="col-12 col-md-auto text-start mb-3 mb-md-0">
            <img src={lo1} alt="Zysk Logo" />
          </div>
          <div className="col-12 col-md text-md-end text-start">
            <p className="text-muted mb-0">© 2077 zysktechnologies. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

