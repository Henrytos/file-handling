import path from "path";

export function getPathToFolder(foldername=""
):string {
    const dirname = path.resolve(__dirname,'../../')
    const folderPath = path.join(dirname,'uploads',foldername);

    return folderPath
}