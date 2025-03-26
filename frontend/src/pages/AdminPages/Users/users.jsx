import './users.css';
import NavbarAdmin from '../../../Components/Admin/Navbar-Admin/Navbar-Admin';

const Users = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="users">
        <img
          src="/Images/main/no-users-avalable.jpeg"
          alt="No users Avalable"
        />
      </div>
    </>
  );
};

export default Users;
