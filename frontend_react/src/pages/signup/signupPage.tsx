import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";

const SignupPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate(); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("パスワードが一致しません。");
            return;
        }

        setError("");
        // ここでAPIリクエストを送信（例: fetchやaxios）
        console.log("登録情報:", { email, password });
    };

    return (
        <>
            <Header title="新規登録" />

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
          新規登録
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
        </div>
      </div>

            <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">メールアドレス</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                                marginBottom: "12px",
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">パスワード</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                                marginBottom: "12px",
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">パスワード（確認）</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "4px",
                                marginBottom: "12px",
                            }}
                        />
                    </div>
                    {error && (
                        <div style={{ color: "red", marginBottom: "12px" }}>
                            {error}
                        </div>
                    )}
                    <div style={{ textAlign: "center" }}>
                        <button type="submit" style={{
                            padding: "10px 20px",
                            backgroundColor: "#1E90FF", 
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}>
                            登録
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignupPage;
