import React, { useMemo, useCallback } from "react";

const MyComponent = ({ count }) => {
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Empty dependency array, handleClick will never change

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]); // doubleCount will be recalculated only when count changes

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p>Count: {doubleCount}</p>
    </div>
  );
};

export default MyComponent;
