import PageWrapper from "@/components/pageWrapper";
import Head from "next/head";

type PropsType = {
  info: string;
};

export default function Fail(props: PropsType) {
  return (
    <>
      <PageWrapper title="提交失败">
        <h1>失败</h1>
        <p>问卷提交失败</p>
      </PageWrapper>
    </>
  );
}
