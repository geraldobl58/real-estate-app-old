import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardFeature from '../../components/CardFeature';

import api from '../../services/api';

import { Wrapper, NoEmpty } from './styled';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/imoveis');
      setProperties(response.data);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Wrapper>
        {properties.length >= 1 ? (
          <CardFeature properties={properties} />
        ) : (
          <NoEmpty>Não existe imóveis em detaque no momento</NoEmpty>
        )}
      </Wrapper>
    </>
  );
}
