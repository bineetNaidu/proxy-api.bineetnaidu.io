// import url from 'url';
import { Router, Request, Response } from 'express';
import needle from 'needle';
import {
  API_BASE_URL,
  API_KEY_NAME,
  API_KEY_VALUE,
  RequestMethods,
} from '../utils/contants';

const r = Router();

r.post('/proxy', async (req: Request, res: Response) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME as string]: API_KEY_VALUE as string,
      //  ...(url.parse(req.url, true).query as Record<string, string>),
    });

    const met = req.query.met as RequestMethods;

    const apiRes = await needle(met, `${API_BASE_URL}?${params}`, req.body);

    res.status(apiRes.statusCode || 200).json(apiRes.body);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error });
  }
});

export { r as proxyRouter };
