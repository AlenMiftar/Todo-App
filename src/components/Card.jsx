import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    <div
      className={` flex justify-center rounded-xl m-auto my-3 p-2 ${
        reverse ? `bg-white text-black` : `bg-zinc-900 text-white`
      }`}
      // style={{
      //   background: reverse ? "#fff" : "#1c1c1c",
      //   color: reverse ? "#000" : "#fff",
      // }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.PropTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
