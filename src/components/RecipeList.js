import React from 'react'

class RecipeList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      edit:false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
  }
  handleDelete(){
    this.props.Delete(this.props.itemNo)
  }
  handleShow(){
    this.setState({
      edit:true
     })
  }
  handleSubmit(){
    this.props.updateRecipe(this.refs.inputRecipeName.value,this.refs.inputIngredientsName.value,this.props.index)
  }
  handleEnd(e){
    this.setState({
      edit:false
    })
    e.preventDefault()
  }
  render(){
   var displayEditForm = {
     display: this.state.edit ? 'block' : 'none'
   }

    return(
      <div>
       <span><h3 className="recipe">Recipe :</h3><h4 className="recipeName">{this.props.recipe.recipe}</h4></span><button className="edit btn btn-primary" onClick={this.handleShow}>Edit</button><br/>
       <span><h3 className="recipe">Ingredients :</h3><h4 className="recipeName">{this.props.recipe.ingredients}</h4></span><button className="delete btn btn-danger" onClick={this.handleDelete}>Delete</button>
       <div className="panel panel-primary" style={displayEditForm}>
          <form className="form-horizontal">
             <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="recipeName">Recipe Name</label>
              <div className="col-sm-10">
              <input type="text" value={this.props.recipe.recipe} onChange={this.handleSubmit} className="form-control" id="recipeName"  ref="inputRecipeName" placeholder="Recipe Name" />
              </div>
             </div>
             <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="ingredientsName">Ingredients</label>
              <div className="col-sm-10">
               <input type="text" value={this.props.recipe.ingredients} onChange={this.handleSubmit} className="form-control" id="ingredientsName"  ref="inputIngredientsName" placeholder="Ingredients"/>
              </div>
             </div>
             <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary pull-right" onClick={this.handleEnd}>Submit</button>
             </div>
             </div>
          </form>
       </div>
      </div>
    )
  }
}

module.exports = RecipeList
