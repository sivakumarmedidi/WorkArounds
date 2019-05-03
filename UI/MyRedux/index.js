function createStore(reducer, middleware=applyMiddleware()) {
    let state = reducer(undefined, {});
    const subscribers = [];
    function dispatch(action) {
        state = reducer(state, action);
        subscribers.forEach(func => {
            func();
        });
    }
    const store = {
        dispatch: (action) => {
            middleware(action, {getState: store.getState, dispatch})
        },
        getState: () => {
            return state;
        },
        subscribe: (func) => {
            subscribers.push(func);
            return () => {
                const index = subscribers.indexOf(func);
                if (index > -1) {
                    subscribers.splice(index, 1);
                }
            }
        }
    };

    return store;
}

function applyMiddleware(...middlewares) {
    return (action, { getState, dispatch }) => {
        const composed = middlewares.reduceRight((agg, mw) => {
            agg.next = mw({ getState, dispatch })(agg.next)
            return agg;
        }, { next: (action) => { dispatch(action) } });
        composed.next(action);
    }
}

function logger1({ getState, dispatch }) {
    return next => action => {
        console.log('will dispatch1', action)
        const returnValue = next(action)
        console.log('state after dispatch1', getState())
        return returnValue
    }
}

function logger2({ getState, dispatch }) {
    return next => action => {
        console.log('will dispatch2', action)
        const returnValue = next(action)
        console.log('state after dispatch2', getState())
        return returnValue
    }
}

function reducer(initialState = 0, action) {
    switch (action.type) {
        case "ADD":
            return ++initialState;
        case "SUBTRACT":
            return --initialState;
        default:
            return initialState;
    }
}
const store = createStore(reducer);

const unsub = store.subscribe(function () {
    const doc = document.getElementById("doc");
    doc.innerText = store.getState();
});

function add(event) {
    store.dispatch({ type: "ADD" });
}

function sub(event) {
    store.dispatch({ type: "SUBTRACT" });
}

