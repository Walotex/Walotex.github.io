const T = {
  es: {
    "nav.about":"Sobre mí","nav.experience":"Experiencia","nav.projects":"Proyectos","nav.skills":"Habilidades","nav.education":"Formación","nav.contact":"Contacto",
    "hero.eyebrow":"// científico de datos · NLP · geointeligencia",
    "hero.lead":"Convierto datos desordenados en modelos útiles. Trabajo con lenguas de bajos recursos, datos geoespaciales y pipelines de datos, y actualmente cursando la Maestría en Geointeligencia Computacional.",
    "hero.cta1":"Ver proyectos","hero.cta2":"Contáctame",
    "stats.conf":"congresos internacionales","stats.roles":"roles en datos","stats.english":"inglés certificado","stats.gpa":"promedio en ingeniería",
    "about.title":"Sobre mí",
    "about.p1":"Soy Ingeniero de Datos por la Universidad Politécnica de Yucatán y estudiante de la Maestría en Geointeligencia Computacional en CentroGeo. He pasado por análisis, ingeniería y ciencia de datos, desde dashboards en Power BI hasta modelos de machine learning y data lakes.",
    "about.p2":"Me interesa el cruce entre lenguaje y territorio: detección del maya yucateco, traducción asistida por IA y, en mi tesis, geocodificación de direcciones ruidosas con modelos secuencia a secuencia. He presentado en congresos internacionales y me gusta llevar las ideas a algo que funcione.",
    "exp.title":"Experiencia",
    "proj.title":"Proyectos destacados",
    "skills.title":"Habilidades",
    "edu.title":"Formación",
    "edu.present":"Actualidad",
    "edu.msc":"Cursos: Análisis Digital de Imágenes, SIG, Procesos de Ciencia de Datos Geoespaciales, Machine Learning y Deep Learning.",
    "edu.bsc.t":"Ingeniería de Datos","edu.bsc.d":"Julio 2025 · Promedio 8.9/10",
    "edu.bsc":"Cursos: Minería de datos, aprendizaje automático, estructuras de datos, PLN, algoritmos y análisis de redes sociales.",
    "edu.certs":"Cursos y certificaciones",
    "contact.title":"Hablemos",
    "contact.p":"Estoy abierto a oportunidades en ciencia de datos, NLP y análisis geoespacial, y a colaborar en investigación."
  },
  en: {
    "nav.about":"About","nav.experience":"Experience","nav.projects":"Projects","nav.skills":"Skills","nav.education":"Education","nav.contact":"Contact",
    "hero.eyebrow":"// data scientist · NLP · geointelligence",
    "hero.lead":"I turn messy data into useful models. I work with low-resource languages, geospatial data and data pipelines, and I'm currently pursuing a Master's in Computational Geointelligence.",
    "hero.cta1":"See projects","hero.cta2":"Get in touch",
    "stats.conf":"international conferences","stats.roles":"data roles","stats.english":"certified English","stats.gpa":"engineering GPA",
    "about.title":"About me",
    "about.p1":"I hold a Data Engineering degree from Universidad Politécnica de Yucatán and I'm a Master's student in Computational Geointelligence at CentroGeo. I've worked across data analysis, engineering and science, from Power BI dashboards to machine learning models and data lakes.",
    "about.p2":"I'm drawn to where language meets territory: Yucatec Maya detection, AI-assisted translation and, in my thesis, geocoding noisy addresses with sequence-to-sequence models. I've presented at international conferences and like turning ideas into something that works.",
    "exp.title":"Experience",
    "proj.title":"Featured projects",
    "skills.title":"Skills",
    "edu.title":"Education",
    "edu.present":"Present",
    "edu.msc":"Courses: Digital Image Analysis, GIS, Geospatial Data Science Processes, Machine Learning and Deep Learning.",
    "edu.bsc.t":"Data Engineering","edu.bsc.d":"July 2025 · GPA 8.9/10",
    "edu.bsc":"Coursework: Data Mining, Machine Learning, Data Structures, NLP, Algorithms and Social Network Analysis.",
    "edu.certs":"Courses & certifications",
    "contact.title":"Let's talk",
    "contact.p":"I'm open to opportunities in data science, NLP and geospatial analysis, and to research collaboration."
  }
};

Object.assign(T.es, {
  "gh.title": "Geocodificación, paso a paso",
  "gh.p": "Mi tesis traduce direcciones escritas con ruido a geohashes de 9 caracteres. Cada carácter divide la celda anterior en una cuadrícula y elige una: así se llega de todo el planeta a un cuadro de unos 5 m.",
  "gh.prec": "Precisión", "gh.cell": "Tamaño de celda", "gh.coords": "Coordenadas", "gh.replay": "Repetir ↻"
});
Object.assign(T.en, {
  "gh.title": "Geocoding, step by step",
  "gh.p": "My thesis maps noisy written addresses to 9-character geohashes. Each character splits the previous cell into a grid and picks one, going from the whole planet down to a square of about 5 m.",
  "gh.prec": "Precision", "gh.cell": "Cell size", "gh.coords": "Coordinates", "gh.replay": "Replay ↻"
});

const JOBS = [
  { org:"Softcrédito", date:{es:"May 2025 – Sep 2025",en:"May 2025 – Sep 2025"},
    role:{es:"Científico de datos / Analista de datos",en:"Data Scientist / Data Analyst"},
    pts:{es:["PoC en Python para reestructurar esquemas de bases de datos: reducción del 70% en tiempos de carga mediante optimización de tipos de datos.","Normalización de bases de datos masivas y corrección de anomalías en registros de clientes, con mejoras en producción.","Diseño colaborativo de un data lake con arquitectura de medallas (Bronce, Plata, Oro).","Investigación de modelos predictivos para detección temprana de riesgo crediticio."],
         en:["Python PoCs to restructure database schemas: 70% reduction in table load times through data type optimization.","Normalized massive databases and fixed structural anomalies in customer records, shipping improvements to production.","Co-designed a scalable data lake using the medallion methodology (Bronze, Silver, Gold).","Researched predictive models for early credit risk and default detection."]},
    tags:["Python","MLflow","scikit-learn","pandas"] },
  { org:"CentroGeo", date:{es:"Ago 2024 – Dic 2024",en:"Aug 2024 – Dec 2024"},
    role:{es:"Científico de datos (prácticas)",en:"Data Scientist intern"},
    pts:{es:["Modelo supervisado para identificar maya yucateco en textos digitales con NLP para lenguas de bajos recursos.","Algoritmos de clasificación y preprocesamiento de texto para detectar patrones lingüísticos mayas."],
         en:["Supervised model to identify Yucatec Maya in digital texts using NLP for low-resource languages.","Classification algorithms and text preprocessing to detect Mayan linguistic patterns."]},
    tags:["Python","scikit-learn","spaCy","NLTK"] },
  { org:"Plenumsoft", date:{es:"May 2024 – Ago 2024",en:"May 2024 – Aug 2024"},
    role:{es:"Ingeniero de datos",en:"Data Engineer"},
    pts:{es:["Herramientas de web scraping para una matriz de riesgos de EE. UU., Canadá y México.","Iniciativa con Texas A&M: pipelines de recopilación mejorados y 40% menos tiempo de recuperación.","Preprocesamiento avanzado y uso de Dataiku para reducir errores de procesamiento."],
         en:["Web scraping tools to build a risk information matrix for the US, Canada and Mexico.","Initiative with Texas A&M: improved collection pipelines and 40% faster retrieval.","Advanced preprocessing and Dataiku to cut processing errors."]},
    tags:["Python","BeautifulSoup","requests","pandas","Dataiku"] },
  { org:"CentroGeo", date:{es:"Feb 2024 – Jul 2024",en:"Feb 2024 – Jul 2024"},
    role:{es:"Ingeniero de datos (prácticas)",en:"Data Engineer intern"},
    pts:{es:["Flujos de limpieza y estructuración para distintos formatos: procesamiento 30% más rápido.","API de OpenAI para traducción español-inglés y como pivote hacia maya yucateco.","Solución de ML para apoyar el aprendizaje trilingüe (español, inglés, maya yucateco)."],
         en:["Cleansing and structuring workflows for diverse formats: 30% faster processing.","OpenAI API for Spanish-English translation and as a pivot toward Yucatec Maya.","ML solution supporting trilingual language learning (Spanish, English, Yucatec Maya)."]},
    tags:["Python","OpenAI API","pandas","NumPy","JSON"] },
  { org:"SUCOBSA", date:{es:"Mar 2023 – Ago 2023",en:"Mar 2023 – Aug 2023"},
    role:{es:"Analista de datos",en:"Data Analyst"},
    pts:{es:["Dashboard en Power BI que resume 5 años de información del área de egresos.","Limpieza de datos y procesos ETL para mejorar el análisis."],
         en:["Power BI dashboard summarizing five years of expenditure data.","Data cleaning and ETL processes to improve analysis."]},
    tags:["Power BI","Excel","SQL","Python"] },
  { org:"Scale AI", date:{es:"Ene 2022 – Jun 2022",en:"Jan 2022 – Jun 2022"},
    role:{es:"Control de calidad",en:"QA specialist"},
    pts:{es:["Garantía de calidad y precisión en el entrenamiento de inteligencia artificial."],
         en:["Ensured quality and accuracy in AI training data and quality control."]},
    tags:[] }
];

const PROJECTS = [
  { kind:{es:"Tesis de maestría",en:"Master's thesis"}, c:["#7c3aed","#06b6d4"],
    title:{es:"Geocodificador Seq2Seq",en:"Seq2Seq Geocoder"},
    desc:{es:"Transformer encoder-decoder en PyTorch que traduce direcciones ruidosas de México a geohashes de 9 caracteres, evaluado frente a gazetteers tradicionales.",
          en:"Encoder-decoder Transformer in PyTorch that maps noisy Mexican addresses to 9-character geohashes, evaluated against traditional gazetteers."},
    tags:["PyTorch","Transformers","Geohash","NLP"] },
  { kind:{es:"ICCIT 2025 · Cancún",en:"ICCIT 2025 · Cancún"}, c:["#f472b6","#7c3aed"],
    title:{es:"Detección de lenguas indígenas",en:"Detecting Indigenous Languages"},
    desc:{es:"Sistema de perfilado y clasificación con ML para detectar texto en maya yucateco. Coautor y ponente, en colaboración con investigadores de CentroGeo.",
          en:"ML-based profiling and classification system to detect Yucatec Maya text. Co-author and speaker, in collaboration with CentroGeo researchers."},
    tags:["scikit-learn","spaCy","NLP","Low-resource"] },
  { kind:{es:"WSDM Day 2024 · Mérida",en:"WSDM Day 2024 · Mérida"}, c:["#06b6d4","#22c55e"],
    title:{es:"T'aantsil: Corpus del maya yucateco",en:"T'aantsil: Yucatec Maya Corpus"},
    desc:{es:"Consolidación de información sobre la lengua maya para apoyar el desarrollo futuro de traductores. Presentado en WSDM Day.",
          en:"Consolidating information on the Maya language to support future translators. Presented at WSDM Day."},
    tags:["Corpus","OpenAI API","Python"] },
  { kind:{es:"NASA Space Apps 2025",en:"NASA Space Apps 2025"}, c:["#f59e0b","#ef4444"],
    title:{es:"Agrinodus",en:"Agrinodus"},
    desc:{es:"Acceso democratizado a datos meteorológicos para el sector agrícola con datos de NASA y Meteomatics: portal web, alertas SMS y radio con voz sintética para zonas rurales.",
          en:"Democratized weather data access for agriculture using NASA and Meteomatics data: web portal, SMS alerts and synthetic-voice radio for rural areas."},
    tags:["Google Cloud","Tableau","NASA data"] }
];

const SKILLS = [
  { t:{es:"Lenguajes",en:"Languages"}, i:[["Python","Avanzado|Advanced"],["SQL","Intermedio|Intermediate"],["Bash","Intermedio|Intermediate"],["R","Intermedio|Intermediate"],["Java","Básico|Basic"]] },
  { t:{es:"Machine Learning",en:"Machine Learning"}, i:[["PyTorch"],["TensorFlow"],["scikit-learn"]] },
  { t:{es:"Datos y ETL",en:"Data & ETL"}, i:[["pandas"],["NumPy"],["GeoPandas"],["Dataiku"],["Spark"]] },
  { t:{es:"Visualización y BI",en:"Visualization & BI"}, i:[["Power BI","Avanzado|Advanced"],["Tableau","Básico|Basic"]] },
  { t:{es:"Bases de datos",en:"Databases"}, i:[["PostgreSQL"],["MySQL"],["Spark"]] },
  { t:{es:"Geoespacial",en:"Geospatial"}, i:[["QGIS"],["ArcGIS"],["Google Earth Engine"]] },
  { t:{es:"Herramientas",en:"Tools"}, i:[["Git"],["AWS"],["Google Cloud"],["REST APIs"],["Web scraping"]] }
];

const CERTS = ["ITEP English · C1 (Nov 2024)","Kaggle · Data Cleaning","Great Learning · Big Data Analytics","Dataquest · Python for Web & Data Analysis","Google Project Management","AWS Academy · Cloud & ML Foundations","Microsoft · Data Analyst Career Path","Fundación Telefónica · Actualízate"];

const $ = (s) => document.querySelector(s);
let lang = (localStorage.getItem("lang") || (navigator.language.startsWith("en") ? "en" : "es"));

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = T[lang][el.dataset.i18n]);
  $("#lang").textContent = lang === "es" ? "EN" : "ES";

  $("#timeline").innerHTML = JOBS.map(j => `
    <article class="job">
      <h3>${j.role[lang]} <small>· ${j.org}</small></h3>
      <div class="date mono">${j.date[lang]}</div>
      <ul>${j.pts[lang].map(p => `<li>${p}</li>`).join("")}</ul>
      <div class="tags">${j.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </article>`).join("");

  $("#cards").innerHTML = PROJECTS.map(p => `
    <article class="card">
      <div class="kind">${p.kind[lang]}</div>
      <h3>${p.title[lang]}</h3>
      <p>${p.desc[lang]}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </article>`).join("");

  $("#skillgrid").innerHTML = SKILLS.map(g => `
    <div class="card"><h3>${g.t[lang]}</h3><ul>${g.i.map(([n, lv]) =>
      `<li>${n}${lv ? `<i>${lv.split("|")[lang === "es" ? 0 : 1]}</i>` : ""}</li>`).join("")}</ul></div>`).join("");

  $("#certs").innerHTML = CERTS.map(c => `<li>${c}</li>`).join("");
}

$("#lang").onclick = () => { lang = lang === "es" ? "en" : "es"; try { localStorage.setItem("lang", lang); } catch {} render(); };
$("#theme").onclick = () => {
  const dark = document.documentElement.dataset.theme === "dark" ||
    (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme:dark)").matches);
  document.documentElement.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", document.documentElement.dataset.theme); } catch {}
};
try { const th = localStorage.getItem("theme"); if (th) document.documentElement.dataset.theme = th; } catch {}
$("#year").textContent = new Date().getFullYear();
render();


/* ---- Movimiento: parallax, reveal, contadores, progreso ---- */
document.documentElement.classList.add("js");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;

function observeReveals() {
  document.querySelectorAll("section h2, .about-grid p, .job, .card, .chips li, .contact p, .contact .cta")
    .forEach((el, i) => {
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      const idx = [...el.parentElement.children].indexOf(el);
      el.style.transitionDelay = Math.min(idx, 6) * 70 + "ms";
      io ? io.observe(el) : el.classList.add("in");
    });
}
const _render = render;
render = function () { _render(); observeReveals(); };
render();

document.querySelectorAll(".stats b").forEach(b => {
  const m = b.textContent.match(/^(\d+(?:\.\d+)?)$/);
  if (!m || reduce) return;
  const end = parseFloat(m[1]), dec = (m[1].split(".")[1] || "").length, t0 = performance.now();
  b.textContent = (0).toFixed(dec);
  const tick = (t) => {
    const p = Math.min((t - t0 - 500) / 1100, 1);
    b.textContent = (end * (1 - Math.pow(1 - Math.max(p, 0), 3))).toFixed(dec);
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});

const hero = document.getElementById("hero"), bar = document.getElementById("progress");
const layers = [...document.querySelectorAll(".layer")];
let ticking = false;
function onScroll() {
  const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  if (!reduce && y < innerHeight * 1.5) {
    hero.style.setProperty("--py", y);
    layers.forEach(l => l.style.transform = `translate3d(0,${y * l.dataset.speed}px,0)`);
  }
  ticking = false;
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();


/* ---- Demo de geohash ---- */
(() => {
  const B32 = "0123456789bcdefghjkmnpqrstuvwxyz";
  const PLACES = [
    ["Mérida", 20.9675, -89.6237], ["Cancún", 21.1619, -86.8515], ["CDMX", 19.4326, -99.1332],
    ["Guadalajara", 20.6597, -103.3496], ["Monterrey", 25.6866, -100.3161]
  ];
  const CELL = ["5,000 × 5,000 km", "1,250 × 625 km", "156 × 156 km", "39 × 19.5 km", "4.9 × 4.9 km", "1.2 × 0.61 km", "153 × 153 m", "38 × 19 m", "4.8 × 4.8 m"];
  const HOLD = 650, ZOOM = 750, LEVEL = HOLD + ZOOM;

  function charAt(col, row, nl, na, lonFirst) {
    const lb = col.toString(2).padStart(nl, "0").split("").map(Number);
    const ab = row.toString(2).padStart(na, "0").split("").map(Number);
    const bits = []; let li = 0, ai = 0, lt = lonFirst;
    for (let k = 0; k < 5; k++) { bits.push(lt ? lb[li++] : ab[ai++]); lt = !lt; }
    return B32[parseInt(bits.join(""), 2)];
  }
  function encode(lat, lon) {
    const b = [-90, 90, -180, 180]; let lonTurn = true; const steps = [];
    for (let i = 0; i < 9; i++) {
      const lonFirst = lonTurn, parent = b.slice(), lonBits = [], latBits = [];
      for (let k = 0; k < 5; k++) {
        if (lonTurn) { const m = (b[2] + b[3]) / 2, bit = lon >= m ? 1 : 0; lonBits.push(bit); if (bit) b[2] = m; else b[3] = m; }
        else { const m = (b[0] + b[1]) / 2, bit = lat >= m ? 1 : 0; latBits.push(bit); if (bit) b[0] = m; else b[1] = m; }
        lonTurn = !lonTurn;
      }
      const nl = lonBits.length, na = latBits.length;
      const col = parseInt(lonBits.join(""), 2), row = parseInt(latBits.join(""), 2);
      steps.push({ b: parent, cols: 1 << nl, rows: 1 << na, nl, na, col, row, lonFirst, ch: charAt(col, row, nl, na, lonFirst) });
    }
    return { steps, fin: b, hash: steps.map(s => s.ch).join("") };
  }

  const cv = document.getElementById("ghCanvas"), ctx = cv.getContext("2d");
  const codeEl = document.getElementById("ghCode"), precEl = document.getElementById("ghPrec"),
        cellEl = document.getElementById("ghCell"), coordsEl = document.getElementById("ghCoords");
  const reduceMo = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let place = PLACES[0], data = encode(place[1], place[2]), t0 = 0, visible = false, raf = 0, shown = -1, W = 0, H = 0;

  document.getElementById("ghPlaces").innerHTML = PLACES.map((p, i) =>
    `<button class="chip-btn${i ? "" : " on"}" data-i="${i}">${p[0]}</button>`).join("");
  codeEl.innerHTML = Array.from({ length: 9 }, () => "<span></span>").join("");
  const spans = [...codeEl.children];

  function size() {
    const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  const css = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const ease = (u) => u < .5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;

  function viewAt(a, b, u) {
    const la = a[1] - a[0], lb = b[1] - b[0], oa = a[3] - a[2], ob = b[3] - b[2];
    const sLat = la * Math.pow(lb / la, u), sLon = oa * Math.pow(ob / oa, u);
    const cLat = (a[0] + a[1]) / 2 + ((b[0] + b[1]) / 2 - (a[0] + a[1]) / 2) * u;
    const cLon = (a[2] + a[3]) / 2 + ((b[2] + b[3]) / 2 - (a[2] + a[3]) / 2) * u;
    return [cLat - sLat / 2, cLat + sLat / 2, cLon - sLon / 2, cLon + sLon / 2];
  }
  function mapper(v) {
    const pad = 22, s = Math.min((W - pad * 2) / (v[3] - v[2]), (H - pad * 2) / (v[1] - v[0]));
    const cx = (v[2] + v[3]) / 2, cy = (v[0] + v[1]) / 2;
    return { x: (lon) => W / 2 + (lon - cx) * s, y: (lat) => H / 2 - (lat - cy) * s };
  }
  function fillCell(m, b, c, alpha) {
    const x0 = m.x(b[2]), x1 = m.x(b[3]), y0 = m.y(b[1]), y1 = m.y(b[0]);
    ctx.save(); ctx.fillStyle = c.a2; ctx.globalAlpha = .22 * alpha; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
    ctx.globalAlpha = alpha; ctx.strokeStyle = c.a1; ctx.lineWidth = 2; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0); ctx.restore();
  }
  function drawGrid(st, m, alpha, hl, c) {
    if (alpha <= 0.01) return;
    const xl = m.x(st.b[2]), xr = m.x(st.b[3]), yt = m.y(st.b[1]), yb = m.y(st.b[0]);
    const w = (xr - xl) / st.cols, h = (yb - yt) / st.rows;
    ctx.save(); ctx.globalAlpha = alpha;
    if (hl > 0) { ctx.globalAlpha = alpha * hl * .28; ctx.fillStyle = c.a2; ctx.fillRect(xl + st.col * w, yb - (st.row + 1) * h, w, h); ctx.globalAlpha = alpha; }
    ctx.strokeStyle = c.border; ctx.lineWidth = 1; ctx.beginPath();
    for (let i = 0; i <= st.cols; i++) { ctx.moveTo(xl + i * w, yt); ctx.lineTo(xl + i * w, yb); }
    for (let k = 0; k <= st.rows; k++) { ctx.moveTo(xl, yt + k * h); ctx.lineTo(xr, yt + k * h); }
    ctx.stroke();
    ctx.strokeStyle = c.a1; ctx.lineWidth = 2; ctx.strokeRect(xl, yt, xr - xl, yb - yt);
    if (Math.min(w, h) > 20) {
      ctx.font = `500 ${Math.max(11, Math.min(26, Math.min(w, h) * .38))}px "JetBrains Mono",monospace`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      for (let i = 0; i < st.cols; i++) for (let k = 0; k < st.rows; k++) {
        const chosen = i === st.col && k === st.row;
        ctx.fillStyle = chosen && hl > 0 ? c.a1 : c.muted; ctx.globalAlpha = alpha * (chosen ? 1 : .75);
        ctx.fillText(charAt(i, k, st.nl, st.na, st.lonFirst), xl + (i + .5) * w, yb - (k + .5) * h);
      }
    }
    ctx.restore();
  }
  function pin(m, c, el) {
    const x = m.x(place[2]), y = m.y(place[1]), pulse = (el % 1600) / 1600;
    ctx.save(); ctx.strokeStyle = c.a2; ctx.globalAlpha = 1 - pulse; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x, y, 5 + pulse * 18, 0, 7); ctx.stroke(); ctx.restore();
    ctx.fillStyle = c.a2; ctx.strokeStyle = c.text; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(x, y, 5, 0, 7); ctx.fill(); ctx.stroke();
  }
  function setShown(n) {
    if (n === shown) return; shown = n;
    spans.forEach((s, i) => { s.textContent = i < n ? data.hash[i] : "·"; s.classList.toggle("on", i < n); });
    precEl.textContent = n + " / 9"; cellEl.textContent = n ? CELL[n - 1] : "—";
    cv.setAttribute("aria-label", "Geohash " + place[0] + ": " + data.hash.slice(0, n));
  }
  function frame(now) {
    const c = { a1: css("--a1"), a2: css("--a2"), border: css("--border"), muted: css("--muted"), text: css("--text") };
    ctx.clearRect(0, 0, W, H);
    const el = reduceMo ? 9 * LEVEL : now - t0, lvl = Math.floor(el / LEVEL), ph = el - lvl * LEVEL;
    const P = (i) => i >= 9 ? data.fin : data.steps[i].b;
    let n;
    if (lvl >= 9) {
      const m = mapper(data.fin); n = 9; fillCell(m, data.fin, c, 1); pin(m, c, el);
    } else {
      const u = ph < HOLD ? 0 : ease((ph - HOLD) / ZOOM);
      const m = mapper(viewAt(P(lvl), P(lvl + 1), u));
      drawGrid(data.steps[lvl], m, 1 - u, Math.min(1, ph / 250), c);
      if (lvl < 8) drawGrid(data.steps[lvl + 1], m, u, 0, c); else if (u > 0) fillCell(m, data.fin, c, u);
      pin(m, c, el); n = lvl + (ph > 250 ? 1 : 0);
    }
    setShown(n);
    raf = visible && !(lvl >= 9 && reduceMo) ? requestAnimationFrame(frame) : 0;
  }
  function start(i) {
    place = PLACES[i]; data = encode(place[1], place[2]); shown = -1; t0 = performance.now();
    coordsEl.textContent = place[1].toFixed(4) + ", " + place[2].toFixed(4);
    document.querySelectorAll("#ghPlaces .chip-btn").forEach((b, k) => b.classList.toggle("on", k === i));
    cancelAnimationFrame(raf); raf = requestAnimationFrame(frame);
  }
  document.getElementById("ghPlaces").addEventListener("click", (e) => { const b = e.target.closest("[data-i]"); if (b) start(+b.dataset.i); });
  document.getElementById("ghReplay").onclick = () => start(PLACES.indexOf(place));
  addEventListener("resize", () => { size(); if (!raf) raf = requestAnimationFrame(frame); });
  new MutationObserver(() => { if (!raf) raf = requestAnimationFrame(frame); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  size(); setShown(0); coordsEl.textContent = place[1].toFixed(4) + ", " + place[2].toFixed(4);
  new IntersectionObserver((es) => {
    const was = visible; visible = es[0].isIntersecting;
    if (visible && !was) { t0 = performance.now(); shown = -1; if (!raf) raf = requestAnimationFrame(frame); }
  }, { threshold: 0.3 }).observe(cv);
})();
