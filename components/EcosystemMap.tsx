// /components/EcosystemMap.tsx
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const center: [number, number] = [-1.9441, 30.2] // Centered to show both Kigali and Rwamagana

const createEmojiIcon = (emoji: string) => {
  return new L.DivIcon({
    html: `<div style="font-size: 20px; line-height: 1;">${emoji}</div>`,
    className: 'custom-emoji-icon',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  })
}

const points: Array<{ name: string; coords: [number, number]; emoji: string }> = [
  { name: 'Farmers - Rwamagana', coords: [-1.9467, 30.4347], emoji: '🥕' },
  { name: 'Retailers - Kimironko', coords: [-1.9417, 30.1034], emoji: '🏬' },
  { name: 'Packing Center - Kimironko', coords: [-1.9437, 30.1054], emoji: '🏭' },
]

export default function EcosystemMap() {
  return (
    <MapContainer
      center={center}
      zoom={11}
      scrollWheelZoom={false}
      className="h-80 w-full rounded-2xl"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {points.map((point) => (
        <Marker key={point.name} position={point.coords} icon={createEmojiIcon(point.emoji)}>
          <Popup>{point.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
