function Contestant(props) {
  return (
    <div
      data-testid="contestant"
      style={{
        position: 'relative',
        left: props.xpos,
        top: props.ypos,
        width: '800px',
        height: '10px',
      }}
    >
      {props.name}
    </div>
  );
}

export default Contestant;
