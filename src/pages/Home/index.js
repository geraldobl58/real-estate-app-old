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

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/properties');
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
                <img src={property.cover} alt={property.title} />
                <span>{property.label}</span>
                <span>{property.status}</span>
                <strong>R${property.price}</strong>
                <div>
                  <p>{property.type}</p>
                  <h3>{property.title}</h3>
                  <small>
                    <MdMyLocation size={16} />
                    {property.address}
                  </small>
                  <WrapperAttributes>
                    {property.attributes.map((attribute) => (
                      <ul key={property.id}>
                        <li>
                          <GiHomeGarage size={16} />
                          <b>{attribute.garage}</b>
                        </li>
                        <li>
                          <FaBath size={16} />
                          <b>{attribute.garage}</b>
                        </li>
                        <li>
                          <RiHotelBedLine size={20} />
                          <b>{attribute.bedroom}</b>
                        </li>
                        <li>
                          <FaWaveSquare size={16} />
                          <b>{attribute.sqft}m²</b>
                        </li>
                      </ul>
                    ))}
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
