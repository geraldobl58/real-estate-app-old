import React, { useState, useEffect } from 'react';
import { MdMyLocation } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import { FaBath, FaWaveSquare } from 'react-icons/fa';
import { RiHotelBedLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Banner from '../../components/Banner';

import {
  Wrapper,
  WrapperSearch,
  WrapperSearchForm,
  WrapperCard,
  WrapperAttributes,
} from './styled';

import api from '../../services/api';

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  useEffect(() => {
    async function getData() {
      const response = await api.get('/properties');
      console.log(response.data);
      setProperties(response.data);
    }

    getData();
  }, []);

  useEffect(() => {
    setFilteredProperties(
      properties
        .filter((propertyFilter) => {
          return propertyFilter.title
            .toLowerCase()
            .includes(search.toLocaleLowerCase());
        })
        .filter((propertyFilter) => {
          return propertyFilter.label
            .toLowerCase()
            .includes(select.toLocaleLowerCase());
        })
    );
  }, [search, select, properties]);

  return (
    <>
      <Header />
      <Banner />
      <Wrapper>
        <WrapperSearch>
          <WrapperSearchForm>
            <input
              type="text"
              placeholder="Pesquisar"
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
              <option value="">Selecione</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>
          </WrapperSearchForm>
        </WrapperSearch>
        <WrapperCard>
          {filteredProperties.map((property) => (
            <div key={property.id}>
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
          ))}
        </WrapperCard>
      </Wrapper>
    </>
  );
}
