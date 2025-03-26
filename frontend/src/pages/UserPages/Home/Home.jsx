import './Home.css';
import Navbar from '../../../Components/User/Navbar/Navbar';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home">
        <h1>Shop the Latest Trends! Up to 50% Off!</h1>
        <p>Best deals on fashion, electronics, and more.</p>

        <Link to={'/products'}>
          <button>Shop Now</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
