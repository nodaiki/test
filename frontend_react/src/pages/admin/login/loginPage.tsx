import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";

const RoginPage: React.FC = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ログイン情報:", { id, password });
  };

  const navigate = useNavigate();

  return (
    <>
      <Header title="管理者ログイン" />

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
          管理者ログイン
        </h1>

        <div
          style={{
            position: "absolute",
            top: 0,
            right: "40px",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              margin: "0 5px",
              padding: "8px 16px",
              fontSize: "14px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            学生ログイン
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

      <div style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}>
        <div style={{ textAlign: "center" }}>
          {/* <h1 style={{ marginBottom: "5px", fontSize: "30px" }}>管理者ログイン</h1> */}
          {/* <h2 style={{ marginBottom: "5px", fontSize: "24px" }}>NakaLab App</h2> */}
          {/* <p style={{ marginBottom: "30px", fontSize: "18px" }}>管理者</p> */}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "10px", textAlign: "left" }}>
              <label htmlFor="id" >ID</label><br />
              <input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                style={{
                  width: "400px",
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
              <label htmlFor="password" >Password</label><br />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "400px",
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
                  backgroundColor: "#1E90FF", // 空色に近い青
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
