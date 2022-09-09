import React, { useEffect, useState } from 'react'
import VolcanoItem from '../Composants/VolcanoItem'
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
              <VolcanoItem volcano={volcano} />
            )
        }
      </ul>

    </div>
  )
}

export default VolcanoListPage