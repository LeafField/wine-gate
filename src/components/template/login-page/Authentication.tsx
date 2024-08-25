"use client";
import React, { FormEvent, useReducer, useRef, useState } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import Image from "next/image";
import LoginImage from "../../../images/loginImage.jpg";
import { supabase } from "../../../utils/supabase";
import { useRouter } from "next/navigation";
import { useStore } from "../../../store";
import { useQueryClient } from "@tanstack/react-query";

const Authentication = () => {
  const router = useRouter();
  const [register, dispatch] = useReducer((state: boolean) => !state, false);
  const [loading, setLoading] = useState<boolean>(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { setModal } = useStore();
  const queryClient = useQueryClient();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    queryClient.invalidateQueries({ queryKey: ["favoriteUser"] });
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (register) {
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email.toString(),
        password: data.password.toString(),
        options: {
          data: { username: data.username.toString() },
        },
      });

      if (error?.status === 422) {
        alert("パスワードが短すぎます。6文字以上で登録してください。");
        setLoading(false);
      } else if (error) {
        alert("登録に失敗しました。お手数ですが管理者までご連絡ください。");
        setLoading(false);
        throw new Error(error.message);
      }

      if (authData.user?.identities?.length === 0) {
        alert("そのメールアドレスは既に登録されています。");
        setLoading(false);
      } else {
        setModal([
          "ご登録いただいたメールアドレスへ確認メールを送信しました。",
          "メール内のリンクより登録を完了してください。",
        ]);
        router.push("/");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email.toString(),
        password: data.password.toString(),
      });
      if (error) {
        alert(
          "ログインに失敗しました。\nメールアドレスかパスワードが間違っています。",
        );
        setLoading(false);
      } else {
        setModal(["ログインしました"]);
        router.back();
      }
    }
  };

  return (
    <div className="relative h-[clamp(100svh-6rem,100svh-9.24vw,100svh-3.44rem)] overflow-hidden">
      <figure className="absolute -z-10 min-h-screen w-[100vw]">
        <Image
          src={LoginImage}
          alt="沢山の黒ブドウ"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          priority
        />
      </figure>
      <Paper
        className="relative z-auth-paper ml-auto h-full max-w-[600px] bg-white px-6 pt-4"
        radius={0}
      >
        <Title order={2} ta="center" mt="md" className="mb-5 tablet:mb-12">
          {register ? "会員登録" : "ログイン"}
        </Title>

        <form onSubmit={submitHandler}>
          {register && (
            <TextInput
              label="ユーザー名 (投稿記事に表示されます)"
              placeholder="ワイン大好きクラブ会長"
              size="md"
              name="username"
              id="username"
              required
            />
          )}

          <TextInput
            label="メールアドレス"
            placeholder="hello@example.com"
            size="md"
            mt={register ? "md" : ""}
            name="email"
            id="email"
            type="email"
            required
            ref={emailRef}
          />
          <PasswordInput
            label="パスワード"
            placeholder="Your password"
            mt="md"
            size="md"
            name="password"
            id="password"
            type="password"
            required
            ref={passwordRef}
          />
          <Button
            type="submit"
            disabled={loading}
            bg={"blue"}
            fullWidth
            mt="xl"
            size="md"
          >
            {loading ? "...通信中" : register ? "会員登録" : "ログイン"}
          </Button>
        </form>

        <Text ta="center" mt="md">
          {register || "アカウントをお持ちでない方は"}
          <Anchor<"p"> fw={700} onClick={dispatch}>
            {register ? "ログインに戻る" : "こちらから"}
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Authentication;
