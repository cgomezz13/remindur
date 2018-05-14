import React from 'react';

export default class GearDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.changeVisibility = this.changeVisibility.bind(this);
  }

  changeVisibility() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    const welcome = (
      <li className='setting-guest-name'><h2>{this.props.user}</h2></li>
    )

    const logout = (
      <button onClick={this.props.logout} className='logout-link'>logout</button>
    )

    return (
      <section>
        <div className='gear-dropdown-btn' onClick={()=>this.changeVisibility()}>
          <i className="fas fa-cog"></i>
        </div>

        <div className={this.state.visible ? 'visible-dropdown' : 'hidden-dropdown'}>
          {welcome}
          {logout}
        </div>
      </section>
    );
  }
}
