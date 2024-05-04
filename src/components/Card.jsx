import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    <div
      className={`bg-stone-900 flex my-2 p-3 justify-center  rounded-xl ${reverse} ? bg-slate-600 : bg-slate-800`}
      //   style={{
      //     background: reverse ? "#fff" : "#1c1c1c",
      //     color: reverse ? "#000" : "#fff",
      //   }}
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
