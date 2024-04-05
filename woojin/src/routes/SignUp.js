import { useState } from "react";
import axios from "axios";
import styles from "./signup.module.scss";

const SignUp = () => {
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

  const signupClick = async () => {
    try {
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      회원가입
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
      <button onClick={() => signupClick()}>회원가입하기</button>
    </div>
  );
};
p;
export default SignUp;
