import { VscGithub } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-dark text-light d-flex flex-column container-fluid">
      <div className="row justify-content-center">
        {/* <div className="col-12 col-lg-2">
          <h5>Newsletter</h5>
        </div> */}
        <div className="col-12 col-lg-2">
          <div className="p-3">
            <h5>Author</h5>
            <hr className="p-0 m-0" />
            <ul className="list-unstyled">
              <li>
                <p className="m-0">Bradley Showen</p>
              </li>
              <li>
                <a
                  href="https://github.com/BShowen"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <VscGithub size="1.5rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-auto">
        <div className="col text-center d-flex flex-row justify-content-center align-items-center p-3">
          <FaRegCopyright />
          &nbsp;
          {new Date().getFullYear()}
          &nbsp;
          <p className="m-0">Bradley Showen</p>
        </div>
      </div>
    </footer>
  );
}
