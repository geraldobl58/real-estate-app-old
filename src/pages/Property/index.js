import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';

import {
  WrapperPropertySingle,
  WrapperPropertySingleGallery,
  WrapperPropertySingleContent,
  WrapperPropertySingleContentDetails,
} from './styled';

import api from '../../services/api';

import { BASE_URL } from '../../utils/baseUrl';

export default function Property() {
  const [property, setProperty] = useState([]);
  const [gallery, setGallery] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/imoveis/${params.id}`);
      console.log(response.data);
      setProperty(response.data);
      setGallery(response.data.gallery);
    }

    getData();
  }, [params.id]);

  return (
    <>
      <Header />
      <WrapperPropertySingle>
        <WrapperPropertySingleGallery>
          <ul>
            {gallery.map((image) => (
              <li key={image.id}>
                <img src={`${BASE_URL}${image.url}`} alt={image.title} />
              </li>
            ))}
          </ul>
        </WrapperPropertySingleGallery>
        <WrapperPropertySingleContent>
          <div>
            <h3>{property.title}</h3>
            <h3>R${property.price}</h3>
          </div>
          <small>{property.address}</small>
          <div>
            <strong>dasda</strong>
          </div>
          <p>{property.description}</p>
          <WrapperPropertySingleContentDetails>
            <div>
              <h3>Detalhes</h3>
            </div>
          </WrapperPropertySingleContentDetails>
        </WrapperPropertySingleContent>
      </WrapperPropertySingle>
    </>
  );
}
