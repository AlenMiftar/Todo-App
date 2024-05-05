import PropTypes from "prop-types";
import { BsPlus } from "react-icons/bs";

const Button = ({ children, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className="bg-sky-800 text-black">
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
