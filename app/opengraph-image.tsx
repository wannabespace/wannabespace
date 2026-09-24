/* oxlint-disable shadcn/no-inline-styles, shadcn/no-raw-colors -- satori renders inline styles only */
import { ImageResponse } from "next/og";

export const alt = "Wannabe Space — We like making cool products.";
export const size = { height: 630, width: 1200 };
export const contentType = "image/png";

// Google Fonts serves woff (satori-compatible) to older user agents.
const loadInter = async (weight: number) => {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 6.1; rv:27.0) Gecko/20100101 Firefox/27.0",
      },
    }
  ).then((res) => res.text());
  const url = css.split("url(")[1]?.split(")")[0];
  if (!url) {
    throw new Error("Inter woff not found in Google Fonts CSS");
  }
  return fetch(url).then((res) => res.arrayBuffer());
};

const Image = async () => {
  const [regular, medium] = await Promise.all([loadInter(400), loadInter(500)]);

  return new ImageResponse(
    <div
      style={{
        background:
          "radial-gradient(circle at 15% 20%, #8259ff 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(196,181,255,0.55) 0%, transparent 45%), radial-gradient(circle at 75% 85%, #4b0af5 0%, transparent 50%), radial-gradient(circle at 30% 90%, #3508c2 0%, transparent 45%), #1d0773",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter",
        height: "100%",
        justifyContent: "space-between",
        padding: 72,
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          fontSize: 30,
          fontWeight: 500,
          gap: 16,
        }}
      >
        <svg viewBox="0 0 617 352" width="46" height="26">
          <path
            fill="#fff"
            d="M216.486 31.5012L263.952 0L287.874 42.0805L409.269 253.206L463.1 159.585H439.368C422.732 159.585 407.393 150.566 399.252 135.998L362.6 70.4154H617L472.711 321.221C461.752 340.267 441.509 352 419.602 352H363.535L288.096 220.91L236.843 131.705L236.855 131.684L208.134 81.7151C193.818 56.1755 207.815 37.5976 216.602 31.5012H216.486Z"
          />
          <path
            fill="#fff"
            d="M288.096 220.91L230.421 321.209C219.465 340.263 199.217 352 177.306 352H121.248L6.60681 152.622L6.62629 152.618C-8.64337 126.152 6.01411 107.593 15.2522 101.621L61.8903 70.4351L166.982 253.207L219.435 161.981L288.096 220.91Z"
          />
        </svg>
        Wannabe Space
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontSize: 96,
            fontWeight: 500,
            letterSpacing: "-0.035em",
            lineHeight: 1,
            maxWidth: 900,
          }}
        >
          We like making cool products.
        </div>
        <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 32 }}>
          Currently building Tamery and Lang.zone
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { data: regular, name: "Inter", style: "normal", weight: 400 },
        { data: medium, name: "Inter", style: "normal", weight: 500 },
      ],
    }
  );
};

export default Image;
