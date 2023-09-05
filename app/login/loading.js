import React from "react";

const loading = () => {
  return (
    <div className="container mx-auto flex">
      <div className="row mx-auto text-center pt-64">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </div>
  );
};

export default loading;
