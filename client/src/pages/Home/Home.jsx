import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import { useState } from "react"

const Home = () => {

  const [category, setCategory] = useState("all");
  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home