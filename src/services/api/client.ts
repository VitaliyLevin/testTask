import { IDataEntryInput } from "../model/types";

export enum HTTP_METHODS {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

const fetchTestApi = async (
  path: string,
  method: HTTP_METHODS,
  reqBody?: IDataEntryInput | Partial<IDataEntryInput>
) => {
  console.log('Start');
  
  const response = await fetch(`https://yourtestapi.com/${path}`, {
    method,
    headers: {'Content-Type': 'application/json'},
    ...(reqBody ? {body: JSON.stringify(reqBody)} : {}),
  });

  if (response.status >= 300) {
    throw new Error('http error');
  }
  const data = await response.json();
  console.log('finish');

  return data;
};

export const getAllDataEntries = async () => {
  const data = await fetchTestApi('api/posts/', HTTP_METHODS.GET);
  return data;
};

export const deleteDataEntry = async (id: number) => {
  await fetchTestApi(`api/posts/${id}`, HTTP_METHODS.DELETE);
};

export const updateDataEntry = async (id: number, input: Partial<IDataEntryInput>) => {
  await fetchTestApi(`api/posts/${id}`, HTTP_METHODS.PUT, input);
};

export const addDataEntry = async (body: Partial<Omit<IDataEntryInput, 'id'>>) => {
  await fetchTestApi('api/posts/', HTTP_METHODS.POST, body);
};
