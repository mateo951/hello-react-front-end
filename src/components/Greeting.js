import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from ".././redux/reducers/greeting";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greeting);
  console.log(greeting);
  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  return <h1>{ greeting }</h1>;
};

export default Greeting;