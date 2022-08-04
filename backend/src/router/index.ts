const router = require('express-promise-router')();

exports.router.get('/api', (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { success: string; message: string; version: string; }): void; new(): any; }; }; }) => {
  res.status(200).send({
      success: 'true',
      message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
      version: '1.0.0',
  });
});