import styled from  'styled-components'

export const Heading = styled.h1`
 font-family: "sans-serif";
 text-align: center;
 font-size: 3rem;
 color: white;
 
`

export const DataBuilder = styled.div`
 font-size: 2rem;
 color: white;
 text-align: center;
`

export const Inputer = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  text-align: center;
  
  appearance: none;
  background: none;
  border: none;
  outline: none;
  
  background-color: rgba(255,255,255,0.5);
  border-radius: 16px 16px 16px 16px;
  margin-bottom: -65px;
`

export const MainContainer = styled.div`
  background-image:  linear-gradient(to bottom, rgb(0,0,0,0.1), rgb(0,0,0,0.9)),
  url("https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: 100vh;
  width: auto;
  align-items: center;
  background-position: center;
  @media screen and (max-width: 370px) {
  max-width: 100%;
  }
`
export const Сonclusion = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
`


export const WeatherNow = styled.p`
  color: white;
  text-align: center;
  margin-top: 5px;
  margin-bottom: -5px;
`
export const Temperatute = styled.p`
  color: white;
  text-align:  center;
  margin-bottom: 5px;
`
export const IconWeather = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 110px;
`
export const Searc = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 75px;
`

export const Description = styled.p`
  text-align: center;
  color: white;
`

export const Empty = styled.div`
display: inline-list-item;
`
export const EmptyIMG = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
`
export const EmptyP = styled.p`
 color: white;
 font-size: 1rem;
 font-family: "Roboto Light";
 text-align: center;
 margin-top: 15px;
 
`