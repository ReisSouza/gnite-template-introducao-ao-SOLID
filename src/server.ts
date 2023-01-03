import { NextFunction, Request, Response } from "express";

import { app } from ".";

// app.use(
//   (err: Error, request: Request, response: Response, next: NextFunction) => {
//     if (err instanceof Error) {
//       return response.status(400).json(err.message);
//     }
//     response.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//     });

//     return next();
//   }
// );

app.listen(3333, () => console.log("Server is running!"));
