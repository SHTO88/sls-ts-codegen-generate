interface GenerateCodeOptions {
    functionName: string;
    folderPath: string;
    templateFile: string;
    fileName: string;
}
export declare const generateCode: ({ functionName, folderPath, templateFile, fileName, }: GenerateCodeOptions) => void;
export {};
