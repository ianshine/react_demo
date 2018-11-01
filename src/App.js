import React, { Component } from 'react';
import Welcome from './Function/Welcome';
import Button from './Function/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Please write an essay about your favorite DOM element.',
      name: '',
      select: 'coconut',
      isTrue: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.name + event.target.text});
  // }

  // handleChange(event){
  //   let o = {};
  //   o[event.target.name] = event.target.value;
  //   this.setState(o);
  //   }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name + this.state.text + this.state.select);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">

        {/* 此处注释的写法 必须要{}包裹：另外两个组件 */}
        <div>
          <Welcome/>
          <Button/>  
        </div>

      <h2>查询用户是否存在功能</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name = "name" value={this.state.name} onChange={this.handleChange} />
            <br />

            text:
            <textarea type="text" name = "text" value={this.state.text} onChange={this.handleChange} />
            <br />

            Pick your favorite La Croix flavor:
            <select name = "select" value={this.state.select} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <br />

            Is true:
            <input
              name="isTrue"
              type="checkbox"
              checked={this.state.isTrue}
              onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      
      </div>
    );
  }

}

export default App;
