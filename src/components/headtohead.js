import manC from "../assets/images/manCity.png"
import liverpool from "../assets/images/liverpool.png"

function Headtohead() {
  return (
    <div className="head2headwrapper">
      <div className="head2head">
        <h2>Head to Head</h2>

        <div className="head2headgrid">

          {[0, 1, 2, 3, 4, 5].map(item => {
            return (
              <div className="matchunit">
                <div className="matchdate">
                  <p>14/07/2021</p>
                </div>

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
  );
}

export default Headtohead