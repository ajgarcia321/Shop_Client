import React from 'react'

class EditItem extends React.Component {
  render () {
    return (
      <div className="edit">
        <form>
          <div className="row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
            />
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
            />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
            />
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              id="stock"
            />
            <label htmlFor="description">Description: </label>
            <textarea
              className="u-full-width"
              id="description"
            >
            </textarea>
            <input type="submit" value="Update Item" className="button-primary" />
            <button className="button-red">Don't Update</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditItem
