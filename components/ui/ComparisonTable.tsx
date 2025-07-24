import React from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ComparisonRow {
  feature: string;
  values: (boolean | string)[];
}

interface ComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({ headers, rows, className = '' }: ComparisonTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
            {headers.map((header, index) => (
              <th key={index} className="text-center py-4 px-4 font-semibold text-gray-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-4 px-4 text-gray-700">{row.feature}</td>
              {row.values.map((value, colIndex) => (
                <td key={colIndex} className="py-4 px-4 text-center">
                  {typeof value === 'boolean' ? (
                    value ? (
                      <CheckIcon className="w-6 h-6 text-green-600 mx-auto" />
                    ) : (
                      <XMarkIcon className="w-6 h-6 text-red-600 mx-auto" />
                    )
                  ) : (
                    <span className="text-gray-700">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}