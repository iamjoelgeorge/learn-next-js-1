"use client";
import React from "react";

export default function Error({ error }) {
  return (
    <div className="error">
      <h1>An error occurred.</h1>
      <p>Failed to fetch meal data. Try again later</p>
    </div>
  );
}
