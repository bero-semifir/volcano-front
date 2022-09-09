import React from 'react'
import { Link } from 'react-router-dom'
import { Volcano } from '../Models/Volcano'

type VolcanoItemProps = {
    volcano: Volcano
}

const VolcanoItem = ({ volcano }: VolcanoItemProps) => {
  return (
    <Link to={`/volcanoes/${volcano._id}`}>
      <li key={volcano.id}>{volcano['Volcano Name']} {volcano.Status === "Fumarolic" ? '🌋' : null }
          <span>{volcano.Location?.coordinates[1] + ", " + volcano.Location?.coordinates[0]}</span>
      </li>
    </Link>
  )
}

export default VolcanoItem