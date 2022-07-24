import React, {createContext, useCallback, useState } from 'react';

import api from "../services/api"

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({children}) => {
  
}

export default GithubProvider;