import '../style.css';
export default function GameBlock(props) {
  return (
    <div className={`game-block ${props.isRotate} ${props.isMatched}`} data-technology={props.dataTechnology}>
      <div className="face front"></div>
      <div className="face back">
        <img className="logo" src={props.img} alt="" />
      </div>
    </div>
  );
};
