const Footer = () => {
  return (
    <div className="p-4 m-4">
      <div className="app-store">
        <h1 className="flex justify-center p-4 m-4 text-2xl">
          Hey there, download this app from App Store
        </h1>
      </div>
      <div className="flex justify-left p-4 m-4">
        <div className="logo-copyright">
          <img
            className="logo"
            src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg"
          />
        </div>
        <div className="flex items-center">
          <ul className="p-4 m-4">
            <h3>Company</h3>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul>
            <h3>Contact us</h3>
            <li>Help & Support</li>
            <li>Partner with us</li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul>
            <h3>Legal</h3>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Investor Relation</li>
          </ul>
        </div>
        <div className="flex items-center">
          <ul>
            <h3>Delivery</h3>
            <li>Hyderabad</li>
            <li>Bangalore</li>
            <li>Gurgaon</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
