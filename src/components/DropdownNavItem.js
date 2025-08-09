import React from "react";

function DropdownNavItem({ label, items = [] }) {
  if (!items.length) {
    return (
      <li className="nav-item">
        <a className="nav-link" href={`#${label.toLowerCase()}`}>{label}</a>
      </li>
    );
  }

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id={`${label}-dropdown`}
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </a>
      <ul className="dropdown-menu" aria-labelledby={`${label}-dropdown`}>
        {items.map((item, idx) => (
          <li key={idx}>
            <a className="dropdown-item" href={item.href || "#"}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownNavItem;
