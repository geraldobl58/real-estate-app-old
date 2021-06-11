import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import CardFeature from '../../components/CardFeature';
import CardDiscount from '../../components/CardDiscount';

import { useLoading } from '../../hooks/Loading';

import api from '../../services/api';

import { Wrapper } from './styled';

export default function Home() {
  const [properties, setProperties] = useState([]);

  const { setIsLoading } = useLoading();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await api.get('/imoveis');
      setProperties(response.data);
      setIsLoading(false);
    }
    getData();
  }, [setIsLoading]);

  return (
    <>
      <Header />
      <Banner />
      <Wrapper>
        {properties.length >= 1 && <CardFeature properties={properties} />}
        {properties.length >= 1 && <CardDiscount properties={properties} />}
      </Wrapper>
    </>
  );
}
