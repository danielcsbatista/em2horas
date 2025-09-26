"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypress_1 = require("cypress");
var task_1 = require("@cypress/code-coverage/task");
exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        setupNodeEvents: function (on, config) {
            (0, task_1.default)(on, config);
            return config;
        },
        baseUrl: 'http://localhost:5174/em2horas/',
    },
});
