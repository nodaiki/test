import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 仮のログイン処理（バックエンド未接続）
    if (studentId && password) {
      console.log('ログイン成功');
      navigate('/student/top'); // 仮の遷移先
    } else {
      alert('学籍番号とパスワードを入力してください');
    }
  };

  return (
    <div className="login-container">
      <h2>学生ログイン</h2>
      <input
        type="text"
        placeholder="学籍番号"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
};

export default LoginPage;
