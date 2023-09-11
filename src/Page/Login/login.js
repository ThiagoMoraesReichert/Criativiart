import { Alinhamento, Barra, BarraTitulo, BotaoEntrar, Flor, Fundo, ImgFundo, LinkMudar, SubTexto } from "./style";
import Loginfundo from "./../../Img/Loginfundo.png";
import Flores from "./../../Img/flores.png"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



function Login() {

    //configuração de Login e rotas

    const saveUserInfoLocalStorage = (token)=>{
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const goToPaginaprincipal = ()=>{
      navigate('/home')
  }

  const hadleSubmit = (e)=>{
      e.preventDefault()

      const credentials = {email, password}

      axios.post('http://localhost:8000/login', credentials, {
          headers:{
              'Content-Type': 'application/json',
          },
      })
      .then(response =>{
          alert(response.data.message)
          saveUserInfoLocalStorage(response.data.token)
          goToPaginaprincipal()
          
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <Fundo>
        <ImgFundo src={Loginfundo} alt="Arte digital jovem em uma paisagem"/>
        <Flor src={Flores} alt="Flores de colocação azul e roxa feitas de tinta"/>

        
        <Alinhamento onSubmit={hadleSubmit}>
          <BarraTitulo>Digite seu Email:</BarraTitulo>
          <Barra type="email"
          placeholder="exemplo@gmail.com"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}           
          />

          <BarraTitulo>Digite sua senha:</BarraTitulo>
          <Barra type="password"
          placeholder="sua senha"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
          <BotaoEntrar type="submit">Entrar</BotaoEntrar>
          <SubTexto>Não tem uma conta?<LinkMudar to="/registro"> Clique aqui!</LinkMudar></SubTexto>
        </Alinhamento>

      </Fundo>
    </>
  );
}

export default Login;
