import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';


const Login = () => {

  return (
    <ViewContainer>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <Header>
        <Icons>
          <Icon
            name="arrow-back"
            size={36}
            color="white"
          />
        </Icons>
        <Image
          source={require('../../assets/logo-netflix-120x120.png')}
        />
      </Header>

      <TextInput
        placeholderTextColor="#8C8C8C"
        paddingLeft={20}
        placeholder="Email ou número de telefone"
      />
      <TextInput
        placeholderTextColor="#8C8C8C"
        secureTextEntry={true}
        paddingLeft={20}
        placeholder="Senha"
      />

      <TouchableOpacity>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <ViewText>

        <Text1>Precisa de ajuda?</Text1>
        <Text2>Novo por aqui? Inscreva-se agora.</Text2>
        <Text3>O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</Text3>

      </ViewText>

    </ViewContainer>
  )
}
const Icons = styled.View`
top:50px;
left:30px;
`;

const Image = styled.Image`
top:10px;
left:35%;
`;

const Header = styled.View`
flex-direction: row;
`;


const ViewContainer = styled.View`
width:100%;
flex: 1;
background-color: #000;
bottom:auto;
`;

const TextInput = styled.TextInput`
align-self: center;
width:83%;
height:12%;
background-color: #333;
border-radius: 4px;
margin-top:auto;
color:#eee;
font-size:16px;
`;

const TouchableOpacity = styled.TouchableOpacity`
background-color: #E50914;
align-self: center;
width:83%;
margin:5px;
margin-top:auto;
border-radius: 4px;
height:10%;
margin-bottom:2%;
`;

// const Container = styled.View`
// width:100%;
// flex:1;
// justify-content: center;
// align-items: center;
// background-color: #000;

// `;
const Text = styled.Text`
margin:auto;
align-self: center;
color:white;
font-weight: bold;
font-size:18px;
`;

const ViewText = styled.View`
margin:auto;

`;

const Text1 = styled.Text`
align-self: center;
margin-bottom:5px;
color:#8C8C8C;
font-size:14px;
`;

const Text2 = styled.Text`
align-self: center;
margin-bottom:5px;
color:#8C8C8C;
font-weight: bold;
font-size:15px;
`;

const Text3 = styled.Text`
margin-top:auto;
margin-left:15px;
margin-right:15px;
text-align: center;
color:#8C8C8C;
font-size:12px;
`;

export default Login;
