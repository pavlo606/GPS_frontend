import axios from "axios";

export const ItemsBaseURL = "https://pavlodykyi.pythonanywhere.com";

export const login_request = async ({ email, password }, callback) => {
    axios.post(`${ItemsBaseURL}/user/login`, {
        email: email,
        password: password
    }).then((response) => {
        console.log(response);
        callback(response.data);
    }).catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
            alert(error.response.data);
        } else {
            console.log(error);
        }
    });
};

export const signup_request = async ({ username, email, password }, callback) => {
    axios.post(`${ItemsBaseURL}/user/register`, {
        username: username,
        email: email,
        password: password
    }).then((response) => {
        console.log(response);
        callback(response.data);
    }).catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
            alert(error.response.data);
        } else {
            console.log(error);
        }
    });
};

export const createRoute = async ({ name, user_id }, callback) => {
    console.log(name);
    console.log(user_id);
    axios.post(`${ItemsBaseURL}/route`, {
        name: name,
        user_id: user_id
    }).then((response) => {
        console.log(response);
        callback(response.data);
    }).catch((error) => {
        console.log(error);
    });
};

export const getRoutes = async (user_id, callback) => {
    axios.get(`${ItemsBaseURL}/route/by_user_id/${user_id}`).then((response) => {
        callback(response.data);
    });
};


export const getPoints = async (route_id, callback) => {
    axios.get(`${ItemsBaseURL}/point/by_route_id/${route_id}`).then((response) => {
        callback(response.data);
    });
};

// export const getItems = async (params, callback) => {
//     axios.get(`${ItemsBaseURL}`, { params }).then((response) => {
//         callback(response.data);
//     });
// };

// export const getFilters = async (callback) => {
//     axios.get(`${ItemsBaseURL}/category`).then((response) => {
//         let resp = response.data.map((item) => ({
//             value: item,
//             label: item
//         }));
//         resp.unshift({ value: "all", label: "All categories" });
//         callback(resp);
//     });
// };

// export const downloadImage = async (name, setImageData, setLoading) => {
//     if (!name) {
//         return null;
//     }
//     try {
//         setLoading(true);
//         const response = await axios.get(`${ItemsBaseURL}/image/${name}`, {
//             responseType: 'arraybuffer',
//         });

//         const blob = new Blob([response.data], { type: response.headers['content-type'] });
//         const dataUrl = URL.createObjectURL(blob);

//         setImageData(dataUrl);
//     } catch (error) {
//         console.error('Error downloading image:', error);
//     } finally {
//         setLoading(false);
//     }
// };