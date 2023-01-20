import { Link } from "react-router-dom";

function Navigation() {
    return (
      <div className="Navigation mb-5 ms-4">
        <Link to="/">Blog entry list</Link>
        &nbsp; | &nbsp;
        <Link to="/create">Create new entry</Link>
      </div>
    );
}

export default Navigation;