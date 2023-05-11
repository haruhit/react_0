import React from "react";

type Props = {
  subTitleText: string;
};

const SubTitle = React.memo(({ subTitleText }: Props) => {
  console.log("Subtitle");

  return <h3>{subTitleText}</h3>;
});

export default SubTitle;
