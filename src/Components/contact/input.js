import React, { Component } from 'react';

class input extends Component {
  state = {
    click: false,
    phoneNum: 0
  };

  updateNum = () => {
    const {phoneNum} = this.state
    let num = phoneNum && phoneNum.split('');
    num = phoneNum && [num.slice(0, 3), '-', num.slice(3, 6), '-', num.slice(6)];
    let newArr = [];
    phoneNum && !phoneNum.includes('-') && this.setState({
      phoneNum: newArr.concat(num[0], num[1], num[2], num[3], num[4]).join('')
    })
  };

  render() {
    const { e } = this.props;
    const { click, phoneNum } = this.state;
    return (
      <div className="input_map">
        <p className={click ? 'focus_p' : ''}>{e.name}</p>
        {e.name === 'Contact Phone' ? (
          <input
            value={phoneNum !== 0 ? phoneNum : ''}
            type="text"
            // placeholder={e.placeholder}
            onChange={e => this.setState({ phoneNum: e.target.value })}
            onBlur={() => this.updateNum()}
          />
        ) : (
          <input
            type="text"
            // placeholder={e.placeholder}            
            onFocus={() => this.setState({ click: true })}
            onBlur={() => this.setState({ click: false })}
          />
        )}
      </div>
    );
  }
}

export default input;
