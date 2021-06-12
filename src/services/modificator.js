

const modificator = (values) => {
    let mods = [];
   values.forEach(value => {
        for(let i = -5, b=1; i < 11; i ++) {
            if(value <= b) {
                    mods.push(i);
                break;
            }
            b += 2;
        }
    });
    return mods;
}

export default {
    modificator,
}