// import styles from "./page.module.css";
import Button from "./components/button";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <form>
        <div className="formcontent">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Input your Name"
          />
        </div>
        <Button height={30} width={100} buttonstyle="fill" type="submit">
          ボタン
        </Button>
      </form>
    </div>
  );
}
