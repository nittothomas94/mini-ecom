import Navbar from '../../../Components/User/Navbar/Navbar';
import Input from '../../../Components/Input/Input';
import './Signin.css';

const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="signin">
        <img
          src="/Images/main/no-authentiacation-required.jpg"
          alt="no autentication image"
        />
      </div>
    </>
  );
};

export default Signin;
