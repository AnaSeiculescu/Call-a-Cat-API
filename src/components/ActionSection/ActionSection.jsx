// import { Dropdown } from "react-bootstrap/Dropdown"
import PropTypes from "prop-types";

export default function ActionSection({
  myOneCatHandler,
  callCats,
  clearCats,
}) {
  return (
    <div
      id="fixed-header"
      className="container-sm navbar sticky-top justify-content-center"
    >
      <div
        style={{
          borderBottom: "2px solid orange",
          boxShadow: "0 4px 6px rgb(175, 117, 9)",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          // backgroundColor: 'orange',
          fontWeight: "600",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "orange",
            fontWeight: "600",
            marginTop: "20px",
          }}
          onClick={myOneCatHandler}
          className="m-2"
        >
          Call a Cat
        </button>

        <div className="btn-group dropdown">
          <button
            style={{
              backgroundColor: "orange",
              fontWeight: "600",
              marginTop: "20px",
            }}
            // onClick={myFourCatsHandler}
            className="btn dropdown-toggle m-2"
            id="dropdownMenuButton1"
            type="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Call Cats
          </button>

          {/* <ul id="varianta-1" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li onClick={() => callCats(2)}><a className="dropdown-item" href="#">2 cats</a></li>
                        <li onClick={() => callCats(3)}><a className="dropdown-item" href="#">3 cats</a></li>
                        <li onClick={() => callCats(4)}><a className="dropdown-item" href="#">4 cats</a></li>
                        <li onClick={() => callCats(8)}><a className="dropdown-item" href="#">8 cats</a></li>
                    </ul> */}
          <ul
            id="varianta-2"
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton1"
            onClick={callCats}
          >
            <li>
              <a data-cats="2" className="dropdown-item" href="#">
                2 cats
              </a>
            </li>
            <li>
              <a data-cats="3" className="dropdown-item" href="#">
                3 cats
              </a>
            </li>
            <li>
              <a data-cats="4" className="dropdown-item" href="#">
                4 cats
              </a>
            </li>
            <li>
              <a data-cats="8" className="dropdown-item" href="#">
                8 cats
              </a>
            </li>
          </ul>
        </div>

        <button
          style={{
            backgroundColor: "orange",
            fontWeight: "600",
            marginTop: "20px",
          }}
          onClick={clearCats}
          className="m-2"
        >
          Clear Cats
        </button>
      </div>
    </div>
  );
}

ActionSection.propTypes = {
  myOneCatHandler: PropTypes.func,
  callCats: PropTypes.func,
  clearCats: PropTypes.func,
};
