import React from "react";

function Like({ liked, handleLike }) {
  let classes = "fa fa-heart";
  classes = liked ? classes : `${classes}-o`;
  return (
    <i
      onClick={handleLike}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
}

export default Like;
