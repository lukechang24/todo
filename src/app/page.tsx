'use client'
import Head from "next/head"
import React from "react"
import { S } from "./style"
import TodoList from "../Components/TodoList"

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
      </Head>
      <S.Title>Todo List</S.Title>
      <TodoList />
    </div>
  );
}
