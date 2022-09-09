import React, { useEffect, useState } from 'react'
import { Volcano } from '../Models/Volcano'
import VolcanoService from '../Services/Volcano.service'

const VolcanoListPage = () => {

  const [volcanoes, setVolcanoes] = useState<Volcano[]>([])

  useEffect(() => {
    VolcanoService.getVolcanoes().then(
      (resp) => {
        console.log(resp);
        if(resp.statusText === 'OK')
          setVolcanoes(resp.data);
      }
    )
  }, [])
  

  return (
    <div>
      <h1>Liste des Volcans 🌋</h1>

      <ul>
        {
          volcanoes.map(
            (volcano) => 
              <li key={volcano.id}>{volcano['Volcano Name']} {volcano.Status === "Fumarolic" ? '🌋' : null }</li>
            )
        }
      </ul>

    </div>
  )
}

export default VolcanoListPage