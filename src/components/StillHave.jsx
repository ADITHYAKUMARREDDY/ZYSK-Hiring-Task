const FreeTrail = () => {
  return (
    <>
      <style>
        {`
          /* Default behavior: Full width for small screens */
          .btn-responsive {
            width: 100%;
          }

          /* Adjust button size for larger screens */
          @media (min-width: 768px) {
            .btn-responsive {
              width: auto; /* Match the button width to the text */
              white-space: nowrap; /* Prevent text wrapping */
            }
          }

          /* Custom spacing above the section */
          .free-trial-section {
            margin-top: 50px; /* Adjust value for more/less space */
          }
        `}
      </style>
      <div className="text-center p-4  free-trial-section" style={{ backgroundColor: "#ffffff" }}>
        {/* Text Section */}
        <h4 className="fw-bold">Start your free trial</h4>
        <p className="text-muted">
          Join over 4,000+ startups already growing with Untitled.
        </p>

        {/* Button Section */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <button
            className="btn btn-light mb-2 mb-md-0 me-0 me-md-3 btn-sm text-wrap order-2 order-md-1 btn-responsive"
          >
            Learn More
          </button>
          <button
            className="btn  mb-2 mb-md-0 btn-sm text-wrap order-1 order-md-2 btn-responsive" style={{ background: '#E63F3A', color: '#ffffff' }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default FreeTrail;
