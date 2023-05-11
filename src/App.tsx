import React, { useState, useCallback } from "react";
import "./App.scss";
import Title from "./components/Title/Title";
import SubTitle from "./components/subTitle/SubTitle";
import Counter from "./components/counter/Counter";
import Button from "./components/button/Button";

function App() {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);

  // useCallbackでメモ化

  // React.memoの中では、違う関数だと認識される
  const handleCountUpA = useCallback(() => {
    setCountA((prevCount) => prevCount + 1);
  }, []);

  // 下記だとボタン押下時にボタンも再レンダリングされてしまう
  // const handleCountUpA = useCallback(() => {
  //   setCountA(countA + 1);
  // }, [countA]);

  const handleCountUpB = useCallback(() => {
    setCountB((prevCount) => prevCount + 1);
  }, []);

  console.log("--------------");

  return (
    <div className="App">
      <Title titleText={"#6 useCallback"} />
      <SubTitle subTitleText={"緊急アンケート：あなたはA派？それともB派？"} />
      <div className="itemList">
        <div className="item">
          <Counter counterTitle={"A派"} count={countA} />
          <Button buttonText={"もちろんA派！"} onClick={handleCountUpA} />
        </div>
        <div className="item">
          <Counter counterTitle={"B派"} count={countB} />
          <Button buttonText={"もちろんB派！"} onClick={handleCountUpB} />
        </div>
      </div>
    </div>
  );
}

export default App;
