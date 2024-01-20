
function WavyHeader(props) {
  return (
    <>
      <div className="wavy--container">
        <h1 className="wavy--header-name">
          {props.name}
        </h1>
      </div>
    </>
  )
}

export default WavyHeader;