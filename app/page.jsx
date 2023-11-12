// The home page of the application 
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col" >
        <h1 className="head_text text-center">Find and Create</h1>
        <br className="max-md:hidden"/>
        <span className="orange_gradient">AI-powererd Prompts</span>

        <p className="desc text-center">prompt-generator is an open soure tool that help you discover the right prompts for specific tasks</p>

        <Feed />
    </section> 
    
  )
}

export default Home