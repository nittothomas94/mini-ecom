import Navbar from '../../../Components/User/Navbar/Navbar';

import './Signup.css';

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="signup">
        <img
          src="/Images/main/no-authentiacation-required.jpg"
          alt="no autentication image"
        />
      </div>
    </>
  );
};

export default Signup;
