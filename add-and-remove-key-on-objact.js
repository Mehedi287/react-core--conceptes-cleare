const db = {}
const addTodb = (i) => {
    const db = getDb();
    if (i in db) {
        db[i] = db[i] + 1
    }
    else {
        db[i] = 1
    }
}
const rremoveFromDb = (i) => {
    const db = getDb();
    delete db[i]
}
const getDb = () => {
    return db
}
const h = addTodb('hasan');
console.log(h);