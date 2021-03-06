var data = [
  {
    type: "choroplethmapbox",
    name: "新北市GHP案件面量圖",
    geojson:
      "https://raw.githubusercontent.com/BO-WEI-CHEN/NTPCChoroplethForGHP/master/json/NTPC29GEO.json",
    featureidkey: "properties.name",
    locations: [
      "永和區",
      "新店區",
      "土城區",
      "蘆洲區",
      "五股區",
      "坪林區",
      "平溪區",
      "烏來區",
      "淡水區",
      "瑞芳區",
      "林口區",
      "三芝區",
      "八里區",
      "三峽區",
      "鶯歌區",
      "中和區",
      "樹林區",
      "深坑區",
      "板橋區",
      "石碇區",
      "新莊區",
      "泰山區",
      "三重區",
      "雙溪區",
      "貢寮區",
      "汐止區",
      "萬里區",
      "金山區",
      "石門區",
    ],
    z: [
      14,
      140,
      155,
      147,
      132,
      146,
      51,
      137,
      146,
      36,
      145,
      141,
      149,
      151,
      138,
      158,
      164,
      141,
      146,
      145,
      142,
      150,
      155,
      60,
      156,
      161,
      147,
      164,
      150,
    ],
    zmin: 20,
    zmax: 180,
    colorbar: {
      y: 0,
      yanchor: "bottom",
      title: { text: "民眾檢舉", side: "right" },
    },
    marker: { opacity: 0.6 },
  },
];

var layout = {
  mapbox: {
    style: "dark",
    // "lat": 25.023157, "lon": 121.4580659
    center: { lon: 121.4580659, lat: 25.023157 },
    zoom: 9.4,
  },
  //width: 600,
  height: 750,
  margin: { t: 0, b: 0 },
};

var config = {
  mapboxAccessToken:
    "pk.eyJ1IjoiYm93ZWljaGVuIiwiYSI6ImNraDFkcmg5cjBobjAyem10OHFjY2p4aW0ifQ.8W699mymG59rB3NM-rUbRw",
};

Plotly.newPlot("mapbox", data, layout, config);
