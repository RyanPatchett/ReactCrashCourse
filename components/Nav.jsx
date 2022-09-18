import { Link } from "react-router-dom";

function Nav() {
    return (<nav>
          <Link to="/">Home</Link>
          <Link to="/users/ronaldo">Ronaldo</Link>
          <Link to="/users/Messi">Messi</Link>
          <Link to="/users/David Bragg">David Bragg</Link>
    </nav>);
}

export default Nav