import React from "react";
import { createRoot } from "react-dom/client";



const App = () => {
  return (<div className="text-5xl font-bold text-green-800">Welcome to the new project</div>)
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));