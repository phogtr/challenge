import React from "react";
import "../../styles/header.css";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={"header__container"}>
      <h1>All Users</h1>
      <h3>Users and their age</h3>
    </header>
  );
};
