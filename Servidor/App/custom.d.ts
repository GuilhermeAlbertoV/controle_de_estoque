import "express";
declare module "express" {
  interface Request {
    dataUser?: any;
  }
}
