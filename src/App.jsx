import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import Navbar from "./components/Navbar";
import AnalyticsHeader from "./components/Main";
import FAQSection from "./components/QuestionAsked";
import FeaturesSection from "./components/Feature";
import BlogPosts from "./components/OurBlog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <AnalyticsHeader/>
      <FeaturesSection/>
      <FAQSection/>
      <BlogPosts/>
      <Footer/>
    </>
  );
}

export default App;
