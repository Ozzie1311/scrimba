import path from "node:path"
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js"
import { getContentType } from "./getContentType.js"


export const serveStatic = async (req, res, baseDir) => {
    const publicPath = path.join(baseDir, "public")
    const filePath = path.join(publicPath, req.url === "/" ? 
        "index.html" : req.url
    )
    try {
        const content = await fs.readFile(filePath)
        const ext = path.extname(filePath)
        const contentType = getContentType(ext)
        sendResponse(res, 200, contentType, content)
    } catch (error) {
        console.log(error);
    }
}