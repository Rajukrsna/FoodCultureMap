// src/components/MobileWarningOverlay.tsx
import { useEffect, useState } from "react";
import { X, Monitor } from "lucide-react"; // ✅ Lucide icons

export default function MobileWarningOverlay() {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile || dismissed) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 text-white z-50 flex items-center justify-center p-6">
      <div className="bg-white text-black rounded-lg p-6 max-w-md w-full text-center shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5 text-gray-700 hover:text-red-500" />
        </button>

        {/* Header with Icon */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <Monitor className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-800">
            Desktop Recommended
          </h2>
        </div>

        <p className="text-gray-700">
          Please use a desktop or tablet for the best experience on FoodMapCulture
        </p>
      </div>
    </div>
  );
}
