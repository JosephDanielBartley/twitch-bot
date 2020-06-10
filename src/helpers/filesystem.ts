import * as fs from 'fs';
import * as path from 'path';
import { cwd } from 'process';

export function readFileOrCreate(filePath: string) {
    const exists = fs.existsSync(filePath);
    if (exists) {
        const result = fs.readFileSync(filePath).toString();
        return result;
    } else {
        if (!fs.existsSync(path.join(cwd(), 'data'))) {
            fs.mkdirSync(path.join(cwd(), 'data'));
        }
        fs.writeFileSync(filePath, JSON.stringify(''));
        return '';
    }
}

export function writeFile(filePath: string, data: any) {
    if (!fs.existsSync(path.join(cwd(), 'data'))) {
        fs.mkdirSync(path.join(cwd(), 'data'));
    }
    fs.writeFileSync(filePath, data);
}