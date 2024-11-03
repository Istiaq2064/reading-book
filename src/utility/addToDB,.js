const getStoreReadList = () => {
    const storeListStr = localStorage.getItem('read-list');
    if (storeListStr){
        const storedList =JSON.parse(storeListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoreReadList = (id) => {
    const storeList = getStoreReadList();
    if (storeList.includes(id)) {
        console.log(id, "already exists in the read list")
    }
    else {
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr);
    }

}
export {addToStoreReadList}