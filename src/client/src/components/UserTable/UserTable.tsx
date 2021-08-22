import React from "react";
import { IUserInfo } from "../../App";
import "../../styles/header.css";

interface IUserTableProps {
  userInfo: IUserInfo[];
}

export const UserTable: React.FC<IUserTableProps> = ({ userInfo }) => {
  return (
    <section className={"section__container"}>
      <table className={"table__container"}>
        <tbody>
          <tr>
            <th className={"table__header table--left-align"}>Username</th>
            <th className={"table__header table--left-align"}>Age</th>
          </tr>

          {userInfo.map((user) => (
            <tr key={user.username}>
              <td className={"table__data table--left-align"}>{user.username}</td>
              <td className={"table__data table--left-align"}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
