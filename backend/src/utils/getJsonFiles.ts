import fs from "fs";
import path from "path";

const getJsonFiles = (dirPath: string): string[] => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    let jsonFiles: string[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            const nested = getJsonFiles(fullPath);
            jsonFiles = [...jsonFiles, ...nested];
        } else if (entry.name.endsWith(".json")) {
            jsonFiles.push(fullPath);
        }
    }

    return jsonFiles;
};

export default getJsonFiles;