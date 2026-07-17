import { useState, useEffect, useMemo, useRef } from "react";
import { ITINERARY_DATA, HOSPITAL_INFO, TRAVEL_ALERTS } from "./data";
import { Activity, DayItinerary } from "./types";
import WeatherAlerts from "./components/WeatherAlerts";
import AttractionIllustration from "./components/AttractionIllustration";

import {
  Plane,
  Utensils,
  Compass,
  Bike,
  Map as MapIcon,
  Camera,
  Sunset,
  Award,
  Car,
  Hotel,
  Mountain,
  Trees,
  MapPin,
  Coffee,
  Sparkles,
  Copy,
  Check,
  Building,
  ExternalLink
} from "lucide-react";

function DayFocusImage({ date }: { date: string }) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [date]);

  const imageName = date === "7/18" ? "focus_7-18.png" : date === "7/19" ? "focus_7-19.png" : date === "7/20" ? "focus_7-20.png" : null;

  const is18 = date === "7/18";
  const is19 = date === "7/19";

  if (imageName && !imgError) {
    return (
      <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-white rounded-full p-[1px] border border-white shadow-md flex items-center justify-center overflow-hidden self-center">
        <img
          src={`images/${imageName}`}
          alt={`Day ${date} Focus`}
          className="w-full h-full object-cover rounded-full"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full p-[1px] border border-white shadow-md flex flex-col items-center justify-center relative overflow-hidden self-center ${
      is18 
        ? "bg-gradient-to-br from-emerald-600 to-teal-700" 
        : is19 
          ? "bg-gradient-to-br from-sky-600 to-blue-700" 
          : "bg-gradient-to-br from-amber-600 to-orange-700"
    }`}>
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <svg width="100%" height="100%">
          <pattern id="focus-pattern-mini" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#focus-pattern-mini)" />
        </svg>
      </div>
      
      {/* Subtle icon/graphic */}
      <div className="text-white/20 absolute">
        {is18 ? (
          <Sparkles className="w-8 h-8 stroke-[1]" />
        ) : is19 ? (
          <Mountain className="w-8 h-8 stroke-[1]" />
        ) : (
          <Trees className="w-8 h-8 stroke-[1]" />
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition duration-200 z-10 text-[8px] text-white font-mono text-center leading-tight p-1 select-all">
        focus_{date.replace("/", "-")}.png
      </div>
    </div>
  );
}

export default function App() {
  // State for selected Day Tab (0: Day 1, 1: Day 2, etc.)
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  
  // State for active highlighted activity (can be clicked or simulated)
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    ITINERARY_DATA[0].activities[0]
  );

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  // Web Audio API custom sine wave double chime synthesis
  const playStepChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Chime note 1: Warm C5
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
      gain1.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      osc1.start();
      osc1.stop(audioCtx.currentTime + 0.5);

      // Chime note 2: Clear E5 slightly staggered
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.12); // E5
      gain2.gain.setValueAtTime(0.08, audioCtx.currentTime + 0.12);
      gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.75);
      osc2.start(audioCtx.currentTime + 0.12);
      osc2.stop(audioCtx.currentTime + 0.75);
    } catch (e) {
      console.warn("Web Audio chime blocked or not supported by browser policy.");
    }
  };

  // Utility to map string icons to Lucide components
  const renderActivityIcon = (iconName: string) => {
    const cls = "w-4 h-4 stroke-[2]";
    switch (iconName) {
      case "plane":
        return <Plane className={cls} />;
      case "utensils":
        return <Utensils className={cls} />;
      case "museum":
        return <Building className={cls} />;
      case "compass":
        return <Compass className={cls} />;
      case "bike":
        return <Bike className={cls} />;
      case "map":
        return <MapIcon className={cls} />;
      case "camera":
        return <Camera className={cls} />;
      case "sunset":
        return <Sunset className={cls} />;
      case "landmark":
        return <Building className={cls} />;
      case "award":
        return <Award className={cls} />;
      case "soup":
        return <Utensils className={cls} />;
      case "truck":
        return <Car className={cls} />;
      case "hotel":
        return <Hotel className={cls} />;
      case "mountain":
        return <Mountain className={cls} />;
      case "trees":
        return <Trees className={cls} />;
      case "map-pin":
        return <MapPin className={cls} />;
      case "coffee":
        return <Coffee className={cls} />;
      case "sparkles":
        return <Sparkles className={cls} />;
      default:
        return <MapPin className={cls} />;
    }
  };

  // Copy helper for Chinese terms so he can show taxis/locals
  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDayTabClick = (idx: number) => {
    setSelectedDayIndex(idx);
    const dayActs = ITINERARY_DATA[idx].activities;
    if (dayActs.length > 0) {
      setSelectedActivity(dayActs[0]);
    }
  };

  // Triggered when clicking a card
  const handleSelectActivity = (act: Activity) => {
    setSelectedActivity(act);
    playStepChime();
  };

  const currentDay = ITINERARY_DATA[selectedDayIndex];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans">
      
      {/* 1. BRAND HEADER AND HOSPITAL LOGO ACCENT */}
      <header className="min-h-16 sm:h-20 bg-white border-b border-slate-200 px-3 sm:px-10 flex items-center justify-between shrink-0 sticky top-0 z-50 shadow-xs py-3 sm:py-0">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo Brand exactly resembling the design html */}
          <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
            {!logoError ? (
              <img
                src="logo.png"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover shadow-sm bg-emerald-700 shrink-0"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-sm shrink-0">C</div>
            )}
            <div className="min-w-0">
              <h1 className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Official Visit Reception</h1>
              <p className="text-xs sm:text-base md:text-lg font-bold text-slate-900 font-display tracking-tight mt-0.5 truncate">
                Dr. Eric Holmboe &bull; CBME Taiwan Week 2026
              </p>
              <p className="text-[11px] text-slate-500 hidden sm:flex items-center gap-1">
                <span>Jointly Hosted by</span>
                <span className="font-semibold text-emerald-800">Cathay General Hospital</span>
                <span>&</span>
                <span className="font-semibold text-sky-800">China Medical University Hospital</span>
              </p>
            </div>
          </div>

          {/* Real Taipei Time Zone Indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="bg-emerald-50 text-emerald-700 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold border border-emerald-100 flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>
                <span className="hidden sm:inline">Taipei Time: </span>
                <span className="font-bold font-mono">{new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}</span>
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* 2. CORE PANEL LAYOUT */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-10 py-8">
        <div className="space-y-8">
          
          {/* COLUMN 1 (Timeline & Checklists) */}
          <div className="space-y-6">
            
            <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-xs space-y-6 sm:space-y-8">
              
              {/* Timeline Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-slate-900" id="itinerary-header-title">
                    Daily Schedule
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">Dr. Eric Holmboe's Taiwan Visit Timeline</p>
                </div>
                <span className="text-xs text-slate-500 font-medium italic">
                  {currentDay.dayOfWeek}, July {currentDay.date.split("/")[1]}
                </span>
              </div>

              {/* Day Selection Tabs resembling the design HTML */}
              <div className="grid grid-cols-3 gap-2">
                {ITINERARY_DATA.map((day, dIdx) => {
                  const isActive = dIdx === selectedDayIndex;
                  return (
                    <button
                      key={day.date}
                      onClick={() => handleDayTabClick(dIdx)}
                      className={`py-3 px-2 rounded-xl border text-center transition flex flex-col justify-center items-center cursor-pointer ${
                        isActive
                          ? "bg-slate-900 text-white border-transparent shadow-xs"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
                      }`}
                      id={`day-tab-${day.date.replace("/", "-")}`}
                    >
                      <span className="text-[10px] font-mono opacity-80">{day.date}</span>
                      <span className="text-xs font-bold font-display">{day.dayOfWeek}</span>
                    </button>
                  );
                })}
              </div>

              {/* Day Theme Title Focus Block */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-xs flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Day {currentDay.date} Focus
                  </div>
                  <h3 className="font-bold text-sm text-slate-850">
                    {currentDay.theme}
                  </h3>
                  <p className="text-xs text-slate-500 leading-normal">
                    {currentDay.subtitle}
                  </p>
                </div>
                <DayFocusImage date={currentDay.date} />
              </div>

              {/* Vertical Activity List */}
              <div className="relative pl-0 space-y-6">
                {/* Vertical Line Decorator */}
                <div className="absolute left-[61px] sm:left-[85px] top-4 bottom-4 w-px bg-slate-100"></div>

                {currentDay.activities.map((act) => {
                  const isHighlighted = selectedActivity?.id === act.id;

                  return (
                    <div
                      key={act.id}
                      onClick={() => handleSelectActivity(act)}
                      className="flex gap-3 sm:gap-6 select-none cursor-pointer"
                      id={`activity-card-${act.id}`}
                    >
                      {/* Left Time Label */}
                      <div className={`w-11 sm:w-14 text-right text-[10px] sm:text-[11px] font-mono pt-1.5 shrink-0 ${
                        isHighlighted ? "text-emerald-700 font-bold" : "text-slate-400"
                      }`}>
                        {act.time}
                      </div>

                      {/* Timeline Dot Indicator */}
                      <div className="relative flex flex-col items-center shrink-0 w-3">
                        <div className={`w-3 h-3 rounded-full ring-4 relative z-10 transition-all ${
                          isHighlighted 
                            ? "bg-emerald-500 ring-emerald-100 animate-pulse" 
                            : "bg-slate-200 ring-white"
                        }`}></div>
                      </div>

                      {/* Content Box */}
                      {isHighlighted ? (
                        <div className="bg-emerald-50 p-3 sm:p-4 rounded-xl border border-emerald-100 flex-1 transition duration-200 min-w-0">
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {/* Cute Illustration - Styled as a circular badge like the uploaded style reference */}
                            <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 bg-white rounded-full p-[1px] border border-white shadow-lg shadow-slate-200/80 flex items-center justify-center overflow-hidden self-start">
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <AttractionIllustration id={act.id} />
                              </div>
                            </div>
                            
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                                <h3 className="font-bold text-emerald-900 text-xs sm:text-sm">
                                  {act.title}
                                </h3>
                                <span className="bg-emerald-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 self-start sm:self-auto">
                                  Selected Stop
                                </span>
                              </div>
                              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                                {act.description}
                              </p>
                              <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                                <p className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium min-w-0 flex-1">
                                  <MapPin className="w-3 h-3 shrink-0" />
                                  <span className="truncate">{act.locationName}</span>
                                </p>
                                <a
                                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(act.locationName + ' ' + (act.chineseName || ''))}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 py-1 rounded-md flex items-center justify-center gap-1.5 transition shrink-0 cursor-pointer text-center"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <span>Open in Maps</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                          
                          {/* Chinese Taxi Helper */}
                          {act.chineseName && (
                            <div className="bg-white/80 rounded-lg p-2.5 border border-emerald-100/50 mt-3 flex items-center justify-between gap-3">
                              <div className="min-w-0 flex-1">
                                <span className="text-[9px] font-mono text-slate-500 font-semibold block uppercase">
                                  Show Driver (Taxi / Liaison)
                                </span>
                                <span className="font-semibold text-slate-800 block truncate mt-0.5">
                                  {act.chineseName}
                                </span>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  copyToClipboard(act.chineseName || "", act.id);
                                }}
                                className="p-1 hover:bg-emerald-100 text-emerald-800 rounded transition shrink-0"
                                title="Copy traditional text"
                              >
                                {copiedId === act.id ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                              </button>
                            </div>
                          )}

                          {/* Host Liaison Notes */}
                          {act.notes && (
                            <div className="text-[11px] text-emerald-700/90 leading-normal pl-2 mt-3 border-l-2 border-emerald-400">
                              <span className="font-bold uppercase text-[9px] tracking-wider block">
                                Liaison Note
                              </span>
                              {act.notes}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex-1 transition rounded-xl p-2 -my-2 border border-transparent hover:bg-slate-50/50 min-w-0">
                          <div className="flex gap-3 sm:gap-4 items-start">
                            {/* Mini Illustration - Styled as a circular badge like the uploaded style reference */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 bg-white rounded-full p-[1px] border border-white shadow-md shadow-slate-200/60 flex items-center justify-center overflow-hidden self-start">
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <AttractionIllustration id={act.id} />
                              </div>
                            </div>

                            <div className="min-w-0 flex-1">
                              <h3 className="font-bold text-xs sm:text-sm text-slate-800">
                                {act.title}
                              </h3>
                              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-2">
                                {act.description}
                              </p>
                              <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                                <MapPin className="w-3 h-3 shrink-0" />
                                <span className="truncate">{act.locationName}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Day Meals Summary Card matching row boxes */}
              <div className="border-t border-slate-200 pt-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Daily Gastronomy Summary
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Breakfast */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[9px] font-bold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded-full uppercase">
                        Breakfast
                      </span>
                      <p className="font-bold mt-2 text-slate-800">{currentDay.breakfast}</p>
                    </div>
                  </div>

                  {/* Lunch */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex flex-col justify-between group hover:border-emerald-600/30 transition">
                    <div>
                      <span className="font-mono text-[9px] font-bold text-emerald-850 bg-emerald-50 px-1.5 py-0.5 rounded-full uppercase">
                        Lunch
                      </span>
                      <p className="font-bold mt-2 text-slate-800">{currentDay.lunch}</p>
                    </div>
                    {currentDay.lunchNotes && (
                      <span className="text-[10px] text-slate-400 line-clamp-2 mt-1 leading-normal">
                        {currentDay.lunchNotes}
                      </span>
                    )}
                  </div>

                  {/* Dinner */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs flex flex-col justify-between group hover:border-emerald-600/30 transition">
                    <div>
                      <span className="font-mono text-[9px] font-bold text-emerald-900 bg-emerald-50 px-1.5 py-0.5 rounded-full uppercase">
                        Dinner
                      </span>
                      <p className="font-bold mt-2 text-slate-800">{currentDay.dinner}</p>
                    </div>
                    {currentDay.dinnerNotes && (
                      <span className="text-[10px] text-slate-400 line-clamp-2 mt-1 leading-normal">
                        {currentDay.dinnerNotes}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Day Overnight Hotel Card as the Dispatch assistant */}
              <div className="mt-auto bg-slate-900 rounded-2xl p-4 sm:p-6 text-white space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest opacity-60 font-semibold">Travel Assistant Dispatch</p>
                    <p className="text-xs leading-relaxed opacity-95">
                      "Dedicated host drivers will meet Dr. Holmboe 15 minutes before departure times at the lobby of:"
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
                    <button
                      onClick={() => copyToClipboard(currentDay.hotelChineseName || "", `hotel-${currentDay.date}`)}
                      className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition shrink-0 border border-slate-750 cursor-pointer"
                      title="Copy Hotel Address"
                      id={`copy-hotel-btn-${selectedDayIndex}`}
                    >
                      {copiedId === `hotel-${currentDay.date}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentDay.hotel + ' ' + (currentDay.hotelChineseName || ''))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition shrink-0 border border-slate-750 flex items-center justify-center cursor-pointer"
                      title="Open in Google Maps"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-3 flex items-start gap-3">
                  <Hotel className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-slate-100 font-display">
                      {currentDay.hotel}
                    </h5>
                    <span className="text-[11px] text-slate-400 block font-sans">
                      {currentDay.hotelChineseName}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* COLUMN 2 (Advisories & Weather) */}
          <div className="space-y-6">
            
            {/* Weather Alerts */}
            <WeatherAlerts
              selectedActivity={selectedActivity}
              onPlayChime={playStepChime}
            />

          </div>

        </div>
      </main>

      {/* 4. FOOTER & COPYRIGHT METADATA */}
      <footer className="bg-white border-t border-slate-200 py-6 shrink-0 mt-12 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4">
          <p className="uppercase tracking-wider font-semibold text-slate-500">
            department of education, Digital technology and internet resource center
          </p>
          <p className="mt-1 text-slate-400">
            © 2026 CBME Taiwan Week Coordinators. Built with care for Dr. Eric Holmboe.
          </p>
        </div>
      </footer>

    </div>
  );
}
