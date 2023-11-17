import React from "react";
import '../style/design.css';

export default function Alert({ colorType, content }) {
  const alertClassName = `py-3 mb-10 fade ${colorType}`;

  return (
    <div className={alertClassName}>
      아이템이 {content}되었습니다.
    </div>
  );
}
