import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className,
  label,
}) => {
  return (
    <div>
      {label && <p className="text-white mb-2">{label}</p>} {/* Render the label if it exists */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default InputField;
