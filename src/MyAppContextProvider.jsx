class MyAppContextProvider extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        appProp1: 1000
      }
      this.originalState = this.state
      console.log('Preparing timeout...')
      setTimeout(
        () => { console.log("assigning propa")
                this.setState({appProp1: 1002})
              }
      , 3000)    
    }
    render() {
      console.log("in MyAppContextProvider.render()")
      console.log("Object.is(this.originalState, this.state)=", Object.is(this.originalState, this.state))
      return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
      )
    }
}
