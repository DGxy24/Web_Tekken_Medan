
exports.handler = async function () {
    const tekkenId = "3qtdnHGhGJQQ";
    const url = `https://www.ewgf.gg/player/${tekkenId}`;

    try {
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0",
                "Accept": "text/html"
            }
        });

        const html = await response.text();

        const keywords = [
            "All time highest rank",
            "allTimeHighestRank",
            "God of Destruction"
        ];

        const snippets = {};

        for (const keyword of keywords) {
            const index = html.toLowerCase().indexOf(
                keyword.toLowerCase()
            );

            snippets[keyword] = index !== -1
                ? html.substring(
                    Math.max(0, index - 500),
                    Math.min(html.length, index + 1000)
                )
                : "Tidak ditemukan";
        }

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                httpStatus: response.status,
                contentType: response.headers.get("content-type"),
                pageLength: html.length,
                snippets
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
