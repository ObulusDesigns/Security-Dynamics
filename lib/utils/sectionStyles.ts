// Consistent section styling utilities

export const darkSectionClasses = "bg-slate-900 relative overflow-hidden";

export const darkSectionPatternStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '60px 60px'
};

// Helper function to generate dark section with pattern
export function getDarkSectionClasses(additionalClasses = "") {
  return `${darkSectionClasses} ${additionalClasses}`;
}

// Text color classes for dark backgrounds
export const darkSectionTextColors = {
  heading: "text-white",
  subheading: "text-gray-100",
  body: "text-gray-300",
  link: "text-red-400 hover:text-red-300",
  icon: "text-red-400"
};

// Common section padding
export const sectionPadding = "py-16 md:py-24 lg:py-32";