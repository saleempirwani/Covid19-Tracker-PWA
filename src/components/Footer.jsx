import React from "react";

export default function Footer() {
  return (
    <div
      className={
        window.innerWidth > 600
          ? "fixed-bottom p-2 text-left text-white bg-dark"
          : "mt-5 p-2 text-left text-white bg-dark"
      }
    >
      Copyright &copy; {getYear()}, Muhammad Saleem Raza
    </div>
  );
}

const getYear = () => new Date().getFullYear();
