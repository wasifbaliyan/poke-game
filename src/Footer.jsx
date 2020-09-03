import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
        background: "#eee",
      }}
    >
      <small>
        &copy;{new Date().getFullYear()}{" "}
        <a href="https://wasifbaliyan.com">wasifbaliyan</a>
      </small>
    </div>
  );
}
