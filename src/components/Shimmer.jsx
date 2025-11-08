import React from "react";

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <div className="shimmer-details">
        <div className="shimmer-text"></div>
        <div className="shimmer-tex"></div>
        <div className="shimmer-text"></div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default Shimmer;
