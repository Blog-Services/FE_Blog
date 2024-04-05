import { useState } from "react";
import axios from "axios";
import styles from "./login.module.scss";

const Login = () => {
  const [input, setInput] = useState({
    userId,
    password,
  });

  const { userId, password } = input;

  const checkInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div>
      로그인
      <input
        name="userId"
        onChange={checkInput}
        placeholder="아이디를 입력하세요."
      ></input>
      <input
        name="password"
        onChange={checkInput}
        placeholder="비밀번호를 입력하세요."
      ></input>
      <button>로그인하기</button>
    </div>
  );
};

export default Login;
