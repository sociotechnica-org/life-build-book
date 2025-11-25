const React = window.React;
const ReactDOM = window.ReactDOM;

    const categories = {
      home: { name: 'Home', color: 'var(--home)' },
      finances: { name: 'Finances', color: 'var(--finances)' },
      health: { name: 'Health', color: 'var(--health)' },
    };

    const initialTasks = {
      todo: ['Deep clean interior', 'Research pricing', 'Repair cabinet latch', 'Write listing draft'],
      doing: [],
      review: [],
      done: [],
    };

    const BRONZE_TABLE_LIMIT = 10;

    const cloneData = (value) => JSON.parse(JSON.stringify(value));

    const DEFAULT_GOLD_QUEUE = [
      {
        title: 'Sell Camper Van',
        meta: 'Finances · Gold · Crisis',
        category: 'finances',
        progress: 0.18,
        stage: 'Stage 4 · Plans final',
        status: 'Crisis trigger',
        focus: '2-week sprint',
      },
      {
        title: 'Build Backyard Deck',
        meta: 'Home · Gold · 50%',
        category: 'home',
        progress: 0.5,
        stage: 'Stage 3 · Materials ready',
        status: 'Weather window in June',
      },
      {
        title: 'Atlanta Studio Launch',
        meta: 'Finances · Gold · 22%',
        category: 'finances',
        progress: 0.22,
        stage: 'Stage 2 · Drafting',
        status: 'Sponsor pitch next week',
      },
      {
        title: 'Osaka Retreat Refresh',
        meta: 'Home · Gold · 12%',
        category: 'home',
        progress: 0.12,
        stage: 'Stage 2 · Drafting',
        status: 'Design board ready',
      },
    ];

    const DEFAULT_SILVER_QUEUE = [
      {
        title: 'Mortgage Refinance',
        meta: 'Finances · Silver · 18%',
        category: 'finances',
        progress: 0.18,
        stage: 'Stage 2 · Drafting',
        status: 'Rate watch',
        focus: 'Docs prep',
      },
      {
        title: 'Automate Monthly Budget Review',
        meta: 'Finances · Silver · 42%',
        category: 'finances',
        progress: 0.42,
        stage: 'Stage 3 · Ready',
        status: 'Needs 30-min block',
      },
      {
        title: 'Family Travel Insurance Hub',
        meta: 'Health · Silver · 10%',
        category: 'health',
        progress: 0.1,
        stage: 'Stage 1 · Intake',
        status: 'Collect policies',
      },
      {
        title: 'House Maintenance Calendar',
        meta: 'Home · Silver · 28%',
        category: 'home',
        progress: 0.28,
        stage: 'Stage 2 · Drafting',
        status: 'Waiting on vendor list',
      },
    ];

    const DEFAULT_BRONZE_QUEUE = [
      { title: 'Fix leaky kitchen faucet', meta: 'Home · Bronze · 45 min', stage: 'Care task', energy: 'Quick win' },
      { title: 'Touch up paint in hallway', meta: 'Home · Bronze · 1 hr', stage: 'Care task', energy: 'Low focus' },
      { title: 'Swap HVAC filter', meta: 'Home · Bronze · 10 min', stage: 'Care task', energy: 'Maintenance' },
      { title: 'Clean out camper gear bin', meta: 'Home · Bronze · 30 min', stage: 'Care task', energy: 'Low focus' },
      { title: 'Donate old clothes', meta: 'Home · Bronze · 1 trip', stage: 'Care task', energy: 'Weekend errand' },
      { title: 'Back up family photos', meta: 'Home · Bronze · 40 min', stage: 'Care task', energy: 'Laptop task' },
      { title: 'Order pantry staples', meta: 'Home · Bronze · 15 min', stage: 'Care task', energy: 'Laptop task' },
      { title: 'Schedule gutter cleaning', meta: 'Home · Bronze · 5 min', stage: 'Care task', energy: 'Call / text' },
      { title: 'Replace broken porch bulb', meta: 'Home · Bronze · 5 min', stage: 'Care task', energy: 'Quick win' },
      { title: 'Update camper insurance card', meta: 'Finances · Bronze · 20 min', stage: 'Care task', energy: 'Laptop task' },
      { title: 'Sharpen kitchen knives', meta: 'Home · Bronze · 30 min', stage: 'Queue', energy: 'Weekend errand' },
      { title: 'Reset Wi-Fi passwords', meta: 'Home · Bronze · 30 min', stage: 'Queue', energy: 'Laptop task' },
      { title: 'Mail birthday cards', meta: 'Home · Bronze · 20 min', stage: 'Queue', energy: 'Low focus' },
      { title: 'Organize glove box', meta: 'Home · Bronze · 15 min', stage: 'Queue', energy: 'Car errand' },
    ];

    const getBronzeTableSummary = (list) => {
      if (!list.length) return { title: 'No Bronze cards', meta: 'Queue open' };
      const tabledCount = Math.min(BRONZE_TABLE_LIMIT, list.length);
      const remaining = Math.max(tabledCount - 1, 0);
      return {
        title: list[0].title,
        meta: remaining ? `+${remaining} tabled` : 'Queue open',
      };
    };

    const DEFAULT_GOLD_TABLE = {
      title: 'Launch Consulting',
      meta: 'Finances · Gold · 60%',
      category: 'finances',
      progress: 0.6,
      stage: 'Stage 4 · Build',
      status: 'On Table',
    };

    const DEFAULT_SILVER_TABLE = {
      title: 'Set Up Automated Prescription Delivery',
      meta: 'Health · Silver · 71%',
      category: 'health',
      progress: 0.71,
      stage: 'Stage 4 · Running',
      status: 'System live',
    };

    const automationBadges = {
      ai: { icon: '🤖', label: 'AI Delegated' },
      service: { icon: '📅', label: 'Scheduled Service' },
      system: { icon: '⚙️', label: 'Self-Running System' },
    };

    const DEFAULT_PLANTED_PROJECTS = {
      home: [
        {
          title: 'Lawn Care Service',
          status: 'Delegated to Service - Active',
          automation: 'service',
          statusDetail: 'Next scheduled: Tue · 7:30am',
          attention: 'soon',
        },
        {
          title: 'HVAC Maintenance Contract',
          status: 'Delegated to Service - Scheduled',
          automation: 'service',
          statusDetail: 'Next scheduled: Jul 15',
          attention: 'idle',
        },
        {
          title: 'House Cleaning Service',
          status: 'Delegated to Service - Active',
          automation: 'service',
          statusDetail: 'Next scheduled: May 10',
          attention: 'soon',
        },
        {
          title: 'Grocery Delivery Subscription',
          status: 'Ongoing Service - Running',
          automation: 'service',
          statusDetail: 'Next delivery: May 3 · 8-10am',
          attention: 'soon',
        },
      ],
      finances: [
        {
          title: 'Automated Bill Payment System',
          status: 'Ongoing System - Running',
          automation: 'system',
          statusDetail: 'Last review: Apr 1',
          attention: 'idle',
        },
        {
          title: 'Retirement Contributions',
          status: 'Ongoing System - Running',
          automation: 'system',
          statusDetail: 'Next increase review: Jan 5',
          attention: 'idle',
        },
        {
          title: 'Credit Card Rewards Optimization',
          status: 'Delegated to AI - Active',
          automation: 'ai',
          statusDetail: 'Last sync: 1 hour ago',
          attention: 'soon',
        },
        {
          title: 'Tax Document Organization',
          status: 'Ongoing System - Running',
          automation: 'system',
          statusDetail: 'Last sweep: 2 days ago',
          attention: 'idle',
        },
        {
          title: 'Insurance Policy Review Calendar',
          status: 'Ongoing System - Scheduled',
          automation: 'system',
          statusDetail: 'Next scheduled: Aug 1',
          attention: 'idle',
        },
      ],
      health: [
        {
          title: 'Prescription Delivery Concierge',
          status: 'Delegated to Service - Active',
          automation: 'service',
          statusDetail: 'Next delivery: Apr 28',
          attention: 'soon',
        },
        {
          title: 'Biometric Trends Dashboard',
          status: 'Delegated to AI - Active',
          automation: 'ai',
          statusDetail: 'Last sync: overnight',
          attention: 'soon',
        },
        {
          title: 'Trainer Accountability Sessions',
          status: 'Delegated to Service - Active',
          automation: 'service',
          statusDetail: 'Next session: Thu · 6am',
          attention: 'soon',
        },
      ],
    };

    const getDefaultData = () => ({
      goldQueue: cloneData(DEFAULT_GOLD_QUEUE),
      silverQueue: cloneData(DEFAULT_SILVER_QUEUE),
      bronzeQueue: cloneData(DEFAULT_BRONZE_QUEUE),
      goldTable: cloneData(DEFAULT_GOLD_TABLE),
      silverTable: cloneData(DEFAULT_SILVER_TABLE),
      plantedProjects: cloneData(DEFAULT_PLANTED_PROJECTS),
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
      if (typeof window === 'undefined' || !window.LifeBuildData) {
        return getDefaultData();
      }

      try {
        const {
          projects,
          queues,
          seeds,
          bronzeQueue,
          plantedProjects,
          rosterAssignments,
        } = window.LifeBuildData;

        const cloneProject = (id) => (projects?.[id] ? { ...projects[id] } : null);
        const hydrateQueue = (ids = []) => (Array.isArray(ids) ? ids.map(cloneProject).filter(Boolean) : []);

        const goldQueue = hydrateQueue(queues?.gold);
        const silverQueue = hydrateQueue(queues?.silver);
        const bronzeQueueData = Array.isArray(bronzeQueue) ? bronzeQueue.map((card) => ({ ...card })) : [];
        const goldTable = cloneProject(seeds?.goldTable);
        const silverTable = cloneProject(seeds?.silverTable);
        const planted = plantedProjects || rosterAssignments;

        const defaults = getDefaultData();

        return {
          goldQueue: goldQueue.length ? goldQueue : defaults.goldQueue,
          silverQueue: silverQueue.length ? silverQueue : defaults.silverQueue,
          bronzeQueue: bronzeQueueData.length ? bronzeQueueData : defaults.bronzeQueue,
          goldTable: goldTable || defaults.goldTable,
          silverTable: silverTable || defaults.silverTable,
          plantedProjects: planted ? cloneData(planted) : defaults.plantedProjects,
        };
      } catch (error) {
        console.warn('Failed to hydrate LifeBuildData:', error);
        return getDefaultData();
      }
    };

    const {
      goldQueue: initialGoldQueue,
      silverQueue: initialSilverQueue,
      bronzeQueue: initialBronzeQueue,
      goldTable: goldTableSeed,
      silverTable: silverTableSeed,
      plantedProjects,
    } = hydrateLifeBuildData();

    const bronzeStacks = buildBronzeStacks(initialBronzeQueue);

    const TableBar = ({ table }) => {
      // Load Roster Room projects to show agent assignments
      const [rosterProjects, setRosterProjects] = React.useState([]);

      const loadRosterProjects = React.useCallback(() => {
        try {
          const stored = localStorage.getItem('rosterRoom_projects');
          if (stored) {
            const projects = JSON.parse(stored);
            setRosterProjects(projects.filter(p => p.staffing.assigned && p.status === 'active'));
          }
        } catch (error) {
          console.warn('Failed to load roster projects:', error);
        }
      }, []);

      React.useEffect(() => {
        loadRosterProjects();

        // Listen for custom roster update events
        const handleRosterUpdate = () => loadRosterProjects();
        window.addEventListener('rosterUpdated', handleRosterUpdate);

        return () => {
          window.removeEventListener('rosterUpdated', handleRosterUpdate);
        };
      }, [loadRosterProjects]);

      // Find staffed agent for table projects
      const goldStaffing = rosterProjects.find(p => p.title === table.gold.title);
      const silverStaffing = rosterProjects.find(p => p.title === table.silver.title);

      return (
        <div className="table-bar">
          <div className="table-grid">
            <div className="slot" style={{ borderColor: 'rgba(216,166,80,0.6)', background: 'linear-gradient(145deg, rgba(216,166,80,0.12), #fff)' }}>
              <h4>Gold</h4>
              <div className="body">{table.gold.title || 'Empty'}</div>
              <div className="meta">
                {table.gold.meta}
                {goldStaffing && ` · 👤 ${goldStaffing.staffing.agentName}`}
              </div>
              {table.gold.progress !== undefined && (
                <div className="progress" style={{ marginTop: '0.4rem' }}>
                  <div className="bar" style={{ width: `${Math.round((table.gold.progress || 0) * 100)}%`, background: 'var(--gold)' }}></div>
                </div>
              )}
            </div>
            <div className="slot" style={{ borderColor: 'rgba(197,206,216,0.7)', background: 'linear-gradient(145deg, rgba(197,206,216,0.14), #fff)' }}>
              <h4>Silver</h4>
              <div className="body">{table.silver.title || 'Empty'}</div>
              <div className="meta">
                {table.silver.meta}
                {silverStaffing && ` · 👤 ${silverStaffing.staffing.agentName}`}
              </div>
              {table.silver.progress !== undefined && (
                <div className="progress" style={{ marginTop: '0.4rem' }}>
                  <div className="bar" style={{ width: `${Math.round((table.silver.progress || 0) * 100)}%`, background: 'var(--silver)' }}></div>
                </div>
              )}
            </div>
            <div className="slot" style={{ borderColor: 'rgba(196,139,90,0.7)', background: 'linear-gradient(145deg, rgba(196,139,90,0.12), #fff)' }}>
              <h4>Bronze</h4>
              <div className="body">{table.bronze.title}</div>
              <div className="meta">{table.bronze.meta}</div>
            </div>
          </div>
        </div>
      );
    };

    const LifeMap = ({ table }) => {
      const catList = ['home', 'finances', 'health'];

      // Load Roster Room projects to show agent assignments
      const [rosterProjects, setRosterProjects] = React.useState([]);

      const loadRosterProjects = React.useCallback(() => {
        try {
          const stored = localStorage.getItem('rosterRoom_projects');
          if (stored) {
            const projects = JSON.parse(stored);
            // Filter for all staffed projects (both active on table and ongoing)
            setRosterProjects(projects.filter(p => p.staffing.assigned));
          }
        } catch (error) {
          console.warn('Failed to load roster projects:', error);
        }
      }, []);

      React.useEffect(() => {
        loadRosterProjects();

        // Listen for custom roster update events
        const handleRosterUpdate = () => loadRosterProjects();
        window.addEventListener('rosterUpdated', handleRosterUpdate);

        return () => {
          window.removeEventListener('rosterUpdated', handleRosterUpdate);
        };
      }, [loadRosterProjects]);

      return (
        <div className="card">
          <div className="map-grid">
            {catList.map((id) => {
              const cat = categories[id];
              if (!cat) return null;
              return (
                <div key={id} className="cat" style={{ borderColor: cat.color }}>
                  <h3><span style={{ color: cat.color }}>●</span> {cat.name}</h3>
                  <div className="count">Active</div>
                  <div className="active-wrap">
                    {table.gold && table.gold.category === id && (() => {
                      // Check if this project is staffed with an agent
                      const staffedProject = rosterProjects.find(p =>
                        p.title === table.gold.title && p.status === 'active'
                      );
                      return (
                        <div className="project">
                          <div className="title">{table.gold.title}</div>
                          <div className="meta">
                            {table.gold.meta}
                            {staffedProject && ` · 👤 ${staffedProject.staffing.agentName}`}
                          </div>
                          {table.gold.progress >= 0 && (
                            <div className="progress">
                              <div className="bar" style={{ width: `${Math.round((table.gold.progress || 0) * 100)}%`, background: cat.color }}></div>
                            </div>
                          )}
                        </div>
                      );
                    })()}
                    {table.silver && table.silver.category === id && (() => {
                      // Check if this project is staffed with an agent
                      const staffedProject = rosterProjects.find(p =>
                        p.title === table.silver.title && p.status === 'active'
                      );
                      return (
                        <div className="project">
                          <div className="title">{table.silver.title}</div>
                          <div className="meta">
                            {table.silver.meta}
                            {staffedProject && ` · 👤 ${staffedProject.staffing.agentName}`}
                          </div>
                          <div className="progress">
                            <div className="bar" style={{ width: `${Math.round(table.silver.progress * 100)}%`, background: cat.color }}></div>
                          </div>
                        </div>
                      );
                    })()}
                    {bronzeStacks[id] && (
                      <div className="project">
                        <div className="title">{bronzeStacks[id].top}</div>
                        <div className="meta">Bronze stack · +{bronzeStacks[id].extra} more</div>
                      </div>
                    )}
                  </div>
                  {(plantedProjects[id]?.length || rosterProjects.filter(p => p.category === id && p.status === 'ongoing').length) ? (
                    <>
                      <div className="planted-label">Ongoing</div>
                      <div className="planted-grid">
                        {/* Roster Room staffed projects (ongoing only) */}
                        {rosterProjects.filter(p => p.category === id && p.status === 'ongoing').map((project) => {
                          return (
                            <div
                              key={project.id}
                              className="planted-card"
                              data-automation="ai"
                              data-attention="idle"
                            >
                              <div className="planted-top">
                                <span className="planted-badge">
                                  <span>👤</span>
                                  <span>Agent Staffed</span>
                                </span>
                              </div>
                              <div className="planted-title">{project.title}</div>
                              <div className="planted-line schedule">Staffed: {project.staffing.agentName}</div>
                            </div>
                          );
                        })}
                        {/* Original planted projects */}
                        {plantedProjects[id]?.map((project) => {
                          const badge = automationBadges[project.automation] || automationBadges.system;
                          return (
                            <div
                              key={project.title}
                              className="planted-card"
                              data-automation={project.automation}
                              data-attention={project.attention || 'idle'}
                            >
                              <div className="planted-top">
                                <span className="planted-badge">
                                  <span>{badge.icon}</span>
                                  <span>{badge.label}</span>
                                </span>
                              </div>
                              <div className="planted-title">{project.title}</div>
                              <div className="planted-line schedule">{project.statusDetail || project.status}</div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    const DraftingRoom = () => (
      <div className="card">
        <div className="project" style={{ borderColor: 'var(--gold)', boxShadow: '0 12px 26px rgba(216,166,80,0.2)' }}>
          <div className="title">Sell Camper Van</div>
          <div className="meta">Gold Candidate · Plans done · Crisis trigger</div>
          <ul style={{ marginTop: '0.4rem', paddingLeft: '1rem', color: 'var(--muted)', fontSize: '0.95rem' }}>
            <li>Clean + photo professionally</li>
            <li>List on 3 platforms</li>
            <li>Sell & transfer title in 3 weeks</li>
          </ul>
        </div>
        <div className="project" style={{ marginTop: '0.7rem' }}>
          <div className="title">Launch Consulting</div>
          <div className="meta">Current Gold · 60% · Will pause if swapped</div>
        </div>
      </div>
    );

    const SortingRoom = ({ state }) => {
      const laneConfig = [
        {
          id: 'gold',
          label: 'Gold * Expansion',
          color: 'var(--gold)',
          queue: state.goldQueue,
          table: state.table.gold,
          activate: state.activateGold,
        },
        {
          id: 'silver',
          label: 'Silver * Capacity',
          color: 'var(--silver)',
          queue: state.silverQueue,
          table: state.table.silver,
          activate: state.activateSilver,
        },
      ];
      const bronzeTabled = state.bronzeQueue.slice(0, state.bronzeLimit);
      const bronzeWaiting = state.bronzeQueue.slice(state.bronzeLimit);
      return (
        <div className="card sorting-room">
          <div className="sorting-header">
            <div className="sorting-banner">
              <span className="pulse-dot"></span>
              <span>{state.status}</span>
            </div>
          </div>
          <div className="queue-grid">
            {laneConfig.map((lane) => (
              <div key={lane.id} className="queue-column" data-lane={lane.id}>
                <div className="lane-head">
                  <div className="lane-info">
                    <span className="lane-dot" style={{ background: lane.color }}></span>
                    <div>
                      <div className="lane-label">{lane.label}</div>
                      <div className="lane-desc">{lane.queue.length} waiting in queue</div>
                    </div>
                  </div>
                  <button className="pill-btn ghost" onClick={() => state.toggleQueue(lane.id)}>
                    {state.openQueue === lane.id ? 'Hide queue' : 'Expand queue'}
                  </button>
                </div>
                <div className="lane-table-card" data-lane={lane.id}>
                  <div className="card-label">On Table</div>
                  <div className="lane-title-main">{lane.table.title}</div>
                  <div className="lane-meta">{lane.table.meta}</div>
                  {lane.table.progress !== undefined && (
                    <div className="mini-progress">
                      <div className="mini-bar" style={{ width: `${Math.round((lane.table.progress || 0) * 100)}%`, background: lane.color }}></div>
                    </div>
                  )}
                </div>
                {state.openQueue === lane.id && (
                  <div className="queue-body">
                    {lane.queue.map((card, idx) => (
                      <div key={card.title} className="priority-card">
                        <div className="priority-rank">#{idx + 1}</div>
                        <div className="priority-copy">
                          <div className="priority-title">{card.title}</div>
                          <div className="priority-meta">{card.meta}</div>
                          <div className="priority-tags">
                            {card.stage && <span className="chip">{card.stage}</span>}
                            {card.status && <span className="chip muted">{card.status}</span>}
                            {card.focus && <span className="chip outline">{card.focus}</span>}
                          </div>
                        </div>
                        <div className="priority-actions">
                          <button className="pill-btn ghost" onClick={() => state.nudgeQueue(lane.id, idx, -1)} disabled={idx === 0}>Move up</button>
                          <button className="pill-btn ghost" onClick={() => state.nudgeQueue(lane.id, idx, 1)} disabled={idx === lane.queue.length - 1}>Move down</button>
                          <button className="pill-btn" onClick={() => lane.activate(card.title)}>Activate to Table</button>
                        </div>
                      </div>
                    ))}
                    {!lane.queue.length && (
                      <div className="empty-note">Queue clear. Head to Drafting Room to add new cards.</div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="queue-column" data-lane="bronze">
              <div className="lane-head">
                <div className="lane-info">
                  <span className="lane-dot" style={{ background: 'var(--bronze)' }}></span>
                  <div>
                    <div className="lane-label">Bronze * Execution</div>
                    <div className="lane-desc">{bronzeTabled.length} tabled · {bronzeWaiting.length} queued</div>
                  </div>
                </div>
                <button className="pill-btn ghost" onClick={() => state.toggleQueue('bronze')}>
                  {state.openQueue === 'bronze' ? 'Hide queue' : 'Expand queue'}
                </button>
              </div>
              <div className="lane-table-card" data-lane="bronze">
                <div className="card-label">On Table</div>
                <div className="lane-title-main">{state.table.bronze.title}</div>
                <div className="lane-meta">{state.table.bronze.meta}</div>
              </div>
              {state.openQueue === 'bronze' && (
                <div className="queue-body">
                  <div className="queue-section-title">Tabled ({bronzeTabled.length}/{state.bronzeLimit})</div>
                  {bronzeTabled.map((card, idx) => (
                    <div key={card.title} className="priority-card tabled">
                      <div className="priority-rank">#{idx + 1}</div>
                      <div className="priority-copy">
                        <div className="priority-title">{card.title}</div>
                        <div className="priority-meta">{card.meta}</div>
                        <div className="priority-tags">
                          {card.stage && <span className="chip">{card.stage}</span>}
                          {card.energy && <span className="chip muted">{card.energy}</span>}
                        </div>
                      </div>
                      <div className="priority-actions">
                        <button className="pill-btn ghost" onClick={() => state.nudgeBronze(idx, -1)} disabled={idx === 0}>Move up</button>
                        <button className="pill-btn ghost" onClick={() => state.nudgeBronze(idx, 1)} disabled={idx === bronzeTabled.length - 1 && !bronzeWaiting.length}>Move down</button>
                        <button className="pill-btn" onClick={() => state.releaseBronze(idx)}>Release to Queue</button>
                      </div>
                    </div>
                  ))}
                  <div className="queue-section-title">Queue ({bronzeWaiting.length})</div>
                  {bronzeWaiting.map((card, idx) => (
                    <div key={card.title} className="priority-card idle">
                      <div className="priority-rank">#{state.bronzeLimit + idx + 1}</div>
                      <div className="priority-copy">
                        <div className="priority-title">{card.title}</div>
                        <div className="priority-meta">{card.meta}</div>
                        <div className="priority-tags">
                          {card.stage && <span className="chip">{card.stage}</span>}
                          {card.energy && <span className="chip muted">{card.energy}</span>}
                        </div>
                      </div>
                      <div className="priority-actions">
                        <button className="pill-btn ghost" onClick={() => state.nudgeBronze(state.bronzeLimit + idx, -1)} disabled={state.bronzeLimit + idx === state.bronzeLimit}>Move up</button>
                        <button className="pill-btn ghost" onClick={() => state.nudgeBronze(state.bronzeLimit + idx, 1)} disabled={state.bronzeLimit + idx === state.bronzeQueue.length - 1}>Move down</button>
                        <button className="pill-btn" onClick={() => state.tableBronze(state.bronzeLimit + idx)}>Table this card</button>
                      </div>
                    </div>
                  ))}
                  {!bronzeWaiting.length && <div className="empty-note">Queue clear. Load more from Drafting Room.</div>}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };

    const ActivationMap = ({ state }) => (
      <div className="card">
        <div className="map-grid">
          <div className="cat" style={{ borderColor: categories.finances.color }}>
            <h3><span style={{ color: categories.finances.color }}>●</span> Finances</h3>
            <div className="project pulse">
              <div className="title">{state.table.gold.title}</div>
              <div className="meta">Gold · On Table & in Finances</div>
            </div>
            <div className="project">
              <div className="title">Automate Monthly Budget Review</div>
              <div className="meta">Silver candidate</div>
            </div>
          </div>
          <div className="cat" style={{ borderColor: categories.home.color }}>
            <h3><span style={{ color: categories.home.color }}>●</span> Home</h3>
            <div className="project">
              <div className="title">Build Backyard Deck</div>
              <div className="meta">In Gold queue · 50%</div>
            </div>
            <div className="project">
              <div className="title">Plan Family Camping Trip</div>
              <div className="meta">Live · 33%</div>
            </div>
          </div>
        </div>
      </div>
    );

    const ProjectBoard = ({ state }) => {
      const moveTask = (from, to, task) => {
        state.setTasks((prev) => {
          const next = { ...prev, [from]: prev[from].filter(t => t !== task), [to]: [...prev[to], task] };
          const doneCount = next.done.length + next.review.length + next.doing.length;
          const progress = Math.min((doneCount / 12), 1);
          state.setCamperProgress(progress);
          return next;
        });
      };
      const clickTask = (from) => (task) => {
        if (from === 'todo') return moveTask('todo', 'doing', task);
        if (from === 'doing') return moveTask('doing', 'review', task);
        if (from === 'review') return moveTask('review', 'done', task);
      };
      const pct = Math.round(state.camperProgress * 100);
      return (
        <div className="card">
          <div className="kanban">
            {['todo','doing','review','done'].map((col) => (
              <div key={col} className="col">
                <h4>{col === 'todo' ? 'To-Do' : col === 'doing' ? 'Doing' : col === 'review' ? 'Review' : 'Done'}</h4>
                {state.tasks[col].map((task) => (
                  <div key={task} className="task" onClick={() => clickTask(col)(task)}>{task}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="progress-ring" style={{ '--pct': pct }} data-label={`${pct}%`}></div>
          <div className="status">
            <div className="dot"></div>
            <div>{pct >= 40 ? 'Momentum established · Buyers incoming' : 'First tasks in motion · keep pushing'}</div>
          </div>
        </div>
      );
    };

    const FinanceZoom = ({ state }) => (
      <div className="card">
        <div className="map-grid">
          <div className="cat" style={{ borderColor: categories.finances.color }}>
            <h3><span style={{ color: categories.finances.color }}>●</span> Finances</h3>
            <div className="project">
              <div className="title">Sell Camper Van</div>
              <div className="meta">{Math.round(state.camperProgress * 100)}% · Stage: {state.camperProgress >= 1 ? 'Decoration' : state.camperProgress >= 0.4 ? 'Polish' : 'Color Emergence'}</div>
              <div className="progress"><div className="bar" style={{ width: `${Math.round(state.camperProgress * 100)}%`, background: categories.finances.color }}></div></div>
            </div>
            <div className="project">
              <div className="title">Automate Monthly Budget Review</div>
              <div className="meta">Silver candidate</div>
            </div>
            <div className="project">
              <div className="title">Mortgage Refinance</div>
              <div className="meta">Queued</div>
            </div>
          </div>
        </div>
      </div>
    );

    const SortingReturn = ({ state }) => (
      <div className="card">
        <div className="map-grid">
          <div className="project" style={{ borderColor: 'var(--gold)', boxShadow: '0 12px 26px rgba(216,166,80,0.2)' }}>
            <div className="title">{state.table.gold.title === 'Sell Camper Van' ? 'Sell Camper Van' : 'Sell Camper Van'}</div>
            <div className="meta">Complete · Decoration stage</div>
          </div>
          <div className="project">
            <div className="title">Launch Consulting</div>
            <div className="meta">Gold Candidate · Paused at 60%</div>
            <div className="actions" style={{ marginTop: '0.5rem' }}>
              <button className="btn" onClick={state.reactivateConsulting}>Reactivate Consulting</button>
            </div>
          </div>
          <div className="project">
            <div className="title">Gold Queue</div>
            {state.goldQueue.map((item, idx) => (
              <div key={item.title} className="meta">{idx + 1}. {item.title}</div>
            ))}
          </div>
        </div>
      </div>
    );

    // ===== ROSTER ROOM MOCK DATA =====
    const MOCK_AGENTS = [
      {
        id: 'agent-1',
        name: 'Code Specialist',
        specialization: 'Software Development',
        description: 'Expert in full-stack development, debugging, and code optimization',
        capacity: { total: 3, used: 2, available: 1 },
        currentProjects: ['project-2', 'project-5'],
        avatar: '💻'
      },
      {
        id: 'agent-2',
        name: 'Research Agent',
        specialization: 'Information Gathering',
        description: 'Specialized in market research, data analysis, and competitive intelligence',
        capacity: { total: 4, used: 1, available: 3 },
        currentProjects: ['project-8'],
        avatar: '🔍'
      },
      {
        id: 'agent-3',
        name: 'Project Coordinator',
        specialization: 'Project Management',
        description: 'Handles scheduling, stakeholder communication, and project tracking',
        capacity: { total: 3, used: 3, available: 0 },
        currentProjects: ['project-1', 'project-3', 'project-7'],
        avatar: '📋'
      },
      {
        id: 'agent-4',
        name: 'Content Creator',
        specialization: 'Writing & Documentation',
        description: 'Creates documentation, blog posts, and marketing materials',
        capacity: { total: 3, used: 0, available: 3 },
        currentProjects: [],
        avatar: '✍️'
      },
      {
        id: 'agent-5',
        name: 'Operations Agent',
        specialization: 'Process & Automation',
        description: 'Optimizes workflows, sets up automations, and maintains systems',
        capacity: { total: 2, used: 1, available: 1 },
        currentProjects: ['project-6'],
        avatar: '⚙️'
      },
      {
        id: 'agent-6',
        name: 'Financial Analyst',
        specialization: 'Finance & Budgeting',
        description: 'Manages budgets, forecasting, and financial planning',
        capacity: { total: 3, used: 0, available: 3 },
        currentProjects: [],
        avatar: '💰'
      }
    ];

    const MOCK_PROJECTS = [
      {
        id: 'project-1',
        title: 'Sell Camper Van',
        description: 'List vehicle, handle inquiries, complete sale process',
        priority: 'gold',
        status: 'active',
        category: 'finances',
        staffing: { assigned: false, agentId: null, agentName: null }
      },
      {
        id: 'project-2',
        title: 'Launch Consulting Practice',
        description: 'Set up LLC, create service packages, initial marketing',
        priority: 'gold',
        status: 'ongoing',
        category: 'career',
        staffing: { assigned: true, agentId: 'agent-1', agentName: 'Code Specialist', helpDescription: null, assignedAt: Date.now() - 86400000 }
      },
      {
        id: 'project-3',
        title: 'Credit Card Rewards Optimization',
        description: 'Research best cards, track spending, maximize points',
        priority: 'gold',
        status: 'ongoing',
        category: 'finances',
        staffing: { assigned: true, agentId: 'agent-3', agentName: 'Project Coordinator', helpDescription: null, assignedAt: Date.now() - 172800000 }
      },
      {
        id: 'project-4',
        title: 'Home Gym Setup',
        description: 'Equipment research, space planning, installation',
        priority: 'silver',
        status: 'active',
        category: 'health',
        staffing: { assigned: false, agentId: null, agentName: null }
      },
      {
        id: 'project-5',
        title: 'Estate Planning',
        description: 'Will preparation, beneficiary updates, legal consultation',
        priority: 'silver',
        status: 'ongoing',
        category: 'finances',
        staffing: { assigned: true, agentId: 'agent-1', agentName: 'Code Specialist', helpDescription: null, assignedAt: Date.now() - 259200000 }
      },
      {
        id: 'project-6',
        title: 'Kitchen Renovation Planning',
        description: 'Budget development, contractor quotes, design decisions',
        priority: 'silver',
        status: 'ongoing',
        category: 'home',
        staffing: { assigned: true, agentId: 'agent-5', agentName: 'Operations Agent', helpDescription: null, assignedAt: Date.now() - 345600000 }
      },
      {
        id: 'project-7',
        title: 'Lawn Care Service Setup',
        description: 'Find providers, schedule seasonal maintenance',
        priority: 'bronze',
        status: 'active',
        category: 'home',
        staffing: { assigned: true, agentId: 'agent-3', agentName: 'Project Coordinator', helpDescription: null, assignedAt: Date.now() - 432000000 }
      },
      {
        id: 'project-8',
        title: 'Retirement Contributions Review',
        description: 'Annual 401k review, IRA optimization',
        priority: 'bronze',
        status: 'ongoing',
        category: 'finances',
        staffing: { assigned: true, agentId: 'agent-2', agentName: 'Research Agent', helpDescription: null, assignedAt: Date.now() - 518400000 }
      },
      {
        id: 'project-9',
        title: 'Meal Planning System',
        description: 'Weekly menu templates, grocery automation',
        priority: 'bronze',
        status: 'ongoing',
        category: 'health',
        staffing: { assigned: false, agentId: null, agentName: null }
      },
      {
        id: 'project-10',
        title: 'Car Maintenance Schedule',
        description: 'Track service intervals, schedule appointments',
        priority: 'bronze',
        status: 'ongoing',
        category: 'home',
        staffing: { assigned: false, agentId: null, agentName: null }
      }
    ];

    // ===== ROSTER ROOM COMPONENTS =====
    const RosterRoom = () => {
      // Load initial state from localStorage or use defaults
      const loadFromStorage = (key, defaultValue) => {
        try {
          const item = localStorage.getItem(key);
          return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
          console.warn('Failed to load from localStorage:', error);
          return defaultValue;
        }
      };

      // Wizard state
      const [currentStep, setCurrentStep] = React.useState(1); // 1, 2, or 3
      const [selectedProject, setSelectedProject] = React.useState(null);
      const [helpDescription, setHelpDescription] = React.useState('');
      const [selectedAgent, setSelectedAgent] = React.useState(null);

      // Data state
      const [projects, setProjects] = React.useState(() => loadFromStorage('rosterRoom_projects', MOCK_PROJECTS));
      const [agents, setAgents] = React.useState(() => loadFromStorage('rosterRoom_agents', MOCK_AGENTS));

      // UI state
      const [searchTerm, setSearchTerm] = React.useState('');
      const [projectSortBy, setProjectSortBy] = React.useState('priority');
      const [reviewSortBy, setReviewSortBy] = React.useState('priority');
      const [agentFilter, setAgentFilter] = React.useState('all');
      const [isCreatingAgent, setIsCreatingAgent] = React.useState(false);
      const blankAgentForm = () => ({
        name: '',
        specialization: '',
        description: '',
        capacity: '3'
      });
      const [agentForm, setAgentForm] = React.useState(blankAgentForm);
      const [agentFormErrors, setAgentFormErrors] = React.useState({});
      const [successMessage, setSuccessMessage] = React.useState('');
      const [expandedAgentId, setExpandedAgentId] = React.useState(null);
      const [expandedStaffedProjectId, setExpandedStaffedProjectId] = React.useState(null);
      const [recentAssignmentId, setRecentAssignmentId] = React.useState(null);
      const PRIORITY_ORDER = { gold: 1, silver: 2, bronze: 3 };
      const STATUS_ORDER = { active: 1, ongoing: 2 };
      const CATEGORY_ICONS = {
        finances: '💰',
        health: '❤️',
        home: '🏠',
        career: '💼'
      };


      // Save to localStorage whenever projects or agents change
      React.useEffect(() => {
        try {
          localStorage.setItem('rosterRoom_projects', JSON.stringify(projects));
        } catch (error) {
          console.warn('Failed to save projects to localStorage:', error);
        }
      }, [projects]);

      React.useEffect(() => {
        try {
          localStorage.setItem('rosterRoom_agents', JSON.stringify(agents));
        } catch (error) {
          console.warn('Failed to save agents to localStorage:', error);
        }
      }, [agents]);

      React.useEffect(() => {
        if (!recentAssignmentId) return;
        const timer = setTimeout(() => setRecentAssignmentId(null), 3500);
        return () => clearTimeout(timer);
      }, [recentAssignmentId]);

      // Get unstaffed projects (for Step 1)
      const unstaffedProjects = React.useMemo(() => {
        return projects.filter(p => !p.staffing.assigned);
      }, [projects]);

      // Get staffed projects (for Step 3)
      const staffedProjects = React.useMemo(() => {
        return projects.filter(p => p.staffing.assigned);
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
        return sortProjectsList(staffedProjects, 'priority', { allowAgentSort: true });
      }, [staffedProjects]);

      // Filter projects by search
      const filteredProjects = React.useMemo(() => {
        if (!searchTerm) return sortedUnstaffedProjects;
        const term = searchTerm.toLowerCase();
        return sortedUnstaffedProjects.filter(p =>
          p.title.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
        );
      }, [sortedUnstaffedProjects, searchTerm]);

      // Filter agents by availability
      const filteredAgents = React.useMemo(() => {
        let filtered = [...agents];

        if (agentFilter === 'available') {
          filtered = filtered.filter(a => a.capacity.available > 0);
        } else if (agentFilter === 'partial') {
          filtered = filtered.filter(a => a.capacity.available > 0 && a.capacity.used > 0);
        }

        return filtered;
      }, [agents, agentFilter]);

      const sortProjectsList = (list, criteria, { allowAgentSort = false } = {}) => {
        const sorted = [...list];

        if (criteria === 'priority') {
          sorted.sort((a, b) => {
            if (PRIORITY_ORDER[a.priority] !== PRIORITY_ORDER[b.priority]) {
              return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
            }
            return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
          });
        } else if (criteria === 'category') {
          sorted.sort((a, b) => {
            if (a.category === b.category) {
              return a.title.localeCompare(b.title);
            }
            return a.category.localeCompare(b.category);
          });
        } else if (criteria === 'alphabetical') {
          sorted.sort((a, b) => a.title.localeCompare(b.title));
        } else if (criteria === 'agent' && allowAgentSort) {
          sorted.sort((a, b) => {
            const agentA = (a.staffing?.agentName || '').toLowerCase();
            const agentB = (b.staffing?.agentName || '').toLowerCase();
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
        setAgentForm((prev) => ({ ...prev, [field]: value }));
        if (agentFormErrors[field]) {
          setAgentFormErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
          });
        }
      };

      const getAgentAvatar = (text = '') => {
        const normalized = text.toLowerCase();
        if (normalized.includes('finance') || normalized.includes('money') || normalized.includes('budget')) return '💰';
        if (normalized.includes('market') || normalized.includes('brand') || normalized.includes('growth')) return '📣';
        if (normalized.includes('ops') || normalized.includes('system') || normalized.includes('process')) return '🛠️';
        if (normalized.includes('health') || normalized.includes('wellness') || normalized.includes('care')) return '🌿';
        if (normalized.includes('home') || normalized.includes('family')) return '🏡';
        if (normalized.includes('content') || normalized.includes('writing') || normalized.includes('copy')) return '📝';
        if (normalized.includes('design') || normalized.includes('creative')) return '🎨';
        return '🤖';
      };

      const validateAgentForm = () => {
        const errors = {};
        if (!agentForm.name.trim()) {
          errors.name = 'Give your agent a name';
        }
        if (!agentForm.specialization.trim()) {
          errors.specialization = 'Describe their specialty';
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

        setAgents(prev => [newAgent, ...prev]);

        if (currentStep === 2 && selectedProject) {
          handleAssignAgent(newAgent);
          return;
        }

        setSelectedAgent(newAgent);
        setSuccessMessage(`✓ ${newAgent.name} added to roster`);
        setTimeout(() => setSuccessMessage(''), 3000);
        closeAgentForm();
      };

      // Wizard navigation handlers
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
          setHelpDescription('');
          setSelectedAgent(null);
          setCurrentStep(1);
        }
      };

      const handleCancel = () => {
        closeAgentForm();
        setCurrentStep(1);
        setSelectedProject(null);
        setHelpDescription('');
        setSelectedAgent(null);
        setSearchTerm('');
      };

      const handleStaffAnother = () => {
        closeAgentForm();
        setSelectedProject(null);
        setHelpDescription('');
        setSelectedAgent(null);
        setSearchTerm('');
        setProjectSortBy('priority');
        setReviewSortBy('priority');
        setCurrentStep(1);
      };

      // Staff Project Action
      const handleAssignAgent = (agentToAssign) => {
        const agent = agentToAssign || selectedAgent;
        if (!selectedProject || !agent) return;

        // Update project with agent assignment
        setProjects(prevProjects =>
          prevProjects.map(p =>
            p.id === selectedProject.id
              ? {
                  ...p,
                  staffing: {
                    assigned: true,
                    agentId: agent.id,
                    agentName: agent.name,
                    helpDescription: helpDescription,
                    assignedAt: Date.now()
                  }
                }
              : p
          )
        );

        // Update agent capacity
        setAgents(prevAgents =>
          prevAgents.map(a =>
            a.id === agent.id
              ? {
                  ...a,
                  capacity: {
                    ...a.capacity,
                    used: a.capacity.used + 1,
                    available: a.capacity.available - 1
                  },
                  currentProjects: [...a.currentProjects, selectedProject.id]
                }
              : a
          )
        );

        // Show success message
        setSuccessMessage(`✓ ${agent.name} assigned to ${selectedProject.title}`);
        setRecentAssignmentId(selectedProject.id);
        setTimeout(() => setSuccessMessage(''), 3000);

        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent('rosterUpdated'));

        // Reset wizard to review step before next assignment
        setCurrentStep(3);
        setSelectedProject(null);
        setHelpDescription('');
        setSelectedAgent(null);
        closeAgentForm();
      };

      // Unstaff Project Action
      const handleUnstaffProject = (project) => {
        const agent = agents.find(a => a.id === project.staffing.agentId);
        const categoryLabel = project.category.charAt(0).toUpperCase() + project.category.slice(1);

        // Update project
        setProjects(prevProjects =>
          prevProjects.map(p =>
            p.id === project.id
              ? {
                  ...p,
                  staffing: {
                    assigned: false,
                    agentId: null,
                    agentName: null,
                    helpDescription: null,
                    assignedAt: null
                  }
                }
              : p
          )
        );

        // Update agent capacity
        if (agent) {
          setAgents(prevAgents =>
            prevAgents.map(a =>
              a.id === agent.id
                ? {
                    ...a,
                    capacity: {
                      ...a.capacity,
                      used: a.capacity.used - 1,
                      available: a.capacity.available + 1
                    },
                    currentProjects: a.currentProjects.filter(pid => pid !== project.id)
                  }
                : a
            )
          );
        }

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('rosterUpdated'));
        setSuccessMessage(`Assignment removed from ${project.title}`);
        setTimeout(() => setSuccessMessage(''), 3000);
        if (recentAssignmentId === project.id) {
          setRecentAssignmentId(null);
        }
      };

      // Render step indicator
      const renderStepIndicator = () => {
        const steps = [
          { id: 1, label: 'Select Project' },
          { id: 2, label: 'Choose Agent' },
          { id: 3, label: 'Review Plan' },
        ];
        return (
          <div className="wizard-step-indicator">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div
                  className={`wizard-step ${currentStep === step.id ? 'active' : ''} ${
                    currentStep > step.id ? 'completed' : ''
                  }`}
                >
                  <div className="step-number">{step.id}</div>
                  <div className="step-label">{step.label}</div>
                </div>
                {index < steps.length - 1 && <div className="step-connector"></div>}
              </React.Fragment>
            ))}
          </div>
        );
      };

      // Render project card
      const renderProjectCard = (project, onClick) => {
        return (
          <div
            key={project.id}
            className={`project-card ${selectedProject?.id === project.id ? 'selected' : ''}`}
            onClick={() => onClick && onClick(project)}
            data-priority={project.priority}
          >
            <div className="project-header">
              <div className="project-badges">
                <span className={`priority-badge ${project.priority}`}>{project.priority.toUpperCase()}</span>
                <span className={`status-badge ${project.status}`}>
                  {project.status === 'active' ? 'On Table' : 'Ongoing'}
                </span>
              </div>
              <div className="category-icon" data-category={project.category}>
                {CATEGORY_ICONS[project.category] || '📁'}
              </div>
            </div>
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            {project.staffing.assigned && (
              <div className="project-staffing">
                <span className="staffing-label">Assigned:</span>
                <span className="staffing-agent">{project.staffing.agentName}</span>
              </div>
            )}
          </div>
        );
      };

      // Render agent card with inline actions
      const renderAgentCard = (agent) => {
        const isExpanded = expandedAgentId === agent.id;
        const assignedProjects = projects.filter(p => agent.currentProjects.includes(p.id));

        return (
          <div
            key={agent.id}
            className={`agent-card ${agent.capacity.available === 0 ? 'disabled' : ''}`}
          >
            <div className="agent-avatar">{agent.avatar}</div>
            <div className="agent-info">
              <div className="agent-header">
                <div>
                  <div className="agent-name">{agent.name}</div>
                  <div className="agent-specialization">{agent.specialization}</div>
                </div>
                <div className="agent-actions">
                  <button
                    className="info-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedAgentId(isExpanded ? null : agent.id);
                    }}
                    title="View details"
                  >
                    ⓘ
                  </button>
                  {currentStep === 2 && selectedProject && agent.capacity.available > 0 && (
                    <button
                      className="assign-btn-inline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAssignAgent(agent);
                      }}
                    >
                      Assign to Project
                    </button>
                  )}
                </div>
              </div>

              {!isExpanded && (
                <div className="agent-description">{agent.description}</div>
              )}

              {isExpanded && (
                <div className="agent-details-expanded">
                  <div className="agent-description">{agent.description}</div>
                  <div className="agent-current-projects">
                    <strong>Current Projects ({agent.currentProjects.length}):</strong>
                    {assignedProjects.length === 0 && <div className="no-projects">No projects assigned</div>}
                    {assignedProjects.map(p => (
                      <div key={p.id} className="assigned-project">
                        <span className={`priority-badge ${p.priority}`}>{p.priority.toUpperCase()}</span>
                        <span>{p.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="agent-capacity">
                <div className="capacity-bar">
                  <div
                    className="capacity-fill"
                    style={{
                      width: `${(agent.capacity.used / agent.capacity.total) * 100}%`,
                      background: agent.capacity.available === 0 ? '#C48B5A' : agent.capacity.available === agent.capacity.total ? '#8B9D6F' : '#D8A650'
                    }}
                  ></div>
                </div>
                <div className="capacity-text">
                  {agent.capacity.available > 0 ? `${agent.capacity.available} of ${agent.capacity.total} available` : 'At capacity'}
                </div>
              </div>
            </div>
          </div>
        );
      };

      const renderStaffedProjectCard = (project, { variant = 'sidebar' } = {}) => {
        const agent = agents.find(a => a.id === project.staffing.agentId);
        const isReview = variant === 'review';
        const showAgentDetails = isReview && expandedStaffedProjectId === project.id && agent;
        const assignedProjects = agent ? projects.filter(p => agent.currentProjects.includes(p.id)) : [];
        const cardClasses = [
          'staffed-project-card',
          isReview ? 'review-card' : '',
          isReview && recentAssignmentId === project.id ? 'recently-assigned' : ''
        ]
          .filter(Boolean)
          .join(' ');

        return (
          <div key={project.id} className={cardClasses} data-priority={project.priority}>
            <div className="project-info">
              <div className="project-header">
                <span className={`priority-badge ${project.priority}`}>{project.priority.toUpperCase()}</span>
                <span className={`status-badge ${project.status}`}>
                  {project.status === 'active' ? 'On Table' : 'Ongoing'}
                </span>
                {isReview && (
                  <span className="category-chip">
                    {CATEGORY_ICONS[project.category] || '📁'} {categoryLabel}
                  </span>
                )}
              </div>
              <div className="project-title">{project.title}</div>
              {isReview && project.description && (
                <div className="project-description">{project.description}</div>
              )}
              <div className="project-assignment">
                <span className="agent-avatar">{agent?.avatar}</span>
                <div className="agent-name-block">
                  <span className="agent-name">{project.staffing.agentName}</span>
                  {agent?.specialization && (
                    <span className="agent-specialization">{agent.specialization}</span>
                  )}
                </div>
                {isReview && agent && (
                  <button
                    className="info-btn"
                    onClick={() =>
                      setExpandedStaffedProjectId(showAgentDetails ? null : project.id)
                    }
                  >
                    {showAgentDetails ? 'Hide details' : 'Agent details'}
                  </button>
                )}
              </div>
              {showAgentDetails && agent && (
                <div className="agent-details-inline">
                  {agent.description && <div className="agent-description">{agent.description}</div>}
                  <div className="agent-capacity-line">
                    Capacity:{' '}
                    <strong>
                      {agent.capacity.used} of {agent.capacity.total}
                    </strong>{' '}
                    slots used
                  </div>
                  <div className="agent-current-projects">
                    <strong>Current Projects</strong>
                    {assignedProjects.length === 0 && (
                      <div className="no-projects">No other projects assigned</div>
                    )}
                    {assignedProjects.map(p => (
                      <div key={p.id} className="assigned-project">
                        <span className={`priority-badge ${p.priority}`}>{p.priority.toUpperCase()}</span>
                        <span>{p.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.staffing.helpDescription && (
                <div className="help-description">
                  <strong>Help needed:</strong> {project.staffing.helpDescription}
                </div>
              )}
            </div>
            <div className="project-actions">
              <button
                className="unstaff-btn"
                onClick={() => {
                  if (confirm(`Remove ${project.staffing.agentName} from ${project.title}?`)) {
                    handleUnstaffProject(project);
                  }
                }}
              >
                Unstaff
              </button>
            </div>
          </div>
        );
      };

      return (
        <div className="roster-room-two-panel">
          {/* Left Panel: Staffed Projects (Always Visible) */}
          <div className="staffed-panel">
            <div className="panel-header">
              <h2>Delegation Plan</h2>
              <p>{staffedProjects.length} {staffedProjects.length === 1 ? 'project' : 'projects'} staffed</p>
            </div>

            <div className="staffed-projects-list">
              {staffedProjects.length === 0 && (
                <div className="empty-state">
                  <div className="empty-icon">📋</div>
                  <div className="empty-message">No projects staffed yet</div>
                  <div className="empty-hint">Select a project from the right to get started</div>
                </div>
              )}
              {sidebarStaffedProjects.map(project => renderStaffedProjectCard(project))}
            </div>
          </div>

          {/* Right Panel: Staffing Wizard */}
          <div className="wizard-panel">
            <div className="panel-header">
              <h2>Delegation Wizard</h2>
              <p>Staff your projects in three calm steps</p>
            </div>

            {renderStepIndicator()}

            <div className="wizard-content">
            {/* Step 1: Select Project */}
            {currentStep === 1 && (
              <div className="wizard-step-1">
                <div className="step-header">
                  <h2>Select a Project to Staff</h2>
                  <p>Choose which project needs help</p>
                </div>

                {/* Search and Sort Controls */}
                <div className="wizard-controls">
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                    {searchTerm && (
                      <button className="search-clear" onClick={() => setSearchTerm('')}>×</button>
                    )}
                  </div>
                  <div className="sort-controls">
                    <button className={`sort-btn ${projectSortBy === 'priority' ? 'active' : ''}`} onClick={() => setProjectSortBy('priority')}>Priority</button>
                    <button className={`sort-btn ${projectSortBy === 'category' ? 'active' : ''}`} onClick={() => setProjectSortBy('category')}>Category</button>
                    <button className={`sort-btn ${projectSortBy === 'alphabetical' ? 'active' : ''}`} onClick={() => setProjectSortBy('alphabetical')}>A-Z</button>
                  </div>
                </div>

                {/* Project List */}
                <div className="project-list">
                  {filteredProjects.length === 0 && unstaffedProjects.length === 0 && (
                    <div className="empty-state">
                      <div className="empty-icon">🎉</div>
                      <div className="empty-message">All projects are staffed!</div>
                      <div className="empty-hint">You can unstaff projects to make changes</div>
                    </div>
                  )}
                  {filteredProjects.length === 0 && unstaffedProjects.length > 0 && (
                    <div className="empty-state">
                      <div className="empty-icon">🔍</div>
                      <div className="empty-message">No projects match "{searchTerm}"</div>
                      <div className="empty-hint">Try different keywords or clear search</div>
                    </div>
                  )}
                  {filteredProjects.map(project => renderProjectCard(project, handleSelectProject))}
                </div>
              </div>
            )}

            {/* Step 2: Define Help & Select Agent */}
            {currentStep === 2 && selectedProject && (
              <div className="wizard-step-2">
                {/* Selected Project Header */}
                <div className="selected-project-header">
                  <div className="header-label">Staffing:</div>
                  <div className="header-project">
                    <span className={`priority-badge ${selectedProject.priority}`}>{selectedProject.priority.toUpperCase()}</span>
                    <span className="project-title">{selectedProject.title}</span>
                  </div>
                  <button className="back-btn" onClick={handleBack}>← Change Project</button>
                </div>

                {/* Help Description Input */}
                <div className="help-description-section">
                  <label className="help-label">What help do you need with this project? (optional)</label>
                  <textarea
                    className="help-input"
                    placeholder="e.g., Research pricing options, Draft listing copy, Schedule vendor calls..."
                    value={helpDescription}
                    onChange={(e) => setHelpDescription(e.target.value)}
                    rows={3}
                    maxLength={500}
                  />
                  <div className="char-count">{helpDescription.length}/500</div>
                </div>

                {/* Agent Selection */}
                <div className="agent-selection-section">
                  <h3>Choose an Agent</h3>

                  {/* Agent Filter Controls */}
                  <div className="agent-filters">
                    <button className={`filter-btn ${agentFilter === 'all' ? 'active' : ''}`} onClick={() => setAgentFilter('all')}>All Agents</button>
                    <button className={`filter-btn ${agentFilter === 'available' ? 'active' : ''}`} onClick={() => setAgentFilter('available')}>Available Only</button>
                  </div>

                  {/* Agent List */}
                  <div className="agent-list">
                    {/* Create Custom Agent Card */}
                    <div className={`agent-card create-agent-card ${isCreatingAgent ? 'expanded' : ''}`}>
                      {!isCreatingAgent ? (
                        <div
                          className="create-agent-trigger"
                          role="button"
                          tabIndex={0}
                          onClick={() => {
                            resetAgentFormState();
                            setIsCreatingAgent(true);
                          }}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              resetAgentFormState();
                              setIsCreatingAgent(true);
                            }
                          }}
                        >
                          <div className="create-agent-icon">+</div>
                          <div className="create-agent-label">Create Custom Agent</div>
                          <div className="create-agent-hint">Tailored to your needs</div>
                        </div>
                      ) : (
                        <div className="agent-form">
                          {/* Devin Introduction */}
                          <div className="devin-callout">
                            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
                              <span style={{fontSize: '1.5rem'}}>👨‍💼</span>
                              <strong>Devin here!</strong>
                            </div>
                            <p>I'm here to help you tune existing agents and create new ones tailored to your projects.</p>
                          </div>

                          {/* Form Fields */}
                          <div className={`form-row ${agentFormErrors.name ? 'has-error' : ''}`}>
                            <label>Agent Name *</label>
                            <input
                              type="text"
                              placeholder="e.g., Marketing Specialist"
                              maxLength={50}
                              value={agentForm.name}
                              onChange={(e) => handleAgentFieldChange('name', e.target.value)}
                            />
                            {agentFormErrors.name && <span className="form-error">{agentFormErrors.name}</span>}
                          </div>

                          <div className={`form-row ${agentFormErrors.specialization ? 'has-error' : ''}`}>
                            <label>Specialization *</label>
                            <input
                              type="text"
                              placeholder="e.g., Social Media & Content Marketing"
                              maxLength={50}
                              value={agentForm.specialization}
                              onChange={(e) => handleAgentFieldChange('specialization', e.target.value)}
                            />
                            {agentFormErrors.specialization && <span className="form-error">{agentFormErrors.specialization}</span>}
                          </div>

                          <div className="form-row">
                            <label>Description (optional)</label>
                            <textarea
                              placeholder="What does this agent help with?"
                              maxLength={200}
                              rows={3}
                              value={agentForm.description}
                              onChange={(e) => handleAgentFieldChange('description', e.target.value)}
                            />
                            <div className="char-count subtle">{agentForm.description.length}/200</div>
                          </div>

                          <div className="form-row">
                            <label>Capacity (max projects)</label>
                            <select
                              value={agentForm.capacity}
                              onChange={(e) => handleAgentFieldChange('capacity', e.target.value)}
                            >
                              <option value="1">1 project</option>
                              <option value="2">2 projects</option>
                              <option value="3">3 projects</option>
                              <option value="4">4 projects</option>
                              <option value="5">5 projects</option>
                            </select>
                          </div>

                          {/* Form Actions */}
                          <div className="form-actions">
                            <button
                              type="button"
                              className="btn-primary"
                              disabled={!agentForm.name.trim() || !agentForm.specialization.trim()}
                              onClick={(event) => {
                                event.preventDefault();
                                handleCreateCustomAgent();
                              }}
                            >
                              {currentStep === 2 && selectedProject ? `Create & Assign to ${selectedProject.title}` : 'Create Agent'}
                            </button>
                            <button
                              type="button"
                              className="btn-secondary"
                              onClick={(event) => {
                                event.preventDefault();
                                closeAgentForm();
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Agent Cards */}
                    {filteredAgents.map(agent => renderAgentCard(agent))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review Assignments */}
            {currentStep === 3 && (
              <div className="wizard-step-3">
                {successMessage && (
                  <div className="success-banner">
                    <span>{successMessage}</span>
                  </div>
                )}
                <div className="step-header">
                  <h2>Review your delegation plan</h2>
                  <p>See everything currently staffed and make adjustments.</p>
                </div>
                <div className="wizard-actions">
                  <button className="staff-another-btn" onClick={handleStaffAnother}>
                    + Staff Another Project
                  </button>
                </div>
                <div className="review-controls">
                  <div className="review-sort">
                    <span className="review-label">Sort by</span>
                    <div className="review-sort-buttons">
                      <button
                        className={`sort-btn ${reviewSortBy === 'priority' ? 'active' : ''}`}
                        onClick={() => setReviewSortBy('priority')}
                      >
                        Priority
                      </button>
                      <button
                        className={`sort-btn ${reviewSortBy === 'category' ? 'active' : ''}`}
                        onClick={() => setReviewSortBy('category')}
                      >
                        Category
                      </button>
                      <button
                        className={`sort-btn ${reviewSortBy === 'agent' ? 'active' : ''}`}
                        onClick={() => setReviewSortBy('agent')}
                      >
                        Agent
                      </button>
                    </div>
                  </div>
                  <div className="review-count">
                    {sortedStaffedProjects.length}{' '}
                    {sortedStaffedProjects.length === 1 ? 'assignment' : 'assignments'}
                  </div>
                </div>
                <div className="staffed-projects-list review-list">
                  {sortedStaffedProjects.length === 0 && (
                    <div className="empty-state">
                      <div className="empty-icon">🗂️</div>
                      <div className="empty-message">No projects staffed yet</div>
                      <div className="empty-hint">Let’s assign someone to keep things moving.</div>
                      <button className="primary-btn" onClick={handleStaffAnother}>
                        Staff a Project
                      </button>
                    </div>
                  )}
                  {sortedStaffedProjects.map(project =>
                    renderStaffedProjectCard(project, { variant: 'review' })
                  )}
                </div>
                {sortedStaffedProjects.length > 0 && (
                  <div className="wizard-actions secondary">
                    <button className="staff-another-btn ghost" onClick={handleStaffAnother}>
                      Staff Another Project
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Success Message (Steps 1-2) */}
            {successMessage && currentStep !== 3 && (
              <div className="success-banner">
                <span>{successMessage}</span>
              </div>
            )}
          </div>

          {/* Wizard Navigation */}
          <div className="wizard-navigation">
            {currentStep > 1 && (
              <button className="nav-btn back-btn" onClick={handleBack}>
                ← Back
              </button>
            )}
            <button className="nav-btn cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      );
    };

    const App = () => {
      const [chapter, setChapter] = React.useState(0);
      const [goldQueue, setGoldQueue] = React.useState(initialGoldQueue);
      const [silverQueue, setSilverQueue] = React.useState(initialSilverQueue);
      const [bronzeQueue, setBronzeQueue] = React.useState(initialBronzeQueue);
      const [table, setTable] = React.useState({
        gold: { ...goldTableSeed },
        silver: { ...silverTableSeed },
        bronze: getBronzeTableSummary(initialBronzeQueue),
      });
      const [openQueue, setOpenQueue] = React.useState('gold');
      const [status, setStatus] = React.useState('Consulting active. Camper ready to activate.');
      const [tasks, setTasks] = React.useState(initialTasks);
      const [camperProgress, setCamperProgress] = React.useState(0);

      const camperActive = table.gold.title === 'Sell Camper Van';
      const camperPct = Math.round(camperProgress * 100);

      const toggleQueue = (lane) => setOpenQueue((prev) => (prev === lane ? null : lane));

      const reorderList = (list, from, to) => {
        if (from === to) return list;
        const next = [...list];
        const [item] = next.splice(from, 1);
        next.splice(Math.min(Math.max(to, 0), next.length), 0, item);
        return next;
      };

      const nudgeQueue = (lane, index, direction) => {
        const setter = lane === 'gold' ? setGoldQueue : setSilverQueue;
        setter((prev) => {
          const target = index + direction;
          if (target < 0 || target >= prev.length) return prev;
          setStatus(`${lane === 'gold' ? 'Gold' : 'Silver'} queue reprioritized.`);
          return reorderList(prev, index, target);
        });
      };

      const nudgeBronze = (index, direction) => {
        setBronzeQueue((prev) => {
          const target = index + direction;
          if (target < 0 || target >= prev.length) return prev;
          setStatus('Bronze queue reprioritized.');
          return reorderList(prev, index, target);
        });
      };

      const activateLane = (lane, title) => {
        const setter = lane === 'gold' ? setGoldQueue : setSilverQueue;
        setter((prev) => {
          const idx = prev.findIndex((card) => card.title === title);
          if (idx === -1) return prev;
          const candidate = prev[idx];
          const currentActive = table[lane];
          const filtered = prev.filter((card, cIdx) => cIdx !== idx && card.title !== currentActive.title);
          setTable((prevTable) => ({ ...prevTable, [lane]: candidate }));
          setStatus(`${candidate.title} moved to ${lane === 'gold' ? 'Gold' : 'Silver'} Table.`);
          return currentActive.title ? [currentActive, ...filtered] : filtered;
        });
      };

      const activateGold = (title) => activateLane('gold', title);
      const activateSilver = (title) => activateLane('silver', title);

      const swapGold = () => {
        if (camperActive) return;
        activateGold('Sell Camper Van');
        setStatus('Camper active. Consulting preserved in Gold queue.');
      };

      const fastForward = () => {
        setTasks({ todo: [], doing: [], review: [], done: ['All tasks'] });
        setCamperProgress(1);
        if (table.gold.title === 'Sell Camper Van') {
          setTable((prev) => ({ ...prev, gold: { ...prev.gold, progress: 1, meta: 'Finances · Gold · Complete' } }));
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
        setTable((prevTable) => ({ ...prevTable, bronze: getBronzeTableSummary(bronzeQueue) }));
      }, [bronzeQueue]);

      const reactivateConsulting = () => {
        const currentActive = table.gold;
        setGoldQueue((prev) => {
          const filtered = prev.filter((card) => card.title !== goldTableSeed.title && card.title !== currentActive.title);
          if (currentActive.title === goldTableSeed.title) return filtered;
          return [currentActive, ...filtered];
        });
        setTable((prevTable) => ({ ...prevTable, gold: { ...goldTableSeed } }));
        setStatus('Consulting back on Table. Camper preserved in Gold queue.');
      };

      const chapterStories = [
        {
          label: 'Chapter 1',
          title: 'Life Map · Jess at pace',
          lines: [
            { text: '“Jess scans his Life Map—Gold consulting up front, deck work simmering, a stack of Bronze chores behaving for once.”', tone: 'em' },
            { text: '“Then his wife says: list the camper this week or I’m doing it myself.”', tone: 'em' },
            { text: 'He remembers crafting this project two weeks ago in the Drafting Room.' },
          ],
          prompts: [
            { label: 'Head to the Drafting Room', onClick: () => setChapter(1) },
          ],
        },
        {
          label: 'Chapter 2',
          title: 'Drafting Room · Crisis surfaces',
          lines: [
            { text: 'Gold queue, crisis on top.' },
            { text: 'Jess planned “Sell Camper Van” two weeks ago (Stage 4). Wife’s ultimatum makes it urgent.' },
          ],
          prompts: [
            { label: 'Open Sorting Room', onClick: () => setChapter(2) },
            { label: 'Back to Life Map', onClick: () => setChapter(0), variant: 'secondary' },
          ],
        },
        {
          label: 'Chapter 3',
          title: 'Sorting Room · Hard choice',
          lines: [
            { text: 'Three lanes mirror the Table below—Gold and Silver show their live slot, Bronze tracks ten tabled cards.' },
            { text: 'Jess must pause consulting and activate the camper sale. Progress will be preserved.' },
          ],
          prompts: [
            { label: camperActive ? 'Camper activated' : 'Activate Camper as Gold', onClick: camperActive ? null : () => swapGold(), disabled: camperActive },
            { label: 'Show updated Life Map', onClick: () => setChapter(0), disabled: !camperActive },
            { label: 'Back to Drafting Room', onClick: () => setChapter(1), variant: 'secondary' },
          ],
        },
        {
          label: 'Chapter 4',
          title: 'Life Map · Activation lands',
          lines: [
            { text: 'Table updated · Consulting preserved.' },
            { text: 'Camper is now Gold. Consulting sits paused inside Finances. Finance shows dual presence.' },
          ],
          prompts: [
            { label: 'Open Project Board', onClick: () => setChapter(4) },
            { label: 'Back to Sorting Room', onClick: () => setChapter(2), variant: 'secondary' },
          ],
        },
        {
          label: 'Chapter 5',
          title: 'Project Board · Execute',
          lines: [
            { text: 'Sell Camper Van · Work at Hand.' },
            { text: 'Move the first tasks. Progress fills; Bronze keeps pace in background.' },
          ],
          prompts: [
            { label: 'Fast forward 2 weeks', onClick: () => { fastForward(); setChapter(5); } },
            { label: 'Back to Life Map', onClick: () => setChapter(3), variant: 'secondary' },
          ],
        },
        {
          label: 'Chapter 6',
          title: 'Finances · Progress check',
          lines: [
            { text: `Camper sale at ${camperPct}%. Budget automation queued. Mortgage refinance waiting.` },
          ],
          prompts: [
            { label: 'Resume in Sorting Room', onClick: () => setChapter(6) },
            { label: 'Back to Project Board', onClick: () => setChapter(4), variant: 'secondary' },
          ],
        },
        {
          label: 'Chapter 7',
          title: 'Sorting Room · Resume rhythm',
          lines: [
            { text: 'Decoration stage achieved; consulting is still waiting at the top. Reactivate with one click.' },
          ],
          prompts: [
            { label: 'Reactivate Consulting', onClick: () => reactivateConsulting() },
            { label: 'Back to Finances', onClick: () => setChapter(5), variant: 'secondary' },
          ],
        },
      ];

      const currentStory = chapterStories[chapter] || chapterStories[0];

      const screen = () => {
        if (chapter === 0) return <LifeMap table={table} />;
        if (chapter === 1) return <DraftingRoom />;
        if (chapter === 2) {
          return (
            <SortingRoom
              state={{
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
                bronzeLimit: BRONZE_TABLE_LIMIT,
              }}
            />
          );
        }
        if (chapter === 3) return <ActivationMap state={{ table, goldQueue }} />;
        if (chapter === 4) return <ProjectBoard state={{ tasks, setTasks, camperProgress, setCamperProgress }} />;
        if (chapter === 5) return <FinanceZoom state={{ camperProgress }} />;
        if (chapter === 7) return <RosterRoom />;
        return <SortingReturn state={{ reactivateConsulting, goldQueue, table }} />;
      };

      return (
        <>
          <div className="story-overlay">
            <div className="story-bubble">
              <div className="chapter-tag">{currentStory.label}</div>
              <h2>{currentStory.title}</h2>
              <div className="story-text">
                {currentStory.lines.map((line, idx) => (
                  <p key={idx}>{line.tone === 'em' ? <em>{line.text}</em> : line.text}</p>
                ))}
              </div>
              {currentStory.prompts?.length ? (
                <div className="story-prompts">
                  {currentStory.prompts.map((prompt) => (
                    <button
                      key={prompt.label}
                      className={`story-cta${prompt.variant === 'secondary' ? ' secondary' : ''}`}
                      onClick={prompt.onClick}
                      disabled={prompt.disabled}
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
          <div className="nav">
            <div className="nav-links">
              <a className={chapter===1 ? 'active' : ''} onClick={() => setChapter(1)}>Drafting Room</a>
              <a className={chapter===2 || chapter===6 ? 'active' : ''} onClick={() => setChapter(2)}>Sorting Room</a>
              <a className={chapter===7 ? 'active' : ''} onClick={() => setChapter(7)}>Roster Room</a>
              <a className={chapter===0 || chapter===3 ? 'active' : ''} onClick={() => setChapter(0)}>Life Map</a>
            </div>
            <div className="pill">Jess · Director</div>
          </div>
          <div className="shell">
            {screen()}
          </div>
          <TableBar table={table} />
        </>
      );
    };

    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
