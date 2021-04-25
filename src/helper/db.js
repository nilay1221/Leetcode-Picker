import Dexie from 'dexie';

const db = new Dexie('myDb');

db.version(1).stores({
    topics:`titleSlug,title`
});

export default db;
