const DisplayButtons = ({ HandleButtons }) => {
  const Buttons = [
    "AC",
    "DE",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <>
      <div className="Buttons-container">
        {Buttons.map((buttons) => (
          <button
            key={buttons}
            className={`btns ${buttons==="AC" || buttons==="DE" ? "red-btn" : buttons==="=" ? "green-btn" : ""}`}
            onClick={() => {
              HandleButtons(buttons);
            }}
          >
            {buttons}
          </button>
        ))}
      </div>
    </>
  );
};

export default DisplayButtons;
