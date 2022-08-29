//closures
//fuction which are present outside is also avilabale inside.
//anything in the inside has access to the outside..

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('outer variable' + outerVariable);
        console.log('inner variable' + innerVariable);
    }
}
const newFunction = outerFunction('outside')
newFunction('inside')