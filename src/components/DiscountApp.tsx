import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setSelectedOption, setDiscountCode, setNote } from '../features/appSlice';

const DiscountApp: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { selectedOption, discountCode, note } = useSelector((state: RootState) => state.app);

  const [codeInput, setCodeInput] = useState<string>('');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(e.target.value));
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeInput(e.target.value);
    if (e.target.value.match(/^DISCOUNT2024$/)) {
      dispatch(setDiscountCode(e.target.value));
    } else {
      dispatch(setDiscountCode(''));
    }
  };

  const generateCode = () => {
    const newCode = 'NEWCODE123';
    alert(`Generated Code: ${newCode}`);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(e.target.value));
  };

  return (
    <div className='flex justify-center items-center h-[100vh]'>
    <div className="m-6 p-6 max-w-[970px] w-[970px] bg-[#f0f8ff] rounded-xl shadow-lg space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center sm:text-left text-gray-800 mb-4">Select an Option</h2>
        <div className="space-y-2 text-center sm:text-left">
          {['Option A', 'Option B', 'Option C'].map((option) => (
            <label key={option} className="flex items-center justify-center sm:justify-start space-x-2">
              <input
                type="radio"
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center sm:text-left text-gray-800 mb-4">Enter Discount Code</h2>
        <input
          type="text"
          value={codeInput}
          onChange={handleCodeChange}
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter DISCOUNT2024"
        />
        {discountCode ? (
          <p className="text-green-600 mt-2">Valid discount code!</p>
        ) : codeInput && (
            <p className="text-red-600 mt-2">Invalid discount code!</p>
          )
        }
      </div>
      <button
        onClick={generateCode}
        className="bg-blue-500 sm:w-[300px] w-full hover:bg-blue-600 text-white p-3 rounded transition duration-300 ease-in-out"
      >
        Generate Discount Code
      </button>
      <div>
        <h2 className="text-2xl font-bold text-center sm:text-left text-gray-800 mb-4">Notes</h2>
        <textarea
          value={note}
          onChange={handleNoteChange}
          className="border p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your notes here"
        />
      </div>
    </div>
    </div>
  );
};

export default DiscountApp;

