import { BaseSyntheticEvent, useEffect, useState } from "react";
import { getListOfAgesOfUsersWith, getListOfItem, getUsers } from "./api/userAPI";
import { AgeCountTable } from "./components/AgeCountTable/AgeCountTable";
import { Header } from "./components/Header/Header";
import { UserTable } from "./components/UserTable/UserTable";
import "./styles/index.css";

export interface IUserInfo {
  username: string;
  age: number;
}

export interface IAgeCount {
  age: number;
  count: number;
}

const App = () => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<IUserInfo[]>();
  const [itemArray, setItemArray] = useState<string[]>();
  const [ageCountArray, setAgeCountArray] = useState<IAgeCount[]>();

  const [selectItem, setSelectItem] = useState("Item");
  const [isAgeCountLoading, setIsAgeCountLoading] = useState(true);

  useEffect(() => {
    setIsDataLoading(true);
    Promise.all([getUsers(), getListOfItem()])
      .then(([users, items]) => {
        setUserInfo(users);
        setItemArray(items);
        setIsDataLoading(false);
      })
      .catch((error) => {
        console.log("Failed to get the data", error);
        setIsDataLoading(false);
      });
  }, []);

  const handleSelectItem = (e: BaseSyntheticEvent) => {
    const item: string = e.target.value;
    setIsAgeCountLoading(true);
    setSelectItem(item);
    getListOfAgesOfUsersWith(item).then((data) => {
      setAgeCountArray(data);
      setIsAgeCountLoading(false);
      console.log(item);
    });
  };

  return (
    <main className="app__container">
      <Header />
      {isDataLoading === true ? (
        <div>
          <h1>Loading data, please wait...</h1>
        </div>
      ) : (
        <>
          <UserTable userInfo={userInfo!} />
          <AgeCountTable
            itemArray={itemArray!}
            selectItem={selectItem}
            handleSelectItem={handleSelectItem}
            ageCountArray={ageCountArray}
            isAgeCountLoading={isAgeCountLoading}
          />
        </>
      )}
    </main>
  );
};

export default App;
