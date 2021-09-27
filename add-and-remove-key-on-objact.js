const db = {}
const addTodb = (i) => {
    const m = dbZ();
    m[i] = 1;
}
const db = () => {
    return db
}
const h = addTodb('hasan', 'mehedi', 'sakiv');
console.log(h);