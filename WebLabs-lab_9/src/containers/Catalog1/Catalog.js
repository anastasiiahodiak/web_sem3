import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from '../Filter1/Filter';
import MainCatalog from '../MainCatalog1/MainCatalog';
import { getShips } from '../../service/api';

const Catalog = () => {
  const [ships, setShips] = useState([]);
  const [filters, setFilters] = useState({ title: '', price: 'all', type: 'all', name: 'all', text: '' });

  const handleApplyFilter = (newFilters) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    getShips().then((ships) => {
      setShips(ships);
    });
  }, []);

  return (
    <div>
      <Filter filters={filters} handleApplyFilter={handleApplyFilter} />
      <MainCatalog filters={filters} shipsList={ships} />
    </div>
  );
};

export default Catalog;
