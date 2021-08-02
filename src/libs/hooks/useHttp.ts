import { useCallback, useReducer } from 'react';

const httpReducer = (state: any, action: any) => {
    if (action.type === 'SEND') {
        return {
            data: null,
            error: null,
            status: 'pending',
        };
    }

    if (action.type === 'SUCCESS') {
        return {
            data: action.responseData,
            error: null,
            status: 'completed',
        };
    }

    if (action.type === 'ERROR') {
        return {
            data: null,
            error: action.errorMessage,
            status: 'completed',
        };
    }

    return state;
};

export const useHttp = (
    requestFunction: (any: any) => void,
    startWithPending: boolean = false
): ReturnType => {
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : null,
        data: null,
        error: null,
    });

    const sendRequest = useCallback(
        async function (requestData) {
            dispatch({ type: 'SEND' });
            try {
                const responseData = await requestFunction(requestData);
                dispatch({ type: 'SUCCESS', responseData });
            } catch (error) {
                dispatch({
                    type: 'ERROR',
                    errorMessage: error.message || 'Something went wrong!',
                });
            }
        },
        [requestFunction]
    );

    return {
        sendRequest,
        ...httpState,
    };
};

type ReturnType = {
    sendRequest: (A?: any, B?: any) => void;
    status: any;
    data: any;
    error: any;
};
