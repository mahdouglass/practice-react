import React from 'react';

const authContext = React.createContext({
    authenticated: false, 
    login: () => {}, // anonymous function
});

export default authContext;