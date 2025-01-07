import { useState } from "react";
import PlusIcon from "../assets/plus.svg"; // Path to your plus.svg
import MinusIcon from "../assets/minus.svg"; // Path to your minus.svg
import ContactSection from "./ContactSection";

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleFAQ = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqs = [
    {
      id: "faq1",
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      id: "faq2",
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time.",
    },
    {
      id: "faq3",
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time with no penalties.",
    },
    {
      id: "faq4",
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices.",
    },
    {
      id: "faq5",
      question: "How does billing work?",
      answer: "We bill on a monthly basis and accept all major credit cards.",
    },
    {
      id: "faq6",
      question: "How do I change my account email?",
      answer: "You can change your account email through your account settings.",
    },
  ];

  return (
    <div>
      {/* FAQ Section */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="text-center mb-5">
              <h2 className="display-6 fw-bold mb-3">Frequently Asked Questions</h2>
              <p className="text-secondary">
                Everything you need to know about the product and billing.
              </p>
            </div>
            <div>
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <div
                    onClick={() => toggleFAQ(faq.id)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px 0",
                      cursor: "pointer",
                      fontWeight: "bold",
                      backgroundColor: "transparent",
                    }}
                  >
                    <span>{faq.question}</span>
                    <img
                      src={openItem === faq.id ? MinusIcon : PlusIcon}
                      alt={openItem === faq.id ? "Minus Icon" : "Plus Icon"}
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  {openItem === faq.id && (
                    <div
                      style={{
                        padding: "10px 0",
                        backgroundColor: "transparent",
                      }}
                    >
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
};

export default FAQSection;
