import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdMyLocation } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import { FaBath, FaWaveSquare } from 'react-icons/fa';
import { RiHotelBedLine } from 'react-icons/ri';

import { BASE_URL } from '../../utils/baseUrl';

import { WrapperTitle, WrapperCard, WrapperAttributes } from './styled';

export default function CardDiscount({ properties }) {
  return (
    <>
      <WrapperTitle>
        <h1>Imóveis com super desconto</h1>
        <h3>Confira imóveis com ótimos descontos</h3>
      </WrapperTitle>
      <WrapperCard>
        {properties.map((property) => {
          return (
            property.status === 'Desconto' && (
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
            )
          );
        })}
      </WrapperCard>
    </>
  );
}

CardDiscount.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.object).isRequired,
};
