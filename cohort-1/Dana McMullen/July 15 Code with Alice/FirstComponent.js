import React from React

class FormComponent extends React.FormComponent{
     constructor (props){
          super (props);
          
          this.state = {text: "", editingText: ""}
     }

     render (){
          return (
               <div>
                    <form>
                    The text to render.
                    <input type ="text" value ={this.state.editingText} onChange={
                         this.setState({
                              text: this.state.text,
                              editingText: e.target.value,})
                              }/>

                    <button onClick ={(e) =>{
                         e.preventfault();
                         this.setState({
                              text: this.state.editingText,

                     });
                    }}>Render Text</button>
                    </form>
                    <p>{this.state.text}</p>
               </div>
          )

     }

};
export default FormComponent