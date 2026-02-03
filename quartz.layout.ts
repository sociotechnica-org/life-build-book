import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const aName = a.displayName.toLowerCase()
        const bName = b.displayName.toLowerCase()

        // Define custom ordering for specific folder hierarchies
        const productOrder = ["zones", "primitives", "systems", "agents", "components"]
        const rationaleOrder = ["foundation", "needs", "strategies", "principles"]
        const zonesOrder = ["life map", "strategy studio", "archives"]

        // Both are folders - apply custom ordering
        if (a.isFolder && b.isFolder) {
          // Check Product children
          const aProductIdx = productOrder.indexOf(aName)
          const bProductIdx = productOrder.indexOf(bName)
          if (aProductIdx !== -1 && bProductIdx !== -1) {
            return aProductIdx - bProductIdx
          }
          if (aProductIdx !== -1) return -1
          if (bProductIdx !== -1) return 1

          // Check Rationale children
          const aRationaleIdx = rationaleOrder.indexOf(aName)
          const bRationaleIdx = rationaleOrder.indexOf(bName)
          if (aRationaleIdx !== -1 && bRationaleIdx !== -1) {
            return aRationaleIdx - bRationaleIdx
          }
          if (aRationaleIdx !== -1) return -1
          if (bRationaleIdx !== -1) return 1

          // Check Zones children
          const aZonesIdx = zonesOrder.indexOf(aName)
          const bZonesIdx = zonesOrder.indexOf(bName)
          if (aZonesIdx !== -1 && bZonesIdx !== -1) {
            return aZonesIdx - bZonesIdx
          }
          if (aZonesIdx !== -1) return -1
          if (bZonesIdx !== -1) return 1

          // Otherwise alphabetical
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        // Sort order: folders first, then files
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return 1
        } else {
          return -1
        }
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const aName = a.displayName.toLowerCase()
        const bName = b.displayName.toLowerCase()

        // Define custom ordering for specific folder hierarchies
        const productOrder = ["zones", "primitives", "systems", "agents", "components"]
        const rationaleOrder = ["foundation", "needs", "strategies", "principles"]
        const zonesOrder = ["life map", "strategy studio", "archives"]

        // Both are folders - apply custom ordering
        if (a.isFolder && b.isFolder) {
          // Check Product children
          const aProductIdx = productOrder.indexOf(aName)
          const bProductIdx = productOrder.indexOf(bName)
          if (aProductIdx !== -1 && bProductIdx !== -1) {
            return aProductIdx - bProductIdx
          }
          if (aProductIdx !== -1) return -1
          if (bProductIdx !== -1) return 1

          // Check Rationale children
          const aRationaleIdx = rationaleOrder.indexOf(aName)
          const bRationaleIdx = rationaleOrder.indexOf(bName)
          if (aRationaleIdx !== -1 && bRationaleIdx !== -1) {
            return aRationaleIdx - bRationaleIdx
          }
          if (aRationaleIdx !== -1) return -1
          if (bRationaleIdx !== -1) return 1

          // Check Zones children
          const aZonesIdx = zonesOrder.indexOf(aName)
          const bZonesIdx = zonesOrder.indexOf(bName)
          if (aZonesIdx !== -1 && bZonesIdx !== -1) {
            return aZonesIdx - bZonesIdx
          }
          if (aZonesIdx !== -1) return -1
          if (bZonesIdx !== -1) return 1

          // Otherwise alphabetical
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        // Sort order: folders first, then files
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return 1
        } else {
          return -1
        }
      },
    }),
  ],
  right: [],
}
