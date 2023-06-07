import React from 'react';

interface InputGenderProps {
  gender: string;
  setGender: (gender: string) => void;
}

const InputGender: React.FC<InputGenderProps> = ({ gender, setGender }) => {
  return (
    <select value={gender} onChange={(e) => setGender(e.target.value)}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
  );
};

export default InputGender;
