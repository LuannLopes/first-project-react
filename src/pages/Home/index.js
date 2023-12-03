import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";

import { Container, Image, LabelInput, Input } from "./style";

const App = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();

  const addNewUser = async () => {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
  };

  return (
    <Container>
      <Image src={People} alt="logo-imagem" />
      <ContainerItens>
        <H1>Olá!</H1>

        <LabelInput>Nome:</LabelInput>
        <Input ref={inputName} placeholder="nome" />

        <LabelInput>Idade:</LabelInput>
        <Input ref={inputAge} placeholder="idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img src={Arrow} alt="img-arrow" />
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
