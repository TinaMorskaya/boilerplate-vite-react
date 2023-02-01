import { useAppDispatch, useAppSelector } from "../reduxHooks";
import React from "react";
import { decrement, increment, selectCount } from "./counterSlice";
import tw from "twin.macro";
import styled from "styled-components";

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <>
      <div css={tw`text-pastel-purple font-bold`}>
        <StyledButton data-testid="counter-increment" onClick={() => dispatch(increment())}>
          Increment. Count is {count}
        </StyledButton>
      </div>
      <div css={tw`text-pastel-orange font-semibold`}>
        <button onClick={() => dispatch(decrement())}>Decrement. Count is {count}</button>
      </div>
    </>
  );
};

const StyledButton = styled("button")`
  ${tw`bg-blue-100`}
`;
