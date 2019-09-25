function UseContextHook(props) {
    let ctx = React.useContext(AppContext)
    console.log("in UserContextHook: ", ctx.appProp1)
    return null
}