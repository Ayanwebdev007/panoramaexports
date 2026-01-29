import React from 'react'
import LiveMap from './LiveMap'

function UnitLocationMap(unit) {
    const units = [unit];
  return (
      <div>
          <LiveMap locations={units} center={[29.0588, 76.0856]} zoom={5} />
      </div>
  );
}

export default UnitLocationMap