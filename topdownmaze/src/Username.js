import React from "react";
class Username extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
    	name: props.name
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { username } = this.refs;
    const { name } = this.state
    if(!this.props.disallowedNames.includes(name)) {
      username.innerHTML = name;
    } else {
      username.innerHTML = "Get the hell outta here buddy";
    }
  }
  render() {
    return (
      <React.Fragment>
      	<div>
      		<h1 ref="username"></h1>
      		<form>
                <input type="text" onChange={(e) => {this.setState({name: e.target.value})}} />
      		</form>
      	</div>
      </React.Fragment>
    )
  }
}
export default Username;


/*
<input type="text" onChange={this.setState({ name: e.target.value })} />
*/
