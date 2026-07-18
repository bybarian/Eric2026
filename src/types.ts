export interface Activity {
  id: string;
  time: string;
  title: string;
  locationName: string;
  description: string;
  icon: string;
  notes?: string;
  coords: { x: number; y: number }; // Percentage coords on the custom SVG map
  chineseName?: string;
  detailsUrl?: string;
  isReminder?: boolean;
}

export interface DayItinerary {
  date: string;
  dayOfWeek: string;
  theme: string;
  subtitle: string;
  activities: Activity[];
  breakfast: string;
  lunch: string;
  lunchNotes?: string;
  dinner: string;
  dinnerNotes?: string;
  hotel: string;
  hotelChineseName?: string;
  hotelNotes?: string;
  colorScheme: {
    primary: string; // Tailored branding color for the day
    accent: string;
    bg: string;
  };
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
