import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getnewsDetail } from "@/app/_libs/microcms";
import styles from "./page.module.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const data = await getnewsDetail(params.slug);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
