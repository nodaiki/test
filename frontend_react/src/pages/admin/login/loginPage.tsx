// src/app/admin/login/loginPage.tsx
import Header from "../../../components/header/header";
import "./loginPage.css";

function LoginPage() {
  return (
    <>
      <Header title="管理者ログイン" />
      <div className="login-wrapper">
        <div className="login-container">
          <h1 className="app-title">NakaLab App</h1>
          <h2 className="admin-title">管理者</h2>
          <form className="login-form">
            <label htmlFor="id">ID</label>
            <input type="text" id="id" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">ログイン</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
