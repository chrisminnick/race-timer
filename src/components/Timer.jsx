//Setting up for timer to be used in other functions
function Timer(props) {
  return (
    <div
      style={{
        margin: "0px auto",
        width: "500px",
        borderRadius: "10px",
        backgroundColor: "rgba(0,0,0,.1)",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "3em", paddingTop: "15px" }}>{props.currentTime}</p>
    </div>
  );
}

export default Timer;
