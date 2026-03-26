import { useState, useRef } from "react";

const data = {
  name: "Yash Pratap Singh",
  title: "Cybersecurity Enthusiast & Developer",
  subtitle: "B.Tech CSE @ Lovely Professional University | Penetration Testing | Python | OWASP Top 10",
  email: "yashpratap8051@gmail.com",
  phone: "+91-8051821169",
  linkedin: "https://www.linkedin.com/in/yaash-pratap-singh/",
  github: "https://github.com/Yash8051",
  skills: {
    Languages: ["Python", "C", "C++"],
    Frameworks: ["OWASP Top 10", "Penetration Testing", "Basics SOC"],
    "Tools & Platforms": ["Nmap", "Kali Linux", "FTK Imager", "Wireshark", "GitHub"],
    "Soft Skills": ["Problem-Solving", "Teamwork", "Adaptability"],
  },
  projects: [
    {
      title: "Port Scanner & Vulnerability Detector",
      date: "Nov 2025",
      link: "https://github.com/Yash8051/python-port-scanner-and-vulnerability-detector.git",
      tech: ["Python", "Socket Programming", "Port Scanning"],
      points: [
        "Built a Python-based Port Scanner that detects open ports and maps them to common vulnerabilities and risk identification.",
        "Designed the tool suitable for real-world security assessments on small networks.",
        "Implemented a vulnerability database to highlight risks such as FTP anonymous login, SMB exploits and weak MySQL authentication.",
      ],
    },
  ],
  training: [
    {
      title: "Tata Cybersecurity Security Analyst Job Simulation",
      org: "Forage",
      date: "Nov 2025",
      cert: "https://drive.google.com/drive/folders/1yA6oVRTrlHwhwmWUrzxiGmjTol_N0SUe?usp=sharing",
      points: [
        "Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services.",
        "Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives.",
        "Delivered comprehensive documentation and presentations on complex technical concepts.",
      ],
    },
    {
      title: "Data Structures and Algorithm using Python",
      org: "CSE Pathshala",
      date: "July 2025",
      cert: "https://drive.google.com/file/d/1Zc8XJlPJAkGquKXyyTZz_F1_kmTJrgJ5/view?usp=sharing",
      points: [
        "Implemented core Data Structures including Arrays, Linked Lists, Stacks, Queues, Hash Maps, Heap and Binary Trees.",
        "Gained strong problem-solving skills and developed Python programs for real-world scenarios.",
        "Applied algorithms for Sorting, Searching, Recursion, Dynamic Programming and Graph.",
      ],
    },
  ],
  certificates: [
    { name: "ChatGPT-4 Prompt Engineering", org: "Infosys", date: "Aug 2025", link: "https://drive.google.com/drive/folders/1yA6oVRTrlHwhwmWUrzxiGmjTol_N0SUe?usp=sharing" },
    { name: "Cloud Computing Certification", org: "NPTEL", date: "Apr 2025", link: "https://drive.google.com/drive/folders/1yA6oVRTrlHwhwmWUrzxiGmjTol_N0SUe?usp=sharing" },
    { name: "Software Engineering: Implementation", org: "Coursera", date: "Apr 2024", link: "https://drive.google.com/file/d/1O4X4ocpNZqQEpmBxpgIoonGxGe29Zm9J/view?usp=sharing" },
  ],
  achievements: [
    { text: "Joined complete Bug Bounty Workshop at LPU", date: "Nov 2025" },
    { text: 'Participation in "Code-A-Haunt" Hackathon held at LPU', date: "March 2025" },
  ],
  education: [
    { school: "Lovely Professional University", location: "Punjab, India", degree: "B.Tech - Computer Science and Engineering", detail: "CGPA: 7.18", period: "Since Aug 2023" },
    { school: "Guru Gobind Singh Public School", location: "Jharkhand, India", degree: "Intermediate", detail: "64.6%", period: "Apr 2022 – Mar 2023" },
    { school: "Guru Gobind Singh Public School", location: "Jharkhand, India", degree: "Matriculation", detail: "74.4%", period: "Apr 2020 – Mar 2021" },
  ],
};

const RESUME_PDF_PLACEHOLDER = null; // User will paste PDF as base64 or URL here

const NAV_ITEMS = ["About", "Skills", "Projects", "Training", "Certificates", "Education", "Connect"];

function NavBar({ active, setActive }) {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(10,10,18,0.92)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,255,136,0.10)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0.7rem 2.5rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#00ff88,#00c8ff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "0.65rem", color: "#0a0a12", letterSpacing: 1 }}>YPS</span>
        </div>
        <span style={{ fontFamily: "monospace", color: "#00ff88", fontWeight: 700, fontSize: "0.95rem", letterSpacing: 2 }}>YPS</span>
      </div>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        {NAV_ITEMS.map(item => (
          <button key={item} onClick={() => setActive(item)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: active === item ? "#00ff88" : "rgba(255,255,255,0.45)",
              fontSize: "0.78rem", fontFamily: "monospace", letterSpacing: 1,
              textTransform: "uppercase", padding: "0.3rem 0",
              borderBottom: active === item ? "2px solid #00ff88" : "2px solid transparent",
              transition: "all 0.2s",
            }}>
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

function InitialsAvatar() {
  return (
    <div style={{ width: 110, height: 110, borderRadius: "50%", background: "linear-gradient(135deg,#00ff88,#00c8ff,#ff6b35)", padding: 3, flexShrink: 0 }}>
      <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#16161f", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "1.5rem", background: "linear-gradient(135deg,#00ff88,#00c8ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: 2 }}>YPS</span>
      </div>
    </div>
  );
}

function ProfileAvatar_UNUSED({ size = 110, img, onUpload, showLabel = false }) {
  const fileRef = useRef();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
      <div
        title="Click to upload photo"
        onClick={() => fileRef.current && fileRef.current.click()}
        style={{
          width: size, height: size, borderRadius: "50%",
          background: "linear-gradient(135deg,#00ff88,#00c8ff,#ff6b35)",
          padding: 3, cursor: "pointer", position: "relative",
          boxSizing: "border-box",
        }}>
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          background: "#16161f", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {img ? (
            <img src={img} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: size > 80 ? "0.7rem" : "0.55rem", padding: "0.3rem" }}>
              <div style={{ fontSize: size > 80 ? "2rem" : "1.2rem", marginBottom: 2 }}>👤</div>
              {size > 60 && <div style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#00ff88", opacity: 0.7 }}>Click to upload</div>}
            </div>
          )}
        </div>
      </div>
      <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }}
        onChange={e => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = ev => onUpload && onUpload(ev.target.result);
          reader.readAsDataURL(file);
        }} />
      {showLabel && <span style={{ fontFamily: "monospace", fontSize: "0.6rem", color: "#00ff88", opacity: 0.6, letterSpacing: 1 }}>UPLOAD PHOTO</span>}
    </div>
  );
}

function Tag({ children, color = "#00ff88" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "0.2rem 0.65rem",
      borderRadius: 4,
      background: color === "#00ff88" ? "rgba(0,255,136,0.08)" : color === "#00c8ff" ? "rgba(0,200,255,0.08)" : "rgba(255,107,53,0.08)",
      border: `1px solid ${color}33`,
      color: color,
      fontFamily: "monospace",
      fontSize: "0.7rem",
      letterSpacing: 0.5,
    }}>{children}</span>
  );
}

function Card({ children, style = {} }) {
  return (
    <div style={{
      background: "#16161f",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 12,
      padding: "1.5rem",
      ...style,
    }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
      <span style={{ fontFamily: "monospace", color: "#00ff88", fontSize: "0.7rem", letterSpacing: 3, opacity: 0.6 }}>▶</span>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", margin: 0 }}>{children}</h2>
      <div style={{ flex: 1, height: 1, background: "rgba(0,255,136,0.12)" }} />
    </div>
  );
}

function HeroSection() {
  return (
    <section style={{
      minHeight: "88vh", display: "flex", alignItems: "center", justifyContent: "center",
      padding: "5rem 2rem 3rem",
      background: "radial-gradient(ellipse at 60% 40%, rgba(0,255,136,0.05) 0%, transparent 60%), #0a0a12",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid BG */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,255,136,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,0.03) 1px,transparent 1px)",
        backgroundSize: "56px 56px",
      }} />
      <div style={{ maxWidth: 900, width: "100%", display: "flex", gap: "4rem", alignItems: "center", flexWrap: "wrap", position: "relative", zIndex: 2 }}>
        <InitialsAvatar />
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "monospace", fontSize: "0.72rem", color: "#00ff88", letterSpacing: 2,
            border: "1px solid rgba(0,255,136,0.25)", padding: "0.28rem 0.75rem", borderRadius: 3,
            marginBottom: "1.2rem",
          }}>
            <span style={{ width: 6, height: 6, background: "#00ff88", borderRadius: "50%", animation: "blink 1.5s infinite" }} />
            AVAILABLE FOR OPPORTUNITIES
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 800, lineHeight: 1.06, marginBottom: "0.7rem", color: "#fff" }}>
            Yash Pratap<br />
            <span style={{ color: "#00ff88" }}>Singh</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: 480 }}>
            {data.subtitle}
          </p>
          <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}>
            <a href={data.linkedin} target="_blank" rel="noreferrer" style={btnStyle("#00c8ff")}>LinkedIn ↗</a>
            <a href={data.github} target="_blank" rel="noreferrer" style={btnStyle("#00ff88")}>GitHub ↗</a>
            <a href={`mailto:${data.email}`} style={btnStyle("#ff6b35")}>Email ↗</a>
            <ResumeButton />
          </div>
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
            <Stat label="Projects" value="1+" />
            <Stat label="Certifications" value="3+" />
            <Stat label="CGPA" value="7.18" />
          </div>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  );
}

function btnStyle(color) {
  return {
    display: "inline-flex", alignItems: "center",
    padding: "0.65rem 1.4rem",
    border: `1px solid ${color}55`,
    borderRadius: 6, color, textDecoration: "none",
    fontFamily: "monospace", fontSize: "0.78rem", letterSpacing: 1,
    background: `${color}0d`,
    transition: "all 0.2s",
    cursor: "pointer",
  };
}

function Stat({ label, value }) {
  return (
    <div>
      <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#00ff88" }}>{value}</div>
      <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", fontFamily: "monospace", letterSpacing: 1 }}>{label}</div>
    </div>
  );
}

function ResumeButton() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [viewing, setViewing] = useState(false);
  const fileRef = useRef();

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPdfUrl(url);
  };

  return (
    <>
      <input ref={fileRef} type="file" accept="application/pdf" style={{ display: "none" }} onChange={handleFile} />
      {!pdfUrl ? (
        <button onClick={() => fileRef.current.click()} style={{ ...btnStyle("rgba(255,255,255,0.5)"), background: "rgba(255,255,255,0.04)", cursor: "pointer", border: "1px dashed rgba(255,255,255,0.2)" }}>
          + Upload Resume PDF
        </button>
      ) : (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={() => setViewing(true)} style={{ ...btnStyle("#fff"), cursor: "pointer" }}>View Resume</button>
          <a href={pdfUrl} download="Yash_Pratap_Singh_Resume.pdf" style={btnStyle("#00ff88")}>⬇ Download</a>
        </div>
      )}
      {viewing && pdfUrl && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.9)", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", padding: "1rem",
        }}>
          <div style={{ width: "100%", maxWidth: 860, background: "#16161f", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(0,255,136,0.15)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1.25rem", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ fontFamily: "monospace", color: "#00ff88", fontSize: "0.8rem", letterSpacing: 1 }}>RESUME PREVIEW</span>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a href={pdfUrl} download="Yash_Pratap_Singh_Resume.pdf" style={{ ...btnStyle("#00ff88"), fontSize: "0.7rem", padding: "0.35rem 0.9rem" }}>⬇ Download</a>
                <button onClick={() => setViewing(false)} style={{ background: "rgba(255,100,100,0.1)", border: "1px solid rgba(255,100,100,0.3)", color: "#ff6b6b", borderRadius: 6, padding: "0.35rem 0.75rem", cursor: "pointer", fontFamily: "monospace", fontSize: "0.75rem" }}>✕ Close</button>
              </div>
            </div>
            <iframe src={pdfUrl} title="Resume" style={{ width: "100%", height: "75vh", border: "none", display: "block" }} />
          </div>
        </div>
      )}
    </>
  );
}

function SkillsSection() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle>Skills</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem" }}>
        {Object.entries(data.skills).map(([cat, items]) => (
          <Card key={cat}>
            <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#00c8ff", letterSpacing: 2, marginBottom: "0.85rem", textTransform: "uppercase" }}>{cat}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {items.map(s => <Tag key={s} color={cat === "Languages" ? "#00ff88" : cat.includes("Tools") ? "#ff6b35" : "#00c8ff"}>{s}</Tag>)}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle>Projects</SectionTitle>
      {data.projects.map((p, i) => (
        <Card key={i} style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🔍</div>
              <div>
                <h3 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700, margin: 0 }}>{p.title}</h3>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#00c8ff", textDecoration: "none" }}>GitHub ↗</a>
              </div>
            </div>
            <Tag color="#ff6b35">{p.date}</Tag>
          </div>
          <ul style={{ paddingLeft: "1.2rem", margin: "0.75rem 0", color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.8 }}>
            {p.points.map((pt, j) => <li key={j}>{pt}</li>)}
          </ul>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
            {p.tech.map(t => <Tag key={t} color="#00ff88">{t}</Tag>)}
          </div>
        </Card>
      ))}
    </section>
  );
}

function TrainingSection() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle>Training</SectionTitle>
      {data.training.map((t, i) => (
        <Card key={i} style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <div>
              <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, margin: "0 0 0.2rem" }}>{t.title}</h3>
              <span style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#00c8ff" }}>{t.org}</span>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <Tag color="#ff6b35">{t.date}</Tag>
              <a href={t.cert} target="_blank" rel="noreferrer" style={{ ...btnStyle("#00ff88"), fontSize: "0.65rem", padding: "0.2rem 0.6rem" }}>Certificate ↗</a>
            </div>
          </div>
          <ul style={{ paddingLeft: "1.2rem", margin: 0, color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.8 }}>
            {t.points.map((pt, j) => <li key={j}>{pt}</li>)}
          </ul>
        </Card>
      ))}
    </section>
  );
}

function CertificatesSection() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle>Certificates & Achievements</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
        {data.certificates.map((c, i) => (
          <Card key={i}>
            <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>🏅</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem", marginBottom: "0.25rem" }}>{c.name}</div>
            <div style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#00c8ff", marginBottom: "0.5rem" }}>{c.org} · {c.date}</div>
            <a href={c.link} target="_blank" rel="noreferrer" style={{ fontFamily: "monospace", fontSize: "0.65rem", color: "#00ff88", textDecoration: "none" }}>View Certificate ↗</a>
          </Card>
        ))}
      </div>
      <SectionTitle>Achievements</SectionTitle>
      {data.achievements.map((a, i) => (
        <div key={i} style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "1rem 1.25rem", background: "#16161f", borderRadius: 8, marginBottom: "0.75rem",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ color: "#00ff88", fontSize: "1rem" }}>🏆</span>
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>{a.text}</span>
          </div>
          <Tag color="#ff6b35">{a.date}</Tag>
        </div>
      ))}
    </section>
  );
}

function EducationSection() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle>Education</SectionTitle>
      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#00ff88,#00c8ff,rgba(0,200,255,0))" }} />
        {data.education.map((e, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "2rem" }}>
            <div style={{
              position: "absolute", left: -30, top: 4,
              width: 12, height: 12, borderRadius: "50%",
              background: i === 0 ? "#00ff88" : "#00c8ff",
              border: "2px solid #0a0a12",
              boxShadow: `0 0 8px ${i === 0 ? "#00ff88" : "#00c8ff"}`,
            }} />
            <Card>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, margin: 0 }}>{e.school}</h3>
                <Tag color="#ff6b35">{e.period}</Tag>
              </div>
              <div style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#00c8ff", marginBottom: "0.35rem" }}>{e.degree}</div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <span style={{ fontFamily: "monospace", fontSize: "0.8rem", color: "#00ff88", fontWeight: 700 }}>{e.detail}</span>
                <span style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)" }}>{e.location}</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConnectSection() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <SectionTitle>Let's Connect</SectionTitle>
      <Card style={{
        background: "linear-gradient(135deg, #16161f 0%, #1a1a2e 100%)",
        border: "1px solid rgba(0,255,136,0.15)",
        textAlign: "center",
        padding: "3rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle at 50% 0%, rgba(0,255,136,0.07) 0%, transparent 60%)",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>👋</div>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
            Open to <span style={{ color: "#00ff88" }}>Opportunities</span>
          </h3>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 540, margin: "0 auto 2rem" }}>
            I'm currently open to internship opportunities, freelance projects, and collaborations.
            Whether you have a project idea or just want to connect — my inbox is always open.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            {[
              { label: "Internships", icon: "💼", color: "#00ff88" },
              { label: "Freelance", icon: "🛠", color: "#00c8ff" },
              { label: "Collaborations", icon: "🤝", color: "#ff6b35" },
            ].map(({ label, icon, color }) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.5rem 1.1rem",
                background: color + "0d",
                border: `1px solid ${color}33`,
                borderRadius: 8,
                color,
                fontFamily: "monospace",
                fontSize: "0.78rem",
                letterSpacing: 0.5,
              }}>
                <span>{icon}</span> {label}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${data.email}`} style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.85rem 2rem",
              background: "#00ff88",
              color: "#0a0a12",
              borderRadius: 8,
              fontFamily: "monospace",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: 1,
              textDecoration: "none",
            }}>✉ Say Hello</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.85rem 2rem",
              border: "1px solid rgba(0,200,255,0.4)",
              color: "#00c8ff",
              borderRadius: 8,
              fontFamily: "monospace",
              fontSize: "0.85rem",
              letterSpacing: 1,
              textDecoration: "none",
              background: "rgba(0,200,255,0.05)",
            }}>LinkedIn ↗</a>
          </div>
          <div style={{ marginTop: "1.75rem", fontFamily: "monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.25)", letterSpacing: 1 }}>
            📧 {data.email} &nbsp;·&nbsp; 📞 {data.phone}
          </div>
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "2.5rem 2rem", borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.25)", fontFamily: "monospace", fontSize: "0.72rem", letterSpacing: 1 }}>
      <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
        <a href={data.linkedin} target="_blank" rel="noreferrer" style={{ color: "#00c8ff", textDecoration: "none" }}>LinkedIn</a>
        <a href={data.github} target="_blank" rel="noreferrer" style={{ color: "#00ff88", textDecoration: "none" }}>GitHub</a>
        <a href={`mailto:${data.email}`} style={{ color: "#ff6b35", textDecoration: "none" }}>Email</a>
        <a href={`tel:${data.phone}`} style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{data.phone}</a>
      </div>
      © 2025 Yash Pratap Singh · Built with React
    </footer>
  );
}

const SECTION_MAP = {
  About: null,
  Skills: SkillsSection,
  Projects: ProjectsSection,
  Training: TrainingSection,
  Certificates: CertificatesSection,
  Education: EducationSection,
  Connect: ConnectSection,
};

export default function App() {
  const [active, setActive] = useState("About");

  const renderSection = () => {
    if (active === "About") {
      return (
        <>
          <SkillsSection />
          <ProjectsSection />
          <TrainingSection />
          <CertificatesSection />
          <EducationSection />
          <ConnectSection />
        </>
      );
    }
    const Comp = SECTION_MAP[active];
    return Comp ? <Comp /> : null;
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a12", color: "#e8e8f0", fontFamily: "'Syne', 'Segoe UI', sans-serif" }}>
      <NavBar active={active} setActive={setActive} />
      <HeroSection />
      <div style={{ background: "#0a0a12" }}>
        {renderSection()}
      </div>
      <Footer />
    </div>
  );
}
