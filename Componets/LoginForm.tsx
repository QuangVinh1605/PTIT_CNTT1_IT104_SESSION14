import React, { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email và mật khẩu không được để trống!");
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("Chưa có tài khoản trong hệ thống!");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.email === email && parsedUser.password === password) {
      alert("Đăng nhập thành công");
    } else {
      alert("Đăng nhập thất bại");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
      <div className="mb-3">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChangeEmail}
          className="w-full border px-2 py-1 rounded"
          placeholder="Nhập email"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Mật khẩu</label>
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          className="w-full border px-2 py-1 rounded"
          placeholder="Nhập mật khẩu"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;
