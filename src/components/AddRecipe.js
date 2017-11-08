import React from 'react'


class AddRecipe extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Adding:false
    }
    this.toggleForm= this.toggleForm.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  toggleForm(){
    this.setState({
      Adding:true
    })
  }
  handleAdd(e){
     var tempItem = {
       recipe:this.refs.inputRecipeName.value,
       ingredients:this.refs.inputIngredientsName.value
     }
     e.preventDefault()
     this.props.AddReci(tempItem)
     this.setState({
       Adding:false
     })
  }
  render(){
   var displayForm = {
     display: this.state.Adding ? 'block' : 'none'
   }
    return(
       <div>
         <span><h1 className="AddNew">Add New Recipe</h1><button className="btn btn-primary plus btn-circle" onClick={this.toggleForm}><span className="glyphicon glyphicon-plus"></span></button></span>
         <div className="panel panel-primary" style={displayForm}>
            <form className="form-horizontal" onSubmit={this.handleAdd}>
               <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="recipeName">Recipe Name</label>
                <div className="col-sm-10">
                <input type="text" className="form-control" id="recipeName" ref="inputRecipeName" placeholder="Recipe Name" />
                </div>
               </div>
               <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="ingredientsName">Ingredients</label>
                <div className="col-sm-10">
                 <input type="text" className="form-control" id="ingredientsName" ref="inputIngredientsName" placeholder="Ingredients"/>
                </div>
               </div>
               <div className="form-group">
               <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right ">Add Recipe</button>
               </div>
               </div>
            </form>
         </div>
       </div>
    )
  }
}

module.exports = AddRecipe
