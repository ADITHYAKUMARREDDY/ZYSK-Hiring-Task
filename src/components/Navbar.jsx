import logoo from '../assets/image.svg';
import customSvg from '../assets/Avatar.png'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logoo}
            alt="Logo"
            className="d-inline-block align-top"
            height="30"
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Center-aligned nav items */}
          <ul className="navbar-nav mb-2 mb-lg-0" style={{ paddingRight: '59%' }}>
            <li className="nav-item">
              <a className="nav-link px-3" href="#">
                Home
              </a>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Product 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Product 3
                  </a>
                </li>
              </ul>
            </li>

            {/* Resources Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle px-3"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Resource 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Resource 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Resource 3
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#">
                Pricing
              </a>
            </li>
          </ul>

          {/* User Icon or Custom SVG */}
          <div className="ms-auto px-3">
            {/* Custom SVG visible only on large screens */}
            <a href="#" className="nav-link d-none d-lg-block">
              <img src={customSvg} alt="Custom User" height="24" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
