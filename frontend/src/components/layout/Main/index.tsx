import * as React from "react";

interface IMainProps {
  children?: React.ReactNode;
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div>
      <h3>this is layout</h3>
      <div>{props.children}</div>
    </div>
  );
};

export default Main;
