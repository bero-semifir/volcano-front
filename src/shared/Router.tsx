import React from 'react'
import { Route, Routes } from 'react-router-dom';
import VolcanoListPage from '../Volcan/Pages/VolcanoList.page';
import VolcanoDetailsPage from '../Volcan/Pages/VolcanoDetails.page';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<VolcanoListPage />} />
        <Route path='/volcanoes/:id' element={<VolcanoDetailsPage />} />
    </Routes>
  )
}

export default Router