export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#292929]">
      {/* Decorative border */}
      <div className="w-screen h-3 bg-[#70aba6]"></div>

      <div className="mx-auto max-w-225 px-6 py-15 ms:px-10 ms:py-24">

        {/* Header */}
        <header className="mb-15 ms:mb-32">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-[#5F8F8B]">
            PORTFOLIO
          </p>

          <h1 className="text-5xl font-bold tracking-tight ms:text-7xl">
            Tomomi
          </h1>

          <p className="mt-4 text-lg tracking-wide text-[#6B6B6B] ms:text-xl">
            Frontend Engineer
          </p>
        </header>

        {/* About */}
        <section className="mb-15 ms:mb-32">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-sm font-medium tracking-widest text-[#5F8F8B]">
              01
            </span>
            <h2 className="text-2xl font-semibold tracking-tight">
              About
            </h2>
          </div>

          <div className="max-w-175 space-y-5 text-[15px] leading-8 text-[#444] ms:text-base">
            <p>
              <span className="text-[18px] font-semibold text-[#6faea9]">紙媒体のデザインからWeb制作へ</span>と仕事の領域を広げ、<br />現在は<span className="text-[18px] font-semibold text-[#6faea9]">フロントエンドエンジニアとして、Webアプリケーションの制作</span>に取り組んでいます。
            </p>
            <p>
              Web業界に入る前は、チラシやハガキなど紙媒体のデザインに携わっていました。その後、企業サイトのWebページデザインを担当するようになり、デザインだけでなくマークアップにも携わるようになりました。</p>
            <p>
              これまでに、大手携帯キャリアのWebサイトや株式上場企業の商品サイト・商品事例ページなど、
              <span className="text-[18px] font-semibold text-[#6faea9]">企業向けWebサイトの制作を経験</span>しています。
            </p>  
            <p>
              JavaScriptを使用した制作にも携わり、<span className="text-[18px] font-semibold text-[#6faea9]">選択肢に応じて表示内容を切り替え、ユーザーが必要な情報へスムーズにたどり着けるページを制作</span>してきました。
            </p>
            <p>
              現在は、これまでのWeb制作経験をベースに、React、TypeScript、Next.jsなどのフロントエンド技術を学びながら、実際にWebアプリケーションを制作しています。
            </p>
            {/* <p>
              Web業界に入る前は、
              <span className="text-[18px] font-semibold text-[#6faea9]">紙のデザイン</span>
              に携わっていました。
            </p>
            <p>
              その後、
              <span className="text-[18px] font-semibold text-[#6faea9]">Webデザイン</span>
              を担当するようになり、
              デザインだけでなく
              <span className="text-[18px] font-semibold text-[#6faea9]">マークアップ</span>
              にも携わるようになりました。
            </p>
            <p>
              <span className="text-[18px] font-semibold text-[#6faea9]">JavaScriptを使用したWebサイト制作</span>
              や、派遣社員として
              企業サイト・商品サイトなどの制作を経験しています。
            </p>
            <p>
              現在は、これまでのWeb制作経験をベースに、
              React、TypeScript、Next.jsなどのフロントエンド技術を学びながら、
              実際に<span className="text-[18px] font-semibold text-[#6faea9]">Webアプリケーションを制作</span>しています。
            </p> */}
          </div>
        </section>


        {/* Skills */}
        <section className="mb-15 ms:mb-32">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-sm font-medium tracking-widest text-[#5F8F8B]">
              02
            </span>
            <h2 className="text-2xl font-semibold tracking-tight">
              Skills
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Zustand",
              "Git",
              "Github"
            ].map((skill) => (
              <span
                key={skill}
                className="border border-[#D6D3CC] bg-white px-4 py-2 text-sm tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>


        {/* Portfolio */}
        <section className="mb-15 ms:mb-32">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-sm font-medium tracking-widest text-[#5F8F8B]">
              03
            </span>
            <h2 className="text-2xl font-semibold tracking-tight">
              Portfolio
            </h2>
          </div>

          <div className="border border-[#D6D3CC] bg-white p-7 ms:p-10">

            <p className="mb-3 text-sm font-medium tracking-[0.15em] text-[#5F8F8B]">
              PROJECT 01
            </p>

            <h3 className="text-3xl font-bold tracking-tight ms:text-4xl">
              Workstack
            </h3>

            <p className="mt-2 text-[#6B6B6B]">
              Project Management App
            </p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs tracking-wide text-[#6B6B6B]">
              <span>React</span>
              <span>/</span>
              <span>TypeScript</span>
              <span>/</span>
              <span>Next.js</span>
              <span>/</span>
              <span>Zustand</span>
              <span>/</span>
              <span>Git</span>
              <span>/</span>
              <span>Github</span>
            </div>

            <p className="mt-8 text-[15px] leading-7 text-[#444]">
              プロジェクトの追加・編集・削除、検索、ステータス変更、
              並び替えなどを実装した<br />プロジェクト管理アプリです。<br />
              サンプルですのでデータ保持なしでお楽しみいただけます。
            </p>

            <div className="mt-8">
              <a
                href="/projects/"
                className="inline-flex items-center gap-2 text-[16px] font-medium tracking-wide text-[#1c45ce] transition-opacity hover:opacity-60"
              >
                View Project
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>


        {/* GitHub */}
        <section className="mb-15 ms:mb-32">
          <div className="mb-8 flex items-baseline gap-4">
            <span className="text-sm font-medium tracking-widest text-[#5F8F8B]">
              04
            </span>
            <h2 className="text-2xl font-semibold tracking-tight">
              GitHub
            </h2>
          </div>

          <a
            href="https://github.com/tomomap/portfolio"
            target="_blank"
            className="text-xl font-medium underline decoration-[#1c45ce] decoration-1 underline-offset-8 transition-opacity hover:opacity-60"
          >
            GitHub Repository
          </a>
        </section>


        {/* Footer */}
        <footer className="border-t border-[#D6D3CC] pt-6 text-right text-xs tracking-wide text-[#888]">
          最終更新日：2026年9月
        </footer>

      </div>
    </main>
  );
}
