export type Volcano = {
    "Volcano Name": string,
    Country: string,
    Region: string,
    Location: GeoJSON,
    Elevation: number,
    type: string,
    Status: string,
    "Last Known Eruption": string,
    id: string,
};

type GeoJSON = {
    type: "Point" | "Polygon" | "Sphere",
    coordinates: number[],
};
