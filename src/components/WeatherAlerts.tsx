import { useState } from "react";
import { Activity } from "../types";
import { TRAVEL_ALERTS } from "../data";
import { AlertTriangle, Clock, Volume2, VolumeX, CloudSun, Compass, Thermometer, Wind } from "lucide-react";

interface WeatherAlertsProps {
  selectedActivity: Activity | null;
  onPlayChime: () => void;
}

export default function WeatherAlerts({ selectedActivity, onPlayChime }: WeatherAlertsProps) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [alarmSet, setAlarmSet] = useState(false);

  // Determine simulated weather parameters based on selected activity location
  const getWeatherInfo = () => {
    if (!selectedActivity) {
      return {
        location: "Taipei (City Center)",
        temp: "31°C / 88°F",
        condition: "Partly Cloudy & Humid",
        wind: "Light breeze (8 km/h)",
        humidity: "78%",
        uvIndex: "Very High (8)",
        icon: "cloudy",
      };
    }

    const title = selectedActivity.title.toLowerCase();
    const loc = selectedActivity.locationName.toLowerCase();

    if (title.includes("airport")) {
      return {
        location: "Taoyuan (Airport Region)",
        temp: "30°C / 86°F",
        condition: "Clear skies",
        wind: "Moderate (12 km/h)",
        humidity: "70%",
        uvIndex: "High (7)",
        icon: "sun",
      };
    }

    if (loc.includes("hehuanshan") || loc.includes("shimen") || title.includes("alpine")) {
      return {
        location: "Hehuan Peak (Alt 3,237m)",
        temp: "12°C / 54°F",
        condition: "Crisp Alpine Chill",
        wind: "Strong ridge wind (25 km/h)",
        humidity: "55%",
        uvIndex: "Extreme (11+)",
        icon: "windy",
      };
    }

    if (loc.includes("cingjing") || title.includes("grassland") || loc.includes("england")) {
      return {
        location: "Cingjing High Alps (Alt 1,700m)",
        temp: "21°C / 70°F",
        condition: "Passing Mountain Mist",
        wind: "Cool breeze (15 km/h)",
        humidity: "82%",
        uvIndex: "Very High (9)",
        icon: "mist",
      };
    }

    if (loc.includes("yehliu") || loc.includes("coastline") || loc.includes("badouzi")) {
      return {
        location: "Northeast Sea Coast",
        temp: "29°C / 84°F",
        condition: "Ocean Breezes & Sunny",
        wind: "Gusty sea breeze (22 km/h)",
        humidity: "75%",
        uvIndex: "Very High (9)",
        icon: "wind",
      };
    }

    // Default Taipei
    return {
      location: "Taipei (City Center)",
      temp: "32°C / 90°F",
      condition: "Tropical Summer Sunshine",
      wind: "Calm (6 km/h)",
      humidity: "76%",
      uvIndex: "Very High (8)",
      icon: "sun",
    };
  };

  const weather = getWeatherInfo();

  // Highlight specific travel warning alerts based on the current active event location
  const getRelevantAlerts = () => {
    if (!selectedActivity) return TRAVEL_ALERTS;

    const title = selectedActivity.title.toLowerCase();
    const loc = selectedActivity.locationName.toLowerCase();

    if (loc.includes("hehuanshan") || loc.includes("shimen")) {
      return TRAVEL_ALERTS.filter((a) => a.type === "weather");
    }
    if (title.includes("transfer") || title.includes("drive")) {
      return TRAVEL_ALERTS.filter((a) => a.type === "schedule");
    }
    if (title.includes("feast") || title.includes("market") || title.includes("ningxia")) {
      return TRAVEL_ALERTS.filter((a) => a.type === "cultural");
    }

    return TRAVEL_ALERTS;
  };

  const handleTestAlarm = () => {
    if (soundEnabled) {
      onPlayChime();
      setAlarmSet(true);
      setTimeout(() => setAlarmSet(false), 3000);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-xs space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-slate-50 text-slate-700 rounded-xl">
            <AlertTriangle className="w-5 h-5 text-emerald-800" id="alerts-header-icon" />
          </div>
          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-800" id="alerts-title">
              Trip Advisories
            </h3>
            <p className="text-xs text-slate-400">Mountain Weather & Transit Alarms</p>
          </div>
        </div>
      </div>

      {/* Dynamic Weather Display */}
      <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-6 border border-slate-850 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CloudSun className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
              Local Weather Conditions
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
            Live Link
          </span>
        </div>

        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-sm font-bold text-slate-100 truncate max-w-[170px]">
              {weather.location}
            </div>
            <div className="text-xs text-slate-400 mt-0.5">{weather.condition}</div>
          </div>
          <div className="text-2xl font-bold font-display text-emerald-400">
            {weather.temp}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-300">
          <div className="flex items-center space-x-2 bg-slate-800/40 rounded-lg p-2 border border-slate-800/60">
            <Wind className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{weather.wind}</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/40 rounded-lg p-2 border border-slate-800/60">
            <Thermometer className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">UV: {weather.uvIndex}</span>
          </div>
        </div>
      </div>

      {/* Alarm Reminder Sound Center */}
      <div className="border border-slate-200 bg-slate-50 rounded-2xl p-4 sm:p-6 space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-emerald-800" />
            <span className="text-xs font-bold text-slate-800">Schedule Reminder Alarm</span>
          </div>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 hover:bg-slate-200 rounded-lg transition"
            title={soundEnabled ? "Mute audio chimes" : "Unmute audio chimes"}
            id="sound-toggle-btn"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-800" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>
        </div>

        <p className="text-[11px] text-slate-500 leading-normal">
          Receive a simulated alarm sound to notify Dr. Holmboe before major transits (e.g., depart
          at 13:30 to Cingjing). Click the button below to test.
        </p>

        <button
          onClick={handleTestAlarm}
          className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 transition duration-200 border cursor-pointer ${
            alarmSet
              ? "bg-emerald-700 text-white border-transparent"
              : "bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50"
          }`}
          id="test-alarm-btn"
        >
          {alarmSet ? (
            <>
              <span className="animate-ping w-1.5 h-1.5 rounded-full bg-white block"></span>
              <span>CHIME SUCCESS!</span>
            </>
          ) : (
            <span>Test Alarm Chime (Audible)</span>
          )}
        </button>
      </div>

      {/* Active Warnings Checklist */}
      <div className="space-y-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Urgent Safety Bulletins
        </div>

        <div className="space-y-3">
          {getRelevantAlerts().map((alert) => (
            <div
              key={alert.id}
              className={`border rounded-xl p-4 text-xs space-y-2 transition duration-200 ${
                alert.type === "weather"
                  ? "bg-emerald-50/50 border-emerald-100 text-emerald-950"
                  : alert.type === "schedule"
                    ? "bg-emerald-50/50 border-emerald-100 text-emerald-950"
                    : "bg-emerald-50/50 border-emerald-100 text-emerald-950"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      alert.type === "weather"
                        ? "bg-emerald-500 animate-pulse"
                        : alert.type === "schedule"
                          ? "bg-emerald-500 animate-pulse"
                          : "bg-emerald-500"
                    }`}
                  ></span>
                  <span className="font-bold">{alert.title}</span>
                </div>
                <span className="text-[10px] font-mono opacity-60 font-semibold">{alert.day} stop</span>
              </div>
              <p className="leading-relaxed opacity-95">{alert.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
