import axios from 'axios'; // 导入axios模块
const mockUrl = 'https://www.easy-mock.com/mock/5a4dddffb1b87504164edf8c/todo';

export const getTodoList = params => { // 封装一个函数，名为getTodoList
    return axios.get(`${mockUrl}/todo`, {
        params: params
    });
};

export const getTodoById = params => { // 封装一个函数，名为getTodoList
    return axios.get(`${mockUrl}/todo/listId`, {
        params: params
    });
};

// 新增一个请求新增代办单的接口函数
export const addRecord = params => {
    return axios.post(`${mockUrl}/todo/addRecord`, params).then(res => res.data);
};

export const addTodo = params => {
    return axios.post(`${mockUrl}/todo`, params).then(res => res.data);
};
