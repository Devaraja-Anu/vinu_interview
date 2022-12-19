import liverpool from '../assets/images/liverpool.png'
import manU from "../assets/images/manU.png";


const Statistics = () => {


    const DB = [
      {
        heading: "Shots on goal",
        left:'8',
        right:'6'
      },
      {
        heading: "Shots off goal",
         left:'8',
        right:'6'
      },
      {
        heading: "Shots insidebox",
         left:'8',
        right:'6'
      },
      {
        heading: "Shots outsidebox",
         left:'8',
        right:'6'
      },
      {
        heading: "Totalshots",
         left:8,
        right:6
      },
      {
        heading: "Blocked shots",
         left:'8',
        right:'6'
      },
      {
        heading: "Fouls ",
         left:'8',
        right:'6'
      },
      {
        heading: "Shots on goal",
         left:'8',
        right:'6'
      },
      {
        heading: "Corner Kicks",
         left:'8',
        right:'6'
      },
      {
        heading: "Offsides",
         left:'8',
        right:'6'
      },
      {
        heading: "Ball possession",
         left:'8',
        right:'6'
      },
      {
        heading: "Yellow cards",
         left:'8',
        right:'6'
      },
      {
        heading: "Red cards",
         left:'8',
        right:'6'
      },
      {
        heading: "Goalkeeper saves",
         left:'8',
        right:'6'
      },
      {
        heading: "Total Passes",
         left:'8',
        right:'6'
      },
      {
        heading: "Passes accurate",
         left:'8',
        right:'6'
      },
      {
        heading: "Passes percentage",
         left:`84%`,
        right:'75'
      },
    ];



  return (
    <div className="statisticsWrapper">
      <div className="statistics">
        <h1>Statistics</h1>
        <div className="scoreview">
          {/* team names */}
          <div>
            <img src={liverpool} alt="liverpool logo" />
            <p>Liverpool</p>
          </div>

          <div>
            <p>Man United</p>
            <img src={manU} alt="manU logo" />
          </div>
        </div>

        {/* progress bar */}




        <div className='statsWrapper'>

        {
            DB.map(item => {
                return (
                  <div className="statinstance">
                    <h2>{item.heading}</h2>

                    <div className="barwrapper">
                      <p>{item.left}</p>
                      <div className="greyleft"></div>
                      <div className="blueleft"></div>
                      <div className="greenright"></div>
                      <div className="greyright"></div>
                      <p>{item.right}</p>
                    </div>
                  </div>
                );
            })
        }

         
        </div>
      </div>
    </div>
  );
}

export default Statistics