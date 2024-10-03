"use client";
import "./main.scss";
import Button from "./components/button";

export default function Home() {
  return (
    <div>
      <div className="container">
        <h3>ホーム</h3>
        <div className="container">
          <Button height="2rem" width="8rem" buttonstyle="fill" target="/form">
            会員登録
          </Button>
        </div>
      </div>
    </div>
  );
}
