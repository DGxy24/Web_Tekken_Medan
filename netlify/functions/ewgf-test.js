
exports.handler = async function () {
    const apiKey = process.env.EWGF_API_KEY;

    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "EWGF_API_KEY belum terbaca oleh Netlify"
            })
        };
    }

    try {
        // Menggunakan profil DGx sebagai sampel pengujian
        const response = await fetch(
            "https://api.ewgf.gg/external/battles/3qtdnHGhGJQQ",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    Accept: "application/json"
                }
            }
        );

        const rawData = await response.text();

        let data;
        try {
            data = JSON.parse(rawData);
        } catch {
            data = { rawResponse: rawData };
        }

        return {
            statusCode: response.status,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                apiStatus: response.status,
                result: data
            }, null, 2)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: "Gagal menghubungi EWGF API",
                detail: error.message
            })
        };
    }
};
