import FreeTrail from "./StillHave";
import loo from '../assets/aw.svg';
import i2 from "../assets/a2.png"
import i3 from "../assets/a3.png"
import i1 from "../assets/Avatar.png"
import II1 from "../assets/Image (2).png"
import II2 from "../assets/Image (3).png"
import II3 from "../assets/Image (5).png"


const BlogPosts = () => {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div>
          <p className="fw-bold mb-0" style={{ color: '#E63F3A' }}>Our blog</p>
          <h2 className="fw-bold">Latest blog posts</h2>
          <p className="text-muted">
            Tools and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="btn  d-none d-md-block" style={{ background: '#E63F3A' , color:'#ffffff'}}>
          View all posts
        </button>
      </div>

      {/* Blog Cards */}
      <div className="row">
        {/* Blog Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card border-0">
            <img
              src={II1}
              className="card-img-top"
              alt="UX review presentations"
            />
            <div className="card-body">
              <p className=" fw-bold mb-1" style={{  color:'#E63F3A'}}>Design</p>
              <h5 className="card-title fw-bold d-flex align-items-center justify-content-between">
                <span>UX review presentations</span>
                <img
                  src={loo}
                  alt="End Icon"
                  className="inline-end-icon"
                />
              </h5>
              <p className="card-text text-muted">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={i1}
                  alt="Olivia Rhye"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0 fw-bold">Olivia Rhye</p>
                  <p className="mb-0 text-muted">20 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Blog Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card border-0">
            <img
              src={II2}
              className="card-img-top"
              alt="Migrating to Linear 101"
            />
            <div className="card-body">
              <p className=" fw-bold mb-1" style={{ color: '#E63F3A' }}>Product</p>
              <h5 className="card-title fw-bold d-flex align-items-center justify-content-between">
                <span>Migrating to Linear 101</span>
                <img
                  src={loo}
                  alt="End Icon"
                  className="inline-end-icon"
                />
              </h5>
              <p className="card-text text-muted">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get started.
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={i2}
                  alt="Phoenix Baker"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0 fw-bold">Phoenix Baker</p>
                  <p className="mb-0 text-muted">19 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card border-0">
            <img
              src={II3}
              className="card-img-top"
              alt="Building your API stack"
            />
            <div className="card-body">
              <p className=" fw-bold mb-1" style={{ color: '#E63F3A' }}>
                Software Engineering
              </p>
              <h5 className="card-title fw-bold d-flex align-items-center justify-content-between">
                <span>Building your API stack</span>
                <img
                  src={loo}
                  alt="End Icon"
                  className="inline-end-icon"
                />
              </h5>
              <p className="card-text text-muted">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>
              <div className="d-flex align-items-center">
                <img
                  src={i3}
                  alt="Lana Steiner"
                  className="rounded-circle me-2"
                />
                <div>
                  <p className="mb-0 fw-bold">Lana Steiner</p>
                  <p className="mb-0 text-muted">18 Jan 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* View All Posts Button for Small Screens */}
      <div className="d-md-none mt-3">
        <button className="btn  w-100" style={{ background: '#E63F3A', color: '#ffffff' }}>View all posts</button>
      </div>

      <FreeTrail />
    </div>
  );
};

export default BlogPosts;
