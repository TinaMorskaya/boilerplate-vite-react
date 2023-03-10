import { useAppDispatch, useAppSelector } from "../../reduxHooks";
import React, { useState } from "react";
import { decrement, increment, incrementByAmount, selectCount } from "./counterSlice";
import tw from "twin.macro";
import styled from "styled-components";
import Button from "antd/lib/button";
import InputNumber from "antd/lib/input-number";

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(count);

  return (
    <div css={tw`flex items-center justify-center flex-col gap-y-4`}>
      <h2 css={tw`text-emerald-900 text-xl font-bold`} data-testid="counter-count">
        Count is {count}. Minimum is 0. Maximum is 100.
      </h2>
      <StyledButton disabled={count > 99} data-testid="counter-increment" onClick={() => dispatch(increment())}>
        Increment
      </StyledButton>
      <StyledButton disabled={count < 1} data-testid="counter-decrement" onClick={() => dispatch(decrement())}>
        Decrement
      </StyledButton>
      <div css={tw`flex gap-x-1`}>
        <InputNumber
          min={0}
          max={100}
          addonBefore={<p>Increment by amount:</p>}
          value={inputValue}
          onChange={(value: number | null) => value && setInputValue(value)}
          data-testid="counter-increment-by-amount-input"
        />
        <StyledButton
          data-testid="counter-increment-by-amount-button"
          onClick={() => dispatch(incrementByAmount(inputValue))}
        >
          OK
        </StyledButton>
      </div>
    </div>
  );
};

const StyledButton = styled(Button)`
  ${tw`text-pastel-purple font-semibold`}
`;
