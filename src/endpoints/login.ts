import { Request, Response } from "express"
import connection from "../connection"
import { generateToken } from "../services/authenticator"
import { compareHash } from "../services/hashManager"


export default async function login(
    req: Request,
    res: Response
 ): Promise<void> {
    try {
 
       const { email, password } = req.body
 
       if ( !email || !email.includes("@") ) {
          throw new Error("Fill the field 'email' or add a '@")
       }
       
       if ( !password ) {
         throw new Error("Fill the field 'password'")
      }
 
      const queryResult = await connection.raw (`
         SELECT * from teacher_users
         where email = "${email}";
     `)
     const teacherUser = queryResult[0][0];
 
       if (!teacherUser) {
          throw new Error('User not found')
       }
       const passwordIsCorrect: boolean = compareHash(password, teacherUser.password)
 
       if(!passwordIsCorrect) {
          throw new Error ("Password is incorrect")
       }
 
     const token: string = generateToken(
         {
            id: teacherUser.id,
         }
     );  
    
       res.status(200).send({ token })
 
    } catch (error: any) {
       res.status(400).send({ message: error.message})
 
    }
 }