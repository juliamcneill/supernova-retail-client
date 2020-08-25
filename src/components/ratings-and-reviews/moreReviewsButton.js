import React from "react";

const MoreReviewsButton = ({ showMoreReviews }) => {
  return (
    <button
      className="main-action-button review-button"
      onClick={showMoreReviews}
      tabindex="0"
    >
      More Reviews
    </button>
  );
};

export default MoreReviewsButton;
