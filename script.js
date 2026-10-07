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
