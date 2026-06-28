import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Food delivery logo" />
        <div className="brand-text">
          <h1>Foodie Express</h1>
          <p>Fast delivery & fresh meals</p>
        </div>
      </div>
      <nav className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
