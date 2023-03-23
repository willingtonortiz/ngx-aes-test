export class AppError extends Error {
  constructor(reason: string = 'Error Ocurred') {
    super(reason);
  }
}
