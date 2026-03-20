import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const videos = [
    process.env.PUBLIC_URL + "/1.mp4",
    process.env.PUBLIC_URL + "/2.mp4",
    process.env.PUBLIC_URL + "/3.mp4",
    process.env.PUBLIC_URL + "/4.mp4",
    process.env.PUBLIC_URL + "/5.mp4",
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
        padding: "clamp(10px, 3vw, 30px)",
        position: "relative",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundPosition: "0 0, 12px 12px",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {!showVideo ? (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              maxWidth: "600px",
              backgroundColor: "rgba(255,255,255,0.95)",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              borderRadius: "20px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(1rem, 2vw, 1.5rem)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(1.8rem, 6vw, 3.2rem)",
                fontWeight: "900",
                color: "#047857",
              }}
            >
              🌙 Eid Mubarak ✨
            </h1>

            <p
              style={{
                fontSize: "clamp(0.95rem, 2.8vw, 1.3rem)",
                color: "#065F46",
                lineHeight: "1.7",
                fontWeight: "500",
              }}
            >
              Wishing you and your family a joyous and blessed Eid! <br />
              May all your prayers be accepted and your heart be filled with joy.
            </p>

            <button
              onClick={handleSurprise}
              style={{
                padding: "clamp(0.6rem, 2vw, 1rem) clamp(1.2rem, 3vw, 2rem)",
                fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                fontWeight: "bold",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#FBBF24",
                color: "#065F46",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              🎁 Surprise
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <video
              key={videoUrl}
              src={videoUrl}
              controls
              autoPlay
              playsInline
              style={{
                width: "100%",
                maxWidth: "900px",
                borderRadius: "15px",
                boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
