import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Volcano } from '../Models/Volcano';
import VolcanoService from '../Services/Volcano.service';

const VolcanoDetailsPage = () => {
  const { id } = useParams();

  const [volcano, setVolcano] = useState< Volcano | undefined >(undefined);

  useEffect(() => {
    // TODO: Créer la route dans le service
    VolcanoService.getVolcanoById(id!).then((resp)=>{
        if(resp.statusText === "OK")
            setVolcano(resp.data);
    })
  }, [id])
  

  return (
    <div>
        {
            volcano &&
            <div>

                <h1>{volcano["Volcano Name"] }</h1>

                <div>
                    <p>Altitude: { volcano.Elevation }m</p>
                    <p>Status: { volcano.Status }</p>
                    <p>Type: { volcano.type }</p>
                    <p>Date de la dernière éruption: { volcano['Last Known Eruption'] }</p>
                    <p>Pays: { volcano.Country }</p>
                    <p>Région: { volcano.Region }</p>
                </div>
            </div>
        }
    </div>
  )
}

export default VolcanoDetailsPage;
