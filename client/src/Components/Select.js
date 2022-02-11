
import styled from 'styled-components';


const Select=(props)=>{
  // console.log(props)

    return (
      <Contenedor>
        <div>
          <select>
            <option>{props.label}</option>
            { props.menu && props.menu.map((item,index)=>(
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
      </Contenedor>
    );

}

const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    margin-right: 5px;
    color: var(--color-letra);
  }
  select {
    appearance: none;
    outline: none;
    background-color: var(--color-fondo);
    font-weight: bold;
    text-align: center;
    border: none;
    padding: 5px 5px;
    /* background-color: transparent; */
    width: 100%;
    color: var(--color-letra);
    display: flex;
    justify-content: center;
    cursor: pointer;
    option {
      background-color: #355c62;
      outline: none;
    }
  }

  div {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    border: 1px solid #b3b2ab;
  }
`;

export default Select;