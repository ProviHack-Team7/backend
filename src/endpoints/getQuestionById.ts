import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData, authenticationData } from "../services/authenticator";

import { quizz } from "../types";


export default async function getQuestionById(
   req: Request,
   res: Response
): Promise<void> {
   try {    
        const token = req.headers.authorization as string;
        const verifiedToken: authenticationData = getTokenData(token);

        const { id } = req.params

        if(!verifiedToken){
            res.statusCode = 403
            res.statusMessage = "Você não está logado"
            throw new Error()
        }

        let message = "Success!"
      
        const questionResult: any = await connection("quizz")
            .select("*")
            .where({ id })

        if (!questionResult[0]) {
            res.statusCode = 404
            message = "Question not found"
            throw new Error(message)
        }

        const question: quizz = {
            id: questionResult[0].id,
            question: questionResult[0].question,
            correct: questionResult[0].correct,
            incorrect_1: questionResult[0].incorrect_1,
            incorrect_2: questionResult[0].incorrect_2,
            incorrect_3: questionResult[0].incorrect_3,
        }
        

        res.status(200).send({ message, questionResult })
        

   } catch (error: any) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
   }
}