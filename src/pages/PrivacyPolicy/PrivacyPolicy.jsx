import React from 'react';
import './PrivacyPolicy.css'; 

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This privacy policy document outlines the types of personal information
        that are collected and recorded by our website and how we use it.
      </p>

      <h2>Information Collection and Use</h2>
      <p>
        We collect various types of information for various purposes to provide and improve our services to you. The personal
        data we collect may include, but is not limited to:
      </p>
      <ul>
        <li>First name and last name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Cookies and usage data</li>
      </ul>

      <h2>Use of Data</h2>
      <p>We use the collected data for various purposes:</p>
      <ul>
        <li>To provide and maintain our service</li>
        <li>To notify you about changes to our service</li>
        <li>To provide customer support</li>
        <li>To monitor the usage of the service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means
        of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100%
        secure and reliable, and we cannot guarantee its absolute security.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes.
        We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at contact@example.com.</p>
    </div>
  );
};

export default PrivacyPolicy;
