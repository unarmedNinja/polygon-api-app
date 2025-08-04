import axios from 'axios';

const handleError = (error) => {
    if (error.response) {
        return {
            status: error.response.status,
            message: error.response.data || 'An error occurred',
        };
    }
    return {
        status: 500,
        message: 'Internal Server Error',
    };
};

const formatResponse = (data) => {
    return {
        success: true,
        data: data,
    };
};

export { handleError, formatResponse };