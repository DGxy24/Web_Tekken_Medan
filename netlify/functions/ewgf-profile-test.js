
exports.handler = async function () {
    const tekkenId = "3qtdnHGhGJQQ";

    try {
        const response = await fetch(
            `https://ewgf.gg/player/${tekkenId}`,
            {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                    "Accept": "text/html",
                    "Accept-Language": "en-US,en;q=0.9"
                }
            }
        );

        const html = await response.text();

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({
                    error: "EWGF menolak request",
                    httpStatus: response.status,
                    pageLength: html.length,
                    preview: html.substring(0, 500)
                }, null, 2)
            };
        }

        const currentRanks = [
            ...html.matchAll(
                /\\"currentSeasonRank\\":\\"([^\\"]+)\\"/g
            )
        ].map(match => match[1]);

        const highestRanks = [
            ...html.matchAll(
                /\\"allTimeHighestRank\\":\\"([^\\"]+)\\"/g
            )
        ].map(match => match[1]);

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                httpStatus: response.status,
                pageLength: html.length,
                currentSeasonRanks: currentRanks,
                allTimeHighestRanks: highestRanks
            }, null, 2)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message
            })
        };
    }
};
