import React from 'react';

export default class HeaderTopBar extends React.Component {
  render() {
    let brand = <a href='#'>Project Name</a>;
    return (
      <Navbar brand={brand} fixedTop inverse toggleNavKey={0}>
        <Nav right eventKey={0}>
          <InlineLogin className='navbar-form' />
        </Nav>
      </Navbar>
    );
  }
}
