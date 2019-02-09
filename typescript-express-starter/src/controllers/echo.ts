import { Request, Response } from 'express'
import { Echo } from '../models'

export async function echo(req: Request, res: Response) {
  const vo = new Echo({
    msg: req.query.msg
  })

  const result = await vo.save()
  res.json(result)
}
