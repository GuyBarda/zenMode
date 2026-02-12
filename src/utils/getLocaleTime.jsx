export const getLocaleTime = () =>
  new Date().toLocaleString('en-US', {
    minute: '2-digit',
    hour: '2-digit',
  });
