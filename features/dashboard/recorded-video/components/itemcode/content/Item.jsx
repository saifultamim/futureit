import React from "react";
import { FaLock } from "react-icons/fa";

const ContentItem = ({ lockStatus, icon: Icon, text, onClick, isActive }) => (
  <div
    className={`flex items-center gap-2 cursor-pointer ${
      !lockStatus?.isLocked ? "opacity-100" : "opacity-50"
    }`}
    onClick={onClick}
  >
    <span>
      {!lockStatus?.isLocked ? (
        <Icon className="" />
      ) : (
        <FaLock className="opacity-50" />
      )}
    </span>
    <div className="flex-1 overflow-hidden">
      <p className="text-sm truncate relative top-0.5">{text}</p>
    </div>
  </div>
);

export default ContentItem;
