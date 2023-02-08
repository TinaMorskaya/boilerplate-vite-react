import { useAppDispatch, useAppSelector } from "../reduxHooks";
import React, { useState } from "react";
import { decrement, increment, incrementByAmount, selectCount } from "./counterSlice";
import tw from "twin.macro";
import styled from "styled-components";
import { Button } from "antd";
import { InputNumber } from "antd/lib";

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(count);

  return (
    <>
      <h2 css={tw`text-pastel-blue text-xl font-bold`} data-testid="counter-count">
        Count is {count}
      </h2>
      <StyledButton data-testid="counter-increment" onClick={() => dispatch(increment())}>
        Increment
      </StyledButton>
      <StyledButton data-testid="counter-decrement" onClick={() => dispatch(decrement())}>
        Decrement
      </StyledButton>
      <div css={tw`flex gap-x-1`}>
        <InputNumber
          min={0}
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
    </>
  );
};

const StyledButton = styled(Button)`
  ${tw`text-pastel-purple font-semibold`}
`;
