// import { Nav, Button } from "react-bootstrap"

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
            <span className="text-white">Home</span>
          </li>
          <li className="mt-3 text-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="white"
              fillRule="evenodd"
            >
              <path d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"></path>
            </svg>
            <span className="text-muted">Search</span>
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
