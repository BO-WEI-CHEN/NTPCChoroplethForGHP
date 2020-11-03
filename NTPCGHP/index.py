import plotly.express as px

df = px.data.election()
geojson = px.data.election_geojson()

fig = px.choropleth(
    df,
    geojson=geojson,
    color="winner",
    locations="district",
    featureidkey="properties.district",
    projection="mercator",
)
fig.update_geos(fitbounds="locations", visible=False)
fig.update_layout(margin={"r": 0, "t": 0, "l": 0, "b": 0})
fig.show()