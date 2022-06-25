import * as React from "react";

interface IMainProps {
  children?: React.ReactNode;
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div>
      <div className="bg-sky-400 h-12 w-full fixed">
        <div className="flex">tester</div>
      </div>
      <div className="pt-12">{props.children}</div>
    </div>
  );
};

export default Main;
