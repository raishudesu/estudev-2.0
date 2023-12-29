import { Settings } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center min-h-[80vh]">
      <Settings size={30} className="animate-spin text-yellow-500" />
    </div>
  );
};

export default Loading;
