export const fetchUsers = async() => {


    const url = `https://localhost:7163/api/User/GetAll`
    const resp = await fetch( url );
    //data es el tipo principal del json que se llama
    const { data } = await resp.json();

    const users = data;
    // console.log(users);
    return users;

}
export default fetchUsers