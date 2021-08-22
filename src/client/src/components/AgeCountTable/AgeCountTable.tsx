import React, { BaseSyntheticEvent } from "react";
import { IAgeCount } from "../../App";
import "../../styles/header.css";
import "../../styles/table.css";

interface IAgeCountTableProps {
  itemArray: string[];
  selectItem: string;
  handleSelectItem: (e: BaseSyntheticEvent) => void;
  ageCountArray?: IAgeCount[];
  isAgeCountLoading: boolean;
}

export const AgeCountTable: React.FC<IAgeCountTableProps> = ({
  itemArray,
  selectItem,
  handleSelectItem,
  ageCountArray,
  isAgeCountLoading,
}) => {
  return (
    <section className={"section__container"}>
      <header className={"header__container"}>
        <h1>Age Demographic of Users With ___</h1>
      </header>
      <div className="select-item__dropdown">
        <select value={selectItem} onChange={handleSelectItem}>
          <option value="Item" hidden>
            Item
          </option>
          {itemArray.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {isAgeCountLoading === true && selectItem !== "Item" ? (
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      ) : (
        <>
          {ageCountArray && (
            <table className={"table__container"}>
              <tbody>
                <tr>
                  <th className={"table__header table--left-align"}>Age</th>
                  <th className={"table__header table--left-align"}>Count</th>
                </tr>

                {ageCountArray.map((ageCount) => (
                  <tr key={ageCount.age}>
                    <td className={"table__data table--left-align"}>{ageCount.age}</td>
                    <td className={"table__data table--left-align"}>{ageCount.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </section>
  );
};
