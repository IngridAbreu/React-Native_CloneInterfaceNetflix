import React from 'react'

import { StatusBar, Dimensions } from 'react-native'

import styled from 'styled-components/native'

import Header from '../components/home/Header'
import Hero from '../components/home/Hero'
import Movies from '../components/home/Movies'
import Preview from '../components/home/Preview'


const Home = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<Container>
				<Poster source={require('../../assets/poster.jpg')}>
						<Header />
						<Hero />
				</Poster>
				<Preview label='Prévias' item={api} />
				<Movies label='Minha Lista' item={api} />
				<Movies label='Continuar assistindo como Ingrid' item={api} />
			</Container>
		</>
	)
}


const api = [
	require('../../assets/movie1.jpg'),
	require('../../assets/movie2.jpg'),
	require('../../assets/movie3.jpg'),
	require('../../assets/movie4.jpg')
]

const Container = styled.ScrollView`
	flex: 1;
	background-color: #000;
`

const Poster = styled.ImageBackground`
	width: 100%;
	height: ${(Dimensions.get('window').height * 81) / 100}px;
`


export default Home;