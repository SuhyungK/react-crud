import React from 'react'

export default function InputForm({
  htmlFor,
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
  min=0,
}) {
  return (
    <div className="flex flex-1 flex-col mx-2">
      <label 
        htmlFor={htmlFor} 
        className="text-left"
        style={{ color: "#6c646c", fontSize: "14px"}}>
        {title}
      </label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        className="border-b-2 py-3"
        min={min}
        style={{ 
          backgroundColor: "#dad1c5", 
          borderColor: "#1c2129"
        }}
      />
    </div>
  )
}