class App extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (      
      <React.Fragment>
      <Log info="in App" />
      In a few seconds, page content will change automatically
      <MyAppContextProvider>
        <Log info="in Provider" />
        <GrandFather drillProp1={this.props.drillProp1}></GrandFather>
      </MyAppContextProvider>
      </React.Fragment>
      )
    }
}
