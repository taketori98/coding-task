"use client";

import "../style.scss";
import "../components/button.scss";
import Button from "../components/button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface FormInput {
  name: string;
  email: string;
}

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
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
            buttonstyle="outline"
            type="reset"
            disabled={isResetting}
            onClick={async () => {
              if (confirm("リセットしますか？")) {
                setIsResetting(true);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const form = document.querySelector("form");
                if (form) {
                  form.reset();
                  alert("リセットしました");
                  setIsResetting(false);
                }
              }
            }}
          >
            {isResetting ? <div className="loading"></div> : "リセット"}
          </Button>
          <Button
            height={30}
            width={100}
            buttonstyle="fill"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <div className="loading"></div>
            ) : (
              <>
                <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
                <span className="material-symbols-outlined icon">send</span>
                登録する
              </>
            )}
          </Button>
        </div>
        <Button
          height={30}
          width={120}
          buttonstyle="none"
          type="button"
          target="../"
        >
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <span className="material-symbols-outlined icon">home</span>
          トップに戻る
        </Button>
      </form>
    </div>
  );
}
