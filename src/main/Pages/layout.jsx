import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h1>Hello</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This is where the child routes will be rendered */}
    </>
  );
}
