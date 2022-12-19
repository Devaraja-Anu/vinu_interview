import arrowR from "../assets/images/rightarrow.png"
import arrowL from "../assets/images/leftarrow.png";
import manC from "../assets/images/manCity.png"
import liverpool from "../assets/images/liverpool.png";

const Matches = () => {
  return (
    <div className="matcheswrapper">
      <div className="matchestoday">
        <div className="matchesheadings">
          <h2>Matches</h2>
          <div>
            <button>
              <img src={arrowL} alt="left arrow" /> Previous
            </button>
            <button>
              Next <img src={arrowR} alt="right arrow" />
            </button>
          </div>
        </div>

        <div className="matchdate">14/07/2021</div>

        <div className="matchlist">
          <div>
            {[0, 1, 2].map((item) => {
              return (
                <div className="matchunit">

                  <div className="matchSchedule">
                    <div className="greencircle">w</div>
                    <p>Man</p>
                    <img src={manC} alt="manchester city logo" />
                    <p>
                      3 <span> FT </span>1
                    </p>
                    <img src={liverpool} alt="Liverpool logo" />
                    <p>Liverpool</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Matches