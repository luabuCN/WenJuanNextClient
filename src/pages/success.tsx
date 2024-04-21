import PageWrapper from "@/components/pageWrapper";

type PropsType = {
  info: string;
};

export default function Success(props: PropsType) {
  return (
    <>
      <PageWrapper title="提交成功">
        <h1>成功</h1>
        <p>问卷提交成功</p>
      </PageWrapper>
    </>
  );
}
