// import { Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MySideBar = () => {
  return (
    <div className="side">
      <div className="d-flex pr-2 justify-content-center">
        <img
          src="/assets/sidemenu/Untitled-1.png"
          alt="spotify-log"
          className="logo mt-4"
          height="40px"
        />
      </div>
      <div className="menu mt-5">
        <ul className="px-0">
          <li className="mt-3 active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12.97 2.59a1.5 1.5 0 00-1.94 0l-7.5 6.363A1.5 1.5 0 003 10.097V19.5A1.5 1.5 0 004.5 21h4.75a.75.75 0 00.75-.75V14h4v6.25c0 .414.336.75.75.75h4.75a1.5 1.5 0 001.5-1.5v-9.403a1.5 1.5 0 00-.53-1.144l-7.5-6.363z" />
            </svg>
            <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="mt-3 text-muted">
            <i class="bi bi-search" style={{ width: "28", height: "28" }}>
              {" "}
              <span className="text-muted">Search</span>
            </i>
          </li>
          <li className="mt-3">
            <img
              src="/assets/sidemenu/library.png"
              alt="home"
              style={{
                width: "18px",
                marginRight: "15px",
                opacity: "50%",
                paddingBottom: "3px",
                marginLeft: "7px",
              }}
            />

            <span className="text-muted">Your Library</span>
          </li>
        </ul>
      </div>
      <div className="buttons d-flex">
        <button className="sign-up">SIGN UP</button>
        <button className="login mt-2">LOGIN</button>
        <p>
          <span className="cookie"> Cookie</span> |
          <span className="privacy">Privacy Policy</span>
        </p>
      </div>
      <div className="side-mobile">
        <div className="container-fluid">
          <img
            src="/assets/sidemenu/Untitled-1.png "
            height="36px"
            alt="spotify logo"
          />
        </div>
      </div>
    </div>
  )
}

export default MySideBar
