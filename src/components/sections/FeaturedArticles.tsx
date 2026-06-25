type FeaturedArticle = {
  _id: string
  title: string
  description: string
  order: number
}
type Props = {
  articles: FeaturedArticle[]
}
export function FeaturedArticles({ articles }: Props) {
  if (!articles || articles.length === 0) return null
  return (
    <section className="py-[48px] px-[36px] border-t border-cobalt/10">
      <div className="grid grid-cols-3 gap-[24px]">
        {articles.map((article) => (
          <div
            key={article._id}
            className="flex flex-col gap-[12px] p-[24px] rounded-[12px] border border-cobalt/15 bg-white/60 hover:border-cobalt/40 transition-colors"
          >
            <h3 className="text-[15px] font-semibold text-glossy-black leading-snug">
              {article.title}
            </h3>
            <p className="text-[13px] text-glossy-black/85 leading-relaxed flex-1">
              {article.description}
            </p>
            <button className="mt-[8px] text-[12px] font-medium text-cobalt hover:text-cobalt/70 transition-colors text-left">
              Read more →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
