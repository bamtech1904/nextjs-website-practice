import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  //JavaScriptの定数や式などを書くことができる
  // const name = "世界";

  // HTMLのようなマークアップを書くことができる
  // JavaScriptを書いたり、参照する際には{}で囲む
  return (
    <section className={styles.top}>
      <div>
        {/* CSS moduleをクラスに読み込む */}
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテクニックカンパニーです。
        </p>
      </div>
      <img className={styles.bgimg} src="/img-mv.jpg" alt="" />
    </section>
  );
}
