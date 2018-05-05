function validateRequest(request) {
    const methodRegex = /^(GET|POST|DELETE|CONNECT)$/g;
    const uriRegex = /^[A-Za-z\d.*]+$/g;
    const versionRegex = /^(HTTP\/0\.9|HTTP\/1\.0|HTTP\/1\.1|HTTP\/2\.0)$/g;
    const messageRegex = /^[^<>\\&'"]*$/g;

    if(!request.method || !methodRegex.test(request.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!request.uri || !uriRegex.test(request.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!request.version || !versionRegex.test(request.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }

    if(!request.message || !messageRegex.test(request.message)) {
        if(request.message === '') {
            return request;
        }

        throw new Error('Invalid request header: Invalid Message');
    }

    return request;
}