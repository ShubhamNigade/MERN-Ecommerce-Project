import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We respect that you are trusting us with your information and we will work hard to protect your information.You can use our site in a variety of ways to protect your privacy.We are providing a seperate Login and Registration section to store your personal information.We use this information in order to identify your choices for the betterment of providing you the suggesions of your taste.Also,we are providing a safe transaction of money for your purchase.We assure you that we will keep your card and other modes of transport(UPI) private. </p>
          
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
