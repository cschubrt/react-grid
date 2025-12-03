export default Navigation = (props) => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={props.onClick} data-content="default" className="nav-link">
            Default
          </a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={props.onClick} data-content="copy" className="nav-link">
            Copy
          </a>
        </li>
      </ul>
    </nav>
  );
};
