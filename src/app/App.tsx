import React from "react";
import { Counter } from "./features/Counter";
import tw from "twin.macro";

const App = () => (
  <div css={tw`flex h-screen items-center justify-center flex-col gap-y-3`}>
    <h1 css={tw`text-emerald-900 text-6xl`}>Boilerplate</h1>
    <Counter />
  </div>
);

export default App;
