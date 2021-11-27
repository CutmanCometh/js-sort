module.exports = {
    collectCoverage: false,
    coverageReporters: ["json-summary", "json", "html"],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        }
    }
};
