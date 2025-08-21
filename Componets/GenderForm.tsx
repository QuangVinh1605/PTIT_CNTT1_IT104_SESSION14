import React from "react";

export default function GenderForm() {
  return (
    <div>
      <h2>Gender Form</h2>
      <label>
        <input type="radio" name="gender" value="male" /> Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" /> Female
      </label>
    </div>
  );
}
