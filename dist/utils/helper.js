"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCode = void 0;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const handlebars = __importStar(require("handlebars"));
const generateCode = ({ functionName, folderPath, templateFile, fileName, }) => {
    const folderFullPath = path.join(process.cwd(), folderPath);
    const templatePath = path.join(__dirname, "../templates", templateFile);
    const templateString = fs.readFileSync(templatePath, "utf-8");
    const template = handlebars.compile(templateString);
    const modelName = functionName.charAt(0).toUpperCase() + functionName.slice(1);
    const code = template({ functionName, modelName });
    fs.ensureDirSync(folderFullPath);
    const filePath = path.join(folderFullPath, fileName);
    fs.writeFileSync(filePath, code);
};
exports.generateCode = generateCode;
//# sourceMappingURL=helper.js.map