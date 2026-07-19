import { DayItinerary } from "./types";

export const ITINERARY_DATA: DayItinerary[] = [
  {
    date: "7/18",
    dayOfWeek: "Sat",
    theme: "Arrival - Palace Museum - Ningxia",
    subtitle: "Cultural Welcome & Historic Splendor",
    breakfast: "Hotel breakfast (06:30 - 10:30, 2nd Floor)",
    lunch: "Self-arranged (午餐自理)",
    lunchNotes: "Self-arranged lunch before afternoon departure. A private car is scheduled for transfer at 13:30.",
    dinner: "Ningxia Night Market Chien Sui Feast (寧夏夜市千歲宴)",
    dinnerNotes: "A legendary culinary feast where over 20 representative street food dishes from Ningxia's top stalls are served directly to a banquet table, offering hassle-free gourmet tasting.",
    hotel: "Madison Taipei Hotel (慕軒飯店)",
    hotelChineseName: "台北慕軒飯店",
    hotelNotes: "An award-winning luxury boutique hotel on Dunhua South Road, famous for its understated elegance and serene, peaceful ambiance.",
    colorScheme: {
      primary: "emerald",
      accent: "#00828a", // Cathay General Hospital Teal
      bg: "bg-emerald-50/50"
    },
    activities: [
      {
        id: "18-1",
        time: "05:20",
        title: "Taiwan Arrival & Hotel Check-in",
        locationName: "Taoyuan International Airport (T2) to Madison Taipei Hotel",
        chineseName: "桃園機場第二航廈 & 台北慕軒飯店",
        description: "Arrive at Taoyuan Airport Terminal 2. A private car will transfer you to Madison Taipei Hotel to check in, unpack, and rest after your flight.",
        icon: "plane",
        coords: { x: 35, y: 18 }
      },
      {
        id: "18-r1",
        time: "13:00",
        title: "Shuttle Transfer Reminder (接駁提醒)",
        locationName: "Madison Taipei Hotel",
        chineseName: "台北慕軒飯店 接駁提醒",
        description: "A private car is scheduled to arrive at 13:30 to transfer you from Madison Taipei Hotel to the National Palace Museum. Please prepare for departure.",
        icon: "bell",
        notes: "Please be ready in the lobby.",
        coords: { x: 35, y: 18 },
        isReminder: true
      },
      {
        id: "18-2",
        time: "13:30",
        title: "Depart Madison Taipei to Museum",
        locationName: "Madison Taipei Hotel",
        chineseName: "台北慕軒飯店 出發",
        description: "Depart by private car from Madison Taipei Hotel and travel to the National Palace Museum.",
        icon: "truck",
        notes: "Enjoy a comfortable private transfer across Taipei to the foothills of Yangmingshan.",
        coords: { x: 35, y: 18 }
      },
      {
        id: "18-3",
        time: "14:00",
        title: "National Palace Museum Tour",
        locationName: "National Palace Museum",
        chineseName: "國立故宮博物院",
        description: "An exclusive guided tour of one of the world's greatest collections of Chinese imperial artifacts, spanning over 8,000 years of history.",
        icon: "museum",
        notes: "Explore historical treasures including masterworks of bronze, jade, calligraphy, and ceramics from former imperial collections.",
        coords: { x: 54, y: 12 }
      },
      {
        id: "18-5",
        time: "17:30",
        title: "The Grand Hotel Taipei Tour",
        locationName: "The Grand Hotel Taipei",
        chineseName: "圓山大飯店",
        description: "Visit the iconic Grand Hotel, a masterpiece of classic Chinese palace architecture. Marvel at its majestic red pillars, golden glazed tiles, and historic grandeur.",
        icon: "landmark",
        notes: "Admire panoramic Keelung River views and learn about the historic escape slide tunnels built for state guests.",
        coords: { x: 50, y: 14 }
      },
      {
        id: "18-4",
        time: "18:30",
        title: "Chien Sui Banquet Feast",
        locationName: "Ningxia Night Market",
        chineseName: "寧夏夜市千歲宴",
        description: "A customized traditional street food banquet. Enjoy a selection of 20+ legendary street eats served in comfort directly to your table.",
        icon: "sparkles",
        notes: "Features Michelin Bib Gourmand snacks, traditional oyster omelet, braised pork rice, and sweet taro balls.",
        coords: { x: 51, y: 15 }
      }
    ]
  },
  {
    date: "7/19",
    dayOfWeek: "Sun",
    theme: "Coastline - Mountains",
    subtitle: "Scenic Northern Ridges & Coastal Landscapes",
    breakfast: "Hotel breakfast (06:30 - 10:30, 2nd Floor)",
    lunch: "Shen'ao Seafood Restaurant (深澳海鮮餐廳)",
    lunchNotes: "Ultra-fresh, locally caught Pacific seafood cooked in classic Taiwanese coastal style right next to the harbor.",
    dinner: "Diamond Tony's 101 (隨意鳥地方 101)",
    dinnerNotes: "Premium Italian fine-dining located on the 85th floor of Taipei 101, featuring sweeping panoramic night views of Taipei Basin.",
    hotel: "Madison Taipei Hotel (慕軒飯店)",
    hotelChineseName: "台北慕軒飯店",
    hotelNotes: "Second night at Madison Taipei. Make sure to try their award-winning cocktails or peaceful tea selection at the lounge.",
    driverName: "Mr. Lee (李先生)",
    driverPhone: "0980-088-636",
    licensePlate: "RFL-1855",
    colorScheme: {
      primary: "sky",
      accent: "#105295", // CMU Hospital Deep Blue
      bg: "bg-sky-50/50"
    },
    activities: [
      {
        id: "19-r1",
        time: "08:00",
        title: "Morning Departure Reminder (上午出發提醒)",
        locationName: "Madison Taipei Hotel",
        chineseName: "台北慕軒飯店 晨間出發提醒",
        description: "The private transfer shuttle to Yehliu Geopark departs at 08:30. Please complete hotel breakfast and meet the group in the lobby.",
        icon: "bell",
        notes: "Driver: Mr. Lee (李先生, 0980-088-636, License Plate: RFL-1855). Please gather in the lobby by 08:25.",
        coords: { x: 35, y: 18 },
        isReminder: true
      },
      {
        id: "19-1",
        time: "08:30",
        title: "Depart Taipei to Yehliu Geopark",
        locationName: "Yehliu Geopark",
        chineseName: "野柳地質公園",
        description: "Travel to the North Coast to explore spectacular hoodoo stones and geological formations carved by wave and wind erosion.",
        icon: "compass",
        notes: "Spot the famous 'Queen's Head' rock formation. The coastline walk is breezy and beautiful.",
        coords: { x: 63, y: 10 }
      },
      {
        id: "19-2",
        time: "12:00",
        title: "Coastal Seafood Lunch at Shen'ao",
        locationName: "Shen'ao Seafood Restaurant",
        chineseName: "深澳海鮮餐廳",
        description: "Indulge in a fresh seafood lunch featuring local specialties, squid, and seasonal Taiwanese seafood delicacies.",
        icon: "utensils",
        notes: "A top-rated spot for authentic regional seafood directly overlooking the active fishing port.",
        coords: { x: 67, y: 11 }
      },
      {
        id: "19-2b",
        time: "13:30",
        title: "Shenao Promontory Capybara Rock",
        locationName: "Shenao Promontory / Capybara Rock",
        chineseName: "深澳岬角水豚岩",
        description: "Walk the clifftop to see spectacular geological rock formations. Originally known as Elephant Trunk Rock (象鼻岩) before the trunk naturally broke in late 2023, the remaining stone structure now remarkably resembles a giant, peaceful capybara sitting by the sea.",
        icon: "camera",
        notes: "Famed natural wonder. Take photos of the unique capybara-like profile from the viewing platform.",
        coords: { x: 67, y: 12 }
      },
      {
        id: "19-3",
        time: "14:00",
        title: "The Contrasting Yinyang Sea",
        locationName: "Yinyang Sea (Yingyang Sea)",
        chineseName: "水湳洞陰陽海",
        description: "Witness the fascinating natural contrast of the bay's water, where the glittering golden-yellow run-off of mineral-rich mountain water collides with the deep blue of the Pacific Ocean.",
        icon: "compass",
        notes: "The yellow-blue contrast is a result of natural insoluble iron ions from the old mining areas upstream.",
        coords: { x: 68, y: 12 }
      },
      {
        id: "19-3b",
        time: "14:30",
        title: "The Cascading Golden Waterfall",
        locationName: "Golden Waterfall",
        chineseName: "黃金瀑布",
        description: "Marvel at the spectacular golden-hued cascading waterfall, colored by the copper and iron deposits from the heavy rainfall reacting with the local sulfur/metal ores.",
        icon: "sparkles",
        notes: "Strictly do not touch or enter the water as it is highly acidic and contains toxic heavy metals.",
        coords: { x: 69, y: 12 }
      },
      {
        id: "19-3c",
        time: "15:00",
        title: "Jinguashi Gold Museum",
        locationName: "Jinguashi Gold Ecological Park",
        chineseName: "金瓜石黃金博物館",
        description: "Explore preserved colonial Japanese wooden architectures, tour the historic mining tunnels, and see the legendary gold-mining relics.",
        icon: "map",
        notes: "At the Gold Museum, you can touch a real 220kg solid 99.9% gold bar and tour an old Japanese colonial gold-mining tunnel.",
        coords: { x: 68, y: 13 }
      },
      {
        id: "19-4",
        time: "16:00",
        title: "Return to Taipei",
        locationName: "Northeast Coast back to Taipei City",
        chineseName: "返回台北",
        description: "Conclude your scenic exploration of the Northeast Coast and return comfortable to Taipei in our private transfer shuttle.",
        icon: "truck",
        notes: "Rest and recharge on the highway ride back to Madison Taipei Hotel.",
        coords: { x: 53, y: 18 }
      },
      {
        id: "19-5",
        time: "19:00",
        title: "Taipei 101 High-Altitude Dinner",
        locationName: "Diamond Tony's 101 (85F)",
        chineseName: "台北101隨意鳥地方85樓",
        description: "Return to Taipei and ride the high-speed elevator to the 85th floor of Taipei 101 for Italian fine dining in the clouds.",
        icon: "sunset",
        notes: "A wonderful celebration dinner with leadership from Cathay General Hospital to discuss residency competency-based education milestones.",
        coords: { x: 53, y: 16 }
      }
    ]
  },
  {
    date: "7/20",
    dayOfWeek: "Mon",
    theme: "Taipei Culture - Transfer to Cingjing",
    subtitle: "Historic Temples, Gourmet Xiaolongbao & Alpine Drive",
    breakfast: "Hotel breakfast (06:30 - 10:30, 2nd Floor)",
    lunch: "Din Tai Fung (鼎泰豐 新光三越 A4店)",
    lunchNotes: "World-famous Michelin-recognized soup dumplings. Every single dumpling is hand-folded with exactly 18 delicate pleats.",
    dinner: "The Old England Manor Banquet (老英格蘭西餐廳)",
    dinnerNotes: "A luxury multi-course fine-dining European dinner inside the gothic cathedral banquet hall of The Old England.",
    hotel: "The Old England, Cingjing (老英格蘭莊園)",
    hotelChineseName: "清境老英格蘭莊園",
    hotelNotes: "A breathtaking English Tudor-style luxury castle nestled high in the mist-shrouded central mountains of Nantou.",
    drivers: [
      {
        name: "Mr. Chen (陳先生)",
        phone: "0961-100-049",
        licensePlate: "RDP-7537",
        notes: "Morning / 上午 09:00 - 13:30"
      },
      {
        name: "Mr. Liao (廖本仁 先生)",
        phone: "0963-565792",
        licensePlate: "RFD-8667",
        notes: "Afternoon / 下午 13:30 (Transfer to Cingjing / 往清境接送)"
      }
    ],
    colorScheme: {
      primary: "amber",
      accent: "#e07a5f",
      bg: "bg-amber-50/50"
    },
    activities: [
      {
        id: "20-r1",
        time: "09:00",
        title: "Morning Departure Reminder (上午出發提醒)",
        locationName: "Madison Taipei Hotel",
        chineseName: "台北慕軒飯店 晨間出發提醒",
        description: "The private transfer shuttle to CKS Memorial Hall departs at 09:30. As we will return to the hotel to collect our bags after lunch before transferring south to Cingjing, please complete checkout and leave your luggage stored at the hotel front desk (寄行李).",
        icon: "bell",
        notes: "Driver: Mr. Chen (陳先生, 0961-100-049, License Plate: RDP-7537). Please check out and leave your bags at the hotel lobby/front desk (不需先上行李).",
        coords: { x: 35, y: 18 },
        isReminder: true
      },
      {
        id: "20-1",
        time: "09:30",
        title: "Chiang Kai-shek Memorial Hall",
        locationName: "CKS Memorial Hall & Liberty Square",
        chineseName: "中正紀念堂 & 自由廣場",
        description: "Explore the majestic blue-roofed memorial hall, the towering arches of Liberty Square, and witness the impressive changing of the honorary guard.",
        icon: "landmark",
        notes: "The bronze guard change occurs exactly on the hour. Liberty Square is Taipei's primary public forum.",
        coords: { x: 52, y: 18 }
      },
      {
        id: "20-3",
        time: "11:30",
        title: "Feast of Xiaolongbao at Din Tai Fung",
        locationName: "Din Tai Fung (Shin Kong Mitsukoshi A4)",
        chineseName: "鼎泰豐 (新光三越 A4店)",
        description: "Savor Taiwan's premier culinary export: steaming hot, hand-pleated soup dumplings alongside signature pork chop fried rice and spicy wontons.",
        icon: "soup",
        notes: "Mix 1 part soy sauce with 3 parts ginger vinegar, pierce the dumpling wrapper to release the broth, and enjoy!",
        coords: { x: 53, y: 19 }
      },
      {
        id: "20-4",
        time: "13:30",
        title: "Scenic Transfer to Cingjing Alpine Resort",
        locationName: "Taipei to Nantou Cingjing (3-Hour Scenic Drive)",
        chineseName: "台北開車往南投清境 (3小時山路專車)",
        description: "Return to Madison Taipei Hotel to load the stored luggage, then depart Taipei in a comfortable executive coach. Journey south and climb into the spectacular Central Mountain Range of Nantou County.",
        icon: "truck",
        notes: "Driver: Mr. Liao (廖本仁 先生, 0963-565792, License Plate: RFD-8667). First collect the luggage stored at Madison Taipei (回慕軒飯店載行李).",
        coords: { x: 49, y: 32 }
      },
      {
        id: "20-5",
        time: "17:00",
        title: "Check-in at The Old England Manor",
        locationName: "The Old England, Cingjing",
        chineseName: "老英格蘭莊園",
        description: "Arrive at one of Taiwan's most luxury mountain hideaways. Indulge in high tea, tour the meticulously crafted gothic turrets and English gardens.",
        icon: "hotel",
        notes: "The manor features million-dollar audiophile stereo setups, marble fireplaces, and European antiques in every suite.",
        coords: { x: 46, y: 45 }
      }
    ]
  }
];

export const HOSPITAL_INFO = {
  cathay: {
    name: "Cathay General Hospital",
    chineseName: "國泰綜合醫院",
    founded: 1977,
    specialty: "A premier academic medical center located in the heart of Taipei, pioneering clinical research, competency-based medical training, and high-quality patient-centered care.",
    cbmContribution: "Cathay General Hospital is an absolute leader in Taiwanese residency milestones and entrustable professional activities (EPAs) implementations, adapting international ACGME frameworks beautifully to national clinical settings.",
    iconColor: "#00828a"
  },
  cmuh: {
    name: "China Medical University Hospital",
    chineseName: "中國醫藥大學附設醫院",
    founded: 1980,
    specialty: "Based in Taichung, CMUH is one of Taiwan's largest medical networks, renowned for its cutting-edge cancer centers, multi-specialty trauma systems, and integration of Eastern Traditional Chinese Medicine with Western diagnostics.",
    cbmContribution: "CMUH has successfully pioneered advanced medical simulation centers and digital competency-assessment portfolios, driving nationwide innovation in post-graduate medical training and milestone scoring.",
    iconColor: "#105295"
  }
};

export const TRAVEL_ALERTS = [
  {
    id: "alert-2",
    type: "schedule",
    title: "Long Drive Transfer (Taipei to Cingjing)",
    content: "The scenic drive on Day 3 afternoon climbs from Taipei to Nantou Cingjing (~1,700m). The final hour involves winding mountain roads. If you are prone to motion sickness, we recommend taking a motion-sickness tablet after lunch at Din Tai Fung.",
    day: "7/20"
  },
  {
    id: "alert-3",
    type: "cultural",
    title: "Ningxia Night Market Etiquette",
    content: "Ningxia's Chien Sui Feast is a seated banquet event, meaning we avoid crowds entirely! Tap water is not potable in Taiwan, but bottled water is provided abundantly at the table. Feel free to use fingers for the snacks; hot hand wipes will be supplied.",
    day: "7/18"
  }
];
