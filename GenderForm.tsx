import React, { useState } from "react";

const GenderForm = () => {
  const [gender, setGender] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  return (
    <form>
      <h3>Chọn giới tính</h3>
      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={gender === "Nam"}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={gender === "Nữ"}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={gender === "Khác"}
          onChange={handleChange}
        />
        Khác
      </label>
      <p>Bạn chọn: {gender || "Chưa chọn"}</p>
    </form>
  );
};

export default GenderForm;
