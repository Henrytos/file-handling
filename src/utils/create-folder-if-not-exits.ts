import fs from 'fs'
export async function createFolderIfNotExists(pathname:string){
    fs.mkdirSync(pathname, { recursive: true });
}