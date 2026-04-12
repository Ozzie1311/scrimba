import { sendResponse } from "../utils/sendResponse.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";

export const getHandler = async (res) => {
    const data = await getData()
    const strData = JSON.stringify(data)
    sendResponse(res, 200, "application/json", strData)
}

export const handlePost = async (req) => {
    console.log("POST received")
    const rawBody = await parseJSONBody(req)
    console.log(rawBody)
}