import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData, authenticationData } from "../services/authenticator";
import { generateId } from "../services/idGenerator";
import { quizz } from "../types";

export default async function createQuizz(
   req: Request,
   res: Response
): Promise<void> {
   try {    
        const { question, correct, incorrect_1, incorrect_2, incorrect_3 } = req.body

        const token = req.headers.authorization as string;
        const verifiedToken: authenticationData = getTokenData(token);

        if(!verifiedToken){
            res.statusCode = 403
            res.statusMessage = "Você não está logado"
            throw new Error()
        }


        if ( !question || !correct || !incorrect_1 || !incorrect_2 || !incorrect_3 ) {
            res.statusCode = 422
            throw new Error("Fill in the fields 'question', 'answer correct', 'answer incorrect 1, 'answer incorrect 2', ' e ''answer incorrect 3'")
        }
      
        const [quizz] = await connection('quizz')
            .where({ question })

        if (quizz) {
            res.statusCode = 409
            throw new Error('Question already registered')
        }

        const id: string = generateId();

        const newQuestion: quizz = { id, question, correct, incorrect_1, incorrect_2, incorrect_3 }
 
        await connection('quizz')
           .insert(newQuestion)
  

        let message = "Question created successfully"

        res.status(201).send({ message,  newQuestion })
        

   } catch (error: any) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
   }
}