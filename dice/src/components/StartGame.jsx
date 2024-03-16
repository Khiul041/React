import styled from 'styled-components'

export default function StartGame({toogle}) {
    
  return (
    <Container>
      <div>
      <img src="/images/dices.png" alt="" />
      </div>
      <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toogle}>Play Now</Button>
      </div>
    </Container>
  )
}
const Container=styled.div`
max-width: 1180px;
height: 100vh;
display: flex;
align-items: center;
margin: 0 auto;
.content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
`;
const Button=styled.button`
    color: white;
    padding: 10px 18px;
    background:#000000 ;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.5s background;

    &:hover{
        background: white;
        color: black;
        border: 1px solid black;
        transition: 0.5s background;
    }
    
`
