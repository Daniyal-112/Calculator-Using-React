const Display = ({diplayResult}) => {
  return (
    <div className="display-result">
      <input type="text"  readOnly value={diplayResult}/>
    </div>
  );
};

export default Display;
