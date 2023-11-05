import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-400",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button className={`rounded px-4 py-2 ${className} ${bgColor} ${textColor}`} {...props}>
     {children}
    </button>
  );
}

export default Button;
