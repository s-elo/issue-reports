
"use strict";
async function get(request) {
    const [requestName, query] = request.split('?');
    // remove the './' prefix
    const featureName = requestName.slice(2);

    return () => ({
        name: 'test module'
    });
}
function initContainer() {
    (window['MMF_PORTAL'] || (window['MMF_PORTAL'] = {})).get = get;
}
initContainer();

// module-federation runtime plugin registry
module.exports = () => ({
    name: 'module-federation-runtime-plugin',
    loadEntry() {
        return {
            get,
        };
    },
});
