import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 configuration for recursive-media
 * Research wiki on recursive media, model collapse, and self-consuming AI loops.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Recursive Media",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "mroberts1.github.io/recursive-media",
    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "_meta",
    ],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Source Serif 4",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f6",
          lightgray: "#e8e4e0",
          gray: "#a09888",
          darkgray: "#3a3530",
          dark: "#1a1510",
          secondary: "#8b1a1a",
          tertiary: "#c0392b",
          highlight: "rgba(139, 26, 26, 0.08)",
          textHighlight: "#fff3cd",
        },
        darkMode: {
          light: "#141210",
          lightgray: "#2a2520",
          gray: "#6a6058",
          darkgray: "#c8c0b8",
          dark: "#f0ece8",
          secondary: "#d4726a",
          tertiary: "#e8a090",
          highlight: "rgba(212, 114, 106, 0.12)",
          textHighlight: "#3a2a10",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
