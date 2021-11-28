import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { createHash } from "../services/hashManager"
import { teacherUser } from "../types";

export default async function signup(
    req: Request,
    res: Response
 ): Promise<void> {;
    try {
 
       const { name, email, password } = req.body
 
       if (!name || !email || !password ) {
          res.statusCode = 422
          throw new Error("Fill in the fields 'name', 'email' e 'password'")
       }
       if (!email.includes("@") ) {
          throw new Error("The email field needs an '@'")
       }
 
       if ( password.length < 6 ) {
         throw new Error("Password must have at least 6 characters")
       }
 
       const [teacherUser] = await connection('teacher_users')
          .where({ email, name })
 
       if (teacherUser) {
          res.statusCode = 409
          throw new Error('Name or Email already registered')
       }
 
       const id: string = generateId();
 
       const newTeacher: teacherUser = { id, name, email, password: createHash(password) }
 
       await connection('teacher_users')
          .insert(newTeacher)
 
       const token: string = generateToken(
          {
             id: newTeacher.id
          }
       )
 
       res.status(201).send({ token })
 
    } catch (error: any) {
       res.status(400).send({ message: error.message})
 
    }
 }