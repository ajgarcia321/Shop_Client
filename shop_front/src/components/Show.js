import React from 'react'

class Show extends React.Component {
    this.deleteShopitem=this.deleteShopitem.bind(this)
    this.editShopitem=this.editShopItem.bind(this)
  render () {
    return (
      <>
        <div>
         <h3>{this.props.shopitem.name}</h3>
         <hr/>
         <h4> {this.props.shopitem.image}</h4>
         <h4> {this.props.shopitem.price}</h4>
         <h4> {this.props.shopitem.stock}</h4>
         <h6> {this.props.shopitem.description}</h6>
         <h6><{ this.props.user.admin ? <ul>
                <li onClick={()=>
                    {this.props.handleView('editPost', this.props.post)}}>Edit</li>
                <li onClick={()=>{this.props.handleDelete(this.props.post.id)}}>Delete</li>
            </ul>
            : ''} </h6>
       </div>
      </>
    )
  }
 }
export default Show
