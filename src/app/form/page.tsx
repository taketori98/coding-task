"use client";

import "../style.css";
import Button from "../components/button";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormInput {
  name: string;
  email: string;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) =>
    alert(JSON.stringify(data));
  return (
    <div>
      <h2>会員登録</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="formcontent">
          <div>
            <label htmlFor="name">氏名: </label>
            <input
              type="text"
              id="name"
              placeholder="例）日本太郎"
              {...register("name", { required: "名前を入力してください" })}
            />
            <p className="error-message">{errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="agree">メールアドレス: </label>
            <input
              type="email"
              id="email"
              placeholder="例）example@mail.com"
              {...register("email", {
                required: "メールアドレスは必須です。",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "有効なメールアドレスを入力してください。",
                },
              })}
            />
            <p className="error-message">{errors.email?.message}</p>
          </div>
        </div>
        <div>
          <Button
            height={30}
            width={100}
            buttonstyle="fill"
            type="reset"
            onClick={() => {
              if (confirm("リセットしますか？")) {
                const form = document.querySelector("form");
                if (form) {
                  form.reset();
                  alert("リセットしました");
                }
              }
            }}
          >
            リセット
          </Button>
          <Button height={30} width={100} buttonstyle="fill" type="submit">
            登録する
          </Button>
        </div>
        <Button
          height={30}
          width={100}
          buttonstyle="fill"
          type="button"
          target="../"
        >
          トップに戻る
        </Button>
      </form>
    </div>
  );
}
