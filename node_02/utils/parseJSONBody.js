export const parseJSONBody = async (req) => {
    let body = ''

    try {
        for await (let chunks of req) {
            body += chunks
        }
        const parseBody = JSON.parse(body)
        return parseBody
    } catch(err) {
        throw new Error(`Invalid JSON format ${err}`)
    }
}