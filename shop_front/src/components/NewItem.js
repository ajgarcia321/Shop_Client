import React from 'react'
class NewItem extends React.Component {
  constructor (props) {
  super(props)
  this.state = {
    name: '',
    image: '',
    price: 0,
    stock: 0,
    description: ''
  }
this.handleChange = this.handleChange.bind(this)
this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange (event) {
 this.setState({ [event.currentTarget.id]: event.currentTarget.value})
}

async handleSubmit (event) {
    event.preventDefault()
    try{
      let response = await
      //this.props.baseURL = http://localhost:3003
      fetch('http://localhost:3000/shopitems', {
          method: 'POST', // Put, Delete
          body: JSON.stringify({name: this.state.name}),
          headers: {
              'Content-Type': 'application/json'
            }
          })
          let data =  await response.json()
          this.props.handleAddGtp(data)
          this.setState({
              name: '',
              image: '',
              price: 0,
              stock: 0,
              description: ''
          })
        }catch(e){
          console.error({'Error': e})
        }
      }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className="form-control" type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input className="form-control" type="text" id="image" name="image" onChange={this.handleChange} value={this.state.image} placeholder=".com"/>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input className="form-control" type="number" id="price" name="price" onChange={this.handleChange} value={this.state.price} placeholder="0"/>
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input className="form-control" type="number" id="stock" name="stock" onChange={this.handleChange} value={this.state.stock} placeholder="0"/>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input className="form-control" type="text" id="description" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Description"/>
        </div>
        <div className="form-group">
          <input className="" type="submit" value="Sell Item"/>
        </div>
      </form>
    )
  }
}
export default NewItem
