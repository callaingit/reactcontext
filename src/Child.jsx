class Child extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <React.Fragment>
          <Log info="in Child" />
          <AppContext.Consumer>{
            appContext =>
              <React.Fragment><Log info="in Consumer"/><p>Hello {this.props.drillProp1}, {appContext.appProp1}</p></React.Fragment>
          }
          </AppContext.Consumer>
        </React.Fragment>
      )
    }
}
