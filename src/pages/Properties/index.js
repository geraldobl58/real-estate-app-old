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
  WrapperSearch,
  WrapperSearchForm,
  WrapperCard,
  WrapperAttributes,
  WrapperNotFound,
} from './styled';

import api from '../../services/api';

import { useLoading } from '../../hooks/Loading';

import { BASE_URL } from '../../utils/baseUrl';

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  const { setIsLoading } = useLoading();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await api.get('/imoveis');
      console.log(response.data);
      setProperties(response.data);
      setIsLoading(false);
    }

    getData();
  }, [setIsLoading]);

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
              <option value="Venda">Venda</option>
              <option value="Alugar">Alugar</option>
            </select>
          </WrapperSearchForm>
        </WrapperSearch>
        <WrapperCard>
          {filteredProperties &&
            filteredProperties.map((property) => (
              <Link to={`/property/${property.id}`} key={property.id}>
                <div key={property.id}>
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
        {filteredProperties.length === 0 && (
          <WrapperNotFound>
            <h1>Nenhum imóvel encontrado com sua pesquisa, tente novamente!</h1>
          </WrapperNotFound>
        )}
      </Wrapper>
    </>
  );
}
