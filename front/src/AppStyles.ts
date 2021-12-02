import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: "#FBFBFB";
    margin-top: 0px;
    padding-top: 20px;
`;

export const ContainerZ = styled.div`
    min-height: 100vh;
    background: "#FBFBFB";
    margin-top: 0px;
    padding-top: 20px;
    display: flex;
    justify-content: center;
`;

export const ContainerX = styled.div`
    width: 60%;
`;

export const Header = styled.div`
    background-color: aqua;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 40px;
    align-items: center;
    margin-bottom: 0px;
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


export const Aviso = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: auto;
    display: flex;
    align-items: center;
`;

export const AvisoMessage = styled.div`
    position: fixed;
    top: 0;
    width: 400px;
    padding: 20px;
    background-color: yellow;
    height: 60px;
    margin-top: 50px;
    border-radius: 30px;
    transition: 1s ease-in-out;
    margin-left: 100px;
    display: flex;
    justify-content: center;
`;

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;
export const Add = styled.div`
    display: flex;
    flex: 1;
    height: 40px;
    justify-content: flex-end;
    padding: 30px;
`;

export const Buttonl = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  width: 20px;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;
`;

export const Scomponent = styled.div`
    width: 80%;
    display: flex;
    height: 200px;
    border: 3px solid;
    margin: 10px;
    flex-direction: column;
    padding: 10px;
`;
export const Agroup = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    flex-direction: column;
    height: auto;
`;
export const Opition = styled.div`
    width: 100%;
    display: flex;
    justify-content:flex-end;
    flex-direction: row;
`;

export const ButtonJ = styled.button`
  background-color: burlywood;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  width: 20px;
  height: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 12px;
`;

export const ScomponentX = styled.div`
    width: 80%;
    display: flex;
    height: auto;
    border: 3px solid;
    margin: 10px;
    flex-direction: column;
    padding: 10px;
`;