import React from 'react';
import "./Style.scss";

export default function SectionHead({title}) {
  return (
    <div className="section-head">
      <span>{title}</span>
    </div>
  );
}
