import { Response } from 'express';

export abstract class BaseController {
  protected success<T>(res: Response, data: T, statusCode = 200): Response {
    return res.status(statusCode).json({
      success: true,
      data,
    });
  }

  protected error(res: Response, message: string, statusCode = 500): Response {
    return res.status(statusCode).json({
      success: false,
      message,
    });
  }

  protected notFound(res: Response, message: string): Response {
    return this.error(res, message, 404);
  }

  protected badRequest(res: Response, message = 'Bad request'): Response {
    return this.error(res, message, 400);
  }

  protected unauthorized(res: Response, message = 'Unauthorized'): Response {
    return this.error(res, message, 401);
  }
}
