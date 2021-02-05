function validate(obj) {
const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
const uriRegex = /^[a-zA-Z0-9.]+$/gm;
const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
const messageRegex = /^[^<>\\&'"]+$/gm;

if (!methods.includes(obj.method)) {
    throw new Error('Invalid request header: Invalid Method');
}

if (obj.uri == undefined || !uriRegex.test(obj.uri) && obj.uri != '*') {
    throw new Error('Invalid request header: Invalid URI');
}

if (!versions.includes(obj.version)) {
    throw new Error('Invalid request header: Invalid Version');
}

if (obj.message == undefined || !messageRegex.test(obj.message) && obj.message != '') {
    throw new Error('Invalid request header: Invalid Message');
}

return obj;
}

console.log(validate({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
));