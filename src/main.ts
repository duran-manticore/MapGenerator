import "./style.css";
import { mData } from "./data";
import { generateFinalizedMap } from "./processGen";
// const { metadata } = mData;
console.clear();
// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// <canvas id="canvas-content"/>
// `;
document.getElementById("app").innerHTML = `
<h1>Hello generator!</h1>

<canvas id="canvas-content"/>
`;

const cvs = document.getElementById("canvas-content");
generateFinalizedMap(mData, cvs);

// const ctx = cvs.getContext("2d");
// console.log("Context ", ctx);
