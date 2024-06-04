import { LatLngTuple } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface IPosition {
  description: string;
  cordinates: LatLngTuple;
}

const positions: IPosition[] = [
  {
    description: "A beautiful place",
    cordinates: [33.67707437877149, 73.0749798955963],
  },
  {
    description: "Another amazing place",
    cordinates: [33.70394013737759, 73.06889719900538],
  },
];

export const SiteMap = () => {
  return (
    <MapContainer
      center={[33.69161172903468, 73.06758863953092]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((el, i) => {
        return (
          <Marker key={i} position={el.cordinates}>
            <Popup>{el.description}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};
