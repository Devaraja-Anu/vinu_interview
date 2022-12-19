import mancitylogo from "../assets/images/manCity.png"


const PlayerStats = () => {

  const navDB=['summary','attack','defence','Passing','Goalkeeper','Detailed'];

  const playerDB = [
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67.1,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67.4,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
    {
      Name: "Kevin De Bruyune",
      Goals: 21,
      Dribbles: 12,
      Tackles: 11,
      Assists: 18,
      Passes: 67,
      Rating: 9.1,
    },
  ];

  return (
    <div className="playerstats">
      <div className="playerstats--cover">
        <h2 className="heading">Player Statistics</h2>

        <div>
          <p>Accumulation</p>
          <select className="dropdown">
            <option value="All">All</option>
            <option value="some">Some</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      <div className="playerstats--nav">
        {navDB.map((item) => {
          return <p className="playermenu">{item}</p>;
        })}
      </div>

      <div className="statsdetails">
        <div className="statsdetails--titles">
          <p>#</p>
          <p>Name</p>
          <p>Goals</p>
          <p>Succ. Dribbles</p>
          <p>Tackles</p>
          <p>Assists</p>
          <p>Acc.Passes%</p>
          <p>Rating</p>
        </div>

        {playerDB.map((item, index) => {
          const lightorDark = index % 2 === 0 ? "playerlistG" : "playerlistW";

          return (
            <div className={`${lightorDark}`}>
              <p>{index + 1}</p>
              <p className="playerteamlogo">
                <img src={mancitylogo} alt="manchester city logo" />
                {item.Name}
              </p>
              <p>{item.Goals}</p>
              <p>{item.Dribbles}</p>
              <p>{item.Tackles}</p>
              <p>{item.Assists}</p>
              <p>{item.Passes}</p>
              <p className="rating">{item.Rating}</p>
            </div>
          );
        })}

        <div className="statpages">
          <p>{"\u003C"}</p>
          <div>
            <p className="roundpage">1</p>
          </div>
          <div>
            <p className="roundpage">2</p>
          </div>
          <p>{"\u003E"}</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats