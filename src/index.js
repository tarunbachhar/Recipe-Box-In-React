import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import data from './data.json'
import RecipeList from './components/RecipeList'
import _ from 'lodash'
import AddRecipe from './components/AddRecipe'

class App extends React.Component{
   constructor(props){
     super(props)
     this.state={
       recipes:[],
       aptBodyVisible:false
     }
     this.deleteRecipe =this.deleteRecipe.bind(this)
     this.addItem  = this.addItem.bind(this)
     this.finalEdit = this.finalEdit.bind(this)
   }
  componentDidMount(){
    this.setState({
      recipes:data
    })
  }
  componentWillUnmount(){
    this.setState({
      recipes:[]
    })
  }
  deleteRecipe(item){
     var allRecipe = this.state.recipes
     var newRecipe = _.without(allRecipe,item)
     this.setState({
       recipes:newRecipe
     })
  }

  addItem(tempItem){
    var tempApts = this.state.recipes
    tempApts.push(tempItem)
    this.setState({
      recipes:tempApts
    })
  }
  finalEdit(inputRecipeName,inputIngredientsName,index){
     let shame= this.state.recipes
     shame[index].recipe = inputRecipeName
     shame[index].ingredients =inputIngredientsName
     this.setState({
       recipes:shame
     })
  }
  render(){
    var temp = this.state.recipes
    temp = temp.map(function(item,index){
      return(
         <RecipeList key={index}
         recipe={item}
         index={index}
         Delete={this.deleteRecipe}
         itemNo={item}
         updateRecipe={this.finalEdit}
        />
      )
    }.bind(this))
    return(
      <div>
         <AddRecipe
          bodyVisible={this.state.aptBodyVisible}
          AddReci={this.addItem}/>
           {temp}
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
