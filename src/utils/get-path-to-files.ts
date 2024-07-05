import path from "path";

export function getPathToFiles(filename:string,foldername=""
):string {
    const dirname = path.resolve(__dirname,'../../')
    const folder = path.join('uploads',foldername)

    const filePath = path.join(dirname,folder,filename);
    return filePath
}