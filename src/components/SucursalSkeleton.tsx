import React from 'react';

const SucursalSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden" aria-hidden>
      <div className="relative overflow-hidden" style={{height: 240}}>
        <div className="w-full h-full bg-gray-300 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-7 bg-gray-400 rounded w-3/4 animate-pulse" />
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3">
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse" />
          </div>
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="h-4 bg-gray-300 rounded w-2/3 animate-pulse" />
          </div>
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse" />
          </div>
          <div className="p-3 bg-gray-100 rounded-xl">
            <div className="h-4 bg-gray-300 rounded w-3/5 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SucursalSkeleton;