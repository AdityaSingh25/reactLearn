// we have two concept in context api :- provider consumer

// provider provides someting
// comsumer consumes ............ provider provides what it can consume like variables and all

import React, { useState } from "react";
//context uses state in more centralized manner

import PackageContext from "./context";
//PackageProvider == superman

//now creating a provider
const Provider = (props) => {
  //what information you are gonna provide
  // goes in this
  //**
  const [mission, setMission] = useState({
    mname: "Go to russia",
    agent: "007",
    accept: "Not accepted",
  });

  //return part is actually important in provider and it depends on the context that you are throwing up in line no. 9
  return (
    <PackageContext.Provider // making a provider and packageContext act as a wrapper just as div
      // and provider k saath value aata hai

      //now we want this information (**) accessed by any one who is using our provider
      //we provide information by this value which takes two curly braces
      value={{
        data: mission, //we passed all the information & not only mission we can pass some custom methods as well   DATA IS ACCESSING THE ENTIRE MISSION OBJECT
        isMissionAccepted: () => {
          setMission({ ...mission, accept: "ACCEPTED" }); // ...mission means load all the values which are in mission object and change accept value to "ACCEPTED"
        },
        //...mission means load all values from mission object and only change one value in it that is accept
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};
//now we have to use this provider
export default Provider;
