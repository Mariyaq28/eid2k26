// App.js
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const videos = [
    "/1.mp4",
    "/2.mp4",
    "/3.mp4",
    "/4.mp4",
    "/5.mp4"
    
  ];

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setVideoUrl(videos[randomIndex]);
    setShowVideo(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #10B981, #A7F3D0)",
        padding: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Pattern overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundPosition: "0 0, 10px 10px",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", justifyContent: "center" }}>
        {!showVideo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundColor: "rgba(255,255,255,0.95)",
              padding: "2rem",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              width: "90%",
              maxWidth: "500px",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 900,
                color: "#047857",
              }}
            >
              🌙 Eid Mubarak ✨
            </h1>

            <p
              style={{
                color: "#065F46",
                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                lineHeight: 1.6,
                fontWeight: 600,
              }}
            >
              Wishing you and your family a joyous and blessed Eid!<br />
              May all your prayers be accepted and your heart be filled with joy on this beautiful occasion of Eid. Ameen.
            </p>

            <button
              onClick={handleSurprise}
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                fontWeight: "bold",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#FBBF24",
                color: "#047857",
                cursor: "pointer",
              }}
            >
              🎁 Surprise
            </button>
          </motion.div>
        )}

        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <video
              src={videoUrl}
              controls
              autoPlay
              style={{
                width: "90%",
                maxWidth: "500px",
                borderRadius: "15px",
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
