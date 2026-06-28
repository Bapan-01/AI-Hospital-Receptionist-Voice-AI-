require("dotenv").config();

const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Voice Agent is running!");
});

// 👇 ADD THIS NEW ROUTE
app.post("/book-appointment", (req, res) => {
  const { name, doctor, date, time } = req.body;

  console.log("Appointment Request:");
  console.log({
    name,
    doctor,
    date,
    time,
  });

  res.json({
    success: true,
    message: `${name}'s appointment with Dr. ${doctor} has been booked for ${date} at ${time}.`,
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});