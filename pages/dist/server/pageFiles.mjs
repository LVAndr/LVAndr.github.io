const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [
  {
    pageId: "/pages/agreement",
    isErrorPage: false,
    routeFilesystem: "/agreement",
    routeFilesystemDefinedBy: "/pages/agreement/",
    loadCodeFiles: async () => (await import("./entries/pages_agreement.mjs")).default,
    configValues: {
      ["clientRouting"]: {
        value: false,
        definedAtInfo: { "filePath": "/renderer/+config.h.ts", "fileExportPath": ["default", "clientRouting"] }
      },
      ["isClientSideRenderable"]: {
        value: true,
        definedAtInfo: null
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: false,
    routeFilesystem: "/",
    routeFilesystemDefinedBy: "/pages/index/",
    loadCodeFiles: async () => (await import("./entries/pages_index.mjs")).default,
    configValues: {
      ["clientRouting"]: {
        value: false,
        definedAtInfo: { "filePath": "/renderer/+config.h.ts", "fileExportPath": ["default", "clientRouting"] }
      },
      ["isClientSideRenderable"]: {
        value: true,
        definedAtInfo: null
      }
    }
  },
  {
    pageId: "/pages/answers",
    isErrorPage: false,
    routeFilesystem: "/answers",
    routeFilesystemDefinedBy: "/pages/answers/",
    loadCodeFiles: async () => (await import("./entries/pages_answers.mjs")).default,
    configValues: {
      ["clientRouting"]: {
        value: false,
        definedAtInfo: { "filePath": "/renderer/+config.h.ts", "fileExportPath": ["default", "clientRouting"] }
      },
      ["isClientSideRenderable"]: {
        value: true,
        definedAtInfo: null
      }
    }
  }
];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
