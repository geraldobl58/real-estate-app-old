/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

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

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green', padding: 100 }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

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
          <Slider {...settings}>
            {gallery.map((image) => (
              <ul key={image.id}>
                <li key={image.id}>
                  <img src={`${BASE_URL}${image.url}`} alt={image.title} />
                </li>
              </ul>
            ))}
          </Slider>
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
