import calendar from "../assets/images/calendar.png"
import whistle from "../assets/images/whistle.png"
import stadium from "../assets/images/stadium.png"



const Info = () => {
  return (
    <div className="infowrapper">
      <div className="info">
        <h2 className="mainheading">Match Info</h2>

        <div className="detailsgrid">
          {[0, 1, 2].map((item) => {
            return (
              <div className="details">
                <div className="imageround">
                  <img src={calendar} alt="a small art" />
                </div>
                <div className="imgdetails">
                  <p>Date</p>
                  <p>16 Jan 2021</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="content">
          <h2>Match details</h2>

          <p>
            Arsenal is going head to head with Fulham starting on 18 Apr 2021 at
            12:30 UTC at Emirates Stadium stadium, London city, England. The
            match is a part of the Premier League.
          </p>

          <p>
            Arsenal played against Fulham in 2 matches this season. Currently,
            Arsenal rank 9th, while Fulham hold 18th position. Looking to
            compare the best-rated player on both teams? SofaScore's rating
            system assigns each player a specific rating based on numerous data
            factors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info