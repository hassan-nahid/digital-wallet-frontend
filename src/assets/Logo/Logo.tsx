interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 34 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      className={className}
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="10" fill="#12B76A" />
      <path
        d="M8 12l5.5 12 4.5-9 4.5 9L28 12"
        fill="none"
        stroke="#04170E"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;