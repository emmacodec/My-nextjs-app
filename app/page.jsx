import Feed from "@components/feed";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max.md:hidden" />
        <span className="orange_gradient text-center">
          AI Powered Graphics(prompts)
          </span>
      </h1>
      <p className="desc text-center">
        AI-photo graphics is an open source AI graphics(prompts) 
        tool for modern world to discover, 
        create and share creative graphics(prompts).
      </p>

      <Feed />
    </section>
  )
}

export default HomePage;
