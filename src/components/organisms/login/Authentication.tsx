"use client";
import React, { FormEvent, useReducer, useState } from "react";
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
import { UserMetadata } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const Authentication = () => {
  const [session, setSesstion] = useState<UserMetadata | undefined>();
  const router = useRouter();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    if (register) {
      const { data: userData } = await supabase.auth.signUp({
        email: data.email.toString(),
        password: data.password.toString(),
        options: {
          data: { username: data.username.toString() },
        },
      });
      setSesstion(userData?.user?.user_metadata.username);
    } else {
      const { data: userData, error } = await supabase.auth.signInWithPassword({
        email: data.email.toString(),
        password: data.password.toString(),
      });
      if (error) {
        throw new Error(error.message);
      }
      setSesstion(userData?.user?.user_metadata.username);
      router.push("/");
    }
  };

  const [register, dispatch] = useReducer((state: boolean) => !state, false);
  return (
    <div className="relative h-[clamp(100svh-6rem,100svh-9.24vw,100svh-3.44rem)] overflow-hidden">
      <figure className="absolute -z-10 min-h-screen w-[100vw]">
        <Image
          src={LoginImage}
          alt="沢山の黒ブドウ"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </figure>
      <Paper
        className="relative z-10 ml-auto h-full max-w-[600px] bg-white"
        radius={0}
        p={30}
      >
        <Title order={2} ta="center" mt="md" mb={50}>
          {register ? "会員登録" : "ログイン"}
        </Title>

        <form onSubmit={submitHandler}>
          <p>{session && session.toString()}</p>
          {register && (
            <TextInput
              label="ユーザー名 (投稿記事に表示されます)"
              placeholder="ワイン大好きクラブ会長"
              size="md"
              name="username"
              id="username"
            />
          )}

          <TextInput
            label="Emailアドレス"
            placeholder="hello@example.com"
            size="md"
            mt={register ? "md" : ""}
            name="email"
            id="email"
            type="email"
          />
          <PasswordInput
            label="パスワード"
            placeholder="Your password"
            mt="md"
            size="md"
            name="password"
            id="password"
            type="password"
          />
          <Button type="submit" fullWidth mt="xl" size="md">
            {register ? "会員登録" : "ログイン"}
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
