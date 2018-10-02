import axios from 'axios';

export const FETCH_POSTS='fetch_posts';
export const CREATE_POST='create_post';
export const FETCH_POST='fetch_post';
export const DELETE_POST='delete_post';


const ROOT_URL='http://reduxblog.herokuapp.com/api';
const API_kEY='?key=CCSR4321';

export  function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_kEY}`);

    return{
      type: FETCH_POSTS,
      payload:request
    };
    
}

export function createPost(values, callback) {

    const request = axios.post(`${ROOT_URL}/posts${API_kEY}`, values)
        .then( () => callback() );

    return{
        type: CREATE_POST,
        payload: request
    };


}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_kEY}`);

    return{
        type: FETCH_POST,
        payload: request
    }

}

export function deletePost(id, callback) {
    const request =axios.delete(`${ROOT_URL}/posts/${id}${API_kEY}`)
        .then( ()=>callback());

    return{
        type:DELETE_POST,
        payload: id
    }

}