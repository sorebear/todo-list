export default store => next => action => {
    // console.log('Lager Middleware: ', action);
    return next(action);
}