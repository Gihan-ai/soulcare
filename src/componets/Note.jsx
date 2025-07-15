import React from "react";
import { MoreVertical } from "lucide-react";

const Note = () => {
  return (
    <div className="bg-blue-400 rounded-xl p-6 text-white mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Note</h3>
        <MoreVertical className="w-5 h-5" />
      </div>
      <p className="text-sm">
        Don't forget to submit your project report by Friday evening.
      </p>
    </div>
  );
};

export default Note;

