// netlify/functions/highest-rank.mjs
const TEKKEN_ID = "3qtdnHGhGJQQ";

export default async () => {
  try {
    const res = await fetch(`https://api.ewgf.gg/external/profile/${TEKKEN_ID}`, {
      headers: { Authorization: `Bearer ${process.env.EWGF_API_KEY}` },
    });

    if (!res.ok) {
      return Response.json({ error: `EWGF API error ${res.status}` }, { status: 502 });
    }

    const profile = await res.json();

    // GANTI sesuai nama field asli (lihat catatan di bawah)
    const highestRank = profile.highestRank;

    return Response.json(
      { highestRank },
      {
        headers: {
          // di-cache 1 jam di CDN Netlify, boleh pakai data lama 1 hari kalau API error
          "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
};