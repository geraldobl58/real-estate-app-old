import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdMyLocation } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import { FaBath, FaWaveSquare } from 'react-icons/fa';
import { RiHotelBedLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

import {
  Wrapper,
  WrapperTitle,
  WrapperCard,
  WrapperAttributes,
} from './styled';

import api from '../../services/api';

import { BASE_URL } from '../../utils/baseUrl';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/imoveis');
      console.log(response.data);
      setProperties(response.data);
    }
    getData();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <Wrapper>
        <WrapperTitle>
          <h1>Imóveis em Destaque</h1>
          <h3>Propriedades escolhidas a dedo por nossa equipe</h3>
        </WrapperTitle>
        <WrapperCard>
          {properties.map((property) => (
            <Link to={`/property/${property.id}`} key={property.id}>
              <div>
                <img
                  src={`${BASE_URL}${property.cover.url}`}
                  alt={property.title}
                />
                <span>{property.label}</span>
                <span>{property.status}</span>
                <strong>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(property.price)}
                </strong>
                <div>
                  <p>{property.type}</p>
                  <h3>{property.title}</h3>
                  <small>
                    <MdMyLocation size={16} />
                    {property.address}
                  </small>
                  <WrapperAttributes>
                    <ul>
                      <li>
                        <GiHomeGarage size={16} />
                        <b>{property.garage}</b>
                      </li>
                      <li>
                        <FaBath size={16} />
                        <b>{property.bathrooms}</b>
                      </li>
                      <li>
                        <RiHotelBedLine size={20} />
                        <b>{property.bedroom}</b>
                      </li>
                      <li>
                        <FaWaveSquare size={16} />
                        <b>{property.sqft}m²</b>
                      </li>
                    </ul>
                  </WrapperAttributes>
                </div>
              </div>
            </Link>
          ))}
        </WrapperCard>
      </Wrapper>
    </>
  );
}
