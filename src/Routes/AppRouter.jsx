import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Pages/Layout/Layout';
import Gallery from '../Pages/Gallery/Gallery';
import Address from '../Pages/Address/Address';
import Works from '../Pages/Works/Works';
import Social from '../Pages/Social/Social';
import NotFound from '../Pages/PageNotFound/PageNotFound';

const AppRouter = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Social />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="works" element={<Works />} />
          <Route path="address" element={<Address />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    );
}

export default AppRouter;
