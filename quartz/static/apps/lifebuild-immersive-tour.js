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
    var _a, _b, _c, _d;
    const VIEW_W = 1024;
    const VIEW_H = 905;
    const HEX_SIZE = 70;
    const MAP_ORIGIN = React.useMemo(() => ({ x: VIEW_W / 2, y: VIEW_H / 2 }), []);
    const [selectedKey, setSelectedKey] = React.useState(null);
    const [messages, setMessages] = React.useState(() => [
      {
        role: "agent",
        text: "Welcome back. Click a hex on the map to pick a territory, then tell me what you want to build there."
      }
    ]);
    const [draft, setDraft] = React.useState("");
    const endRef = React.useRef(null);
    const svgRef = React.useRef(null);
    React.useEffect(() => {
      var _a2;
      (_a2 = endRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages.length]);
    const TILE_LIBRARY = React.useMemo(
      () => ({
        blueprints: {
          name: "Blueprints",
          kind: "project",
          categoryKey: "HOME",
          image: "assets/lifemap/tile-blueprints.png",
          border: "rgba(123,158,168,0.85)",
          glow: "rgba(123,158,168,0.25)"
        },
        garden: {
          name: "Garden",
          kind: "project",
          categoryKey: "HEALTH",
          image: "assets/lifemap/tile-garden.jpg",
          border: "rgba(232,180,160,0.85)",
          glow: "rgba(232,180,160,0.22)"
        }
      }),
      []
    );
    const hexToPixel = React.useCallback((q, r, size) => {
      const x = size * (1.5 * q);
      const y = size * (Math.sqrt(3) / 2 * q + Math.sqrt(3) * r);
      return { x, y };
    }, []);
    const pixelToAxial = React.useCallback((x, y, size) => {
      const q = 2 / 3 * x / size;
      const r = (-1 / 3 * x + Math.sqrt(3) / 3 * y) / size;
      return { q, r };
    }, []);
    const roundAxial = React.useCallback(({ q, r }) => {
      let x = q;
      let z = r;
      let y = -x - z;
      let rx = Math.round(x);
      let ry = Math.round(y);
      let rz = Math.round(z);
      const xDiff = Math.abs(rx - x);
      const yDiff = Math.abs(ry - y);
      const zDiff = Math.abs(rz - z);
      if (xDiff > yDiff && xDiff > zDiff) {
        rx = -ry - rz;
      } else if (yDiff > zDiff) {
        ry = -rx - rz;
      } else {
        rz = -rx - ry;
      }
      return { q: rx, r: rz };
    }, []);
    const keyLabel = React.useCallback((key) => {
      if (!key) return "No tile selected";
      const [q, r] = key.split(",").map(Number);
      if (!Number.isFinite(q) || !Number.isFinite(r)) return "No tile selected";
      return `Tile \xB7 Q${q} R${r}`;
    }, []);
    const [camera, setCamera] = React.useState(() => ({ x: 0, y: 0, scale: 1 }));
    const [dragState, setDragState] = React.useState(null);
    const [clickMove, setClickMove] = React.useState(null);
    const ignoreNextClickRef = React.useRef(false);
    const LIFE_MAP_STORAGE_KEY = "integrated_lifemap_tiles_v1";
    const [placedTiles, setPlacedTiles] = React.useState(() => {
      try {
        const raw = localStorage.getItem(LIFE_MAP_STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== "object") return {};
        const cleaned = {};
        Object.entries(parsed).forEach(([key, value]) => {
          if (!value || typeof value !== "object") return;
          if (!value.type || !TILE_LIBRARY[value.type]) return;
          if (!value.lane || value.lane !== "gold" && value.lane !== "silver") return;
          if (!value.title) return;
          cleaned[key] = {
            type: value.type,
            lane: value.lane,
            title: value.title,
            dioramaUrl: value.dioramaUrl || TILE_LIBRARY[value.type].image,
            isNew: !!value.isNew
          };
        });
        return cleaned;
      } catch (e) {
        return {};
      }
    });
    React.useEffect(() => {
      try {
        localStorage.setItem(LIFE_MAP_STORAGE_KEY, JSON.stringify(placedTiles));
      } catch (e) {
      }
    }, [placedTiles]);
    const svgPointFromClient = React.useCallback(
      (clientX, clientY) => {
        const svg = svgRef.current;
        if (!svg) return { x: clientX, y: clientY };
        const rect = svg.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width * VIEW_W;
        const y = (clientY - rect.top) / rect.height * VIEW_H;
        return { x, y };
      },
      [VIEW_H, VIEW_W]
    );
    const worldPointFromClient = React.useCallback(
      (clientX, clientY) => {
        const pt = svgPointFromClient(clientX, clientY);
        return {
          x: pt.x / camera.scale,
          y: pt.y / camera.scale
        };
      },
      [camera, svgPointFromClient]
    );
    const hexPoints = React.useCallback((cx, cy, r) => {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = Math.PI / 180 * (60 * i - 30);
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
      }
      return pts.join(" ");
    }, []);
    const computeKeyFromWorld = React.useCallback(
      (world) => {
        const localX = world.x - MAP_ORIGIN.x;
        const localY = world.y - MAP_ORIGIN.y;
        const axial = roundAxial(pixelToAxial(localX, localY, HEX_SIZE));
        return `${axial.q},${axial.r}`;
      },
      [HEX_SIZE, MAP_ORIGIN.x, MAP_ORIGIN.y, pixelToAxial, roundAxial]
    );
    const swapTiles = React.useCallback((sourceKey, targetKey) => {
      if (!sourceKey || !targetKey || sourceKey === targetKey) return;
      setPlacedTiles((prev) => {
        const updated = __spreadValues({}, prev);
        const sourceTile = updated[sourceKey];
        if (!sourceTile) return prev;
        const targetTile = updated[targetKey];
        if (targetTile) {
          updated[targetKey] = sourceTile;
          updated[sourceKey] = targetTile;
        } else {
          updated[targetKey] = sourceTile;
          delete updated[sourceKey];
        }
        return updated;
      });
    }, []);
    const handleWheel = React.useCallback(
      (e) => {
        e.preventDefault();
        const delta = e.deltaY;
        const zoomFactor = delta < 0 ? 1.1 : 0.9;
        setCamera((prev) => {
          const nextScale = Math.min(2.5, Math.max(0.55, prev.scale * zoomFactor));
          return { x: 0, y: 0, scale: nextScale };
        });
      },
      []
    );
    const handleMouseDown = React.useCallback(
      (e) => {
        var _a2, _b2;
        if (dragState || e.button !== 0) return;
        const isTile = (_b2 = (_a2 = e.target).closest) == null ? void 0 : _b2.call(_a2, "[data-hex-tile]");
        if (isTile) return;
        setClickMove(null);
      },
      [dragState]
    );
    React.useEffect(() => {
      const handleMove = (e) => {
        if (dragState) {
          const world = worldPointFromClient(e.clientX, e.clientY);
          setDragState((prev) => prev ? __spreadProps(__spreadValues({}, prev), { pointerWorld: world }) : prev);
        }
      };
      const handleUp = (e) => {
        if (!dragState) return;
        const world = worldPointFromClient(e.clientX, e.clientY);
        const targetKey = computeKeyFromWorld(world);
        if (dragState.source === "board") {
          swapTiles(dragState.sourceKey, targetKey);
          setSelectedKey(targetKey);
        }
        setDragState(null);
        ignoreNextClickRef.current = true;
      };
      const handleKey = (e) => {
        if (e.key === "Escape") setClickMove(null);
      };
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleUp);
      window.addEventListener("keydown", handleKey);
      return () => {
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleUp);
        window.removeEventListener("keydown", handleKey);
      };
    }, [computeKeyFromWorld, dragState, swapTiles, worldPointFromClient]);
    const startBoardDrag = React.useCallback(
      (key) => (e) => {
        if (e.button !== 0) return;
        e.stopPropagation();
        e.preventDefault();
        setClickMove(null);
        const worldPoint = worldPointFromClient(e.clientX, e.clientY);
        setDragState({
          source: "board",
          sourceKey: key,
          tile: placedTiles[key],
          pointerWorld: worldPoint
        });
      },
      [placedTiles, worldPointFromClient]
    );
    const boardHexes = React.useMemo(() => {
      const items = [];
      for (let q = -7; q <= 7; q++) {
        for (let r = -7; r <= 7; r++) {
          const p = hexToPixel(q, r, HEX_SIZE);
          const cx = MAP_ORIGIN.x + p.x;
          const cy = MAP_ORIGIN.y + p.y;
          if (cx < 120 || cx > VIEW_W - 120) continue;
          if (cy < 120 || cy > VIEW_H - 120) continue;
          items.push({ q, r, cx, cy, key: `${q},${r}` });
        }
      }
      return items;
    }, [HEX_SIZE, MAP_ORIGIN.x, MAP_ORIGIN.y, VIEW_H, VIEW_W, hexToPixel]);
    const allowedKeys = React.useMemo(() => new Set(boardHexes.map((h) => h.key)), [boardHexes]);
    const findSpawnKey = React.useCallback(
      (currentTiles) => {
        const occupied = new Set(Object.keys(currentTiles || {}));
        const candidates = [...allowedKeys].map((key) => {
          const [q, r] = key.split(",").map(Number);
          const dist = Math.abs(q) + Math.abs(r);
          return { key, dist };
        }).sort((a, b) => a.dist - b.dist);
        for (const c of candidates) {
          if (!occupied.has(c.key)) return c.key;
        }
        return "0,0";
      },
      [allowedKeys]
    );
    const reconcileTilesWithTable = React.useCallback(() => {
      var _a2, _b2;
      const desired = [
        { lane: "gold", title: ((_a2 = table == null ? void 0 : table.gold) == null ? void 0 : _a2.title) || "" },
        { lane: "silver", title: ((_b2 = table == null ? void 0 : table.silver) == null ? void 0 : _b2.title) || "" }
      ].filter((d) => d.title && d.title !== "Empty");
      setPlacedTiles((prev) => {
        const next = __spreadValues({}, prev);
        const tileEntries = Object.entries(next);
        const byLane = {};
        tileEntries.forEach(([key, tile]) => {
          if (tile == null ? void 0 : tile.lane) byLane[tile.lane] = { key, tile };
        });
        ["gold", "silver"].forEach((lane) => {
          const want = desired.find((d) => d.lane === lane);
          const existing = byLane[lane];
          if (!want && existing) {
            delete next[existing.key];
          }
        });
        desired.forEach((want) => {
          const existing = byLane[want.lane];
          if (existing && existing.tile.title !== want.title) {
            delete next[existing.key];
            delete byLane[want.lane];
          }
        });
        desired.forEach((want) => {
          const existing = Object.entries(next).find(([, t]) => (t == null ? void 0 : t.lane) === want.lane && (t == null ? void 0 : t.title) === want.title);
          if (existing) return;
          const spawnKey = findSpawnKey(next);
          const type = want.lane === "gold" ? "blueprints" : "garden";
          next[spawnKey] = {
            type,
            lane: want.lane,
            title: want.title,
            dioramaUrl: TILE_LIBRARY[type].image,
            isNew: true
          };
        });
        return next;
      });
    }, [TILE_LIBRARY, findSpawnKey, (_a = table == null ? void 0 : table.gold) == null ? void 0 : _a.title, (_b = table == null ? void 0 : table.silver) == null ? void 0 : _b.title]);
    React.useEffect(() => {
      reconcileTilesWithTable();
    }, [(_c = table == null ? void 0 : table.gold) == null ? void 0 : _c.title, (_d = table == null ? void 0 : table.silver) == null ? void 0 : _d.title]);
    const pushAgent = React.useCallback(
      (text) => setMessages((prev) => [...prev, { role: "agent", text }]),
      []
    );
    const onSelectKey = React.useCallback(
      (key) => {
        setSelectedKey(key);
        pushAgent(`Selected ${keyLabel(key)}. What are we building here?`);
      },
      [keyLabel, pushAgent]
    );
    const onHexClick = React.useCallback(
      (key, hasTile) => {
        if (ignoreNextClickRef.current) {
          ignoreNextClickRef.current = false;
          return;
        }
        if (clickMove == null ? void 0 : clickMove.sourceKey) {
          const sourceKey = clickMove.sourceKey;
          if (sourceKey === key) {
            setClickMove(null);
            return;
          }
          swapTiles(sourceKey, key);
          setSelectedKey(key);
          setClickMove(null);
          return;
        }
        if (hasTile) {
          setSelectedKey(key);
          setClickMove({ sourceKey: key });
          setPlacedTiles((prev) => {
            const tile = prev[key];
            if (!tile || !tile.isNew) return prev;
            return __spreadProps(__spreadValues({}, prev), { [key]: __spreadProps(__spreadValues({}, tile), { isNew: false }) });
          });
          return;
        }
        onSelectKey(key);
      },
      [clickMove == null ? void 0 : clickMove.sourceKey, onSelectKey, swapTiles]
    );
    const onSend = React.useCallback(() => {
      var _a2, _b2, _c2;
      const text = draft.trim();
      if (!text) return;
      setDraft("");
      setMessages((prev) => [...prev, { role: "user", text }]);
      if (!selectedKey) {
        pushAgent("Pick a hex first so we can anchor the plan to a territory.");
        return;
      }
      const tableTitles = [(_a2 = table == null ? void 0 : table.gold) == null ? void 0 : _a2.title, (_b2 = table == null ? void 0 : table.silver) == null ? void 0 : _b2.title, (_c2 = table == null ? void 0 : table.bronze) == null ? void 0 : _c2.title].filter(Boolean);
      const tableLine = tableTitles.length ? `On your table right now: ${tableTitles.join(" \xB7 ")}.` : "Your table is empty.";
      pushAgent(`Got it. ${tableLine} Want this new work to replace something, or stay off-table for now?`);
    }, [draft, pushAgent, selectedKey, table]);
    return /* @__PURE__ */ React.createElement("div", { className: "lifemap-wrap" }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-surface" }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-surface-grid" }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-board", "aria-label": "Life Map board" }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-board-inner" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        ref: svgRef,
        className: "lifemap-map-svg",
        viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
        role: "presentation",
        onWheel: handleWheel,
        onMouseDown: handleMouseDown
      },
      /* @__PURE__ */ React.createElement("g", { transform: `scale(${camera.scale})` }, /* @__PURE__ */ React.createElement(
        "image",
        {
          href: "assets/lifemap/lifemap-parchment.png",
          x: "0",
          y: "0",
          width: VIEW_W,
          height: VIEW_H,
          preserveAspectRatio: "none",
          pointerEvents: "none"
        }
      ), boardHexes.map((h) => {
        const tile = placedTiles[h.key];
        const isSelected = selectedKey === h.key;
        const isMovingSource = (clickMove == null ? void 0 : clickMove.sourceKey) === h.key;
        return /* @__PURE__ */ React.createElement("g", { key: h.key, "data-hex-tile": tile ? "true" : void 0 }, /* @__PURE__ */ React.createElement(
          "polygon",
          {
            className: "lifemap-hex",
            "data-selected": isSelected ? "true" : "false",
            "data-moving": isMovingSource ? "true" : "false",
            "data-new": (tile == null ? void 0 : tile.isNew) ? "true" : "false",
            "data-lane": (tile == null ? void 0 : tile.lane) || "",
            points: hexPoints(h.cx, h.cy, HEX_SIZE),
            onClick: () => onHexClick(h.key, !!tile),
            onMouseDown: tile ? startBoardDrag(h.key) : void 0
          }
        ), tile ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("clipPath", { id: `tile-mask-${h.q}-${h.r}` }, /* @__PURE__ */ React.createElement("polygon", { points: hexPoints(h.cx, h.cy, HEX_SIZE * 0.92) })), /* @__PURE__ */ React.createElement(
          "image",
          {
            href: tile.dioramaUrl,
            x: h.cx - HEX_SIZE,
            y: h.cy - HEX_SIZE,
            width: HEX_SIZE * 2,
            height: HEX_SIZE * 2,
            clipPath: `url(#tile-mask-${h.q}-${h.r})`,
            preserveAspectRatio: "xMidYMid slice",
            pointerEvents: "none"
          }
        ), /* @__PURE__ */ React.createElement(
          "text",
          {
            x: h.cx,
            y: h.cy + HEX_SIZE * 0.78,
            textAnchor: "middle",
            fill: "#faf9f7",
            fontSize: 12,
            style: { textShadow: "0 2px 6px rgba(0,0,0,0.55)", fontWeight: 700 }
          },
          tile.title.length > 16 ? `${tile.title.slice(0, 15)}\u2026` : tile.title
        )) : null);
      }), (dragState == null ? void 0 : dragState.tile) ? /* @__PURE__ */ React.createElement("g", { pointerEvents: "none" }, (() => {
        const world = dragState.pointerWorld;
        const def = TILE_LIBRARY[dragState.tile.type];
        return /* @__PURE__ */ React.createElement("g", { opacity: 0.92 }, /* @__PURE__ */ React.createElement(
          "polygon",
          {
            points: hexPoints(world.x, world.y, HEX_SIZE),
            fill: "rgba(255,255,255,0.06)",
            stroke: def.border,
            strokeWidth: 3
          }
        ), /* @__PURE__ */ React.createElement("clipPath", { id: "drag-mask" }, /* @__PURE__ */ React.createElement("polygon", { points: hexPoints(world.x, world.y, HEX_SIZE * 0.92) })), /* @__PURE__ */ React.createElement(
          "image",
          {
            href: dragState.tile.dioramaUrl,
            x: world.x - HEX_SIZE,
            y: world.y - HEX_SIZE,
            width: HEX_SIZE * 2,
            height: HEX_SIZE * 2,
            clipPath: "url(#drag-mask)",
            preserveAspectRatio: "xMidYMid slice",
            pointerEvents: "none"
          }
        ));
      })()) : null)
    ), /* @__PURE__ */ React.createElement("div", { className: "lifemap-board-hud" }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-hud-pill" }, keyLabel(selectedKey)), /* @__PURE__ */ React.createElement("div", { className: "lifemap-hud-hint" }, (clickMove == null ? void 0 : clickMove.sourceKey) ? `Click destination to move \xB7 Esc to cancel (${keyLabel(clickMove.sourceKey)})` : "Scroll to zoom \xB7 drag background to pan \xB7 click tile to move \xB7 drag tiles to move.")))), /* @__PURE__ */ React.createElement("div", { className: "lifemap-chat", "aria-label": "Agent chat" }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-paper" }, /* @__PURE__ */ React.createElement("div", { className: "mesa-alley", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("img", { className: "mesa-figure", src: "assets/lifemap/mesa-cutout.webp", alt: "", draggable: false })), /* @__PURE__ */ React.createElement("div", { className: "lifemap-chat-col" }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-chat-head" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "lifemap-chat-title" }, "MESA"), /* @__PURE__ */ React.createElement("div", { className: "lifemap-chat-sub" }, "Ink on paper. Let\u2019s map your life.")), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "lifemap-chat-clear",
        onClick: () => setMessages([
          {
            role: "agent",
            text: "Chat cleared. Click a hex on the map to pick a territory, then tell me what you want to build there."
          }
        ])
      },
      "Clear"
    )), /* @__PURE__ */ React.createElement("div", { className: "lifemap-chat-body" }, messages.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, className: `lifemap-msg ${m.role}` }, /* @__PURE__ */ React.createElement("div", { className: "lifemap-msg-bubble" }, m.text))), /* @__PURE__ */ React.createElement("div", { ref: endRef })), /* @__PURE__ */ React.createElement("div", { className: "lifemap-chat-input" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        className: "lifemap-chat-field",
        value: draft,
        onChange: (e) => setDraft(e.target.value),
        placeholder: selectedKey ? "Ask MESA\u2026" : "Select a hex first\u2026",
        onKeyDown: (e) => {
          if (e.key === "Enter") onSend();
        }
      }
    ), /* @__PURE__ */ React.createElement("button", { className: "lifemap-chat-send", onClick: onSend, disabled: !draft.trim() }, "Send"))))))));
  };
  const DraftingRoom = () => {
    const [view, setView] = React.useState("queue");
    const [currentProject, setCurrentProject] = React.useState(null);
    const [currentStage, setCurrentStage] = React.useState(1);
    const [planningProjects, setPlanningProjects] = React.useState(() => {
      var _a;
      const stored = localStorage.getItem("lifebuild_planning_queue");
      return stored ? JSON.parse(stored) : ((_a = window.LifeBuildData) == null ? void 0 : _a.planningQueue) || [];
    });
    const [filters, setFilters] = React.useState(() => {
      const stored = localStorage.getItem("lifebuild_drafting_filters");
      return stored ? JSON.parse(stored) : { category: "all", tier: "all" };
    });
    React.useEffect(() => {
      localStorage.setItem("lifebuild_planning_queue", JSON.stringify(planningProjects));
    }, [planningProjects]);
    React.useEffect(() => {
      localStorage.setItem("lifebuild_drafting_filters", JSON.stringify(filters));
    }, [filters]);
    const formatRelativeTime = (timestamp) => {
      const now = Date.now();
      const diffMs = now - timestamp;
      const diffMins = Math.floor(diffMs / (1e3 * 60));
      const diffHours = Math.floor(diffMs / (1e3 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
      if (diffMins < 60) return `${diffMins} min ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays < 7) return `${diffDays}d ago`;
      if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
      return new Date(timestamp).toLocaleDateString();
    };
    const isStale = (timestamp) => {
      return (Date.now() - timestamp) / (1e3 * 60 * 60 * 24) >= 14;
    };
    const getCategoryColor = (category) => {
      const colors = {
        health: "#E3F2FD",
        purpose: "#F3E5F5",
        finances: "#FFF3E0",
        relationships: "#FCE4EC",
        home: "#E8F5E9",
        community: "#FFF9C4",
        leisure: "#E0F2F1",
        growth: "#EDE7F6"
      };
      return colors[category] || "#F5F5F5";
    };
    const getCategoryTextColor = (category) => {
      const colors = {
        health: "#1976D2",
        purpose: "#7B1FA2",
        finances: "#E65100",
        relationships: "#C2185B",
        home: "#388E3C",
        community: "#F57F17",
        leisure: "#00796B",
        growth: "#512DA8"
      };
      return colors[category] || "#666";
    };
    const getStageLabel = (stage) => {
      const labels = { 1: "Identified", 2: "Scoped", 3: "Drafted", 4: "Prioritized" };
      return labels[stage] || "Unknown";
    };
    const startNewProject = () => {
      setCurrentProject({
        id: `proj-${Date.now()}`,
        title: "",
        category: "",
        draftingStage: 1,
        lastModified: Date.now(),
        description: "",
        status: "planning"
      });
      setCurrentStage(1);
      setView("create");
    };
    const resumeProject = (project) => {
      setCurrentProject(project);
      setCurrentStage(project.draftingStage);
      setView("resume");
    };
    const abandonProject = (projectId) => {
      setPlanningProjects((prev) => prev.filter((p) => p.id !== projectId));
    };
    const saveCurrentProject = (projectData = null) => {
      const dataToSave = projectData || currentProject;
      const updatedProject = __spreadProps(__spreadValues({}, dataToSave), { lastModified: Date.now() });
      setPlanningProjects((prev) => {
        const existing = prev.findIndex((p) => p.id === updatedProject.id);
        if (existing >= 0) {
          const newProjects = [...prev];
          newProjects[existing] = updatedProject;
          return newProjects;
        }
        return [...prev, updatedProject];
      });
      setCurrentProject(null);
      setView("queue");
    };
    const completeStage = (stageData) => {
      const updatedProject = __spreadProps(__spreadValues(__spreadValues({}, currentProject), stageData), {
        draftingStage: currentStage + 1,
        lastModified: Date.now()
      });
      if (currentStage < 4) {
        setCurrentProject(updatedProject);
        setCurrentStage(currentStage + 1);
      } else {
        setPlanningProjects((prev) => prev.filter((p) => p.id !== updatedProject.id));
        setCurrentProject(null);
        setView("queue");
      }
    };
    const filteredProjects = React.useMemo(() => {
      return planningProjects.filter((project) => {
        if (filters.category !== "all" && project.category !== filters.category) {
          return false;
        }
        if (filters.tier !== "all" && project.tier !== filters.tier) {
          return false;
        }
        return true;
      });
    }, [planningProjects, filters]);
    const sortedProjects = [...filteredProjects].sort((a, b) => b.lastModified - a.lastModified);
    const staleCount = sortedProjects.filter((p) => isStale(p.lastModified)).length;
    if (view === "create" || view === "resume") {
      return /* @__PURE__ */ React.createElement("div", { className: "card" }, /* @__PURE__ */ React.createElement(
        ProjectCreationFlow,
        {
          project: currentProject,
          stage: currentStage,
          onComplete: completeStage,
          onSave: saveCurrentProject,
          onCancel: () => {
            saveCurrentProject();
          },
          onStageChange: setCurrentStage
        }
      ));
    }
    const projectsByStage = {
      1: filteredProjects.filter((p) => p.draftingStage === 1),
      2: filteredProjects.filter((p) => p.draftingStage === 2),
      3: filteredProjects.filter((p) => p.draftingStage === 3),
      4: filteredProjects.filter((p) => p.draftingStage === 4)
    };
    const categories = [
      { id: "all", label: "All" },
      { id: "health", label: "Health" },
      { id: "purpose", label: "Purpose" },
      { id: "finances", label: "Finances" },
      { id: "relationships", label: "Relationships" },
      { id: "home", label: "Home" },
      { id: "community", label: "Community" },
      { id: "leisure", label: "Leisure" },
      { id: "growth", label: "Growth" }
    ];
    const tiers = [
      { id: "all", label: "All Tiers" },
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
      { id: "bronze", label: "Bronze" }
    ];
    const hasActiveFilters = filters.category !== "all" || filters.tier !== "all";
    return /* @__PURE__ */ React.createElement("div", { className: "card", style: { padding: "1.5rem" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1.5rem" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "1.4rem", fontWeight: 600 } }, "Planning Queue"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.95rem", color: "var(--muted)" } }, filteredProjects.length === planningProjects.length ? `${planningProjects.length} project${planningProjects.length !== 1 ? "s" : ""}` : `Showing ${filteredProjects.length} of ${planningProjects.length} projects`)), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1rem" } }, /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "0.75rem",
      alignItems: "center"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.85rem", color: "var(--muted)", marginRight: "0.25rem" } }, "Category:"), categories.map((cat) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: cat.id,
        onClick: () => setFilters((prev) => __spreadProps(__spreadValues({}, prev), { category: cat.id })),
        style: {
          padding: "0.4rem 0.75rem",
          fontSize: "0.8rem",
          border: `1px solid ${filters.category === cat.id ? getCategoryTextColor(cat.id) : "var(--border)"}`,
          background: filters.category === cat.id ? cat.id === "all" ? "var(--ink)" : getCategoryColor(cat.id) : "transparent",
          color: filters.category === cat.id ? cat.id === "all" ? "#fff" : getCategoryTextColor(cat.id) : "var(--ink)",
          borderRadius: "1rem",
          cursor: "pointer",
          fontWeight: filters.category === cat.id ? 600 : 400,
          transition: "all 0.2s ease"
        }
      },
      cat.label
    ))), /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      gap: "0.5rem",
      alignItems: "center"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.85rem", color: "var(--muted)", marginRight: "0.25rem" } }, "Tier:"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: filters.tier,
        onChange: (e) => setFilters((prev) => __spreadProps(__spreadValues({}, prev), { tier: e.target.value })),
        style: {
          padding: "0.4rem 0.75rem",
          fontSize: "0.8rem",
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          background: "#fff",
          cursor: "pointer"
        }
      },
      tiers.map((tier) => /* @__PURE__ */ React.createElement("option", { key: tier.id, value: tier.id }, tier.label))
    ), hasActiveFilters && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setFilters({ category: "all", tier: "all" }),
        style: {
          padding: "0.4rem 0.75rem",
          fontSize: "0.8rem",
          border: "1px solid var(--border)",
          background: "transparent",
          color: "var(--muted)",
          borderRadius: "0.5rem",
          cursor: "pointer"
        }
      },
      "Clear Filters"
    ))), staleCount > 0 && /* @__PURE__ */ React.createElement("div", { style: {
      background: "rgba(255,154,86,0.1)",
      border: "1px solid rgba(255,154,86,0.3)",
      borderRadius: "0.5rem",
      padding: "0.75rem 1rem",
      fontSize: "0.9rem",
      color: "#D84315",
      marginBottom: "0.75rem"
    } }, "\u26A0\uFE0F ", staleCount, " project", staleCount > 1 ? "s" : "", " haven't been touched in 2+ weeks")), /* @__PURE__ */ React.createElement("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1rem",
      marginBottom: "1.5rem",
      minHeight: "400px"
    } }, /* @__PURE__ */ React.createElement(
      KanbanColumn,
      {
        title: "Identified",
        stage: 1,
        projects: projectsByStage[1],
        emptyMessage: "Click 'Start New Project' to begin",
        onResume: resumeProject,
        onAbandon: abandonProject,
        getCategoryColor,
        getCategoryTextColor,
        formatRelativeTime,
        isStale
      }
    ), /* @__PURE__ */ React.createElement(
      KanbanColumn,
      {
        title: "Scoped",
        stage: 2,
        projects: projectsByStage[2],
        emptyMessage: "Complete Stage 1 projects to move them here",
        onResume: resumeProject,
        onAbandon: abandonProject,
        getCategoryColor,
        getCategoryTextColor,
        formatRelativeTime,
        isStale
      }
    ), /* @__PURE__ */ React.createElement(
      KanbanColumn,
      {
        title: "Drafted",
        stage: 3,
        projects: projectsByStage[3],
        emptyMessage: "Define objectives to advance projects",
        onResume: resumeProject,
        onAbandon: abandonProject,
        getCategoryColor,
        getCategoryTextColor,
        formatRelativeTime,
        isStale
      }
    ), /* @__PURE__ */ React.createElement(
      KanbanColumn,
      {
        title: "Prioritized",
        stage: 4,
        projects: projectsByStage[4],
        emptyMessage: "Create task lists to reach this stage",
        onResume: resumeProject,
        onAbandon: abandonProject,
        getCategoryColor,
        getCategoryTextColor,
        formatRelativeTime,
        isStale
      }
    )), /* @__PURE__ */ React.createElement("div", { style: {
      paddingTop: "1.5rem",
      borderTop: "1px solid var(--border)",
      display: "flex",
      gap: "0.75rem"
    } }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn", style: { flex: 1 }, onClick: startNewProject }, "+ Start New Project"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost" }, "Clean Up Queue")));
  };
  const KanbanColumn = ({ title, stage, projects, emptyMessage, onResume, onAbandon, getCategoryColor, getCategoryTextColor, formatRelativeTime, isStale }) => /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    flexDirection: "column",
    background: "#FAFAF8",
    borderRadius: "0.75rem",
    padding: "1rem",
    border: "1px solid var(--border)"
  } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "2px solid var(--border)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)", marginBottom: "0.25rem" } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "0.8rem", color: "var(--muted)" } }, "Stage ", stage, " \xB7 ", projects.length, " project", projects.length !== 1 ? "s" : "")), /* @__PURE__ */ React.createElement("div", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    overflowY: "auto",
    maxHeight: "500px"
  } }, projects.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: {
    textAlign: "center",
    padding: "2rem 0.5rem",
    color: "var(--muted)",
    fontSize: "0.85rem",
    lineHeight: 1.5
  } }, emptyMessage) : projects.map((project) => /* @__PURE__ */ React.createElement(
    CompactProjectCard,
    {
      key: project.id,
      project,
      onResume: () => onResume(project),
      onAbandon: () => onAbandon(project.id),
      getCategoryColor,
      getCategoryTextColor,
      formatRelativeTime,
      isStale
    }
  ))));
  const CompactProjectCard = ({ project, onResume, onAbandon, getCategoryColor, getCategoryTextColor, formatRelativeTime, isStale }) => /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        background: "#fff",
        border: `1px solid ${isStale(project.lastModified) ? "#FF9A56" : "var(--border)"}`,
        borderLeft: `3px solid ${getCategoryTextColor(project.category)}`,
        borderRadius: "0.5rem",
        padding: "0.75rem",
        transition: "all 0.2s ease",
        cursor: "pointer"
      },
      onMouseEnter: (e) => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)",
      onMouseLeave: (e) => e.currentTarget.style.boxShadow = "none"
    },
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" } }, /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-block",
      background: getCategoryColor(project.category),
      color: getCategoryTextColor(project.category),
      padding: "0.2rem 0.5rem",
      borderRadius: "0.25rem",
      fontSize: "0.7rem",
      fontWeight: 600,
      textTransform: "uppercase"
    } }, project.category), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.75rem", color: "var(--muted)" } }, "\u{1F552} ", formatRelativeTime(project.lastModified))),
    /* @__PURE__ */ React.createElement("h4", { style: {
      fontSize: "0.95rem",
      fontWeight: 600,
      marginBottom: "0.5rem",
      lineHeight: 1.3,
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical"
    } }, project.title),
    /* @__PURE__ */ React.createElement("div", { style: { fontSize: "0.75rem", color: "var(--muted)", marginBottom: "0.75rem" } }, project.tier && /* @__PURE__ */ React.createElement("span", { style: { marginRight: "0.5rem", textTransform: "capitalize" } }, project.tier), project.objectives && project.objectives.length > 0 && /* @__PURE__ */ React.createElement("span", null, project.objectives.length, " obj"), project.tasks && project.tasks.length > 0 && /* @__PURE__ */ React.createElement("span", null, " \xB7 ", project.tasks.length, " tasks"), isStale(project.lastModified) && /* @__PURE__ */ React.createElement("span", { style: { color: "#FF9A56", fontWeight: 600, marginLeft: "0.5rem" } }, "\u26A0\uFE0F")),
    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "0.5rem" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pill-btn",
        style: { flex: 1, fontSize: "0.8rem", padding: "0.4rem 0.75rem" },
        onClick: (e) => {
          e.stopPropagation();
          onResume();
        }
      },
      "Resume"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pill-btn ghost",
        style: { fontSize: "0.8rem", padding: "0.4rem 0.75rem" },
        onClick: (e) => {
          e.stopPropagation();
          if (confirm(`Abandon "${project.title}"?`)) onAbandon();
        }
      },
      "Abandon"
    ))
  );
  const ProjectCreationFlow = ({ project, stage, onComplete, onSave, onCancel, onStageChange }) => {
    const [formData, setFormData] = React.useState(project);
    React.useEffect(() => {
      setFormData(project);
    }, [project.id]);
    const updateField = (field, value) => {
      setFormData((prev) => __spreadProps(__spreadValues({}, prev), { [field]: value }));
    };
    const handleNext = () => {
      onComplete(formData);
    };
    const handleBack = () => {
      if (stage > 1) {
        onStageChange(stage - 1);
      }
    };
    const handleSaveAndExit = (additionalData = {}) => {
      const dataToSave = __spreadProps(__spreadValues(__spreadValues({}, formData), additionalData), { draftingStage: stage });
      onSave(dataToSave);
    };
    if (stage === 1) {
      return /* @__PURE__ */ React.createElement(
        Stage1Identified,
        {
          data: formData,
          updateField,
          onNext: handleNext,
          onCancel: handleSaveAndExit
        }
      );
    }
    if (stage === 2) {
      return /* @__PURE__ */ React.createElement(
        Stage2Scoped,
        {
          data: formData,
          updateField,
          onNext: handleNext,
          onBack: handleBack,
          onSave: handleSaveAndExit
        }
      );
    }
    if (stage === 3) {
      return /* @__PURE__ */ React.createElement(
        Stage3Drafted,
        {
          data: formData,
          updateField,
          onNext: handleNext,
          onBack: handleBack,
          onSave: handleSaveAndExit
        }
      );
    }
    if (stage === 4) {
      return /* @__PURE__ */ React.createElement(
        Stage4Prioritized,
        {
          data: formData,
          updateField,
          onComplete: () => {
            onComplete(formData);
          },
          onBack: handleBack,
          onSave: handleSaveAndExit
        }
      );
    }
    return null;
  };
  const Stage1Identified = ({ data, updateField, onNext, onCancel }) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" } }, "Stage 1: Identified"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: "0.95rem" } }, "Quick capture - 2 minutes")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1.5rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontWeight: 600, marginBottom: "0.5rem" } }, "Project Title"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: data.title,
      onChange: (e) => updateField("title", e.target.value),
      placeholder: "What's this project called?",
      style: {
        width: "100%",
        padding: "0.75rem",
        border: "1px solid var(--border)",
        borderRadius: "0.5rem",
        fontSize: "1rem"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1.5rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontWeight: 600, marginBottom: "0.5rem" } }, "Brief Description"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      value: data.description,
      onChange: (e) => updateField("description", e.target.value),
      placeholder: "1-2 sentences about what you're trying to do",
      rows: 3,
      style: {
        width: "100%",
        padding: "0.75rem",
        border: "1px solid var(--border)",
        borderRadius: "0.5rem",
        fontSize: "1rem",
        fontFamily: "inherit"
      }
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontWeight: 600, marginBottom: "0.75rem" } }, "Category"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" } }, ["health", "purpose", "finances", "relationships", "home", "community", "leisure", "growth"].map((cat) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: cat,
      onClick: () => updateField("category", cat),
      className: "pill-btn ghost",
      style: {
        background: data.category === cat ? "var(--gold)" : "transparent",
        color: data.category === cat ? "#fff" : "var(--ink)",
        textTransform: "capitalize"
      }
    },
    cat
  )))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "0.75rem" } }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: onCancel }, "Save & Exit"), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "pill-btn",
      style: { flex: 1 },
      onClick: onNext,
      disabled: !data.title || !data.category || !data.description
    },
    "Continue to Stage 2"
  )));
  const Stage2Scoped = ({ data, updateField, onNext, onBack, onSave }) => {
    const [objectives, setObjectives] = React.useState(data.objectives || [""]);
    const [archetype, setArchetype] = React.useState(data.archetype || "");
    const [tier, setTier] = React.useState(data.tier || "");
    const addObjective = () => setObjectives([...objectives, ""]);
    const updateObjective = (idx, value) => {
      const newObjs = [...objectives];
      newObjs[idx] = value;
      setObjectives(newObjs);
      updateField("objectives", newObjs.filter((o) => o.trim()));
    };
    const archetypes = [
      { name: "Quick Task", desc: "One-shot, minimal planning" },
      { name: "Discovery Mission", desc: "Research, reduce uncertainty" },
      { name: "Critical Response", desc: "Urgent, time-sensitive" },
      { name: "Maintenance Loop", desc: "Recurring, perpetual" },
      { name: "System Build", desc: "Infrastructure, automation" },
      { name: "Initiative", desc: "Move life forward, transformative" }
    ];
    const tiers = [
      { name: "gold", label: "Gold", desc: "Major life-changing initiatives" },
      { name: "silver", label: "Silver", desc: "System builds and capacity work" },
      { name: "bronze", label: "Bronze", desc: "Quick tasks and maintenance" }
    ];
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" } }, "Stage 2: Scoped"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: "0.95rem" } }, "Define what success looks like - 10 minutes")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1.5rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontWeight: 600, marginBottom: "0.75rem" } }, "Objectives (1-3)"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "0.9rem", color: "var(--muted)", marginBottom: "0.75rem" } }, "What specific outcomes would mean this project succeeded?"), objectives.map((obj, idx) => /* @__PURE__ */ React.createElement(
      "input",
      {
        key: idx,
        type: "text",
        value: obj,
        onChange: (e) => updateObjective(idx, e.target.value),
        placeholder: `Objective ${idx + 1}`,
        style: {
          width: "100%",
          padding: "0.75rem",
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          fontSize: "1rem",
          marginBottom: "0.5rem"
        }
      }
    )), objectives.length < 3 && /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: addObjective }, "+ Add Objective")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1.5rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontWeight: 600, marginBottom: "0.5rem" } }, "Deadline (Optional)"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: data.deadline || "",
        onChange: (e) => updateField("deadline", e.target.value),
        placeholder: "e.g., 'before holidays' or 'by June'",
        style: {
          width: "100%",
          padding: "0.75rem",
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          fontSize: "1rem"
        }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontWeight: 600, marginBottom: "0.75rem" } }, "Project Archetype"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "0.75rem" } }, archetypes.map((a) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: a.name,
        onClick: () => {
          setArchetype(a.name);
          updateField("archetype", a.name);
        },
        style: {
          padding: "1rem",
          border: `2px solid ${archetype === a.name ? "var(--gold)" : "var(--border)"}`,
          borderRadius: "0.5rem",
          background: archetype === a.name ? "rgba(216,166,80,0.1)" : "#fff",
          cursor: "pointer",
          textAlign: "left"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, marginBottom: "0.25rem" } }, a.name),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: "0.9rem", color: "var(--muted)" } }, a.desc)
    )))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("label", { style: { display: "block", fontWeight: 600, marginBottom: "0.75rem" } }, "Project Tier"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "0.9rem", color: "var(--muted)", marginBottom: "0.75rem" } }, "Select the priority tier for this project"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem" } }, tiers.map((t) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: t.name,
        onClick: () => {
          setTier(t.name);
          updateField("tier", t.name);
        },
        style: {
          padding: "1rem",
          border: `2px solid ${tier === t.name ? "var(--gold)" : "var(--border)"}`,
          borderRadius: "0.5rem",
          background: tier === t.name ? "rgba(216,166,80,0.1)" : "#fff",
          cursor: "pointer",
          textAlign: "center"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, marginBottom: "0.25rem", textTransform: "capitalize" } }, t.label),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: "0.85rem", color: "var(--muted)" } }, t.desc)
    )))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "0.75rem" } }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: onBack }, "Back"), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pill-btn ghost",
        onClick: () => {
          onSave({
            objectives: objectives.filter((o) => o.trim()),
            archetype,
            tier
          });
        }
      },
      "Save & Exit"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pill-btn",
        style: { flex: 1 },
        onClick: () => {
          updateField("objectives", objectives.filter((o) => o.trim()));
          updateField("archetype", archetype);
          updateField("tier", tier);
          onNext();
        },
        disabled: !objectives.some((o) => o.trim()) || !archetype || !tier
      },
      "Continue to Stage 3"
    )));
  };
  const Stage3Drafted = ({ data, updateField, onNext, onBack, onSave }) => {
    const [tasks, setTasks] = React.useState(data.tasks || []);
    const [newTask, setNewTask] = React.useState("");
    React.useEffect(() => {
      if (tasks.length === 0 && data.objectives) {
        const generatedTasks = [
          { id: `t1-${Date.now()}`, title: "Review project scope and objectives", order: 1, codadType: "discover" },
          { id: `t2-${Date.now()}`, title: "Break down first objective into subtasks", order: 2, codadType: "design" },
          { id: `t3-${Date.now()}`, title: "Identify required resources", order: 3, codadType: "discover" },
          { id: `t4-${Date.now()}`, title: "Set up project workspace", order: 4, codadType: "operate" },
          { id: `t5-${Date.now()}`, title: "Begin first task", order: 5, codadType: "operate" }
        ];
        setTasks(generatedTasks);
      }
    }, []);
    const addTask = () => {
      if (newTask.trim()) {
        const task = {
          id: `t-${Date.now()}`,
          title: newTask,
          order: tasks.length + 1,
          codadType: "operate"
        };
        setTasks([...tasks, task]);
        setNewTask("");
      }
    };
    const removeTask = (id) => {
      setTasks(tasks.filter((t) => t.id !== id));
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" } }, "Stage 3: Drafted"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: "0.95rem" } }, "Create actionable task list - 30 minutes")), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(216,166,80,0.1)", border: "1px solid rgba(216,166,80,0.3)", borderRadius: "0.5rem", padding: "1rem", marginBottom: "1.5rem" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" } }, /* @__PURE__ */ React.createElement("span", null, "\u{1F916}"), /* @__PURE__ */ React.createElement("strong", null, "Marvin generated ", tasks.length, " initial tasks")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "0.9rem", color: "var(--muted)" } }, "Review, edit, add, or remove tasks as needed.")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "1.5rem" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gap: "0.75rem", marginBottom: "1rem" } }, tasks.map((task, idx) => /* @__PURE__ */ React.createElement("div", { key: task.id, style: { display: "flex", gap: "0.75rem", alignItems: "start", padding: "0.75rem", background: "#FAFAF8", borderRadius: "0.5rem", border: "1px solid var(--border)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "0.9rem", color: "var(--muted)", fontWeight: 600 } }, idx + 1, "."), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, task.title), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => removeTask(task.id),
        style: { padding: "0.25rem 0.5rem", fontSize: "0.8rem", border: "1px solid var(--border)", borderRadius: "0.25rem", background: "transparent", cursor: "pointer" }
      },
      "Remove"
    )))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "0.5rem" } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        value: newTask,
        onChange: (e) => setNewTask(e.target.value),
        onKeyPress: (e) => e.key === "Enter" && addTask(),
        placeholder: "Add a new task...",
        style: {
          flex: 1,
          padding: "0.75rem",
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          fontSize: "1rem"
        }
      }
    ), /* @__PURE__ */ React.createElement("button", { className: "pill-btn", onClick: addTask }, "Add"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "0.75rem" } }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: onBack }, "Back"), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pill-btn ghost",
        onClick: () => {
          onSave({ tasks });
        }
      },
      "Save & Exit"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "pill-btn",
        style: { flex: 1 },
        onClick: () => {
          updateField("tasks", tasks);
          onNext();
        },
        disabled: tasks.length === 0
      },
      "Continue to Stage 4"
    )));
  };
  const Stage4Prioritized = ({ data, onComplete, onBack, onSave }) => {
    var _a, _b, _c;
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "1.6rem", fontWeight: 600, marginBottom: "0.5rem" } }, "Stage 4: Prioritized"), /* @__PURE__ */ React.createElement("p", { style: { color: "var(--muted)", fontSize: "0.95rem" } }, "Ready to enter Priority Queue - 5 minutes")), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(139,157,111,0.1)", border: "1px solid rgba(139,157,111,0.3)", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "2rem" } }, "\u2705"), /* @__PURE__ */ React.createElement("h3", { style: { fontSize: "1.2rem", fontWeight: 600 } }, "Project Complete!")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "0.95rem", marginBottom: "1rem" } }, /* @__PURE__ */ React.createElement("strong", null, data.title), " is now fully planned with ", ((_a = data.tasks) == null ? void 0 : _a.length) || 0, " tasks."), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "0.9rem", color: "var(--muted)" } }, "This project will move to the Priority Queue and be available in the Sorting Room.")), /* @__PURE__ */ React.createElement("div", { style: { padding: "1rem", background: "#FAFAF8", borderRadius: "0.5rem", marginBottom: "2rem" } }, /* @__PURE__ */ React.createElement("h4", { style: { fontWeight: 600, marginBottom: "0.75rem" } }, "Project Summary"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Category:"), " ", data.category), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Archetype:"), " ", data.archetype), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Objectives:"), " ", ((_b = data.objectives) == null ? void 0 : _b.length) || 0), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Tasks:"), " ", ((_c = data.tasks) == null ? void 0 : _c.length) || 0), data.deadline && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Deadline:"), " ", data.deadline))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "0.75rem" } }, /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: onBack }, "Back"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn ghost", onClick: onSave }, "Save & Exit"), /* @__PURE__ */ React.createElement("button", { className: "pill-btn", style: { flex: 1 }, onClick: onComplete }, "Complete & Add to Priority Queue")));
  };
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
    const [sortBy, setSortBy] = React.useState("priority");
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
    const unstaffedProjects = React.useMemo(() => {
      return projects.filter((p) => !p.staffing.assigned);
    }, [projects]);
    const staffedProjects = React.useMemo(() => {
      return projects.filter((p) => p.staffing.assigned);
    }, [projects]);
    const sortedProjects = React.useMemo(() => {
      const projectsToSort = currentStep === 1 ? unstaffedProjects : staffedProjects;
      let sorted = [...projectsToSort];
      if (sortBy === "priority") {
        const priorityOrder = { gold: 1, silver: 2, bronze: 3 };
        const statusOrder = { active: 1, ongoing: 2 };
        sorted.sort((a, b) => {
          if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          }
          return statusOrder[a.status] - statusOrder[b.status];
        });
      } else if (sortBy === "category") {
        sorted.sort((a, b) => a.category.localeCompare(b.category));
      } else if (sortBy === "alphabetical") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      }
      return sorted;
    }, [unstaffedProjects, staffedProjects, sortBy, currentStep]);
    const filteredProjects = React.useMemo(() => {
      if (!searchTerm) return sortedProjects;
      const term = searchTerm.toLowerCase();
      return sortedProjects.filter(
        (p) => p.title.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
      );
    }, [sortedProjects, searchTerm]);
    const filteredAgents = React.useMemo(() => {
      let filtered = [...agents];
      if (agentFilter === "available") {
        filtered = filtered.filter((a) => a.capacity.available > 0);
      } else if (agentFilter === "partial") {
        filtered = filtered.filter((a) => a.capacity.available > 0 && a.capacity.used > 0);
      }
      return filtered;
    }, [agents, agentFilter]);
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
      closeAgentForm();
      if (currentStep === 2) {
        setSelectedProject(null);
        setHelpDescription("");
        setSelectedAgent(null);
        setCurrentStep(1);
      } else if (currentStep === 3) {
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
      setSortBy("priority");
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
      setTimeout(() => setSuccessMessage(""), 3e3);
      window.dispatchEvent(new CustomEvent("rosterUpdated"));
      setCurrentStep(1);
      setSelectedProject(null);
      setHelpDescription("");
      setSelectedAgent(null);
      closeAgentForm();
    };
    const handleUnstaffProject = (project) => {
      const agent = agents.find((a) => a.id === project.staffing.agentId);
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
    };
    const renderStepIndicator = () => /* @__PURE__ */ React.createElement("div", { className: "wizard-step-indicator" }, /* @__PURE__ */ React.createElement("div", { className: `wizard-step ${currentStep >= 1 ? "active" : ""} ${currentStep > 1 ? "completed" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "step-number" }, "1"), /* @__PURE__ */ React.createElement("div", { className: "step-label" }, "Select Project")), /* @__PURE__ */ React.createElement("div", { className: "step-connector" }), /* @__PURE__ */ React.createElement("div", { className: `wizard-step ${currentStep >= 2 ? "active" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "step-number" }, "2"), /* @__PURE__ */ React.createElement("div", { className: "step-label" }, "Choose Agent")));
    const renderProjectCard = (project, onClick) => {
      const categoryIcons = {
        finances: "\u{1F4B0}",
        health: "\u2764\uFE0F",
        home: "\u{1F3E0}",
        career: "\u{1F4BC}"
      };
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: project.id,
          className: `project-card ${(selectedProject == null ? void 0 : selectedProject.id) === project.id ? "selected" : ""}`,
          onClick: () => onClick && onClick(project),
          "data-priority": project.priority
        },
        /* @__PURE__ */ React.createElement("div", { className: "project-header" }, /* @__PURE__ */ React.createElement("div", { className: "project-badges" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${project.priority}` }, project.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: `status-badge ${project.status}` }, project.status === "active" ? "On Table" : "Ongoing")), /* @__PURE__ */ React.createElement("div", { className: "category-icon", "data-category": project.category }, categoryIcons[project.category] || "\u{1F4C1}")),
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
    return /* @__PURE__ */ React.createElement("div", { className: "roster-room-two-panel" }, /* @__PURE__ */ React.createElement("div", { className: "staffed-panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-header" }, /* @__PURE__ */ React.createElement("h2", null, "Delegation Plan"), /* @__PURE__ */ React.createElement("p", null, staffedProjects.length, " ", staffedProjects.length === 1 ? "project" : "projects", " staffed")), /* @__PURE__ */ React.createElement("div", { className: "staffed-projects-list" }, staffedProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F4CB}"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, "No projects staffed yet"), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "Select a project from the right to get started")), staffedProjects.map((project) => {
      const agent = agents.find((a) => a.id === project.staffing.agentId);
      return /* @__PURE__ */ React.createElement("div", { key: project.id, className: "staffed-project-card", "data-priority": project.priority }, /* @__PURE__ */ React.createElement("div", { className: "project-info" }, /* @__PURE__ */ React.createElement("div", { className: "project-header" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${project.priority}` }, project.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: `status-badge ${project.status}` }, project.status === "active" ? "On Table" : "Ongoing")), /* @__PURE__ */ React.createElement("div", { className: "project-title" }, project.title), /* @__PURE__ */ React.createElement("div", { className: "project-assignment" }, /* @__PURE__ */ React.createElement("span", { className: "agent-avatar" }, agent == null ? void 0 : agent.avatar), /* @__PURE__ */ React.createElement("span", { className: "agent-name" }, project.staffing.agentName)), project.staffing.helpDescription && /* @__PURE__ */ React.createElement("div", { className: "help-description" }, /* @__PURE__ */ React.createElement("strong", null, "Help needed:"), " ", project.staffing.helpDescription)), /* @__PURE__ */ React.createElement("div", { className: "project-actions" }, /* @__PURE__ */ React.createElement(
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
    }))), /* @__PURE__ */ React.createElement("div", { className: "wizard-panel" }, /* @__PURE__ */ React.createElement("div", { className: "panel-header" }, /* @__PURE__ */ React.createElement("h2", null, "Delegation Wizard"), /* @__PURE__ */ React.createElement("p", null, "Staff your projects in two easy steps")), renderStepIndicator(), /* @__PURE__ */ React.createElement("div", { className: "wizard-content" }, currentStep === 1 && /* @__PURE__ */ React.createElement("div", { className: "wizard-step-1" }, /* @__PURE__ */ React.createElement("div", { className: "step-header" }, /* @__PURE__ */ React.createElement("h2", null, "Select a Project to Staff"), /* @__PURE__ */ React.createElement("p", null, "Choose which project needs help")), /* @__PURE__ */ React.createElement("div", { className: "wizard-controls" }, /* @__PURE__ */ React.createElement("div", { className: "search-box" }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "Search projects...",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        className: "search-input"
      }
    ), searchTerm && /* @__PURE__ */ React.createElement("button", { className: "search-clear", onClick: () => setSearchTerm("") }, "\xD7")), /* @__PURE__ */ React.createElement("div", { className: "sort-controls" }, /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${sortBy === "priority" ? "active" : ""}`, onClick: () => setSortBy("priority") }, "Priority"), /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${sortBy === "category" ? "active" : ""}`, onClick: () => setSortBy("category") }, "Category"), /* @__PURE__ */ React.createElement("button", { className: `sort-btn ${sortBy === "alphabetical" ? "active" : ""}`, onClick: () => setSortBy("alphabetical") }, "A-Z"))), /* @__PURE__ */ React.createElement("div", { className: "project-list" }, filteredProjects.length === 0 && unstaffedProjects.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F389}"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, "All projects are staffed!"), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "You can unstaff projects to make changes")), filteredProjects.length === 0 && unstaffedProjects.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "empty-state" }, /* @__PURE__ */ React.createElement("div", { className: "empty-icon" }, "\u{1F50D}"), /* @__PURE__ */ React.createElement("div", { className: "empty-message" }, 'No projects match "', searchTerm, '"'), /* @__PURE__ */ React.createElement("div", { className: "empty-hint" }, "Try different keywords or clear search")), filteredProjects.map((project) => renderProjectCard(project, handleSelectProject)))), currentStep === 2 && selectedProject && /* @__PURE__ */ React.createElement("div", { className: "wizard-step-2" }, /* @__PURE__ */ React.createElement("div", { className: "selected-project-header" }, /* @__PURE__ */ React.createElement("div", { className: "header-label" }, "Staffing:"), /* @__PURE__ */ React.createElement("div", { className: "header-project" }, /* @__PURE__ */ React.createElement("span", { className: `priority-badge ${selectedProject.priority}` }, selectedProject.priority.toUpperCase()), /* @__PURE__ */ React.createElement("span", { className: "project-title" }, selectedProject.title)), /* @__PURE__ */ React.createElement("button", { className: "back-btn", onClick: handleBack }, "\u2190 Change Project")), /* @__PURE__ */ React.createElement("div", { className: "help-description-section" }, /* @__PURE__ */ React.createElement("label", { className: "help-label" }, "What help do you need with this project? (optional)"), /* @__PURE__ */ React.createElement(
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
    )))), filteredAgents.map((agent) => renderAgentCard(agent))))), successMessage && /* @__PURE__ */ React.createElement("div", { className: "success-banner" }, /* @__PURE__ */ React.createElement("span", null, successMessage))), /* @__PURE__ */ React.createElement("div", { className: "wizard-navigation" }, currentStep > 1 && /* @__PURE__ */ React.createElement("button", { className: "nav-btn back-btn", onClick: handleBack }, "\u2190 Back"), /* @__PURE__ */ React.createElement("button", { className: "nav-btn cancel-btn", onClick: handleCancel }, "Cancel"))));
  };
  const App = () => {
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
    const [status, setStatus] = React.useState("Ready.");
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
      if (chapter === 7) return /* @__PURE__ */ React.createElement(RosterRoom, null);
      return /* @__PURE__ */ React.createElement(LifeMap, { table });
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "nav" }, /* @__PURE__ */ React.createElement("div", { className: "nav-links" }, /* @__PURE__ */ React.createElement("a", { className: chapter === 1 ? "active" : "", onClick: () => setChapter(1) }, "Drafting Room"), /* @__PURE__ */ React.createElement("a", { className: chapter === 2 ? "active" : "", onClick: () => setChapter(2) }, "Sorting Room"), /* @__PURE__ */ React.createElement("a", { className: chapter === 7 ? "active" : "", onClick: () => setChapter(7) }, "Roster Room"), /* @__PURE__ */ React.createElement("a", { className: chapter === 0 ? "active" : "", onClick: () => setChapter(0) }, "Life Map")), /* @__PURE__ */ React.createElement("div", { className: "pill" }, "Jess \xB7 Director")), /* @__PURE__ */ React.createElement("div", { className: "shell" }, screen()), /* @__PURE__ */ React.createElement(TableBar, { table }));
  };
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(/* @__PURE__ */ React.createElement(App, null));
})();
