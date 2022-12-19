import liverpool from '../assets/images/liverpool.png';
import pitch from '../assets/images/pitch.png';
import manU from "../assets/images/manU.png";
import play from "../assets/images/play.png";

const MatchStream = () => {
  return (
    <div className="gridwrapper">
      <div className="streamgrid">
        <div className="winbar">
          <div className="scorewrapper">
            <div className="score">
              <img src={liverpool} alt="liverpool logo" />
              <p>Liverpool</p>
            </div>

            <div className="scorevalue ">
              <h1>0-1</h1>
              <p>FT</p>
            </div>

            <div className="score">
              <img src={manU} alt="manchester United logo" />
              <p>Man United</p>
            </div>
          </div>

          <div className='winrate'>

            <p>Winning Percentage?</p>

            {/* percentage bar */}

            <div className='percentagebar'>
              <div className=" left"></div>
              <div className="lines"></div>
              <div className="center"></div>
              <div className="lines"></div>
              <div className="right"></div>
            </div>
          </div>


        </div>

        <div className="streamvid">
          <img src={pitch} alt="a football pitch"></img>
          <button> <img src={play} alt='play button' /> Click to watch</button>
        </div>

        <div className="streamdeets">
          <h1>Live Streaming</h1>
          <p>
            In publishing and graphic design, lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or
            typeface without relying on meaningful content
          </p>
        </div>
      </div>
    </div>
  );
}

export default MatchStream