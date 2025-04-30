import Image from "next/image";
import styles from "./page.module.css";

// Next.jsでは@を使うことで絶対パスでファイルを参照
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  //JavaScriptの定数や式などを書くことができる
  // const name = "世界";

  // HTMLのようなマークアップを書くことができる
  // JavaScriptを書いたり、参照する際には{}で囲む

  // 表示件数の絞り込み
  // const sliceData = data.contents.slice(0, 2);
  // const sliceData: News = [];
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    // フラグメント
    <>
      <section className={styles.top}>
        <div>
          {/* CSS moduleをクラスに読み込む */}
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテクニックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        {/* レイアウト・余白はdivでスタイル */}
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
