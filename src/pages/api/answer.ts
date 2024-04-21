// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { postAnswer } from "@/service/answer";
import type { NextApiRequest, NextApiResponse } from "next";

function getAnswerInfo(reqBody: any) {
  const answerList: any = [];
  Object.keys(reqBody).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: reqBody[key],
    });
  });
  return {
    questionId: reqBody.questionId || "",
    answerList,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    //不是post的话返回错误
    res.status(200).json({ errno: -1, msg: "Method错误" });
  }
  //获取格式化表单数据
  const answerInfo = getAnswerInfo(req.body);
  console.log(answerInfo);

  try {
    //提交到服务端 MOCK
    const resData = await postAnswer(answerInfo);
    console.log(resData);

    if (resData.errno == 0) {
      //提交成功
      res.redirect("/success");
    } else {
      res.redirect("/fail");
    }
  } catch (err) {
    res.redirect("/fail");
  }
}
