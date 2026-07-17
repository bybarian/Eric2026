import React, { useState, useEffect } from "react";

interface AttractionIllustrationProps {
  id: string;
  className?: string;
}

const IMAGE_MAPPING: Record<string, string> = {
  "18-1": "18-1_taoyuan_airport.png",
  "18-2": "18-2_silks_palace.png",
  "18-3": "18-3_palace_museum.png",
  "18-4": "18-4_ningxia_feast.png",
  "19-1": "19-1_yehliu_geopark.png",
  "19-2": "19-2_badouzi_railbike.png",
  "19-3": "19-3_gold_museum.png",
  "19-4": "19-4_buyan_pavilion.png",
  "19-5": "19-5_taipei_101.png",
  "20-1": "20-1_lungshan_temple.png",
  "20-2": "20-2_cks_memorial.png",
  "20-3": "20-3_din_tai_fung.png",
  "20-4": "20-4_cingjing_transfer.png",
  "20-5": "20-5_old_england.png"
};

export default function AttractionIllustration({ id, className = "w-full h-full" }: AttractionIllustrationProps) {
  const [imgError, setImgError] = useState(false);

  // Reset error state on ID change
  useEffect(() => {
    setImgError(false);
  }, [id]);

  const imageName = IMAGE_MAPPING[id];

  if (imageName && !imgError) {
    return (
      <img
        src={`images/${imageName}`}
        alt={`Attraction ${id}`}
        className={`${className} object-cover rounded-full`}
        onError={() => setImgError(true)}
      />
    );
  }

  // Common helper to clip SVG to a perfect circle badge
  const renderWithCircleClip = (content: React.ReactNode) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="circleClip">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
        
        {/* Gradients */}
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="60%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        
        <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="40%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        
        <linearGradient id="sunsetGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="40%" stopColor="#f97316" />
          <stop offset="80%" stopColor="#facc15" />
          <stop offset="100%" stopColor="#fef08a" />
        </linearGradient>

        <linearGradient id="t101Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="40%" stopColor="#311042" />
          <stop offset="70%" stopColor="#631b53" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>

        <linearGradient id="mountainGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a7f3d0" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#eab308" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>

        <linearGradient id="woodGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>

        <linearGradient id="cabbageGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#166534" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#f0fdf4" />
        </linearGradient>

        <linearGradient id="stoneSteps" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>
      
      <g clipPath="url(#circleClip)">
        {content}
      </g>
    </svg>
  );

  // Soft, fluffy white clouds
  const renderSoftClouds = () => (
    <>
      <path d="M 12,24 C 12,20 15,18 18,18 H 26 C 29,18 31,20 31,24 C 31,28 29,30 26,30 H 18 C 15,30 12,28 12,24 Z" fill="#ffffff" opacity="0.9" />
      <path d="M 68,18 C 68,14 71,12 75,12 H 84 C 88,12 90,14 90,18 C 90,22 88,24 84,24 H 75 C 71,24 68,22 68,18 Z" fill="#ffffff" opacity="0.85" />
      <path d="M 45,15 C 45,11 48,9 52,9 H 60 C 64,9 66,11 66,15 C 66,19 64,21 60,21 H 52 C 48,21 45,19 45,15 Z" fill="#ffffff" opacity="0.75" />
    </>
  );

  switch (id) {
    // ==========================================
    // Day 1: 7/18
    // ==========================================

    case "18-1":
      // 1. Taoyuan International Airport (Sleek plane taking off, terminal in background)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Terminal building & Control tower in distance */}
          <rect x="5" y="45" width="55" height="18" fill="#e2e8f0" rx="1" />
          <rect x="10" y="49" width="45" height="4" fill="#94a3b8" />
          {/* Blue glass facade panels */}
          <rect x="8" y="55" width="8" height="8" fill="#38bdf8" />
          <rect x="18" y="55" width="8" height="8" fill="#38bdf8" />
          <rect x="28" y="55" width="8" height="8" fill="#38bdf8" />
          <rect x="38" y="55" width="8" height="8" fill="#38bdf8" />
          <rect x="48" y="55" width="8" height="8" fill="#38bdf8" />
          
          {/* Control Tower on the right */}
          <rect x="72" y="30" width="8" height="35" fill="#f1f5f9" />
          <polygon points="68,32 84,32 80,26 72,26" fill="#475569" />
          <rect x="73" y="27" width="6" height="3" fill="#0ea5e9" />
          <circle cx="76" cy="24" r="1.5" fill="#ef4444" />

          {/* Runway and grassy field in perspective */}
          <polygon points="0,100 100,100 70,62 30,62" fill="#475569" />
          <polygon points="0,100 30,100 30,62 0,62" fill="#22c55e" opacity="0.8" />
          <polygon points="70,100 100,100 100,62 70,62" fill="#22c55e" opacity="0.8" />
          
          {/* Runway markings */}
          <line x1="50" y1="100" x2="50" y2="62" stroke="#ffffff" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="32" y1="62" x2="68" y2="62" stroke="#facc15" strokeWidth="1.5" />

          {/* Modern airplane taking off */}
          <g transform="translate(15, -10)">
            {/* Contrail trail */}
            <path d="M 5,60 Q 25,50 48,32" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
            {/* Back Wing */}
            <path d="M 45,28 L 32,8 L 38,8 L 48,25 Z" fill="#cbd5e1" />
            {/* Fuselage */}
            <ellipse cx="52" cy="31" rx="22" ry="6.5" fill="#ffffff" transform="rotate(-18 52 31)" />
            {/* Windshield */}
            <path d="M 66,23 Q 71,25 69,28 Z" fill="#1e293b" />
            {/* Teal stripes */}
            <path d="M 38,36 Q 48,32 60,26" stroke="#0ea5e9" strokeWidth="1.5" fill="none" />
            {/* Main wing */}
            <path d="M 48,32 L 56,54 L 63,52 L 53,30 Z" fill="#0284c7" />
            {/* Tail wing */}
            <path d="M 34,32 L 25,12 L 32,12 L 39,28 Z" fill="#0ea5e9" />
          </g>
        </>
      );

    case "18-2":
      // 2. Silks Palace (故宮晶華 - Fine dining with palace background)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="#fdf4e3" />
          
          {/* Palace interior lattice background */}
          <path d="M 5,0 L 5,100 M 95,0 L 95,100 M 0,15 L 100,15 M 0,85 L 100,85" stroke="#fbcfe8" strokeWidth="0.5" opacity="0.3" />
          <rect x="20" y="5" width="60" height="32" fill="#fbcfe8" opacity="0.1" rx="2" />

          {/* Traditional Palace Roof in background */}
          <g transform="translate(18, 5)">
            <rect x="15" y="10" width="34" height="15" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.8" />
            <path d="M 10,11 C 15,11 18,8 20,6 L 32,4 L 44,6 C 46,8 49,11 54,11 L 50,7 L 14,7 Z" fill="#0ea5e9" />
            <rect x="18" y="15" width="28" height="2" fill="#ef4444" />
            <line x1="22" y1="17" x2="22" y2="25" stroke="#94a3b8" strokeWidth="1" />
            <line x1="32" y1="17" x2="32" y2="25" stroke="#94a3b8" strokeWidth="1" />
            <line x1="42" y1="17" x2="42" y2="25" stroke="#94a3b8" strokeWidth="1" />
          </g>

          {/* Table Setting */}
          <ellipse cx="50" cy="85" rx="46" ry="24" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <ellipse cx="50" cy="85" rx="42" ry="20" fill="#f8fafc" />

          {/* Glass of Red Wine on left */}
          <g transform="translate(15, 62)">
            <line x1="10" y1="12" x2="10" y2="26" stroke="#94a3b8" strokeWidth="1.5" />
            <ellipse cx="10" cy="26" rx="5" ry="2" fill="#cbd5e1" />
            <path d="M 5,12 C 5,20 15,20 15,12 Z" fill="rgba(255,255,255,0.7)" stroke="#94a3b8" strokeWidth="0.8" />
            <path d="M 6,15 C 6,19 14,19 14,15 Z" fill="#991b1b" />
          </g>

          {/* Bowl of steaming Imperial Soup on right */}
          <g transform="translate(56, 68)">
            <path d="M 2,12 C 2,24 26,24 26,12 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <ellipse cx="14" cy="12" rx="11" ry="3.5" fill="#f59e0b" />
            <circle cx="10" cy="12" r="2.5" fill="#b45309" />
            {/* Steam */}
            <path d="M 10,6 Q 12,0 9,-6" fill="none" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
            <path d="M 18,5 Q 16,-1 20,-7" fill="none" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Middle Gourmet Dish Plate */}
          <g transform="translate(32, 70)">
            <ellipse cx="18" cy="12" rx="12" ry="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <ellipse cx="18" cy="12" rx="9" ry="4" fill="#f1f5f9" />
            {/* Gourmet beef cube/meat shaped stone mimic */}
            <rect x="13" y="8" width="10" height="7" rx="1.5" fill="#7c2d12" />
            <rect x="13" y="8" width="10" height="3" rx="1" fill="#f59e0b" opacity="0.7" />
            <circle cx="15" cy="13" r="1" fill="#16a34a" />
          </g>
        </>
      );

    case "18-3":
      // 3. National Palace Museum / Jadeite Cabbage (翠玉白菜 on Stand with text sign)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="#f0fdf4" />
          {/* Faint scroll background texture */}
          <circle cx="50" cy="50" r="46" fill="none" stroke="#bbf7d0" strokeWidth="0.8" strokeDasharray="4,4" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="#bbf7d0" strokeWidth="0.5" />

          {/* Ornate mahogany wooden stand */}
          <g transform="translate(26, 64)">
            {/* Detailed curly legs */}
            <path d="M 4,14 Q 2,24 8,24 Q 12,24 14,14" fill="#431407" />
            <path d="M 44,14 Q 46,24 40,24 Q 36,24 34,14" fill="#431407" />
            <rect x="6" y="8" width="36" height="8" rx="2" fill="url(#woodGrad)" />
            <rect x="2" y="4" width="44" height="5" rx="1.5" fill="#431407" />
          </g>

          {/* Jadeite Cabbage */}
          <g transform="translate(24, 12)">
            {/* White stalk base */}
            <path d="M 20,56 C 14,48 18,36 22,34 C 28,34 34,48 28,56 Z" fill="#fdfdfd" />
            <path d="M 23,56 C 18,48 21,38 24,36 C 27,38 31,48 27,56 Z" fill="#f5f5f5" />
            <path d="M 13,44 Q 18,38 22,54" stroke="#e2e8f0" strokeWidth="1" fill="none" />
            <path d="M 35,44 Q 30,38 26,54" stroke="#e2e8f0" strokeWidth="1" fill="none" />

            {/* Ruffled emerald green leaves at the top */}
            <path d="M 22,34 C 14,24 12,12 20,8 C 26,12 28,24 24,34 Z" fill="url(#cabbageGrad)" />
            <path d="M 26,34 C 34,24 36,12 28,8 C 22,12 20,24 24,34 Z" fill="#15803d" />
            <path d="M 24,34 C 18,22 28,6 24,4 C 20,6 20,22 24,34 Z" fill="#166534" />
            
            {/* Outer curling side leaves */}
            <path d="M 15,38 C 8,30 14,16 20,18 C 22,26 22,34 15,38 Z" fill="#22c55e" opacity="0.9" />
            <path d="M 33,38 C 40,30 34,16 28,18 C 26,26 26,34 33,38 Z" fill="#15803d" opacity="0.95" />

            {/* Veins on leaves */}
            <path d="M 20,8 Q 21,20 23,34" stroke="#86efac" strokeWidth="0.8" fill="none" />
            <path d="M 28,8 Q 26,20 25,34" stroke="#86efac" strokeWidth="0.8" fill="none" />
            
            {/* Famous little red/brown locust insect on leaf peak */}
            <g transform="translate(18, 5)">
              <ellipse cx="2" cy="2" rx="1.5" ry="0.8" fill="#b45309" />
              <line x1="2" y1="2" x2="0" y2="0" stroke="#b45309" strokeWidth="0.5" />
              <line x1="2" y1="2" x2="4" y2="0" stroke="#b45309" strokeWidth="0.5" />
            </g>
          </g>

          {/* Wooden Label sign "翠玉白菜" */}
          <g transform="translate(73, 50)">
            <rect x="0" y="0" width="16" height="30" rx="1" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
            {/* Vertical Chinese text layout */}
            <text x="8" y="8" fontSize="4.5" fontWeight="bold" fill="#7c2d12" textAnchor="middle" fontFamily="sans-serif">翠</text>
            <text x="8" y="14" fontSize="4.5" fontWeight="bold" fill="#7c2d12" textAnchor="middle" fontFamily="sans-serif">玉</text>
            <text x="8" y="20" fontSize="4.5" fontWeight="bold" fill="#15803d" textAnchor="middle" fontFamily="sans-serif">白</text>
            <text x="8" y="26" fontSize="4.5" fontWeight="bold" fill="#15803d" textAnchor="middle" fontFamily="sans-serif">菜</text>
          </g>
        </>
      );

    case "18-4":
      // 4. Ningxia Night Market Chien Sui Feast (Street view with lanterns and rich table)
      return renderWithCircleClip(
        <>
          {/* Deep night sky */}
          <rect width="100" height="100" fill="#0f172a" />
          
          {/* Soft market stall light background */}
          <path d="M 0,40 Q 50,30 100,40 L 100,65 L 0,65 Z" fill="#f59e0b" opacity="0.15" />

          {/* Glowing Red & Yellow lanterns in perspective */}
          <g>
            <line x1="5" y1="12" x2="45" y2="28" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" />
            <line x1="95" y1="12" x2="55" y2="28" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" />
            
            {/* Left side lanterns */}
            <ellipse cx="10" cy="18" rx="3.5" ry="5" fill="#f43f5e" />
            <circle cx="10" cy="18" r="1.5" fill="#fef08a" />
            <ellipse cx="22" cy="22" rx="3" ry="4.2" fill="#ef4444" />
            <ellipse cx="34" cy="25" rx="2.5" ry="3.5" fill="#f59e0b" />

            {/* Right side lanterns */}
            <ellipse cx="90" cy="18" rx="3.5" ry="5" fill="#f43f5e" />
            <circle cx="90" cy="18" r="1.5" fill="#fef08a" />
            <ellipse cx="78" cy="22" rx="3" ry="4.2" fill="#ef4444" />
            <ellipse cx="66" cy="25" rx="2.5" ry="3.5" fill="#f59e0b" />
          </g>

          {/* Hanging street banner "寧夏夜市" & "千歲宴" */}
          <g transform="translate(24, 6)">
            <rect x="0" y="0" width="52" height="18" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1.2" rx="1.5" />
            <text x="26" y="10" fontSize="5" fontWeight="bold" fill="#fef08a" textAnchor="middle" letterSpacing="1" fontFamily="sans-serif">寧夏夜市</text>
            <text x="26" y="15" fontSize="4.2" fill="#ef4444" fontWeight="bold" textAnchor="middle" letterSpacing="2" fontFamily="sans-serif">千歲宴</text>
          </g>

          {/* Round table overflowing with street gourmet eats */}
          <ellipse cx="50" cy="85" rx="48" ry="24" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
          <ellipse cx="50" cy="84" rx="44" ry="20" fill="#fed7aa" />

          {/* Plates of snacks */}
          {/* 1. Oyster Omelet (蚵仔煎) - green/yellow/red */}
          <g transform="translate(18, 74)">
            <ellipse cx="10" cy="6" rx="9" ry="4.5" fill="#ffffff" />
            <ellipse cx="10" cy="6" rx="7.5" ry="3.5" fill="#eab308" />
            <circle cx="7" cy="5" r="2.5" fill="#22c55e" /> {/* veg */}
            <circle cx="12" cy="7" r="2" fill="#ea580c" /> {/* red sauce */}
          </g>

          {/* 2. Braised Pork Rice (滷肉飯) */}
          <g transform="translate(40, 78)">
            <ellipse cx="10" cy="6" rx="8" ry="4" fill="#ffffff" />
            <path d="M 4,6 C 4,12 16,12 16,6 Z" fill="#ffffff" />
            <ellipse cx="10" cy="5" rx="6.5" ry="2.5" fill="#ffffff" />
            <ellipse cx="10" cy="5" rx="5.5" ry="1.8" fill="#78350f" /> {/* pork gravy */}
            <circle cx="12" cy="4" r="1.2" fill="#f59e0b" /> {/* pickle */}
          </g>

          {/* 3. Fragrant Soup Bowl */}
          <g transform="translate(64, 73)">
            <ellipse cx="9" cy="5" rx="8" ry="4" fill="#ef4444" />
            <ellipse cx="9" cy="4" rx="7" ry="3" fill="#ffffff" />
            <ellipse cx="9" cy="4" rx="5.5" ry="2" fill="#facc15" />
            <circle cx="7" cy="3.5" r="1.5" fill="#475569" />
          </g>

          {/* Back row of dishes */}
          <ellipse cx="32" cy="72" rx="6" ry="3" fill="#ffffff" />
          <circle cx="32" cy="71.5" r="2" fill="#ea580c" />
          
          <ellipse cx="68" cy="71" rx="6" ry="3" fill="#ffffff" />
          <circle cx="68" cy="70.5" r="2" fill="#16a34a" />

          {/* Aromatic Steam rising */}
          <path d="M 32,65 Q 34,58 31,52" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          <path d="M 50,66 Q 48,59 52,53" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          <path d="M 68,64 Q 70,57 67,51" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
        </>
      );

    // ==========================================
    // Day 2: 7/19
    // ==========================================

    case "19-1":
      // 5. Yehliu Geopark (Queen's Head with text sign, coastal background)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Beautiful ocean with small waves */}
          <path d="M -10,52 Q 25,48 50,52 T 110,52 L 110,105 L -10,105 Z" fill="url(#seaGrad)" />
          
          {/* Distant soft sky-blue mountains */}
          <path d="M 72,52 Q 86,47 100,52 L 100,60 L 72,60 Z" fill="#7dd3fc" opacity="0.5" />

          {/* Layered Golden Sandstone Terrain */}
          <path d="M -10,68 Q 20,62 60,68 T 110,66 L 110,105 L -10,105 Z" fill="#dfb384" />
          <path d="M -10,78 Q 30,72 70,78 T 110,75 L 110,105 L -10,105 Z" fill="#c49563" />
          <path d="M -10,88 Q 40,82 80,88 T 110,84 L 110,105 L -10,105 Z" fill="#aa7c4e" />

          {/* Queen's Head rock profile */}
          <g transform="translate(4, -2)">
            {/* Shadow */}
            <path d="M 46,92 C 50,86 58,82 66,84 C 74,86 78,92 82,105 Z" fill="#7c2d12" opacity="0.15" />
            
            {/* Elegant slender neck */}
            <path d="M 45,95 C 47,82 54,72 58,62 C 60,58 58,54 61,48 C 64,44 70,46 74,51 C 74,61 68,82 65,95 Z" fill="url(#woodGrad)" />
            
            {/* Weathered honeycomb crown hair */}
            <ellipse cx="58" cy="38" rx="10" ry="9" fill="url(#woodGrad)" />
            <ellipse cx="62" cy="32" rx="11" ry="10" fill="url(#woodGrad)" />
            <path d="M 52,42 C 54,26 75,18 82,30 C 85,36 78,44 74,48 Z" fill="url(#woodGrad)" />
            
            {/* Nose and chin profile */}
            <path d="M 78,34 L 86,37 C 86,38 83,40 79,40 Z" fill="url(#woodGrad)" />
            <path d="M 76,40 L 81,42 L 74,44 Z" fill="url(#woodGrad)" />

            {/* Weathered porous honeycombs (characteristic dots) */}
            <circle cx="58" cy="30" r="1.5" fill="#1e0801" opacity="0.5" />
            <circle cx="64" cy="26" r="1.8" fill="#1e0801" opacity="0.5" />
            <circle cx="72" cy="29" r="1.5" fill="#1e0801" opacity="0.5" />
            <circle cx="55" cy="36" r="1.2" fill="#1e0801" opacity="0.5" />
            <circle cx="61" cy="38" r="1.6" fill="#1e0801" opacity="0.5" />
            <circle cx="68" cy="34" r="1.2" fill="#1e0801" opacity="0.5" />
            <circle cx="66" cy="41" r="1.4" fill="#1e0801" opacity="0.5" />
          </g>

          {/* Wooden sign "野柳女王頭 YEHLIU GEOPARK" */}
          <g transform="translate(64, 76)">
            <rect x="0" y="0" width="32" height="15" rx="1.5" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
            <text x="16" y="6" fontSize="3.5" fontWeight="bold" fill="#7c2d12" textAnchor="middle" fontFamily="sans-serif">野柳女王頭</text>
            <text x="16" y="11" fontSize="2.2" fontWeight="bold" fill="#0ea5e9" textAnchor="middle" fontFamily="sans-serif">YEHLIU GEOPARK</text>
          </g>
        </>
      );

    case "19-2":
      // 6. Badouzi Rail Bike (Cute pufferfish bike cart pedaling next to sea)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Sparkling sea */}
          <path d="M -10,50 L 110,50 L 110,105 L -10,105 Z" fill="url(#seaGrad)" />
          <path d="M -10,56 Q 25,52 60,57 T 110,56" stroke="#e0f2fe" strokeWidth="1" fill="none" opacity="0.4" />

          {/* Coastal green hills on the right */}
          <path d="M 55,105 L 110,105 L 110,42 Q 80,44 65,58 Z" fill="url(#hillGrad)" />

          {/* Railway Tracks running along coast */}
          <polygon points="-10,102 110,80 110,88 -10,105" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
          {/* Rails */}
          <line x1="-10" y1="102" x2="110" y2="80" stroke="#475569" strokeWidth="2.5" />
          <line x1="-10" y1="105" x2="110" y2="83" stroke="#475569" strokeWidth="2.5" />
          {/* Wooden ties */}
          <line x1="10" y1="100" x2="8" y2="105" stroke="#451a03" strokeWidth="1.5" />
          <line x1="30" y1="96" x2="28" y2="101" stroke="#451a03" strokeWidth="1.5" />
          <line x1="50" y1="92" x2="48" y2="97" stroke="#451a03" strokeWidth="1.5" />
          <line x1="70" y1="88" x2="68" y2="93" stroke="#451a03" strokeWidth="1.5" />
          <line x1="90" y1="84" x2="88" y2="89" stroke="#451a03" strokeWidth="1.5" />

          {/* Cute pufferfish rail-bike cart */}
          <g transform="translate(18, 40) rotate(-4 18 40)">
            {/* Metal chassis */}
            <rect x="5" y="32" width="36" height="4" fill="#64748b" />
            {/* Bike wheels */}
            <circle cx="12" cy="34" r="5" fill="#1e293b" />
            <circle cx="12" cy="34" r="2" fill="#cbd5e1" />
            <circle cx="32" cy="34" r="5" fill="#1e293b" />
            <circle cx="32" cy="34" r="2" fill="#cbd5e1" />

            {/* Pufferfish Cabin (Cute rounded dome) */}
            <path d="M 4,26 C 4,10 40,10 40,26 Z" fill="#38bdf8" />
            <path d="M 8,26 C 8,15 36,15 36,26 Z" fill="#fef08a" opacity="0.9" />
            
            {/* Striped Canopy Roof */}
            <path d="M 4,10 C 12,0 32,0 40,10 Z" fill="#ef4444" />
            <path d="M 10,6 L 14,11 M 20,4 L 20,11 M 30,6 L 26,11" stroke="#ffffff" strokeWidth="2.5" />

            {/* Giant cartoon eye */}
            <circle cx="32" cy="18" r="3.5" fill="#ffffff" />
            <circle cx="33" cy="18" r="1.5" fill="#1e293b" />
            
            {/* Happy blushing smile */}
            <path d="M 36,22 Q 34,24 32,22" fill="none" stroke="#1e293b" strokeWidth="1" strokeLinecap="round" />
            <circle cx="28" cy="21" r="1" fill="#f43f5e" />

            {/* Little side fin */}
            <path d="M 18,24 Q 14,29 20,29 Z" fill="#38bdf8" />
          </g>
        </>
      );

    case "19-3":
      // 7. Jinguashi Gold Museum (Mine tunnel, gold mine cart, gold bars)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Lush Jiufen green mountain slopes */}
          <path d="M -10,60 L 40,32 L 85,58 L 110,45 L 110,105 L -10,105 Z" fill="url(#hillGrad)" />
          
          {/* Traditional wooden mining structural beam framing */}
          <g transform="translate(10, 32)">
            {/* Wooden tunnel framing */}
            <rect x="10" y="10" width="8" height="38" fill="url(#woodGrad)" />
            <rect x="52" y="10" width="8" height="38" fill="url(#woodGrad)" />
            <rect x="10" y="6" width="50" height="8" fill="url(#woodGrad)" />
            
            {/* Board sign: "金瓜石" and "黃金博物館" */}
            <rect x="20" y="14" width="30" height="15" fill="#2d1003" stroke="#fef08a" strokeWidth="1" rx="1" />
            <text x="35" y="21" fontSize="4" fontWeight="bold" fill="#fef08a" textAnchor="middle" fontFamily="sans-serif">金瓜石</text>
            <text x="35" y="26" fontSize="2.8" fontWeight="bold" fill="#fef08a" textAnchor="middle" fontFamily="sans-serif">黃金博物館</text>
          </g>

          {/* Iron mine tracks and vintage black cart filled with gold */}
          <g transform="translate(18, 62)">
            {/* Tracks */}
            <line x1="-10" y1="22" x2="60" y2="22" stroke="#475569" strokeWidth="2" />
            <line x1="-5" y1="22" x2="-5" y2="25" stroke="#78350f" strokeWidth="1.5" />
            <line x1="15" y1="22" x2="15" y2="25" stroke="#78350f" strokeWidth="1.5" />
            <line x1="35" y1="22" x2="35" y2="25" stroke="#78350f" strokeWidth="1.5" />

            {/* Iron Cart */}
            <rect x="4" y="6" width="38" height="14" fill="#1e293b" rx="2" />
            <circle cx="12" cy="21" r="3.5" fill="#334155" stroke="#0f172a" strokeWidth="1" />
            <circle cx="34" cy="21" r="3.5" fill="#334155" stroke="#0f172a" strokeWidth="1" />

            {/* Sparkling pile of golden ore chunks */}
            <path d="M 6,6 C 10,-4 20,-6 24,-2 C 28,-6 36,-2 40,6 Z" fill="url(#goldGrad)" />
            <polygon points="12,-1 15,2 11,3" fill="#ffffff" /> {/* sparkle */}
            <polygon points="30,-3 32,0 28,1" fill="#ffffff" /> {/* sparkle */}
          </g>

          {/* Two heavy shiny solid Gold Bars in the foreground */}
          <g transform="translate(56, 75)">
            {/* Gold Bar 1 (Leaning) */}
            <polygon points="4,10 18,3 32,8 18,15" fill="url(#goldGrad)" stroke="#b45309" strokeWidth="0.5" />
            <polygon points="18,15 32,8 28,15 14,22" fill="#ca8a04" stroke="#b45309" strokeWidth="0.5" />
            
            {/* Gold Bar 2 (Flat below) */}
            <polygon points="-8,18 6,11 20,16 6,23" fill="url(#goldGrad)" stroke="#b45309" strokeWidth="0.5" />
            <polygon points="6,23 20,16 16,22 2,29" fill="#a16207" stroke="#b45309" strokeWidth="0.5" />

            {/* Golden glints */}
            <line x1="18" y1="3" x2="20" y2="1" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="6" y1="11" x2="8" y2="9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </>
      );

    case "19-4":
      // 8. Buyan Pavilion (不厭亭 - Glorious sunset orange mountain view with traditional pavilion)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#sunsetGrad)" />
          
          {/* Big glowing white/yellow setting sun */}
          <circle cx="35" cy="46" r="11" fill="#ffffff" />
          <circle cx="35" cy="46" r="14" fill="#fef08a" opacity="0.3" />

          {/* Distant soft purple-grey ridge silhouettes */}
          <path d="M -10,55 Q 20,44 48,56 T 110,52 L 110,105 L -10,105 Z" fill="#631b53" opacity="0.4" />
          <path d="M -10,62 Q 25,54 65,64 T 110,58 L 110,105 L -10,105 Z" fill="#4d103d" opacity="0.6" />

          {/* Grassy ridge and road leading to pavilion */}
          <path d="M -10,75 Q 35,68 70,78 L 110,105 L -10,105 Z" fill="#78350f" />
          <path d="M -10,74 Q 35,67 68,77" stroke="#fbbf24" strokeWidth="2.5" fill="none" /> {/* Scenic road line */}

          {/* Traditional Chinese Pavilion sitting on cliff ridge */}
          <g transform="translate(48, 38)">
            {/* Foundation deck */}
            <rect x="6" y="25" width="32" height="4" fill="#475569" rx="1" />
            <rect x="8" y="29" width="28" height="10" fill="#334155" />

            {/* Red Pillars */}
            <rect x="10" y="14" width="3" height="12" fill="#ef4444" />
            <rect x="18" y="14" width="3" height="12" fill="#ef4444" />
            <rect x="26" y="14" width="3" height="12" fill="#ef4444" />
            <rect x="31" y="14" width="3" height="12" fill="#ef4444" />

            {/* Sweeping black swallowtail roof */}
            <path d="M 2,14 Q 22,14 22,4 L 42,14 L 38,10 Q 22,4 6,10 Z" fill="#1e293b" />
            <path d="M 6,10 L 22,5 L 38,10 L 35,7 L 22,3 L 9,7 Z" fill="#ea580c" />
            
            {/* Bench/Railing */}
            <rect x="9" y="22" width="26" height="3" fill="#b91c1c" />
          </g>

          {/* Golden Pampas Grass details */}
          <path d="M 5,85 Q 8,72 14,75" fill="none" stroke="#fef08a" strokeWidth="1" />
          <path d="M 12,90 Q 16,78 20,82" fill="none" stroke="#fef08a" strokeWidth="1" />
          <path d="M 22,86 Q 24,75 28,78" fill="none" stroke="#fef08a" strokeWidth="1" />
        </>
      );

    case "19-5":
      // 9. Taipei 101 Skyline (Evening lavender sky, skyscrapers, glowing green Taipei 101)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#t101Sky)" />
          
          {/* Faint distant purple mountains */}
          <path d="M -10,65 Q 35,52 75,62 T 110,60 L 110,105 L -10,105 Z" fill="#1e1b4b" opacity="0.5" />

          {/* City Skyline Silhouette buildings */}
          <rect x="5" y="58" width="12" height="30" fill="#312e81" />
          <rect x="14" y="64" width="10" height="24" fill="#1e1b4b" />
          
          <rect x="76" y="55" width="14" height="35" fill="#312e81" />
          <rect x="68" y="62" width="10" height="28" fill="#1e1b4b" />
          <rect x="86" y="66" width="12" height="22" fill="#1e1b4b" />

          {/* Glowing window dots on skyline */}
          <circle cx="10" cy="65" r="0.8" fill="#fef08a" />
          <circle cx="10" cy="72" r="0.8" fill="#fef08a" />
          <circle cx="80" cy="62" r="0.8" fill="#fef08a" />
          <circle cx="84" cy="70" r="0.8" fill="#fef08a" />

          {/* Lush Green treetops in foreground */}
          <ellipse cx="20" cy="94" rx="28" ry="12" fill="#047857" />
          <ellipse cx="80" cy="95" rx="32" ry="14" fill="#065f46" />
          <ellipse cx="50" cy="98" rx="26" ry="10" fill="#0f766e" />

          {/* THE MAJESTIC TAIPEI 101 TOWER */}
          <g transform="translate(42, 14)">
            {/* Spire at top */}
            <line x1="8" y1="2" x2="8" y2="12" stroke="#22d3ee" strokeWidth="1.2" />
            <circle cx="8" cy="2" r="1.5" fill="#ffffff" />
            
            {/* Spire base */}
            <polygon points="5,12 11,12 9,18 7,18" fill="#0284c7" />

            {/* Section 1 (Top tier) */}
            <polygon points="4,18 12,18 14,26 2,26" fill="#0ea5e9" stroke="#22d3ee" strokeWidth="0.8" />
            {/* Section 2 */}
            <polygon points="3,26 13,26 15,34 1,34" fill="#0ea5e9" stroke="#22d3ee" strokeWidth="0.8" />
            {/* Section 3 */}
            <polygon points="2,34 14,34 16,42 0,42" fill="#0284c7" stroke="#22d3ee" strokeWidth="0.8" />
            {/* Section 4 */}
            <polygon points="1,42 15,42 17,50 -1,50" fill="#0284c7" stroke="#22d3ee" strokeWidth="0.8" />
            {/* Section 5 */}
            <polygon points="0,50 16,50 18,58 -2,58" fill="#0369a1" stroke="#22d3ee" strokeWidth="0.8" />
            {/* Section 6 (Bottom base) */}
            <rect x="-1" y="58" width="18" height="24" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" />

            {/* Glowing circular medallion ornament on Tier 4 */}
            <circle cx="8" cy="46" r="1.5" fill="#fde047" />

            {/* Upward spotlight beams from 101 sides */}
            <polygon points="8,18 -15,0 31,0" fill="#e0f2fe" opacity="0.12" />
          </g>
        </>
      );

    // ==========================================
    // Day 3: 7/20
    // ==========================================

    case "20-1":
      // 10. Mengjia Lungshan Temple (Red swallowtail roofs, dragon pillars)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Intricate swallowtail roof curves of Lungshan Temple */}
          <g transform="translate(6, 26)">
            {/* Base walls */}
            <rect x="15" y="28" width="58" height="26" fill="#b91c1c" stroke="#7c1d1d" strokeWidth="1" />
            <rect x="22" y="32" width="44" height="22" fill="#7f1d1d" />

            {/* Golden entrance door */}
            <rect x="38" y="36" width="12" height="18" fill="#ea580c" />
            <line x1="44" y1="36" x2="44" y2="54" stroke="#78350f" strokeWidth="1" />

            {/* Carved stone Dragon Pillars in front of building */}
            <g transform="translate(20, 26)">
              <rect x="0" y="0" width="4" height="28" fill="url(#stoneSteps)" />
              {/* Wrapped gold dragon helix mimic */}
              <path d="M 0,4 Q 4,8 0,12 Q 4,16 0,20" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
            </g>
            <g transform="translate(64, 26)">
              <rect x="0" y="0" width="4" height="28" fill="url(#stoneSteps)" />
              <path d="M 0,4 Q 4,8 0,12 Q 4,16 0,20" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
            </g>

            {/* Sweeping swallowtail curved roof (Double tier) */}
            {/* Lower roof */}
            <path d="M 8,28 Q 44,28 44,18 L 80,28 L 74,22 Q 44,12 14,22 Z" fill="#ef4444" />
            {/* Top main sweeping roof */}
            <path d="M 12,18 C 18,18 24,12 28,10 L 44,8 L 60,10 C 64,12 70,18 76,18 L 70,13 Q 44,6 18,13 Z" fill="#b91c1c" />
            <path d="M 18,13 L 44,10 L 70,13 L 66,9 L 44,6 L 22,9 Z" fill="#eab308" opacity="0.95" />

            {/* Dragon sculpture on peak ridge */}
            <circle cx="44" cy="3" r="1.8" fill="#eab308" />
            <path d="M 40,5 Q 44,1 48,5" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          </g>

          {/* Courtyard stone ground */}
          <path d="M -10,80 L 110,80 L 110,105 L -10,105 Z" fill="#94a3b8" />
          <line x1="-10" y1="86" x2="110" y2="86" stroke="#cbd5e1" strokeWidth="1.2" />
          <line x1="-10" y1="92" x2="110" y2="92" stroke="#cbd5e1" strokeWidth="1.2" />
        </>
      );

    case "20-2":
      // 11. Chiang Kai-shek Memorial Hall (Blue octagonal roof, white facade, red carpet)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Manicured round green bushes at bottom sides */}
          <path d="M -10,75 L 110,75 L 110,105 L -10,105 Z" fill="#e2e8f0" />
          <circle cx="12" cy="85" r="16" fill="#15803d" />
          <circle cx="88" cy="85" r="16" fill="#16a34a" />

          {/* White Hall structure */}
          <g transform="translate(18, 14)">
            {/* White marble walls in perspective */}
            <polygon points="12,62 52,62 48,34 16,34" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
            
            {/* Center arched entrance gate door */}
            <path d="M 27,62 L 27,48 A 5,5 0 0,1 37,48 L 37,62 Z" fill="#1e293b" />
            <rect x="30" y="52" width="4" height="10" fill="#991b1b" />

            {/* Double-tier octagonal blue tile roof */}
            {/* Lower roof tier */}
            <polygon points="8,34 56,34 50,22 14,22" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="0.8" />
            {/* Upper roof tier */}
            <polygon points="14,22 50,22 45,10 19,10" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="0.8" />
            
            {/* Golden top spire */}
            <polygon points="30,10 34,10 32,2" fill="#eab308" />
            <circle cx="32" cy="2" r="2.2" fill="#fbbf24" />

            {/* Grand Red Carpet staircase sweeping down */}
            <polygon points="25,62 39,62 37,48 27,48" fill="#991b1b" />
            <polygon points="22,76 42,76 39,62 25,62" fill="#dc2626" />
          </g>

          {/* Grand staircase steps */}
          <polygon points="35,76 65,76 60,62 40,62" fill="#cbd5e1" opacity="0.3" />
        </>
      );

    case "20-3":
      // 12. Din Tai Fung (Soup Dumpling basket with chopsticks lifting one piece)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="#fafaf9" />
          <circle cx="50" cy="50" r="45" fill="#f5f5f4" />

          {/* Steaming Bamboo Steamer Basket */}
          <g transform="translate(10, 26)">
            {/* Shadow */}
            <ellipse cx="40" cy="48" rx="38" ry="10" fill="#e7e5e4" />

            {/* Steamer Rim Base */}
            <path d="M 2,36 C 2,54 78,54 78,36 L 78,42 C 78,60 2,60 2,42 Z" fill="url(#woodGrad)" />
            <ellipse cx="40" cy="36" rx="38" ry="10" fill="#d97706" stroke="#9a3412" strokeWidth="1" />
            <ellipse cx="40" cy="36" rx="36" ry="9.5" fill="#fef3c7" />

            {/* Slats */}
            <line x1="12" y1="34" x2="16" y2="39" stroke="#b45309" strokeWidth="1.5" />
            <line x1="26" y1="35" x2="30" y2="40" stroke="#b45309" strokeWidth="1.5" />
            <line x1="52" y1="35" x2="56" y2="40" stroke="#b45309" strokeWidth="1.5" />
            <line x1="66" y1="34" x2="70" y2="39" stroke="#b45309" strokeWidth="1.5" />

            {/* Delicious little dumplings sitting inside */}
            {/* Dumpling Left */}
            <g transform="translate(18, 25)">
              <path d="M 0,8 C 0,0 14,0 14,8 C 14,13 0,13 0,8 Z" fill="#fdfdfd" stroke="#d6d3d1" strokeWidth="0.8" />
              <path d="M 7,0 C 7,4 5,7 3,9 M 7,0 C 7,4 9,7 11,9" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
              <circle cx="7" cy="0" r="1.2" fill="#cbd5e1" />
            </g>

            {/* Dumpling Right */}
            <g transform="translate(46, 26)">
              <path d="M 0,8 C 0,0 14,0 14,8 C 14,13 0,13 0,8 Z" fill="#fdfdfd" stroke="#d6d3d1" strokeWidth="0.8" />
              <path d="M 7,0 C 7,4 5,7 3,9 M 7,0 C 7,4 9,7 11,9" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
              <circle cx="7" cy="0" r="1.2" fill="#cbd5e1" />
            </g>

            {/* Dumpling Center top */}
            <g transform="translate(32, 16)">
              <path d="M 0,8 C 0,0 14,0 14,8 C 14,13 0,13 0,8 Z" fill="#fdfdfd" stroke="#d6d3d1" strokeWidth="0.8" />
              <circle cx="7" cy="0" r="1.2" fill="#cbd5e1" />
            </g>

            {/* Soft wisps of gray steam */}
            <path d="M 32,10 Q 28,0 34,-10" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            <path d="M 48,12 Q 52,2 47,-8" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Chopsticks lifting a single Xiaolongbao */}
          <g transform="translate(45, -2)">
            {/* One dumpling being lifted */}
            <g transform="translate(-14, 25)" opacity="0.95">
              {/* Drooping soup sag shape */}
              <path d="M 0,8 C 0,0 16,0 16,8 C 16,16 8,19 8,19 C 8,19 0,16 0,8 Z" fill="#fdfdfd" stroke="#d6d3d1" strokeWidth="0.8" />
              {/* Pinch folds */}
              <path d="M 8,0 C 8,5 4,10 2,12 M 8,0 C 8,5 12,10 14,12 M 8,0 L 8,14" fill="none" stroke="#cbd5e1" strokeWidth="0.8" />
              <circle cx="8" cy="0" r="1.5" fill="#cbd5e1" />
              {/* Golden Soup Broth dripping down */}
              <path d="M 8,19 Q 8,24 9,26 Q 9,27 8,27 Q 7,27 8,26" fill="#fbbf24" stroke="#d97706" strokeWidth="0.5" />
            </g>

            {/* Crossed chopsticks clamping the dumpling */}
            <line x1="18" y1="12" x2="-22" y2="40" stroke="#78350f" strokeWidth="2.8" strokeLinecap="round" />
            <line x1="20" y1="18" x2="-20" y2="43" stroke="#78350f" strokeWidth="2.8" strokeLinecap="round" />
          </g>
        </>
      );

    case "20-4":
      // 13. Cingjing Farm Green Green Grassland (Emerald hills, fluffy sheep, windmill, snow mountain)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Majestic snow-capped mountain peaks */}
          <path d="M -10,60 L 22,26 L 32,38 L 58,16 L 72,32 L 110,12 L 110,105 L -10,105 Z" fill="#cbd5e1" />
          {/* Snowy caps */}
          <polygon points="22,26 14,35 30,35" fill="#ffffff" />
          <polygon points="58,16 48,24 68,24" fill="#ffffff" />
          <polygon points="110,12 96,22 110,22" fill="#ffffff" />

          {/* Rolling green pastures */}
          <path d="M -10,65 Q 35,50 75,64 T 110,60 L 110,105 L -10,105 Z" fill="url(#hillGrad)" />
          <path d="M -10,76 Q 40,70 80,78 T 110,74 L 110,105 L -10,105 Z" fill="#16a34a" />

          {/* Small vintage windmill on far left hill */}
          <g transform="translate(10, 48)">
            <polygon points="4,12 8,12 6,2 6,2" fill="#ef4444" />
            {/* Blades */}
            <line x1="6" y1="2" x2="2" y2="-2" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="6" y1="2" x2="10" y2="-2" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="6" y1="2" x2="6" y2="7" stroke="#1e293b" strokeWidth="0.8" />
          </g>

          {/* White wooden pasture fence */}
          <g transform="translate(15, 68)">
            <line x1="5" y1="12" x2="45" y2="2" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="5" y1="16" x2="45" y2="6" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="12" y1="10" x2="12" y2="18" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="24" y1="8" x2="24" y2="16" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="36" y1="6" x2="36" y2="14" stroke="#ffffff" strokeWidth="1.5" />
          </g>

          {/* Cute fluffy grazing sheep in distance */}
          <g transform="translate(68, 55)">
            <ellipse cx="6" cy="4" rx="4" ry="2.5" fill="#ffffff" />
            <ellipse cx="2" cy="3" rx="1.5" ry="1.5" fill="#1e293b" />
            <line x1="4" y1="5" x2="4" y2="8" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="7" y1="5" x2="7" y2="8" stroke="#1e293b" strokeWidth="0.8" />
          </g>

          {/* Big cute cartoon sheep in the foreground */}
          <g transform="translate(48, 70)">
            {/* Legs */}
            <line x1="14" y1="12" x2="14" y2="24" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="22" y1="12" x2="22" y2="24" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="28" y1="12" x2="28" y2="22" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="34" y1="12" x2="34" y2="22" stroke="#1e293b" strokeWidth="2.2" strokeLinecap="round" />

            {/* Fluffy cloud body */}
            <ellipse cx="24" cy="11" rx="15" ry="11" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.8" />
            <circle cx="14" cy="7" r="4.5" fill="#ffffff" />
            <circle cx="20" cy="4" r="4.5" fill="#ffffff" />
            <circle cx="28" cy="4" r="4.5" fill="#ffffff" />
            <circle cx="34" cy="8" r="4.5" fill="#ffffff" />
            <circle cx="32" cy="14" r="4.5" fill="#ffffff" />
            <circle cx="24" cy="17" r="4.5" fill="#ffffff" />
            <circle cx="16" cy="15" r="4.5" fill="#ffffff" />

            {/* Cute black head */}
            <ellipse cx="10" cy="10" rx="4.5" ry="5.5" fill="#1e293b" />
            {/* Soft pink blush */}
            <circle cx="8" cy="12" r="1.2" fill="#f43f5e" />
            
            {/* Floppy ears */}
            <ellipse cx="6" cy="6" rx="1.5" ry="3.5" fill="#1e293b" transform="rotate(-30 6 6)" />
            <ellipse cx="14" cy="6" rx="1.5" ry="3.5" fill="#1e293b" transform="rotate(30 14 6)" />

            {/* Little white fleece cap on head */}
            <circle cx="10" cy="5" r="2.2" fill="#ffffff" />
          </g>
        </>
      );

    case "20-5":
      // 14. The Old England Manor (Magnificent English Tudor Castle nestled in hills with flower garden path)
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="url(#skyGrad)" />
          {renderSoftClouds()}

          {/* Distant soft purple/blue mountains */}
          <path d="M -10,65 L 30,35 L 65,58 L 110,40 L 110,105 L -10,105 Z" fill="#0ea5e9" opacity="0.3" />

          {/* Grassy hills slopes */}
          <path d="M -10,75 L 110,75 L 110,105 L -10,105 Z" fill="url(#hillGrad)" />

          {/* Tudor Castle of The Old England Manor */}
          <g transform="translate(24, 25)">
            {/* Main gabled timber towers */}
            <rect x="10" y="22" width="22" height="38" fill="#ffffff" stroke="#1e293b" strokeWidth="1.2" />
            <rect x="3" y="32" width="36" height="28" fill="#ffffff" stroke="#1e293b" strokeWidth="1" />

            {/* Timber patterns */}
            <line x1="10" y1="22" x2="32" y2="60" stroke="#1e293b" strokeWidth="1" />
            <line x1="32" y1="22" x2="10" y2="60" stroke="#1e293b" strokeWidth="1" />
            <line x1="3" y1="32" x2="39" y2="60" stroke="#1e293b" strokeWidth="0.8" />
            
            {/* Fill section with white cards to create spacing */}
            <rect x="11" y="23" width="20" height="36" fill="#ffffff" />
            <rect x="4" y="33" width="34" height="26" fill="#ffffff" />

            {/* Horizontal and vertical timber beams */}
            <line x1="15" y1="22" x2="15" y2="59" stroke="#1e293b" strokeWidth="1.2" />
            <line x1="27" y1="22" x2="27" y2="59" stroke="#1e293b" strokeWidth="1.2" />
            <line x1="3" y1="44" x2="39" y2="44" stroke="#1e293b" strokeWidth="1.2" />

            {/* Gothic pointed slate-roofs */}
            <polygon points="10,22 32,22 21,8" fill="#475569" stroke="#1e293b" strokeWidth="1" />
            <polygon points="3,32 15,32 9,22" fill="#475569" stroke="#1e293b" strokeWidth="1" />
            <polygon points="27,32 39,32 33,22" fill="#475569" stroke="#1e293b" strokeWidth="1" />

            {/* Clock face ornament on main tower */}
            <circle cx="21" cy="18" r="3" fill="#ffffff" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="21" y1="18" x2="21" y2="16" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="21" y1="18" x2="23" y2="18" stroke="#1e293b" strokeWidth="0.8" />

            {/* High arched windows */}
            <rect x="18" y="34" width="6" height="8" fill="#cbd5e1" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="21" y1="34" x2="21" y2="42" stroke="#1e293b" strokeWidth="0.5" />
            
            {/* Elegant chimney pile */}
            <rect x="33" y="14" width="3" height="10" fill="#7c2d12" stroke="#1e293b" strokeWidth="0.8" />
            <rect x="32" y="12" width="5" height="2" fill="#451a03" />
          </g>

          {/* Winding stone path in foreground with red and pink flower beds */}
          <path d="M 35,100 Q 50,75 50,75 L 56,75 Q 56,75 42,100 Z" fill="url(#stoneSteps)" />
          
          {/* Flower garden landscaping along path */}
          <ellipse cx="20" cy="94" rx="14" ry="7" fill="#f43f5e" />
          <ellipse cx="24" cy="95" rx="10" ry="5" fill="#f59e0b" />
          <ellipse cx="14" cy="90" rx="8" ry="4" fill="#a855f7" />

          <ellipse cx="78" cy="94" rx="16" ry="8" fill="#ec4899" />
          <ellipse cx="72" cy="95" rx="11" ry="6" fill="#f43f5e" />
          <ellipse cx="85" cy="90" rx="9" ry="5" fill="#3b82f6" />
        </>
      );

    default:
      // Compass needle fallback badge
      return renderWithCircleClip(
        <>
          <rect width="100" height="100" fill="#f0fdf4" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#10b981" strokeWidth="3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
          <path d="M 50,18 L 60,45 L 50,40 L 40,45 Z" fill="#ef4444" />
          <path d="M 50,82 L 40,55 L 50,60 L 60,55 Z" fill="#94a3b8" />
          <circle cx="50" cy="50" r="4.5" fill="#1e293b" />
        </>
      );
  }
}
