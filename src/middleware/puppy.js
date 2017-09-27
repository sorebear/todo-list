export default store => next => action => {
    console.log("This is my Puppy Middleware! Roof roof!");
    return next(action);
}