// we have two concept in context api :- provider consumer

// provider provides someting
// comsumer consumes ............ provider provides what it can consume like variables and all

import React, { useState } from "react";
//context uses state in more centralized manner

import PackageContext from "./context";
//PackageProvider == superman
//now creating a provider

const provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Go to russia",
    agent: 007,
    accept: "Not accepted",
  });
  //return part is actually important in provider and it depends on the context that you are throwing up in line no. 9

  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" });
        },
        //...mission means load all values from mission object and only change one value in it that is accept
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};
//now we have to use this provider