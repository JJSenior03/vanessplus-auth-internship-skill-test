import React from "react";

interface DateOfBirthProps {
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  setBirthDay: (day: string) => void;
  setBirthMonth: (month: string) => void;
  setBirthYear: (year: string) => void;
  className?: string;
}

const DateOfBirth: React.FC<DateOfBirthProps> = ({
  birthDay,
  birthMonth,
  birthYear,
  setBirthDay,
  setBirthMonth,
  setBirthYear,
  className,
}) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2023 - i);

  return (
    <div>
      <p className="text-white">Date of Birth</p>
      <div className="flex">
        <select
          value={birthDay}
          onChange={(e) => setBirthDay(e.target.value)}
          className="mb-4 p-2 w-1/3 border-2 border-gray-200 rounded"
        >
          {days.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select
          value={birthMonth}
          onChange={(e) => setBirthMonth(e.target.value)}
          className="mb-4 p-2 w-1/3 border-2 border-gray-200 rounded mx-2"
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
          className="mb-4 p-2 w-1/3 border-2 border-gray-200 rounded"
        >
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateOfBirth;
