import React, {FC, memo} from 'react';
import './App.css';
import {Nav} from "./components/nav/Nav";
import {Body} from "./components/body/Body";


export const App: FC = memo(() => {
  return (
      <>
          <Nav/>
          <Body/>
      </>
  )
})


