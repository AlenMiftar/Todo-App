import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    <div
      className={` flex p-3 justify-center rounded-xl m-auto w-3/12 ${
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
