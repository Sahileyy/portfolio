import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export function SketchGlobe({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M2.08 12Q3.5 11.59 5.07 12.08" />
      <path d="M18.82 11.89Q20.5 12.11 21.94 12.13" />
      <path d="M11.82 2.19Q11.68 3.5 11.98 4.95" />
      <path d="M12.2 18.99Q11.61 20.5 11.95 22.05" />
      <path d="M11.98 4.58C15.25 5.44 18.76 8.74 19.4 12C18.94 14.75 14.43 18.31 12.5 18.87C8.28 18.14 5.14 15.44 4.71 12.33C4.42 7.21 7.98 4.14 11.73 5.35Q11.58 4.61 11.36 5.11" />
    </svg>
  );
}

export function SketchBrands({ size = 17, className = "text-emerald-600", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M14.44 9.27Q14.08 8.27 13.65 6.65C13.6 4.92 16.09 2.8 17.84 2.63Q18.75 3.39 19.33 3.15C19.74 3.03 19.98 3.27 20.01 3.35Q19.55 4.25 19.66 4.69C20.45 7.94 18.49 9.17 15.42 9.11C13.18 8.57 11.36 10.58 11.59 12.67C12.45 15.05 13.08 15.84 12.77 17.51C12.96 19.13 13.22 20.16 12.03 20.99" />
      <path d="M3.67 9.25C6 8.22 7.83 7.53 9.23 8.75C10.87 9.45 12.41 11.17 11.67 12.62C10.87 14.64 9 14.27 6.86 13.16C4.88 13.12 4.32 11.09 4.48 8.44" />
      <path d="M4.97 21.21Q12 20.35 19.09 21.07" />
    </svg>
  );
}

export function SketchBusinesses({ size = 17, className = "text-blue-600", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M14.48 21Q15.51 18.5 14.88 15.84C15.07 15.62 15.02 14.76 13.99 14.93Q12 15.58 10.06 15.32C9.5 14.88 8.97 15.41 8.92 15.91Q9.25 18.5 9.04 20.71" />
      <path d="M18 10.44C17.06 10.31 16.29 10.18 16.25 10.34C15.62 10.72 13.87 11.23 12.56 10.18C12.39 9.99 11.54 9.69 11.39 10.45C9.97 11.2 9.1 11.25 7.95 10.63C7.17 9.71 6.44 9.95 6.22 10.55C5.51 11.56 4.25 10.42 2.99 10.53C2.08 9.97 1.17 8.71 2.95 7.18Q3.41 4.64 5.25 2.8C5.21 1.79 6.17 1.72 6.97 1.93Q12 1.01 17.46 2.14C17.53 1.78 18.09 2.2 18.6 2.91Q19.89 5.11 22.01 6.88C22.1 7.75 21.84 9.31 20.61 10.74C20 11.24 18.52 11.43 18.04 10.52" />
      <path d="M4.37 11.43Q4.74 14.98 4.36 19.25C3.77 20.17 4.74 21.17 5.74 20.53Q12 20.96 17.53 20.72C18.87 20.44 19.51 20.18 20.27 18.99Q20.52 14.98 19.49 11.44" />
    </svg>
  );
}

export function SketchDesignDev({ size = 17, className = "text-indigo-600", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M14.66 17.81Q9.43 15.91 3.91 15.18" />
      <path d="M18.31 2.73C19.06 1.87 19.36 1.6 20.52 2.2C21.14 2.09 21.46 2.78 21.64 4.08C21.9 4.14 22.26 4.83 21.56 5.59Q19.8 8.06 17.35 9.6C17.08 9.91 17.17 10.15 17.5 10.33Q17.65 11 18.29 11.32C19.65 12.16 19.29 13.57 18.19 14.43Q17.9 15.24 17.21 15.67C17.21 15.85 16.86 15.93 16.57 15.52Q12.82 11.18 8.25 7.36C8.08 7 8.01 6.76 8.39 6.55Q8.5 5.84 9.11 5.98C10.41 4.34 11.43 4.71 12.57 5.71Q13.39 5.95 13.72 6.78C13.7 6.79 14.1 6.78 14.22 6.8Q16.96 5.22 18.61 1.88" />
      <path d="M9.45 7.64C7.6 10.76 4.89 11.85 2.31 11.88C2.13 11.9 2.16 12.07 2.1 12.24C2.12 12.44 2.16 12.7 2.13 12.73Q5.3 17.6 9.49 21.68C9.88 22.09 10.45 21.83 10.38 21.79C12.98 20.51 15.73 16.55 16.1 14.94" />
    </svg>
  );
}

export function SketchCreate({ size = 17, className = "text-rose-500", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M15.35 11.9Q10.17 16.54 5.52 20.99C4.99 22.8 3.59 22.43 2.75 20.9C1.51 20.97 1.37 19.65 2.73 18.68Q8.17 14.54 11.89 8.47" />
      <path d="M18.21 14.93Q20.12 13.12 21.87 10.92" />
      <path d="M21.47 11.27Q20.23 10.86 19.94 9.89C19.41 9.11 19.05 8.71 19.01 8.18Q19.03 8 19.08 7.83C18.91 6.94 18.77 6.8 18.73 6.5Q17.81 5.36 17.34 5.02C15.53 3.19 13.46 2.75 12.84 3.54Q10.76 3.51 9.16 2.98Q9.61 3.64 10.24 4.44C11.87 5.71 11.67 6.25 11.84 8.69Q12.01 9.24 12.06 10.01Q13.02 10.98 14.28 11.98Q14.59 12.41 15.38 12.14C15.58 11.69 15.84 11.71 16.52 12.55Q17.62 13.46 18.46 14.33" />
    </svg>
  );
}

export function SketchMade({ size = 17, className = "text-[#D29062]", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M10.43 17.26Q12.04 17.96 12.92 18.7C13.86 19.86 14.53 19.77 15.97 19.09C15.98 18.44 16.87 17.02 16.41 15.93" />
      <path d="M13.44 14.53Q15.35 15.15 16.39 17.03C17.88 17.67 18.99 17.79 19.35 16.25C20.34 15.72 20.6 14.54 19.82 13.34Q17.2 11.92 15.4 9.82C14.62 8.15 12.45 8.57 11.15 9.77Q10.86 9.98 10.59 10.54C9.94 11.77 8.94 11.66 7.57 9.91C6.86 9.28 6.34 8.85 7.42 7.75Q8.65 5.84 10.7 4.2C12.45 2.91 14.91 2.54 17.33 3.82Q17.68 3.84 17.89 4.07C18.54 4.37 19.06 4.46 19.4 4.12Q20.22 4.61 21.04 3.81" />
      <path d="M21.12 2.93Q22.44 8.41 22.13 13.87Q21 13.79 20.04 14.11" />
      <path d="M2.61 3.07Q0.91 8.36 2.42 13.68Q4.37 18.13 9 20.06C8.82 21.41 10.78 20.8 11.31 20.72C12.35 19.32 12.22 18.3 11.49 17.19" />
      <path d="M2.98 4.03Q7 3.59 11 3.91" />
    </svg>
  );
}

export function SketchFreelance({ size = 17, className = "text-amber-700", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 12Q12.01 12 12 12" />
      <path d="M16.43 5.55Q16.05 5 16.21 3.93C16.14 3.55 14.89 2.43 14.48 1.78Q12 1.94 9.42 1.9C8.74 1.71 7.51 3.29 7.54 3.99Q8 5 8.25 6.16" />
      <path d="M22.27 13.29C16.6 16.76 6.74 16.49 2.15 13.11" />
      <path d="M4.25 6.54Q12 7.47 19.48 5.56C20.67 5.6 22.41 6.58 22.14 7.7Q23.25 13 22.3 18.13C22.22 19.54 21.56 20.34 20.34 20.5Q12 20.14 4.33 20.36C2.54 20.07 2.12 19.24 2.36 18.31Q3.6 13 1.63 8.01C1.78 6.73 2.42 5.91 3.95 6.44Q3.77 5.78 5.21 5.57" />
    </svg>
  );
}

export function SketchWebsites({ size = 17, className = "text-cyan-600", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12.5 1.67C17.04 1.89 21.76 7.1 21.76 11.49C21.97 17.81 18.15 22.43 11.99 21.55C5.75 22.55 1.91 17.57 1.42 12.03C2.44 7.47 8.02 2.08 11.55 1.77Q11.78 1.54 12.5 1.42" />
      <path d="M12.45 2.18C5.23 7.7 5.86 16.43 11.59 21.5C18.28 16.33 17.74 8.24 12.18 1.97" />
      <path d="M1.83 12.15Q12 12.63 22.01 11.81" />
    </svg>
  );
}

export function SketchMenu({ size = 22, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M4.07 4.88Q12 5.42 20.11 5.14" />
      <path d="M4.14 11.88Q12 11.33 19.84 12.17" />
      <path d="M4.18 18.82Q12 18.75 20.03 19.02" />
    </svg>
  );
}

export function SketchChevron({ size = 16, className = "", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M19 8.5C19 8.5 14.856 15.5 12 15.5C9.145 15.5 5 8.5 5 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SketchBot({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M11.97 7.88Q11.5 6 11.87 4.13Q10 3.87 8.17 4.08" />
      <path d="M6.13 8.05Q12 6.43 18.26 7.62C18.64 8.17 20.21 8.56 19.71 10.27Q20.55 14 20.43 18.18C19.91 19.3 18.96 19.71 18.43 19.97Q12 20.78 6.1 19.83C5.01 19.88 4.45 19.98 3.74 17.93Q4.77 14 3.53 9.7C4.45 8.82 4.79 7.89 6.41 8.01Q6.09 8.1 6.02 8.23" />
      <path d="M1.88 13.99Q3 14.09 3.9 14.06" />
      <path d="M20.05 13.85Q21 13.73 22.07 13.83" />
      <path d="M15.08 13.07Q15.09 14 14.96 15.09" />
      <path d="M9 12.88Q9.15 14 8.93 14.94" />
    </svg>
  );
}

export function SketchCamera({ size = 18, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M14.5 4.5Q12 4.2 9.5 4.5C8.8 4.6 8 5.7 7.5 6.4L6 7C4.5 7.1 3 7.8 2.5 9.2C2.1 12 2.3 16.5 2.6 19.1C3 20.3 4.2 20.7 5.5 20.6Q12 20.8 18.5 20.6C19.8 20.6 21 20 21.4 18.8C21.8 16 21.9 12 21.5 9.3C21 8 19.5 7.2 18 7L16.5 6.4C16 5.6 15.2 4.6 14.5 4.5Z" />
      <path d="M12 10.2C10.2 10.3 8.8 11.7 8.8 13.5C8.8 15.3 10.2 16.8 12 16.8C13.8 16.8 15.2 15.3 15.2 13.5C15.2 11.7 13.8 10.3 12 10.2Z" />
      <path d="M17.5 10H17.6" />
    </svg>
  );
}
