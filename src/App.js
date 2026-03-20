import { useState } from "react";
import { motion } from "framer-motion";

export default function EidSurpriseApp() {
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  const videos = [
    "/1.MP4",
    "/2.MP4",
    "/3.MP4",
    "/4.MP4",
    "/5.MP4",
    "/6.MP4"
  ];

  const handleSurprise = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setVideoUrl(videos[randomIndex]);
    setShowVideo(true);
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
      background: "linear-gradient(to bottom right, #10B981, #A7F3D0)", // Green & Gold feel
      padding: "20px",
      overflow: "hidden",
      position: "relative"
    }}>
     

      <div style={{ maxWidth: "500px", width: "100%" }}>
        {!showVideo && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundColor: "rgba(255,255,255,0.9)",
              padding: "30px",
              borderRadius: "20px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}
          >
            <h1 style={{ fontSize: "45px", fontWeight: "900", color: "#047857" }}>
              🌙 Eid Mubarak ✨
            </h1>

            <p style={{ color: "#065F46", fontSize: "20px", lineHeight: "1.6", fontWeight: 600 }}>
              Wishing you and your family a joyous and blessed Eid!<br />
              May all your prayers be accepted and your heart be filled with joy on this beautiful occasion of Eid.
              Ameen.
            </p>

            <button 
              onClick={handleSurprise}
              style={{
                padding: "12px 20px",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "10px",
                border: "none",
                backgroundColor: "#FBBF24", // Gold button
                color: "#047857", // Dark green text
                cursor: "pointer"
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
            style={{ marginTop: "20px" }}
          >
            <video 
              src={videoUrl} 
              controls 
              autoPlay 
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}