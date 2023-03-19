import * as fs from "fs-extra";
import * as path from "path";
import * as handlebars from "handlebars";

interface GenerateCodeOptions {
  functionName: string;
  folderPath: string;
  templateFile: string;
  fileName: string;
}

export const generateCode = ({
  functionName,
  folderPath,
  templateFile,
  fileName,
}: GenerateCodeOptions) => {
  const folderFullPath = path.join(process.cwd(), folderPath);
  const templatePath = path.join(__dirname, "../templates", templateFile);
  const templateString = fs.readFileSync(templatePath, "utf-8");
  const template = handlebars.compile(templateString);
  const code = template({ functionName });

  fs.ensureDirSync(folderFullPath);

  const filePath = path.join(folderFullPath, fileName);
  fs.writeFileSync(filePath, code);
};
