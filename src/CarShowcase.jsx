// import { useState, useEffect, useRef } from "react";

// const cars = [
//   {
//     id: 1,
//     name: "M4 Competition",
//     tagline: "Born on the Track",
//     year: "2024",
//     price: "$84,900",
//     badge: "M Series",
//     badgeColor: "#1c69d4",
//     emoji: "🏎️",
//     color: "#1c69d4",
//     accent: "#0a3a6e",
//     specs: { hp: "503", torque: "479 lb-ft", "0-60": "3.4s", top: "180 mph" },
//     features: ["Carbon Fiber Roof", "Adaptive M Suspension", "M Steptronic 8-Speed", "Active M Differential"],
//     desc: "The pinnacle of BMW performance engineering. Track-ready yet street-legal perfection with an iconic twin-turbocharged inline-6.",
//     bg: "linear-gradient(135deg, #0a0a1a 0%, #0d1530 50%, #0a2040 100%)",
//   },
//   {
//     id: 2,
//     name: "7 Series",
//     tagline: "The Art of Luxury",
//     year: "2024",
//     price: "$97,500",
//     badge: "Luxury",
//     badgeColor: "#8b6914",
//     emoji: "🚗",
//     color: "#c9a227",
//     accent: "#8b6914",
//     specs: { hp: "375", torque: "398 lb-ft", "0-60": "4.5s", top: "155 mph" },
//     features: ["Executive Lounge Seating", "Bowers & Wilkins Audio", "Sky Lounge Roof", "Rear Theatre Screen"],
//     desc: "Redefining automotive luxury for a new era. Where cutting-edge technology meets hand-crafted opulence in every detail.",
//     bg: "linear-gradient(135deg, #0f0c00 0%, #1a1400 50%, #120e00 100%)",
//   },
//   {
//     id: 3,
//     name: "XM Label Red",
//     tagline: "Uncompromising Power",
//     year: "2024",
//     price: "$185,000",
//     badge: "Limited",
//     badgeColor: "#c0392b",
//     emoji: "🔴",
//     color: "#e74c3c",
//     accent: "#7b0000",
//     specs: { hp: "738", torque: "738 lb-ft", "0-60": "3.3s", top: "168 mph" },
//     features: ["M Hybrid Drive", "Active Roll Stabilization", "Integral Active Steering", "Carbon Ceramic Brakes"],
//     desc: "The most powerful BMW ever. A high-performance hybrid SAV that redefines what a luxury performance vehicle can be.",
//     bg: "linear-gradient(135deg, #1a0000 0%, #2d0000 50%, #1a0505 100%)",
//   },
//   {
//     id: 4,
//     name: "i4 M50",
//     tagline: "Electric Performance",
//     year: "2024",
//     price: "$72,800",
//     badge: "Electric",
//     badgeColor: "#27ae60",
//     emoji: "⚡",
//     color: "#2ecc71",
//     accent: "#145a32",
//     specs: { hp: "536", torque: "586 lb-ft", "0-60": "3.7s", top: "140 mph" },
//     features: ["537 km Range", "DC Fast Charging", "M Sport Brakes", "Adaptive LED Headlights"],
//     desc: "The future of M performance. Instant torque, zero emissions, and the unmistakable thrill of pure electric power.",
//     bg: "linear-gradient(135deg, #001a08 0%, #001f0a 50%, #001505 100%)",
//   },
// ];

// const stats = [
//   { num: "110+", label: "Years of Innovation" },
//   { num: "2.5M+", label: "Cars Sold Annually" },
//   { num: "140+", label: "Countries Worldwide" },
//   { num: "#1", label: "Luxury Brand 2024" },
// ];

// const navLinks = ["Models", "Performance", "Technology", "Experience"];

// export default function CarShowcase() {
//   const [active, setActive] = useState(0);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [animKey, setAnimKey] = useState(0);
//   const [contactForm, setContactForm] = useState({ name: "", email: "", model: "", message: "" });
//   const [contactSent, setContactSent] = useState(false);

//   const car = cars[active];

//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   const switchCar = (i) => {
//     setActive(i);
//     setAnimKey(k => k + 1);
//   };

//   const go = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setMobileOpen(false);
//   };

//   return (
//     <div style={{ fontFamily: "sans-serif", background: "#08080f", color: "#fff", overflowX: "hidden", minHeight: "100vh" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,600;0,700;0,900;1,700&family=Barlow:wght@300;400;500&display=swap');

//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

//         :root {
//           --blue: #1c69d4;
//           --dark: #08080f;
//           --dark2: #0e0e1a;
//           --dark3: #13131f;
//           --mid: #888;
//           --border: rgba(255,255,255,0.08);
//           --white: #ffffff;
//         }

//         body { background: var(--dark); }

//         /* NAVBAR */
//         .nav {
//           position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
//           display: flex; align-items: center; justify-content: space-between;
//           padding: 0 48px; height: 72px;
//           transition: all 0.4s;
//         }
//         .nav.scrolled {
//           background: rgba(8,8,15,0.92);
//           backdrop-filter: blur(16px);
//           border-bottom: 1px solid var(--border);
//         }
//         .nav-logo {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 26px; font-weight: 900; letter-spacing: 0.12em;
//           text-transform: uppercase; color: #fff;
//         }
//         .nav-logo span { color: var(--blue); }
//         .nav-links { display: flex; gap: 4px; align-items: center; }
//         .nl {
//           font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
//           background: none; border: none; cursor: pointer; color: rgba(255,255,255,0.6);
//           padding: 8px 16px; border-radius: 8px; transition: all 0.2s; letter-spacing: 0.04em;
//         }
//         .nl:hover { color: #fff; background: rgba(255,255,255,0.06); }
//         .nav-cta {
//           font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
//           background: var(--blue); border: none; cursor: pointer; color: #fff;
//           padding: 10px 22px; border-radius: 8px; transition: all 0.25s; margin-left: 12px;
//           letter-spacing: 0.04em;
//         }
//         .nav-cta:hover { background: #2a7fe8; transform: translateY(-1px); box-shadow: 0 6px 24px rgba(28,105,212,0.4); }
//         .ham { display: none; background: none; border: none; cursor: pointer; padding: 6px; flex-direction: column; gap: 5px; }
//         .ham span { display: block; width: 24px; height: 2px; background: #fff; border-radius: 2px; transition: all 0.3s; }
//         .ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
//         .ham.open span:nth-child(2) { opacity: 0; }
//         .ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
//         .drawer {
//           position: fixed; top: 72px; left: 0; right: 0; z-index: 999;
//           background: rgba(8,8,15,0.98); backdrop-filter: blur(20px);
//           border-bottom: 1px solid var(--border);
//           padding: 16px 24px 24px;
//           transform: translateY(-110%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
//         }
//         .drawer.open { transform: translateY(0); }
//         .dlink {
//           display: block; width: 100%; background: none; border: none; cursor: pointer;
//           font-family: 'Barlow', sans-serif; font-size: 17px; font-weight: 500;
//           color: rgba(255,255,255,0.7); padding: 14px 0; text-align: left;
//           border-bottom: 1px solid var(--border); transition: color 0.2s;
//         }
//         .dlink:last-of-type { border: none; }
//         .dlink:hover { color: #fff; }

//         /* HERO */
//         .hero {
//           min-height: 100vh; position: relative; overflow: hidden;
//           display: flex; align-items: center;
//           padding: 100px 48px 60px;
//           transition: background 0.8s ease;
//         }
//         .hero-grid {
//           max-width: 1300px; margin: 0 auto; width: 100%;
//           display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
//           position: relative; z-index: 2;
//         }
//         .hero-glow {
//           position: absolute; width: 700px; height: 700px; border-radius: 50%;
//           top: 50%; left: 50%; transform: translate(-20%, -50%);
//           opacity: 0.08; transition: background 0.8s;
//           pointer-events: none;
//         }
//         .hero-lines {
//           position: absolute; inset: 0; pointer-events: none;
//           background-image: repeating-linear-gradient(
//             90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px
//           );
//         }

//         /* Car selector tabs */
//         .car-tabs {
//           display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px;
//         }
//         .car-tab {
//           display: flex; align-items: center; gap: 14px;
//           background: rgba(255,255,255,0.03); border: 1px solid var(--border);
//           border-radius: 12px; padding: 14px 18px; cursor: pointer;
//           transition: all 0.25s; text-align: left; width: 100%;
//         }
//         .car-tab:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.15); }
//         .car-tab.active { border-color: transparent; }
//         .ct-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
//         .ct-name { font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
//         .ct-price { font-family: 'Barlow', sans-serif; font-size: 12px; color: rgba(255,255,255,0.45); margin-top: 2px; }
//         .ct-badge {
//           margin-left: auto; font-family: 'Barlow', sans-serif; font-size: 10px;
//           font-weight: 500; padding: 3px 10px; border-radius: 100px; flex-shrink: 0;
//         }

//         /* Hero right */
//         .hero-right { position: relative; }
//         .car-display {
//           background: rgba(255,255,255,0.03); border: 1px solid var(--border);
//           border-radius: 24px; padding: 40px 32px 32px; position: relative; overflow: hidden;
//         }
//         .car-display::before {
//           content: ''; position: absolute; inset: 0; border-radius: 24px;
//           background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%);
//         }
//         .car-emoji-wrap {
//           font-size: 120px; text-align: center; margin-bottom: 24px; display: block;
//           filter: drop-shadow(0 20px 60px rgba(0,0,0,0.6));
//           animation: floatCar 4s ease-in-out infinite;
//         }
//         @keyframes floatCar {
//           0%,100% { transform: translateY(0px); }
//           50% { transform: translateY(-12px); }
//         }
//         .car-enter { animation: carSlide 0.5s ease both; }
//         @keyframes carSlide {
//           from { opacity: 0; transform: translateX(30px); }
//           to { opacity: 1; transform: translateX(0); }
//         }
//         .car-model-badge {
//           position: absolute; top: 20px; right: 20px;
//           font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 500;
//           padding: 6px 14px; border-radius: 100px;
//         }
//         .hero-name {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(48px, 6vw, 80px); font-weight: 900;
//           letter-spacing: -0.02em; line-height: 0.95;
//           text-transform: uppercase; color: #fff; margin-bottom: 8px;
//         }
//         .hero-tagline {
//           font-family: 'Barlow', sans-serif; font-size: 16px; font-weight: 300;
//           color: rgba(255,255,255,0.5); letter-spacing: 0.08em; text-transform: uppercase;
//           margin-bottom: 28px;
//         }
//         .hero-price {
//           font-family: 'Barlow Condensed', sans-serif; font-size: 42px; font-weight: 700;
//           margin-bottom: 24px;
//         }
//         .hero-desc {
//           font-family: 'Barlow', sans-serif; font-size: 15px; font-weight: 300;
//           color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 36px;
//         }
//         .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
//         .btn-blue {
//           font-family: 'Barlow', sans-serif; font-size: 14px; font-weight: 500;
//           background: var(--blue); color: #fff; border: none; cursor: pointer;
//           padding: 14px 28px; border-radius: 10px; transition: all 0.25s;
//           letter-spacing: 0.04em;
//         }
//         .btn-blue:hover { background: #2a7fe8; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(28,105,212,0.4); }
//         .btn-ghost {
//           font-family: 'Barlow', sans-serif; font-size: 14px; font-weight: 500;
//           background: transparent; color: rgba(255,255,255,0.7);
//           border: 1px solid rgba(255,255,255,0.15); cursor: pointer;
//           padding: 14px 28px; border-radius: 10px; transition: all 0.25s;
//         }
//         .btn-ghost:hover { background: rgba(255,255,255,0.06); color: #fff; border-color: rgba(255,255,255,0.3); }

//         /* SPECS */
//         .specs-bar {
//           background: rgba(255,255,255,0.03); border-top: 1px solid var(--border);
//           border-bottom: 1px solid var(--border);
//         }
//         .specs-inner {
//           max-width: 1300px; margin: 0 auto; padding: 36px 48px;
//           display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
//         }
//         .spec-item {
//           text-align: center; padding: 20px;
//           border-right: 1px solid var(--border);
//         }
//         .spec-item:last-child { border-right: none; }
//         .spec-val {
//           font-family: 'Barlow Condensed', sans-serif; font-size: 42px; font-weight: 900;
//           letter-spacing: -0.02em; line-height: 1;
//         }
//         .spec-unit { font-size: 18px; font-weight: 300; opacity: 0.6; }
//         .spec-lbl {
//           font-family: 'Barlow', sans-serif; font-size: 12px; font-weight: 400;
//           color: rgba(255,255,255,0.4); letter-spacing: 0.1em; text-transform: uppercase;
//           margin-top: 8px;
//         }

//         /* FEATURES section */
//         .features-section { max-width: 1300px; margin: 0 auto; padding: 100px 48px; }
//         .sec-tag {
//           font-family: 'Barlow', sans-serif; font-size: 12px; font-weight: 500;
//           letter-spacing: 0.2em; text-transform: uppercase; color: var(--blue);
//           margin-bottom: 16px; display: block;
//         }
//         .sec-title {
//           font-family: 'Barlow Condensed', sans-serif; font-size: clamp(36px, 5vw, 64px);
//           font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em;
//           line-height: 1.0; color: #fff; margin-bottom: 60px;
//         }
//         .sec-title em { font-style: italic; color: rgba(255,255,255,0.3); }
//         .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
//         .feat-card {
//           background: var(--dark3); border: 1px solid var(--border);
//           border-radius: 16px; padding: 28px 24px; transition: all 0.3s;
//         }
//         .feat-card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-4px); background: rgba(255,255,255,0.04); }
//         .feat-icon { font-size: 32px; margin-bottom: 16px; display: block; }
//         .feat-title { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; margin-bottom: 10px; }
//         .feat-desc { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; }

//         /* ALL MODELS */
//         .models-section { background: var(--dark2); border-top: 1px solid var(--border); }
//         .models-inner { max-width: 1300px; margin: 0 auto; padding: 100px 48px; }
//         .models-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
//         .model-card {
//           border-radius: 20px; overflow: hidden; position: relative;
//           border: 1px solid var(--border); cursor: pointer; transition: all 0.3s;
//         }
//         .model-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.2); }
//         .model-card-bg { padding: 40px 36px 36px; position: relative; min-height: 240px; display: flex; flex-direction: column; justify-content: space-between; }
//         .model-emoji-big { font-size: 72px; position: absolute; right: 28px; top: 24px; opacity: 0.7; }
//         .model-badge-sm { display: inline-block; font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
//         .model-name-lg { font-family: 'Barlow Condensed', sans-serif; font-size: 36px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; color: #fff; line-height: 1; }
//         .model-sub { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); margin-top: 6px; }
//         .model-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 28px; }
//         .model-price-lg { font-family: 'Barlow Condensed', sans-serif; font-size: 28px; font-weight: 700; color: #fff; }
//         .model-specs-sm { display: flex; gap: 20px; }
//         .mss { font-family: 'Barlow', sans-serif; font-size: 12px; color: rgba(255,255,255,0.4); }
//         .mss strong { color: rgba(255,255,255,0.8); font-weight: 500; display: block; font-size: 14px; }

//         /* STATS */
//         .stats-section {
//           max-width: 1300px; margin: 0 auto; padding: 80px 48px;
//           display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
//           border-top: 1px solid var(--border);
//         }
//         .stat-item { text-align: center; padding: 32px; border-right: 1px solid var(--border); }
//         .stat-item:last-child { border-right: none; }
//         .stat-n { font-family: 'Barlow Condensed', sans-serif; font-size: 54px; font-weight: 900; color: #fff; line-height: 1; }
//         .stat-l { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.4); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 8px; }

//         /* TECHNOLOGY */
//         .tech-section { background: var(--dark3); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
//         .tech-inner { max-width: 1300px; margin: 0 auto; padding: 100px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
//         .tech-list { display: flex; flex-direction: column; gap: 20px; margin-top: 40px; }
//         .tech-item { display: flex; gap: 20px; align-items: flex-start; padding: 24px; background: var(--dark2); border: 1px solid var(--border); border-radius: 14px; transition: all 0.25s; }
//         .tech-item:hover { border-color: rgba(28,105,212,0.4); background: rgba(28,105,212,0.04); }
//         .tech-icon { font-size: 28px; flex-shrink: 0; }
//         .tech-title { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; margin-bottom: 6px; }
//         .tech-desc { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; }
//         .tech-visual { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 24px; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
//         .tech-big-icon { font-size: 160px; opacity: 0.15; }
//         .tech-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(28,105,212,0.2); }

//         /* CONTACT */
//         .contact-section { max-width: 900px; margin: 0 auto; padding: 100px 48px; }
//         .contact-form { display: grid; gap: 18px; }
//         .form-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
//         .flabel { display: block; font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
//         .finput {
//           width: 100%; background: var(--dark3); border: 1px solid var(--border);
//           color: #fff; padding: 14px 18px; font-size: 14px;
//           font-family: 'Barlow', sans-serif; outline: none;
//           border-radius: 10px; transition: border-color 0.2s;
//         }
//         .finput:focus { border-color: rgba(28,105,212,0.6); background: rgba(28,105,212,0.04); }
//         .finput option { background: var(--dark3); }
//         .submit-full {
//           width: 100%; background: var(--blue); color: #fff; border: none; cursor: pointer;
//           font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700;
//           letter-spacing: 0.1em; text-transform: uppercase;
//           padding: 18px; border-radius: 12px; transition: all 0.25s;
//           box-shadow: 0 4px 24px rgba(28,105,212,0.3);
//         }
//         .submit-full:hover { background: #2a7fe8; transform: translateY(-2px); box-shadow: 0 10px 40px rgba(28,105,212,0.45); }

//         /* FOOTER */
//         .footer { background: #040408; border-top: 1px solid var(--border); padding: 60px 48px 40px; }
//         .footer-inner { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; }
//         .footer-brand p { font-family: 'Barlow', sans-serif; font-size: 14px; color: rgba(255,255,255,0.35); line-height: 1.8; margin-top: 16px; }
//         .footer-col h4 { font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
//         .footer-col a { display: block; font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.3); margin-bottom: 12px; cursor: pointer; transition: color 0.2s; text-decoration: none; }
//         .footer-col a:hover { color: #fff; }
//         .footer-bottom { max-width: 1300px; margin: 48px auto 0; padding-top: 28px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
//         .footer-copy { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.2); }

//         /* SUCCESS */
//         .success-wrap { text-align: center; padding: 60px 0; }
//         .success-big { font-size: 72px; margin-bottom: 24px; display: block; }
//         .success-h { font-family: 'Barlow Condensed', sans-serif; font-size: 36px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; margin-bottom: 12px; }
//         .success-p { font-family: 'Barlow', sans-serif; font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; }

//         /* FADE ANIMATIONS */
//         .fade-up { animation: fadeUp 0.7s ease both; }
//         @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 1100px) {
//           .hero-grid { gap: 36px; }
//           .features-grid { grid-template-columns: repeat(2, 1fr); }
//           .footer-inner { grid-template-columns: 1fr 1fr; gap: 40px; }
//         }
//         @media (max-width: 900px) {
//           .nav { padding: 0 24px; }
//           .nav-links { display: none; }
//           .ham { display: flex; }
//           .hero { padding: 100px 24px 60px; }
//           .hero-grid { grid-template-columns: 1fr; gap: 40px; }
//           .car-tabs { flex-direction: row; flex-wrap: wrap; gap: 10px; }
//           .car-tab { width: auto; flex: 1; min-width: 140px; }
//           .ct-price { display: none; }
//           .specs-inner { grid-template-columns: repeat(2, 1fr); }
//           .spec-item { border-right: none; border-bottom: 1px solid var(--border); }
//           .spec-item:nth-child(odd) { border-right: 1px solid var(--border); }
//           .spec-item:nth-child(3), .spec-item:nth-child(4) { border-bottom: none; }
//           .features-section { padding: 72px 24px; }
//           .models-inner { padding: 72px 24px; }
//           .tech-inner { grid-template-columns: 1fr; gap: 48px; padding: 72px 24px; }
//           .tech-visual { display: none; }
//           .stats-section { grid-template-columns: repeat(2, 1fr); padding: 60px 24px; }
//           .stat-item { border-right: none; border-bottom: 1px solid var(--border); }
//           .stat-item:nth-child(odd) { border-right: 1px solid var(--border); }
//           .stat-item:nth-child(3), .stat-item:nth-child(4) { border-bottom: none; }
//           .contact-section { padding: 72px 24px; }
//           .footer { padding: 48px 24px 32px; }
//           .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px; }
//           .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
//         }
//         @media (max-width: 600px) {
//           .hero-name { font-size: 42px; }
//           .hero-actions { flex-direction: column; }
//           .btn-blue, .btn-ghost { width: 100%; text-align: center; }
//           .models-grid { grid-template-columns: 1fr; }
//           .features-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
//           .form-row2 { grid-template-columns: 1fr; }
//           .car-emoji-wrap { font-size: 80px; }
//           .specs-inner { padding: 24px; }
//           .footer-inner { grid-template-columns: 1fr; gap: 28px; }
//         }
//         @media (max-width: 400px) {
//           .features-grid { grid-template-columns: 1fr; }
//           .car-tabs { flex-direction: column; }
//         }
//       `}</style>

//       {/* NAV */}
//       <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
//         <div className="nav-logo">BMW<span> Fan Boys</span></div>
//         <div className="nav-links">
//           {navLinks.map(l => (
//             <button key={l} className="nl" onClick={() => go(l.toLowerCase())}>{l}</button>
//           ))}
//           <button className="nav-cta" onClick={() => go("contact")}>Configure Now</button>
//         </div>
//         <button className={`ham ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(!mobileOpen)}>
//           <span/><span/><span/>
//         </button>
//       </nav>

//       {/* Mobile Drawer */}
//       <div className={`drawer ${mobileOpen ? "open" : ""}`}>
//         {navLinks.map(l => (
//           <button key={l} className="dlink" onClick={() => go(l.toLowerCase())}>{l}</button>
//         ))}
//         <button className="btn-blue" style={{ width: "100%", marginTop: 16, textAlign: "center" }} onClick={() => go("contact")}>Configure Now →</button>
//       </div>

//       {/* HERO */}
//       <section id="models" style={{ background: car.bg, transition: "background 0.8s ease" }}>
//         <div className="hero">
//           <div className="hero-glow" style={{ background: `radial-gradient(circle, ${car.color} 0%, transparent 70%)` }} />
//           <div className="hero-lines" />
//           <div className="hero-grid">
//             {/* Left: car selector */}
//             <div>
//               <div className="car-tabs">
//                 {cars.map((c, i) => (
//                   <button key={c.id} className={`car-tab ${active === i ? "active" : ""}`}
//                     style={active === i ? { background: `${c.color}18`, borderColor: `${c.color}55` } : {}}
//                     onClick={() => switchCar(i)}>
//                     <div className="ct-dot" style={{ background: c.color }} />
//                     <div>
//                       <div className="ct-name">{c.name}</div>
//                       <div className="ct-price">{c.price}</div>
//                     </div>
//                     <div className="ct-badge" style={{ background: `${c.badgeColor}25`, color: c.badgeColor }}>
//                       {c.badge}
//                     </div>
//                   </button>
//                 ))}
//               </div>

//               <div key={animKey} className="fade-up">
//                 <div className="hero-tagline">{car.tagline} · {car.year}</div>
//                 <div className="hero-name">BMW<br />{car.name}</div>
//                 <div className="hero-price" style={{ color: car.color }}>{car.price}</div>
//                 <div className="hero-desc">{car.desc}</div>
//                 <div className="hero-actions">
//                   <button className="btn-blue" style={{ background: car.color }} onClick={() => go("contact")}>Configure Yours →</button>
//                   <button className="btn-ghost" onClick={() => go("performance")}>View Specs</button>
//                 </div>
//               </div>
//             </div>

//             {/* Right: car display */}
//             <div className="hero-right" key={animKey + "r"}>
//               <div className="car-display">
//                 <div className="car-model-badge" style={{ background: `${car.badgeColor}25`, color: car.badgeColor }}>
//                   {car.badge}
//                 </div>
//                 <span className="car-emoji-wrap car-enter">{car.emoji}</span>
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//                   {car.features.map(f => (
//                     <div key={f} style={{
//                       background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
//                       borderRadius: 10, padding: "12px 14px",
//                       fontFamily: "'Barlow', sans-serif", fontSize: 12,
//                       color: "rgba(255,255,255,0.6)", lineHeight: 1.4
//                     }}>
//                       ✓ {f}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Specs bar */}
//         <div id="performance" className="specs-bar" key={animKey + "s"}>
//           <div className="specs-inner">
//             {Object.entries(car.specs).map(([k, v]) => (
//               <div key={k} className="spec-item">
//                 <div className="spec-val" style={{ color: car.color }}>
//                   {v.replace(/[^0-9.]/g, '')}<span className="spec-unit">{v.replace(/[0-9.]/g, '')}</span>
//                 </div>
//                 <div className="spec-lbl">{k}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section id="technology">
//         <div className="features-section">
//           <span className="sec-tag">Engineering Excellence</span>
//           <h2 className="sec-title">Built for Those<br /><em>Who Drive</em></h2>
//           <div className="features-grid">
//             {[
//               { icon: "🏁", title: "M TwinPower Turbo", desc: "Precision-engineered inline-6 delivering brutal yet refined performance across every rev range." },
//               { icon: "🎮", title: "M Sport Modes", desc: "Multiple drive profiles from comfortable cruising to all-out track assault at the touch of a button." },
//               { icon: "🛡️", title: "Live Cockpit Pro", desc: "14.9\" curved display with gesture control, AR navigation and real-time performance data." },
//               { icon: "🔊", title: "Bowers & Wilkins", desc: "20-speaker Diamond Surround Sound system delivering concert-hall acoustics in motion." },
//               { icon: "🌐", title: "BMW ConnectedDrive", desc: "Seamless connectivity with over-the-air updates, remote services, and intelligent voice control." },
//               { icon: "⚡", title: "48V Mild Hybrid", desc: "Boost performance and efficiency simultaneously with integrated mild-hybrid technology." },
//               { icon: "🔮", title: "Laser Headlights", desc: "World-first BMW laser lighting illuminates up to 600 metres ahead for unparalleled visibility." },
//               { icon: "🛞", title: "Integral Active Steering", desc: "Front and rear-wheel steering for agility in corners and stability at speed." },
//             ].map(f => (
//               <div key={f.title} className="feat-card">
//                 <span className="feat-icon">{f.icon}</span>
//                 <div className="feat-title">{f.title}</div>
//                 <div className="feat-desc">{f.desc}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ALL MODELS */}
//       <div className="models-section">
//         <div className="models-inner">
//           <span className="sec-tag">Full Lineup</span>
//           <h2 className="sec-title">Choose Your<br /><em>Machine</em></h2>
//           <div className="models-grid">
//             {cars.map((c, i) => (
//               <div key={c.id} className="model-card" style={{ background: c.bg }} onClick={() => { switchCar(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
//                 <div className="model-card-bg">
//                   <div className="model-emoji-big">{c.emoji}</div>
//                   <div>
//                     <div className="model-badge-sm" style={{ background: `${c.badgeColor}25`, color: c.badgeColor }}>{c.badge}</div>
//                     <div className="model-name-lg">BMW {c.name}</div>
//                     <div className="model-sub">{c.tagline}</div>
//                   </div>
//                   <div className="model-footer">
//                     <div className="model-price-lg" style={{ color: c.color }}>{c.price}</div>
//                     <div className="model-specs-sm">
//                       <div className="mss"><strong>{c.specs.hp}</strong>HP</div>
//                       <div className="mss"><strong>{c.specs["0-60"]}</strong>0–60</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* STATS */}
//       <div className="stats-section">
//         {stats.map(s => (
//           <div key={s.label} className="stat-item">
//             <div className="stat-n">{s.num}</div>
//             <div className="stat-l">{s.label}</div>
//           </div>
//         ))}
//       </div>

//       {/* TECHNOLOGY DEEP DIVE */}
//       <div className="tech-section">
//         <div className="tech-inner">
//           <div>
//             <span className="sec-tag">BMW Technology</span>
//             <h2 className="sec-title">The Future<br />is <em>Now</em></h2>
//             <div className="tech-list">
//               {[
//                 { icon: "🤖", title: "BMW Personal Assistant", desc: "Learns your preferences and anticipates your needs. The most intelligent car companion ever built." },
//                 { icon: "📡", title: "Over-The-Air Updates", desc: "Your car gets smarter over time. New features, performance improvements and bug fixes delivered wirelessly." },
//                 { icon: "🔐", title: "BMW Digital Key", desc: "Your iPhone becomes your car key. Share access with up to five people, set driving restrictions." },
//               ].map(t => (
//                 <div key={t.title} className="tech-item">
//                   <div className="tech-icon">{t.icon}</div>
//                   <div>
//                     <div className="tech-title">{t.title}</div>
//                     <div className="tech-desc">{t.desc}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="tech-visual">
//             <div className="tech-ring" style={{ width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 20s linear infinite" }} />
//             <div className="tech-ring" style={{ width: 200, height: 200, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 15s linear infinite reverse" }} />
//             <div className="tech-ring" style={{ width: 100, height: 100, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
//             <div className="tech-big-icon">🚗</div>
//             <style>{`@keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }`}</style>
//           </div>
//         </div>
//       </div>

//       {/* CONTACT */}
//       <section id="contact">
//         <div className="contact-section">
//           <div style={{ textAlign: "center", marginBottom: 56 }}>
//             <span className="sec-tag">Configure & Order</span>
//             <h2 className="sec-title">Your Dream Car<br /><em>Awaits</em></h2>
//             <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>
//               Fill in your details and a BMW specialist will contact you within 24 hours.
//             </p>
//           </div>
//           {contactSent ? (
//             <div className="success-wrap">
//               <span className="success-big">🏎️</span>
//               <div className="success-h">Request Received!</div>
//               <p className="success-p">Thank you, <strong style={{ color: "#fff" }}>{contactForm.name}</strong>.<br />A BMW specialist will reach you at {contactForm.email} within 24 hours.</p>
//               <button className="btn-blue" style={{ marginTop: 32 }} onClick={() => setContactSent(false)}>Submit Another</button>
//             </div>
//           ) : (
//             <form className="contact-form" onSubmit={e => { e.preventDefault(); setContactSent(true); }}>
//               <div className="form-row2">
//                 <div>
//                   <label className="flabel">Full Name</label>
//                   <input className="finput" type="text" placeholder="John Smith" required value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} />
//                 </div>
//                 <div>
//                   <label className="flabel">Email Address</label>
//                   <input className="finput" type="email" placeholder="john@example.com" required value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} />
//                 </div>
//               </div>
//               <div>
//                 <label className="flabel">Model of Interest</label>
//                 <select className="finput" value={contactForm.model} onChange={e => setContactForm({...contactForm, model: e.target.value})}>
//                   <option value="">Select a model...</option>
//                   {cars.map(c => <option key={c.id} value={c.name}>BMW {c.name} — {c.price}</option>)}
//                 </select>
//               </div>
//               <div>
//                 <label className="flabel">Message (optional)</label>
//                 <textarea className="finput" rows={4} placeholder="Tell us about your preferences, timeline, or questions..." value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})} style={{ resize: "none" }} />
//               </div>
//               <button type="submit" className="submit-full">Request Configuration →</button>
//             </form>
//           )}
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div className="footer-inner">
//           <div className="footer-brand">
//             <div className="nav-logo">VEL<span style={{ color: "var(--blue)" }}>OX</span></div>
//             <p>The ultimate driving experience. Engineered for those who demand more from every mile.</p>
//           </div>
//           <div className="footer-col">
//             <h4>Models</h4>
//             {cars.map(c => <a key={c.id} onClick={() => { switchCar(cars.indexOf(c)); window.scrollTo({top:0,behavior:"smooth"}); }}>BMW {c.name}</a>)}
//           </div>
//           <div className="footer-col">
//             <h4>Company</h4>
//             {["About BMW", "Innovation", "Sustainability", "Careers", "Press"].map(l => <a key={l}>{l}</a>)}
//           </div>
//           <div className="footer-col">
//             <h4>Support</h4>
//             {["Find a Dealer", "Test Drive", "Financing", "Warranty", "Contact Us"].map(l => <a key={l}>{l}</a>)}
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <div className="footer-copy">© 2024 VELOX Automotive. All rights reserved.</div>
//           <div className="footer-copy">Privacy Policy · Terms · Cookies</div>
//         </div>
//       </footer>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from "react";

const cars = [
  {
    id: 1,
    name: "M4 Competition",
    tagline: "Born on the Track",
    year: "2024",
    price: "$84,900",
    badge: "M Series",
    badgeColor: "#1c69d4",
    emoji: "🏎️",
    color: "#1c69d4",
    accent: "#0a3a6e",
    specs: { hp: "503", torque: "479 lb-ft", "0-60": "3.4s", top: "180 mph" },
    features: ["Carbon Fiber Roof", "Adaptive M Suspension", "M Steptronic 8-Speed", "Active M Differential"],
    desc: "The pinnacle of BMW performance engineering. Track-ready yet street-legal perfection with an iconic twin-turbocharged inline-6.",
    bg: "linear-gradient(135deg, #0a0a1a 0%, #0d1530 50%, #0a2040 100%)",
  },
  {
    id: 2,
    name: "7 Series",
    tagline: "The Art of Luxury",
    year: "2024",
    price: "$97,500",
    badge: "Luxury",
    badgeColor: "#8b6914",
    emoji: "🚗",
    color: "#c9a227",
    accent: "#8b6914",
    specs: { hp: "375", torque: "398 lb-ft", "0-60": "4.5s", top: "155 mph" },
    features: ["Executive Lounge Seating", "Bowers & Wilkins Audio", "Sky Lounge Roof", "Rear Theatre Screen"],
    desc: "Redefining automotive luxury for a new era. Where cutting-edge technology meets hand-crafted opulence in every detail.",
    bg: "linear-gradient(135deg, #0f0c00 0%, #1a1400 50%, #120e00 100%)",
  },
  {
    id: 3,
    name: "XM Label Red",
    tagline: "Uncompromising Power",
    year: "2024",
    price: "$185,000",
    badge: "Limited",
    badgeColor: "#c0392b",
    emoji: "🔴",
    color: "#e74c3c",
    accent: "#7b0000",
    specs: { hp: "738", torque: "738 lb-ft", "0-60": "3.3s", top: "168 mph" },
    features: ["M Hybrid Drive", "Active Roll Stabilization", "Integral Active Steering", "Carbon Ceramic Brakes"],
    desc: "The most powerful BMW ever. A high-performance hybrid SAV that redefines what a luxury performance vehicle can be.",
    bg: "linear-gradient(135deg, #1a0000 0%, #2d0000 50%, #1a0505 100%)",
  },
  {
    id: 4,
    name: "i4 M50",
    tagline: "Electric Performance",
    year: "2024",
    price: "$72,800",
    badge: "Electric",
    badgeColor: "#27ae60",
    emoji: "⚡",
    color: "#2ecc71",
    accent: "#145a32",
    specs: { hp: "536", torque: "586 lb-ft", "0-60": "3.7s", top: "140 mph" },
    features: ["537 km Range", "DC Fast Charging", "M Sport Brakes", "Adaptive LED Headlights"],
    desc: "The future of M performance. Instant torque, zero emissions, and the unmistakable thrill of pure electric power.",
    bg: "linear-gradient(135deg, #001a08 0%, #001f0a 50%, #001505 100%)",
  },
];

const stats = [
  { num: "110+", label: "Years of Innovation" },
  { num: "2.5M+", label: "Cars Sold Annually" },
  { num: "140+", label: "Countries Worldwide" },
  { num: "#1", label: "Luxury Brand 2024" },
];

const navLinks = ["Models", "Performance", "Technology", "Experience"];

export default function CarShowcase() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", model: "", message: "" });
  const [contactSent, setContactSent] = useState(false);

  const car = cars[active];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const switchCar = (i) => {
    setActive(i);
    setAnimKey(k => k + 1);
  };

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#08080f", color: "#fff", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,300;0,600;0,700;0,900;1,700&family=Barlow:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --blue: #1c69d4;
          --dark: #08080f;
          --dark2: #0e0e1a;
          --dark3: #13131f;
          --mid: #888;
          --border: rgba(255,255,255,0.08);
          --white: #ffffff;
        }

        body { background: var(--dark); }

        /* NAVBAR */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 72px;
          transition: all 0.4s;
        }
        .nav.scrolled {
          background: rgba(8,8,15,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 26px; font-weight: 900; letter-spacing: 0.12em;
          text-transform: uppercase; color: #fff;
        }
        .nav-logo span { color: var(--blue); }
        .nav-links { display: flex; gap: 4px; align-items: center; }
        .nl {
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          background: none; border: none; cursor: pointer; color: rgba(255,255,255,0.6);
          padding: 8px 16px; border-radius: 8px; transition: all 0.2s; letter-spacing: 0.04em;
        }
        .nl:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .nav-cta {
          font-family: 'Barlow', sans-serif; font-size: 13px; font-weight: 500;
          background: var(--blue); border: none; cursor: pointer; color: #fff;
          padding: 10px 22px; border-radius: 8px; transition: all 0.25s; margin-left: 12px;
          letter-spacing: 0.04em;
        }
        .nav-cta:hover { background: #2a7fe8; transform: translateY(-1px); box-shadow: 0 6px 24px rgba(28,105,212,0.4); }
        .ham { display: none; background: none; border: none; cursor: pointer; padding: 6px; flex-direction: column; gap: 5px; }
        .ham span { display: block; width: 24px; height: 2px; background: #fff; border-radius: 2px; transition: all 0.3s; }
        .ham.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .ham.open span:nth-child(2) { opacity: 0; }
        .ham.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .drawer {
          position: fixed; top: 72px; left: 0; right: 0; z-index: 999;
          background: rgba(8,8,15,0.98); backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 16px 24px 24px;
          transform: translateY(-110%); transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        .drawer.open { transform: translateY(0); }
        .dlink {
          display: block; width: 100%; background: none; border: none; cursor: pointer;
          font-family: 'Barlow', sans-serif; font-size: 17px; font-weight: 500;
          color: rgba(255,255,255,0.7); padding: 14px 0; text-align: left;
          border-bottom: 1px solid var(--border); transition: color 0.2s;
        }
        .dlink:last-of-type { border: none; }
        .dlink:hover { color: #fff; }

        /* HERO */
        .hero {
          min-height: 100vh; position: relative; overflow: hidden;
          display: flex; align-items: center;
          padding: 100px 48px 60px;
          transition: background 0.8s ease;
        }
        .hero-grid {
          max-width: 1300px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;
          position: relative; z-index: 2;
        }
        .hero-glow {
          position: absolute; width: 700px; height: 700px; border-radius: 50%;
          top: 50%; left: 50%; transform: translate(-20%, -50%);
          opacity: 0.08; transition: background 0.8s;
          pointer-events: none;
        }
        .hero-lines {
          position: absolute; inset: 0; pointer-events: none;
          background-image: repeating-linear-gradient(
            90deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 80px
          );
        }

        /* Car selector tabs */
        .car-tabs {
          display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px;
        }
        .car-tab {
          display: flex; align-items: center; gap: 14px;
          background: rgba(255,255,255,0.03); border: 1px solid var(--border);
          border-radius: 12px; padding: 14px 18px; cursor: pointer;
          transition: all 0.25s; text-align: left; width: 100%;
        }
        .car-tab:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.15); }
        .car-tab.active { border-color: transparent; }
        .ct-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .ct-name { font-family: 'Barlow Condensed', sans-serif; font-size: 15px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
        .ct-price { font-family: 'Barlow', sans-serif; font-size: 12px; color: rgba(255,255,255,0.45); margin-top: 2px; }
        .ct-badge {
          margin-left: auto; font-family: 'Barlow', sans-serif; font-size: 10px;
          font-weight: 500; padding: 3px 10px; border-radius: 100px; flex-shrink: 0;
        }

        /* Hero right */
        .hero-right { position: relative; }
        .car-display {
          background: rgba(255,255,255,0.03); border: 1px solid var(--border);
          border-radius: 24px; padding: 40px 32px 32px; position: relative; overflow: hidden;
        }
        .car-display::before {
          content: ''; position: absolute; inset: 0; border-radius: 24px;
          background: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%);
        }
        .car-emoji-wrap {
          font-size: 120px; text-align: center; margin-bottom: 24px; display: block;
          filter: drop-shadow(0 20px 60px rgba(0,0,0,0.6));
          animation: floatCar 4s ease-in-out infinite;
        }
        @keyframes floatCar {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .car-enter { animation: carSlide 0.5s ease both; }
        @keyframes carSlide {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .car-model-badge {
          position: absolute; top: 20px; right: 20px;
          font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 500;
          padding: 6px 14px; border-radius: 100px;
        }
        .hero-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(48px, 6vw, 80px); font-weight: 900;
          letter-spacing: -0.02em; line-height: 0.95;
          text-transform: uppercase; color: #fff; margin-bottom: 8px;
        }
        .hero-tagline {
          font-family: 'Barlow', sans-serif; font-size: 16px; font-weight: 300;
          color: rgba(255,255,255,0.5); letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 28px;
        }
        .hero-price {
          font-family: 'Barlow Condensed', sans-serif; font-size: 42px; font-weight: 700;
          margin-bottom: 24px;
        }
        .hero-desc {
          font-family: 'Barlow', sans-serif; font-size: 15px; font-weight: 300;
          color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 36px;
        }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-blue {
          font-family: 'Barlow', sans-serif; font-size: 14px; font-weight: 500;
          background: var(--blue); color: #fff; border: none; cursor: pointer;
          padding: 14px 28px; border-radius: 10px; transition: all 0.25s;
          letter-spacing: 0.04em;
        }
        .btn-blue:hover { background: #2a7fe8; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(28,105,212,0.4); }
        .btn-ghost {
          font-family: 'Barlow', sans-serif; font-size: 14px; font-weight: 500;
          background: transparent; color: rgba(255,255,255,0.7);
          border: 1px solid rgba(255,255,255,0.15); cursor: pointer;
          padding: 14px 28px; border-radius: 10px; transition: all 0.25s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.06); color: #fff; border-color: rgba(255,255,255,0.3); }

        /* SPECS */
        .specs-bar {
          background: rgba(255,255,255,0.03); border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .specs-inner {
          max-width: 1300px; margin: 0 auto; padding: 36px 48px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
        }
        .spec-item {
          text-align: center; padding: 20px;
          border-right: 1px solid var(--border);
        }
        .spec-item:last-child { border-right: none; }
        .spec-val {
          font-family: 'Barlow Condensed', sans-serif; font-size: 42px; font-weight: 900;
          letter-spacing: -0.02em; line-height: 1;
        }
        .spec-unit { font-size: 18px; font-weight: 300; opacity: 0.6; }
        .spec-lbl {
          font-family: 'Barlow', sans-serif; font-size: 12px; font-weight: 400;
          color: rgba(255,255,255,0.4); letter-spacing: 0.1em; text-transform: uppercase;
          margin-top: 8px;
        }

        /* FEATURES section */
        .features-section { max-width: 1300px; margin: 0 auto; padding: 100px 48px; }
        .sec-tag {
          font-family: 'Barlow', sans-serif; font-size: 12px; font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--blue);
          margin-bottom: 16px; display: block;
        }
        .sec-title {
          font-family: 'Barlow Condensed', sans-serif; font-size: clamp(36px, 5vw, 64px);
          font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em;
          line-height: 1.0; color: #fff; margin-bottom: 60px;
        }
        .sec-title em { font-style: italic; color: rgba(255,255,255,0.3); }
        .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .feat-card {
          background: var(--dark3); border: 1px solid var(--border);
          border-radius: 16px; padding: 28px 24px; transition: all 0.3s;
        }
        .feat-card:hover { border-color: rgba(255,255,255,0.2); transform: translateY(-4px); background: rgba(255,255,255,0.04); }
        .feat-icon { font-size: 32px; margin-bottom: 16px; display: block; }
        .feat-title { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; margin-bottom: 10px; }
        .feat-desc { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; }

        /* ALL MODELS */
        .models-section { background: var(--dark2); border-top: 1px solid var(--border); }
        .models-inner { max-width: 1300px; margin: 0 auto; padding: 100px 48px; }
        .models-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
        .model-card {
          border-radius: 20px; overflow: hidden; position: relative;
          border: 1px solid var(--border); cursor: pointer; transition: all 0.3s;
        }
        .model-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.2); }
        .model-card-bg { padding: 40px 36px 36px; position: relative; min-height: 240px; display: flex; flex-direction: column; justify-content: space-between; }
        .model-emoji-big { font-size: 72px; position: absolute; right: 28px; top: 24px; opacity: 0.7; }
        .model-badge-sm { display: inline-block; font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 100px; margin-bottom: 16px; }
        .model-name-lg { font-family: 'Barlow Condensed', sans-serif; font-size: 36px; font-weight: 900; text-transform: uppercase; letter-spacing: -0.02em; color: #fff; line-height: 1; }
        .model-sub { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); margin-top: 6px; }
        .model-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 28px; }
        .model-price-lg { font-family: 'Barlow Condensed', sans-serif; font-size: 28px; font-weight: 700; color: #fff; }
        .model-specs-sm { display: flex; gap: 20px; }
        .mss { font-family: 'Barlow', sans-serif; font-size: 12px; color: rgba(255,255,255,0.4); }
        .mss strong { color: rgba(255,255,255,0.8); font-weight: 500; display: block; font-size: 14px; }

        /* STATS */
        .stats-section {
          max-width: 1300px; margin: 0 auto; padding: 80px 48px;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 0;
          border-top: 1px solid var(--border);
        }
        .stat-item { text-align: center; padding: 32px; border-right: 1px solid var(--border); }
        .stat-item:last-child { border-right: none; }
        .stat-n { font-family: 'Barlow Condensed', sans-serif; font-size: 54px; font-weight: 900; color: #fff; line-height: 1; }
        .stat-l { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.4); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 8px; }

        /* TECHNOLOGY */
        .tech-section { background: var(--dark3); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .tech-inner { max-width: 1300px; margin: 0 auto; padding: 100px 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .tech-list { display: flex; flex-direction: column; gap: 20px; margin-top: 40px; }
        .tech-item { display: flex; gap: 20px; align-items: flex-start; padding: 24px; background: var(--dark2); border: 1px solid var(--border); border-radius: 14px; transition: all 0.25s; }
        .tech-item:hover { border-color: rgba(28,105,212,0.4); background: rgba(28,105,212,0.04); }
        .tech-icon { font-size: 28px; flex-shrink: 0; }
        .tech-title { font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; margin-bottom: 6px; }
        .tech-desc { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.7; }
        .tech-visual { background: rgba(255,255,255,0.02); border: 1px solid var(--border); border-radius: 24px; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
        .tech-big-icon { font-size: 160px; opacity: 0.15; }
        .tech-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(28,105,212,0.2); }

        /* CONTACT */
        .contact-section { max-width: 900px; margin: 0 auto; padding: 100px 48px; }
        .contact-form { display: grid; gap: 18px; }
        .form-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .flabel { display: block; font-family: 'Barlow', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 8px; }
        .finput {
          width: 100%; background: var(--dark3); border: 1px solid var(--border);
          color: #fff; padding: 14px 18px; font-size: 14px;
          font-family: 'Barlow', sans-serif; outline: none;
          border-radius: 10px; transition: border-color 0.2s;
        }
        .finput:focus { border-color: rgba(28,105,212,0.6); background: rgba(28,105,212,0.04); }
        .finput option { background: var(--dark3); }
        .submit-full {
          width: 100%; background: var(--blue); color: #fff; border: none; cursor: pointer;
          font-family: 'Barlow Condensed', sans-serif; font-size: 18px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 18px; border-radius: 12px; transition: all 0.25s;
          box-shadow: 0 4px 24px rgba(28,105,212,0.3);
        }
        .submit-full:hover { background: #2a7fe8; transform: translateY(-2px); box-shadow: 0 10px 40px rgba(28,105,212,0.45); }

        /* FOOTER */
        .footer { background: #040408; border-top: 1px solid var(--border); padding: 60px 48px 40px; }
        .footer-inner { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; }
        .footer-brand p { font-family: 'Barlow', sans-serif; font-size: 14px; color: rgba(255,255,255,0.35); line-height: 1.8; margin-top: 16px; }
        .footer-col h4 { font-family: 'Barlow Condensed', sans-serif; font-size: 14px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
        .footer-col a { display: block; font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.3); margin-bottom: 12px; cursor: pointer; transition: color 0.2s; text-decoration: none; }
        .footer-col a:hover { color: #fff; }
        .footer-bottom { max-width: 1300px; margin: 48px auto 0; padding-top: 28px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-family: 'Barlow', sans-serif; font-size: 13px; color: rgba(255,255,255,0.2); }

        /* SUCCESS */
        .success-wrap { text-align: center; padding: 60px 0; }
        .success-big { font-size: 72px; margin-bottom: 24px; display: block; }
        .success-h { font-family: 'Barlow Condensed', sans-serif; font-size: 36px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.04em; color: #fff; margin-bottom: 12px; }
        .success-p { font-family: 'Barlow', sans-serif; font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.8; }

        /* FADE ANIMATIONS */
        .fade-up { animation: fadeUp 0.7s ease both; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:none; } }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .hero-grid { gap: 36px; }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 900px) {
          .nav { padding: 0 24px; }
          .nav-links { display: none; }
          .ham { display: flex; }
          .hero { padding: 100px 24px 60px; }
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .car-tabs { flex-direction: row; flex-wrap: wrap; gap: 10px; }
          .car-tab { width: auto; flex: 1; min-width: 140px; }
          .ct-price { display: none; }
          .specs-inner { grid-template-columns: repeat(2, 1fr); }
          .spec-item { border-right: none; border-bottom: 1px solid var(--border); }
          .spec-item:nth-child(odd) { border-right: 1px solid var(--border); }
          .spec-item:nth-child(3), .spec-item:nth-child(4) { border-bottom: none; }
          .features-section { padding: 72px 24px; }
          .models-inner { padding: 72px 24px; }
          .tech-inner { grid-template-columns: 1fr; gap: 48px; padding: 72px 24px; }
          .tech-visual { display: none; }
          .stats-section { grid-template-columns: repeat(2, 1fr); padding: 60px 24px; }
          .stat-item { border-right: none; border-bottom: 1px solid var(--border); }
          .stat-item:nth-child(odd) { border-right: 1px solid var(--border); }
          .stat-item:nth-child(3), .stat-item:nth-child(4) { border-bottom: none; }
          .contact-section { padding: 72px 24px; }
          .footer { padding: 48px 24px 32px; }
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 600px) {
          .hero-name { font-size: 42px; }
          .hero-actions { flex-direction: column; }
          .btn-blue, .btn-ghost { width: 100%; text-align: center; }
          .models-grid { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .form-row2 { grid-template-columns: 1fr; }
          .car-emoji-wrap { font-size: 80px; }
          .specs-inner { padding: 24px; }
          .footer-inner { grid-template-columns: 1fr; gap: 28px; }
        }
        @media (max-width: 400px) {
          .features-grid { grid-template-columns: 1fr; }
          .car-tabs { flex-direction: column; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo">BMW<span> Fan Boys</span></div>
        <div className="nav-links">
          {navLinks.map(l => (
            <button key={l} className="nl" onClick={() => go(l.toLowerCase())}>{l}</button>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>Configure Now</button>
        </div>
        <button className={`ham ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(!mobileOpen)}>
          <span/><span/><span/>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer ${mobileOpen ? "open" : ""}`}>
        {navLinks.map(l => (
          <button key={l} className="dlink" onClick={() => go(l.toLowerCase())}>{l}</button>
        ))}
        <button className="btn-blue" style={{ width: "100%", marginTop: 16, textAlign: "center" }} onClick={() => go("contact")}>Configure Now →</button>
      </div>

      {/* HERO */}
      <section id="models" style={{ background: car.bg, transition: "background 0.8s ease" }}>
        <div className="hero">
          <div className="hero-glow" style={{ background: `radial-gradient(circle, ${car.color} 0%, transparent 70%)` }} />
          <div className="hero-lines" />
          <div className="hero-grid">
            {/* Left: car selector */}
            <div>
              <div className="car-tabs">
                {cars.map((c, i) => (
                  <button key={c.id} className={`car-tab ${active === i ? "active" : ""}`}
                    style={active === i ? { background: `${c.color}18`, borderColor: `${c.color}55` } : {}}
                    onClick={() => switchCar(i)}>
                    <div className="ct-dot" style={{ background: c.color }} />
                    <div>
                      <div className="ct-name">{c.name}</div>
                      <div className="ct-price">{c.price}</div>
                    </div>
                    <div className="ct-badge" style={{ background: `${c.badgeColor}25`, color: c.badgeColor }}>
                      {c.badge}
                    </div>
                  </button>
                ))}
              </div>

              <div key={animKey} className="fade-up">
                <div className="hero-tagline">{car.tagline} · {car.year}</div>
                <div className="hero-name">BMW<br />{car.name}</div>
                <div className="hero-price" style={{ color: car.color }}>{car.price}</div>
                <div className="hero-desc">{car.desc}</div>
                <div className="hero-actions">
                  <button className="btn-blue" style={{ background: car.color }} onClick={() => go("contact")}>Configure Yours →</button>
                  <button className="btn-ghost" onClick={() => go("performance")}>View Specs</button>
                </div>
              </div>
            </div>

            {/* Right: car display */}
            <div className="hero-right" key={animKey + "r"}>
              <div className="car-display">
                <div className="car-model-badge" style={{ background: `${car.badgeColor}25`, color: car.badgeColor }}>
                  {car.badge}
                </div>
                <span className="car-emoji-wrap car-enter">{car.emoji}</span>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  {car.features.map(f => (
                    <div key={f} style={{
                      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 10, padding: "12px 14px",
                      fontFamily: "'Barlow', sans-serif", fontSize: 12,
                      color: "rgba(255,255,255,0.6)", lineHeight: 1.4
                    }}>
                      ✓ {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specs bar */}
        <div id="performance" className="specs-bar" key={animKey + "s"}>
          <div className="specs-inner">
            {Object.entries(car.specs).map(([k, v]) => (
              <div key={k} className="spec-item">
                <div className="spec-val" style={{ color: car.color }}>
                  {v.replace(/[^0-9.]/g, '')}<span className="spec-unit">{v.replace(/[0-9.]/g, '')}</span>
                </div>
                <div className="spec-lbl">{k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="technology">
        <div className="features-section">
          <span className="sec-tag">Engineering Excellence</span>
          <h2 className="sec-title">Built for Those<br /><em>Who Drive</em></h2>
          <div className="features-grid">
            {[
              { icon: "🏁", title: "M TwinPower Turbo", desc: "Precision-engineered inline-6 delivering brutal yet refined performance across every rev range." },
              { icon: "🎮", title: "M Sport Modes", desc: "Multiple drive profiles from comfortable cruising to all-out track assault at the touch of a button." },
              { icon: "🛡️", title: "Live Cockpit Pro", desc: "14.9\" curved display with gesture control, AR navigation and real-time performance data." },
              { icon: "🔊", title: "Bowers & Wilkins", desc: "20-speaker Diamond Surround Sound system delivering concert-hall acoustics in motion." },
              { icon: "🌐", title: "BMW ConnectedDrive", desc: "Seamless connectivity with over-the-air updates, remote services, and intelligent voice control." },
              { icon: "⚡", title: "48V Mild Hybrid", desc: "Boost performance and efficiency simultaneously with integrated mild-hybrid technology." },
              { icon: "🔮", title: "Laser Headlights", desc: "World-first BMW laser lighting illuminates up to 600 metres ahead for unparalleled visibility." },
              { icon: "🛞", title: "Integral Active Steering", desc: "Front and rear-wheel steering for agility in corners and stability at speed." },
            ].map(f => (
              <div key={f.title} className="feat-card">
                <span className="feat-icon">{f.icon}</span>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL MODELS */}
      <div className="models-section">
        <div className="models-inner">
          <span className="sec-tag">Full Lineup</span>
          <h2 className="sec-title">Choose Your<br /><em>Machine</em></h2>
          <div className="models-grid">
            {cars.map((c, i) => (
              <div key={c.id} className="model-card" style={{ background: c.bg }} onClick={() => { switchCar(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <div className="model-card-bg">
                  <div className="model-emoji-big">{c.emoji}</div>
                  <div>
                    <div className="model-badge-sm" style={{ background: `${c.badgeColor}25`, color: c.badgeColor }}>{c.badge}</div>
                    <div className="model-name-lg">BMW {c.name}</div>
                    <div className="model-sub">{c.tagline}</div>
                  </div>
                  <div className="model-footer">
                    <div className="model-price-lg" style={{ color: c.color }}>{c.price}</div>
                    <div className="model-specs-sm">
                      <div className="mss"><strong>{c.specs.hp}</strong>HP</div>
                      <div className="mss"><strong>{c.specs["0-60"]}</strong>0–60</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-section">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <div className="stat-n">{s.num}</div>
            <div className="stat-l">{s.label}</div>
          </div>
        ))}
      </div>

      {/* TECHNOLOGY DEEP DIVE */}
      <div className="tech-section">
        <div className="tech-inner">
          <div>
            <span className="sec-tag">BMW Technology</span>
            <h2 className="sec-title">The Future<br />is <em>Now</em></h2>
            <div className="tech-list">
              {[
                { icon: "🤖", title: "BMW Personal Assistant", desc: "Learns your preferences and anticipates your needs. The most intelligent car companion ever built." },
                { icon: "📡", title: "Over-The-Air Updates", desc: "Your car gets smarter over time. New features, performance improvements and bug fixes delivered wirelessly." },
                { icon: "🔐", title: "BMW Digital Key", desc: "Your iPhone becomes your car key. Share access with up to five people, set driving restrictions." },
              ].map(t => (
                <div key={t.title} className="tech-item">
                  <div className="tech-icon">{t.icon}</div>
                  <div>
                    <div className="tech-title">{t.title}</div>
                    <div className="tech-desc">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tech-visual">
            <div className="tech-ring" style={{ width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 20s linear infinite" }} />
            <div className="tech-ring" style={{ width: 200, height: 200, top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 15s linear infinite reverse" }} />
            <div className="tech-ring" style={{ width: 100, height: 100, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="tech-big-icon">🚗</div>
            <style>{`@keyframes spin { to { transform: translate(-50%,-50%) rotate(360deg); } }`}</style>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-section">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sec-tag">Configure & Order</span>
            <h2 className="sec-title">Your Dream Car<br /><em>Awaits</em></h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.4)", marginTop: 12 }}>
              Fill in your details and a BMW specialist will contact you within 24 hours.
            </p>
          </div>
          {contactSent ? (
            <div className="success-wrap">
              <span className="success-big">🏎️</span>
              <div className="success-h">Request Received!</div>
              <p className="success-p">Thank you, <strong style={{ color: "#fff" }}>{contactForm.name}</strong>.<br />A BMW specialist will reach you at {contactForm.email} within 24 hours.</p>
              <button className="btn-blue" style={{ marginTop: 32 }} onClick={() => setContactSent(false)}>Submit Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={e => { e.preventDefault(); setContactSent(true); }}>
              <div className="form-row2">
                <div>
                  <label className="flabel">Full Name</label>
                  <input className="finput" type="text" placeholder="John Smith" required value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} />
                </div>
                <div>
                  <label className="flabel">Email Address</label>
                  <input className="finput" type="email" placeholder="john@example.com" required value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} />
                </div>
              </div>
              <div>
                <label className="flabel">Model of Interest</label>
                <select className="finput" value={contactForm.model} onChange={e => setContactForm({...contactForm, model: e.target.value})}>
                  <option value="">Select a model...</option>
                  {cars.map(c => <option key={c.id} value={c.name}>BMW {c.name} — {c.price}</option>)}
                </select>
              </div>
              <div>
                <label className="flabel">Message (optional)</label>
                <textarea className="finput" rows={4} placeholder="Tell us about your preferences, timeline, or questions..." value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})} style={{ resize: "none" }} />
              </div>
              <button type="submit" className="submit-full">Request Configuration →</button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="nav-logo">VEL<span style={{ color: "var(--blue)" }}>OX</span></div>
            <p>The ultimate driving experience. Engineered for those who demand more from every mile.</p>
          </div>
          <div className="footer-col">
            <h4>Models</h4>
            {/* ✅ FIX: href="#models" added */}
            {cars.map(c => (
              <a key={c.id} href="#models" onClick={(e) => { e.preventDefault(); switchCar(cars.indexOf(c)); window.scrollTo({top:0,behavior:"smooth"}); }}>
                BMW {c.name}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            {/* ✅ FIX: href="#" added */}
            {["About BMW", "Innovation", "Sustainability", "Careers", "Press"].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            {/* ✅ FIX: href="#" added */}
            {["Find a Dealer", "Test Drive", "Financing", "Warranty", "Contact Us"].map(l => (
              <a key={l} href="#">{l}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2024 VELOX Automotive. All rights reserved.</div>
          <div className="footer-copy">Privacy Policy · Terms · Cookies</div>
        </div>
      </footer>
    </div>
  );
}n