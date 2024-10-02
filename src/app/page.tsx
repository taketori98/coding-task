"use client";

// import styles from "./page.module.css";
import Button from "./components/button";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  name: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) =>
    alert(JSON.stringify(data));
  return (
    <div>
      <h2>Home</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formcontent">
          <label htmlFor="name">氏名: </label>
          <input
            type="text"
            id="name"
            placeholder="Input your Name"
            {...register("name", { required: "名前を入力してください" })}
          />
          {errors.name?.message && (
            <p className="error-message">{errors.name?.message}</p>
          )}
        </div>
        <Button height={30} width={100} buttonstyle="fill" type="submit">
          ボタン
        </Button>
      </form>
    </div>
  );
}
