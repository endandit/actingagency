export function PoppetjeAn({ size = 120, className = "" }: { size?: number; className?: string }) {
  const h = Math.round(size * 1.6);
  return (
    <svg width={size} height={h} viewBox="0 0 100 160" fill="none" className={className}>
      {/* Hair (behind head) */}
      <ellipse cx="50" cy="32" rx="22" ry="20" fill="#6B3A2A" />
      <path d="M28 28 Q18 14 24 6" stroke="#6B3A2A" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 28 Q82 14 76 6" stroke="#6B3A2A" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 14 Q56 6 62 10" stroke="#6B3A2A" strokeWidth="4" strokeLinecap="round" />
      {/* Hair bow */}
      <circle cx="64" cy="18" r="6" fill="#F9D71C" />
      <circle cx="64" cy="18" r="3" fill="#E8A020" />
      {/* Head */}
      <ellipse cx="50" cy="33" rx="18" ry="18" fill="#F5C08A" />
      {/* Eyes */}
      <circle cx="43" cy="30" r="2.5" fill="#3A1A0A" />
      <circle cx="57" cy="30" r="2.5" fill="#3A1A0A" />
      <circle cx="44" cy="29" r="1" fill="white" />
      <circle cx="58" cy="29" r="1" fill="white" />
      {/* Smile */}
      <path d="M43 38 Q50 44 57 38" stroke="#3A1A0A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Left arm (raised) */}
      <path d="M32 55 L10 36" stroke="#C0392B" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="9" cy="35" rx="6" ry="6" fill="#F5C08A" />
      {/* Right arm (raised) */}
      <path d="M68 55 L90 36" stroke="#C0392B" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="91" cy="35" rx="6" ry="6" fill="#F5C08A" />
      {/* Body / red top */}
      <rect x="30" y="48" width="40" height="24" rx="8" fill="#C0392B" />
      {/* Skirt */}
      <path d="M24 70 L76 70 L82 100 L18 100 Z" fill="#E91E8C" />
      <path d="M24 70 L76 70 L80 78 L20 78 Z" fill="#D01070" opacity="0.4" />
      {/* Left leg */}
      <rect x="26" y="100" width="16" height="38" rx="6" fill="#F9D71C" />
      <rect x="26" y="110" width="16" height="7" fill="#E8920A" opacity="0.7" />
      <rect x="26" y="124" width="16" height="7" fill="#E8920A" opacity="0.7" />
      {/* Right leg */}
      <rect x="58" y="100" width="16" height="38" rx="6" fill="#F9D71C" />
      <rect x="58" y="110" width="16" height="7" fill="#E8920A" opacity="0.7" />
      <rect x="58" y="124" width="16" height="7" fill="#E8920A" opacity="0.7" />
      {/* Left shoe */}
      <ellipse cx="34" cy="140" rx="12" ry="5" fill="#C0392B" />
      {/* Right shoe */}
      <ellipse cx="66" cy="140" rx="12" ry="5" fill="#C0392B" />
    </svg>
  );
}

export function PoppetjeLies({ size = 120, className = "" }: { size?: number; className?: string }) {
  const h = Math.round(size * 1.6);
  return (
    <svg width={size} height={h} viewBox="0 0 100 160" fill="none" className={className}>
      {/* Hat */}
      <g transform="rotate(-12 50 18)">
        <rect x="18" y="10" width="54" height="18" rx="7" fill="#E91E8C" />
        <rect x="10" y="24" width="70" height="6" rx="3" fill="#D01070" />
      </g>
      {/* Hair (behind head) */}
      <ellipse cx="50" cy="38" rx="21" ry="18" fill="#6B3A2A" />
      <path d="M30 36 Q20 48 22 56" stroke="#6B3A2A" strokeWidth="5" strokeLinecap="round" />
      <path d="M70 36 Q80 48 78 56" stroke="#6B3A2A" strokeWidth="5" strokeLinecap="round" />
      {/* Head */}
      <ellipse cx="50" cy="38" rx="17" ry="17" fill="#F5C08A" />
      {/* Eyes */}
      <circle cx="43" cy="35" r="2.5" fill="#3A1A0A" />
      <circle cx="57" cy="35" r="2.5" fill="#3A1A0A" />
      <circle cx="44" cy="34" r="1" fill="white" />
      <circle cx="58" cy="34" r="1" fill="white" />
      {/* Smile */}
      <path d="M43 43 Q50 49 57 43" stroke="#3A1A0A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Left arm (raised) */}
      <path d="M32 62 L10 44" stroke="#C0392B" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="9" cy="43" rx="6" ry="6" fill="#F5C08A" />
      {/* Right arm (raised) */}
      <path d="M68 62 L90 44" stroke="#C0392B" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="91" cy="43" rx="6" ry="6" fill="#F5C08A" />
      {/* Coat body */}
      <rect x="28" y="53" width="44" height="58" rx="8" fill="#C0392B" />
      {/* Coat lapels */}
      <path d="M28 53 L42 70 L50 58 L58 70 L72 53" fill="#8B1A10" opacity="0.5" />
      {/* Coat buttons */}
      <circle cx="50" cy="76" r="3.5" fill="#F9D71C" />
      <circle cx="50" cy="88" r="3.5" fill="#F9D71C" />
      <circle cx="50" cy="100" r="3.5" fill="#F9D71C" />
      {/* Legs */}
      <rect x="28" y="111" width="16" height="30" rx="5" fill="#F5C08A" />
      <rect x="56" y="111" width="16" height="30" rx="5" fill="#F5C08A" />
      {/* Boots */}
      <rect x="22" y="128" width="22" height="16" rx="6" fill="#F9D71C" />
      <rect x="56" y="128" width="22" height="16" rx="6" fill="#F9D71C" />
      <ellipse cx="33" cy="145" rx="12" ry="4" fill="#E8A020" opacity="0.5" />
      <ellipse cx="67" cy="145" rx="12" ry="4" fill="#E8A020" opacity="0.5" />
    </svg>
  );
}
