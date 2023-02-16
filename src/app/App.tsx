import React from "react";
import { Counter } from "./features/counter/Counter";
import tw from "twin.macro";
import { Posts } from "./features/posts/Posts";

const App = () => (
  <div css={tw`flex h-screen items-center justify-start flex-col gap-y-10`}>
    <h1 css={tw`text-emerald-900 text-6xl mt-10`}>Boilerplate</h1>
    <Counter />
    <Posts />
  </div>
);

export default App;
