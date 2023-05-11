import React from "react";

type Props = {
  titleText: string;
};

const Title = React.memo(({ titleText }: Props) => {
  console.log("Title");

  return <h2>{titleText}</h2>;
});

export default Title;
