"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
// server/api/teams/[id].ts
exports.default = defineEventHandler(function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var id, method, db, result, requestBody, current, currentData, updated, result, error_1, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = getRouterParam(event, 'id');
                method = event.method;
                console.log('Method:', method, 'ID:', id);
                db = useDatabase("myDB");
                if (!(method === 'GET')) return [3 /*break*/, 2];
                return [4 /*yield*/, db.sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["SELECT * FROM teams WHERE ID = ", ""], ["SELECT * FROM teams WHERE ID = ", ""])), id)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result];
            case 2:
                if (!(method === 'PUT' || method === 'PATCH')) return [3 /*break*/, 8];
                _a.label = 3;
            case 3:
                _a.trys.push([3, 7, , 8]);
                return [4 /*yield*/, readBody(event)];
            case 4:
                requestBody = _a.sent();
                console.log('Request body:', requestBody);
                return [4 /*yield*/, db.sql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["SELECT * FROM manager WHERE ID = ", ""], ["SELECT * FROM manager WHERE ID = ", ""])), id)];
            case 5:
                current = _a.sent();
                console.log('Current data:', current);
                currentData = void 0;
                if (Array.isArray(current) && current.length > 0) {
                    currentData = current[0];
                }
                else if (current.rows && current.rows.length > 0) {
                    currentData = current.rows[0];
                }
                else {
                    currentData = current;
                }
                console.log('Parsed current data:', currentData);
                if (!currentData || !currentData.ID) {
                    throw createError({
                        statusCode: 404,
                        message: 'Tým nebyl nalezen'
                    });
                }
                updated = __assign(__assign({}, currentData), requestBody);
                console.log('Updated data:', updated);
                return [4 /*yield*/, db.sql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                UPDATE teams SET\n                    name = ", ",\n                    nationality = ", ",\n                    color1 = ", ",\n                    color2 = ", ",\n                    color3 = ", ",\n                    creationyear = ", ",\n                    logo = ", ",\n                    driverpolitics = ", ",\n                    driver1 = ", ",\n                    driver2 = ", ",\n                    testdriver = ", ",\n                    sponzor1 = ", ",\n                    sponzor2 = ", ",\n                    sponzor3 = ", ",\n                    championshipplace = ", ",\n                    aerodynamics = ", ",\n                    gearbox = ", ",\n                    brakes = ", ",\n                    rearwing = ", ",\n                    frontwing = ", ",\n                    reliability = ", ",\n                    historytitles = ", ",\n                    historywins = ", ",\n                    historypodiums = ", ",\n                    fanspopularity = ", "\n                WHERE ID = ", "\n                RETURNING *\n            "], ["\n                UPDATE teams SET\n                    name = ", ",\n                    nationality = ", ",\n                    color1 = ", ",\n                    color2 = ", ",\n                    color3 = ", ",\n                    creationyear = ", ",\n                    logo = ", ",\n                    driverpolitics = ", ",\n                    driver1 = ", ",\n                    driver2 = ", ",\n                    testdriver = ", ",\n                    sponzor1 = ", ",\n                    sponzor2 = ", ",\n                    sponzor3 = ", ",\n                    championshipplace = ", ",\n                    aerodynamics = ", ",\n                    gearbox = ", ",\n                    brakes = ", ",\n                    rearwing = ", ",\n                    frontwing = ", ",\n                    reliability = ", ",\n                    historytitles = ", ",\n                    historywins = ", ",\n                    historypodiums = ", ",\n                    fanspopularity = ", "\n                WHERE ID = ", "\n                RETURNING *\n            "])), updated.name, updated.nationality, updated.color1, updated.color2, updated.color3, updated.creationyear, updated.logo, updated.driverpolitics, updated.driver1, updated.driver2, updated.testdriver, updated.sponzor1, updated.sponzor2, updated.sponzor3, updated.championshipplace, updated.aerodynamics, updated.gearbox, updated.brakes, updated.rearwing, updated.frontwing, updated.reliability, updated.historytitles, updated.historywins, updated.historypodiums, updated.fanspopularity, id)];
            case 6:
                result = _a.sent();
                console.log('Update result:', result);
                return [2 /*return*/, result];
            case 7:
                error_1 = _a.sent();
                console.error('Update error:', error_1);
                throw createError({
                    statusCode: 500,
                    message: error_1 instanceof Error ? error_1.message : 'Chyba při aktualizaci'
                });
            case 8:
                if (!(method === 'DELETE')) return [3 /*break*/, 10];
                return [4 /*yield*/, db.sql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            DELETE FROM teams WHERE ID = ", " RETURNING *\n        "], ["\n            DELETE FROM teams WHERE ID = ", " RETURNING *\n        "])), id)];
            case 9:
                result = _a.sent();
                return [2 /*return*/, {
                        success: true,
                        message: 'Tým byl smazán',
                        data: result
                    }];
            case 10: throw createError({
                statusCode: 405,
                message: "Metoda ".concat(method, " nen\u00ED podporov\u00E1na")
            });
        }
    });
}); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
