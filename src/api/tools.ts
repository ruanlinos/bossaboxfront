import api from '../services/api';

interface IGetTools {
  search: string;
  searchTag: boolean;
}

export const getTools = async ({ search, searchTag }: IGetTools) =>
  api.get<Global.ITool[]>('tools', {
    params: { q: search },
    headers: {
      searchTag,
    },
  });
export const removeTool = async (id: number) => api.delete(`tools/${id}`);

export const createTool = async (payload: Global.FormData) =>
  api.post(
    'tools',
    {
      title: payload.title,
      link: payload.link,
      description: payload.description,
      tags: payload.tags,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
