import React, { useState, useEffect } from "react";

function Page() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `UseEffect Page`;
  });
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  );
}
