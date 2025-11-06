"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = defineEventHandler(function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var requestBody, db, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, readBody(event)];
            case 1:
                requestBody = _a.sent();
                db = useDatabase("myDB");
                return [4 /*yield*/, db.sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["CREATE TABLE IF NOT EXISTS teams\n    (\n        ID INTEGER PRIMARY KEY AUTOINCREMENT,\n        name TEXT NOT NULL,\n        nationality TEXT NOT NULL,\n        color1 TEXT NOT NULL,\n        color2 TEXT NOT NULL,\n        color3 TEXT NOT NULL,\n        creationyear INTEGER NOT NULL,\n        logo INTEGER SECUNDARY KEY,\n        driverpolitics INTEGER,\n        driver1 INTEGER,\n        driver2 INTEGER,\n        testdriver INTEGER,\n        sponzor1 INTEGER,\n        sponzor2 INTEGER,\n        sponzor3 INTEGER,\n        championshipplace INTEGER,\n        aerodynamics INTEGER,\n        gearbox INTEGER,\n        brakes INTEGER,\n        rearwing INTEGER,\n        frontwing INTEGER,\n        reliability INTEGER,\n        historytitles INTEGER,\n        historywins INTEGER,\n        historypodiums INTEGER,\n        fanspopularity INTEGER\n    )"], ["CREATE TABLE IF NOT EXISTS teams\n    (\n        ID INTEGER PRIMARY KEY AUTOINCREMENT,\n        name TEXT NOT NULL,\n        nationality TEXT NOT NULL,\n        color1 TEXT NOT NULL,\n        color2 TEXT NOT NULL,\n        color3 TEXT NOT NULL,\n        creationyear INTEGER NOT NULL,\n        logo INTEGER SECUNDARY KEY,\n        driverpolitics INTEGER,\n        driver1 INTEGER,\n        driver2 INTEGER,\n        testdriver INTEGER,\n        sponzor1 INTEGER,\n        sponzor2 INTEGER,\n        sponzor3 INTEGER,\n        championshipplace INTEGER,\n        aerodynamics INTEGER,\n        gearbox INTEGER,\n        brakes INTEGER,\n        rearwing INTEGER,\n        frontwing INTEGER,\n        reliability INTEGER,\n        historytitles INTEGER,\n        historywins INTEGER,\n        historypodiums INTEGER,\n        fanspopularity INTEGER\n    )"])))];
            case 2:
                _a.sent();
                return [4 /*yield*/, db.sql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        INSERT INTO teams (\n            name, nationality, color1, color2, color3, creationyear, logo, \n            driverpolitics, driver1, driver2, testdriver, sponzor1, sponzor2, sponzor3,\n            championshipplace, aerodynamics, gearbox, brakes, rearwing, frontwing, \n            reliability, historytitles, historywins, historypodiums, fanspopularity\n        ) VALUES (\n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", "\n        ) RETURNING *;\n    "], ["\n        INSERT INTO teams (\n            name, nationality, color1, color2, color3, creationyear, logo, \n            driverpolitics, driver1, driver2, testdriver, sponzor1, sponzor2, sponzor3,\n            championshipplace, aerodynamics, gearbox, brakes, rearwing, frontwing, \n            reliability, historytitles, historywins, historypodiums, fanspopularity\n        ) VALUES (\n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", ", ", ", ", ", \n            ", "\n        ) RETURNING *;\n    "])), requestBody.name, requestBody.nationality, requestBody.color1, requestBody.color2, requestBody.color3, requestBody.creationyear, requestBody.logo, requestBody.driverpolitics, requestBody.driver1, requestBody.driver2, requestBody.testdriver, requestBody.sponzor1, requestBody.sponzor2, requestBody.sponzor3, requestBody.championshipplace, requestBody.aerodynamics, requestBody.gearbox, requestBody.brakes, requestBody.rearwing, requestBody.frontwing, requestBody.reliability, requestBody.historytitles, requestBody.historywins, requestBody.historypodiums, requestBody.fanspopularity)];
            case 3:
                result = _a.sent();
                return [2 /*return*/, result];
        }
    });
}); });
var templateObject_1, templateObject_2;
