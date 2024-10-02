"use client";
import "./style.css";
import Button from "./components/button";

export default function Home() {
  return (
    <div>
      <h2>ホーム</h2>
      <Button height={30} width={100} buttonstyle="fill" target="/form">
        登録する
      </Button>
    </div>
  );
}
