import React from 'react'

class About extends React.Component {
    constructor(props) {
        super(props)
        this.user = {
            cart: [],
            cart: null
        }
        this.getCart = this.getCart.bind(this)
        this.removeShopitem = this.removeShopitem.bind(this)
    }

    componentDidMount(){
        this.getCart()
    }

    async getCart (){
        try {
            // the async request code you want to try
            let response = await fetch(`http://localhost:3000/user/cart`)
            let data = await response.json()
            this.setState({shopitems: data})
        }catch(e){
            // what happens when you get an error
            console.error(e)
        }
    }

    async removeShopitem (id){
        console.log(`Removed an item from: http://localhost:3000/user/cart/${id}`)
        try {
            let response = await fetch('http://localhost:3000/user/cart' +  id, {
                method: 'DELETE'
            })
            let data = await response.json()
            const foundShopitem = this.state.shopitems.findIndex(shopitem => shopitem._id === id)
            const copyShopitems = [...this.state.shopitems]
            copyShopitems.splice(foundShopitem, 1)
            this.setState({shopitems: copyShopitems})
        } catch(e){
            console.error(e)
        }
    }

    render () {
        return (
            <div className="about">
            <h3>Your Cart:</h3>
            <main>
            <section>
            A store dedicated to selling you only the highest quality clothing and other accessories. With the business model revlolving around quality over quantity you can be assured that each of our products are specially made to guarentee perfection with every order.
            </section>
            <section>
            We are based within the city of San Diego, CA where our many customers can enjoy both online and in store shopping to find whatever they need.
            </section>
            <h3>Guide:</h3>
            <ol>
            <li>Create an account using the sign up button located in the top right</li>
            <li>Login to your account</li>
            <li>Explore our many items</li>
            <li>Click the "Add to Cart" button located below each item</li>
            <li>Once you have everything you need click "Check Out" to review your cart before payment</li>
            </ol>
            </main>
            </div>
        )
    }
}

export default About
