import './PlayerInfo.css';
const PlayerInfo = (props) => {
  return (
    <div>
      <h1>Player term : {props.playerData}</h1>
      <h2 className="ply">{props.winner}</h2>
    </div>
  );
};

export default PlayerInfo;
