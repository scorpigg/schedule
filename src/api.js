const baseUrl = 'https://varankin_dev.elma365.ru/api/extensions/2a38760e-083a-4dd0-aebc-78b570bfd3c7/script';

const path = {
  users: '/users',
  tasks: '/tasks',
};

export const getEmployes = async () => {
  const response = await fetch(`${baseUrl}${path.users}`);
  const employes = await response.json();
  return employes;
};

export const getTasks = async () => {
  const response = await fetch(`${baseUrl}${path.tasks}`);
  const tasks = await response.json();
  return tasks;
};