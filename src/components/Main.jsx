import DemoIcon from '../assets/PLAY.svg';
import Image1 from '../assets/imageL.png';
import ImageS from '../assets/ImageS.png';
import L1 from '../assets/L1.png';
import L2 from '../assets/L2.png';
import L3 from '../assets/L3.png';
import L4 from '../assets/L4.png';
import L5 from '../assets/L5.png';
import L6 from '../assets/L6.png';

const AnalyticsHeader = () => {
  return (
    <header className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          {/* Feature Badge */}
          <div
            className="d-inline-flex align-items-center px-1 py-1 mb-3"
            style={{
              border: '1px solid #E63F3A80',
              borderRadius: '16px',
            }}
          >
            <button
              className="me-2"
              style={{
                border: '1px solid #E63F3A80',
                borderRadius: '16px',
                backgroundColor: '#fff',
                color: '#E63F3A',
                padding: '2px 8px',
                cursor: 'pointer',
              }}
            >
              New feature
            </button>
            <span
              className="text-danger"
              style={{ color: '#E63F3A' }}
            >
              Check out the team dashboard →
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="display-4 fw-bold mb-4"
            style={{
              marginTop: '20px', 
            }}
          >
            Beautiful analytics to grow smarter
          </h1>

          {/* Subheading */}
          <p className="lead text-secondary mb-4">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>

          {/* Action Buttons */}
          <div className="container">
            <div className="row justify-content-center gap-3">
              {/* Sign up Button */}
              <div className="col-12 col-md-auto d-flex justify-content-center order-1 order-md-2">
                <button
                  className="btn d-flex align-items-center justify-content-center fw-bold w-100"
                  style={{ backgroundColor: '#E63F3A', color: '#fff', borderRadius: '16px' }}
                >
                  Sign up
                </button>
              </div>

              {/* Demo Button */}
              <div className="col-12 col-md-auto d-flex justify-content-center order-2 order-md-1">
                <button
                  className="btn btn-outline-secondary d-flex align-items-center justify-content-center fw-bold w-100"
                  style={{ borderRadius: '16px', border: 'none' }}
                >
                  <img src={DemoIcon} alt="Demo Icon" className="me-2" style={{ width: '16px', height: '16px' }} />
                  Demo
                </button>
              </div>
            </div>
          </div>

          <div className="container-fluid d-flex flex-column" style={{ gap: '50px' }}>
            {/* Hero Image Section */}
            <div className="d-flex align-items-center justify-content-center w-100">
              <div className="w-100">
                <img
                  src={Image1}
                  alt="Large Screen Layout"
                  className="img-fluid d-none d-md-block"
                  style={{
                    width: '1440px',
                    height: 'auto',
                    marginTop: '40px',
                  }}
                />
                <img
                  src={ImageS}
                  alt="Small Screen Layout"
                  className="img-fluid d-block d-md-none"
                  style={{
                    width: '100%',
                    height: 'auto',
                    marginTop: '10px',
                  }}
                />
              </div>
            </div>

            {/* Logos Section */}
            <div className="text-center">
              <h5 style={{ fontWeight: 'normal', marginBottom: '10px' }}>
                Join 4,000+ companies already growing
              </h5>
              <div
                className="d-flex justify-content-center align-items-center flex-wrap"
                style={{
                  gap: '40px',
                  padding: '10px',
                }}
              >
                <div className="row justify-content-center">
                  {[L1, L2, L3, L4, L5, L6].map((logo, index) => (
                    <div
                      key={index}
                      className="col-6 col-md-2 d-flex justify-content-center"
                    >
                      <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AnalyticsHeader;
