import React from 'react';
import styled from 'styled-components/native';

const Preview = ({ label, item }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <MoviePreviewSwcroll horizontal>
        {item.map((movie, item) => {
          return (
            <MovieCard key={String(item)}>
              <MoviePosterPreview resizeMode="cover" source={movie} />
            </MovieCard>
          );
        })}
      </MoviePreviewSwcroll>
    </Container>
  );
};


const Container = styled.View`
	padding: 20px 0;
`;

const Label = styled.Text`
	color: #fff;
	font-size: 16px;
	margin: 0 0 5px 10px;
`;
const MoviePreviewSwcroll = styled.ScrollView`
	padding-left: 10px;
`;

const MoviePosterPreview = styled.Image`
  	width: 100px;
 	height: 100px;
 	border-radius:50px;
`;

const MovieCard = styled.View`
	padding-right: 9px;
`;

export default Preview;