import React from 'react';

interface InputGenderProps {
  gender: string;
  setGender: (gender: string) => void;
  className?: string;
}

const InputGender: React.FC<InputGenderProps> = ({ gender, setGender, className }) => {
  return (
    <div>
      <p className='text-white'>Gender</p>
    <select 
      value={gender} 
      onChange={(e) => setGender(e.target.value)} 
      className={className}
    >
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>
    </div>
  );
};

export default InputGender;
