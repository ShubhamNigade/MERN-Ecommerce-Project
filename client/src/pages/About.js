import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          We are providing you a platform for buying clothes online by just sitting at your home.We provide a marketplacde with over many products over wide range of categories.We are providing ease in doing shopping in your busy life.Our User friendly GUI will help you and your family a lot in navigating you through the shopping process.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
