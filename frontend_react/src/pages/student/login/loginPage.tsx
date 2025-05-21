import Header from "../../../components/header/header";
import React from "react";
import Bottomtab from "../../../components/bottomtab/bottomtab";


const loginPage: React.FC = () => {
  return (
    <div>
      <div style={{ paddingBottom: '60px' }}>
        <Header title="学生ログイン" />
      </div>
      <Bottomtab />
    </div>
  );
};

export default loginPage;
