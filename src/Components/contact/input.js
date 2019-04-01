import React, { useState } from 'react';
import styled from 'styled-components';
import { Text } from './contact';

const input = (props) => {
  const [click, setClick] = useState(false)
  const [phoneNum, setPhoneNum] = useState(0)

  const updateNum = () => {
    let num = phoneNum && phoneNum.split('');
    num = phoneNum && [
      num.slice(0, 3),
      '-',
      num.slice(3, 6),
      '-',
      num.slice(6)
    ];
    let newArr = [];
    phoneNum &&
      !phoneNum.includes('-') &&
      setPhoneNum(newArr.concat(num[0], num[1], num[2], num[3], num[4]).join(''))
  };

    const { e, inputChange } = props;
    return (
      <Cont className="input_map">
        <Text primary className={click ? 'focus_p' : ''}>{e.text}</Text>
        {e.text === 'Contact Phone' ? (
          <Input
            name={e.name}
            autoComplete='off'
            value={phoneNum !== 0 ? phoneNum : ''}
            type="text"
            onChange={e => {
              inputChange(e);
              setPhoneNum(e.target.value);
            }}
            onFocus={() => setClick(true)}
            onBlur={() => {
              updateNum()
              setClick(false)
            }}
          />
        ) : (
          <Input
            name={e.name}
            type="text"
            autoComplete='off'            
            onChange={inputChange}
            onFocus={() => setClick(true)}
            onBlur={() => setClick(false)}
          />
        )}
      </Cont>
    );
  }

export default input;

const Cont = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    width: 150px;
  }
`

const Input = styled.input`
    height: 25px;
    width: 300px;
    border-radius: 0;
    margin: 1%;
    font-size: 0.9em;
    border-bottom: 1px solid rgb(165, 165, 165);
    :focus {
      outline: none;
    }
`