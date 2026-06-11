const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const languageButtons = document.querySelectorAll("[data-language]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const scrollTopLinks = document.querySelectorAll("[data-scroll-top]");

const translations = {
  en: {
    brand: "Operations Portfolio",
    navExpertise: "Expertise",
    navCases: "Case Studies",
    navExperience: "Experience",
    navContact: "Contact",
    heroEyebrow: "Inventory Planning / Warehouse Operations / Data Automation",
    heroLede: "I turn warehouse movement, inventory records, and planning inputs into practical operating systems: cleaner dashboards, faster reports, sharper stock decisions, and work teams can repeat.",
    emailPeach: "Email Peach",
    viewCases: "View Case Studies",
    statOne: "2 days to 1 hour",
    statOneDesc: "reporting cycle reduced with refreshable analytics",
    statTwo: "4 domains",
    statTwoDesc: "inventory, planning, automation, warehouse control",
    statThree: "Bangkok",
    statThreeDesc: "available for operations analysis and planning roles",
    currentFocus: "Current Focus",
    currentFocusText: "Inventory visibility, stock accuracy, and automated reporting",
    expertProfile: "Expert Profile",
    expertTitle: "Built for roles where operations, data, and planning meet.",
    expertP1: "Peach combines hands-on warehouse discipline with planning analytics. The profile is strongest where a team needs someone who understands physical stock movement, can diagnose data gaps, and can build simple tools that make daily decisions faster.",
    expertP2: "The working style is practical: map the process, clean the data, automate the repeatable parts, and make the result clear enough for warehouse, planning, and management teams to trust.",
    capOneTitle: "Data Automation & Reporting",
    capOneText: "Advanced Excel, Power Query, Excel VBA, basic SQL, dashboard reporting, data cleaning, KPI tracking, and refreshable reporting flows.",
    capTwoTitle: "Planning & Forecasting",
    capTwoText: "Capacity planning, demand planning, inventory optimization, sales trend analysis, budget vs. demand logic, and root cause analysis.",
    capThreeTitle: "Warehouse Control",
    capThreeText: "IT server spare parts control, inbound and outbound flow, returns, stock counts, FIFO, location management, and stock reconciliation.",
    capFourTitle: "Systems & Process Design",
    capFourText: "Microsoft Dynamics NAV, inventory record maintenance, workflow standardization, process documentation, and practical operating routines.",
    proofOneTitle: "Operational lens",
    proofOneText: "Understands what happens on the warehouse floor, not only in the spreadsheet.",
    proofTwoTitle: "Analytical build",
    proofTwoText: "Turns scattered data into decision-ready views and repeatable reports.",
    proofThreeTitle: "Planning mindset",
    proofThreeText: "Balances service levels, available capacity, and stock risk with measurable logic.",
    selectedWork: "Selected Work",
    casesTitle: "Case studies with measurable operational value.",
    caseOneType: "Automation / Planning Analytics",
    caseOneTitle: "Refreshable Reporting Pipeline",
    caseOneText: "Built a Power Query and basic SQL workflow that replaced manual report preparation, reducing a recurring reporting cycle from 2 days to 1 hour.",
    caseOneLi1: "Standardized source extraction and transformation.",
    caseOneLi2: "Reduced manual copy-paste risk and rework.",
    caseOneLi3: "Improved management visibility through reusable dashboards.",
    caseTwoType: "Warehouse Optimization",
    caseTwoTitle: "Spare Parts Location Planning",
    caseTwoText: "Analyzed part movement frequency to classify fast-moving, slow-moving, and dead stock, then reorganized locations to support faster issuing and clearer control.",
    caseThreeType: "Demand / Capacity Planning",
    caseThreeTitle: "Budget vs. Demand Logic Tool",
    caseThreeText: "Developed a planning model to compare resource capacity with demand requirements, helping planners reduce manual judgment and align allocation decisions.",
    careerTimeline: "Career Timeline",
    experienceTitle: "Experience across warehouse execution and planning analytics.",
    readDetails: "Read detailed scope",
    jobOneDate: "Mar 2026 - Present",
    jobOneTitle: "Warehouse Specialist",
    jobOneSummary: "Manages IT server spare parts inventory from receiving to issuance, returns, stock counting, location control, and reconciliation between physical stock and records.",
    jobOneLi1: "Managed inbound receiving, outbound issuance, returns, cycle counts, and inventory record reconciliation for IT server spare parts.",
    jobOneLi2: "Analyzed movement history to classify fast-moving, slow-moving, and dead stock items for clearer storage and replenishment decisions.",
    jobOneLi3: "Reorganized warehouse locations around picking frequency to reduce walking distance and improve spare parts accessibility.",
    jobOneLi4: "Prepared recurring inventory and operations reports covering stock movement, usage, outstanding items, and warehouse performance indicators.",
    jobOneLi5: "Standardized storage arrangement, spare parts handling, and inventory update routines to improve process consistency.",
    jobTwoDate: "Feb 2025 - Feb 2026",
    jobTwoTitle: "Capacity Planner",
    jobTwoSummary: "Built automated reporting and planning tools using Power Query, basic SQL, and Excel logic to improve budget, demand, and resource visibility.",
    jobTwoLi1: "Built an automated reporting pipeline using Power Query and basic SQL to extract, transform, and refresh planning data.",
    jobTwoLi2: "Replaced manual report preparation with reusable dashboard logic, reducing report cycle time from 2 days to 1 hour.",
    jobTwoLi3: "Created a logic-based planning tool to compare budget, demand, and available resources for more consistent allocation decisions.",
    jobTwoLi4: "Improved planning visibility by standardizing source data, transformation rules, and refresh routines.",
    jobThreeDate: "Jun 2024 - Dec 2024",
    jobThreeTitle: "Demand Planner",
    jobThreeSummary: "Analyzed sales trends, monitored inventory thresholds, initiated production orders, and investigated order cancellations through root cause analysis.",
    jobThreeLi1: "Analyzed sales trends with Excel Pivot Tables to support demand planning decisions and production order timing.",
    jobThreeLi2: "Monitored inventory thresholds and initiated production orders for styles below safety levels to reduce stockout risk.",
    jobThreeLi3: "Investigated order cancellations through root cause analysis, including factory delay and warehouse discrepancy factors.",
    jobThreeLi4: "Supported planning reviews by connecting demand signals with inventory status and production needs.",
    jobFourDate: "Aug 2023 - May 2024",
    jobFourTitle: "Warehouse Internship",
    jobFourSummary: "Supported purchase requisitions, order quantity decisions, FIFO procedures, monthly stock counts, and inventory records in Microsoft Dynamics NAV.",
    jobFourLi1: "Processed purchase requisitions and maintained stock records in Microsoft Dynamics NAV.",
    jobFourLi2: "Calculated appropriate order quantities to prevent overstocking while minimizing shortage and waste risk.",
    jobFourLi3: "Supported FIFO procedures, monthly stock counts, and regular inventory record updates.",
    jobFourLi4: "Helped keep warehouse operations aligned with stock accuracy, availability, and replenishment routines.",
    education: "Education",
    educationTitle: "Bachelor of Logistics and Supply Chain Management",
    educationSchool: "Dhurakij Pundit University, College of Innovative Business and Accountancy (CIBA)",
    educationHonours: "First Class Honours / GPA 3.51 / 2020 - 2024",
    portfolioLinks: "Portfolio Links",
    portfolioTitle: "Additional work and public experiments.",
    projectOne: "Modern shopping interface exercise",
    projectTwo: "Daily Thai horoscope automation concept",
    projectThree: "Public repositories and experiments",
    contact: "Contact",
    contactTitle: "Looking for inventory planning, operations analysis, or data automation work.",
    footerText: "© 2026 Theerapong Thanarodpaibun. Built as a focused operations portfolio.",
    backToTop: "Back to top",
  },
  th: {
    brand: "พอร์ตโฟลิโองาน Operations",
    navExpertise: "ความเชี่ยวชาญ",
    navCases: "ผลงาน",
    navExperience: "ประสบการณ์",
    navContact: "ติดต่อ",
    heroEyebrow: "Inventory Planning / Warehouse Operations / Data Automation",
    heroLede: "ผมเปลี่ยนงานคลังสินค้า ข้อมูลสต็อก และข้อมูลวางแผน ให้กลายเป็นระบบทำงานที่ใช้ได้จริง: dashboard ชัดขึ้น, report เร็วขึ้น, ตัดสินใจเรื่อง stock ได้คมขึ้น และทีมทำซ้ำได้อย่างเป็นระบบ",
    emailPeach: "อีเมลหา Peach",
    viewCases: "ดูผลงาน",
    statOne: "2 วัน เหลือ 1 ชั่วโมง",
    statOneDesc: "ลดรอบเวลาทำรายงานด้วยระบบ refreshable analytics",
    statTwo: "4 ด้านหลัก",
    statTwoDesc: "inventory, planning, automation, warehouse control",
    statThree: "กรุงเทพฯ",
    statThreeDesc: "พร้อมสำหรับงาน operations analysis และ planning",
    currentFocus: "โฟกัสตอนนี้",
    currentFocusText: "Inventory visibility, stock accuracy และ automated reporting",
    expertProfile: "โปรไฟล์ผู้เชี่ยวชาญ",
    expertTitle: "เหมาะกับบทบาทที่เชื่อมงาน operations, data และ planning เข้าด้วยกัน",
    expertP1: "Peach มีพื้นฐานจากงานคลังสินค้าจริงร่วมกับทักษะด้าน planning analytics จุดแข็งคือเข้าใจการเคลื่อนไหวของ stock หน้างาน มองเห็นช่องว่างของข้อมูล และสร้าง tool ง่าย ๆ ที่ช่วยให้ทีมตัดสินใจได้เร็วขึ้น",
    expertP2: "วิธีทำงานเน้นความ practical: เข้าใจกระบวนการ, ทำข้อมูลให้สะอาด, automate งานที่ทำซ้ำ และทำผลลัพธ์ให้อ่านง่ายพอที่ทีมคลัง, planning และ management จะเชื่อถือได้",
    capOneTitle: "Data Automation & Reporting",
    capOneText: "Advanced Excel, Power Query, Excel VBA, basic SQL, dashboard reporting, data cleaning, KPI tracking และ flow รายงานที่ refresh ได้",
    capTwoTitle: "Planning & Forecasting",
    capTwoText: "Capacity planning, demand planning, inventory optimization, sales trend analysis, budget vs. demand logic และ root cause analysis",
    capThreeTitle: "Warehouse Control",
    capThreeText: "ควบคุม spare parts สำหรับ IT server, inbound/outbound flow, returns, stock count, FIFO, location management และ stock reconciliation",
    capFourTitle: "Systems & Process Design",
    capFourText: "Microsoft Dynamics NAV, การดูแล inventory record, workflow standardization, process documentation และ routine การทำงานที่ใช้งานจริง",
    proofOneTitle: "เข้าใจหน้างาน",
    proofOneText: "เข้าใจสิ่งที่เกิดขึ้นในคลังสินค้า ไม่ได้มองแค่ตัวเลขใน spreadsheet",
    proofTwoTitle: "สร้างระบบจากข้อมูล",
    proofTwoText: "เปลี่ยนข้อมูลกระจัดกระจายให้เป็นมุมมองที่ใช้ตัดสินใจและรายงานซ้ำได้",
    proofThreeTitle: "คิดแบบ Planning",
    proofThreeText: "บาลานซ์ service level, capacity และ stock risk ด้วย logic ที่วัดผลได้",
    selectedWork: "ผลงานที่คัดเลือก",
    casesTitle: "Case studies ที่สร้างคุณค่าให้ operations แบบวัดผลได้",
    caseOneType: "Automation / Planning Analytics",
    caseOneTitle: "Refreshable Reporting Pipeline",
    caseOneText: "สร้าง workflow ด้วย Power Query และ basic SQL เพื่อแทนการเตรียม report แบบ manual ลดเวลาทำรายงานประจำจาก 2 วันเหลือ 1 ชั่วโมง",
    caseOneLi1: "จัดมาตรฐานการดึงข้อมูลและ transform ข้อมูลต้นทาง",
    caseOneLi2: "ลดความเสี่ยงจาก manual copy-paste และ rework",
    caseOneLi3: "เพิ่ม visibility ให้ management ด้วย dashboard ที่ใช้ซ้ำได้",
    caseTwoType: "Warehouse Optimization",
    caseTwoTitle: "Spare Parts Location Planning",
    caseTwoText: "วิเคราะห์ความถี่การเคลื่อนไหวของ part เพื่อแยก fast-moving, slow-moving และ dead stock แล้วจัด location ใหม่ให้หยิบจ่ายเร็วขึ้นและควบคุมง่ายขึ้น",
    caseThreeType: "Demand / Capacity Planning",
    caseThreeTitle: "Budget vs. Demand Logic Tool",
    caseThreeText: "พัฒนา planning model เพื่อเทียบ capacity ของ resource กับ demand requirement ช่วยลดการตัดสินใจแบบ manual และทำให้ allocation สอดคล้องขึ้น",
    careerTimeline: "ไทม์ไลน์อาชีพ",
    experienceTitle: "ประสบการณ์ทั้งงานคลังสินค้าและ planning analytics",
    readDetails: "อ่านรายละเอียดงาน",
    jobOneDate: "มี.ค. 2026 - ปัจจุบัน",
    jobOneTitle: "Warehouse Specialist",
    jobOneSummary: "ดูแล inventory ของ IT server spare parts ตั้งแต่รับเข้า เบิกจ่าย รับคืน ตรวจนับ ควบคุม location และ reconcile ระหว่าง stock จริงกับ record",
    jobOneLi1: "ดูแล inbound receiving, outbound issuance, returns, cycle count และ inventory record reconciliation สำหรับ IT server spare parts",
    jobOneLi2: "วิเคราะห์ movement history เพื่อแยก fast-moving, slow-moving และ dead stock สำหรับการจัดเก็บและเติมสินค้าให้ชัดขึ้น",
    jobOneLi3: "จัด location ในคลังใหม่ตามความถี่การหยิบ เพื่อลดระยะเดินและทำให้ spare parts เข้าถึงง่ายขึ้น",
    jobOneLi4: "จัดทำรายงาน inventory และ operations ประจำ ครอบคลุม stock movement, usage, outstanding items และ performance indicators",
    jobOneLi5: "วางมาตรฐานการจัดเก็บ การจัดการ spare parts และ routine การ update inventory เพื่อให้ process สม่ำเสมอขึ้น",
    jobTwoDate: "ก.พ. 2025 - ก.พ. 2026",
    jobTwoTitle: "Capacity Planner",
    jobTwoSummary: "สร้าง automated reporting และ planning tools ด้วย Power Query, basic SQL และ Excel logic เพื่อเพิ่ม visibility ด้าน budget, demand และ resource",
    jobTwoLi1: "สร้าง automated reporting pipeline ด้วย Power Query และ basic SQL สำหรับ extract, transform และ refresh planning data",
    jobTwoLi2: "แทนการทำ report manual ด้วย dashboard logic ที่ใช้ซ้ำได้ ลดเวลาทำรายงานจาก 2 วันเหลือ 1 ชั่วโมง",
    jobTwoLi3: "สร้าง planning tool แบบ logic-based เพื่อเปรียบเทียบ budget, demand และ available resources สำหรับ allocation decision",
    jobTwoLi4: "เพิ่ม planning visibility ด้วยการ standardize source data, transformation rules และ refresh routines",
    jobThreeDate: "มิ.ย. 2024 - ธ.ค. 2024",
    jobThreeTitle: "Demand Planner",
    jobThreeSummary: "วิเคราะห์ sales trend, monitor inventory threshold, เปิด production order และวิเคราะห์สาเหตุ order cancellation ด้วย root cause analysis",
    jobThreeLi1: "วิเคราะห์ sales trend ด้วย Excel Pivot Tables เพื่อ support demand planning และ timing ของ production order",
    jobThreeLi2: "ติดตาม inventory threshold และ initiate production order สำหรับ style ที่ต่ำกว่า safety level เพื่อลด stockout risk",
    jobThreeLi3: "วิเคราะห์ order cancellation ด้วย root cause analysis เช่น factory delay และ warehouse discrepancy",
    jobThreeLi4: "สนับสนุน planning review ด้วยการเชื่อม demand signal เข้ากับ inventory status และ production needs",
    jobFourDate: "ส.ค. 2023 - พ.ค. 2024",
    jobFourTitle: "Warehouse Internship",
    jobFourSummary: "สนับสนุน purchase requisition, การคำนวณ order quantity, FIFO, monthly stock count และ inventory record ใน Microsoft Dynamics NAV",
    jobFourLi1: "ดำเนินการ purchase requisition และดูแล stock records ใน Microsoft Dynamics NAV",
    jobFourLi2: "คำนวณ order quantity ที่เหมาะสมเพื่อลด overstock พร้อมลด shortage และ waste risk",
    jobFourLi3: "สนับสนุน FIFO procedures, monthly stock counts และการ update inventory record ประจำ",
    jobFourLi4: "ช่วยให้งานคลังสอดคล้องกับ stock accuracy, availability และ replenishment routines",
    education: "การศึกษา",
    educationTitle: "ปริญญาตรี สาขาการจัดการโลจิสติกส์และโซ่อุปทาน",
    educationSchool: "มหาวิทยาลัยธุรกิจบัณฑิตย์ วิทยาลัยบริหารธุรกิจนวัตกรรมและการบัญชี (CIBA)",
    educationHonours: "เกียรตินิยมอันดับ 1 / GPA 3.51 / 2020 - 2024",
    portfolioLinks: "ลิงก์ผลงาน",
    portfolioTitle: "ผลงานเพิ่มเติมและ public experiments",
    projectOne: "แบบฝึกหัด interface ร้านค้าออนไลน์สไตล์ modern",
    projectTwo: "คอนเซปต์ automation ดูดวงรายวันภาษาไทย",
    projectThree: "Public repositories และ experiments",
    contact: "ติดต่อ",
    contactTitle: "สนใจงาน inventory planning, operations analysis หรือ data automation",
    footerText: "© 2026 Theerapong Thanarodpaibun. สร้างเป็น focused operations portfolio",
    backToTop: "กลับขึ้นบนสุด",
  },
};

const closeMobileMenu = () => {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

const setLanguage = (language) => {
  const nextLanguage = translations[language] ? language : "en";

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const translatedText = translations[nextLanguage][key];
    if (translatedText) {
      node.textContent = translatedText;
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === nextLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = nextLanguage;
  localStorage.setItem("portfolio-language", nextLanguage);
};

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    closeMobileMenu();
  });
});

scrollTopLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", window.location.pathname + window.location.search);
    closeMobileMenu();
  });
});

setLanguage(localStorage.getItem("portfolio-language") || "en");
