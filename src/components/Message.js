import React from "react";
import Proptypes from "prop-types";

const Message = (message, author) => (
  <p>
    <i>{author}</i>: {message}
  </p>
);

Message.propTypes = {
  message: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};

export default Message;
