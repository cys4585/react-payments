import { Meta, StoryObj } from "@storybook/react";

import CardOwnerName from "../components/payment/CardEnrollForm/CardOwnerName";
import { useState } from "react";

const meta: Meta<typeof CardOwnerName> = {
  component: CardOwnerName,
};

export default meta;
type Story = StoryObj<typeof CardOwnerName>;

export const Default: Story = {
  args: {
    cardOwnerName: "",
  },
  render: ({ ...args }) => {
    const [cardInformation, setCardInformation] = useState({
      cardOwnerName: args.cardOwnerName,
    });

    const inputHandler = (inputValue: string, inputId: string) => {
      setCardInformation((prev) => ({
        ...prev,
        [inputId]: inputValue,
      }));
    };

    return (
      <CardOwnerName
        {...args}
        cardOwnerName={cardInformation.cardOwnerName}
        onChange={inputHandler}
      />
    );
  },
};
