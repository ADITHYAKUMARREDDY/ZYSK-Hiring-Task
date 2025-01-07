

import aa1 from '../assets/aa1.svg';
import aa2 from '../assets/aa2.svg';
import aa3 from '../assets/aa3.svg';
import aa4 from '../assets/aa4.svg';
import aa5 from '../assets/aa5.svg';
import aa6 from '../assets/aa6.svg';

const FeaturesSection = () => {
  const features = [
    {
      icon: <img src={aa1} alt="Share team inboxes" className="w-8 h-8" />,
      title: "Share team inboxes",
      description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
      icon: <img src={aa2} alt="Deliver instant answers" className="w-8 h-8" />,
      title: "Deliver instant answers",
      description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
      icon: <img src={aa3} alt="Manage your team with reports" className="w-8 h-8" />,
      title: "Manage your team with reports",
      description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
    },
    {
      icon: <img src={aa4} alt="Connect with customers" className="w-8 h-8" />,
      title: "Connect with customers",
      description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
    },
    {
      icon: <img src={aa5} alt="Connect the tools you already use" className="w-8 h-8" />,
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
    },
    {
      icon: <img src={aa6} alt="Our people make the difference" className="w-8 h-8" />,
      title: "Our people make the difference",
      description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
    }
  ];

  return (
    <div className="container py-3"> 
      {/* Header Section */}
      <div className="row justify-content-center text-center mb-4"> 
        <div className="col-12 col-lg-8">
          <div className=" mb-2" style={{ color: '#E63F3A' }}>Features</div>
          <h2 className="display-5 fw-bold mb-3" style={{ fontSize: "2rem" }}> 
            Analytics that feels like its from the future
          </h2>
          <p className="text-secondary mb-4"> 
            Powerful, self-serve product and growth analytics to help you convert, engage,
            and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="row g-3"> 
        {features.map((feature, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <div className="text-center p-4">
              <div className="d-inline-block p-3  rounded-circle mb-3" style={{ backgroundColor: "#ffffff" }}> 
                {feature.icon}
              </div>
              <h3 className="h5 fw-bold mb-2">{feature.title}</h3> 
              <p className="text-secondary mb-0">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
