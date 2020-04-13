// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
        price: 0,
        address: '',
        mortgage: 0,
        sqft: 0,
        year: 0,
        lot: 0,
        monthly: 0,
        bedrooms: 0,
        bathrooms: 0,
        extras: '',
        pool: true
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.view.page === 'addPost') {
        this.props.handleCreate(this.state)
    } else if (this.props.view.page === 'editPost') {
        this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
      this.setState({
          name: this.props.formInputs.name,
          image: this.props.formInputs.image,
          body: this.props.formInputs.body,
          id: this.props.formInputs.id
      })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="store">Address </label>
          <input className="form-control" type="text" id="address" name="address" onChange={this.handleChange} value={this.state.address}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Bedrooms </label>
          <input className="form-control" type="number" id="bedrooms" name="bedrooms" onChange={this.handleChange} value={this.state.bedrooms}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Bathrooms </label>
          <input className="form-control" type="number" id="bathrooms" name="bathrooms" onChange={this.handleChange} value={this.state.bathrooms}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Price </label>
          <input className="form-control" type="number" id="price" name="price" onChange={this.handleChange} value={this.state.price}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Monthly </label>
          <input className="form-control" type="number" id="monthly" name="monthly" onChange={this.handleChange} value={this.state.monthly}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Mortgage </label>
          <input className="form-control" type="number" id="mortgage" name="mortgage" onChange={this.handleChange} value={this.state.mortgage}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Sq. Ft. </label>
          <input className="form-control" type="number" id="sqft" name="sqft" onChange={this.handleChange} value={this.state.sqft}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Lot Size </label>
          <input className="form-control" type="number" id="lot" name="lot" onChange={this.handleChange} value={this.state.lot}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Year </label>
          <input className="form-control" type="number" id="year" name="year" onChange={this.handleChange} value={this.state.year}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Pool </label>
          <input className="form-control" type="boolean" id="pool" name="pool" onChange={this.handleChange} value={this.state.pool}/>
        </div>

        <div className="form-group">
          <label htmlFor="brands">Extras </label>
          <input className="form-control" type="string" id="extras" name="extras" onChange={this.handleChange} value={this.state.extras}/>
        </div>

        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Save Property"/>
        </div>
      </form>
    )
  }
}
export default Form
