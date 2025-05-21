
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";

const RoginPage: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ログイン情報:", { id, password });
  };

  return (
    <>
      <Header title="学生ログイン" />
    
      {/* 上部ボタン */}
       <div
    style={{
      position: "relative",
      height: "60px",
      marginTop: "10px",
      marginBottom: "10px",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        fontSize: "30px",
        lineHeight: "60px",
        margin: 0,
      }}
    >
      NakaLab App
    </h1>

    <div
      style={{
        position: "absolute",
        top: 0,
        right: "40px",
      }}
    >
      <button
        onClick={() => navigate("/admin/login")}
        style={{
          margin: "0 5px",
          padding: "8px 16px",
          fontSize: "14px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        管理者ログイン
      </button>
      <button
        onClick={() => navigate("/signup")}
        style={{
          margin: "0 5px",
          padding: "8px 16px",
          fontSize: "14px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        新規登録
      </button>
    </div>
  </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
        <div style={{ textAlign: "center" }}>
          {/* <h1 style={{ marginBottom: "5px", fontSize: "30px" }}>NakaLab App</h1> */}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "10px", textAlign: "left" }}>
              <label htmlFor="id" style={{ fontSize: "12px" }}>ID</label><br />
              <input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={{
                  width: "250px",
                  height: "30px",
                  fontSize: "14px",
                  padding: "4px",
                  marginTop: "4px",
                  border: "1px solid #ccc"
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label htmlFor="password" style={{ fontSize: "12px" }}>Password</label><br />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "250px",
                  height: "30px",
                  fontSize: "14px",
                  padding: "4px",
                  marginTop: "4px",
                  border: "1px solid #ccc"
                }}
                required
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#1E90FF",
                  border: "none",
                  color: "#FFFFFF",
                  padding: "10px 30px",
                  fontSize: "14px",
                  borderRadius: "4px",
                  cursor: "pointer"
                }}
              >
                ログイン
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RoginPage;
