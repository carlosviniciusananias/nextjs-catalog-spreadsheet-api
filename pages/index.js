import Home from '../components/Home'

export async function getServerSideProps() {
  const datas = await fetch(`http://localhost:3000/api/phones`)
  .then((res) => {
    if(res.ok) {
      return res.json();
    }
  })
  .then((res) =>{
    return res
  })

  return {
    props: {
      phones: datas.phones
    }
  }
}
 
export default Home;