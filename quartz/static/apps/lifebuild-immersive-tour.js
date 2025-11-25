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
  const React = window.React;
  const ReactDOM = window.ReactDOM;
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
      staffing: { assigned: true, agentId: "agent-1", agentName: "Code Specialist", helpDescription: null, assignedAt: Date.now() - 864e5 }
    },
    {
      id: "project-3",
      title: "Credit Card Rewards Optimization",
      description: "Research best cards, track spending, maximize points",
      priority: "gold",
      status: "ongoing",
      category: "finances",
      staffing: { assigned: true, agentId: "agent-3", agentName: "Project Coordinator", helpDescription: null, assignedAt: Date.now() - 1728e5 }
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
      staffing: { assigned: true, agentId: "agent-1", agentName: "Code Specialist", helpDescription: null, assignedAt: Date.now() - 2592e5 }
    },
    {
      id: "project-6",
      title: "Kitchen Renovation Planning",
      description: "Budget development, contractor quotes, design decisions",
      priority: "silver",
      status: "ongoing",
      category: "home",
      staffing: { assigned: true, agentId: "agent-5", agentName: "Operations Agent", helpDescription: null, assignedAt: Date.now() - 3456e5 }
    },
    {
      id: "project-7",
      title: "Lawn Care Service Setup",
      description: "Find providers, schedule seasonal maintenance",
      priority: "bronze",
      status: "active",
      category: "home",
      staffing: { assigned: true, agentId: "agent-3", agentName: "Project Coordinator", helpDescription: null, assignedAt: Date.now() - 432e6 }
    },
    {
      id: "project-8",
      title: "Retirement Contributions Review",
      description: "Annual 401k review, IRA optimization",
      priority: "bronze",
      status: "ongoing",
      category: "finances",
      staffing: { assigned: true, agentId: "agent-2", agentName: "Research Agent", helpDescription: null, assignedAt: Date.now() - 5184e5 }
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
    const [currentStep, setCurrentStep] = React.useState(1);
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [helpDescription, setHelpDescription] = React.useState("");
    const [selectedAgent, setSelectedAgent] = React.useState(null);
    const [projects, setProjects] = React.useState(() => loadFromStorage("rosterRoom_projects", MOCK_PROJECTS));
    const [agents, setAgents] = React.useState(() => loadFromStorage("rosterRoom_agents", MOCK_AGENTS));
    const [searchTerm, setSearchTerm] = React.useState("");
    const [projectSortBy, setProjectSortBy] = React.useState("priority");
    const [reviewSortBy, setReviewSortBy] = React.useState("priority");
    const [agentFilter, setAgentFilter] = React.useState("all");
    const [isCreatingAgent, setIsCreatingAgent] = React.useState(false);
    const blankAgentForm = () => ({
      name: "",
      specialization: "",
      description: "",
      capacity: "3"
    });
    const [agentForm, setAgentForm] = React.useState(blankAgentForm);
    const [agentFormErrors, setAgentFormErrors] = React.useState({});
    const [successMessage, setSuccessMessage] = React.useState("");
    const [expandedAgentId, setExpandedAgentId] = React.useState(null);
    const [expandedStaffedProjectId, setExpandedStaffedProjectId] = React.useState(null);
    const [recentAssignmentId, setRecentAssignmentId] = React.useState(null);
    const PRIORITY_ORDER = { gold: 1, silver: 2, bronze: 3 };
    const STATUS_ORDER = { active: 1, ongoing: 2 };
    const CATEGORY_ICONS = {
      finances: "\u{1F4B0}",
      health: "\u2764\uFE0F",
      home: "\u{1F3E0}",
      career: "\u{1F4BC}"
    };
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
    React.useEffect(() => {
      if (!recentAssignmentId) return;
      const timer = setTimeout(() => setRecentAssignmentId(null), 3500);
      return () => clearTimeout(timer);
    }, [recentAssignmentId]);
    const unstaffedProjects = React.useMemo(() => {
      return projects.filter((p) => !p.staffing.assigned);
    }, [projects]);
    const staffedProjects = React.useMemo(() => {
      return projects.filter((p) => p.staffing.assigned);
    }, [projects]);
    const sortedUnstaffedProjects = React.useMemo(() => {
      return sortProjectsList(unstaffedProjects, projectSortBy);
    }, [unstaffedProjects, projectSortBy]);
    const sortedStaffedProjects = React.useMemo(() => {
      const sorted = sortProjectsList(staffedProjects, reviewSortBy, { allowAgentSort: true });
      if (recentAssignmentId) {
        sorted.sort((a, b) => {
          if (a.id === recentAssignmentId) return -1;
          if (b.id === recentAssignmentId) return 1;
          return 0;
        });
      }
      return sorted;
    }, [staffedProjects, reviewSortBy, recentAssignmentId]);
    const sidebarStaffedProjects = React.useMemo(() => {
      return sortProjectsList(staffedProjects, "priority", { allowAgentSort: true });
    }, [staffedProjects]);
    const filteredProjects = React.useMemo(() => {
      if (!searchTerm) return sortedUnstaffedProjects;
      const term = searchTerm.toLowerCase();
      return sortedUnstaffedProjects.filter(
        (p) => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
      );
    }, [sortedUnstaffedProjects, searchTerm]);
    const filteredAgents = React.useMemo(() => {
      let filtered = [...agents];
      if (agentFilter === "available") {
        filtered = filtered.filter((a) => a.capacity.available > 0);
      } else if (agentFilter === "partial") {
        filtered = filtered.filter((a) => a.capacity.available > 0 && a.capacity.used > 0);
      }
      return filtered;
    }, [agents, agentFilter]);
    const sortProjectsList = (list, criteria, { allowAgentSort = false } = {}) => {
      const sorted = [...list];
      if (criteria === "priority") {
        sorted.sort((a, b) => {
          if (PRIORITY_ORDER[a.priority] !== PRIORITY_ORDER[b.priority]) {
            return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
          }
          return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
        });
      } else if (criteria === "category") {
        sorted.sort((a, b) => {
          if (a.category === b.category) {
            return a.title.localeCompare(b.title);
          }
          return a.category.localeCompare(b.category);
        });
      } else if (criteria === "alphabetical") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      } else if (criteria === "agent" && allowAgentSort) {
        sorted.sort((a, b) => {
          var _a, _b;
          const agentA = (((_a = a.staffing) == null ? void 0 : _a.agentName) || "").toLowerCase();
          const agentB = (((_b = b.staffing) == null ? void 0 : _b.agentName) || "").toLowerCase();
          if (!agentA && !agentB) return 0;
          if (!agentA) return 1;
          if (!agentB) return -1;
          return agentA.localeCompare(agentB);
        });
      }
      return sorted;
    };
    const resetAgentFormState = () => {
      setAgentForm(blankAgentForm());
      setAgentFormErrors({});
    };
    const closeAgentForm = () => {
      resetAgentFormState();
      setIsCreatingAgent(false);
    };
    const handleAgentFieldChange = (field, value) => {
      setAgentForm((prev) => __spreadProps(__spreadValues({}, prev), { [field]: value }));
      if (agentFormErrors[field]) {
        setAgentFormErrors((prev) => {
          const next = __spreadValues({}, prev);
          delete next[field];
          return next;
        });
      }
    };
    const getAgentAvatar = (text = "") => {
      const normalized = text.toLowerCase();
      if (normalized.includes("finance") || normalized.includes("money") || normalized.includes("budget")) return "\u{1F4B0}";
      if (normalized.includes("market") || normalized.includes("brand") || normalized.includes("growth")) return "\u{1F4E3}";
      if (normalized.includes("ops") || normalized.includes("system") || normalized.includes("process")) return "\u{1F6E0}\uFE0F";
      if (normalized.includes("health") || normalized.includes("wellness") || normalized.includes("care")) return "\u{1F33F}";
      if (normalized.includes("home") || normalized.includes("family")) return "\u{1F3E1}";
      if (normalized.includes("content") || normalized.includes("writing") || normalized.includes("copy")) return "\u{1F4DD}";
      if (normalized.includes("design") || normalized.includes("creative")) return "\u{1F3A8}";
      return "\u{1F916}";
    };
    const validateAgentForm = () => {
      const errors = {};
      if (!agentForm.name.trim()) {
        errors.name = "Give your agent a name";
      }
      if (!agentForm.specialization.trim()) {
        errors.specialization = "Describe their specialty";
      }
      setAgentFormErrors(errors);
      return Object.keys(errors).length === 0;
    };
    const handleCreateCustomAgent = () => {
      if (!validateAgentForm()) {
        return;
      }
      const name = agentForm.name.trim();
      const specialization = agentForm.specialization.trim();
      const description = agentForm.description.trim();
      const capacity = Math.max(1, Math.min(5, parseInt(agentForm.capacity, 10) || 1));
      const newAgent = {
        id: `agent-custom-${Date.now()}`,
        name,
        specialization,
        description: description || `Specialized in ${specialization}`,
        capacity: { total: capacity, used: 0, available: capacity },
        currentProjects: [],
        avatar: getAgentAvatar(`${specialization} ${name}`),
        createdAt: Date.now()
      };
      setAgents((prev) => [newAgent, ...prev]);
      if (currentStep === 2 && selectedProject) {
        handleAssignAgent(newAgent);
        return;
      }
      setSelectedAgent(newAgent);
      setSuccessMessage(`\u2713 ${newAgent.name} added to roster`);
      setTimeout(() => setSuccessMessage(""), 3e3);
      closeAgentForm();
    };
    const handleSelectProject = (project) => {
      setSelectedProject(project);
      setCurrentStep(2);
    };
    const handleBack = () => {
      if (currentStep === 3) {
        handleStaffAnother();
        return;
      }
      closeAgentForm();
      if (currentStep === 2) {
        setSelectedProject(null);
        setHelpDescription("");
        setSelectedAgent(null);
        setCurrentStep(1);
      }
    };
    const handleCancel = () => {
      closeAgentForm();
      setCurrentStep(1);
      setSelectedProject(null);
      setHelpDescription("");
      setSelectedAgent(null);
      setSearchTerm("");
    };
    const handleStaffAnother = () => {
      closeAgentForm();
      setSelectedProject(null);
      setHelpDescription("");
      setSelectedAgent(null);
      setSearchTerm("");
      setProjectSortBy("priority");
      setReviewSortBy("priority");
      setCurrentStep(1);
    };
    const handleAssignAgent = (agentToAssign) => {
      const agent = agentToAssign || selectedAgent;
      if (!selectedProject || !agent) return;
      setProjects(
        (prevProjects) => prevProjects.map(
          (p) => p.id === selectedProject.id ? __spreadProps(__spreadValues({}, p), {
            staffing: {
              assigned: true,
              agentId: agent.id,
              agentName: agent.name,
              helpDescription,
              assignedAt: Date.now()
            }
          }) : p
        )
      );
      setAgents(
        (prevAgents) => prevAgents.map(
          (a) => a.id === agent.id ? __spreadProps(__spreadValues({}, a), {
            capacity: __spreadProps(__spreadValues({}, a.capacity), {
              used: a.capacity.used + 1,
              available: a.capacity.available - 1
            }),
            currentProjects: [...a.currentProjects, selectedProject.id]
          }) : a
        )
      );
      setSuccessMessage(`\u2713 ${agent.name} assigned to ${selectedProject.title}`);
      setRecentAssignmentId(selectedProject.id);
      setTimeout(() => setSuccessMessage(""), 3e3);
      window.dispatchEvent(new CustomEvent("rosterUpdated"));
      setCurrentStep(3);
      setSelectedProject(null);
      setHelpDescription("");
      setSelectedAgent(null);
      closeAgentForm();
    };
    const handleUnstaffProject = (project) => {
      const agent = agents.find((a) => a.id === project.staffing.agentId);
      const categoryLabel2 = project.category.charAt(0).toUpperCase() + project.category.slice(1);
      setProjects(
        (prevProjects) => prevProjects.map(
          (p) => p.id === project.id ? __spreadProps(__spreadValues({}, p), {
            staffing: {
              assigned: false,
              agentId: null,
              agentName: null,
              helpDescription: null,
              assignedAt: null
            }
          }) : p
        )
      );
      if (agent) {
        setAgents(
          (prevAgents) => prevAgents.map(
            (a) => a.id === agent.id ? __spreadProps(__spreadValues({}, a), {
              capacity: __spreadProps(__spreadValues({}, a.capacity), {
                used: a.capacity.used - 1,
                available: a.capacity.available + 1
              }),
              currentProjects: a.currentProjects.filter((pid) => pid !== project.id)
            }) : a
          )
        );
      }
      window.dispatchEvent(new CustomEvent("rosterUpdated"));
      setSuccessMessage(`Assignment removed from ${project.title}`);
      setTimeout(() => setSuccessMessage(""), 3e3);
      if (recentAssignmentId === project.id) {
        setRecentAssignmentId(null);
      }
    };
    const renderStepIndicator = () => {
      const steps = [
        { id: 1, label: "Select Project" },
        { id: 2, label: "Choose Agent" },
        { id: 3, label: "Review Plan" }
      ];
      return /* @__PURE__ */ React.createElement("div", { className: "wizard-step-indicator" }, steps.map((step, index) => /* @__PURE__ */ React.createElement(React.Fragment, { key: step.id }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `wizard-step ${currentStep === step.id ? "active" : ""} ${currentStep > step.id ? "completed" : ""}`
        },
        /* @__PURE__ */ React.createElement("div", { className: "step-number" }, step.id),
        /* @__PURE__ */ React.createElement("div", { className: "step-label" }, step.label)
      ), index < steps.length - 1 && /* @__PURE__ */ React.createElement("div", { className: "step-connector" }))));
    };
    const renderProjectCard = (project, onClick) => {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: project.id,
          className: `project-card ${(selectedProject == null ? void 0 : selectedProject.id) === project.id ? "selected" : ""}`,
          onClick: () => onClick && onClick(project),
          "data-priority": project.priority
        },
        /* @__PURE__ */ React.createElement("div", { className: "project-header" }, /* @__PURE__ */ React.createElement("div", { className: "project-badges" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${project.priority}` }, project.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: `status-badge ${project.status}` }, project.status === "active" ? "On Table" : "Ongoing")), /* @__PURE__ */ React.createElement("div", { className: "category-icon", "data-category": project.category }, CATEGORY_ICONS[project.category] || "\u{1F4C1}")),
        /* @__PURE__ */ React.createElement("div", { className: "project-title" }, project.title),
        /* @__PURE__ */ React.createElement("div", { className: "project-description" }, project.description),
        project.staffing.assigned && /* @__PURE__ */ React.createElement("div", { className: "project-staffing" }, /* @__PURE__ */ React.createElement("span", { className: "staffing-label" }, "Assigned:"), /* @__PURE__ */ React.createElement("span", { className: "staffing-agent" }, project.staffing.agentName))
      );
    };
    const renderAgentCard = (agent) => {
      const isExpanded = expandedAgentId === agent.id;
      const assignedProjects = projects.filter((p) => agent.currentProjects.includes(p.id));
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: agent.id,
          className: `agent-card ${agent.capacity.available === 0 ? "disabled" : ""}`
        },
        /* @__PURE__ */ React.createElement("div", { className: "agent-avatar" }, agent.avatar),
        /* @__PURE__ */ React.createElement("div", { className: "agent-info" }, /* @__PURE__ */ React.createElement("div", { className: "agent-header" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "agent-name" }, agent.name), /* @__PURE__ */ React.createElement("div", { className: "agent-specialization" }, agent.specialization)), /* @__PURE__ */ React.createElement("div", { className: "agent-actions" }, /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "info-btn",
            onClick: (e) => {
              e.stopPropagation();
              setExpandedAgentId(isExpanded ? null : agent.id);
            },
            title: "View details"
          },
          "\u24D8"
        ), currentStep === 2 && selectedProject && agent.capacity.available > 0 && /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "assign-btn-inline",
            onClick: (e) => {
              e.stopPropagation();
              handleAssignAgent(agent);
            }
          },
          "Assign to Project"
        ))), !isExpanded && /* @__PURE__ */ React.createElement("div", { className: "agent-description" }, agent.description), isExpanded && /* @__PURE__ */ React.createElement("div", { className: "agent-details-expanded" }, /* @__PURE__ */ React.createElement("div", { className: "agent-description" }, agent.description), /* @__PURE__ */ React.createElement("div", { className: "agent-current-projects" }, /* @__PURE__ */ React.createElement("strong", null, "Current Projects (", agent.currentProjects.length, "):"), assignedProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "no-projects" }, "No projects assigned"), assignedProjects.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.id, className: "assigned-project" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${p.priority}` }, p.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", null, p.title))))), /* @__PURE__ */ React.createElement("div", { className: "agent-capacity" }, /* @__PURE__ */ React.createElement("div", { className: "capacity-bar" }, /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "capacity-fill",
            style: {
              width: `${agent.capacity.used / agent.capacity.total * 100}%`,
              background: agent.capacity.available === 0 ? "#C48B5A" : agent.capacity.available === agent.capacity.total ? "#8B9D6F" : "#D8A650"
            }
          }
        )), /* @__PURE__ */ React.createElement("div", { className: "capacity-text" }, agent.capacity.available > 0 ? `${agent.capacity.available} of ${agent.capacity.total} available` : "At capacity")))
      );
    };
    const renderStaffedProjectCard = (project, { variant = "sidebar" } = {}) => {
      const agent = agents.find((a) => a.id === project.staffing.agentId);
      const isReview = variant === "review";
      const showAgentDetails = isReview && expandedStaffedProjectId === project.id && agent;
      const assignedProjects = agent ? projects.filter((p) => agent.currentProjects.includes(p.id)) : [];
      const cardClasses = [
        "staffed-project-card",
        isReview ? "review-card" : "",
        isReview && recentAssignmentId === project.id ? "recently-assigned" : ""
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ React.createElement("div", { key: project.id, className: cardClasses, "data-priority": project.priority }, /* @__PURE__ */ React.createElement("div", { className: "project-info" }, /* @__PURE__ */ React.createElement("div", { className: "project-header" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${project.priority}` }, project.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: `status-badge ${project.status}` }, project.status === "active" ? "On Table" : "Ongoing"), isReview && /* @__PURE__ */ React.createElement("span", { className: "category-chip" }, CATEGORY_ICONS[project.category] || "\u{1F4C1}", " ", categoryLabel)), /* @__PURE__ */ React.createElement("div", { className: "project-title" }, project.title), isReview && project.description && /* @__PURE__ */ React.createElement("div", { className: "project-description" }, project.description), /* @__PURE__ */ React.createElement("div", { className: "project-assignment" }, /* @__PURE__ */ React.createElement("span", { className: "agent-avatar" }, agent == null ? void 0 : agent.avatar), /* @__PURE__ */ React.createElement("div", { className: "agent-name-block" }, /* @__PURE__ */ React.createElement("span", { className: "agent-name" }, project.staffing.agentName), (agent == null ? void 0 : agent.specialization) && /* @__PURE__ */ React.createElement("span", { className: "agent-specialization" }, agent.specialization)), isReview && agent && /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "info-btn",
          onClick: () => setExpandedStaffedProjectId(showAgentDetails ? null : project.id)
        },
        showAgentDetails ? "Hide details" : "Agent details"
      )), showAgentDetails && agent && /* @__PURE__ */ React.createElement("div", { className: "agent-details-inline" }, agent.description && /* @__PURE__ */ React.createElement("div", { className: "agent-description" }, agent.description), /* @__PURE__ */ React.createElement("div", { className: "agent-capacity-line" }, "Capacity:", " ", /* @__PURE__ */ React.createElement("strong", null, agent.capacity.used, " of ", agent.capacity.total), " ", "slots used"), /* @__PURE__ */ React.createElement("div", { className: "agent-current-projects" }, /* @__PURE__ */ React.createElement("strong", null, "Current Projects"), assignedProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "no-projects" }, "No other projects assigned"), assignedProjects.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.id, className: "assigned-project" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${p.priority}` }, p.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", null, p.title))))), project.staffing.helpDescription && /* @__PURE__ */ React.createElement("div", { className: "help-description" }, /* @__PURE__ */ React.createElement("strong", null, "Help needed:"), " ", project.staffing.helpDescription)), /* @__PURE__ */ React.createElement("div", { className: "project-actions" }, /* @__PURE__ */ React.createElement(
        "button",
        {
          className: "unstaff-btn",
          onClick: () => {
            if (confirm(`Remove ${project.staffing.agentName} from ${project.title}?`)) {
              handleUnstaffProject(project);
            }
          }
        },
        "Unstaff"
      )));
    };
    return /* @__PURE__ */ React.createElement("div", { className: "roster-room-two-panel" }, /* @__PURE__ */ React.createElement("div", { className: "staffed-panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-header" }, /* @__PURE__ */ React.createElement("h2", null, "Delegation Plan"), /* @__PURE__ */ React.createElement("p", null, staffedProjects.length, " ", staffedProjects.length === 1 ? "project" : "projects", " staffed")), /* @__PURE__ */ React.createElement("div", { className: "staffed-projects-list" }, staffedProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F4CB}"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, "No projects staffed yet"), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "Select a project from the right to get started")), sidebarStaffedProjects.map((project) => renderStaffedProjectCard(project)))), /* @__PURE__ */ React.createElement("div", { className: "wizard-panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-header" }, /* @__PURE__ */ React.createElement("h2", null, "Delegation Wizard"), /* @__PURE__ */ React.createElement("p", null, "Staff your projects in three calm steps")), renderStepIndicator(), /* @__PURE__ */ React.createElement("div", { className: "wizard-content" }, currentStep === 1 && /* @__PURE__ */ React.createElement("div", { className: "wizard-step-1" }, /* @__PURE__ */ React.createElement("div", { className: "step-header" }, /* @__PURE__ */ React.createElement("h2", null, "Select a Project to Staff"), /* @__PURE__ */ React.createElement("p", null, "Choose which project needs help")), /* @__PURE__ */ React.createElement("div", { className: "wizard-controls" }, /* @__PURE__ */ React.createElement("div", { className: "search-box" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Search projects...",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "search-input"
      }
    ), searchTerm && /* @__PURE__ */ React.createElement("button", { className: "search-clear", onClick: () => setSearchTerm("") }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "sort-controls" }, /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${projectSortBy === "priority" ? "active" : ""}`, onClick: () => setProjectSortBy("priority") }, "Priority"), /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${projectSortBy === "category" ? "active" : ""}`, onClick: () => setProjectSortBy("category") }, "Category"), /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${projectSortBy === "alphabetical" ? "active" : ""}`, onClick: () => setProjectSortBy("alphabetical") }, "A-Z"))), /* @__PURE__ */ React.createElement("div", { className: "project-list" }, filteredProjects.length === 0 && unstaffedProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F389}"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, "All projects are staffed!"), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "You can unstaff projects to make changes")), filteredProjects.length === 0 && unstaffedProjects.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, 'No projects match "', searchTerm, '"'), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "Try different keywords or clear search")), filteredProjects.map((project) => renderProjectCard(project, handleSelectProject)))), currentStep === 2 && selectedProject && /* @__PURE__ */ React.createElement("div", { className: "wizard-step-2" }, /* @__PURE__ */ React.createElement("div", { className: "selected-project-header" }, /* @__PURE__ */ React.createElement("div", { className: "header-label" }, "Staffing:"), /* @__PURE__ */ React.createElement("div", { className: "header-project" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${selectedProject.priority}` }, selectedProject.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: "project-title" }, selectedProject.title)), /* @__PURE__ */ React.createElement("button", { className: "back-btn", onClick: handleBack }, "\u2190 Change Project")), /* @__PURE__ */ React.createElement("div", { className: "help-description-section" }, /* @__PURE__ */ React.createElement("label", { className: "help-label" }, "What help do you need with this project? (optional)"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        className: "help-input",
        placeholder: "e.g., Research pricing options, Draft listing copy, Schedule vendor calls...",
        value: helpDescription,
        onChange: (e) => setHelpDescription(e.target.value),
        rows: 3,
        maxLength: 500
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "char-count" }, helpDescription.length, "/500")), /* @__PURE__ */ React.createElement("div", { className: "agent-selection-section" }, /* @__PURE__ */ React.createElement("h3", null, "Choose an Agent"), /* @__PURE__ */ React.createElement("div", { className: "agent-filters" }, /* @__PURE__ */ React.createElement("button", { className: `filter-btn ${agentFilter === "all" ? "active" : ""}`, onClick: () => setAgentFilter("all") }, "All Agents"), /* @__PURE__ */ React.createElement("button", { className: `filter-btn ${agentFilter === "available" ? "active" : ""}`, onClick: () => setAgentFilter("available") }, "Available Only")), /* @__PURE__ */ React.createElement("div", { className: "agent-list" }, /* @__PURE__ */ React.createElement("div", { className: `agent-card create-agent-card ${isCreatingAgent ? "expanded" : ""}` }, !isCreatingAgent ? /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "create-agent-trigger",
        role: "button",
        tabIndex: 0,
        onClick: () => {
          resetAgentFormState();
          setIsCreatingAgent(true);
        },
        onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            resetAgentFormState();
            setIsCreatingAgent(true);
          }
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "create-agent-icon" }, "+"),
      /* @__PURE__ */ React.createElement("div", { className: "create-agent-label" }, "Create Custom Agent"),
      /* @__PURE__ */ React.createElement("div", { className: "create-agent-hint" }, "Tailored to your needs")
    ) : /* @__PURE__ */ React.createElement("div", { className: "agent-form" }, /* @__PURE__ */ React.createElement("div", { className: "devin-callout" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "1.5rem" } }, "\u{1F468}\u200D\u{1F4BC}"), /* @__PURE__ */ React.createElement("strong", null, "Devin here!")), /* @__PURE__ */ React.createElement("p", null, "I'm here to help you tune existing agents and create new ones tailored to your projects.")), /* @__PURE__ */ React.createElement("div", { className: `form-row ${agentFormErrors.name ? "has-error" : ""}` }, /* @__PURE__ */ React.createElement("label", null, "Agent Name *"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "e.g., Marketing Specialist",
        maxLength: 50,
        value: agentForm.name,
        onChange: (e) => handleAgentFieldChange("name", e.target.value)
      }
    ), agentFormErrors.name && /* @__PURE__ */ React.createElement("span", { className: "form-error" }, agentFormErrors.name)), /* @__PURE__ */ React.createElement("div", { className: `form-row ${agentFormErrors.specialization ? "has-error" : ""}` }, /* @__PURE__ */ React.createElement("label", null, "Specialization *"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "e.g., Social Media & Content Marketing",
        maxLength: 50,
        value: agentForm.specialization,
        onChange: (e) => handleAgentFieldChange("specialization", e.target.value)
      }
    ), agentFormErrors.specialization && /* @__PURE__ */ React.createElement("span", { className: "form-error" }, agentFormErrors.specialization)), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Description (optional)"), /* @__PURE__ */ React.createElement(
      "textarea",
      {
        placeholder: "What does this agent help with?",
        maxLength: 200,
        rows: 3,
        value: agentForm.description,
        onChange: (e) => handleAgentFieldChange("description", e.target.value)
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "char-count subtle" }, agentForm.description.length, "/200")), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("label", null, "Capacity (max projects)"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: agentForm.capacity,
        onChange: (e) => handleAgentFieldChange("capacity", e.target.value)
      },
      /* @__PURE__ */ React.createElement("option", { value: "1" }, "1 project"),
      /* @__PURE__ */ React.createElement("option", { value: "2" }, "2 projects"),
      /* @__PURE__ */ React.createElement("option", { value: "3" }, "3 projects"),
      /* @__PURE__ */ React.createElement("option", { value: "4" }, "4 projects"),
      /* @__PURE__ */ React.createElement("option", { value: "5" }, "5 projects")
    )), /* @__PURE__ */ React.createElement("div", { className: "form-actions" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "btn-primary",
        disabled: !agentForm.name.trim() || !agentForm.specialization.trim(),
        onClick: (event) => {
          event.preventDefault();
          handleCreateCustomAgent();
        }
      },
      currentStep === 2 && selectedProject ? `Create & Assign to ${selectedProject.title}` : "Create Agent"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        className: "btn-secondary",
        onClick: (event) => {
          event.preventDefault();
          closeAgentForm();
        }
      },
      "Cancel"
    )))), filteredAgents.map((agent) => renderAgentCard(agent))))), currentStep === 3 && /* @__PURE__ */ React.createElement("div", { className: "wizard-step-3" }, successMessage && /* @__PURE__ */ React.createElement("div", { className: "success-banner" }, /* @__PURE__ */ React.createElement("span", null, successMessage)), /* @__PURE__ */ React.createElement("div", { className: "step-header" }, /* @__PURE__ */ React.createElement("h2", null, "Review your delegation plan"), /* @__PURE__ */ React.createElement("p", null, "See everything currently staffed and make adjustments.")), /* @__PURE__ */ React.createElement("div", { className: "wizard-actions" }, /* @__PURE__ */ React.createElement("button", { className: "staff-another-btn", onClick: handleStaffAnother }, "+ Staff Another Project")), /* @__PURE__ */ React.createElement("div", { className: "review-controls" }, /* @__PURE__ */ React.createElement("div", { className: "review-sort" }, /* @__PURE__ */ React.createElement("span", { className: "review-label" }, "Sort by"), /* @__PURE__ */ React.createElement("div", { className: "review-sort-buttons" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `sort-btn ${reviewSortBy === "priority" ? "active" : ""}`,
        onClick: () => setReviewSortBy("priority")
      },
      "Priority"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `sort-btn ${reviewSortBy === "category" ? "active" : ""}`,
        onClick: () => setReviewSortBy("category")
      },
      "Category"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: `sort-btn ${reviewSortBy === "agent" ? "active" : ""}`,
        onClick: () => setReviewSortBy("agent")
      },
      "Agent"
    ))), /* @__PURE__ */ React.createElement("div", { className: "review-count" }, sortedStaffedProjects.length, " ", sortedStaffedProjects.length === 1 ? "assignment" : "assignments")), /* @__PURE__ */ React.createElement("div", { className: "staffed-projects-list review-list" }, sortedStaffedProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F5C2}\uFE0F"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, "No projects staffed yet"), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "Let\u2019s assign someone to keep things moving."), /* @__PURE__ */ React.createElement("button", { className: "primary-btn", onClick: handleStaffAnother }, "Staff a Project")), sortedStaffedProjects.map(
      (project) => renderStaffedProjectCard(project, { variant: "review" })
    )), sortedStaffedProjects.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "wizard-actions secondary" }, /* @__PURE__ */ React.createElement("button", { className: "staff-another-btn ghost", onClick: handleStaffAnother }, "Staff Another Project"))), successMessage && currentStep !== 3 && /* @__PURE__ */ React.createElement("div", { className: "success-banner" }, /* @__PURE__ */ React.createElement("span", null, successMessage))), /* @__PURE__ */ React.createElement("div", { className: "wizard-navigation" }, currentStep > 1 && /* @__PURE__ */ React.createElement("button", { className: "nav-btn back-btn", onClick: handleBack }, "\u2190 Back"), /* @__PURE__ */ React.createElement("button", { className: "nav-btn cancel-btn", onClick: handleCancel }, "Cancel"))));
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
