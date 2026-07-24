export default function WaveDivider() {
  return (
    <div className="relative w-full overflow-hidden leading-none -mb-1">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative w-full h-[60px] sm:h-[80px] lg:h-[120px]"
      >
        <path
          d="M0,40 C240,120 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z"
          fill="#1e3a5f"
          opacity="0.06"
        />
        <path
          d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
          fill="#1e3a5f"
          opacity="0.12"
        />
        <path
          d="M0,80 C320,30 640,110 960,80 C1280,50 1440,90 1440,80 L1440,120 L0,120 Z"
          fill="#1e3a5f"
          opacity="0.05"
        />
      </svg>
    </div>
  );
}