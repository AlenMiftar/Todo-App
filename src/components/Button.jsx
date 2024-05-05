import PropTypes from "prop-types";
import { BsPlus } from "react-icons/bs";

const Button = ({ children, type, isDisabled }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className="bg-blue-950 rounded-xl text-xl my-2 p-1 flex w-44 items-center font-bold text-white"
    >
      <BsPlus className="text-5xl" />
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "Button",
  isDisabled: false,
};

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
