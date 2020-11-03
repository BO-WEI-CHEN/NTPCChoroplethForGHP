import json
import pandas as pd
import plotly.express as px

with open(
    "/Users/martinchen/Desktop/IFSMCChoroplethGeoMap/json/NTPC29GEO.json"
) as jsonfile:
    geojson = json.load(jsonfile)

df = pd.read_csv(r"/Users/martinchen/Desktop/IFSMCChoroplethGeoMap/data/data.csv")
geojson = geojson

fig = px.choropleth_mapbox(
    df,
    geojson=geojson,
    color="不合格數",
    locations="name",
    featureidkey="properties.name",
    center={"lat": 25.023157, "lon": 121.4580659},
    mapbox_style="carto-positron",
    zoom=9,
    opacity=0.7,
    animation_group="name",
)
fig.update_layout(margin={"r": 0, "t": 0, "l": 0, "b": 0})
fig.show()