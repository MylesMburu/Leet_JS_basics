var createCounter = function(init) {
    let n = init;
    return {
        increment: () =>{
            return ++n;
        },
        decrement: () =>{
            return --n;
        },
        reset: () =>{
            n = init;
            return init;
        }

    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */