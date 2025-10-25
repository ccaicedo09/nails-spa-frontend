import React from 'react';

const SucursalSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform mb-16" aria-hidden>
      <div className="relative overflow-hidden">
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="bg-gray-300 dark:bg-gray-600 text-transparent px-3 py-1 rounded-full text-sm font-semibold">
            &nbsp;
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 space-y-3">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
        </div>

        <div className="flex justify-between items-center">
          <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SucursalSkeleton;
