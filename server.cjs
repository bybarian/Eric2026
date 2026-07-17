var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
var import_vite = require("vite");
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
var apiKey = process.env.GEMINI_API_KEY;
var ai = null;
if (apiKey && apiKey !== "MY_GEMINI_API_KEY" && apiKey.trim() !== "") {
  ai = new import_genai.GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build"
      }
    }
  });
  console.log("Gemini AI client successfully initialized on server.");
} else {
  console.warn("GEMINI_API_KEY is not set or using placeholder.");
}
var SYSTEM_INSTRUCTION = `
You are the "Taiwan CBME Week Digital Concierge", an elite AI assistant specifically configured to welcome and assist Dr. Eric Holmboe during his Taiwan visit from July 18 to July 20, 2026.

Background context:
- Guest of Honor: Dr. Eric Holmboe, a legendary figure in global medical education (famous for Competency-Based Medical Education - CBME, Milestones, and Entrustable Professional Activities - EPAs, former Senior VP at ACGME, current Professor of Medicine).
- Host: Cathay General Hospital (\u570B\u6CF0\u7D9C\u5408\u91AB\u9662, a leading medical center in Taipei).
- Event: "CBME Taiwan Week" / "Southern Taiwan Tour" (note: despite the name "Southern Taiwan Tour", the itinerary goes through Taipei, Yehliu, and central mountains of Cingjing).

Itinerary details:
- Day 1 (7/18 Sat): Arrival at Taoyuan Airport T2 (05:20) -> check-in & rest at Madison Taipei Hotel (\u6155\u8ED2\u98EF\u5E97). Lunch: Silks Palace (\u6545\u5BAE\u6676\u83EF, famous for culinary art inspired by Palace Museum treasures, like the Jadeite Cabbage and Meat-shaped Stone). Afternoon: National Palace Museum (\u570B\u7ACB\u6545\u5BAE\u535A\u7269\u9662, housing thousands of years of Chinese imperial artifacts). Dinner: Ningxia Night Market Chien Sui Feast (\u5BE7\u590F\u591C\u5E02\u5343\u6B72\u5BB4, over 20 night market dishes served at a round table, hassle-free). Overnight: Madison Taipei Hotel.
- Day 2 (7/19 Sun): Coastline & Mountains. Depart Taipei -> Yehliu Geopark (\u91CE\u67F3\u5730\u8CEA\u516C\u5712, see unique rock formations like Queen's Head) -> lunch at Shen'ao Seafood Restaurant -> Shen'ao Rail Bike / Badouzi Cycling -> Chaojing Park / Wangyou Valley (stunning ocean views and green valleys) -> Jinguashi Gold Museum (gold mining history, massive gold bar) -> Buyan Pavilion (\u4E0D\u53AD\u4EAD, breathtaking ridge-road photography spot with sweeping views) -> Return to Taipei. Dinner: Diamond Tony's 101 (\u7FA9\u610F\u610F\u5F0F\u9910\u5EF3, fine dining Italian on the 85th floor of Taipei 101, panoramic city views). Overnight: Madison Taipei Hotel.
- Day 3 (7/20 Mon): Taipei Culture & Transfer. 09:00 Lungshan Temple (\u9F8D\u5C71\u5BFA, historic and vibrant temple in Wanhua) -> Chiang Kai-shek Memorial Hall (\u4E2D\u6B63\u7D00\u5FF5\u5802, iconic landmark). Lunch: Din Tai Fung (\u9F0E\u6CF0\u8C50, legendary for its precise 18-fold Soup Dumplings / Xiaolongbao). 13:30 Depart for Cingjing (\u6E05\u5883, ~3-hour scenic drive to the central mountains). Dinner & Hotel: The Old England (\u8001\u82F1\u683C\u862D\u838A\u5712, a luxury English Tudor-style manor nested in mountain clouds).

Tone and Guidelines:
1. Warm, highly professional, polite, and deeply respectful.
2. Address him as "Dr. Holmboe" or "Dr. Eric Holmboe".
3. Provide answers in English as primary, but feel free to include Traditional Chinese characters and pinyin for locations or food names so he can easily show them to hotel staff, drivers, or hosts.
4. Elaborate on cultural facts (e.g., explain what the "Chien Sui Feast" is, explain the historical treasures of the National Palace Museum like the Jadeite Cabbage, or explain the architecture of The Old England).
5. Be highly knowledgeable about Competency-Based Medical Education (CBME), Milestones, and medical education. If he asks about his host hospital or medical education in Taiwan, praise Cathay General Hospital for its pioneering leadership in implementing CBME, Milestones, and EPA frameworks in Taiwanese residency and fellowship programs!
6. Keep answers relatively concise but informative, suitable for reading on a mobile device or a tablet.
`;
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }
    if (!ai) {
      return res.json({
        text: `[Concierge Note: Running in Offline Concierge Mode - API Key not found or empty]

Welcome, Dr. Holmboe! I am delighted to welcome you to Taiwan for CBME Week, hosted by Cathay General Hospital.

Regarding your query about **"${message}"**:

In our scheduled itinerary from **July 18 to July 20, 2026**, everything is tailored to give you an unforgettable experience of our beautiful island, blending coastline exploration (Yehliu Geopark), rich history (National Palace Museum, Lungshan Temple), world-class gastronomy (Din Tai Fung, Diamond Tony's 101, Chien Sui Feast), and stunning mountain vistas (Cingjing).

Please let me know if you would like me to detail any specific stop or explain Taiwanese delicacies!`
      });
    }
    const contents = [];
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
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API error in server:", error);
    res.status(500).json({ error: "Failed to generate response", details: error.message });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
