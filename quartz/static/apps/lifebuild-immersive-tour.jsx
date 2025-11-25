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
        staffing: { assigned: true, agentId: 'agent-1', agentName: 'Code Specialist' }
      },
      {
        id: 'project-3',
        title: 'Credit Card Rewards Optimization',
        description: 'Research best cards, track spending, maximize points',
        priority: 'gold',
        status: 'ongoing',
        category: 'finances',
        staffing: { assigned: true, agentId: 'agent-3', agentName: 'Project Coordinator' }
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
        staffing: { assigned: true, agentId: 'agent-1', agentName: 'Code Specialist' }
      },
      {
        id: 'project-6',
        title: 'Kitchen Renovation Planning',
        description: 'Budget development, contractor quotes, design decisions',
        priority: 'silver',
        status: 'ongoing',
        category: 'home',
        staffing: { assigned: true, agentId: 'agent-5', agentName: 'Operations Agent' }
      },
      {
        id: 'project-7',
        title: 'Lawn Care Service Setup',
        description: 'Find providers, schedule seasonal maintenance',
        priority: 'bronze',
        status: 'active',
        category: 'home',
        staffing: { assigned: true, agentId: 'agent-3', agentName: 'Project Coordinator' }
      },
      {
        id: 'project-8',
        title: 'Retirement Contributions Review',
        description: 'Annual 401k review, IRA optimization',
        priority: 'bronze',
        status: 'ongoing',
        category: 'finances',
        staffing: { assigned: true, agentId: 'agent-2', agentName: 'Research Agent' }
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

      const [selectedProject, setSelectedProject] = React.useState(null);
      const [selectedAgent, setSelectedAgent] = React.useState(null);
      const [projects, setProjects] = React.useState(() => loadFromStorage('rosterRoom_projects', MOCK_PROJECTS));
      const [agents, setAgents] = React.useState(() => loadFromStorage('rosterRoom_agents', MOCK_AGENTS));
      const [searchTerm, setSearchTerm] = React.useState('');
      const [sortBy, setSortBy] = React.useState('priority');

      // Refs for connection lines
      const containerRef = React.useRef(null);
      const projectCardRefs = React.useRef({});
      const agentCardRefs = React.useRef({});
      const buttonRef = React.useRef(null);
      const [linePositions, setLinePositions] = React.useState(null);

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

      // Sort projects
      const sortedProjects = React.useMemo(() => {
        let sorted = [...projects];

        if (sortBy === 'priority') {
          // Priority sort: Gold (Active, then Ongoing), Silver (Active, then Ongoing), Bronze
          const priorityOrder = { gold: 1, silver: 2, bronze: 3 };
          const statusOrder = { active: 1, ongoing: 2 };
          sorted.sort((a, b) => {
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
              return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            return statusOrder[a.status] - statusOrder[b.status];
          });
        } else if (sortBy === 'status') {
          sorted.sort((a, b) => a.status === 'active' ? -1 : 1);
        } else if (sortBy === 'category') {
          sorted.sort((a, b) => a.category.localeCompare(b.category));
        } else if (sortBy === 'alphabetical') {
          sorted.sort((a, b) => a.title.localeCompare(b.title));
        }

        return sorted;
      }, [projects, sortBy]);

      // Filter projects by search
      const filteredProjects = React.useMemo(() => {
        if (!searchTerm) return sortedProjects;
        const term = searchTerm.toLowerCase();
        return sortedProjects.filter(p =>
          p.title.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term)
        );
      }, [sortedProjects, searchTerm]);

      // Success message state
      const [successMessage, setSuccessMessage] = React.useState('');

      // Staff Project Action
      const handleStaffProject = () => {
        if (!selectedProject || !selectedAgent) return;

        // Update project with agent assignment
        setProjects(prevProjects =>
          prevProjects.map(p =>
            p.id === selectedProject.id
              ? {
                  ...p,
                  staffing: {
                    assigned: true,
                    agentId: selectedAgent.id,
                    agentName: selectedAgent.name
                  }
                }
              : p
          )
        );

        // Update agent capacity
        setAgents(prevAgents =>
          prevAgents.map(a =>
            a.id === selectedAgent.id
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
        setSuccessMessage(`${selectedAgent.name} assigned to ${selectedProject.title}`);
        setTimeout(() => setSuccessMessage(''), 3000);

        // Dispatch custom event to notify other components
        window.dispatchEvent(new CustomEvent('rosterUpdated'));

        // Clear selections and lines
        setSelectedProject(null);
        setSelectedAgent(null);
        setLinePositions(null);
      };

      // Calculate connection line positions
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

        const container = containerRef.current.getBoundingClientRect();
        const button = buttonRef.current.getBoundingClientRect();
        const project = projectCard.getBoundingClientRect();
        const agent = agentCard.getBoundingClientRect();

        // Calculate positions relative to container
        const buttonCenter = {
          x: button.left - container.left + button.width / 2,
          y: button.top - container.top + button.height / 2
        };

        const projectPoint = {
          x: project.left - container.left + project.width / 2,
          y: project.top - container.top + project.height / 2
        };

        const agentPoint = {
          x: agent.left - container.left + agent.width / 2,
          y: agent.top - container.top + agent.height / 2
        };

        setLinePositions({
          projectLine: { start: projectPoint, end: buttonCenter },
          agentLine: { start: agentPoint, end: buttonCenter }
        });
      }, [selectedProject, selectedAgent]);

      // Update line positions when selections change
      React.useEffect(() => {
        updateLinePositions();
      }, [updateLinePositions]);

      // Update line positions on window resize
      React.useEffect(() => {
        const handleResize = () => {
          if (selectedProject && selectedAgent) {
            updateLinePositions();
          }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [selectedProject, selectedAgent, updateLinePositions]);

      // Recalculate on scroll within panels
      React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
          if (selectedProject && selectedAgent) {
            updateLinePositions();
          }
        };

        const panels = container.querySelectorAll('.roster-cards-container');
        panels.forEach(panel => {
          panel.addEventListener('scroll', handleScroll);
        });

        return () => {
          panels.forEach(panel => {
            panel.removeEventListener('scroll', handleScroll);
          });
        };
      }, [selectedProject, selectedAgent, updateLinePositions]);

      return (
        <div className="roster-room-container" ref={containerRef}>
          <div className="roster-room-panels">
            {/* Agent Roster Panel */}
            <div className="roster-panel agent-panel">
              <div className="panel-header">
                <h2 className="panel-title">Agent Roster</h2>
                <div className="panel-subtitle">{agents.length} agents available</div>
              </div>
              <div className="roster-cards-container">
                {/* Create Custom Agent Card */}
                <div className="agent-card create-agent-card">
                  <div className="create-agent-icon">+</div>
                  <div className="create-agent-label">Create Custom Agent</div>
                  <div className="create-agent-hint">Tailored to your needs</div>
                </div>

                {/* Agent Cards */}
                {agents.map(agent => (
                  <div
                    key={agent.id}
                    ref={el => agentCardRefs.current[agent.id] = el}
                    className={`agent-card ${selectedAgent?.id === agent.id ? 'selected' : ''} ${agent.capacity.available === 0 ? 'disabled' : ''}`}
                    onClick={() => agent.capacity.available > 0 && setSelectedAgent(agent)}
                  >
                    <div className="agent-avatar">{agent.avatar}</div>
                    <div className="agent-info">
                      <div className="agent-name">{agent.name}</div>
                      <div className="agent-specialization">{agent.specialization}</div>
                      <div className="agent-description">{agent.description}</div>
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
                ))}
              </div>
            </div>

            {/* Staff Project Button */}
            <div className="staff-button-container">
              <button
                ref={buttonRef}
                className="staff-project-btn"
                disabled={!selectedProject || !selectedAgent}
                onClick={handleStaffProject}
              >
                <span className="btn-icon">→</span>
                <span>Staff Project</span>
              </button>
              {(!selectedProject || !selectedAgent) && !successMessage && (
                <div className="staff-hint">
                  Select a project and an agent
                </div>
              )}
              {successMessage && (
                <div className="success-message">
                  ✓ {successMessage}
                </div>
              )}
            </div>

            {/* Project Queue Panel */}
            <div className="roster-panel project-panel">
              <div className="panel-header">
                <h2 className="panel-title">Project Queue</h2>
                <div className="panel-subtitle">{filteredProjects.length} projects</div>
              </div>

              {/* Search and Sort Controls */}
              <div className="queue-controls">
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
                  <button className={`sort-btn ${sortBy === 'priority' ? 'active' : ''}`} onClick={() => setSortBy('priority')}>Priority</button>
                  <button className={`sort-btn ${sortBy === 'status' ? 'active' : ''}`} onClick={() => setSortBy('status')}>Status</button>
                  <button className={`sort-btn ${sortBy === 'category' ? 'active' : ''}`} onClick={() => setSortBy('category')}>Category</button>
                  <button className={`sort-btn ${sortBy === 'alphabetical' ? 'active' : ''}`} onClick={() => setSortBy('alphabetical')}>A-Z</button>
                </div>
              </div>

              {/* Project Cards */}
              <div className="roster-cards-container">
                {filteredProjects.length === 0 && (
                  <div className="empty-state">
                    <div className="empty-icon">🔍</div>
                    <div className="empty-message">No projects match "{searchTerm}"</div>
                    <div className="empty-hint">Try different keywords or clear search</div>
                  </div>
                )}
                {filteredProjects.map(project => (
                  <div
                    key={project.id}
                    ref={el => projectCardRefs.current[project.id] = el}
                    className={`project-card ${selectedProject?.id === project.id ? 'selected' : ''}`}
                    onClick={() => setSelectedProject(project)}
                    data-priority={project.priority}
                  >
                    <div className="project-header">
                      <div className="project-badges">
                        <span className={`priority-badge ${project.priority}`}>{project.priority.toUpperCase()}</span>
                        <span className={`status-badge ${project.status}`}>{project.status === 'active' ? 'On Table' : 'Ongoing'}</span>
                      </div>
                      <div className="category-icon" data-category={project.category}>
                        {project.category === 'finances' ? '💰' : project.category === 'health' ? '❤️' : project.category === 'home' ? '🏠' : '💼'}
                      </div>
                    </div>
                    <div className="project-title">{project.title}</div>
                    <div className="project-description">{project.description}</div>
                    {project.staffing.assigned && (
                      <div className="project-staffing">
                        <span className="staffing-label">Staffed:</span>
                        <span className="staffing-agent">{project.staffing.agentName}</span>
                      </div>
                    )}
                    {!project.staffing.assigned && (
                      <div className="project-staffing unstaffed">
                        <span className="unstaffed-label">⚠️ Unstaffed</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connection Lines SVG */}
          {linePositions && (
            <svg className="connection-lines" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 5
            }}>
              {/* Line from Project to Button */}
              <line
                x1={linePositions.projectLine.start.x}
                y1={linePositions.projectLine.start.y}
                x2={linePositions.projectLine.end.x}
                y2={linePositions.projectLine.end.y}
                stroke="var(--purpose)"
                strokeWidth="2"
                strokeDasharray="6 4"
                className="connection-line project-line"
              />
              {/* Line from Agent to Button */}
              <line
                x1={linePositions.agentLine.start.x}
                y1={linePositions.agentLine.start.y}
                x2={linePositions.agentLine.end.x}
                y2={linePositions.agentLine.end.y}
                stroke="var(--purpose)"
                strokeWidth="2"
                strokeDasharray="6 4"
                className="connection-line agent-line"
              />
            </svg>
          )}
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
