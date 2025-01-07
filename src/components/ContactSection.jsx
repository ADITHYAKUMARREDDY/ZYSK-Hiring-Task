import ava from "../assets/Avatar group.png"
const ContactSection = () => {
  return (
    <div className="text-center p-4 " style={{ backgroundColor: "#ffffff" }}>
      {/* Image Section */}
      <div className="d-flex justify-content-center mb-3">
        <img
          src={ava}
          alt="Person 1"
          className="rounded-circle me-2"
        />
      </div>

      {/* Text Section */}
      <h4 className="fw-bold">Still have questions?</h4>
      <p className="text-muted">
        Can’t find the answer you’re looking for? Please chat to our friendly team.
      </p>

      {/* Button Section */}
      <button className="btn " style={{ background: '#E63F3A' , color:'#ffffff'}}>Get in touch</button>
    </div>
  );
};

export default ContactSection;
