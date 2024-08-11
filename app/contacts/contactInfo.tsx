/*
import axios from 'axios';

const companyContacts = async (value) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: "https://api.voxo.co/v2/directory/company",
            headers: {'Authorization' : `Bearer ${value}`}
    })
    .then((res) => {
        console.log(res.data)
        resolve(res)
    })
    .catch((err) => {
        reject(err)
    });
});
};

const personalContacts = async (value) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: "https://api.voxo.co/v2/directory/personal",
            headers: {'Authorization' : `Bearer ${value}`}
    })
    .then((res) => {
        console.log(res.data)
        resolve(res)
    })
    .catch((err) => {
        reject(err)
    });
});
};

const departmentUsers = async (value) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: "https://api.voxo.co/v2/branches/users",
            headers: {'Authorization' : `Bearer ${value}`}
    })
    .then((res) => {
        console.log(res.data)
        resolve(res)
    })
    .catch((err) => {
        reject(err)
    });
});
};

export { companyContacts, personalContacts, departmentUsers }

*/