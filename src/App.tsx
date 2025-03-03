import { useRef, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FaGithub, FaSteam, FaTimes, FaDiscord } from "react-icons/fa";
import Repositories from "./Repos";

const name = "tosterlolz";

const links = [
  { name: "GitHub", url: `https://github.com/${name}`, icon: <FaGithub /> },
  { name: "Steam", url: `https://steamcommunity.com/id/${name}/`, icon: <FaSteam /> },
];

export default function App() {
  const reposRef = useRef<HTMLDivElement>(null);
  const [showWidget, setShowWidget] = useState(false); // Ukryte na start

  const scrollToRepos = () => {
    reposRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-dark text-white">
      <div className="d-flex vh-100 justify-content-center align-items-center text-center">
        <Container>
          <h1 className="fw-bold">Welcome to My Portfolio</h1>
          <p className="text-secondary">A simple personal site showcasing my work and projects.</p>
          <div className="d-flex gap-3 justify-content-center mt-3">
            {links.map((link) => (
              <Button
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                className="d-flex align-items-center gap-2"
              >
                {link.icon} {link.name}
              </Button>
            ))}
          </div>
          <Button variant="light" className="mt-4" onClick={scrollToRepos}>
            ↓ View My Projects
          </Button>
        </Container>
      </div>

      <div ref={reposRef}>
        <Repositories />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        {showWidget ? (
          <div style={{ position: "relative" }}>
            <Button
              variant="dark"
              onClick={() => setShowWidget(false)}
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                zIndex: 1100,
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FaTimes />
            </Button>
            <iframe
              src="https://discord.com/widget?id=1343232262472470560&theme=dark"
              width="350"
              height="500"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              style={{
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
              title="Discord Widget"
            ></iframe>
          </div>
        ) : (
          <Button variant="primary" onClick={() => setShowWidget(true)}>
            <FaDiscord /> Show Discord
          </Button>
        )}
      </div>
    </div>
  );
}
