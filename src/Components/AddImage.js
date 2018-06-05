import React, {Component} from 'react'

class AddImage extends Component{

    constructor()
    {
        super()
        this.handleSubmitData = this.handleSubmitData.bind(this)

    }
    handleSubmitData(event)
    {
        event.preventDefault();
        const valueLink = event.target.elements.Link.value;
        const valueDescription = event.target.elements.Description.value;
        const newDatas = {
            id: "9",
            description: valueDescription,
            imageLink : valueLink
        }
        if(valueLink && valueDescription)
        {
            this.props.newImages(newDatas)

        }
    }
    render(){
        return <div>
        <h1>Photowall</h1>
            <div className="form">
         <form onSubmit={this.handleSubmitData}>
             <input type="text" placeholder="Link" className="form-input" name="Link"/>
             <input type="text" placeholder="Description" className="form-input" name="Description"/>
             <button className="btn"> Post</button>
         </form>
            </div>

        </div>

    }
}
export default AddImage