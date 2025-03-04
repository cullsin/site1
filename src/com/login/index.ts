import https from '../../axios';
export const checkLogin = async (params) => {
        return { data: {'success' : true, 'message': 'successful login', params } };
}

export const realcheckLogin = async (params) => {
    alert('here')
    const { email, password} = params;
    try {
        return await https.post('/auth/login', {
            email, password
        });
    } catch(exception) {
        const error = exception.toJSON();
        return { data: {'success' : false, 'code': error.code, 'message': error.message } };
    }
}