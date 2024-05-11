import propTypes from "prop-types";

const Card = ({ children, reverse, create }) => {
  return (
    <div
      className={`todo-card flex justify-center rounded-3xl m-auto my-8 ${
        reverse ? `bg-white text-black` : `bg-zinc-900 text-white`
      } ${
        create
          ? `bg-zinc-800 p-8`
          : `bg-zinc-900 p-8
      `
      } `}
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
  create: false,
};

Card.propTypes = {
  children: propTypes.node.isRequired,
  reverse: propTypes.bool,
  create: propTypes.bool,
};

export default Card;
