import './App.css';
import React from 'react';
import { useState, useEffect } from "react";
import DlApi from './components/dl_api';
import FakeApi from './components/fakeapi';
import TableShow from './components/tableshow';
import Table from './components/table';
function App() {
  
  return (
    <div>
      {/* <FakeApi/> */}
      {/* <TableShow/> */}
      {/* <DlApi/> */}
      <Table/>
    </div>
  );
}

export default App;
