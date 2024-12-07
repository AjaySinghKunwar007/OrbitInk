// 
import React from "react";

const Logo = ({ width = "100px" }) => {
  return (
    <div
      className="flex shrink-0 items-center mx-auto  w-auto"
      style={{ width }}
      role="img"
      aria-label="Company Logo"
    >
      <svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M526.4 568c40-11.2 64-52.8 54.4-92.8s-62.4-12.8-92.8 11.2c-30.4 25.6-65.6-12.8-54.4 27.2 11.2 41.6 52.8 65.6 92.8 54.4z" fill="#3cff2e"></path><path d="M505.6 744z m-11.2-1.6c-3.2 0-4.8-1.6-8-3.2-14.4-4.8-19.2-4.8-22.4-1.6-14.4 9.6-36.8 33.6-73.6 78.4l-6.4 6.4c-57.6 70.4-65.6 80-80 89.6-11.2 8-24 6.4-24-8 0-6.4 3.2-16 9.6-30.4 9.6-22.4 27.2-56 44.8-86.4 3.2-4.8 4.8-8 8-12.8 8-14.4 36.8-56 33.6-52.8 4.8-6.4 8-11.2 9.6-16-25.6-16-52.8-43.2-70.4-68.8h-3.2c-4.8 1.6-12.8 3.2-22.4 6.4-8 3.2-17.6 4.8-30.4 9.6 0 0-27.2 9.6-36.8 11.2-3.2 1.6-6.4 1.6-9.6 3.2-81.6 27.2-110.4 33.6-118.4 20.8-6.4-11.2 3.2-17.6 27.2-30.4 14.4-8 35.2-17.6 64-30.4 3.2-1.6 6.4-3.2 11.2-4.8 8-3.2 32-14.4 36.8-16 14.4-6.4 24-9.6 32-14.4 9.6-4.8 17.6-8 20.8-11.2 1.6 0 1.6-1.6 3.2-1.6-6.4-17.6-9.6-36.8-11.2-56 0 1.6-33.6-51.2-48-73.6-3.2-4.8-4.8-8-8-12.8-32-54.4-46.4-83.2-40-96 3.2-8 11.2-8 17.6-3.2 3.2 1.6 8 6.4 12.8 12.8 8 9.6 17.6 24 32 43.2 1.6 1.6 3.2 4.8 4.8 8 3.2 3.2 4.8 8 8 12.8 4.8 6.4 6.4 9.6 8 12.8 0-1.6-1.6-4.8-3.2-6.4-14.4-36.8-17.6-54.4-1.6-60.8 4.8-1.6 9.6-1.6 14.4 0 8 3.2 14.4 9.6 24 19.2 1.6 1.6 8 9.6 6.4 8 1.6 1.6 1.6 3.2 3.2 3.2 6.4-11.2 14.4-22.4 24-32 0-1.6-1.6-3.2-1.6-6.4-1.6-6.4-4.8-14.4-9.6-22.4-11.2-20.8-24-43.2-40-62.4-4.8-6.4-11.2-12.8-17.6-19.2-12.8-12.8-19.2-17.6-44.8-35.2-19.2-12.8-24-19.2-24-28.8 0-1.6 0-4.8 1.6-6.4 11.2-24 68.8 0 126.4 44.8 9.6 8 19.2 16 28.8 25.6 6.4 6.4 14.4 14.4 20.8 22.4l9.6 9.6c1.6 1.6 6.4 8 8 9.6 6.4 6.4 9.6 9.6 11.2 12.8 30.4-14.4 62.4-24 97.6-25.6-6.4 0-6.4-1.6-6.4 4.8v-4.8c0-4.8 1.6-11.2 1.6-22.4 0-3.2 0-6.4 1.6-14.4 0-6.4 1.6-11.2 1.6-16 1.6-12.8 1.6-24 3.2-35.2 6.4-65.6 11.2-97.6 24-102.4 8-3.2 16 0 20.8 6.4 3.2 4.8 4.8 12.8 4.8 22.4 0 16-1.6 40-6.4 67.2-3.2 22.4-6.4 48-8 68.8 0 9.6-1.6 17.6-1.6 24 12.8 3.2 24 6.4 35.2 9.6-1.6-1.6 0-3.2 1.6-6.4 0 0 11.2-17.6 14.4-24 1.6-3.2 4.8-6.4 6.4-9.6 16-22.4 24-32 35.2-27.2 9.6 3.2 9.6 11.2 4.8 22.4-1.6 6.4-6.4 16-11.2 27.2-1.6 3.2-3.2 4.8-3.2 8-1.6 3.2-3.2 8-6.4 11.2-1.6 3.2-3.2 4.8-4.8 9.6 6.4 4.8 12.8 8 20.8 12.8l8-8 6.4-6.4c1.6-1.6 1.6-1.6 3.2-1.6 8-6.4 12.8-11.2 17.6-14.4 3.2-1.6 6.4-3.2 9.6-3.2 6.4 0 9.6 4.8 9.6 11.2 0 6.4-3.2 14.4-8 22.4-1.6 3.2-3.2 6.4-6.4 9.6-1.6 1.6-8 11.2-9.6 12.8 4.8 3.2 8 6.4 11.2 9.6 0-1.6 3.2-1.6 6.4-3.2 8-1.6 17.6-4.8 27.2-9.6 27.2-11.2 52.8-27.2 73.6-48 9.6-9.6 19.2-20.8 27.2-32 8-9.6 14.4-20.8 20.8-33.6 4.8-6.4 16-28.8 16-28.8 14.4-25.6 20.8-33.6 33.6-27.2 24 12.8 0 81.6-44.8 148.8-11.2 16-24 32-40 48-14.4 14.4-25.6 24-49.6 44.8-8 8-12.8 11.2-16 14.4 8 24 14.4 46.4 17.6 70.4 6.4 1.6 14.4 1.6 24 3.2 3.2 0 51.2 4.8 65.6 6.4 73.6 8 104 14.4 104 32s-25.6 20.8-105.6 24h-24c-27.2 0-40 1.6-51.2 1.6-6.4 0-11.2 1.6-14.4 1.6-3.2 4.8-3.2 6.4-4.8 8 3.2 1.6 4.8 3.2 6.4 4.8 0 0 4.8 3.2 6.4 4.8 4.8 3.2 8 6.4 11.2 8 6.4 4.8 9.6 9.6 9.6 16 0 8-6.4 11.2-14.4 12.8-4.8 0-9.6 0-17.6-1.6h-3.2c-8-1.6-9.6-1.6-11.2-1.6 0 1.6-1.6 3.2-1.6 4.8 3.2 4.8 8 8 14.4 14.4 3.2 3.2 19.2 19.2 19.2 17.6 8 8 16 14.4 22.4 22.4 6.4 6.4 12.8 14.4 19.2 20.8 24 27.2 41.6 49.6 54.4 67.2 17.6 25.6 22.4 41.6 8 49.6-9.6 4.8-19.2 0-33.6-16 1.6 1.6-27.2-32-36.8-43.2-11.2-11.2-22.4-20.8-33.6-28.8-16-11.2-35.2-20.8-54.4-27.2-8-3.2-16-4.8-20.8-4.8H672c-6.4 6.4-16 14.4-25.6 22.4 0 1.6 0 1.6 1.6 3.2 1.6 4.8 4.8 11.2 8 20.8 8 17.6 17.6 38.4 28.8 57.6 3.2 4.8 6.4 11.2 9.6 16 8 12.8 30.4 46.4 30.4 46.4 11.2 17.6 14.4 25.6 9.6 33.6-4.8 6.4-12.8 4.8-19.2-1.6-4.8-3.2-9.6-9.6-16-16-9.6-11.2-14.4-17.6-43.2-52.8-3.2-4.8-6.4-8-9.6-12.8-6.4-8-12.8-16-19.2-25.6-3.2-4.8-16-20.8-16-22.4-4.8-8-8-12.8-11.2-16-6.4 1.6-11.2 3.2-16 4.8 0 4.8 0 11.2 1.6 19.2 1.6 6.4 1.6 14.4 3.2 25.6 0 4.8 4.8 25.6 4.8 32 1.6 6.4 1.6 11.2 3.2 17.6 4.8 30.4 6.4 52.8 8 70.4 1.6 25.6-1.6 40-14.4 40-14.4 0-24-19.2-40-65.6-3.2-11.2-8-22.4-11.2-35.2-3.2-8-11.2-36.8-11.2-35.2-4.8-12.8-6.4-22.4-9.6-30.4-3.2-9.6-6.4-16-8-20.8 0-1.6-1.6-3.2-1.6-3.2-6.4-9.6-9.6-9.6-14.4-11.2z m88-12.8z m19.2-4.8z m43.2-27.2z m27.2-20.8s1.6-1.6 0 0c1.6-1.6 1.6-1.6 0 0z m46.4-70.4z m4.8-6.4c0-1.6 0 0 0 0z m11.2-38.4z m1.6-8c1.6 0 1.6 0 0 0 1.6 0 1.6 0 0 0z m-68.8-209.6zM568 288h3.2-3.2z m-164.8 19.2c0 1.6 0 1.6 0 0 0 1.6 0 1.6 0 0z m-113.6 276.8s0-1.6 0 0c0-1.6 0-1.6 0 0z m25.6 56z m70.4 65.6z m-14.4 107.2c3.2-3.2 3.2-4.8 6.4-6.4 38.4-46.4 60.8-70.4 76.8-81.6 9.6-6.4 19.2-6.4 36.8 0 3.2 1.6 6.4 1.6 8 3.2 3.2 1.6 6.4 1.6 9.6 1.6 9.6 0 12.8 8 22.4 35.2 3.2 8 6.4 17.6 9.6 30.4 0-1.6 8 27.2 11.2 35.2 4.8 14.4 8 25.6 11.2 35.2 11.2 30.4 20.8 51.2 24 54.4v-22.4c0-16-3.2-38.4-8-68.8 0-4.8-1.6-11.2-3.2-17.6-1.6-4.8-4.8-25.6-4.8-32-1.6-11.2-3.2-19.2-3.2-27.2-3.2-27.2-3.2-32 4.8-35.2 8-1.6 14.4-4.8 22.4-8 3.2-1.6 6.4 0 8 0 1.6 0 1.6 1.6 3.2 1.6l4.8 4.8c3.2 3.2 6.4 8 11.2 16 1.6 1.6 12.8 17.6 16 22.4 6.4 9.6 12.8 17.6 19.2 25.6 3.2 4.8 6.4 8 9.6 12.8 20.8 27.2 28.8 36.8 35.2 44.8-8-11.2-17.6-27.2-22.4-35.2-3.2-6.4-6.4-11.2-9.6-17.6-27.2-48-46.4-92.8-36.8-99.2 11.2-8 20.8-16 28.8-24 9.6-9.6 65.6 9.6 99.2 33.6 12.8 8 24 19.2 35.2 32 11.2 11.2 40 44.8 38.4 43.2 9.6 9.6 12.8 12.8 14.4 12.8 0 0-3.2-9.6-14.4-25.6-11.2-17.6-28.8-40-52.8-65.6-6.4-6.4-11.2-12.8-19.2-19.2l-22.4-22.4s-16-14.4-19.2-19.2c-19.2-19.2-22.4-22.4-19.2-30.4 1.6-3.2 3.2-8 4.8-11.2 3.2-6.4 6.4-6.4 14.4-6.4 3.2 0 3.2 0 12.8 3.2h3.2c3.2 0 6.4 1.6 8 1.6-1.6-1.6-4.8-4.8-9.6-8-1.6-1.6-6.4-4.8-6.4-4.8-3.2-1.6-4.8-3.2-6.4-4.8-6.4-4.8-9.6-8-8-14.4 1.6-3.2 1.6-8 1.6-11.2 1.6-11.2 6.4-11.2 81.6-12.8h24c30.4 0 51.2-1.6 67.2-3.2 9.6-1.6 16-3.2 20.8-4.8h3.2c-3.2 0-11.2-3.2-24-4.8-16-3.2-36.8-6.4-65.6-9.6-16-1.6-62.4-6.4-65.6-6.4-38.4-4.8-36.8-3.2-36.8-12.8-1.6-25.6-8-49.6-19.2-72-3.2-8-4.8-8 22.4-30.4 24-20.8 35.2-30.4 49.6-44.8 14.4-14.4 27.2-30.4 38.4-44.8 38.4-56 59.2-116.8 51.2-124.8-3.2 4.8-8 11.2-12.8 19.2 0 0-12.8 22.4-16 28.8-8 12.8-14.4 24-22.4 35.2-9.6 12.8-19.2 24-28.8 35.2-40 44.8-113.6 76.8-128 64-4.8-4.8-9.6-9.6-16-12.8-4.8-3.2-4.8-8-1.6-11.2 0-1.6 1.6-3.2 3.2-4.8 1.6-1.6 8-11.2 9.6-12.8 1.6-1.6 3.2-3.2 3.2-4.8l-3.2 3.2-6.4 6.4-6.4 6.4-4.8 4.8c-1.6 0-1.6 1.6-3.2 1.6-3.2 1.6-4.8 1.6-8 0-9.6-6.4-20.8-11.2-30.4-16-6.4-8-6.4-8-4.8-9.6 1.6-3.2 1.6-3.2 1.6-4.8 0-1.6 1.6-3.2 3.2-6.4 3.2-4.8 3.2-8 4.8-9.6 1.6-4.8 4.8-8 6.4-11.2 1.6-3.2 3.2-4.8 3.2-8 3.2-8 6.4-14.4 8-19.2-3.2 3.2-6.4 8-9.6 14.4-1.6 3.2-3.2 6.4-6.4 9.6-3.2 6.4-14.4 24-14.4 24-1.6 3.2-4.8 6.4-4.8 8l-3.2 3.2c-3.2 3.2-4.8 3.2-9.6 3.2-12.8-3.2-27.2-6.4-41.6-8-9.6 0-9.6-4.8-8-43.2 1.6-22.4 4.8-48 8-70.4 4.8-25.6 6.4-48 6.4-64 0-8-1.6-12.8-3.2-16-3.2 1.6-11.2 38.4-14.4 89.6-1.6 11.2-1.6 22.4-3.2 35.2 0 4.8 0 9.6-1.6 16 0 8-1.6 11.2-1.6 14.4 0 11.2-1.6 17.6-1.6 22.4 0 3.2 0 4.8-1.6 6.4v3.2c-1.6 3.2-1.6 6.4-8 6.4-33.6 1.6-64 9.6-92.8 25.6-8 4.8-8 3.2-27.2-19.2-1.6-1.6-6.4-8-8-9.6l-9.6-9.6c-6.4-8-14.4-14.4-20.8-22.4-9.6-9.6-19.2-17.6-27.2-25.6-46.4-36.8-97.6-59.2-100.8-51.2 1.6 3.2 48 35.2 64 51.2 6.4 6.4 12.8 12.8 19.2 20.8 32 40 62.4 99.2 52.8 108.8-9.6 11.2-19.2 24-27.2 36.8-3.2 4.8-8 6.4-12.8 4.8-3.2-1.6-4.8-3.2-8-4.8l-6.4-6.4c1.6 1.6-4.8-6.4-6.4-8-6.4-8-12.8-12.8-16-14.4h-3.2v9.6c1.6 8 4.8 17.6 9.6 32 1.6 3.2 1.6 4.8 3.2 8s4.8 12.8 4.8 14.4c1.6 4.8 3.2 9.6 4.8 12.8 3.2 9.6 4.8 16 4.8 19.2-1.6 6.4-8 9.6-12.8 6.4-1.6-1.6-3.2-1.6-4.8-4.8-3.2-3.2-6.4-8-11.2-14.4-3.2-4.8-8-11.2-14.4-20.8-1.6-3.2-3.2-6.4-8-12.8-3.2-4.8-6.4-9.6-8-12.8-1.6-3.2-3.2-4.8-4.8-8-12.8-19.2-22.4-33.6-30.4-41.6l-3.2-3.2c4.8 12.8 17.6 40 38.4 72 3.2 4.8 4.8 8 8 12.8 3.2 6.4 49.6 78.4 49.6 81.6 1.6 19.2 4.8 38.4 11.2 56 3.2 9.6-1.6 12.8-33.6 27.2-8 3.2-17.6 8-32 14.4-4.8 1.6-28.8 12.8-36.8 16-3.2 1.6-8 3.2-11.2 4.8-28.8 12.8-48 22.4-62.4 28.8-4.8 3.2-8 4.8-11.2 6.4 4.8 0 11.2-1.6 19.2-3.2 17.6-4.8 40-11.2 72-20.8 3.2-1.6 6.4-1.6 9.6-3.2 8-3.2 36.8-11.2 35.2-11.2 12.8-4.8 22.4-8 30.4-9.6 32-9.6 35.2-11.2 40-4.8 17.6 25.6 46.4 54.4 72 68.8 9.6 6.4 6.4 12.8-8 35.2 3.2-3.2-25.6 38.4-33.6 51.2-3.2 4.8-4.8 8-8 12.8-17.6 30.4-33.6 62.4-43.2 84.8-3.2 6.4-4.8 11.2-6.4 16 14.4-9.6 27.2-24 76.8-84.8z m-176-459.2z m99.2 44.8z m0 0z m328-163.2z m-4.8-3.2zM865.6 176z m-139.2 688z" fill="#1eff00"></path><path d="M508.8 640c-70.4 0-128-57.6-128-128s57.6-128 128-128 128 57.6 128 128-57.6 128-128 128z m0-32c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96z" fill="#1eff00"></path></g></svg>
    </div>
  );
};

export default Logo;
