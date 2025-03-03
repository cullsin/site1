import https from '../../axios';

export const doGetPlace = async (params) => {
    const { branch_id } = params;
    try {
        return await https.post('/branch/get', { branch_id});
    } catch(exception) {
        const error = exception.toJSON();
        return { data: {'success' : false, 'code': error.code, 'message': error.message } };
    }
}

// naming standards
// do[Get/Insert/Update]Module_name