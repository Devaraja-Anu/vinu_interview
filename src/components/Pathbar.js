import home from '../assets/images/home.png'


const Pathbar = () => {
  return (
    <div className="pathbarWrapper">
      <div className="pathbar">
        <img src={home} alt="" />
        <p>England</p> <span>{`\u02C3`}</span>
        <p>Premier League</p>
        <span>{`\u02C3`}</span>
        <p className='matchName'>Liverpool v Manchester United</p>
      </div>
    </div>
  );
}

export default Pathbar