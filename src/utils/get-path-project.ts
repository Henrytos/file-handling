import path from "path";

export function getPathToFiles(filename:string):string {
    const dirname = path.resolve(__dirname,'../../')
    const folder = 'uploads'

    const filePath = path.join(dirname,folder,filename);
    return filePath
}