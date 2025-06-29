import React from "react";

type PasswordInputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

export const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange, placeholder }) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        spellCheck={false}
        className="bg-white/10 text-white rounded-md outline-none p-4 w-full mb-4 font-medium"
    />
); 