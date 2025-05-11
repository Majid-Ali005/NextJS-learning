import Feed from "@components/Feed";
// iss trha k import k liye mene jsonconfig.json se frward slash hataya hy.

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="  text-center">
        Discover & Share
        <br />

        A.I Powered Prompts

      </h1>
      <center>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum odio fuga at. Odio deserunt dignissimos ullam, vitae voluptas dolorem
        </p>
      </center>
      <Feed />
      {/* or yaha pr phir mene Feed Component ko apply kiya howa hy etc. */}
    </section>
  )
}

export default page