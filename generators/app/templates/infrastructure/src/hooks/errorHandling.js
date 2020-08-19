import { useApolloClient, useQuery } from '@apollo/client';
import { useCallback } from 'react';
import { emptyFunction } from 'utils/constants';
import { useToast } from './toasts';

export function useQueryWithErrorHandling(query, { onError = emptyFunction, ...props } = {}) {
  const showError = useError();
  const errorHandler = useCallback((error) => {
    onError()
    showError(error);
  }, [onError, showError])

  return useQuery(query,
    {
      ...props,
      onError: errorHandler
    }
  );
}

export function useClientQueryWithErrorHandling() {
  const client = useApolloClient();
  const showError = useError();
  return async (query, props) => {
    try {
      return await client.query({
        query,
        ...props
      })
    } catch (error) {
      showError(error);
      return { loading: false, error };
    }
  }
}

export const useError = () => {
  const addToast = useToast();
  const generateErrorMessage = (error) => `${error.extensions.code} - ${error.message}`;
  const generateSimpleErrorMessage = (message) => `There is a problem communicating with the server. ${message}`;
  const addErrorToast = useCallback((message) => addToast(generateSimpleErrorMessage(message), 'error', false), [addToast]);

  return useCallback(error => {
    if (!error?.graphQLErrors && !error?.networkError?.result?.errors) {
      addErrorToast(generateSimpleErrorMessage(error.message));
      return
    }

    (error?.graphQLErrors || []).forEach(err => {
      err?.extensions?.code
        ? addErrorToast(generateErrorMessage(err))
        : addErrorToast(generateSimpleErrorMessage(err.message));
    });

    (error?.networkError?.result?.errors || []).forEach(err => addErrorToast(generateErrorMessage(err)));
  }, [addErrorToast])
}