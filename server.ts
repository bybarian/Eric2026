import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK safely
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.trim() !== "") {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
  console.log("Gemini AI client successfully initialized on server.");
} else {
  console.warn("GEMINI_API_KEY is not set or using placeholder.");
}

// System instruction for the Gemini digital concierge
const SYSTEM_INSTRUCTION = `
You are the "Taiwan CBME Week Digital Concierge", an elite AI assistant specifically configured to welcome and assist Dr. Eric Holmboe during his Taiwan visit from July 18 to July 20, 2026.

Background context:
- Guest of Honor: Dr. Eric Holmboe, a legendary figure in global medical education (famous for Competency-Based Medical Education - CBME, Milestones, and Entrustable Professional Activities - EPAs, former Senior VP at ACGME, current Professor of Medicine).
- Host: Cathay General Hospital (國泰綜合醫院, a leading medical center in Taipei).
- Event: "CBME Taiwan Week" / "Southern Taiwan Tour" (note: despite the name "Southern Taiwan Tour", the itinerary goes through Taipei, Yehliu, and central mountains of Cingjing).

Itinerary details:
- Day 1 (7/18 Sat): Arrival at Taoyuan Airport T2 (05:20) -> check-in & rest at Madison Taipei Hotel (慕軒飯店). Lunch: Silks Palace (故宮晶華, famous for culinary art inspired by Palace Museum treasures, like the Jadeite Cabbage and Meat-shaped Stone). Afternoon: National Palace Museum (國立故宮博物院, housing thousands of years of Chinese imperial artifacts). Dinner: Ningxia Night Market Chien Sui Feast (寧夏夜市千歲宴, over 20 night market dishes served at a round table, hassle-free). Overnight: Madison Taipei Hotel.
- Day 2 (7/19 Sun): Coastline & Mountains. Depart Taipei -> Yehliu Geopark (野柳地質公園, see unique rock formations like Queen's Head) -> lunch at Shen'ao Seafood Restaurant -> Shen'ao Rail Bike / Badouzi Cycling -> Chaojing Park / Wangyou Valley (stunning ocean views and green valleys) -> Jinguashi Gold Museum (gold mining history, massive gold bar) -> Buyan Pavilion (不厭亭, breathtaking ridge-road photography spot with sweeping views) -> Return to Taipei. Dinner: Diamond Tony's 101 (義意意式餐廳, fine dining Italian on the 85th floor of Taipei 101, panoramic city views). Overnight: Madison Taipei Hotel.
- Day 3 (7/20 Mon): Taipei Culture & Transfer. 09:00 Lungshan Temple (龍山寺, historic and vibrant temple in Wanhua) -> Chiang Kai-shek Memorial Hall (中正紀念堂, iconic landmark). Lunch: Din Tai Fung (鼎泰豐, legendary for its precise 18-fold Soup Dumplings / Xiaolongbao). 13:30 Depart for Cingjing (清境, ~3-hour scenic drive to the central mountains). Dinner & Hotel: The Old England (老英格蘭莊園, a luxury English Tudor-style manor nested in mountain clouds).

Tone and Guidelines:
1. Warm, highly professional, polite, and deeply respectful.
2. Address him as "Dr. Holmboe" or "Dr. Eric Holmboe".
3. Provide answers in English as primary, but feel free to include Traditional Chinese characters and pinyin for locations or food names so he can easily show them to hotel staff, drivers, or hosts.
4. Elaborate on cultural facts (e.g., explain what the "Chien Sui Feast" is, explain the historical treasures of the National Palace Museum like the Jadeite Cabbage, or explain the architecture of The Old England).
5. Be highly knowledgeable about Competency-Based Medical Education (CBME), Milestones, and medical education. If he asks about his host hospital or medical education in Taiwan, praise Cathay General Hospital for its pioneering leadership in implementing CBME, Milestones, and EPA frameworks in Taiwanese residency and fellowship programs!
6. Keep answers relatively concise but informative, suitable for reading on a mobile device or a tablet.
`;

// API routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!ai) {
      // Fallback response if Gemini API key is missing or invalid
      return res.json({
        text: `[Concierge Note: Running in Offline Concierge Mode - API Key not found or empty]\n\nWelcome, Dr. Holmboe! I am delighted to welcome you to Taiwan for CBME Week, hosted by Cathay General Hospital.\n\nRegarding your query about **"${message}"**:\n\nIn our scheduled itinerary from **July 18 to July 20, 2026**, everything is tailored to give you an unforgettable experience of our beautiful island, blending coastline exploration (Yehliu Geopark), rich history (National Palace Museum, Lungshan Temple), world-class gastronomy (Din Tai Fung, Diamond Tony's 101, Chien Sui Feast), and stunning mountain vistas (Cingjing).\n\nPlease let me know if you would like me to detail any specific stop or explain Taiwanese delicacies!`
      });
    }

    // Build chat history content for Gemini API
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      for (const h of history) {
        contents.push({
          role: h.role === "user" ? "user" : "model",
          parts: [{ text: h.content }]
        });
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API error in server:", error);
    res.status(500).json({ error: "Failed to generate response", details: error.message });
  }
});

// Vite middleware for development or serving built files for production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
