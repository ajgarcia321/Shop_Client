import React from 'react'
// import './App.css'
import Shopitem from './Shopitem.js'


class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shopitems: []
    }
  }
  componentDidMount () {
    this.setState({shopitems: data})
  }

  render () {
    return (
      <>
        <h3>Menu</h3>
        <div className="menu">
          {this.state.shopitems.map(shopitem=> {
            return(
              <Shopitem shopitem={shopitem} key={shopitem.id}/>
            )
          })}
        </div>
      </>
    )
  }
}

export default Menu
