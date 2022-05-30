import React from 'react';

// createContext() creates a Context object
// A context object, as the name states is a data type of an object that can be used to store info that can be shared to other components within the app. 
// We use this to avoid the use of prop-drilling.

const UserContext = React.createContext();

// Provider component - allows the other components to consume/use the context object and supply the necessary info needed to the context object.
export const UserProvider = UserContext.Provider;

export default UserContext;