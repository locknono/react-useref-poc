import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import DOMPurify from "dompurify";

import "./index.css";

export default function Test(props) {
  const content = window.location;

  window.open(content);
  document.write(window.location);
  document.write(window.location.search);

  document.getElementById("app").innerHTML = content;
  window.location.replace(content);

  const rootEl = document.getElementById("root");
  const queryParams = new URLSearchParams(document.location.search);
  const input = queryParams.get("input");

  rootEl.innerHTML = input;

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <a href={content} />
      <iframe src={content} />
    </>
  );
}

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<Test />);
}
const queryParams = new URLSearchParams(document.location.search);
const input = queryParams.get("input");
rootEl.innerHTML = input; // Noncompliant
