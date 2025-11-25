(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  const categories = {
    home: { name: "Home", color: "var(--home)" },
    finances: { name: "Finances", color: "var(--finances)" },
    health: { name: "Health", color: "var(--health)" }
  };
  const initialTasks = {
    todo: ["Deep clean interior", "Research pricing", "Repair cabinet latch", "Write listing draft"],
    doing: [],
    review: [],
    done: []
  };
  const BRONZE_TABLE_LIMIT = 10;
  const cloneData = (value) => JSON.parse(JSON.stringify(value));
  const DEFAULT_GOLD_QUEUE = [
    {
      title: "Sell Camper Van",
      meta: "Finances \xB7 Gold \xB7 Crisis",
      category: "finances",
      progress: 0.18,
      stage: "Stage 4 \xB7 Plans final",
      status: "Crisis trigger",
      focus: "2-week sprint"
    },
    {
      title: "Build Backyard Deck",
      meta: "Home \xB7 Gold \xB7 50%",
      category: "home",
      progress: 0.5,
      stage: "Stage 3 \xB7 Materials ready",
      status: "Weather window in June"
    },
    {
      title: "Atlanta Studio Launch",
      meta: "Finances \xB7 Gold \xB7 22%",
      category: "finances",
      progress: 0.22,
      stage: "Stage 2 \xB7 Drafting",
      status: "Sponsor pitch next week"
    },
    {
      title: "Osaka Retreat Refresh",
      meta: "Home \xB7 Gold \xB7 12%",
      category: "home",
      progress: 0.12,
      stage: "Stage 2 \xB7 Drafting",
      status: "Design board ready"
    }
  ];
  const DEFAULT_SILVER_QUEUE = [
    {
      title: "Mortgage Refinance",
      meta: "Finances \xB7 Silver \xB7 18%",
      category: "finances",
      progress: 0.18,
      stage: "Stage 2 \xB7 Drafting",
      status: "Rate watch",
      focus: "Docs prep"
    },
    {
      title: "Automate Monthly Budget Review",
      meta: "Finances \xB7 Silver \xB7 42%",
      category: "finances",
      progress: 0.42,
      stage: "Stage 3 \xB7 Ready",
      status: "Needs 30-min block"
    },
    {
      title: "Family Travel Insurance Hub",
      meta: "Health \xB7 Silver \xB7 10%",
      category: "health",
      progress: 0.1,
      stage: "Stage 1 \xB7 Intake",
      status: "Collect policies"
    },
    {
      title: "House Maintenance Calendar",
      meta: "Home \xB7 Silver \xB7 28%",
      category: "home",
      progress: 0.28,
      stage: "Stage 2 \xB7 Drafting",
      status: "Waiting on vendor list"
    }
  ];
  const DEFAULT_BRONZE_QUEUE = [
    { title: "Fix leaky kitchen faucet", meta: "Home \xB7 Bronze \xB7 45 min", stage: "Care task", energy: "Quick win" },
    { title: "Touch up paint in hallway", meta: "Home \xB7 Bronze \xB7 1 hr", stage: "Care task", energy: "Low focus" },
    { title: "Swap HVAC filter", meta: "Home \xB7 Bronze \xB7 10 min", stage: "Care task", energy: "Maintenance" },
    { title: "Clean out camper gear bin", meta: "Home \xB7 Bronze \xB7 30 min", stage: "Care task", energy: "Low focus" },
    { title: "Donate old clothes", meta: "Home \xB7 Bronze \xB7 1 trip", stage: "Care task", energy: "Weekend errand" },
    { title: "Back up family photos", meta: "Home \xB7 Bronze \xB7 40 min", stage: "Care task", energy: "Laptop task" },
    { title: "Order pantry staples", meta: "Home \xB7 Bronze \xB7 15 min", stage: "Care task", energy: "Laptop task" },
    { title: "Schedule gutter cleaning", meta: "Home \xB7 Bronze \xB7 5 min", stage: "Care task", energy: "Call / text" },
    { title: "Replace broken porch bulb", meta: "Home \xB7 Bronze \xB7 5 min", stage: "Care task", energy: "Quick win" },
    { title: "Update camper insurance card", meta: "Finances \xB7 Bronze \xB7 20 min", stage: "Care task", energy: "Laptop task" },
    { title: "Sharpen kitchen knives", meta: "Home \xB7 Bronze \xB7 30 min", stage: "Queue", energy: "Weekend errand" },
    { title: "Reset Wi-Fi passwords", meta: "Home \xB7 Bronze \xB7 30 min", stage: "Queue", energy: "Laptop task" },
    { title: "Mail birthday cards", meta: "Home \xB7 Bronze \xB7 20 min", stage: "Queue", energy: "Low focus" },
    { title: "Organize glove box", meta: "Home \xB7 Bronze \xB7 15 min", stage: "Queue", energy: "Car errand" }
  ];
  const getBronzeTableSummary = (list) => {
    if (!list.length) return { title: "No Bronze cards", meta: "Queue open" };
    const tabledCount = Math.min(BRONZE_TABLE_LIMIT, list.length);
    const remaining = Math.max(tabledCount - 1, 0);
    return {
      title: list[0].title,
      meta: remaining ? `+${remaining} tabled` : "Queue open"
    };
  };
  const DEFAULT_GOLD_TABLE = {
    title: "Launch Consulting",
    meta: "Finances \xB7 Gold \xB7 60%",
    category: "finances",
    progress: 0.6,
    stage: "Stage 4 \xB7 Build",
    status: "On Table"
  };
  const DEFAULT_SILVER_TABLE = {
    title: "Set Up Automated Prescription Delivery",
    meta: "Health \xB7 Silver \xB7 71%",
    category: "health",
    progress: 0.71,
    stage: "Stage 4 \xB7 Running",
    status: "System live"
  };
  const automationBadges = {
    ai: { icon: "\u{1F916}", label: "AI Delegated" },
    service: { icon: "\u{1F4C5}", label: "Scheduled Service" },
    system: { icon: "\u2699\uFE0F", label: "Self-Running System" }
  };
  const DEFAULT_PLANTED_PROJECTS = {
    home: [
      {
        title: "Lawn Care Service",
        status: "Delegated to Service - Active",
        automation: "service",
        statusDetail: "Next scheduled: Tue \xB7 7:30am",
        attention: "soon"
      },
      {
        title: "HVAC Maintenance Contract",
        status: "Delegated to Service - Scheduled",
        automation: "service",
        statusDetail: "Next scheduled: Jul 15",
        attention: "idle"
      },
      {
        title: "House Cleaning Service",
        status: "Delegated to Service - Active",
        automation: "service",
        statusDetail: "Next scheduled: May 10",
        attention: "soon"
      },
      {
        title: "Grocery Delivery Subscription",
        status: "Ongoing Service - Running",
        automation: "service",
        statusDetail: "Next delivery: May 3 \xB7 8-10am",
        attention: "soon"
      }
    ],
    finances: [
      {
        title: "Automated Bill Payment System",
        status: "Ongoing System - Running",
        automation: "system",
        statusDetail: "Last review: Apr 1",
        attention: "idle"
      },
      {
        title: "Retirement Contributions",
        status: "Ongoing System - Running",
        automation: "system",
        statusDetail: "Next increase review: Jan 5",
        attention: "idle"
      },
      {
        title: "Credit Card Rewards Optimization",
        status: "Delegated to AI - Active",
        automation: "ai",
        statusDetail: "Last sync: 1 hour ago",
        attention: "soon"
      },
      {
        title: "Tax Document Organization",
        status: "Ongoing System - Running",
        automation: "system",
        statusDetail: "Last sweep: 2 days ago",
        attention: "idle"
      },
      {
        title: "Insurance Policy Review Calendar",
        status: "Ongoing System - Scheduled",
        automation: "system",
        statusDetail: "Next scheduled: Aug 1",
        attention: "idle"
      }
    ],
    health: [
      {
        title: "Prescription Delivery Concierge",
        status: "Delegated to Service - Active",
        automation: "service",
        statusDetail: "Next delivery: Apr 28",
        attention: "soon"
      },
      {
        title: "Biometric Trends Dashboard",
        status: "Delegated to AI - Active",
        automation: "ai",
        statusDetail: "Last sync: overnight",
        attention: "soon"
      },
      {
        title: "Trainer Accountability Sessions",
        status: "Delegated to Service - Active",
        automation: "service",
        statusDetail: "Next session: Thu \xB7 6am",
        attention: "soon"
      }
    ]
  };
  const getDefaultData = () => ({
    goldQueue: cloneData(DEFAULT_GOLD_QUEUE),
    silverQueue: cloneData(DEFAULT_SILVER_QUEUE),
    bronzeQueue: cloneData(DEFAULT_BRONZE_QUEUE),
    goldTable: cloneData(DEFAULT_GOLD_TABLE),
    silverTable: cloneData(DEFAULT_SILVER_TABLE),
    plantedProjects: cloneData(DEFAULT_PLANTED_PROJECTS)
  });
  const buildBronzeStacks = (list = []) => {
    return list.reduce((acc, card) => {
      if (!card.category) return acc;
      if (!acc[card.category]) {
        acc[card.category] = { top: card.title, extra: 0 };
      } else {
        acc[card.category].extra += 1;
      }
      return acc;
    }, {});
  };
  const hydrateLifeBuildData = () => {
    if (typeof window === "undefined" || !window.LifeBuildData) {
      return getDefaultData();
    }
    try {
      const {
        projects,
        queues,
        seeds,
        bronzeQueue,
        plantedProjects: plantedProjects2,
        rosterAssignments
      } = window.LifeBuildData;
      const cloneProject = (id) => (projects == null ? void 0 : projects[id]) ? __spreadValues({}, projects[id]) : null;
      const hydrateQueue = (ids = []) => Array.isArray(ids) ? ids.map(cloneProject).filter(Boolean) : [];
      const goldQueue = hydrateQueue(queues == null ? void 0 : queues.gold);
      const silverQueue = hydrateQueue(queues == null ? void 0 : queues.silver);
      const bronzeQueueData = Array.isArray(bronzeQueue) ? bronzeQueue.map((card) => __spreadValues({}, card)) : [];
      const goldTable = cloneProject(seeds == null ? void 0 : seeds.goldTable);
      const silverTable = cloneProject(seeds == null ? void 0 : seeds.silverTable);
      const planted = plantedProjects2 || rosterAssignments;
      const defaults = getDefaultData();
      return {
        goldQueue: goldQueue.length ? goldQueue : defaults.goldQueue,
        silverQueue: silverQueue.length ? silverQueue : defaults.silverQueue,
        bronzeQueue: bronzeQueueData.length ? bronzeQueueData : defaults.bronzeQueue,
        goldTable: goldTable || defaults.goldTable,
        silverTable: silverTable || defaults.silverTable,
        plantedProjects: planted ? cloneData(planted) : defaults.plantedProjects
      };
    } catch (error) {
      console.warn("Failed to hydrate LifeBuildData:", error);
      return getDefaultData();
    }
  };
  const {
    goldQueue: initialGoldQueue,
    silverQueue: initialSilverQueue,
    bronzeQueue: initialBronzeQueue,
    goldTable: goldTableSeed,
    silverTable: silverTableSeed,
    plantedProjects
  } = hydrateLifeBuildData();
  const bronzeStacks = buildBronzeStacks(initialBronzeQueue);
  const TableBar = ({ table }) => {
    const [rosterProjects, setRosterProjects] = React.useState([]);
    const loadRosterProjects = React.useCallback(() => {
      try {
        const stored = localStorage.getItem("rosterRoom_projects");
        if (stored) {
          const projects = JSON.parse(stored);
          setRosterProjects(projects.filter((p) => p.staffing.assigned && p.status === "active"));
        }
      } catch (error) {
        console.warn("Failed to load roster projects:", error);
      }
    }, []);
    React.useEffect(() => {
      loadRosterProjects();
      const handleRosterUpdate = () => loadRosterProjects();
      window.addEventListener("rosterUpdated", handleRosterUpdate);
      return () => {
        window.removeEventListener("rosterUpdated", handleRosterUpdate);
      };
    }, [loadRosterProjects]);
    const goldStaffing = rosterProjects.find((p) => p.title === table.gold.title);
    const silverStaffing = rosterProjects.find((p) => p.title === table.silver.title);
    return /* @__PURE__ */ React.createElement("div", { className: "table-bar" }, /* @__PURE__ */ React.createElement("div", { className: "table-grid" }, /* @__PURE__ */ React.createElement("div", { className: "slot", style: { borderColor: "rgba(216,166,80,0.6)", background: "linear-gradient(145deg, rgba(216,166,80,0.12), #fff)" } }, /* @__PURE__ */ React.createElement("h4", null, "Gold"), /* @__PURE__ */ React.createElement("div", { className: "body" }, table.gold.title || "Empty"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, table.gold.meta, goldStaffing && ` \xB7 \u{1F464} ${goldStaffing.staffing.agentName}`), table.gold.progress !== void 0 && /* @__PURE__ */ React.createElement("div", { className: "progress", style: { marginTop: "0.4rem" } }, /* @__PURE__ */ React.createElement("div", { className: "bar", style: { width: `${Math.round((table.gold.progress || 0) * 100)}%`, background: "var(--gold)" } }))), /* @__PURE__ */ React.createElement("div", { className: "slot", style: { borderColor: "rgba(197,206,216,0.7)", background: "linear-gradient(145deg, rgba(197,206,216,0.14), #fff)" } }, /* @__PURE__ */ React.createElement("h4", null, "Silver"), /* @__PURE__ */ React.createElement("div", { className: "body" }, table.silver.title || "Empty"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, table.silver.meta, silverStaffing && ` \xB7 \u{1F464} ${silverStaffing.staffing.agentName}`), table.silver.progress !== void 0 && /* @__PURE__ */ React.createElement("div", { className: "progress", style: { marginTop: "0.4rem" } }, /* @__PURE__ */ React.createElement("div", { className: "bar", style: { width: `${Math.round((table.silver.progress || 0) * 100)}%`, background: "var(--silver)" } }))), /* @__PURE__ */ React.createElement("div", { className: "slot", style: { borderColor: "rgba(196,139,90,0.7)", background: "linear-gradient(145deg, rgba(196,139,90,0.12), #fff)" } }, /* @__PURE__ */ React.createElement("h4", null, "Bronze"), /* @__PURE__ */ React.createElement("div", { className: "body" }, table.bronze.title), /* @__PURE__ */ React.createElement("div", { className: "meta" }, table.bronze.meta))));
  };
  const LifeMap = ({ table }) => {
    const catList = ["home", "finances", "health"];
    const [rosterProjects, setRosterProjects] = React.useState([]);
    const loadRosterProjects = React.useCallback(() => {
      try {
        const stored = localStorage.getItem("rosterRoom_projects");
        if (stored) {
          const projects = JSON.parse(stored);
          setRosterProjects(projects.filter((p) => p.staffing.assigned));
        }
      } catch (error) {
        console.warn("Failed to load roster projects:", error);
      }
    }, []);
    React.useEffect(() => {
      loadRosterProjects();
      const handleRosterUpdate = () => loadRosterProjects();
      window.addEventListener("rosterUpdated", handleRosterUpdate);
      return () => {
        window.removeEventListener("rosterUpdated", handleRosterUpdate);
      };
    }, [loadRosterProjects]);
    return /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "map-grid" }, catList.map((id) => {
      var _a, _b;
      const cat = categories[id];
      if (!cat) return null;
      return /* @__PURE__ */ React.createElement("div", { key: id, className: "cat", style: { borderColor: cat.color } }, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("span", { style: { color: cat.color } }, "\u25CF"), " ", cat.name), /* @__PURE__ */ React.createElement("div", { className: "count" }, "Active"), /* @__PURE__ */ React.createElement("div", { className: "active-wrap" }, table.gold && table.gold.category === id && (() => {
        const staffedProject = rosterProjects.find(
          (p) => p.title === table.gold.title && p.status === "active"
        );
        return /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, table.gold.title), /* @__PURE__ */ React.createElement("div", { className: "meta" }, table.gold.meta, staffedProject && ` \xB7 \u{1F464} ${staffedProject.staffing.agentName}`), table.gold.progress >= 0 && /* @__PURE__ */ React.createElement("div", { className: "progress" }, /* @__PURE__ */ React.createElement("div", { className: "bar", style: { width: `${Math.round((table.gold.progress || 0) * 100)}%`, background: cat.color } })));
      })(), table.silver && table.silver.category === id && (() => {
        const staffedProject = rosterProjects.find(
          (p) => p.title === table.silver.title && p.status === "active"
        );
        return /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, table.silver.title), /* @__PURE__ */ React.createElement("div", { className: "meta" }, table.silver.meta, staffedProject && ` \xB7 \u{1F464} ${staffedProject.staffing.agentName}`), /* @__PURE__ */ React.createElement("div", { className: "progress" }, /* @__PURE__ */ React.createElement("div", { className: "bar", style: { width: `${Math.round(table.silver.progress * 100)}%`, background: cat.color } })));
      })(), bronzeStacks[id] && /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, bronzeStacks[id].top), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Bronze stack \xB7 +", bronzeStacks[id].extra, " more"))), ((_a = plantedProjects[id]) == null ? void 0 : _a.length) || rosterProjects.filter((p) => p.category === id && p.status === "ongoing").length ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "planted-label" }, "Ongoing"), /* @__PURE__ */ React.createElement("div", { className: "planted-grid" }, rosterProjects.filter((p) => p.category === id && p.status === "ongoing").map((project) => {
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: project.id,
            className: "planted-card",
            "data-automation": "ai",
            "data-attention": "idle"
          },
          /* @__PURE__ */ React.createElement("div", { className: "planted-top" }, /* @__PURE__ */ React.createElement("span", { className: "planted-badge" }, /* @__PURE__ */ React.createElement("span", null, "\u{1F464}"), /* @__PURE__ */ React.createElement("span", null, "Agent Staffed"))),
          /* @__PURE__ */ React.createElement("div", { className: "planted-title" }, project.title),
          /* @__PURE__ */ React.createElement("div", { className: "planted-line schedule" }, "Staffed: ", project.staffing.agentName)
        );
      }), (_b = plantedProjects[id]) == null ? void 0 : _b.map((project) => {
        const badge = automationBadges[project.automation] || automationBadges.system;
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: project.title,
            className: "planted-card",
            "data-automation": project.automation,
            "data-attention": project.attention || "idle"
          },
          /* @__PURE__ */ React.createElement("div", { className: "planted-top" }, /* @__PURE__ */ React.createElement("span", { className: "planted-badge" }, /* @__PURE__ */ React.createElement("span", null, badge.icon), /* @__PURE__ */ React.createElement("span", null, badge.label))),
          /* @__PURE__ */ React.createElement("div", { className: "planted-title" }, project.title),
          /* @__PURE__ */ React.createElement("div", { className: "planted-line schedule" }, project.statusDetail || project.status)
        );
      }))) : null);
    })));
  };
  const DraftingRoom = () => /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "project", style: { borderColor: "var(--gold)", boxShadow: "0 12px 26px rgba(216,166,80,0.2)" } }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Sell Camper Van"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Gold Candidate \xB7 Plans done \xB7 Crisis trigger"), /* @__PURE__ */ React.createElement("ul", { style: { marginTop: "0.4rem", paddingLeft: "1rem", color: "var(--muted)", fontSize: "0.95rem" } }, /* @__PURE__ */ React.createElement("li", null, "Clean + photo professionally"), /* @__PURE__ */ React.createElement("li", null, "List on 3 platforms"), /* @__PURE__ */ React.createElement("li", null, "Sell & transfer title in 3 weeks"))), /* @__PURE__ */ React.createElement("div", { className: "project", style: { marginTop: "0.7rem" } }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Launch Consulting"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Current Gold \xB7 60% \xB7 Will pause if swapped")));
  const SortingRoom = ({ state }) => {
    const laneConfig = [
      {
        id: "gold",
        label: "Gold * Expansion",
        color: "var(--gold)",
        queue: state.goldQueue,
        table: state.table.gold,
        activate: state.activateGold
      },
      {
        id: "silver",
        label: "Silver * Capacity",
        color: "var(--silver)",
        queue: state.silverQueue,
        table: state.table.silver,
        activate: state.activateSilver
      }
    ];
    const bronzeTabled = state.bronzeQueue.slice(0, state.bronzeLimit);
    const bronzeWaiting = state.bronzeQueue.slice(state.bronzeLimit);
    return /* @__PURE__ */ React.createElement("div", { className: "card sorting-room" }, /* @__PURE__ */ React.createElement("div", { className: "sorting-header" }, /* @__PURE__ */ React.createElement("div", { className: "sorting-banner" }, /* @__PURE__ */ React.createElement("span", { className: "pulse-dot" }), /* @__PURE__ */ React.createElement("span", null, state.status))), /* @__PURE__ */ React.createElement("div", { className: "queue-grid" }, laneConfig.map((lane) => /* @__PURE__ */ React.createElement("div", { key: lane.id, className: "queue-column", "data-lane": lane.id }, /* @__PURE__ */ React.createElement("div", { className: "lane-head" }, /* @__PURE__ */ React.createElement("div", { className: "lane-info" }, /* @__PURE__ */ React.createElement("span", { className: "lane-dot", style: { background: lane.color } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "lane-label" }, lane.label), /* @__PURE__ */ React.createElement("div", { className: "lane-desc" }, lane.queue.length, " waiting in queue"))), /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.toggleQueue(lane.id) }, state.openQueue === lane.id ? "Hide queue" : "Expand queue")), /* @__PURE__ */ React.createElement("div", { className: "lane-table-card", "data-lane": lane.id }, /* @__PURE__ */ React.createElement("div", { className: "card-label" }, "On Table"), /* @__PURE__ */ React.createElement("div", { className: "lane-title-main" }, lane.table.title), /* @__PURE__ */ React.createElement("div", { className: "lane-meta" }, lane.table.meta), lane.table.progress !== void 0 && /* @__PURE__ */ React.createElement("div", { className: "mini-progress" }, /* @__PURE__ */ React.createElement("div", { className: "mini-bar", style: { width: `${Math.round((lane.table.progress || 0) * 100)}%`, background: lane.color } }))), state.openQueue === lane.id && /* @__PURE__ */ React.createElement("div", { className: "queue-body" }, lane.queue.map((card, idx) => /* @__PURE__ */ React.createElement("div", { key: card.title, className: "priority-card" }, /* @__PURE__ */ React.createElement("div", { className: "priority-rank" }, "#", idx + 1), /* @__PURE__ */ React.createElement("div", { className: "priority-copy" }, /* @__PURE__ */ React.createElement("div", { className: "priority-title" }, card.title), /* @__PURE__ */ React.createElement("div", { className: "priority-meta" }, card.meta), /* @__PURE__ */ React.createElement("div", { className: "priority-tags" }, card.stage && /* @__PURE__ */ React.createElement("span", { className: "chip" }, card.stage), card.status && /* @__PURE__ */ React.createElement("span", { className: "chip muted" }, card.status), card.focus && /* @__PURE__ */ React.createElement("span", { className: "chip outline" }, card.focus))), /* @__PURE__ */ React.createElement("div", { className: "priority-actions" }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.nudgeQueue(lane.id, idx, -1), disabled: idx === 0 }, "Move up"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.nudgeQueue(lane.id, idx, 1), disabled: idx === lane.queue.length - 1 }, "Move down"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn", onClick: () => lane.activate(card.title) }, "Activate to Table")))), !lane.queue.length && /* @__PURE__ */ React.createElement("div", { className: "empty-note" }, "Queue clear. Head to Drafting Room to add new cards.")))), /* @__PURE__ */ React.createElement("div", { className: "queue-column", "data-lane": "bronze" }, /* @__PURE__ */ React.createElement("div", { className: "lane-head" }, /* @__PURE__ */ React.createElement("div", { className: "lane-info" }, /* @__PURE__ */ React.createElement("span", { className: "lane-dot", style: { background: "var(--bronze)" } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "lane-label" }, "Bronze * Execution"), /* @__PURE__ */ React.createElement("div", { className: "lane-desc" }, bronzeTabled.length, " tabled \xB7 ", bronzeWaiting.length, " queued"))), /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.toggleQueue("bronze") }, state.openQueue === "bronze" ? "Hide queue" : "Expand queue")), /* @__PURE__ */ React.createElement("div", { className: "lane-table-card", "data-lane": "bronze" }, /* @__PURE__ */ React.createElement("div", { className: "card-label" }, "On Table"), /* @__PURE__ */ React.createElement("div", { className: "lane-title-main" }, state.table.bronze.title), /* @__PURE__ */ React.createElement("div", { className: "lane-meta" }, state.table.bronze.meta)), state.openQueue === "bronze" && /* @__PURE__ */ React.createElement("div", { className: "queue-body" }, /* @__PURE__ */ React.createElement("div", { className: "queue-section-title" }, "Tabled (", bronzeTabled.length, "/", state.bronzeLimit, ")"), bronzeTabled.map((card, idx) => /* @__PURE__ */ React.createElement("div", { key: card.title, className: "priority-card tabled" }, /* @__PURE__ */ React.createElement("div", { className: "priority-rank" }, "#", idx + 1), /* @__PURE__ */ React.createElement("div", { className: "priority-copy" }, /* @__PURE__ */ React.createElement("div", { className: "priority-title" }, card.title), /* @__PURE__ */ React.createElement("div", { className: "priority-meta" }, card.meta), /* @__PURE__ */ React.createElement("div", { className: "priority-tags" }, card.stage && /* @__PURE__ */ React.createElement("span", { className: "chip" }, card.stage), card.energy && /* @__PURE__ */ React.createElement("span", { className: "chip muted" }, card.energy))), /* @__PURE__ */ React.createElement("div", { className: "priority-actions" }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.nudgeBronze(idx, -1), disabled: idx === 0 }, "Move up"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.nudgeBronze(idx, 1), disabled: idx === bronzeTabled.length - 1 && !bronzeWaiting.length }, "Move down"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn", onClick: () => state.releaseBronze(idx) }, "Release to Queue")))), /* @__PURE__ */ React.createElement("div", { className: "queue-section-title" }, "Queue (", bronzeWaiting.length, ")"), bronzeWaiting.map((card, idx) => /* @__PURE__ */ React.createElement("div", { key: card.title, className: "priority-card idle" }, /* @__PURE__ */ React.createElement("div", { className: "priority-rank" }, "#", state.bronzeLimit + idx + 1), /* @__PURE__ */ React.createElement("div", { className: "priority-copy" }, /* @__PURE__ */ React.createElement("div", { className: "priority-title" }, card.title), /* @__PURE__ */ React.createElement("div", { className: "priority-meta" }, card.meta), /* @__PURE__ */ React.createElement("div", { className: "priority-tags" }, card.stage && /* @__PURE__ */ React.createElement("span", { className: "chip" }, card.stage), card.energy && /* @__PURE__ */ React.createElement("span", { className: "chip muted" }, card.energy))), /* @__PURE__ */ React.createElement("div", { className: "priority-actions" }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.nudgeBronze(state.bronzeLimit + idx, -1), disabled: state.bronzeLimit + idx === state.bronzeLimit }, "Move up"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: () => state.nudgeBronze(state.bronzeLimit + idx, 1), disabled: state.bronzeLimit + idx === state.bronzeQueue.length - 1 }, "Move down"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn", onClick: () => state.tableBronze(state.bronzeLimit + idx) }, "Table this card")))), !bronzeWaiting.length && /* @__PURE__ */ React.createElement("div", { className: "empty-note" }, "Queue clear. Load more from Drafting Room.")))));
  };
  const ActivationMap = ({ state }) => /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "map-grid" }, /* @__PURE__ */ React.createElement("div", { className: "cat", style: { borderColor: categories.finances.color } }, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("span", { style: { color: categories.finances.color } }, "\u25CF"), " Finances"), /* @__PURE__ */ React.createElement("div", { className: "project pulse" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, state.table.gold.title), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Gold \xB7 On Table & in Finances")), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Automate Monthly Budget Review"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Silver candidate"))), /* @__PURE__ */ React.createElement("div", { className: "cat", style: { borderColor: categories.home.color } }, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("span", { style: { color: categories.home.color } }, "\u25CF"), " Home"), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Build Backyard Deck"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "In Gold queue \xB7 50%")), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Plan Family Camping Trip"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Live \xB7 33%")))));
  const ProjectBoard = ({ state }) => {
    const moveTask = (from, to, task) => {
      state.setTasks((prev) => {
        const next = __spreadProps(__spreadValues({}, prev), { [from]: prev[from].filter((t) => t !== task), [to]: [...prev[to], task] });
        const doneCount = next.done.length + next.review.length + next.doing.length;
        const progress = Math.min(doneCount / 12, 1);
        state.setCamperProgress(progress);
        return next;
      });
    };
    const clickTask = (from) => (task) => {
      if (from === "todo") return moveTask("todo", "doing", task);
      if (from === "doing") return moveTask("doing", "review", task);
      if (from === "review") return moveTask("review", "done", task);
    };
    const pct = Math.round(state.camperProgress * 100);
    return /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "kanban" }, ["todo", "doing", "review", "done"].map((col) => /* @__PURE__ */ React.createElement("div", { key: col, className: "col" }, /* @__PURE__ */ React.createElement("h4", null, col === "todo" ? "To-Do" : col === "doing" ? "Doing" : col === "review" ? "Review" : "Done"), state.tasks[col].map((task) => /* @__PURE__ */ React.createElement("div", { key: task, className: "task", onClick: () => clickTask(col)(task) }, task))))), /* @__PURE__ */ React.createElement("div", { className: "progress-ring", style: { "--pct": pct }, "data-label": `${pct}%` }), /* @__PURE__ */ React.createElement("div", { className: "status" }, /* @__PURE__ */ React.createElement("div", { className: "dot" }), /* @__PURE__ */ React.createElement("div", null, pct >= 40 ? "Momentum established \xB7 Buyers incoming" : "First tasks in motion \xB7 keep pushing")));
  };
  const FinanceZoom = ({ state }) => /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "map-grid" }, /* @__PURE__ */ React.createElement("div", { className: "cat", style: { borderColor: categories.finances.color } }, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("span", { style: { color: categories.finances.color } }, "\u25CF"), " Finances"), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Sell Camper Van"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, Math.round(state.camperProgress * 100), "% \xB7 Stage: ", state.camperProgress >= 1 ? "Decoration" : state.camperProgress >= 0.4 ? "Polish" : "Color Emergence"), /* @__PURE__ */ React.createElement("div", { className: "progress" }, /* @__PURE__ */ React.createElement("div", { className: "bar", style: { width: `${Math.round(state.camperProgress * 100)}%`, background: categories.finances.color } }))), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Automate Monthly Budget Review"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Silver candidate")), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Mortgage Refinance"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Queued")))));
  const SortingReturn = ({ state }) => /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement("div", { className: "map-grid" }, /* @__PURE__ */ React.createElement("div", { className: "project", style: { borderColor: "var(--gold)", boxShadow: "0 12px 26px rgba(216,166,80,0.2)" } }, /* @__PURE__ */ React.createElement("div", { className: "title" }, state.table.gold.title === "Sell Camper Van" ? "Sell Camper Van" : "Sell Camper Van"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Complete \xB7 Decoration stage")), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Launch Consulting"), /* @__PURE__ */ React.createElement("div", { className: "meta" }, "Gold Candidate \xB7 Paused at 60%"), /* @__PURE__ */ React.createElement("div", { className: "actions", style: { marginTop: "0.5rem" } }, /* @__PURE__ */ React.createElement("button", { className: "btn", onClick: state.reactivateConsulting }, "Reactivate Consulting"))), /* @__PURE__ */ React.createElement("div", { className: "project" }, /* @__PURE__ */ React.createElement("div", { className: "title" }, "Gold Queue"), state.goldQueue.map((item, idx) => /* @__PURE__ */ React.createElement("div", { key: item.title, className: "meta" }, idx + 1, ". ", item.title)))));
  const MOCK_AGENTS = [
    {
      id: "agent-1",
      name: "Code Specialist",
      specialization: "Software Development",
      description: "Expert in full-stack development, debugging, and code optimization",
      capacity: { total: 3, used: 2, available: 1 },
      currentProjects: ["project-2", "project-5"],
      avatar: "\u{1F4BB}"
    },
    {
      id: "agent-2",
      name: "Research Agent",
      specialization: "Information Gathering",
      description: "Specialized in market research, data analysis, and competitive intelligence",
      capacity: { total: 4, used: 1, available: 3 },
      currentProjects: ["project-8"],
      avatar: "\u{1F50D}"
    },
    {
      id: "agent-3",
      name: "Project Coordinator",
      specialization: "Project Management",
      description: "Handles scheduling, stakeholder communication, and project tracking",
      capacity: { total: 3, used: 3, available: 0 },
      currentProjects: ["project-1", "project-3", "project-7"],
      avatar: "\u{1F4CB}"
    },
    {
      id: "agent-4",
      name: "Content Creator",
      specialization: "Writing & Documentation",
      description: "Creates documentation, blog posts, and marketing materials",
      capacity: { total: 3, used: 0, available: 3 },
      currentProjects: [],
      avatar: "\u270D\uFE0F"
    },
    {
      id: "agent-5",
      name: "Operations Agent",
      specialization: "Process & Automation",
      description: "Optimizes workflows, sets up automations, and maintains systems",
      capacity: { total: 2, used: 1, available: 1 },
      currentProjects: ["project-6"],
      avatar: "\u2699\uFE0F"
    },
    {
      id: "agent-6",
      name: "Financial Analyst",
      specialization: "Finance & Budgeting",
      description: "Manages budgets, forecasting, and financial planning",
      capacity: { total: 3, used: 0, available: 3 },
      currentProjects: [],
      avatar: "\u{1F4B0}"
    }
  ];
  const MOCK_PROJECTS = [
    {
      id: "project-1",
      title: "Sell Camper Van",
      description: "List vehicle, handle inquiries, complete sale process",
      priority: "gold",
      status: "active",
      category: "finances",
      staffing: { assigned: false, agentId: null, agentName: null }
    },
    {
      id: "project-2",
      title: "Launch Consulting Practice",
      description: "Set up LLC, create service packages, initial marketing",
      priority: "gold",
      status: "ongoing",
      category: "career",
      staffing: { assigned: true, agentId: "agent-1", agentName: "Code Specialist" }
    },
    {
      id: "project-3",
      title: "Credit Card Rewards Optimization",
      description: "Research best cards, track spending, maximize points",
      priority: "gold",
      status: "ongoing",
      category: "finances",
      staffing: { assigned: true, agentId: "agent-3", agentName: "Project Coordinator" }
    },
    {
      id: "project-4",
      title: "Home Gym Setup",
      description: "Equipment research, space planning, installation",
      priority: "silver",
      status: "active",
      category: "health",
      staffing: { assigned: false, agentId: null, agentName: null }
    },
    {
      id: "project-5",
      title: "Estate Planning",
      description: "Will preparation, beneficiary updates, legal consultation",
      priority: "silver",
      status: "ongoing",
      category: "finances",
      staffing: { assigned: true, agentId: "agent-1", agentName: "Code Specialist" }
    },
    {
      id: "project-6",
      title: "Kitchen Renovation Planning",
      description: "Budget development, contractor quotes, design decisions",
      priority: "silver",
      status: "ongoing",
      category: "home",
      staffing: { assigned: true, agentId: "agent-5", agentName: "Operations Agent" }
    },
    {
      id: "project-7",
      title: "Lawn Care Service Setup",
      description: "Find providers, schedule seasonal maintenance",
      priority: "bronze",
      status: "active",
      category: "home",
      staffing: { assigned: true, agentId: "agent-3", agentName: "Project Coordinator" }
    },
    {
      id: "project-8",
      title: "Retirement Contributions Review",
      description: "Annual 401k review, IRA optimization",
      priority: "bronze",
      status: "ongoing",
      category: "finances",
      staffing: { assigned: true, agentId: "agent-2", agentName: "Research Agent" }
    },
    {
      id: "project-9",
      title: "Meal Planning System",
      description: "Weekly menu templates, grocery automation",
      priority: "bronze",
      status: "ongoing",
      category: "health",
      staffing: { assigned: false, agentId: null, agentName: null }
    },
    {
      id: "project-10",
      title: "Car Maintenance Schedule",
      description: "Track service intervals, schedule appointments",
      priority: "bronze",
      status: "ongoing",
      category: "home",
      staffing: { assigned: false, agentId: null, agentName: null }
    }
  ];
  const RosterRoom = () => {
    const loadFromStorage = (key, defaultValue) => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.warn("Failed to load from localStorage:", error);
        return defaultValue;
      }
    };
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [selectedAgent, setSelectedAgent] = React.useState(null);
    const [projects, setProjects] = React.useState(() => loadFromStorage("rosterRoom_projects", MOCK_PROJECTS));
    const [agents, setAgents] = React.useState(() => loadFromStorage("rosterRoom_agents", MOCK_AGENTS));
    const [searchTerm, setSearchTerm] = React.useState("");
    const [sortBy, setSortBy] = React.useState("priority");
    const containerRef = React.useRef(null);
    const projectCardRefs = React.useRef({});
    const agentCardRefs = React.useRef({});
    const buttonRef = React.useRef(null);
    const [linePositions, setLinePositions] = React.useState(null);
    React.useEffect(() => {
      try {
        localStorage.setItem("rosterRoom_projects", JSON.stringify(projects));
      } catch (error) {
        console.warn("Failed to save projects to localStorage:", error);
      }
    }, [projects]);
    React.useEffect(() => {
      try {
        localStorage.setItem("rosterRoom_agents", JSON.stringify(agents));
      } catch (error) {
        console.warn("Failed to save agents to localStorage:", error);
      }
    }, [agents]);
    const sortedProjects = React.useMemo(() => {
      let sorted = [...projects];
      if (sortBy === "priority") {
        const priorityOrder = { gold: 1, silver: 2, bronze: 3 };
        const statusOrder = { active: 1, ongoing: 2 };
        sorted.sort((a, b) => {
          if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          }
          return statusOrder[a.status] - statusOrder[b.status];
        });
      } else if (sortBy === "status") {
        sorted.sort((a, b) => a.status === "active" ? -1 : 1);
      } else if (sortBy === "category") {
        sorted.sort((a, b) => a.category.localeCompare(b.category));
      } else if (sortBy === "alphabetical") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      }
      return sorted;
    }, [projects, sortBy]);
    const filteredProjects = React.useMemo(() => {
      if (!searchTerm) return sortedProjects;
      const term = searchTerm.toLowerCase();
      return sortedProjects.filter(
        (p) => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
      );
    }, [sortedProjects, searchTerm]);
    const [successMessage, setSuccessMessage] = React.useState("");
    const handleStaffProject = () => {
      if (!selectedProject || !selectedAgent) return;
      setProjects(
        (prevProjects) => prevProjects.map(
          (p) => p.id === selectedProject.id ? __spreadProps(__spreadValues({}, p), {
            staffing: {
              assigned: true,
              agentId: selectedAgent.id,
              agentName: selectedAgent.name
            }
          }) : p
        )
      );
      setAgents(
        (prevAgents) => prevAgents.map(
          (a) => a.id === selectedAgent.id ? __spreadProps(__spreadValues({}, a), {
            capacity: __spreadProps(__spreadValues({}, a.capacity), {
              used: a.capacity.used + 1,
              available: a.capacity.available - 1
            }),
            currentProjects: [...a.currentProjects, selectedProject.id]
          }) : a
        )
      );
      setSuccessMessage(`${selectedAgent.name} assigned to ${selectedProject.title}`);
      setTimeout(() => setSuccessMessage(""), 3e3);
      window.dispatchEvent(new CustomEvent("rosterUpdated"));
      setSelectedProject(null);
      setSelectedAgent(null);
      setLinePositions(null);
    };
    const updateLinePositions = React.useCallback(() => {
      if (!selectedProject || !selectedAgent || !buttonRef.current || !containerRef.current) {
        setLinePositions(null);
        return;
      }
      const projectCard = projectCardRefs.current[selectedProject.id];
      const agentCard = agentCardRefs.current[selectedAgent.id];
      if (!projectCard || !agentCard) {
        setLinePositions(null);
        return;
      }
      const container2 = containerRef.current.getBoundingClientRect();
      const button = buttonRef.current.getBoundingClientRect();
      const project = projectCard.getBoundingClientRect();
      const agent = agentCard.getBoundingClientRect();
      const buttonCenter = {
        x: button.left - container2.left + button.width / 2,
        y: button.top - container2.top + button.height / 2
      };
      const projectPoint = {
        x: project.left - container2.left + project.width / 2,
        y: project.top - container2.top + project.height / 2
      };
      const agentPoint = {
        x: agent.left - container2.left + agent.width / 2,
        y: agent.top - container2.top + agent.height / 2
      };
      setLinePositions({
        projectLine: { start: projectPoint, end: buttonCenter },
        agentLine: { start: agentPoint, end: buttonCenter }
      });
    }, [selectedProject, selectedAgent]);
    React.useEffect(() => {
      updateLinePositions();
    }, [updateLinePositions]);
    React.useEffect(() => {
      const handleResize = () => {
        if (selectedProject && selectedAgent) {
          updateLinePositions();
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [selectedProject, selectedAgent, updateLinePositions]);
    React.useEffect(() => {
      const container2 = containerRef.current;
      if (!container2) return;
      const handleScroll = () => {
        if (selectedProject && selectedAgent) {
          updateLinePositions();
        }
      };
      const panels = container2.querySelectorAll(".roster-cards-container");
      panels.forEach((panel) => {
        panel.addEventListener("scroll", handleScroll);
      });
      return () => {
        panels.forEach((panel) => {
          panel.removeEventListener("scroll", handleScroll);
        });
      };
    }, [selectedProject, selectedAgent, updateLinePositions]);
    return /* @__PURE__ */ React.createElement("div", { className: "roster-room-container", ref: containerRef }, /* @__PURE__ */ React.createElement("div", { className: "roster-room-panels" }, /* @__PURE__ */ React.createElement("div", { className: "roster-panel agent-panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-header" }, /* @__PURE__ */ React.createElement("h2", { className: "panel-title" }, "Agent Roster"), /* @__PURE__ */ React.createElement("div", { className: "panel-subtitle" }, agents.length, " agents available")), /* @__PURE__ */ React.createElement("div", { className: "roster-cards-container" }, /* @__PURE__ */ React.createElement("div", { className: "agent-card create-agent-card" }, /* @__PURE__ */ React.createElement("div", { className: "create-agent-icon" }, "+"), /* @__PURE__ */ React.createElement("div", { className: "create-agent-label" }, "Create Custom Agent"), /* @__PURE__ */ React.createElement("div", { className: "create-agent-hint" }, "Tailored to your needs")), agents.map((agent) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: agent.id,
        ref: (el) => agentCardRefs.current[agent.id] = el,
        className: `agent-card ${(selectedAgent == null ? void 0 : selectedAgent.id) === agent.id ? "selected" : ""} ${agent.capacity.available === 0 ? "disabled" : ""}`,
        onClick: () => agent.capacity.available > 0 && setSelectedAgent(agent)
      },
      /* @__PURE__ */ React.createElement("div", { className: "agent-avatar" }, agent.avatar),
      /* @__PURE__ */ React.createElement("div", { className: "agent-info" }, /* @__PURE__ */ React.createElement("div", { className: "agent-name" }, agent.name), /* @__PURE__ */ React.createElement("div", { className: "agent-specialization" }, agent.specialization), /* @__PURE__ */ React.createElement("div", { className: "agent-description" }, agent.description), /* @__PURE__ */ React.createElement("div", { className: "agent-capacity" }, /* @__PURE__ */ React.createElement("div", { className: "capacity-bar" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "capacity-fill",
          style: {
            width: `${agent.capacity.used / agent.capacity.total * 100}%`,
            background: agent.capacity.available === 0 ? "#C48B5A" : agent.capacity.available === agent.capacity.total ? "#8B9D6F" : "#D8A650"
          }
        }
      )), /* @__PURE__ */ React.createElement("div", { className: "capacity-text" }, agent.capacity.available > 0 ? `${agent.capacity.available} of ${agent.capacity.total} available` : "At capacity")))
    )))), /* @__PURE__ */ React.createElement("div", { className: "staff-button-container" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        ref: buttonRef,
        className: "staff-project-btn",
        disabled: !selectedProject || !selectedAgent,
        onClick: handleStaffProject
      },
      /* @__PURE__ */ React.createElement("span", { className: "btn-icon" }, "\u2192"),
      /* @__PURE__ */ React.createElement("span", null, "Staff Project")
    ), (!selectedProject || !selectedAgent) && !successMessage && /* @__PURE__ */ React.createElement("div", { className: "staff-hint" }, "Select a project and an agent"), successMessage && /* @__PURE__ */ React.createElement("div", { className: "success-message" }, "\u2713 ", successMessage)), /* @__PURE__ */ React.createElement("div", { className: "roster-panel project-panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-header" }, /* @__PURE__ */ React.createElement("h2", { className: "panel-title" }, "Project Queue"), /* @__PURE__ */ React.createElement("div", { className: "panel-subtitle" }, filteredProjects.length, " projects")), /* @__PURE__ */ React.createElement("div", { className: "queue-controls" }, /* @__PURE__ */ React.createElement("div", { className: "search-box" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Search projects...",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "search-input"
      }
    ), searchTerm && /* @__PURE__ */ React.createElement("button", { className: "search-clear", onClick: () => setSearchTerm("") }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "sort-controls" }, /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${sortBy === "priority" ? "active" : ""}`, onClick: () => setSortBy("priority") }, "Priority"), /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${sortBy === "status" ? "active" : ""}`, onClick: () => setSortBy("status") }, "Status"), /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${sortBy === "category" ? "active" : ""}`, onClick: () => setSortBy("category") }, "Category"), /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${sortBy === "alphabetical" ? "active" : ""}`, onClick: () => setSortBy("alphabetical") }, "A-Z"))), /* @__PURE__ */ React.createElement("div", { className: "roster-cards-container" }, filteredProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, 'No projects match "', searchTerm, '"'), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "Try different keywords or clear search")), filteredProjects.map((project) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: project.id,
        ref: (el) => projectCardRefs.current[project.id] = el,
        className: `project-card ${(selectedProject == null ? void 0 : selectedProject.id) === project.id ? "selected" : ""}`,
        onClick: () => setSelectedProject(project),
        "data-priority": project.priority
      },
      /* @__PURE__ */ React.createElement("div", { className: "project-header" }, /* @__PURE__ */ React.createElement("div", { className: "project-badges" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${project.priority}` }, project.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: `status-badge ${project.status}` }, project.status === "active" ? "On Table" : "Ongoing")), /* @__PURE__ */ React.createElement("div", { className: "category-icon", "data-category": project.category }, project.category === "finances" ? "\u{1F4B0}" : project.category === "health" ? "\u2764\uFE0F" : project.category === "home" ? "\u{1F3E0}" : "\u{1F4BC}")),
      /* @__PURE__ */ React.createElement("div", { className: "project-title" }, project.title),
      /* @__PURE__ */ React.createElement("div", { className: "project-description" }, project.description),
      project.staffing.assigned && /* @__PURE__ */ React.createElement("div", { className: "project-staffing" }, /* @__PURE__ */ React.createElement("span", { className: "staffing-label" }, "Staffed:"), /* @__PURE__ */ React.createElement("span", { className: "staffing-agent" }, project.staffing.agentName)),
      !project.staffing.assigned && /* @__PURE__ */ React.createElement("div", { className: "project-staffing unstaffed" }, /* @__PURE__ */ React.createElement("span", { className: "unstaffed-label" }, "\u26A0\uFE0F Unstaffed"))
    ))))), linePositions && /* @__PURE__ */ React.createElement("svg", { className: "connection-lines", style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: 5
    } }, /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: linePositions.projectLine.start.x,
        y1: linePositions.projectLine.start.y,
        x2: linePositions.projectLine.end.x,
        y2: linePositions.projectLine.end.y,
        stroke: "var(--purpose)",
        strokeWidth: "2",
        strokeDasharray: "6 4",
        className: "connection-line project-line"
      }
    ), /* @__PURE__ */ React.createElement(
      "line",
      {
        x1: linePositions.agentLine.start.x,
        y1: linePositions.agentLine.start.y,
        x2: linePositions.agentLine.end.x,
        y2: linePositions.agentLine.end.y,
        stroke: "var(--purpose)",
        strokeWidth: "2",
        strokeDasharray: "6 4",
        className: "connection-line agent-line"
      }
    )));
  };
  const App = () => {
    var _a;
    const [chapter, setChapter] = React.useState(0);
    const [goldQueue, setGoldQueue] = React.useState(initialGoldQueue);
    const [silverQueue, setSilverQueue] = React.useState(initialSilverQueue);
    const [bronzeQueue, setBronzeQueue] = React.useState(initialBronzeQueue);
    const [table, setTable] = React.useState({
      gold: __spreadValues({}, goldTableSeed),
      silver: __spreadValues({}, silverTableSeed),
      bronze: getBronzeTableSummary(initialBronzeQueue)
    });
    const [openQueue, setOpenQueue] = React.useState("gold");
    const [status, setStatus] = React.useState("Consulting active. Camper ready to activate.");
    const [tasks, setTasks] = React.useState(initialTasks);
    const [camperProgress, setCamperProgress] = React.useState(0);
    const camperActive = table.gold.title === "Sell Camper Van";
    const camperPct = Math.round(camperProgress * 100);
    const toggleQueue = (lane) => setOpenQueue((prev) => prev === lane ? null : lane);
    const reorderList = (list, from, to) => {
      if (from === to) return list;
      const next = [...list];
      const [item] = next.splice(from, 1);
      next.splice(Math.min(Math.max(to, 0), next.length), 0, item);
      return next;
    };
    const nudgeQueue = (lane, index, direction) => {
      const setter = lane === "gold" ? setGoldQueue : setSilverQueue;
      setter((prev) => {
        const target = index + direction;
        if (target < 0 || target >= prev.length) return prev;
        setStatus(`${lane === "gold" ? "Gold" : "Silver"} queue reprioritized.`);
        return reorderList(prev, index, target);
      });
    };
    const nudgeBronze = (index, direction) => {
      setBronzeQueue((prev) => {
        const target = index + direction;
        if (target < 0 || target >= prev.length) return prev;
        setStatus("Bronze queue reprioritized.");
        return reorderList(prev, index, target);
      });
    };
    const activateLane = (lane, title) => {
      const setter = lane === "gold" ? setGoldQueue : setSilverQueue;
      setter((prev) => {
        const idx = prev.findIndex((card) => card.title === title);
        if (idx === -1) return prev;
        const candidate = prev[idx];
        const currentActive = table[lane];
        const filtered = prev.filter((card, cIdx) => cIdx !== idx && card.title !== currentActive.title);
        setTable((prevTable) => __spreadProps(__spreadValues({}, prevTable), { [lane]: candidate }));
        setStatus(`${candidate.title} moved to ${lane === "gold" ? "Gold" : "Silver"} Table.`);
        return currentActive.title ? [currentActive, ...filtered] : filtered;
      });
    };
    const activateGold = (title) => activateLane("gold", title);
    const activateSilver = (title) => activateLane("silver", title);
    const swapGold = () => {
      if (camperActive) return;
      activateGold("Sell Camper Van");
      setStatus("Camper active. Consulting preserved in Gold queue.");
    };
    const fastForward = () => {
      setTasks({ todo: [], doing: [], review: [], done: ["All tasks"] });
      setCamperProgress(1);
      if (table.gold.title === "Sell Camper Van") {
        setTable((prev) => __spreadProps(__spreadValues({}, prev), { gold: __spreadProps(__spreadValues({}, prev.gold), { progress: 1, meta: "Finances \xB7 Gold \xB7 Complete" }) }));
      }
    };
    const releaseBronze = (index) => {
      setBronzeQueue((prev) => {
        const tableCount = Math.min(BRONZE_TABLE_LIMIT, prev.length);
        if (index < 0 || index >= tableCount) return prev;
        const next = [...prev];
        const [card] = next.splice(index, 1);
        next.push(card);
        setStatus(`${card.title} moved back into Bronze queue.`);
        return next;
      });
    };
    const tableBronze = (index) => {
      setBronzeQueue((prev) => {
        const tableCount = Math.min(BRONZE_TABLE_LIMIT, prev.length);
        if (index < tableCount || index >= prev.length) return prev;
        const next = [...prev];
        const [card] = next.splice(index, 1);
        const insertIndex = tableCount >= BRONZE_TABLE_LIMIT ? BRONZE_TABLE_LIMIT - 1 : tableCount;
        next.splice(Math.max(insertIndex, 0), 0, card);
        setStatus(`${card.title} tabled for Bronze rotation.`);
        return next;
      });
    };
    React.useEffect(() => {
      setTable((prevTable) => __spreadProps(__spreadValues({}, prevTable), { bronze: getBronzeTableSummary(bronzeQueue) }));
    }, [bronzeQueue]);
    const reactivateConsulting = () => {
      const currentActive = table.gold;
      setGoldQueue((prev) => {
        const filtered = prev.filter((card) => card.title !== goldTableSeed.title && card.title !== currentActive.title);
        if (currentActive.title === goldTableSeed.title) return filtered;
        return [currentActive, ...filtered];
      });
      setTable((prevTable) => __spreadProps(__spreadValues({}, prevTable), { gold: __spreadValues({}, goldTableSeed) }));
      setStatus("Consulting back on Table. Camper preserved in Gold queue.");
    };
    const chapterStories = [
      {
        label: "Chapter 1",
        title: "Life Map \xB7 Jess at pace",
        lines: [
          { text: "\u201CJess scans his Life Map\u2014Gold consulting up front, deck work simmering, a stack of Bronze chores behaving for once.\u201D", tone: "em" },
          { text: "\u201CThen his wife says: list the camper this week or I\u2019m doing it myself.\u201D", tone: "em" },
          { text: "He remembers crafting this project two weeks ago in the Drafting Room." }
        ],
        prompts: [
          { label: "Head to the Drafting Room", onClick: () => setChapter(1) }
        ]
      },
      {
        label: "Chapter 2",
        title: "Drafting Room \xB7 Crisis surfaces",
        lines: [
          { text: "Gold queue, crisis on top." },
          { text: "Jess planned \u201CSell Camper Van\u201D two weeks ago (Stage 4). Wife\u2019s ultimatum makes it urgent." }
        ],
        prompts: [
          { label: "Open Sorting Room", onClick: () => setChapter(2) },
          { label: "Back to Life Map", onClick: () => setChapter(0), variant: "secondary" }
        ]
      },
      {
        label: "Chapter 3",
        title: "Sorting Room \xB7 Hard choice",
        lines: [
          { text: "Three lanes mirror the Table below\u2014Gold and Silver show their live slot, Bronze tracks ten tabled cards." },
          { text: "Jess must pause consulting and activate the camper sale. Progress will be preserved." }
        ],
        prompts: [
          { label: camperActive ? "Camper activated" : "Activate Camper as Gold", onClick: camperActive ? null : () => swapGold(), disabled: camperActive },
          { label: "Show updated Life Map", onClick: () => setChapter(0), disabled: !camperActive },
          { label: "Back to Drafting Room", onClick: () => setChapter(1), variant: "secondary" }
        ]
      },
      {
        label: "Chapter 4",
        title: "Life Map \xB7 Activation lands",
        lines: [
          { text: "Table updated \xB7 Consulting preserved." },
          { text: "Camper is now Gold. Consulting sits paused inside Finances. Finance shows dual presence." }
        ],
        prompts: [
          { label: "Open Project Board", onClick: () => setChapter(4) },
          { label: "Back to Sorting Room", onClick: () => setChapter(2), variant: "secondary" }
        ]
      },
      {
        label: "Chapter 5",
        title: "Project Board \xB7 Execute",
        lines: [
          { text: "Sell Camper Van \xB7 Work at Hand." },
          { text: "Move the first tasks. Progress fills; Bronze keeps pace in background." }
        ],
        prompts: [
          { label: "Fast forward 2 weeks", onClick: () => {
            fastForward();
            setChapter(5);
          } },
          { label: "Back to Life Map", onClick: () => setChapter(3), variant: "secondary" }
        ]
      },
      {
        label: "Chapter 6",
        title: "Finances \xB7 Progress check",
        lines: [
          { text: `Camper sale at ${camperPct}%. Budget automation queued. Mortgage refinance waiting.` }
        ],
        prompts: [
          { label: "Resume in Sorting Room", onClick: () => setChapter(6) },
          { label: "Back to Project Board", onClick: () => setChapter(4), variant: "secondary" }
        ]
      },
      {
        label: "Chapter 7",
        title: "Sorting Room \xB7 Resume rhythm",
        lines: [
          { text: "Decoration stage achieved; consulting is still waiting at the top. Reactivate with one click." }
        ],
        prompts: [
          { label: "Reactivate Consulting", onClick: () => reactivateConsulting() },
          { label: "Back to Finances", onClick: () => setChapter(5), variant: "secondary" }
        ]
      }
    ];
    const currentStory = chapterStories[chapter] || chapterStories[0];
    const screen = () => {
      if (chapter === 0) return /* @__PURE__ */ React.createElement(LifeMap, { table });
      if (chapter === 1) return /* @__PURE__ */ React.createElement(DraftingRoom, null);
      if (chapter === 2) {
        return /* @__PURE__ */ React.createElement(
          SortingRoom,
          {
            state: {
              table,
              status,
              goldQueue,
              silverQueue,
              bronzeQueue,
              openQueue,
              toggleQueue,
              activateGold,
              activateSilver,
              nudgeQueue,
              nudgeBronze,
              releaseBronze,
              tableBronze,
              bronzeLimit: BRONZE_TABLE_LIMIT
            }
          }
        );
      }
      if (chapter === 3) return /* @__PURE__ */ React.createElement(ActivationMap, { state: { table, goldQueue } });
      if (chapter === 4) return /* @__PURE__ */ React.createElement(ProjectBoard, { state: { tasks, setTasks, camperProgress, setCamperProgress } });
      if (chapter === 5) return /* @__PURE__ */ React.createElement(FinanceZoom, { state: { camperProgress } });
      if (chapter === 7) return /* @__PURE__ */ React.createElement(RosterRoom, null);
      return /* @__PURE__ */ React.createElement(SortingReturn, { state: { reactivateConsulting, goldQueue, table } });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "story-overlay" }, /* @__PURE__ */ React.createElement("div", { className: "story-bubble" }, /* @__PURE__ */ React.createElement("div", { className: "chapter-tag" }, currentStory.label), /* @__PURE__ */ React.createElement("h2", null, currentStory.title), /* @__PURE__ */ React.createElement("div", { className: "story-text" }, currentStory.lines.map((line, idx) => /* @__PURE__ */ React.createElement("p", { key: idx }, line.tone === "em" ? /* @__PURE__ */ React.createElement("em", null, line.text) : line.text))), ((_a = currentStory.prompts) == null ? void 0 : _a.length) ? /* @__PURE__ */ React.createElement("div", { className: "story-prompts" }, currentStory.prompts.map((prompt) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: prompt.label,
        className: `story-cta${prompt.variant === "secondary" ? " secondary" : ""}`,
        onClick: prompt.onClick,
        disabled: prompt.disabled
      },
      prompt.label
    ))) : null)), /* @__PURE__ */ React.createElement("div", { className: "nav" }, /* @__PURE__ */ React.createElement("div", { className: "nav-links" }, /* @__PURE__ */ React.createElement("a", { className: chapter === 1 ? "active" : "", onClick: () => setChapter(1) }, "Drafting Room"), /* @__PURE__ */ React.createElement("a", { className: chapter === 2 || chapter === 6 ? "active" : "", onClick: () => setChapter(2) }, "Sorting Room"), /* @__PURE__ */ React.createElement("a", { className: chapter === 7 ? "active" : "", onClick: () => setChapter(7) }, "Roster Room"), /* @__PURE__ */ React.createElement("a", { className: chapter === 0 || chapter === 3 ? "active" : "", onClick: () => setChapter(0) }, "Life Map")), /* @__PURE__ */ React.createElement("div", { className: "pill" }, "Jess \xB7 Director")), /* @__PURE__ */ React.createElement("div", { className: "shell" }, screen()), /* @__PURE__ */ React.createElement(TableBar, { table }));
  };
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(/* @__PURE__ */ React.createElement(App, null));
})();
