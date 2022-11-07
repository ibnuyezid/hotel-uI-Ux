import "./home.css";
import Navbar from "../../components/Nabar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProp from "../../components/featuredProp/FeaturedProp";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const home = () => {
  return (
    <div>
      {" "}
      <Navbar type="home" />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Featured Hotels In City</h1>
        <FeaturedProp />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default home;
