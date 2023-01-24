import { useAppDispatch, useAppSelector } from "../reduxHooks";
import React from "react";
import { decrement, increment, selectCount } from "./counterSlice";
import tw from "twin.macro";

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <>
      <div css={tw`text-pastel-purple font-bold`}>
        <button onClick={() => dispatch(increment())}>Increment. Count is {count}</button>
      </div>
      <div css={tw`text-pastel-orange font-semibold`}>
        <button onClick={() => dispatch(decrement())}>Decrement. Count is {count}</button>
      </div>
    </>
  );
};
