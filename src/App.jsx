class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        appProp1: 1000
      }
    }
    render() {
      return (
      
      <React.Fragment>
      <Log info="in App" />
      In a few seconds, page content will change automatically
      <AppContext.Provider value={this.state}>
        <Log info="in Provider" />
        <GrandFather drillProp1={this.props.drillProp1}></GrandFather>
      </AppContext.Provider>
      </React.Fragment>
      )
    }
}
