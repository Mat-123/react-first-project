const ButtonComponent = function (props) {
  return (
    <div>
      <button>{props.TextButton || "Useless Button"}</button>
    </div>
  );
};

export default ButtonComponent;
